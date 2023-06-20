import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { Tarefa } from './entities/tarefa.entity';

@Injectable()
export class TarefasService {
  constructor(
    @InjectRepository(Tarefa) private tarefaRepository: Repository<Tarefa>,
  ) {}

  create(createTarefaDto: CreateTarefaDto) {
    return this.tarefaRepository.save(createTarefaDto);
  }

  findAll() {
    return this.tarefaRepository.find();
  }

  findOne(id: number) {
    return this.tarefaRepository.findOneBy({ id: id });
  }

  update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return this.tarefaRepository.update(id, updateTarefaDto);
  }

  remove(id: number) {
    return this.tarefaRepository.delete(id);
  }
}
