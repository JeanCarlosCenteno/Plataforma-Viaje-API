import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from './controller/clientes.controller';
import { ClientesService } from './services/clientes.service';


@Module({
  imports: [TypeOrmModule.forFeature([ClientesModule])],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}



