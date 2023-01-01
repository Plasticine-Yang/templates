import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { RuntimeErrorService } from './runtime-error.service'
import { CreateRuntimeErrorDto } from './dto/create-runtime-error.dto'
import { UpdateRuntimeErrorDto } from './dto/update-runtime-error.dto'

@Controller('runtime-error')
export class RuntimeErrorController {
  constructor(private readonly runtimeErrorService: RuntimeErrorService) {}

  @Post()
  create(@Body() createRuntimeErrorDto: CreateRuntimeErrorDto) {
    return this.runtimeErrorService.create(createRuntimeErrorDto)
  }

  @Get()
  findAll() {
    return this.runtimeErrorService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.runtimeErrorService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateRuntimeErrorDto: UpdateRuntimeErrorDto,
  ) {
    return this.runtimeErrorService.update(id, updateRuntimeErrorDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.runtimeErrorService.remove(id)
  }
}
