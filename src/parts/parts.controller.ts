
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PartsService } from './parts.service';
import { PartDto } from './dto/part.dto';
import { Part as PartEntity} from './part.entity';
import { PartCreateDto } from './dto/partCreate.dto';
import { BaseController } from '../base/base.controller';

@Controller('parts')
@ApiTags('parts')
export class PartsController extends BaseController<PartEntity>{
    constructor(private readonly partsServices: PartsService){
        super(partsServices);
    }

    // @Get()
    // @ApiOkResponse({type: [PartDto]})
    // findAll():Promise<PartDto[]>{
    //     return this.partsServices.findAll();
    // }

    // @Post()
    // @ApiCreatedResponse({ type: PartEntity })
    // @ApiBearerAuth()
    // create(
    //     @Body() budgetDto: PartCreateDto,
    // ): Promise<PartEntity> {
    //     return this.partsServices.create(budgetDto);
    // }
}
