import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Service } from './service.entity';
import { servicesProviders } from './services.providers';
@Module({
    imports:[SequelizeModule.forFeature([Service])],
    controllers:[ServicesController],
    providers:[ServicesService, ...servicesProviders]
})

export class ServiceModule {}