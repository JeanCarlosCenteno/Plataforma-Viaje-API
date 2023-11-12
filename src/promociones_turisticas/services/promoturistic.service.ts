import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PromoTuristic } from '../entities/promoturistic.entity';
import { PromoTuristicDto } from '../dto/promoturistic.dto';

@Injectable()
export class PromoTuristicService {
  constructor(
    @InjectRepository(PromoTuristic)
    private readonly promoturisticRepository: Repository<PromoTuristic>,
  ) {}

  async created(payload: PromoTuristicDto) {
    const promoturistic = await this.promoturisticRepository.create(payload);
    return await this.promoturisticRepository.save(promoturistic);
  }

  async getPromoTuristic(): Promise<PromoTuristic[]> {
    return await this.promoturisticRepository.find({ order: { id: 'ASC' } });
  }

  async getPromoTuristicId(id: number): Promise<PromoTuristic> {
    const promoturistic = await this.promoturisticRepository.findOne({
      where: { id },
    });
    return promoturistic;
  }

  async updated(id: number, payload: PromoTuristicDto): Promise<PromoTuristic> {
    const promoturistic = await this.promoturisticRepository.findOne({
      where: { id: id },
    });
    this.promoturisticRepository.merge(promoturistic, payload);
    return await this.promoturisticRepository.save(promoturistic);
  }

  async delete(id: number): Promise<PromoTuristic> {
    const promoturistic = await this.promoturisticRepository.findOne({
      where: { id: id },
    });
    return await this.promoturisticRepository.remove(promoturistic);
  }
}