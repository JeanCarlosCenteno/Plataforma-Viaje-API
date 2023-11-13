import {Body,Controller,Delete,Get,Param,ParseIntPipe, Post, Put,} from '@nestjs/common';
import { PistasService } from '../services/pistas.service';
import { PistasDto } from '../dto/pistas.dto';

  @Controller('pistas')
  export class PistasController {
    constructor(private readonly pistasService: PistasService) {}
  
    @Post('/')
    async createPistas(@Body() payload:PistasDto) {
      const newPistas = await this.pistasService.created(payload);
      const data = {
        data: newPistas,
        message: 'pistas',
      };
      return data;
    }
  
    @Get('/')
    async getPistas() {
      const pistas = await this.pistasService.getPistas();
      const data = {
        data: pistas,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getPistasId(@Param('id', ParseIntPipe) id: number) {
      const pistas = await this.pistasService.getPistasId(id);
      const data = {
        data: pistas,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedPistas(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: PistasDto,
    ) {
      const pistas = await this.pistasService.updated(id, payload);
      const data = {
        data: pistas,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedPistas(@Param('id', ParseIntPipe) id: number) {
      const pistas = await this.pistasService.delete(id);
      const data = {
        data: pistas,
      };
      return data;
    }
  }