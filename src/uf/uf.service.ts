import { Injectable } from '@nestjs/common';
import * as data from './uf.json';

@Injectable()
export class UfService {
  getAll() {
    return data;
  }
}
