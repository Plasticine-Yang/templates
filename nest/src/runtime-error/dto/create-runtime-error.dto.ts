import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateRuntimeErrorDto {
  @ApiProperty({ example: 1 })
  id: number

  @ApiProperty({ example: 'Uncaught ReferenceError: a is not defined' })
  @IsNotEmpty()
  errorMessage: string

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  rowNo: number

  @ApiProperty({ example: 33 })
  @IsNotEmpty()
  colNo: number
}
