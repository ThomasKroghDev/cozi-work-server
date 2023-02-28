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
import { Prisma, PostJobListing } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class PostJobListingCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.PostJobListingFindManyArgs,
  ): Promise<Result<PaginationInterface<PostJobListing>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.postJobListing.findMany(filter),
        this.prismaService.postJobListing.count({ where: filter?.where }),
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
          `Could not get PostJobListing Resources.`,
        ),
      );
    }
  }

  async getById(id: string): Promise<Result<PostJobListing, Error>> {
    try {
      const result = await this.prismaService.postJobListing.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`PostJobListing Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.PostJobListingCreateInput,
  ): Promise<Result<PostJobListing, Error>> {
    try {
      const result = await this.prismaService.postJobListing.create({
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create PostJobListing Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.PostJobListingUpdateInput,
  ): Promise<Result<PostJobListing, Error>> {
    try {
      const result = await this.prismaService.postJobListing.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update PostJobListing Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<PostJobListing, Error>> {
    try {
      const result = await this.prismaService.postJobListing.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete PostJobListing Resource ${id}.`,
        ),
      );
    }
  }
}
