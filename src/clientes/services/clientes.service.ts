import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Clientes } from '../entities/clientes.entity';
import { ClientesDto } from '../dto/clientes.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Clientes)
    private readonly clientesRepository: Repository<Clientes>,
  ) {}

  async created(payload: ClientesDto) {
    const clientes = await this.clientesRepository.create(payload);
    return await this.clientesRepository.save(clientes);
  }

  async getClientes(): Promise<Clientes[]> {
    return await this.clientesRepository.find({ order: { id: 'ASC' } });
  }

  async getClientesId(id: number): Promise<Clientes> {
    const clientes = await this.clientesRepository.findOne({
      where: { id },
    });
    return clientes;
  }

  async updated(id: number, payload: ClientesDto): Promise<Clientes> {
    const clientes = await this.clientesRepository.findOne({
      where: { id: id },
    });
    this.clientesRepository.merge(clientes, payload);
    return await this.clientesRepository.save(clientes);
  }

  async delete(id: number): Promise<Clientes> {
    const clientes = await this.clientesRepository.findOne({
      where: { id: id },
    });
    return await this.clientesRepository.remove(clientes);
  }
}