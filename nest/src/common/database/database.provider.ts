import { DataSource } from 'typeorm'

import { Provider } from '@nestjs/common'

import { mongodbProvider } from './config'

const DatabaseProviders: Provider<DataSource>[] = [mongodbProvider]

export { DatabaseProviders }
