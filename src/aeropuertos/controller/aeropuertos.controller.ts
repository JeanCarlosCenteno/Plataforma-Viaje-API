import {Body,Controller,Delete,Get,Param,ParseIntPipe, Post, Put,} from '@nestjs/common';
import { AeropuertosService } from '../services/aeropuertos.service';
import { AeropuertosDto } from '../dto/aeropuertos.dto';

  @Controller('aeropuertos')
  export class AeropuertosController {
    constructor(private readonly aeropuertosService: AeropuertosService) {}
  
    @Post('/')
    async createAeropuertos(@Body() payload:AeropuertosDto) {
      const newAeropuertos = await this.aeropuertosService.created(payload);
      const data = {
        data: newAeropuertos,
        message: 'aeropuertos',
      };
      return data;
    }
  
    @Get('/')
    async getAeropuertos() {
      const aeropuertos = await this.aeropuertosService.getAeropuertos();
      const data = {
        data: aeropuertos,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getAeropuertosId(@Param('id', ParseIntPipe) id: number) {
      const aeropuertos = await this.aeropuertosService.getAeropuertosId(id);
      const data = {
        data:aeropuertos,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedAeropuertos(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: AeropuertosDto,
    ) {
      const aeropuertos = await this.aeropuertosService.updated(id, payload);
      const data = {
        data: aeropuertos,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedAeropuertos(@Param('id', ParseIntPipe) id: number) {
      const aeropuertos = await this.aeropuertosService.delete(id);
      const data = {
        data: aeropuertos,
      };
      return data;
    }
  }