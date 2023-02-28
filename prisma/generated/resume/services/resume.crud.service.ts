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
import { Prisma, Resume } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class ResumeCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.ResumeFindManyArgs,
  ): Promise<Result<PaginationInterface<Resume>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.resume.findMany(filter),
        this.prismaService.resume.count({ where: filter?.where }),
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
        new InternalServerErrorException(`Could not get Resume Resources.`),
      );
    }
  }

  async getById(id: string): Promise<Result<Resume, Error>> {
    try {
      const result = await this.prismaService.resume.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(new NotFoundException(`Resume Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.ResumeCreateInput): Promise<Result<Resume, Error>> {
    try {
      const result = await this.prismaService.resume.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(`Could not create Resume Resource.`),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.ResumeUpdateInput,
  ): Promise<Result<Resume, Error>> {
    try {
      const result = await this.prismaService.resume.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update Resume Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<Resume, Error>> {
    try {
      const result = await this.prismaService.resume.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete Resume Resource ${id}.`,
        ),
      );
    }
  }
}
