import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { ServiceDto } from './dto/service.dto';
import { Service } from './service.entity';

@Injectable()
export class ServicesService extends BaseService<Service>{
    constructor(
        @Inject('ServicesRepository')
        private readonly servicesRepository: typeof Service,
    ){
        super(servicesRepository);
    }

    // async findAll(){
    //     return this.servicesRepository.findAll<Service>()
    // }

    // async create(serviceDto: ServiceDto){
    //    return await this.servicesRepository.create(serviceDto);
    //     // const vehicle = new Vehicle();
    //    // return vehicle.create(VehicleDto);
    // }
}
