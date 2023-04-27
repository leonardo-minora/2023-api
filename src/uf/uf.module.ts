import { Module } from '@nestjs/common';
import { UfService } from './uf.service';
import { UfController } from './uf.controller';

@Module({
  providers: [UfService],
  controllers: [UfController],
})
export class UfModule {}
