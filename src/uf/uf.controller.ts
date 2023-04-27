import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

import { UfService } from './uf.service';

@Controller('uf')
export class UfController {
  constructor(private readonly ufService: UfService) {}

  @Get()
  getHello(@Res() response: Response) {
    response.status(HttpStatus.OK).json(this.ufService.getAll());
  }
}
