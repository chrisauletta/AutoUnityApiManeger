
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BudgetsService } from './budgets.service';
import { BudgetDto } from './dto/budget.dto';
import { Budget as BudgetEntity} from './budget.entity';
import { BudgetCreateDto } from './dto/budgetCreate.dto';
import { FilterDto } from '../helper/filter.dto';


@Controller('budgets')
@ApiTags('budgets')
export class BudgetsController {
    constructor(private readonly budgetsServices: BudgetsService){}

    @Get()
    @ApiOkResponse({type: [BudgetDto]})
    findAll(){
        return this.budgetsServices.findAll();
    }

    @Get('find')
    @ApiOkResponse({type: [BudgetDto]})
    findByParameter(@Query() query: FilterDto){
        return this.budgetsServices.findByParameter(query.column, query.value, query.table, query.search);
    }

    @Post()
    @ApiCreatedResponse({ type: BudgetEntity })
    @ApiBearerAuth()
    create(
//        @Body() budgetDtoParam: BudgetCreateDto,
          @Body() budgetDtoParam,
    ): Promise<BudgetEntity> {
        return this.budgetsServices.create(budgetDtoParam);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto) {
      return `This action updates a #${id} cat`;
    }
    
}
