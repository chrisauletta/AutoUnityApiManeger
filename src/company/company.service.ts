import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Vehicle } from '../vehicle/vehicle.entity';
import { BaseService } from '../base/base.service';
import { Company } from './company.entity';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';
import { writeFile } from 'fs';
import { Helper } from '../helper/helper';


@Injectable()
export class CompanyService extends BaseService<Company> {
    constructor(
      @Inject('CompanyRepository')
       private readonly companyRepository: typeof Company
    ){
      super(companyRepository);
    }

    async getByPk(id: number, user) {
        return Company.findOne({
          where: {
            'id': id
          }
        });

    }

    async edit(entity: Company, file: any){

        if(file.image){

          var ext = file.ext;
          if(ext == "jpg" || ext == "JPG"){
              ext = "jpeg";
          }
          const base64Image = file.image.replace('data:image/'+ext+';base64,', '');
          const imageData = Buffer.from(base64Image, 'base64');

          var fileName = Helper.customFilename(ext);
          writeFile('upload/'+fileName, imageData, (err) => {
            if (err) {
              console.log('Erro ao salvar a imagem:'+ err);
            }else{
              console.log('Imagem salva');
            }
          });
          entity.logo = fileName;
        }
        await Company.update<Company>(entity, {
          where:{
            id: entity.id
          }
        });
        return Company.findByPk(entity.id);

    }
}


