import {IsNotEmpty, IsNumber,IsString } from "class-validator";

export class AeropuertosDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    ciudad: string;

    @IsString()
    @IsNotEmpty()
    pais: string;

    @IsString()
    @IsNotEmpty()
    avion: string;

    @IsString()
    @IsNotEmpty()
    vuelo: string;

    @IsString()
    @IsNotEmpty()
    pista: string;

}