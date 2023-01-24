import { Module } from '@nestjs/common'

import { API_CODE } from 'src/constants'

import { ApiCodeController } from './api-code.controller'
import { API_CODE_PROVIDER_KEY } from './api-code.provider'
import { ApiCodeService } from './api-code.service'

@Module({
  controllers: [ApiCodeController],
  providers: [
    {
      provide: API_CODE_PROVIDER_KEY,
      useValue: API_CODE,
    },
    ApiCodeService,
  ],
})
export class ApiCodeModule {}
