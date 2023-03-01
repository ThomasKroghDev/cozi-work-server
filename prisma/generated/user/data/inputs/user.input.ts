/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsString } from 'class-validator';
import { IsOptional } from 'class-validator';
import { IsISO8601 } from 'class-validator';
import { IsDefined } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class UserInput {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty()
  @IsISO8601()
  createdAt: Date;

  @ApiProperty()
  @IsISO8601()
  updatedAt: Date;

  @ApiProperty()
  @IsString()
  hashed_password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  last_name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone_number?: string;

  @ApiProperty()
  @IsDefined()
  Account: unknown;
}

export class CreateUserInput extends OmitType(UserInput, [] as const) {}

export class UpdateUserInput extends PartialType(CreateUserInput) {}
