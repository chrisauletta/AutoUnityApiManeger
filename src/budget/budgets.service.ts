import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BudgetDto } from './dto/budget.dto';
import { Budget } from './budget.entity';
import { Customer } from '../customer/customer.entity';
import { Vehicle } from '../vehicle/vehicle.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BudgetCreateDto } from './dto/budgetCreate.dto';

@Injectable()
export class BudgetsService {
  constructor(
    @Inject('BudgetsRepository')
    private readonly budgetsRepository: typeof Budget
  ) { }

  async findAll() {
    return await this.budgetsRepository.findAll<Budget>({
      include: [
        { model: Vehicle,
          include: [{
            model: Customer
          }]
        }
      ]
    });
    //return budgets.map(budget => new BudgetDto(budget));
  }


  async findByParameter(column, value, table, search = 'false') {
    var arrayFilter = [];
    arrayFilter["$"+table+"."+column+"$"] = value;
    var whereAux = Object.assign({}, arrayFilter);
    var query = {};
    if(search){
      query["where"] = whereAux;
    }
    query["include"] = [
      { model: Vehicle,
        include: [{
          model: Customer
        }]
      }
    ]
    return await this.budgetsRepository.findAll(query);
  }
  
  async create(budgetDto) {
    return await this.budgetsRepository.create(budgetDto);
  }

}
