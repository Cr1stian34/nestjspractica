import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  name: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  phone: string;
  @IsNumber()
  @IsNotEmpty()
  age: number;
}
