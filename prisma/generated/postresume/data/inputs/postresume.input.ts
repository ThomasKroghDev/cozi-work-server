/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsDefined } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class PostResumeInput {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt()
  post_id: number;

  @ApiProperty()
  @IsInt()
  resume_id: number;

  @ApiProperty()
  @IsDefined()
  post: unknown;

  @ApiProperty()
  @IsDefined()
  resume: unknown;
}

export class CreatePostResumeInput extends OmitType(
  PostResumeInput,
  [] as const,
) {}

export class UpdatePostResumeInput extends PartialType(CreatePostResumeInput) {}
