import { Injectable } from '@nestjs/common';

@Injectable()
export class Helper {

    managerFilter(filter, value, table){
        var arrayFilter = [];
        arrayFilter["$"+table+"."+filter+"$"] = value;
        return Object.assign({}, arrayFilter);
    }

}