
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base/base.controller';
import { Company } from './company.entity';
import { CompanyService } from './company.service';

@Controller('company')
@ApiTags('company')
export class CompanyController extends BaseController<Company> {
    constructor(private readonly companyServices: CompanyService){
        super(companyServices);
    }
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
    // create(
    //     @Body() companytDto,
    // ) {
    //     return this.companyServices.create(companytDto);
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
