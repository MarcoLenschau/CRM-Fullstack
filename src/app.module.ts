import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EventController } from './event/event.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, EventController],
  providers: [AppService],
})
export class AppModule {}
