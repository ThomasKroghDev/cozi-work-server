/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsDefined } from 'class-validator';
import { IsISO8601 } from 'class-validator';
import { IsOptional } from 'class-validator';
import { IsString } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class AccountInput {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt()
  user_id: number;

  @ApiProperty()
  @IsDefined()
  user: unknown;

  @ApiProperty()
  @IsISO8601()
  createdAt: Date;

  @ApiProperty()
  @IsISO8601()
  updatedAt: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  profile_pic?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  employed_type?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  website?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  linkedin_url?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  github_url?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  twitter_url?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  dribble_url?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  groupsId?: number;

  @ApiProperty()
  @IsDefined()
  AccountGroup: unknown;

  @ApiProperty()
  @IsDefined()
  AccountPost: unknown;

  @ApiProperty()
  @IsDefined()
  AccountJobListing: unknown;

  @ApiProperty()
  @IsDefined()
  PostComment: unknown;

  @ApiProperty()
  @IsDefined()
  Votes: unknown;

  @ApiProperty()
  @IsDefined()
  Category: unknown;

  @ApiProperty()
  @IsDefined()
  AccountSkill: unknown;

  @ApiProperty()
  @IsDefined()
  AccountPortfolio: unknown;
}

export class CreateAccountInput extends OmitType(AccountInput, [] as const) {}

export class UpdateAccountInput extends PartialType(CreateAccountInput) {}
