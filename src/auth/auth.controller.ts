import { Body, Controller, Post } from '@nestjs/common';
import { registerDTO } from './dto/register.dto'
import argon2 from 'argon2';

@Controller('api/auth')
export class AuthController {
    @Post()
    async register(@Body() payload: registerDTO) {
        if (payload && payload.email && payload.password && payload.username) {
            const passwordHash = await argon2.hash(payload.password, {
              type: argon2.argon2id,
              memoryCost: 19456, 
              timeCost: 2,
              parallelism: 1,
            });
            return passwordHash;
        }
    }
}
