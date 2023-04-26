import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: "ok",
      message: "API Online",
      description: "API exemplo da disciplina de POS"
    };
  }
}
