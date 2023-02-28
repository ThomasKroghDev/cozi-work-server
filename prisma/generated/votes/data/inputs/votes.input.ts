/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsISO8601 } from 'class-validator';
import { IsDefined } from 'class-validator';
import { IsOptional } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class VotesInput {
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
  up_count: number;

  @ApiProperty()
  @IsInt()
  down_count: number;

  @ApiProperty()
  @IsInt()
  post_id: number;

  @ApiProperty()
  @IsInt()
  account_id: number;

  @ApiProperty()
  @IsDefined()
  post: unknown;

  @ApiProperty()
  @IsDefined()
  account: unknown;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDefined()
  Group?: unknown;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  groupId?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDefined()
  PostComment?: unknown;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  postCommentId?: number;
}

export class CreateVotesInput extends OmitType(VotesInput, [] as const) {}

export class UpdateVotesInput extends PartialType(CreateVotesInput) {}
