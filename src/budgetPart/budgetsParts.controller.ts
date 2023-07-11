
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BudgetsPartsService } from './budgetsParts.service';
import { BudgetPartCreateDto } from './dto/budgetPartCreate.dto';
import { BudgetPart } from './budgetPart.entity';
import { BudgetPartDto } from './dto/budgetPart.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { User } from '../user/user.decorator';


@Controller('budgetsParts')
@ApiTags('budgetsParts')
export class BudgetsPartsController {
    constructor(private readonly budgetsPartServices: BudgetsPartsService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOkResponse({type: [BudgetPartDto]})
    findAll(@Query() query):Promise<BudgetPartDto[]>{
        return this.budgetsPartServices.findAll(query.budgetId);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiCreatedResponse({ type: BudgetPart })
    @ApiBearerAuth()
    create(
      //  @Body() budgetDto: BudgetPartCreateDto,
      @Body() budgetDto,
      @User() user: any
    ): Promise<BudgetPartCreateDto> {
        return this.budgetsPartServices.create(budgetDto, user);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    @ApiCreatedResponse({ type: BudgetPart })
    @ApiBearerAuth()
    update(@Body() budgetDto, @User() user: any){
        return this.budgetsPartServices.update(budgetDto, user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @ApiCreatedResponse({ type: BudgetPart })
    @ApiBearerAuth()
    delete(@Param() params){
        return this.budgetsPartServices.destroy(params.id);
    }

}
