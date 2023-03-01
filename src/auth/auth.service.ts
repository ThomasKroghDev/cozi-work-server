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
import { CreateUserRequestDto } from './dto/createUserRequest.dto';
import { UpdateUserRequestDto } from './dto/updateUserRequest.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await compare(password, hashedPassword);
  }

  async hashingPassword(password: string): Promise<string> {
    const salt = await genSalt(10);
    return await hash(password, salt);
  }

  async getAll(
    filter?: Prisma.UserFindManyArgs,
  ): Promise<Result<PaginationInterface<User>, Error>> {
    return await this.authRepository.getAll(filter);
  }

  async getById(id: number): Promise<Result<User, Error>> {
    return await this.authRepository.getById(id);
  }

  async create(data: CreateUserRequestDto): Promise<Result<User, Error>> {
    return await this.authRepository.create(data);
  }

  async update(
    id: number,
    data: UpdateUserRequestDto,
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

  async register(data: CreateUserRequestDto): Promise<Result<User, Error>> {
    const result = await this.authRepository.getByEmail(data.email);

    if (!result.unwrapOr(undefined)) {
      const hashedPassword = await this.hashingPassword(data.password);

      const newUser = await this.authRepository.create({
        ...data,
        password: hashedPassword,
      });
      return newUser;
    }
    return result;
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Result<User, Error>> {
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
}
