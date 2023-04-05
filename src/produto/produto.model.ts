 import { Exclude, Expose } from "class-transformer";
// import { IsNotEmpty } from "class-validator";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Produto extends Model<Produto>{
    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    //TROCA NOME DA CHAVE
    // @Expose({
    //     name:"show"
    // })
    codigo: string;

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    // @IsNotEmpty({
    //     message:"Nome Obrigatório"
    // })
    //IMPEDE DQUE DEVOLVA O DADO
    // @Exclude({
    //     toPlainOnly: true
    // })
    nome: string;

    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull:false, 
    })
    preco: number;

}