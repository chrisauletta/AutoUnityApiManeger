//import { Model } from "sequelize";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey } from "sequelize-typescript";
import { User } from "../user/user.model";
import { Company } from "../company/company.entity";

export class BaseEntity extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => Company)
    @Column({
        type: DataType.BIGINT,
        allowNull:true,
        field:"company_id"
    })
    companyId:string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.BIGINT,
        allowNull:true,
        field:"usuinc_id"
    })
    usuincId:string;

    @Column({
        type: DataType.DATE,
        allowNull:true,
        field:"usuinc_dt"
    })
    usuincDt:string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.BIGINT,
        allowNull:true,
        field:"usualt_id"
    })
    usualtId:string;

    @Column({
        type: DataType.DATE,
        allowNull:true,
        field:"usualt_dt"
    })
    usualtDt:string;

    @BelongsTo(() => Company)
    company: Company;

    @BelongsTo(() => User)
    user: User;
}