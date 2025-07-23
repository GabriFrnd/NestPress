import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':id')
  /* '@Param()': extrai parâmetros da rota (nesse caso, 'id') */
  findOne(@Param('id') id: string) {
    return `Olá, mundo! ("user.controller", ${id})`;
  }
}
