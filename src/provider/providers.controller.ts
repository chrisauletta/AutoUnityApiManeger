
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProvidersService } from './providers.service';
import { ProviderDto } from './dto/provider.dto';
import { Provider, Provider as ProviderEntity} from './provider.entity';
import { ProviderCreateDto } from './dto/providerCreate.dto';
import { BaseController } from '../base/base.controller';

@Controller('providers')
@ApiTags('providers')
export class ProvidersController extends BaseController<Provider>{
    constructor(private readonly providersServices: ProvidersService){
        super(providersServices);
    }

    // @Get()
    // @ApiOkResponse({type: [ProviderEntity]})
    // findAll():Promise<ProviderEntity[]>{
    //     return this.providersServices.findAll();
    // }

    // @Post()
    // @ApiCreatedResponse({ type: ProviderEntity })
    // @ApiBearerAuth()
    // create(
    //     @Body() providerDto: ProviderCreateDto,
    // ){
    //     return this.providersServices.create(providerDto);
    // }
}
