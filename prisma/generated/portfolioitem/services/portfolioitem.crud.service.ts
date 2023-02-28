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
import { Prisma, PortfolioItem } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class PortfolioItemCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.PortfolioItemFindManyArgs,
  ): Promise<Result<PaginationInterface<PortfolioItem>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.portfolioItem.findMany(filter),
        this.prismaService.portfolioItem.count({ where: filter?.where }),
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
          `Could not get PortfolioItem Resources.`,
        ),
      );
    }
  }

  async getById(id: string): Promise<Result<PortfolioItem, Error>> {
    try {
      const result = await this.prismaService.portfolioItem.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`PortfolioItem Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.PortfolioItemCreateInput,
  ): Promise<Result<PortfolioItem, Error>> {
    try {
      const result = await this.prismaService.portfolioItem.create({
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create PortfolioItem Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.PortfolioItemUpdateInput,
  ): Promise<Result<PortfolioItem, Error>> {
    try {
      const result = await this.prismaService.portfolioItem.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update PortfolioItem Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<PortfolioItem, Error>> {
    try {
      const result = await this.prismaService.portfolioItem.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete PortfolioItem Resource ${id}.`,
        ),
      );
    }
  }
}
