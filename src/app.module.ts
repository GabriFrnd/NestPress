import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule] /* Importação de outros módulos */,
  controllers: [AppController] /* Controllers pertencentes a este módulo */,
  providers: [AppService] /* Providers (serviços) usados neste módulo */,
  exports: [] /* Torna estes serviços visíveis para outros módulos */,
})
export class AppModule {}
