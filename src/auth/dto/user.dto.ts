import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IsString } from 'class-validator';
import { IsOptional } from 'class-validator';
import { Dto } from '../../common/dto/dto';

export class UserDto extends Dto<UserDto> {
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

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  last_name?: string;
}
