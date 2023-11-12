import {Body,Controller,Delete,Get,Param,ParseIntPipe, Post, Put,} from '@nestjs/common';
import { PromoTuristicService } from '../services/promoturistic.service';
import { PromoTuristicDto } from '../dto/promoturistic.dto';


  @Controller('promoturistic')
  export class PromoTuristicController {
    constructor(private readonly promoturisticService: PromoTuristicService) {}
  
    @Post('/')
    async createPromoTuristic(@Body() payload:PromoTuristicDto) {
      const newPromoTuristic = await this.promoturisticService.created(payload);
      const data = {
        data: newPromoTuristic,
        message: 'promociones turisticas',
      };
      return data;
    }
  
    @Get('/')
    async getPromoTuristic() {
      const promoturistic = await this.promoturisticService.getPromoTuristic();
      const data = {
        data: promoturistic,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getPromoTuristicId(@Param('id', ParseIntPipe) id: number) {
      const promoturistic = await this.promoturisticService.getPromoTuristicId(id);
      const data = {
        data: promoturistic,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedPromoTuristic(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: PromoTuristicDto,
    ) {
      const promoturistic = await this.promoturisticService.updated(id, payload);
      const data = {
        data: promoturistic,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedPromoTuristic(@Param('id', ParseIntPipe) id: number) {
      const promoturistic = await this.promoturisticService.delete(id);
      const data = {
        data: promoturistic,
      };
      return data;
    }
  }