 import { Exclude, Expose } from "class-transformer";
// import { IsNotEmpty } from "class-validator";
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class StatusBudget extends Model<StatusBudget>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    nome: string;

}