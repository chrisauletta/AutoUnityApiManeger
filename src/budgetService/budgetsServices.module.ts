import { Module } from '@nestjs/common';
import { BudgetsServicesService } from './budgetsServices.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BudgetService } from './budgetService.entity';
import { BudgetsServicesController } from './budgetsServices.controller';
@Module({
    imports:[SequelizeModule.forFeature([BudgetService])],
    controllers:[BudgetsServicesController],
    providers:[BudgetsServicesService]
})

export class BudgetsServicesModule {}