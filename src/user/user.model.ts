// import { Exclude, Expose } from "class-transformer";
// import { IsNotEmpty } from "class-validator";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";

@Table
export class User extends BaseEntity{
    @Column({
        type: DataType.STRING(200),
        allowNull:false, 
    })
    nome: string;

    @Column({
        type: DataType.STRING(200),
        allowNull:false, 
    })
    login: string;

    @Column({
        type: DataType.STRING(500),
        allowNull:false, 
    })
    password: string;

}