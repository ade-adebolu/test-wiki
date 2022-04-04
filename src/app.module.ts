import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HackersController } from './hackers/hackers.controller';
import { PreysController } from './preys/preys.controller';
import { SecondController } from './second/second.controller';

@Module({
  imports: [],
  controllers: [AppController, HackersController, PreysController, SecondController],
  providers: [AppService],
})
export class AppModule {}
