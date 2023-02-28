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

export class PostJobListingInput {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt()
  post_id: number;

  @ApiProperty()
  @IsInt()
  job_listing_id: number;

  @ApiProperty()
  @IsDefined()
  post: unknown;

  @ApiProperty()
  @IsDefined()
  job_listing: unknown;
}

export class CreatePostJobListingInput extends OmitType(
  PostJobListingInput,
  [] as const,
) {}

export class UpdatePostJobListingInput extends PartialType(
  CreatePostJobListingInput,
) {}
