import {IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ClientesDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre_completo: string;

    @IsString()
    @IsNotEmpty()
    apellido_completo: string;

    @IsString()
    @IsNotEmpty()
    edad: string;

    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsString()
    @IsNotEmpty()
    pais_de_origen: string;

    @IsNumber()
    @IsNotEmpty()
    telefono: number;

    @IsString()
    @IsNotEmpty()
    credenciales: string;

    @IsString()
    @IsNotEmpty()
    certificado_vacunacion: string;

    @IsDate()
    @IsOptional()
    fecha_vencimiento_pasaporte: Date;

    @IsString()
    @IsNotEmpty()
    direcion_de_destino: string;

}