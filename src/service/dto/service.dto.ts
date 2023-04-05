import { ApiProperty } from '@nestjs/swagger';
import { Service } from '../service.entity';

export class ServiceDto {
    
    @ApiProperty()
    readonly name:string

    @ApiProperty()
    readonly note:string

    @ApiProperty()
    readonly value:number 

 
    constructor(service: Service) {
        this.name = service.name,
        this.note = service.note,
        this.value = service.value

    }
}
