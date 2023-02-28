/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, AccountGroup } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class AccountGroupCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.AccountGroupFindManyArgs,
  ): Promise<Result<PaginationInterface<AccountGroup>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.accountGroup.findMany(filter),
        this.prismaService.accountGroup.count({ where: filter?.where }),
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
        new InternalServerErrorException(
          `Could not get AccountGroup Resources.`,
        ),
      );
    }
  }

  async getById(id: string): Promise<Result<AccountGroup, Error>> {
    try {
      const result = await this.prismaService.accountGroup.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`AccountGroup Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.AccountGroupCreateInput,
  ): Promise<Result<AccountGroup, Error>> {
    try {
      const result = await this.prismaService.accountGroup.create({
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create AccountGroup Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.AccountGroupUpdateInput,
  ): Promise<Result<AccountGroup, Error>> {
    try {
      const result = await this.prismaService.accountGroup.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update AccountGroup Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<AccountGroup, Error>> {
    try {
      const result = await this.prismaService.accountGroup.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete AccountGroup Resource ${id}.`,
        ),
      );
    }
  }
}
