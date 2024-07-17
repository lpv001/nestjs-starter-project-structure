import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    productName: string;

    @IsNotEmpty()
    @IsString()
    productDescription: string;
}