import { DataSource, DataSourceOptions } from 'typeorm'

import { Provider } from '@nestjs/common'
import { resolve } from 'path'
import { PROJECT_ROOT } from 'src/common/constants'

function resolveDBProvider(dbConfig: DataSourceOptions) {
  const resolvedDBConfig: DataSourceOptions = {
    ...dbConfig,
    entities: [
      resolve(
        __dirname,
        `${PROJECT_ROOT}/**/*.${dbConfig.entities}.entity{.ts,.js}`,
      ),
    ],
  }

  const dataSource = new DataSource(resolvedDBConfig)

  const dbProvider: Provider<DataSource> = {
    provide: `${dbConfig.type.toUpperCase()}_DATA_SOURCE`,
    async useFactory() {
      await dataSource.initialize()
      return dataSource
    },
  }

  return dbProvider
}

export { resolveDBProvider }
