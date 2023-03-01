import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/localAuth.guard';
import { CreateUserRequestDto } from './dto/createUserRequest.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  async login(@Body() dto: CreateUserRequestDto) {
    const user = await this.authService.login(dto.email, dto.password);
    if (user.isErr()) {
      throw user.error;
    }
    const payload = { email: user.value.email, sub: user.value.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
