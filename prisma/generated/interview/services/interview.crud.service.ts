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
import { Prisma, Interview } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class InterviewCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.InterviewFindManyArgs,
  ): Promise<Result<PaginationInterface<Interview>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.interview.findMany(filter),
        this.prismaService.interview.count({ where: filter?.where }),
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
        new InternalServerErrorException(`Could not get Interview Resources.`),
      );
    }
  }

  async getById(id: string): Promise<Result<Interview, Error>> {
    try {
      const result = await this.prismaService.interview.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`Interview Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.InterviewCreateInput,
  ): Promise<Result<Interview, Error>> {
    try {
      const result = await this.prismaService.interview.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create Interview Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.InterviewUpdateInput,
  ): Promise<Result<Interview, Error>> {
    try {
      const result = await this.prismaService.interview.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update Interview Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<Interview, Error>> {
    try {
      const result = await this.prismaService.interview.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete Interview Resource ${id}.`,
        ),
      );
    }
  }
}
