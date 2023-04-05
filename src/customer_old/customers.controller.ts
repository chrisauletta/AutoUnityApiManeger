
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FilterDto } from '../helper/filter.dto';
import { Customer as CustomerEntity } from './customer.entity';
import { CustomersService } from './customers.service';
import { CustomerDto } from './dto/customer.dto';
import { CustomerCreateDto } from './dto/customerCreate.dto';
import { CustomerUpdateDto } from './dto/customerUpdate.dto';

@Controller('customers')
@ApiTags('customers')
export class CustomersController {
    constructor(private readonly customersServices: CustomersService){}

    @Get()
    @ApiOkResponse({type: [CustomerEntity]})
    findAll():Promise<CustomerEntity[]>{
        return this.customersServices.findAll();
    }

    @Get('find')
    @ApiOkResponse({type: [CustomerEntity]})
    findByParameter(@Query() query: FilterDto){
        return this.customersServices.findByParameter(query.column, query.value, query.table, query.search);
    }

    @Post()
    @ApiCreatedResponse({ type: CustomerEntity })
    @ApiBearerAuth()
    create(
        @Body() customertDto: CustomerCreateDto,
    ): Promise<CustomerEntity> {
        return this.customersServices.create(customertDto);
    }

    @Put()
    @ApiCreatedResponse({ type: CustomerEntity })
    @ApiBearerAuth()
    async edit(
        @Body() customertDto: CustomerUpdateDto,
    ) {
        return this.customersServices.edit(customertDto);
    }

    @Delete(':id')
    async destroy(@Param() params){
        this.customersServices.delete(params.id);
    }
}
