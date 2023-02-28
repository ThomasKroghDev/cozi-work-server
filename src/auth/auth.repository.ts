import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { PaginationInterface } from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: PrismaService) {}

  validateSpecificUserByEmail(email: string) {
    return Prisma.validator<Prisma.UserWhereInput>()({
      email,
    });
  }

  validateSpecificUserById(id: number) {
    return Prisma.validator<Prisma.UserWhereInput>()({
      id,
    });
  }

  validateAllUsers() {
    return Prisma.validator<Prisma.UserFindManyArgs>()({});
  }

  validateCreateUser(data: Prisma.UserCreateInput) {
    return Prisma.validator<Prisma.UserCreateInput>()({
      email: data.email,
      hashed_password: data.hashed_password,
    });
  }

  validateUpdateUser(data: Prisma.UserUpdateInput) {
    return Prisma.validator<Prisma.UserUpdateInput>()({
      email: data.email,
      hashed_password: data.hashed_password,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
    });
  }

  validateDeleteUser(id: number) {
    return Prisma.validator<Prisma.UserDeleteArgs>()({
      where: this.validateSpecificUserById(id),
    });
  }

  async getAll(
    filter?: Prisma.UserFindManyArgs,
  ): Promise<Result<PaginationInterface<User>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.user.findMany(filter),
        this.prismaService.user.count({ where: filter?.where }),
      ]);

      const take = filter?.take ? filter?.take : count;
      const skip = filter?.skip ? filter?.skip : 0;

      return ok({
        items: items,
        meta: {
          totalItems: count,
          items: items.length,
          totalPages: Math.ceil(count / take),
          page: skip / take + 1,
        },
      });
    } catch (e) {
      return err(
        new InternalServerErrorException(`Could not get User Resources.`),
      );
    }
  }

  async getByEmail(email: string): Promise<Result<User, Error>> {
    try {
      const result = await this.prismaService.user.findUniqueOrThrow({
        where: this.validateSpecificUserByEmail(email),
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`User Resource ${email} was not found.`),
      );
    }
  }

  async getById(id: number): Promise<Result<User, Error>> {
    try {
      const result = await this.prismaService.user.findUniqueOrThrow({
        where: this.validateSpecificUserById(id),
      });
      return ok(result);
    } catch (e) {
      return err(new NotFoundException(`User Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.UserCreateInput): Promise<Result<User, Error>> {
    try {
      const result = await this.prismaService.user.create({
        data: this.validateCreateUser(data),
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(`Could not create User Resource.`),
      );
    }
  }

  async update(
    id: number,
    data: Prisma.UserUpdateInput,
  ): Promise<Result<User, Error>> {
    try {
      const result = await this.prismaService.user.update({
        where: this.validateSpecificUserById(id),
        data: this.validateUpdateUser(data),
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update User Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: number): Promise<Result<User, Error>> {
    try {
      const result = await this.prismaService.user.delete(
        this.validateDeleteUser(id),
      );
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete User Resource ${id}.`,
        ),
      );
    }
  }
}
