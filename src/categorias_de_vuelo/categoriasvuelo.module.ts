import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasVuelo } from './entities/categoriasvuelo.entity';
import { CategoriasvueloController } from './controller/categoriasvuelo.controller';
import { CategoriasVueloService } from './services/categoriasvuelo.service';


@Module({
  imports: [TypeOrmModule.forFeature([CategoriasVuelo])],
  controllers: [CategoriasvueloController],
  providers: [CategoriasVueloService],
})
export class CategoriasVueloModule {}