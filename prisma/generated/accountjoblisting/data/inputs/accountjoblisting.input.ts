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

export class AccountJobListingInput {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt()
  account_id: number;

  @ApiProperty()
  @IsInt()
  job_listing_id: number;

  @ApiProperty()
  @IsDefined()
  account: unknown;

  @ApiProperty()
  @IsDefined()
  job_listing: unknown;
}

export class CreateAccountJobListingInput extends OmitType(
  AccountJobListingInput,
  [] as const,
) {}

export class UpdateAccountJobListingInput extends PartialType(
  CreateAccountJobListingInput,
) {}
