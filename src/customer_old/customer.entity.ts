 import { Exclude, Expose } from "class-transformer";
// import { IsNotEmpty } from "class-validator";
import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Vehicle } from "../vehicle/vehicle.entity";

@Table
export class Customer extends Model<Customer>{
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
    document:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
        field: 'document_type',
    })
    documentType:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    telephone:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    cell:string;

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
        field: 'zip_code',
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

    @HasMany(() => Vehicle)
    posts: Vehicle[];
}