import { IsNotEmpty, IsEmail } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}
