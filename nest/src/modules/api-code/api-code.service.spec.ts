import { Test } from '@nestjs/testing'
import { ApiCodeDescription } from 'src/decorators'
import { API_CODE_PROVIDER_KEY } from './api-code.provider'

import { ApiCodeService } from './api-code.service'

describe('ApiCodeService', () => {
  let service: ApiCodeService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ApiCodeService,
        {
          provide: API_CODE_PROVIDER_KEY,
          useValue: MOCK_API_CODE,
        },
      ],
    }).compile()

    service = module.get(ApiCodeService)
  })

  it('should find all api code', () => {
    const apiCodeDescription = service.findAll()

    expect(apiCodeDescription).toMatchInlineSnapshot(`
      {
        "0": "api 正常响应码",
        "1000": "实体不存在",
      }
    `)
  })

  it('should find api code description by api code', () => {
    const apiCodeDescription = service.findOne(0)
    expect(apiCodeDescription).toMatchInlineSnapshot('"api 正常响应码"')
  })
})

class MOCK_API_CODE {
  @ApiCodeDescription('api 正常响应码')
  static SUCCESS = 0

  @ApiCodeDescription('实体不存在')
  static ENTITY_NOT_EXIST = 1000
}
