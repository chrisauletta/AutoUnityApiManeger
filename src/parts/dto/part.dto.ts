import { ApiProperty } from '@nestjs/swagger';
import { Part } from '../part.entity';

export class PartDto {
    
    @ApiProperty()
    readonly name:string

    @ApiProperty()
    readonly providerId:string

    @ApiProperty()
    readonly type:string

    @ApiProperty()
    readonly maker:string

    @ApiProperty()
    readonly value:string

 
    constructor(part: Part) {
        this.name = part.name,
        this.providerId = part.providerId,
        this.type = part.type,
        this.maker = part.maker,
        this.value = part.value
    }
}
