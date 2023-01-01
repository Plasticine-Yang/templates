import { CacheModule, CacheStore, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { redisStore } from 'cache-manager-redis-store'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { UserModule } from './user/user.module'

import { loadConfig } from './utils'

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      async useFactory() {
        const redisConfig = loadConfig('REDIS_CONFIG')
        const { host, port, username, password, database } = redisConfig
        const store = await redisStore({
          socket: {
            host,
            port,
          },
          username,
          password,
          database,
        })

        return {
          store: store as unknown as CacheStore,
          ttl: 15,
        }
      },
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [loadConfig],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
