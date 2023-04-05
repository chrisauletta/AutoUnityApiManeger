import { ApiProperty } from '@nestjs/swagger';
import { BudgetPart } from '../budgetPart.entity';

export class BudgetPartDto {
    
    @ApiProperty()
    readonly id:number

    @ApiProperty()
    readonly budgetId:number

    @ApiProperty()
    readonly partId:number

    @ApiProperty()
    readonly quantity:number

    @ApiProperty()
    readonly value:number

    @ApiProperty()
    readonly namePart:string

    constructor(budgetPart: BudgetPart) {
        this.id = budgetPart.id;
        this.budgetId = budgetPart.budgetId;
        this.partId = budgetPart.partId;
        this.quantity = budgetPart.quantity;
        this.value = budgetPart.value;
        this.namePart = budgetPart.part.name;
    }
}
