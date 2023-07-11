import { ApiProperty } from '@nestjs/swagger';
import { VehicleCreateDto } from 'src/vehicle/dto/vehicleCreate.dto';
import { Budget } from '../entitys/budget.entity';

export class BudgetDto {
    @ApiProperty()
    readonly id:number

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

    @ApiProperty()
    readonly note:string

    @ApiProperty()
    readonly event:string

    @ApiProperty()
    readonly vehiclePlate:string

    @ApiProperty()
    readonly vehicleBrand:string

    @ApiProperty()
    readonly vehicleModel:string

    @ApiProperty()
    readonly vehicleYear:string

    @ApiProperty()
    readonly vehicleColor:string

    @ApiProperty()
    readonly customerName:string

    @ApiProperty()
    readonly customerCell:string


    constructor(budget: Budget) {

        this.id = budget.id;
        this.vehicleId = budget.vehicleId;

        // switch (budget.status) {
        //     case "P":
        //         this.status = "Pendente";
        //         break;
        
        //     default:
        //         this.status = budget.status;
        //         break;
        // }
        
        this.situation = budget.situation;
        this.km = budget.km;
        this.dateInput = budget.dateInput;
        this.dateOut = budget.dateOut
        this.vehicleBrand = budget.vehicle.brand;
        this.vehicleModel = budget.vehicle.plate;
        this.vehicleYear = budget.vehicle.year;
        this.vehicleColor = budget.vehicle.color;
        this.customerName = budget.vehicle.customer.name;
        this.customerCell = budget.vehicle.customer.cell;

    }
}
