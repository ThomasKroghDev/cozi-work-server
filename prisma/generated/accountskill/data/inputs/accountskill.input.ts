/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsISO8601 } from 'class-validator';
import { IsDefined } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class AccountSkillInput {
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
  @IsInt()
  account_id: number;

  @ApiProperty()
  @IsInt()
  skill_id: number;

  @ApiProperty()
  @IsDefined()
  account: unknown;

  @ApiProperty()
  @IsDefined()
  skill: unknown;
}

export class CreateAccountSkillInput extends OmitType(
  AccountSkillInput,
  [] as const,
) {}

export class UpdateAccountSkillInput extends PartialType(
  CreateAccountSkillInput,
) {}
