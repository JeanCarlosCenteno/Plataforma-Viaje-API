import {IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PromoTuristicDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    fechas_promocion: string;

    @IsString()
    @IsNotEmpty()
    reservaciones: string;

    @IsString()
    @IsNotEmpty()
    combo_familiar: string;

    @IsString()
    @IsNotEmpty()
    tipo_de_viaje: string;

    @IsString()
    @IsNotEmpty()
    nombres_aerolineas: string;

    @IsString()
    @IsNotEmpty()
    paises: string;

    @IsNumber()
    @IsNotEmpty()
    precios: number;

    @IsNumber()
    @IsNotEmpty()
    telefono: number;

}