import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PartCreateDto {
    
    @ApiProperty()
    readonly name:string

    @ApiProperty()
    @IsNotEmpty({
        message:"Fornecedor Obrigatório"
    })
    readonly providerId:string

    @IsNotEmpty({
        message:"Tipo Obrigatório"
    })
    @ApiProperty()
    readonly type:string

    @ApiProperty()
    readonly maker:string

    @ApiProperty()
    readonly value:string

}
