import { TypeOrmModule } from '@nestjs/typeorm'
import { loadConfig } from 'src/utils'

const { host, port, username, password, database } = loadConfig('MYSQL_CONFIG')

export const MySQLModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host,
  port,
  username,
  password,
  database,
  autoLoadEntities: true,
  synchronize: true,
})
