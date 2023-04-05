import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company } from './company.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { companyProviders } from './company.providers';

@Module({
    imports:[SequelizeModule.forFeature([Company])],
    controllers:[CompanyController],
    providers:[CompanyService, ...companyProviders]
})

export class CompanyModule {}