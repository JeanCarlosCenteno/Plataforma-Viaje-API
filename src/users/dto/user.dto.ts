import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, } from 'class-validator';
  
  export class CreateUserDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    apellidos: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    edad: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    password: string;

    @IsString()
    @IsNotEmpty()
    sexo: string;
  
    @IsString()
    @IsNotEmpty()
    email: string;
  
    @IsBoolean()
    @IsOptional()
    telefono: number;
  
    @IsArray({ each: true })
    @IsString()
    @IsOptional()
    images?: string[];
  }
  