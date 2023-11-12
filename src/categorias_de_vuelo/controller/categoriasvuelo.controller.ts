import {Body,Controller,Delete,Get,Param,ParseIntPipe, Post, Put,} from '@nestjs/common';
import { CategoriasVueloService } from '../services/categoriasvuelo.service';
import { CategoriasVueloDto } from '../dto/categoriasvuelo.dto';

  
  @Controller('categoriasvuelo')
  export class CategoriasvueloController {
    constructor(private readonly categoriasvueloService: CategoriasVueloService) {}
  
    @Post('/')
    async createCategoriasVuelo(@Body() payload:CategoriasVueloDto) {
      const newCategoriasVuelo = await this.categoriasvueloService.created(payload);
      const data = {
        data: newCategoriasVuelo,
        message: 'Opciones de categorias de su vuelo',
      };
      return data;
    }
  
    @Get('/')
    async getCategoriasVuelo() {
      const categoriasvuelo = await this.categoriasvueloService.getCategoriasVuelo();
      const data = {
        data: categoriasvuelo,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getCategoriasVueloId(@Param('id', ParseIntPipe) id: number) {
      const categoriasvuelo = await this.categoriasvueloService.getCategoriasVueloId(id);
      const data = {
        data: categoriasvuelo,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedCategoriasVuelo(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: CategoriasVueloDto,
    ) {
      const categoriasvuelo = await this.categoriasvueloService.updated(id, payload);
      const data = {
        data: categoriasvuelo,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedCategoriasVuelo(@Param('id', ParseIntPipe) id: number) {
      const categoriasvuelo = await this.categoriasvueloService.delete(id);
      const data = {
        data: categoriasvuelo,
      };
      return data;
    }
  }