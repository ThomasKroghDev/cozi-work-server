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

export class SkillInput {
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

  @ApiProperty()
  @IsInt()
  years_exp: number;

  @ApiProperty()
  @IsInt()
  proficiency_level: number;

  @ApiProperty()
  @IsDefined()
  AccountSkill: unknown;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDefined()
  category?: unknown;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  categoryId?: number;
}

export class CreateSkillInput extends OmitType(SkillInput, [] as const) {}

export class UpdateSkillInput extends PartialType(CreateSkillInput) {}
