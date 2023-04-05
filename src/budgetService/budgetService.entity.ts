import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Service } from "../service/service.entity";
import { Budget } from "../budget/budget.entity";
import { BaseEntity } from "../base/base.entity";

@Table
export class BudgetService extends BaseEntity{
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

    @ForeignKey(() => Service)
    @Column({
        type: DataType.BIGINT,
        field: 'service_id',
    })
    serviceId:number;

    @Column({
        type: DataType.DOUBLE(10,2),
        allowNull:true,
    })
    value:number;

    @BelongsTo(() => Service)
    service: Service;

    @BelongsTo(() => Budget)
    budget: Budget;
}