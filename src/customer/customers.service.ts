import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Vehicle } from '../vehicle/vehicle.entity';
import { BaseService } from '../base/base.service';
import { Helper } from '../helper/helper';
import { Customer } from './customer.entity';
import { CustomerDto } from './dto/customer.dto';
import { CustomerCreateDto } from './dto/customerCreate.dto';
import { CustomerUpdateDto } from './dto/customerUpdate.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CustomersService extends BaseService<Customer> {
    constructor(
      @Inject('CustomersRepository')
       private readonly customersRepository: typeof Customer
    ){
      super(customersRepository);
    }
    async delete(id: number): Promise<void> {

      var veiculo = await Vehicle.findOne<Vehicle>({
        where:{
          customerId: id
        }
      });

      if(veiculo){
        throw new HttpException({message:"Não foi possivel excluir, existe veiculo com esse cliente", isVallid:false}, HttpStatus.INTERNAL_SERVER_ERROR);
      }

      const customer = await this.customersRepository.findByPk(id);
      customer.destroy();
    }
}


