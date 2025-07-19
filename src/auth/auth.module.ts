import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [] /* Importação de outros módulos */,
  controllers: [AuthController] /* Controllers pertencentes a este módulo */,
  providers: [AuthService] /* Providers (serviços) usados neste módulo */,
  exports: [] /* Torna estes serviços visíveis para outros módulos */,
})
export class AuthModule {}
