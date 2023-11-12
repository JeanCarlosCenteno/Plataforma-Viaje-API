import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PagosVueloDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    reservas: string;

    @IsNumber()
    @IsNotEmpty()
    metodo_pago: string;

    @IsString()
    @IsNotEmpty()
    cantidad_monetaria: string;

    @IsDate()
    @IsOptional()
    fecha: Date;
}