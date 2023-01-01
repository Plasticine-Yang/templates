import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { RuntimeError } from './entities/runtime-error.mysql.entity'
import { RuntimeErrorController } from './runtime-error.controller'
import { RuntimeErrorService } from './runtime-error.service'

@Module({
  imports: [TypeOrmModule.forFeature([RuntimeError])],
  controllers: [RuntimeErrorController],
  providers: [RuntimeErrorService],
})
export class RuntimeErrorModule {}
