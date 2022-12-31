import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { BusinessException } from '../common/exceptions/business.exception'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get('error')
  findError() {
    const a: Record<string, any> = {}
    console.log(a.b.c)
    return this.userService.findAll()
  }

  @Get('business-error')
  findBusinessError() {
    const a: Record<string, any> = {}
    try {
      console.log(a.b.c)
    } catch (error) {
      throw new BusinessException('a.b.c undefined')
    }

    return this.userService.findAll()
  }

  @Get('env')
  findEnv() {
    return {
      value: this.configService.get('TEST_VALUE').name,
      arr: this.configService.get('TEST_ARR'),
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
