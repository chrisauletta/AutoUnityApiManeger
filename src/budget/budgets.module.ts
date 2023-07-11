import { Module } from '@nestjs/common';
import { BudgetsController } from './budgets.controller';
import { BudgetsService } from './budgets.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Budget } from './entitys/budget.entity';
import { budgetsProviders } from './budgets.providers';
import { StatusBudget } from './entitys/statusBudget.entity';
@Module({
    imports:[SequelizeModule.forFeature([StatusBudget, Budget])],
    controllers:[BudgetsController],
    providers:[BudgetsService, ...budgetsProviders]
})

export class BudgetsModule {}