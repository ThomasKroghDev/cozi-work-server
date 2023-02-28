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
import { Prisma, PostResume } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class PostResumeCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.PostResumeFindManyArgs,
  ): Promise<Result<PaginationInterface<PostResume>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.postResume.findMany(filter),
        this.prismaService.postResume.count({ where: filter?.where }),
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
        new InternalServerErrorException(`Could not get PostResume Resources.`),
      );
    }
  }

  async getById(id: string): Promise<Result<PostResume, Error>> {
    try {
      const result = await this.prismaService.postResume.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`PostResume Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.PostResumeCreateInput,
  ): Promise<Result<PostResume, Error>> {
    try {
      const result = await this.prismaService.postResume.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create PostResume Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.PostResumeUpdateInput,
  ): Promise<Result<PostResume, Error>> {
    try {
      const result = await this.prismaService.postResume.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update PostResume Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<PostResume, Error>> {
    try {
      const result = await this.prismaService.postResume.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete PostResume Resource ${id}.`,
        ),
      );
    }
  }
}
