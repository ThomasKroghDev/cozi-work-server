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

export class PortfolioItemInput {
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
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  portfolio_pic?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  portfolio_pdf?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  portfolio_url?: string;

  @ApiProperty()
  @IsDefined()
  portfolio: unknown;

  @ApiProperty()
  @IsInt()
  portfolio_id: number;
}

export class CreatePortfolioItemInput extends OmitType(
  PortfolioItemInput,
  [] as const,
) {}

export class UpdatePortfolioItemInput extends PartialType(
  CreatePortfolioItemInput,
) {}
