import { BadRequestException, ParseIntPipe } from '@nestjs/common';

export class CustomParseIntPipe extends ParseIntPipe {
  constructor() {
    super({
      exceptionFactory: () =>
        new BadRequestException('O parâmetro precisa ser um número.'),
    });
  }
}
