import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignInDto {
    @IsNotEmpty()
    @IsEmail({}, {message: 'Please enter correct email'})
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}