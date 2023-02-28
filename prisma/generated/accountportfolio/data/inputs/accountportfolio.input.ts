/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsISO8601 } from 'class-validator';
import { IsDefined } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class AccountPortfolioInput {
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
  account_id: number;

  @ApiProperty()
  @IsInt()
  portfolio_id: number;

  @ApiProperty()
  @IsDefined()
  account: unknown;

  @ApiProperty()
  @IsDefined()
  portfolio: unknown;
}

export class CreateAccountPortfolioInput extends OmitType(
  AccountPortfolioInput,
  [] as const,
) {}

export class UpdateAccountPortfolioInput extends PartialType(
  CreateAccountPortfolioInput,
) {}
