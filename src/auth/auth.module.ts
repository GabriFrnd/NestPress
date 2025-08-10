import { InternalServerErrorException, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';

import { CommonModule } from 'src/common/common.module';
import { JwtModule } from '@nestjs/jwt';

import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    CommonModule,
    JwtModule.registerAsync({
      useFactory: () => {
        const secret = process.env.JWT_SECRET;

        if (!secret) {
          throw new InternalServerErrorException('JWT_SECRET não encontrado.');
        }

        return {
          secret,
          signOptions: { expiresIn: process.env.JWT_EXPIRATION || '1d' },
        };
      },
    }),
  ] /* Importação de outros módulos */,
  controllers: [AuthController] /* Controllers pertencentes a este módulo */,
  providers: [
    AuthService,
    JwtStrategy,
  ] /* Providers (serviços) usados neste módulo */,
  exports: [] /* Torna estes serviços visíveis para outros módulos */,
})
export class AuthModule {}
