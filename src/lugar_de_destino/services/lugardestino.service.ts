import { LugarDestinoDto } from './../dto/lugardestino.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LugarDestino } from '../entities/lugardestino.entity';

@Injectable()
export class LugarDestinoService {
  constructor(
    @InjectRepository(LugarDestino)
    private readonly lugardestinoRepository: Repository<LugarDestino>,
  ) {}

  async created(payload: LugarDestinoDto) {
    const lugardestino = await this.lugardestinoRepository.create(payload);
    return await this.lugardestinoRepository.save(lugardestino);
  }

  async getLugarDestino(): Promise<LugarDestino[]> {
    return await this.lugardestinoRepository.find({ order: { id: 'ASC' } });
  }

  async getLugarDestinoId(id: number): Promise<LugarDestino> {
    const lugardestino = await this.lugardestinoRepository.findOne({
      where: { id },
    });
    return lugardestino;
  }

  async updated(id: number, payload: LugarDestinoDto): Promise<LugarDestino> {
    const lugardestino = await this.lugardestinoRepository.findOne({
      where: { id: id },
    });
    this.lugardestinoRepository.merge(lugardestino, payload);
    return await this.lugardestinoRepository.save(lugardestino);
  }

  async delete(id: number): Promise<LugarDestino> {
    const lugardestino = await this.lugardestinoRepository.findOne({
      where: { id: id },
    });
    return await this.lugardestinoRepository.remove(lugardestino);
  }
}