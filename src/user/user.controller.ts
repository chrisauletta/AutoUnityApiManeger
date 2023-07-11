import {Controller, Get, Param, Post, Body, Put, Delete} from "@nestjs/common"
import { User } from "./user.model";
import { UsersService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private usersService: UsersService){

    }

    @Get()
    async getUsers(): Promise<User[]>{
        return this.usersService.obterTodos();
    }

    @Get(':id')
    async getUserById(@Param() params): Promise<User>{
        return this.usersService.obterUm(params.id);
    }

    @Post('/email')
    async getUserByEmail(@Body() user): Promise<User>{
        return this.usersService.getByLogin(user.login);
    }

    @Post()
    async store(@Body() user){
       return this.usersService.criar(user);
    }

    @Put()
    async edit(@Body() user): Promise<[number]> {
        return this.usersService.alterar(user);
    }

    @Delete(':id')
    async destroy(@Param() params){
        this.usersService.apagar(params.id);
    }
}