
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BudgetsServicesService } from './budgetsServices.service';
import { BudgetServiceCreateDto } from './dto/budgetServiceCreate.dto';
import { BudgetService } from './budgetService.entity';
import { BudgetServiceDto } from './dto/budgetService.dto';


@Controller('budgetsServices')
@ApiTags('budgetsServices')
export class BudgetsServicesController {
    constructor(private readonly budgetsServices: BudgetsServicesService){}

    @Get()
    @ApiOkResponse({type: [BudgetServiceDto]})
    findAll(@Query() query):Promise<BudgetServiceDto[]>{
        return this.budgetsServices.findAll(query.budgetId);
    }

    @Post()
    @ApiCreatedResponse({ type: BudgetService })
    @ApiBearerAuth()
    create(
       // @Body() budgetDto: BudgetServiceCreateDto,
       @Body() budgetDto,
    ): Promise<BudgetServiceCreateDto> {
        return this.budgetsServices.create(budgetDto);
    }

    @Put()
    @ApiCreatedResponse({ type: BudgetService })
    @ApiBearerAuth()
    update(@Body() budgetDto){
        return this.budgetsServices.update(budgetDto);
    }

    @Delete(':id')
    @ApiCreatedResponse({ type: BudgetService })
    @ApiBearerAuth()
    delete(@Param() params){
        return this.budgetsServices.destroy(params.id);
    }

}
