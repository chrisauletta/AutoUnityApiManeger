import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../../user/user.service';
import { Company } from './../../company/company.entity';
import { companyProviders } from './../../company/company.providers';

@Injectable()
export class AuthService { 

    constructor(private usersService: UsersService,
                private jwtService: JwtService ){

    }

async validateUser(userLogin: string, userPassword: string){
    const user = await this.usersService.getByLogin(userLogin);
    const crypto = require('crypto');
    userPassword = crypto.createHash('sha256').update(userPassword).digest('hex');
    if(user && user.password == userPassword){
        const {id, nome, login, companyId} = user;
        return {id, nome, login, companyId};
    }
    return null;
}

async login(user: any) {
    const payload = { login: user.login, id: user.id , nome: user.nome, companyId: user.companyId};
    return {
      access_token: this.jwtService.sign(payload),
      name: user.nome,
      companyId: user.companyId
    };
  }

}
