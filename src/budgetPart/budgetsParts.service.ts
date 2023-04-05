import {  Injectable, ParseBoolPipe } from '@nestjs/common';
import { BudgetPartCreateDto } from './dto/budgetPartCreate.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BudgetPart } from './budgetPart.entity';
import { Part } from '../parts/part.entity';
import { BudgetPartDto } from './dto/budgetPart.dto';

@Injectable()
export class BudgetsPartsService {
  constructor(
    @InjectModel(BudgetPart)
    private budgetPartModel: typeof BudgetPart,
  ) { }

  async findAll(budgetId: number) {
    const budgetPart = await this.budgetPartModel.findAll<BudgetPart>({
      where:{
        budgetId:budgetId
      },
      include:{
        model: Part
      }
    });
    return budgetPart.map(budget => new BudgetPartDto(budget));
  }

  async create(budgetPart){
    return await this.budgetPartModel.create(budgetPart);
  }

  async update(budgetPart){
    console.log(budgetPart);
    return await this.budgetPartModel.update(budgetPart, {
        where:{
            id: budgetPart.id
        }
    });
  }

  async destroy(budgetPartId: number){
    return Boolean(await this.budgetPartModel.destroy({
      where:{id:budgetPartId}
    }));
  }
}
