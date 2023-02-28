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
import { Prisma, AccountPortfolio } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class AccountPortfolioCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.AccountPortfolioFindManyArgs,
  ): Promise<Result<PaginationInterface<AccountPortfolio>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.accountPortfolio.findMany(filter),
        this.prismaService.accountPortfolio.count({ where: filter?.where }),
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
          `Could not get AccountPortfolio Resources.`,
        ),
      );
    }
  }

  async getById(id: string): Promise<Result<AccountPortfolio, Error>> {
    try {
      const result =
        await this.prismaService.accountPortfolio.findUniqueOrThrow({
          where: { id: id },
        });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`AccountPortfolio Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.AccountPortfolioCreateInput,
  ): Promise<Result<AccountPortfolio, Error>> {
    try {
      const result = await this.prismaService.accountPortfolio.create({
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create AccountPortfolio Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.AccountPortfolioUpdateInput,
  ): Promise<Result<AccountPortfolio, Error>> {
    try {
      const result = await this.prismaService.accountPortfolio.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update AccountPortfolio Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<AccountPortfolio, Error>> {
    try {
      const result = await this.prismaService.accountPortfolio.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete AccountPortfolio Resource ${id}.`,
        ),
      );
    }
  }
}
