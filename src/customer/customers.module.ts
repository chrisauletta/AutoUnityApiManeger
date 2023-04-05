import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { customersProviders } from './customers.providers';

@Module({
    imports:[SequelizeModule.forFeature([Customer])],
    controllers:[CustomersController],
    providers:[CustomersService, ...customersProviders]
})

export class CustomersModule {}