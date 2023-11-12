import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PagosVueloDto } from '../dto/pagosvuelo.dto';
import { PagosVuelo } from '../entities/pagosvuelo.entity';

@Injectable()
export class PagosVueloService {
  constructor(
    @InjectRepository(PagosVuelo)
    private readonly pagosvueloRepository: Repository<PagosVuelo>,
  ) {}

  async created(payload: PagosVueloDto) {
    const pagosvuelo = await this.pagosvueloRepository.create(payload);
    return await this.pagosvueloRepository.save(pagosvuelo);
  }

  async getPagosVuelo(): Promise<PagosVuelo[]> {
    return await this.pagosvueloRepository.find({ order: { id: 'ASC' } });
  }

  async getPagosVueloId(id: number): Promise<PagosVuelo> {
    const pagosvuelo = await this.pagosvueloRepository.findOne({
      where: { id },
    });
    return pagosvuelo;
  }

  async updated(id: number, payload: PagosVueloDto): Promise<PagosVuelo> {
    const pagosvuelo = await this.pagosvueloRepository.findOne({
      where: { id: id },
    });
    this.pagosvueloRepository.merge(pagosvuelo, payload);
    return await this.pagosvueloRepository.save(pagosvuelo);
  }

  async delete(id: number): Promise<PagosVuelo> {
    const pagosvuelo = await this.pagosvueloRepository.findOne({
      where: { id: id },
    });
    return await this.pagosvueloRepository.remove(pagosvuelo);
  }
}