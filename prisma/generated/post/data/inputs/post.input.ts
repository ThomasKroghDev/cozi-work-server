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

export class PostInput {
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
  post_title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  post_pic?: string;

  @ApiProperty()
  @IsString()
  post_content: string;

  @ApiProperty()
  @IsDefined()
  PostResume: unknown;

  @ApiProperty()
  @IsDefined()
  AccountPost: unknown;

  @ApiProperty()
  @IsDefined()
  PostJobListing: unknown;

  @ApiProperty()
  @IsDefined()
  PostComment: unknown;

  @ApiProperty()
  @IsDefined()
  Votes: unknown;

  @ApiProperty()
  @IsDefined()
  Category: unknown;
}

export class CreatePostInput extends OmitType(PostInput, [] as const) {}

export class UpdatePostInput extends PartialType(CreatePostInput) {}
