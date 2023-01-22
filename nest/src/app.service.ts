import { Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

interface MySQLConfig {
  host: string
  port: number
  username: string
  password: string
}

interface EnvironmentVariables {
  mysql: MySQLConfig
}

@Injectable()
export class AppService {
  @Inject(ConfigService)
  private configService: ConfigService<EnvironmentVariables>

  getHello(): string {
    return 'Hello World!'
  }

  getEnv() {
    const mysqlConfig = this.configService.get('mysql', {
      host: 'default-host',
      port: 3306,
      username: 'default-user',
      password: 'default-password',
    })

    return mysqlConfig
  }
}
