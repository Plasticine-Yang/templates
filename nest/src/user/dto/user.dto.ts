import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: '63b0208955c753706977cb50' })
  id?: string

  @ApiProperty({ example: 'plasticine' })
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: 'ywf975036719@gmail.com' })
  @IsNotEmpty()
  email: string

  @ApiProperty({ example: 'plasticine' })
  @IsNotEmpty()
  username: string
}
