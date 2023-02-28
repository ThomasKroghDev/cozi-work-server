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
import { Prisma, Portfolio } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class PortfolioCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.PortfolioFindManyArgs,
  ): Promise<Result<PaginationInterface<Portfolio>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.portfolio.findMany(filter),
        this.prismaService.portfolio.count({ where: filter?.where }),
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
        new InternalServerErrorException(`Could not get Portfolio Resources.`),
      );
    }
  }

  async getById(id: string): Promise<Result<Portfolio, Error>> {
    try {
      const result = await this.prismaService.portfolio.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`Portfolio Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.PortfolioCreateInput,
  ): Promise<Result<Portfolio, Error>> {
    try {
      const result = await this.prismaService.portfolio.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create Portfolio Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.PortfolioUpdateInput,
  ): Promise<Result<Portfolio, Error>> {
    try {
      const result = await this.prismaService.portfolio.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update Portfolio Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<Portfolio, Error>> {
    try {
      const result = await this.prismaService.portfolio.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete Portfolio Resource ${id}.`,
        ),
      );
    }
  }
}
