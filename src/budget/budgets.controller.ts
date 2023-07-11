
import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BudgetsService } from './budgets.service';
import { BudgetDto } from './dto/budget.dto';
import { Budget as BudgetEntity} from './entitys/budget.entity';
import { BudgetCreateDto } from './dto/budgetCreate.dto';
import { FilterDto } from '../helper/filter.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { User } from '../user/user.decorator';


@Controller('budgets')
@ApiTags('budgets')
export class BudgetsController {
    constructor(private readonly budgetsServices: BudgetsService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOkResponse({type: [BudgetDto]})
    findAll(@User() user: any){
        return this.budgetsServices.findAll(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('find')
    @ApiOkResponse({type: [BudgetDto]})
    findByParameter(@Query() query: FilterDto, @User() user: any){
        return this.budgetsServices.findByParameter(query, user);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiCreatedResponse({ type: BudgetEntity })
    @ApiBearerAuth()
    create(
//        @Body() budgetDtoParam: BudgetCreateDto,
          @Body() budgetDtoParam,
          @User() user: any
    ): Promise<BudgetEntity> {
        return this.budgetsServices.create(budgetDtoParam, user);
    }

    @UseGuards(JwtAuthGuard)
    @Put('edit/:id')
    update(@Param('id') id: number, @Body() body) {
      return this.budgetsServices.edit(id, body);
    }
    
}
