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
import { Prisma, AccountJobListing } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class AccountJobListingCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.AccountJobListingFindManyArgs,
  ): Promise<Result<PaginationInterface<AccountJobListing>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.accountJobListing.findMany(filter),
        this.prismaService.accountJobListing.count({ where: filter?.where }),
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
          `Could not get AccountJobListing Resources.`,
        ),
      );
    }
  }

  async getById(id: string): Promise<Result<AccountJobListing, Error>> {
    try {
      const result =
        await this.prismaService.accountJobListing.findUniqueOrThrow({
          where: { id: id },
        });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(
          `AccountJobListing Resource ${id} was not found.`,
        ),
      );
    }
  }

  async create(
    data: Prisma.AccountJobListingCreateInput,
  ): Promise<Result<AccountJobListing, Error>> {
    try {
      const result = await this.prismaService.accountJobListing.create({
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create AccountJobListing Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.AccountJobListingUpdateInput,
  ): Promise<Result<AccountJobListing, Error>> {
    try {
      const result = await this.prismaService.accountJobListing.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update AccountJobListing Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<AccountJobListing, Error>> {
    try {
      const result = await this.prismaService.accountJobListing.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete AccountJobListing Resource ${id}.`,
        ),
      );
    }
  }
}
