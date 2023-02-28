/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsISO8601 } from 'class-validator';
import { IsString } from 'class-validator';
import { IsDefined } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class PostCommentInput {
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
  comment: string;

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

  @ApiProperty()
  @IsDefined()
  votes: unknown;
}

export class CreatePostCommentInput extends OmitType(
  PostCommentInput,
  [] as const,
) {}

export class UpdatePostCommentInput extends PartialType(
  CreatePostCommentInput,
) {}
