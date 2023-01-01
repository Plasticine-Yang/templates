import { PartialType } from '@nestjs/swagger'
import { CreateRuntimeErrorDto } from './create-runtime-error.dto'

export class UpdateRuntimeErrorDto extends PartialType(CreateRuntimeErrorDto) {}
