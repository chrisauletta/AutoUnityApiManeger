import { Module } from '@nestjs/common';
import { PartsController } from './parts.controller';
import { PartsService } from './parts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Part } from './part.entity';
import { partsProviders } from './parts.providers';
@Module({
    imports:[SequelizeModule.forFeature([Part])],
    controllers:[PartsController],
    providers:[PartsService, ...partsProviders]
})

export class PartsModule {}