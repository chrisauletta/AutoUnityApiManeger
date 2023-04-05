import { ApiProperty } from '@nestjs/swagger';
import { CustomerCreateDto } from './customerCreate.dto';

export class CustomerUpdateDto extends CustomerCreateDto{

    @ApiProperty()
    readonly id:number;

    
}













