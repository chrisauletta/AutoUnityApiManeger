
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ServicesService } from './services.service';
import { ServiceDto } from './dto/service.dto';
import { Service as PartEntity, Service} from './service.entity';
import { ServiceCreateDto } from './dto/serviceCreate.dto';
import { BaseController } from '../base/base.controller';

@Controller('services')
@ApiTags('services')
export class ServicesController extends BaseController<Service>{
    constructor(private readonly servicesServices: ServicesService){
        super(servicesServices);
    }

    // @Get()
    // @ApiOkResponse({type: [ServiceDto]})
    // findAll():Promise<ServiceDto[]>{
    //     return this.servicesServices.findAll();
    // }

    // @Post()
    // @ApiCreatedResponse({ type: PartEntity })
    // @ApiBearerAuth()
    // create(
    //     @Body() serviceDto: ServiceCreateDto,
    // ): Promise<PartEntity> {
    //     return this.servicesServices.create(serviceDto);
    // }
}
