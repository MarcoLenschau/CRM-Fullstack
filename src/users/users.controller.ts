import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from '../auth/decorators/public.decorator';
import { Role } from '../schemas/user.schema';
import { Roles } from '../auth/decorators/roles.decorator';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  async create(@Body() data: { username: string; password: string }) {
    return this.usersService.create(
      data.username,
      data.password,
    );
  }
  @Public()
//   @Roles(Role.ADMIN)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}