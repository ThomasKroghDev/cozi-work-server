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
import { Prisma, PostComment } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class PostCommentCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.PostCommentFindManyArgs,
  ): Promise<Result<PaginationInterface<PostComment>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.postComment.findMany(filter),
        this.prismaService.postComment.count({ where: filter?.where }),
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
          `Could not get PostComment Resources.`,
        ),
      );
    }
  }

  async getById(id: string): Promise<Result<PostComment, Error>> {
    try {
      const result = await this.prismaService.postComment.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new NotFoundException(`PostComment Resource ${id} was not found.`),
      );
    }
  }

  async create(
    data: Prisma.PostCommentCreateInput,
  ): Promise<Result<PostComment, Error>> {
    try {
      const result = await this.prismaService.postComment.create({
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not create PostComment Resource.`,
        ),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.PostCommentUpdateInput,
  ): Promise<Result<PostComment, Error>> {
    try {
      const result = await this.prismaService.postComment.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update PostComment Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<PostComment, Error>> {
    try {
      const result = await this.prismaService.postComment.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete PostComment Resource ${id}.`,
        ),
      );
    }
  }
}
