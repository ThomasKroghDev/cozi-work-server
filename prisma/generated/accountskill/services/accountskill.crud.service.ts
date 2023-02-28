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
import { Prisma, AccountSkill } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class AccountSkillCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.AccountSkillFindManyArgs,
  ): Promise<Result<PaginationInterface<AccountSkill>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.accountSkill.findMany(filter),
        this.prismaService.accountSkill.count({ where: filter?.where }),
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
          `Could not get AccountSkill Resources.`,
        ),
      );
    }
  }

  async getById(id: string): Promise<Result<AccountSkill, Error>> {
    try {
      const result = await this.prismaService.accountSkill.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`AccountSkill Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.AccountSkillCreateInput,
  ): Promise<Result<AccountSkill, Error>> {
    try {
      const result = await this.prismaService.accountSkill.create({
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create AccountSkill Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.AccountSkillUpdateInput,
  ): Promise<Result<AccountSkill, Error>> {
    try {
      const result = await this.prismaService.accountSkill.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update AccountSkill Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<AccountSkill, Error>> {
    try {
      const result = await this.prismaService.accountSkill.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete AccountSkill Resource ${id}.`,
        ),
      );
    }
  }
}
