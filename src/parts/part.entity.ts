import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";
import { Provider } from "./../provider/provider.entity";

@Table
export class Part extends BaseEntity{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column({
        type: DataType.STRING(60),
        allowNull:false,
    })
    name:string;

    @ForeignKey(() => Provider)
    @Column({
        type: DataType.BIGINT,
        field: 'provider_id',
    })
    providerId:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    type:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    maker:string;

    @Column({
        type: DataType.DOUBLE(10,2),
        allowNull:true, 
    })
    value:string;

    @BelongsTo(() => Provider)
    provider: Provider;
}