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

export class AccountPostInput {
  @ApiProperty()
  @IsInt()
  id: number;

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
}

export class CreateAccountPostInput extends OmitType(
  AccountPostInput,
  [] as const,
) {}

export class UpdateAccountPostInput extends PartialType(
  CreateAccountPostInput,
) {}
