import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { MySQLModule, RedisModule } from './common/database'

import { RuntimeErrorModule } from './runtime-error/runtime-error.module'
import { loadConfig } from './utils'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [loadConfig],
    }),
    RedisModule,
    MySQLModule,
    RuntimeErrorModule,
  ],
})
export class AppModule {}
