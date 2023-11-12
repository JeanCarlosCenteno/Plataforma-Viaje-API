import { LugarDestinoDto } from './../dto/lugardestino.dto';
import {Body,Controller,Delete,Get,Param,ParseIntPipe, Post, Put,} from '@nestjs/common';
import { LugarDestinoService } from '../services/lugardestino.service';
  
  @Controller('lugardestino')
  export class LugarDestinoController {
    constructor(private readonly lugardestinoService: LugarDestinoService) {}
  
    @Post('/')
    async createLugarDestino(@Body() payload: LugarDestinoDto) {
      const newLugarDestino = await this.lugardestinoService.created(payload);
      const data = {
        data: newLugarDestino,
        message: 'Lugar De Destino',
      };
      return data;
    }
  
    @Get('/')
    async getLugarDestino() {
      const lugardestino = await this.lugardestinoService.getLugarDestino();
      const data = {
        data: lugardestino,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getLugarDestinoId(@Param('id', ParseIntPipe) id: number) {
      const lugardestino = await this.lugardestinoService.getLugarDestinoId(id);
      const data = {
        data: lugardestino,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedLugarDestino(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: LugarDestinoDto,
    ) {
      const lugardestino = await this.lugardestinoService.updated(id, payload);
      const data = {
        data: lugardestino,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedLugarDestino(@Param('id', ParseIntPipe) id: number) {
      const lugardestino = await this.lugardestinoService.delete(id);
      const data = {
        data: lugardestino,
      };
      return data;
    }
  }