import { ApiProperty } from '@nestjs/swagger';
import { BudgetService} from '../budgetService.entity';

export class BudgetServiceDto {
    
    @ApiProperty()
    readonly id:number

    @ApiProperty()
    readonly budgetId:number

    @ApiProperty()
    readonly serviceId:number

    @ApiProperty()
    readonly value:number

    @ApiProperty()
    readonly nameService:string
 
    constructor(budgetService: BudgetService) {
        this.id = budgetService.id;
        this.budgetId = budgetService.budgetId;
        this.serviceId = budgetService.serviceId;
        this.value = budgetService.value;
        this.nameService = budgetService.service.name;
    }
}
