import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Part } from "../parts/part.entity";
import { Budget } from "../budget/budget.entity";
import { BaseEntity } from "../base/base.entity";

@Table
export class BudgetPart extends BaseEntity{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => Budget)
    @Column({
        type: DataType.BIGINT,
        field: 'budget_id',
    })
    budgetId:number;

    @ForeignKey(() => Part)
    @Column({
        type: DataType.BIGINT,
        field: 'part_id',
    })
    partId:number;

    @Column({
        type: DataType.INTEGER,
        allowNull:true,
    })
    quantity:number;

    @Column({
        type: DataType.DOUBLE(10,2),
        allowNull:true, 
    })
    value:number;

    @BelongsTo(() => Part)
    part: Part;

    @BelongsTo(() => Budget)
    budget: Budget;
}

