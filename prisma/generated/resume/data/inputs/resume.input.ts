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

export class ResumeInput {
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
  resume_title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  resume_pic?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  resume_pdf?: string;

  @ApiProperty()
  @IsDefined()
  PostResume: unknown;
}

export class CreateResumeInput extends OmitType(ResumeInput, [] as const) {}

export class UpdateResumeInput extends PartialType(CreateResumeInput) {}
