import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './event/event.controller';
import { EventService } from './event/event.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}), AuthModule, UsersModule],
  controllers: [AppController, EventController],
  providers: [AppService, EventService, {provide: APP_GUARD, useClass: JwtAuthGuard}],
})
export class AppModule {}
