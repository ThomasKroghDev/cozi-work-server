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

export class AccountGroupInput {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt()
  account_id: number;

  @ApiProperty()
  @IsInt()
  group_id: number;

  @ApiProperty()
  @IsDefined()
  account: unknown;

  @ApiProperty()
  @IsDefined()
  group: unknown;
}

export class CreateAccountGroupInput extends OmitType(
  AccountGroupInput,
  [] as const,
) {}

export class UpdateAccountGroupInput extends PartialType(
  CreateAccountGroupInput,
) {}
