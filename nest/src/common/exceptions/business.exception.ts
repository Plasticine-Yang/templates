import { HttpException, HttpStatus } from '@nestjs/common'
import { BUSINESS_ERROR_CODE } from './business.error.codes'

interface BusinessError {
  code: number
  message: string
}

class BusinessException extends HttpException {
  constructor(err: BusinessError | string) {
    if (typeof err === 'string') {
      err = {
        code: BUSINESS_ERROR_CODE.COMMON,
        message: err,
      }
    }

    super(err, HttpStatus.OK)
  }

  static throwForbidden() {
    throw new BusinessException({
      code: BUSINESS_ERROR_CODE.ACCESS_FORBIDDEN,
      message: 'Permission Denied!',
    })
  }
}

export { BusinessException }
