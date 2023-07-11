import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BudgetDto } from './dto/budget.dto';
import { Budget } from './entitys/budget.entity';
import { Customer } from '../customer/customer.entity';
import { Vehicle } from '../vehicle/vehicle.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BudgetCreateDto } from './dto/budgetCreate.dto';
import { StatusBudget } from './entitys/statusBudget.entity';
import { FilterDto } from 'src/helper/filter.dto';

@Injectable()
export class BudgetsService {
  constructor(
    @Inject('BudgetsRepository')
    private readonly budgetsRepository: typeof Budget
  ) { }

  async findAll(user) {
    return await this.budgetsRepository.findAll<Budget>({
      where: {
        'company_id': user.companyId
      },
      include: [
        { model: Vehicle,
          include: [{
            model: Customer
          }]
        },
        {
          model:StatusBudget
        }
      ],
      order: [
        ['dateInput', 'DESC']
      ]
    });
    //return budgets.map(budget => new BudgetDto(budget));
  }


  async findByParameter(parameter: FilterDto, user) {
    var arrayFilter = [];
    arrayFilter["$"+parameter.table+"."+parameter.column+"$"] = parameter.value;
    var filterParameter = Object.assign({}, arrayFilter);
    var filterDeafault = {'company_id': user.companyId}
    var whereAux = [];
    whereAux.push(filterDeafault);
    var query = {};
    if(parameter.search == 'true'){
      whereAux.push(filterParameter);
    }
    query["where"] = whereAux;
    query["include"] = [
      { model: Vehicle,
        include: [{
          model: Customer
        }]
      },
      {
        model:StatusBudget
      }
    ]
    return await this.budgetsRepository.findAll(query);
  }
  
  async create(budgetDto, user) {
    budgetDto.statusId = 1;
    budgetDto.companyId = user.companyId;
    budgetDto.usuincId = user.id;
    budgetDto.usuincDt = new Date();
    
    const budget = await this.budgetsRepository.create(budgetDto);
    return budget;
  }

  async edit(id: number, body){
    var budget = await this.budgetsRepository.findByPk(id);
    console.log(body);
    budget.note = body.note
    budget.save();
  }
}
