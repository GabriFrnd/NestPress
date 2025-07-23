import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* Validação global de dados, em todas as rotas, recebidos em requisições */
  app.useGlobalPipes(
    new ValidationPipe({
      /* Remove chaves que não tem decoração do DTO */
      whitelist: true,

      /* Lança um erro caso o usuário mande uma chave que não deveria estar em um determinado local */
      forbidNonWhitelisted: true,

      /* Tenta transformar um dado */
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
