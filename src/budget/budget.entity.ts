import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";
import { Vehicle } from "../vehicle/vehicle.entity";


@Table
export class Budget  extends BaseEntity{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => Vehicle)
    @Column({
        type: DataType.BIGINT,
        field: 'vehicle_id',
    })
    vehicleId:string;

    @Column({
        type: DataType.STRING(1),
        allowNull:false,
        defaultValue:"P"
    })
    status:string;

    @Column({
        type: DataType.STRING(1),
        allowNull:false, 
        defaultValue:"A"
    })
    situation:string;

    @Column({
        type: DataType.INTEGER,
        allowNull:true, 
    })
    km:string;

    @Column({
        type: DataType.DATE,
        allowNull:true, 
    })
    dateInput:string;

    @Column({
        type: DataType.DATE,
        allowNull:true, 
    })
    dateOut:string;

    @BelongsTo(() => Vehicle)
    vehicle: Vehicle;


}