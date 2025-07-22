import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable() /* Permite que a classe seja gerenciada como um serviço injetável */
export class AuthService {
  metodo(loginDto: LoginDto) {
    return loginDto;
  }
}
