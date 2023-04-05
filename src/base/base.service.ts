import { Injectable, Inject, BadGatewayException, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { Helper } from '../helper/helper';
import { IBaseService } from '../base/IBase.service';
import { BaseEntity } from './base.entity';

@Injectable()
export class BaseService<T> {
	constructor(private readonly genericRepository) {}

  helper = new Helper();

  async getAll() {
    try{
      return this.genericRepository.findAll();
    }catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async findByParameter(column, value, table, search = 'false') {
    var whereAux = this.helper.managerFilter(column, value, table);
    var query = {};
    if(search == 'true'){
      query["where"] = whereAux;
    //  query["limit"] = 2;
    }
    try{
      return await this.genericRepository.findAll(query);
    }catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async create(entity: any, user){
      entity.companyId = user.companyId;
      entity.usuincId = user.id;
      return await this.genericRepository.create(entity).
      then((created) => {
        return created;
      });
  }

  async update(entity: any): Promise<T> {
    return this.genericRepository.update(entity, {
        where:{
            id: entity.id
        }
    });
  }

  async delete(id: number){
     const entity = await this.genericRepository.findByPk(id);
     entity.destroy();
  }
}