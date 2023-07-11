import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
      ) {}

    async obterTodos(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async obterUm(id: number): Promise<User> {
        return this.userModel.findByPk(id);
    }

    async getByLogin(login: string): Promise<User>{
        return this.userModel.findOne({where:{login:login}});
    }

    criar(user) {
        const crypto = require('crypto');

        const text = user.password;
        const hash = crypto.createHash('sha256').update(text).digest('hex');
        user.password = hash;
        return this.userModel.create(user);
    }

    async alterar(user: User): Promise<[number]> {
        return this.userModel.update(user, {
            where:{
                id: user.id
            }
        });
    }

    async apagar(id: number) {
        const user: User = await this.obterUm(id);
        user.destroy();
    }
}