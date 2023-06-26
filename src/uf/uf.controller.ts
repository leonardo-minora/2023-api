import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

import { UfService } from './uf.service';

@Controller('uf')
export class UfController {
  constructor(private readonly ufService: UfService) {}

  @Get()
  getHello(@Res() response: Response) {
    response.status(HttpStatus.OK).json({
      status: 'ok',
      message: 'UFs recuperadas com sucesso',
      data: this.ufService.getAll(),
    });
  }

  // @Get(':id')
  // findOne(@Res() response: Response, @Param('id') id: number) {
  //   response.status(HttpStatus.OK).json({
  //     status: 'ok',
  //     data: this.ufService.findOne(id),
  //   });
  // }

  @Get(':sigla')
  async encontrarPorSigla(@Param('sigla') sigla: string) {
    return {
      status: 'ok',
      data: this.ufService.encontrarPorSigla(sigla),
    };
  }
}
