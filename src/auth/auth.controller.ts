import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth') /* Controlador de rotas que inicia com '/auth' */
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') /* 'login' responde a requisições POST para '/auth/login' */
  /* '@Body()': extrai e injeta os dados do corpo da requisição HTTP */
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
