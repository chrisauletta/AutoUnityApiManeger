import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const User = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.split(' ')[1]; // Obtém o token JWT do header 'Authorization'
    const jwtService = new JwtService({}); // Cria uma instância do serviço JWT

    return jwtService.decode(token); // Decodifica o token e retorna as informações do usuário
  },
);