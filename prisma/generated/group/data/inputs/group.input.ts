/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsString } from 'class-validator';
import { IsOptional } from 'class-validator';
import { IsISO8601 } from 'class-validator';
import { IsDefined } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class GroupInput {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsISO8601()
  createdAt: Date;

  @ApiProperty()
  @IsISO8601()
  updatedAt: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  group_pic?: string;

  @ApiProperty()
  @IsDefined()
  AccountGroup: unknown;

  @ApiProperty()
  @IsDefined()
  votes: unknown;
}

export class CreateGroupInput extends OmitType(GroupInput, [] as const) {}

export class UpdateGroupInput extends PartialType(CreateGroupInput) {}
