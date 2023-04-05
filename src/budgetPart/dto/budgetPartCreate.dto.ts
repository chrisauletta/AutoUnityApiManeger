import { ApiProperty } from '@nestjs/swagger';
import { BudgetPart } from '../budgetPart.entity';

export class BudgetPartCreateDto {
    
    @ApiProperty()
    readonly budgetId:number

    @ApiProperty()
    readonly partId:number

    @ApiProperty()
    readonly quantity:number

    @ApiProperty()
    readonly value:number
 
}
