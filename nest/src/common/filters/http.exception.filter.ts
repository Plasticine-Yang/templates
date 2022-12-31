import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common'

import { FastifyReply, FastifyRequest } from 'fastify'
import { BusinessException } from '../exceptions/business.exception'
import { BusinessErrorResponse, BusinessResponse } from '../types'

@Catch(HttpException)
class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest<FastifyRequest>()
    const response = ctx.getResponse<FastifyReply>()
    const status = exception.getStatus()

    // 优先处理业务异常
    if (exception instanceof BusinessException) {
      const error = exception.getResponse()
      response.status(HttpStatus.OK).send({
        code: error['code'],
        message: error['message'],
        data: null,
      } as BusinessResponse)

      return
    }

    response.status(status).send({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.getResponse(),
    } as BusinessErrorResponse)
  }
}

export { HttpExceptionFilter }
