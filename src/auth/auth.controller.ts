import { Controller, Post } from '@nestjs/common';

@Controller('auth') /* Controlador de rotas que inicia com '/auth' */
export class AuthController {
  @Post('login') /* 'login' responde a requisições POST para '/auth/login' */
  login() {}
}
