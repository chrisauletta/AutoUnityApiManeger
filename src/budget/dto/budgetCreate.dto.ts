import { ApiProperty } from '@nestjs/swagger';
import { Budget } from '../budget.entity';

export class BudgetCreateDto {
    
    @ApiProperty()
    readonly vehicleId:string

    @ApiProperty()
    readonly status:string

    @ApiProperty()
    readonly situation:string

    @ApiProperty()
    readonly km:string

    @ApiProperty()
    readonly dateInput:string

    @ApiProperty()
    readonly dateOut:string
 
}
