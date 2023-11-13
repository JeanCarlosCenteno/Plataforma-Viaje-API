import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pistas } from '../entities/pistas.entity';
import { PistasDto } from '../dto/pistas.dto';

@Injectable()
export class PistasService {
  constructor(
    @InjectRepository(Pistas)
    private readonly pistasRepository: Repository<Pistas>,
  ) {}

  async created(payload: PistasDto) {
    const pistas = await this.pistasRepository.create(payload);
    return await this.pistasRepository.save(pistas);
  }

  async getPistas(): Promise<Pistas[]> {
    return await this.pistasRepository.find({ order: { id: 'ASC' } });
  }

  async getPistasId(id: number): Promise<Pistas> {
    const pistas = await this.pistasRepository.findOne({
      where: { id },
    });
    return pistas;
  }

  async updated(id: number, payload: PistasDto): Promise<Pistas> {
    const pistas = await this.pistasRepository.findOne({
      where: { id: id },
    });
    this.pistasRepository.merge(pistas, payload);
    return await this.pistasRepository.save(pistas);
  }

  async delete(id: number): Promise<Pistas> {
    const pistas = await this.pistasRepository.findOne({
      where: { id: id },
    });
    return await this.pistasRepository.remove(pistas);
  }
}