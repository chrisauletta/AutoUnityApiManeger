import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { VehicleDto } from './dto/vehicle.dto';
import { VehicleCreateDto } from './dto/vehicleCreate.dto';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehiclesService extends BaseService<Vehicle>{
    constructor(
        //@Inject('VehiclesRepository')
        @Inject('VehiclesRepository')
        private readonly vehiclesRepository: typeof Vehicle,
    ){
        super(vehiclesRepository);
    }

    // async findAll(){
    //     return this.vehiclesRepository.findAll<Vehicle>()
    // }

    async findByCustomerId(customerId: number){
        return await this.vehiclesRepository.findAll<Vehicle>({
            where:{
                customerId:customerId
            }
        })
    }

    // async create(vehicleCreateDto: VehicleCreateDto){
    //     console.log(vehicleCreateDto);
    //    return await Vehicle.create(vehicleCreateDto);
    // }
}
