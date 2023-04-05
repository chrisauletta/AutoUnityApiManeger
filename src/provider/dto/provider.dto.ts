import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Provider } from '../provider.entity';
import { ProviderCreateDto } from './providerCreate.dto';


export class ProviderDto {

    @ApiProperty()
    readonly provider_name:string


    @ApiProperty()
    readonly seller:string

    @ApiProperty()
    readonly telephone:string

    @ApiProperty()
    readonly street:string

    @ApiProperty()
    readonly district:string

    @ApiProperty()
    readonly city:string

    @ApiProperty()
    readonly state:string

    @ApiProperty()
    readonly zip_code:string

    @ApiProperty()
    readonly number:string

    @ApiProperty()
    readonly note:string
 
    constructor(provider: ProviderCreateDto) {
        this.provider_name = provider.providerName
        this.seller = provider.seller
        this.telephone = provider.telephone
        this.street = provider.street
        this.district = provider.district
        this.city = provider.city
        this.state = provider.state
        this.zip_code = provider.zipCode
        this.number = provider.number
        this.note = provider.note
    }
}
