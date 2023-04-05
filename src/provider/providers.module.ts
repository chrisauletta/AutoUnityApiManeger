import { Module } from '@nestjs/common';
import { ProvidersController } from './providers.controller';
import { ProvidersService } from './providers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Provider } from './provider.entity';
import { providersProviders } from './providers.providers';
@Module({
    imports:[SequelizeModule.forFeature([Provider])],
    controllers:[ProvidersController],
    providers:[ProvidersService, ...providersProviders]
})

export class ProvidersModule {}