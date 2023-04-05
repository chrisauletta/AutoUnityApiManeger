import { ApiProperty } from '@nestjs/swagger';

export class VehicleCreateDto {
    
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
    readonly customerId:string
 
}
