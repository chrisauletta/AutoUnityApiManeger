import { ApiProperty } from '@nestjs/swagger';

export class BudgetServiceCreateDto {
    
    @ApiProperty()
    readonly budgetId:number

    @ApiProperty()
    readonly serviceId:number

    @ApiProperty()
    readonly value:number


}

