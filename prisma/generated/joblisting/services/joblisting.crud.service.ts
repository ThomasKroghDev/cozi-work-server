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
import { Prisma, JobListing } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class JobListingCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.JobListingFindManyArgs,
  ): Promise<Result<PaginationInterface<JobListing>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.jobListing.findMany(filter),
        this.prismaService.jobListing.count({ where: filter?.where }),
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
        new InternalServerErrorException(`Could not get JobListing Resources.`),
      );
    }
  }

  async getById(id: string): Promise<Result<JobListing, Error>> {
    try {
      const result = await this.prismaService.jobListing.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`JobListing Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.JobListingCreateInput,
  ): Promise<Result<JobListing, Error>> {
    try {
      const result = await this.prismaService.jobListing.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create JobListing Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.JobListingUpdateInput,
  ): Promise<Result<JobListing, Error>> {
    try {
      const result = await this.prismaService.jobListing.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update JobListing Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<JobListing, Error>> {
    try {
      const result = await this.prismaService.jobListing.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete JobListing Resource ${id}.`,
        ),
      );
    }
  }
}
