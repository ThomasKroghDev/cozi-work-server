import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IsOptional } from 'class-validator';
import { Dto } from 'src/common/dto/dto';

export class UpdateUserRequestDto extends Dto<UpdateUserRequestDto> {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty()
  @IsString()
  password: string;

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
}
