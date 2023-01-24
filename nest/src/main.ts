import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { Logger } from 'nestjs-pino'

import { AppModule } from './app.module'

import {
  BusinessHttpExceptionFilter,
  UncaughtExceptionFilter,
} from './common/exception-filters'
import { BusinessResponseInterceptor } from './common/interceptors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // api 前缀
  app.setGlobalPrefix('api')

  // api 版本管理
  app.enableVersioning({
    // 以类似 URI: /api/v1 的方式进行版本管理
    type: VersioningType.URI,
    defaultVersion: '1',
  })

  // 日志
  app.useLogger(app.get(Logger))

  // 异常处理
  app.useGlobalFilters(
    // 处理未捕获的异常
    new UncaughtExceptionFilter(),

    // 处理业务异常
    new BusinessHttpExceptionFilter(),
  )

  app.useGlobalInterceptors(
    // 业务统一响应体
    new BusinessResponseInterceptor(),
  )

  // 全局字段校验
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000)
}
bootstrap()
