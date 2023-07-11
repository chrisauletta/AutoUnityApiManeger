import { Expose } from "class-transformer";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";
import { ProviderCreateDto } from "./dto/providerCreate.dto";

@Table
export class Provider extends BaseEntity{

    @Column({
        type: DataType.STRING(60),
        allowNull:false,
        field: 'provider_name',
    })
    providerName:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    seller:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    telephone:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    street:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    district:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    city:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    state:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
        field: 'zip_code',
    })
    zipCode:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    number:string;

    @Column({
        type: DataType.STRING(200),
        allowNull:true, 
    })
    note:string;

}