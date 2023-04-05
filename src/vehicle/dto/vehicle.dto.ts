import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../../customer/customer.entity';
import { Vehicle } from '../vehicle.entity';

export class VehicleDto {
    
    @ApiProperty()
    readonly plate:string

    @ApiProperty()
    readonly brand:string

    @ApiProperty()
    readonly model:string

    @ApiProperty()
    readonly year:string

    @ApiProperty()
    readonly color:string

    @ApiProperty()
    readonly customerId:number
 
    constructor(vehicle: Vehicle) {
        this.plate = vehicle.plate,
        this.brand = vehicle.brand,
        this.model = vehicle.model,
        this.year = vehicle.year,
        this.color = vehicle.color,
        this.customerId = vehicle.customerId
    }
}
