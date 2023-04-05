import { IsNotEmpty } from "class-validator"


export class FilterDto {
    
    @IsNotEmpty({
        message:"Coluna Obrigatório"
    })
    column:string

    @IsNotEmpty({
        message:"Valor Obrigatório"
    })
    value:string

    @IsNotEmpty({
        message:"Tabela Obrigatório"
    })
    table:string

    search:string
 
}
