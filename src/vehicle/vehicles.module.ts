import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './vehicle.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { vehiclesProviders } from './vehicles.providers';
@Module({
    imports:[SequelizeModule.forFeature([Vehicle])],
    controllers:[VehiclesController],
    providers:[VehiclesService, ...vehiclesProviders]
})

export class VehiclesModule {}