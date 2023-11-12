import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriasVuelo } from '../entities/categoriasvuelo.entity';
import { CategoriasVueloDto } from '../dto/categoriasvuelo.dto';

@Injectable()
export class CategoriasVueloService {
  constructor(
    @InjectRepository(CategoriasVuelo)
    private readonly categoriasvueloRepository: Repository<CategoriasVuelo>,
  ) {}

  async created(payload: CategoriasVueloDto) {
    const categoriasvuelo = await this.categoriasvueloRepository.create(payload);
    return await this.categoriasvueloRepository.save(categoriasvuelo);
  }

  async getCategoriasVuelo(): Promise<CategoriasVuelo[]> {
    return await this.categoriasvueloRepository.find({ order: { id: 'ASC' } });
  }

  async getCategoriasVueloId(id: number): Promise<CategoriasVuelo> {
    const categoriasvuelo = await this.categoriasvueloRepository.findOne({
      where: { id },
    });
    return categoriasvuelo;
  }

  async updated(id: number, payload: CategoriasVueloDto): Promise<CategoriasVuelo> {
    const categoriasvuelo = await this.categoriasvueloRepository.findOne({
      where: { id: id },
    });
    this.categoriasvueloRepository.merge(categoriasvuelo, payload);
    return await this.categoriasvueloRepository.save(categoriasvuelo);
  }

  async delete(id: number): Promise<CategoriasVuelo> {
    const categoriasvuelo = await this.categoriasvueloRepository.findOne({
      where: { id: id },
    });
    return await this.categoriasvueloRepository.remove(categoriasvuelo);
  }
}