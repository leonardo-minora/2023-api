import { Injectable } from '@nestjs/common';
import * as data from './uf.json';

@Injectable()
export class UfService {
  getAll() {
    return data;
  }

  findOne(id: number) {
    return data.filter((tarefa: any) => tarefa.id == id);
  }

  encontrarPorSigla(sigla: string) {
    console.info('UFs', data);
    const uf = data.filter((tarefa: any) => tarefa.sigla == sigla);
    return uf;
  }
}
