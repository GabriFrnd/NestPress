import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
  ] /* Importação de outros módulos */,
  controllers: [AppController] /* Controllers pertencentes a este módulo */,
  providers: [AppService] /* Providers (serviços) usados neste módulo */,
  exports: [] /* Torna estes serviços visíveis para outros módulos */,
})
export class AppModule {}
