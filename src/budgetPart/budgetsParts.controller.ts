
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BudgetsPartsService } from './budgetsParts.service';
import { BudgetPartCreateDto } from './dto/budgetPartCreate.dto';
import { BudgetPart } from './budgetPart.entity';
import { BudgetPartDto } from './dto/budgetPart.dto';


@Controller('budgetsParts')
@ApiTags('budgetsParts')
export class BudgetsPartsController {
    constructor(private readonly budgetsPartServices: BudgetsPartsService){}

    @Get()
    @ApiOkResponse({type: [BudgetPartDto]})
    findAll(@Query() query):Promise<BudgetPartDto[]>{
        return this.budgetsPartServices.findAll(query.budgetId);
    }

    @Post()
    @ApiCreatedResponse({ type: BudgetPart })
    @ApiBearerAuth()
    create(
      //  @Body() budgetDto: BudgetPartCreateDto,
      @Body() budgetDto,
    ): Promise<BudgetPartCreateDto> {
        return this.budgetsPartServices.create(budgetDto);
    }

    @Put()
    @ApiCreatedResponse({ type: BudgetPart })
    @ApiBearerAuth()
    update(@Body() budgetDto){
        return this.budgetsPartServices.update(budgetDto);
    }

    @Delete(':id')
    @ApiCreatedResponse({ type: BudgetPart })
    @ApiBearerAuth()
    delete(@Param() params){
        return this.budgetsPartServices.destroy(params.id);
    }

}
