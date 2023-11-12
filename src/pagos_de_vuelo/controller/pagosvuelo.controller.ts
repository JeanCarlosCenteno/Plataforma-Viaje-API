import {Body,Controller,Delete,Get,Param,ParseIntPipe, Post, Put,} from '@nestjs/common';
import { PagosVueloService } from '../services/pagosvuelo.service';
import { PagosVueloDto } from '../dto/pagosvuelo.dto';
  
  @Controller('pagosvuelo')
  export class PagosvueloController {
    constructor(private readonly pagosvueloService: PagosVueloService) {}
  
    @Post('/')
    async createPagosVuelo(@Body() payload:PagosVueloDto) {
      const newPagosVuelo = await this.pagosvueloService.created(payload);
      const data = {
        data: newPagosVuelo,
        message: 'Pagos a realizar por su vuelo',
      };
      return data;
    }
  
    @Get('/')
    async getPagosVuelo() {
      const pagosvuelo = await this.pagosvueloService.getPagosVuelo();
      const data = {
        data: pagosvuelo,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getPagosVueloId(@Param('id', ParseIntPipe) id: number) {
      const pagosvuelo = await this.pagosvueloService.getPagosVueloId(id);
      const data = {
        data: pagosvuelo,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedPagosVuelo(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: PagosVueloDto,
    ) {
      const pagosvuelo = await this.pagosvueloService.updated(id, payload);
      const data = {
        data: pagosvuelo,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedPagosVuelo(@Param('id', ParseIntPipe) id: number) {
      const pagosvuelo = await this.pagosvueloService.delete(id);
      const data = {
        data: pagosvuelo,
      };
      return data;
    }
  }