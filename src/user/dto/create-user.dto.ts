import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: `O nome precisa ser do tipo 'string'.` })
  @IsNotEmpty({ message: `O campo 'nome' não pode estar vazio.` })
  name: string;

  @IsEmail({}, { message: 'E-mail inválido.' })
  email: string;

  @IsString({ message: `A senha precisa ser do tipo 'string'.` })
  @IsNotEmpty({ message: `O campo 'senha' não pode estar vazio.` })
  password: string;
}
