import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestFastifyApplication } from '@nestjs/platform-fastify'

import { AllExceptionFilter } from './common/filters/base.exception.filter'
import { HttpExceptionFilter } from './common/filters/http.exception.filter'
import { TransformInterceptor } from './common/interceptors/transform.interceptor'
import { fastifyAdaptor } from './common/fasify'

import { AppModule } from './app.module'

import { setupDocument } from './docs'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdaptor,
  )

  // 接口版本化管理
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })

  // 统一响应体
  app.useGlobalInterceptors(new TransformInterceptor())

  // 全局拦截异常
  app.useGlobalFilters(new AllExceptionFilter(), new HttpExceptionFilter())

  // 全局字段校验
  app.useGlobalPipes(new ValidationPipe())

  // Swagger 文档
  setupDocument(app)

  await app.listen(3000)
}

bootstrap()
