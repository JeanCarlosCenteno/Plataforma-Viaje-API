import {IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CategoriasVueloDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    clase_economica: string;

    @IsNumber()
    @IsNotEmpty()
    clase_ejecutiva: string;

    @IsString()
    @IsNotEmpty()
    primera_clase_VIP: string;

}