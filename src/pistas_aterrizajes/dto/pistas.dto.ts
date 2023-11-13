import {IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PistasDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    numero: number;

    @IsString()
    @IsNotEmpty()
    desplegue: string;

    @IsString()
    @IsNotEmpty()
    aterrizajes: string;

    @IsDate()
    @IsNotEmpty()
    hora: Date;

}