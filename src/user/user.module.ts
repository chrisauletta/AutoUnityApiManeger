import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
@Module({
    imports:[SequelizeModule.forFeature([User])],
    controllers:[UserController],
    providers:[UsersService],
    exports:[UsersService]
})

export class userModule {}