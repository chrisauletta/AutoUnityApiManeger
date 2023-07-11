import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";

@Table
export class Service extends BaseEntity{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column({
        type: DataType.STRING(60),
        allowNull:false,
    })
    name:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    note:string;

    @Column({
        type: DataType.DOUBLE(10,2),
        allowNull:true, 
    })
    value:number;

}