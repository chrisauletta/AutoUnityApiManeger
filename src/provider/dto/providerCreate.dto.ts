import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Provider } from '../provider.entity';


export class ProviderCreateDto {

    @ApiProperty()
    readonly providerName:string

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
    readonly zipCode:string

    @ApiProperty()
    readonly number:string

    @ApiProperty()
    readonly note:string
 
}

