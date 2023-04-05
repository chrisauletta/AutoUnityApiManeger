import { ApiProperty } from '@nestjs/swagger';

export class ServiceCreateDto {
    
    @ApiProperty()
    readonly name:string

    @ApiProperty()
    readonly note:string

    @ApiProperty()
    readonly value:number 

 
}
