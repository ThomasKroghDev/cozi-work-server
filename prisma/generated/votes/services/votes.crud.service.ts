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
import { Prisma, Votes } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class VotesCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.VotesFindManyArgs,
  ): Promise<Result<PaginationInterface<Votes>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.votes.findMany(filter),
        this.prismaService.votes.count({ where: filter?.where }),
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
        new InternalServerErrorException(`Could not get Votes Resources.`),
      );
    }
  }

  async getById(id: string): Promise<Result<Votes, Error>> {
    try {
      const result = await this.prismaService.votes.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(new NotFoundException(`Votes Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.VotesCreateInput): Promise<Result<Votes, Error>> {
    try {
      const result = await this.prismaService.votes.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(`Could not create Votes Resource.`),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.VotesUpdateInput,
  ): Promise<Result<Votes, Error>> {
    try {
      const result = await this.prismaService.votes.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update Votes Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<Votes, Error>> {
    try {
      const result = await this.prismaService.votes.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete Votes Resource ${id}.`,
        ),
      );
    }
  }
}
