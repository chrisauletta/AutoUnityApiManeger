import { Module } from '@nestjs/common';
import { BudgetsController } from './budgets.controller';
import { BudgetsService } from './budgets.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Budget } from './budget.entity';
import { budgetsProviders } from './budgets.providers';
@Module({
    imports:[SequelizeModule.forFeature([Budget])],
    controllers:[BudgetsController],
    providers:[BudgetsService, ...budgetsProviders]
})

export class BudgetsModule {}