import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Customer } from '../customer.entity';

export class CustomerCreateDto {


    @ApiProperty()
    @IsNotEmpty({
        message:"Filtro Obrigatório"
    })
    readonly name:string;

    @ApiProperty()
    @IsNotEmpty({
        message:"Filtro Obrigatório"
    })
    readonly document:string;

    @ApiProperty()
    readonly document_type:string;

    @ApiProperty()
    readonly telephone:string;

    @ApiProperty()
    readonly cell:string;

    @ApiProperty()
    readonly email:string;

    @ApiProperty()
    readonly street:string;

    @ApiProperty()
    readonly district:string;

    @ApiProperty()
    readonly city:string;

    @ApiProperty()
    readonly state:string;

    @ApiProperty()
    readonly zip_code:string;

    @ApiProperty()
    readonly number:string;

    @ApiProperty()
    readonly complement:string;

    @ApiProperty()
    readonly note:string;

}













