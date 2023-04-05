import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Vehicle } from '../vehicle/vehicle.entity';
import { BaseService } from '../base/base.service';
import { Company } from './company.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CompanyService extends BaseService<Company> {
    constructor(
      @Inject('CompanyRepository')
       private readonly companyRepository: typeof Company
    ){
      super(companyRepository);
    }
}


