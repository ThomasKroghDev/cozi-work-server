import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Dto } from 'src/common/dto/dto';

export class CreateUserRequestDto extends Dto<CreateUserRequestDto> {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
