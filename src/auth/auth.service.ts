import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  HttpException,
  InternalServerErrorException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { Prisma, User } from '@prisma/client';
import { PaginationInterface } from '@prisma-utils/nestjs-prisma';
import { Result, err } from 'neverthrow';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { map, Observable, tap } from 'rxjs';
import { compare, hash, genSalt } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await compare(password, hashedPassword);
  }

  async hashingPassword(data: {
    hashed_password: any;
    email?: string;
    username?: string | null | undefined;
    createdAt?: string | Date | undefined;
    updatedAt?: string | Date | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    phone_number?: string | null | undefined;
    Account?: Prisma.AccountCreateNestedManyWithoutUserInput | undefined;
  }) {
    const salt = await genSalt(10);
    return await hash(data.hashed_password, salt);
  }

  async getAll(
    filter?: Prisma.UserFindManyArgs,
  ): Promise<Result<PaginationInterface<User>, Error>> {
    return await this.authRepository.getAll(filter);
  }

  async getById(id: number): Promise<Result<User, Error>> {
    return await this.authRepository.getById(id);
  }

  async create(data: Prisma.UserCreateInput): Promise<Result<User, Error>> {
    return await this.authRepository.create(data);
  }

  async update(
    id: number,
    data: Prisma.UserUpdateInput,
  ): Promise<Result<User, Error>> {
    return await this.authRepository.update(id, data);
  }

  async delete(id: number): Promise<Result<User, Error>> {
    return await this.authRepository.delete(id);
  }

  async login(email: string, password: string): Promise<Result<User, Error>> {
    const result = await this.authRepository.getByEmail(email);

    const user = result.unwrapOr(undefined);

    if (user) {
      const isPasswordValid = await this.comparePassword(
        password,
        user.hashed_password,
      );

      if (!isPasswordValid) {
        return err(new UnauthorizedException('Invalid credentials'));
      }

      return result;
    }

    return err(new UnauthorizedException('Invalid credentials'));
  }

  async register(data: Prisma.UserCreateInput): Promise<Result<User, Error>> {
    const result = await this.authRepository.getByEmail(data.email);

    if (!result.unwrapOr(undefined)) {
      const hashedPassword = await this.hashingPassword(data);

      const newUser = await this.authRepository.create({
        ...data,
        hashed_password: hashedPassword,
      });
      return newUser;
    }
    return result;
  }

  async validateUser(id: number): Promise<Result<User, Error>> {
    return await this.authRepository.getById(id);
  }
}
