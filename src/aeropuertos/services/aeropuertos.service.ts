import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Aeropuertos } from '../entities/aeropuertos.entity';
import { AeropuertosDto } from '../dto/aeropuertos.dto';

@Injectable()
export class AeropuertosService {
  constructor(
    @InjectRepository(Aeropuertos)
    private readonly aeropuertosRepository: Repository<Aeropuertos>,
  ) {}

  async created(payload: AeropuertosDto) {
    const aeropuertos = await this.aeropuertosRepository.create(payload);
    return await this.aeropuertosRepository.save(aeropuertos);
  }

  async getAeropuertos(): Promise<Aeropuertos[]> {
    return await this.aeropuertosRepository.find({ order: { id: 'ASC' } });
  }

  async getAeropuertosId(id: number): Promise<Aeropuertos> {
    const aeropuertos = await this.aeropuertosRepository.findOne({
      where: { id },
    });
    return aeropuertos;
  }

  async updated(id: number, payload: AeropuertosDto): Promise<Aeropuertos> {
    const aeropuertos = await this.aeropuertosRepository.findOne({
      where: { id: id },
    });
    this.aeropuertosRepository.merge(aeropuertos, payload);
    return await this.aeropuertosRepository.save(aeropuertos);
  }

  async delete(id: number): Promise<Aeropuertos> {
    const aeropuertos = await this.aeropuertosRepository.findOne({
      where: { id: id },
    });
    return await this.aeropuertosRepository.remove(aeropuertos);
  }
}