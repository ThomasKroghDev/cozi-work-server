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
import { Prisma, Skill } from '@prisma/client';
import {
  PaginationInterface,
  PrismaService,
} from '@prisma-utils/nestjs-prisma';
import { err, ok, Result } from 'neverthrow';

@Injectable()
export class SkillCrudService {
  constructor(private readonly prismaService: PrismaService) {}

  getPrisma() {
    return this.prismaService;
  }

  async getAll(
    filter?: Prisma.SkillFindManyArgs,
  ): Promise<Result<PaginationInterface<Skill>, Error>> {
    try {
      const [items, count] = await this.prismaService.$transaction([
        this.prismaService.skill.findMany(filter),
        this.prismaService.skill.count({ where: filter?.where }),
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
        new InternalServerErrorException(`Could not get Skill Resources.`),
      );
    }
  }

  async getById(id: string): Promise<Result<Skill, Error>> {
    try {
      const result = await this.prismaService.skill.findUniqueOrThrow({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(new NotFoundException(`Skill Resource ${id} was not found.`));
    }
  }

  async create(data: Prisma.SkillCreateInput): Promise<Result<Skill, Error>> {
    try {
      const result = await this.prismaService.skill.create({ data: data });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(`Could not create Skill Resource.`),
      );
    }
  }

  async update(
    id: string,
    data: Prisma.SkillUpdateInput,
  ): Promise<Result<Skill, Error>> {
    try {
      const result = await this.prismaService.skill.update({
        where: { id: id },
        data: data,
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not update Skill Resource ${id}.`,
        ),
      );
    }
  }

  async delete(id: string): Promise<Result<Skill, Error>> {
    try {
      const result = await this.prismaService.skill.delete({
        where: { id: id },
      });
      return ok(result);
    } catch (e) {
      return err(
        new InternalServerErrorException(
          `Could not delete Skill Resource ${id}.`,
        ),
      );
    }
  }
}
