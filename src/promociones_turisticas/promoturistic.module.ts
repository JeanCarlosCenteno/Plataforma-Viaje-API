import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromoTuristicController } from './controller/promoturistic.controller';
import { PromoTuristicService } from './services/promoturistic.service';
import { PromoTuristic } from './entities/promoturistic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PromoTuristic])],
  controllers: [PromoTuristicController],
  providers: [PromoTuristicService],
})
export class PromoTuristicModule {}



