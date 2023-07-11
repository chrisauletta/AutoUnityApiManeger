import { AuthService } from './shared/auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';
import { Controller, UseGuards, Request, Post, Param } from '@nestjs/common';

@Controller()
export class AuthController {

  constructor(
    private authService: AuthService,
  ) { }

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login/:id')
  // async login(@Param('id') id: number,@Request() req: any) {
  //   console.log("teste");
  //   return this.authService.login(id, req.user);
  // }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
