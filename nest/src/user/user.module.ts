import { Module } from '@nestjs/common'

import { UserProviders } from './user.providers'
import { UserService } from './user.service'
import { UserController } from './user.controller'

import { DatabaseModule } from 'src/common/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
