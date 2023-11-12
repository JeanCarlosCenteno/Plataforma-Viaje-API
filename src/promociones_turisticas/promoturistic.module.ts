import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromoTuristicController } from './controller/promoturistic.controller';
import { PromoTuristicService } from './services/promoturistic.service';



@Module({
  imports: [TypeOrmModule.forFeature([PromoTuristicModule])],
  controllers: [PromoTuristicController],
  providers: [PromoTuristicService],
})
export class PromoTuristicModule {}



