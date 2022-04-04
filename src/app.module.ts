import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FriendsController } from './friends/friends.controller';
import { PreysController } from './preys/preys.controller';
import { SecondController } from './second/second.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    PreysController,
    SecondController,
    FriendsController,
  ],
  providers: [AppService],
})
export class AppModule {}
