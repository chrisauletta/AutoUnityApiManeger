import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../../user/user.service';

@Injectable()
export class AuthService { 

    constructor(private usersService: UsersService,
                private jwtService: JwtService ){

    }

async validateUser(userEmail: string, userPassword: string){
    const user = await this.usersService.getByEmail(userEmail);
    const crypto = require('crypto');
    userPassword = crypto.createHash('sha256').update(userPassword).digest('hex');
    if(user && user.password == userPassword){
        const {id, nome, email, companyId} = user;
        return {id, nome, email, companyId};
    }
    return null;
}

async login(user: any) {
    const payload = { email: user.email, id: user.id , nome: user.nome, companyId: user.companyId};
    return {
      access_token: this.jwtService.sign(payload),
      name: user.nome
    };
  }

}
