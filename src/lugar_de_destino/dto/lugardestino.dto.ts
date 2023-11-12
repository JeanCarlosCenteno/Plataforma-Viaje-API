import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LugarDestinoDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre_destino: string;

    @IsNumber()
    @IsNotEmpty()
    duracion_vuelo: number;

    @IsString()
    @IsNotEmpty()
    coordenadas: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

}