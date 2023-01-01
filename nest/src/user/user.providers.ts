import { Provider } from '@nestjs/common'
import { DataSource, Repository } from 'typeorm'
import { User } from './entities/user.mongo.entity'

export const UserProviders: Provider<Repository<any>>[] = [
  {
    provide: 'USER_REPOSITORY',
    async useFactory(AppDataSource: DataSource) {
      return AppDataSource.getRepository(User)
    },
    inject: ['MONGODB_DATA_SOURCE'],
  },
]
