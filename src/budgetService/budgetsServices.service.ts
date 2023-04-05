import {  Injectable, ParseBoolPipe } from '@nestjs/common';
import { BudgetServiceCreateDto } from './dto/budgetServiceCreate.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BudgetService } from './budgetService.entity';
import { Service } from '../service/service.entity';
import { BudgetServiceDto } from './dto/budgetService.dto';

@Injectable()
export class BudgetsServicesService {
  constructor(
    @InjectModel(BudgetService)
    private budgetServiceModel: typeof BudgetService,
  ) { }

  async findAll(budgetId: number) {
    const budgetPart = await this.budgetServiceModel.findAll<BudgetService>({
      where:{
        budgetId:budgetId
      },
      include:{
        model: Service
      }
    });
    return budgetPart.map(budget => new BudgetServiceDto(budget));
  }

  async create(budgetService){
    return await this.budgetServiceModel.create(budgetService);
  }

  async update(budgetService){
    return await this.budgetServiceModel.update(budgetService, {
        where:{
            id: budgetService.id
        }
    });
  }

  async destroy(budgetServiceId: number){
    return Boolean(await this.budgetServiceModel.destroy({
      where:{id:budgetServiceId}
    }));
  }
}
