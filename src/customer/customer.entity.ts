 import { Exclude, Expose } from "class-transformer";
// import { IsNotEmpty } from "class-validator";
//import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";

import { Vehicle } from "../vehicle/vehicle.entity";

@Table
export class Customer extends BaseEntity{

//    private base: BaseEntity

    // constructor() {
    //     super();
    //     this.base = new BaseEntity;
    //   }


    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    name:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    document:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true,
        field: 'document_type'
    })
    documentType:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    cell:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    telephone:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    email:string;


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
        field:'zip_code'
    })
    zipCode:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    number:string;
    
    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    complement:string;
    
    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    note:string;


}