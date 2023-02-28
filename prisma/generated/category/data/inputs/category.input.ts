/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsISO8601 } from 'class-validator';
import { IsString } from 'class-validator';
import { IsOptional } from 'class-validator';
import { IsDefined } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class CategoryInput {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsISO8601()
  createdAt: Date;

  @ApiProperty()
  @IsISO8601()
  updatedAt: Date;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDefined()
  creator?: unknown;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  creatorId?: number;

  @ApiProperty()
  @IsDefined()
  Post: unknown;

  @ApiProperty()
  @IsDefined()
  Skill: unknown;
}

export class CreateCategoryInput extends OmitType(CategoryInput, [] as const) {}

export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {}
