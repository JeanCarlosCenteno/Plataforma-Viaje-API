import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagosVuelo } from './entities/pagosvuelo.entity';
import { PagosvueloController } from './controller/pagosvuelo.controller';
import { PagosVueloService } from './services/pagosvuelo.service';

@Module({
  imports: [TypeOrmModule.forFeature([PagosVuelo])],
  controllers: [PagosvueloController],
  providers: [PagosVueloService],
})
export class PagosVueloModule {}