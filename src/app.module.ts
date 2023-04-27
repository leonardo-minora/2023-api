import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UfModule } from './uf/uf.module';

@Module({
  imports: [UfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
