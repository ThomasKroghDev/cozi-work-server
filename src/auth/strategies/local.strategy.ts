import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      email: 'email',
      password: 'password',
    });
  }

  async validate(email: string, password: string): Promise<User> {
    const result = await this.authService.validateUser(email, password);
    if (result.isErr()) {
      throw result.error;
    }
    return result.value;
  }
}
