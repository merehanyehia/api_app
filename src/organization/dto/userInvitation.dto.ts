import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class UserInvitationDto {
  @IsNotEmpty({ message: 'email is required' })
  @IsString()
  @IsEmail()
  user_email: string;
}
