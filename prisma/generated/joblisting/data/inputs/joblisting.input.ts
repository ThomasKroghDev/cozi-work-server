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

export class JobListingInput {
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
  job_title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  job_pic?: string;

  @ApiProperty()
  @IsString()
  job_content: string;

  @ApiProperty()
  @IsString()
  job_location: string;

  @ApiProperty()
  @IsString()
  job_type: string;

  @ApiProperty()
  @IsString()
  job_salary: string;

  @ApiProperty()
  @IsString()
  job_url: string;

  @ApiProperty()
  @IsDefined()
  employment_type: unknown;

  @ApiProperty()
  @IsDefined()
  PostJobListing: unknown;

  @ApiProperty()
  @IsDefined()
  interview: unknown;

  @ApiProperty()
  @IsInt()
  interview_id: number;

  @ApiProperty()
  @IsDefined()
  AccountJobListing: unknown;
}

export class CreateJobListingInput extends OmitType(
  JobListingInput,
  [] as const,
) {}

export class UpdateJobListingInput extends PartialType(CreateJobListingInput) {}
