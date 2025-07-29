import { Controller, Get, Param } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipe';

@Controller('user')
export class UserController {
  @Get(':id')
  /* '@Param()': extrai parâmetros da rota (nesse caso, 'id') */
  findOne(@Param('id', CustomParseIntPipe) id: number) {
    return `Olá, mundo! ("user.controller", ${id})`;
  }
}
