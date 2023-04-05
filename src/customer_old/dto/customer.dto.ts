import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../customer.entity';

export class CustomerDto {

    @ApiProperty()
    readonly name:string;

    @ApiProperty()
    readonly document:string;

    @ApiProperty()
    readonly document_type:string;

    @ApiProperty()
    readonly telephone:string;

    @ApiProperty()
    readonly cell:string;

    @ApiProperty()
    readonly email:string;

    @ApiProperty()
    readonly street:string;

    @ApiProperty()
    readonly district:string;

    @ApiProperty()
    readonly city:string;

    @ApiProperty()
    readonly state:string;

    @ApiProperty()
    readonly zip_code:string;

    @ApiProperty()
    readonly number:string;

    @ApiProperty()
    readonly complement:string;

    @ApiProperty()
    readonly note:string;


    constructor(customer: Customer) {
        this.name = customer.name;
        this.document = customer.document;
        this.document_type = customer.documentType;
        this.telephone = customer.telephone;
        this.cell = customer.cell;
        this.email = customer.email;
        this.street = customer.street;
        this.district = customer.district;
        this.city = customer.city;
        this.state = customer.state;
        this.zip_code = customer.zipCode;
        this.number = customer.number;
        this.complement = customer.complement;
        this.note = customer.note;
    }
}













