import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from '../auth/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  async create(
    @Body() body: { username: string; password: string },
  ) {
    return this.usersService.create(
      body.username,
      body.password,
    );
  }

  @Public()
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}