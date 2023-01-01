import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'

import { InjectRepository } from '@nestjs/typeorm'
import { CreateRuntimeErrorDto } from './dto/create-runtime-error.dto'
import { UpdateRuntimeErrorDto } from './dto/update-runtime-error.dto'
import { RuntimeError } from './entities/runtime-error.mysql.entity'

@Injectable()
export class RuntimeErrorService {
  constructor(
    @InjectRepository(RuntimeError)
    private runtimeErrorRepository: Repository<RuntimeError>,
  ) {}

  create(createRuntimeErrorDto: CreateRuntimeErrorDto) {
    return this.runtimeErrorRepository.save(createRuntimeErrorDto)
  }

  findAll() {
    return this.runtimeErrorRepository.find()
  }

  findOne(id: number) {
    return this.runtimeErrorRepository.findOneBy({ id })
  }

  update(id: number, updateRuntimeErrorDto: UpdateRuntimeErrorDto) {
    return this.runtimeErrorRepository.update(id, updateRuntimeErrorDto)
  }

  remove(id: number) {
    return this.runtimeErrorRepository.delete(id)
  }
}
