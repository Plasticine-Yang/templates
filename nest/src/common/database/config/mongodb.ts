import { DataSourceOptions } from 'typeorm'

import { loadConfig } from 'src/utils'

import { resolveDBProvider } from './utils'

const { MONGODB_CONFIG } = loadConfig()

const mongodbProvider = resolveDBProvider(MONGODB_CONFIG as DataSourceOptions)

export { mongodbProvider }
