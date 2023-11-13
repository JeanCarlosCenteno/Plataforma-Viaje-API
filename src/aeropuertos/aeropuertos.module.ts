import { Aeropuertos } from './entities/aeropuertos.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AeropuertosController } from './controller/aeropuertos.controller';
import { AeropuertosService } from './services/aeropuertos.service';


@Module({
  imports: [TypeOrmModule.forFeature([Aeropuertos])],
  controllers: [AeropuertosController],
  providers: [AeropuertosService],
})
export class AeropuertosModule {}