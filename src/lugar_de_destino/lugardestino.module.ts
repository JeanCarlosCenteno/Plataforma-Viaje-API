import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugarDestinoController } from './controller/lugardestino.controller';
import { LugarDestinoService } from './services/lugardestino.service';
import { LugarDestino } from './entities/lugardestino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LugarDestino])],
  controllers: [LugarDestinoController],
  providers: [LugarDestinoService],
})
export class LugarDestinoModule {}