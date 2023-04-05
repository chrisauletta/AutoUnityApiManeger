
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { VehiclesService } from './vehicles.service';
import { VehicleCreateDto } from './dto/vehicleCreate.dto';
import { VehicleDto } from './dto/vehicle.dto';
import { Vehicle as VehicleEntity} from './vehicle.entity';
import { BaseController } from '../base/base.controller';

@Controller('vehicles')
@ApiTags('vehicles')
export class VehiclesController extends BaseController<VehicleEntity>{
    constructor(private readonly vechiclesServices: VehiclesService){

        super(vechiclesServices);
    }

    // @Get()
    // @ApiOkResponse({type: [VehicleDto]})
    // findAll():Promise<VehicleDto[]>{
    //     return this.vechiclesServices.findAll();
    // }

    @Get('findByCustomerId/:id')
    @ApiOkResponse({type: [VehicleDto]})
    findByCustomerId(@Param() params):Promise<VehicleDto[]>{
        return this.vechiclesServices.findByCustomerId(params.id);
    }

    // @Post()
    // @ApiCreatedResponse({ type: VehicleEntity })
    // @ApiBearerAuth()
    // create(
    //     @Body() vehicleDto: VehicleCreateDto,
    // ): Promise<VehicleEntity> {
    //     //console.log(vehicleDto);
    //    return this.vechiclesServices.create(vehicleDto);
    // }
}
