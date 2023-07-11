
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../user/user.decorator';
import { BaseController } from '../base/base.controller';
import { Customer, Customer as CustomerEntity } from './customer.entity';
import { CustomersService } from './customers.service';
import { CustomerDto } from './dto/customer.dto';
import { CustomerCreateDto } from './dto/customerCreate.dto';
import { CustomerUpdateDto } from './dto/customerUpdate.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { Company } from '../company/company.entity';

@Controller('customers')
@ApiTags('customers')
export class CustomersController extends BaseController<Customer> {
    constructor(private readonly customersServices: CustomersService){
        super(customersServices);
    }

    // @Get('teste')
    // async getProfile() {

    //   return await Company.findByPk(1);
    // }
    // @Get('teste')
    // @UseGuards(JwtAuthGuard)
    // getProfile(@User() user: any) {

    //   return user;
    // }
	// @Put(':id')
	// async update2(@Body() entity)  {
	//   return "teste";
	// }
    // @Get()
    // @ApiOkResponse({type: [CustomerEntity]})
    // findAll():Promise<CustomerEntity[]>{
    //     return this.customersServices.findAll();
    // }

    // @Get('find')
    // @ApiOkResponse({type: [CustomerEntity]})
    // findByParameter(@Query() query: FilterDto){
    //     return this.customersServices.findByParameter(query.column, query.value, query.table, query.search);
    // }

    // @Post()
    // @ApiCreatedResponse({ type: CustomerEntity })
    // @ApiBearerAuth()
    // create(
    //     @Body() customertDto: CustomerCreateDto,
    // ): Promise<CustomerEntity> {
    //     return this.customersServices.create(customertDto);
    // }

    // @Put('/teste')
    // @ApiCreatedResponse({ type: CustomerEntity })
    // @ApiBearerAuth()
    // async edit(
    //     @Param('id') id: number,
    // ) {
    //     return "treste";
    // }

    // @Delete(':id')
    // async destroy(@Param() params){
    //     this.customersServices.delete(params.id);
    // }
}
