import { Inject, Injectable } from '@nestjs/common';
import { Helper } from '../helper/helper';
import { Customer } from './customer.entity';
import { CustomerDto } from './dto/customer.dto';
import { CustomerCreateDto } from './dto/customerCreate.dto';
import { CustomerUpdateDto } from './dto/customerUpdate.dto';

@Injectable()
export class CustomersService {
    constructor(
        @Inject('CustomersRepository')
        private readonly customersRepository: typeof Customer,
        private helper: Helper
    ){
      
    }

    async findAll(){
        return this.customersRepository.findAll<Customer>();
    }

    async findByParameter(column, value, table, search = 'false') {
        var whereAux = this.helper.managerFilter(column, value, table);
        var query = {};
        if(search == 'true'){
          query["where"] = whereAux;
        //  query["limit"] = 2;
        }
        return this.customersRepository.findAll<Customer>(query);
      }//where: {id:2},

    async create(customerDto: CustomerDto){
        return await Customer.create(customerDto);
    }

    async edit(customerDto: CustomerUpdateDto): Promise<[number]> {
      return this.customersRepository.update(customerDto, {
          where:{
              id: customerDto.id
          }
      });
    }

    async delete(id: number) {
        const customer: Customer = await this.customersRepository.findByPk(id);
        customer.destroy().then(() => {
            console.log("teste");
        }).catch((err) => {
            console.log(err.message);
        });
    }
}
