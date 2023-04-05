import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { PartDto } from './dto/part.dto';
import { Part } from './part.entity';

@Injectable()
export class PartsService extends BaseService<Part>{
    constructor(
        @Inject('PartsRepository')
        private readonly partsRepository: typeof Part,
    ){
        super(partsRepository);
    }


}
