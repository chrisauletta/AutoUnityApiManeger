import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { extname } from 'path';
import { promisify } from 'util';
import { unlink } from 'fs';

const unlinkAsync = promisify(unlink);

@Injectable()
export class Helper {

    managerFilter(filter, value, table){
        var arrayFilter = [];
        arrayFilter["$"+table+"."+filter+"$"] = value;
        return Object.assign({}, arrayFilter);
    }

    static customFilename(ext: string) {
        const randomName = Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');
    
        //const nameFile = cb(null, `${randomName}${extname(file.originalname)}`);
        const nameFile = randomName+'.'+ext;
    
        return nameFile;
      }
    
      static async removeFile(file: string) {
        try {
          await unlinkAsync(file);
        } catch (err) {
          throw new Error('Arquivo não encontrado');
        }
        return true;
      }

}