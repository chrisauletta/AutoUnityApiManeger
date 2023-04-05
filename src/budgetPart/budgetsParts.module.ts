import { Module } from '@nestjs/common';
import { BudgetsPartsService } from './budgetsParts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BudgetPart } from './budgetPart.entity';
import { BudgetsPartsController } from './budgetsParts.controller';
@Module({
    imports:[SequelizeModule.forFeature([BudgetPart])],
    controllers:[BudgetsPartsController],
    providers:[BudgetsPartsService]
})

export class BudgetsPartsModule {}