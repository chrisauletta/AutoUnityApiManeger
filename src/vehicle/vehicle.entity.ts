import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";

import { Customer } from "../customer/customer.entity";

@Table
export class Vehicle  extends BaseEntity{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    public id: number;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.BIGINT,
        field: 'customer_id',
    })
    customerId:number;

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    plate:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    brand:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    model:string;
    
    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    year:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    color:string;

    @BelongsTo(() => Customer)
    customer: Customer;
}