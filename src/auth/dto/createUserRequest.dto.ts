import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserRequestDto {
  @ApiProperty({
    example: '',
  })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  @Length(8, 20)
  password!: string;

  @ApiProperty({
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  firstName!: string;

  @ApiProperty({
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  lastName!: string;

  @ApiProperty({
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  phoneNumber!: string;
}
