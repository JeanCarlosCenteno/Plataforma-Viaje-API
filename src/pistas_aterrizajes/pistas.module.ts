import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PistasController } from './controller/pistas.controller';
import { PistasService } from './services/pistas.service';
import { Pistas } from './entities/pistas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pistas])],
  controllers: [PistasController],
  providers: [PistasService],
})
export class PistasModule {}