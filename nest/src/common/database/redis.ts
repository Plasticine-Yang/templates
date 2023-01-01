import { CacheModule, CacheStore } from '@nestjs/common'
import { redisStore } from 'cache-manager-redis-store'

import { loadConfig } from 'src/utils'

export const RedisModule = CacheModule.registerAsync({
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
})
