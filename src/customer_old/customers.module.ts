import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './customer.entity';
import { customersProviders } from './customers.providers';
import { Helper } from '../helper/helper';
@Module({
    imports:[SequelizeModule.forFeature([Customer])],
    controllers:[CustomersController],
    providers:[CustomersService, ...customersProviders, Helper]
})

export class CustomersModule {}