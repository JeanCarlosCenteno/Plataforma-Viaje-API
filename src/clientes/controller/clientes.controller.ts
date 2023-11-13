import {Body,Controller,Delete,Get,Param,ParseIntPipe, Post, Put,} from '@nestjs/common';
import { ClientesService } from '../services/clientes.service';
import { ClientesDto } from '../dto/clientes.dto';

  @Controller('clientes')
  export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}
  
    @Post('/')
    async createClientes(@Body() payload:ClientesDto) {
      const newClientes = await this.clientesService.created(payload);
      const data = {
        data: newClientes,
        message: 'clientes',
      };
      return data;
    }
  
    @Get('/')
    async getClientes() {
      const clientes = await this.clientesService.getClientes();
      const data = {
        data: clientes,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getClientesId(@Param('id', ParseIntPipe) id: number) {
      const clientes = await this.clientesService.getClientesId(id);
      const data = {
        data: clientes,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedClientes(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: ClientesDto,
    ) {
      const clientes = await this.clientesService.updated(id, payload);
      const data = {
        data: clientes,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedClientes(@Param('id', ParseIntPipe) id: number) {
      const clientes = await this.clientesService.delete(id);
      const data = {
        data: clientes,
      };
      return data;
    }
  }