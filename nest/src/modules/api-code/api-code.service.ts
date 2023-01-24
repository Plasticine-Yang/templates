import { Inject, Injectable } from '@nestjs/common'

import {
  ApiCodeDescriptionMetadata,
  API_CODE_DESCRIPTION_METADATA_KEY,
} from 'src/decorators'
import { API_CODE_PROVIDER_KEY } from './api-code.provider'

type ApiCodeDescriptor = Record<number, string>

@Injectable()
export class ApiCodeService {
  private apiCodeDescriptor: ApiCodeDescriptor

  constructor(
    @Inject(API_CODE_PROVIDER_KEY)
    private apiCodeProvider: Record<string, number>,
  ) {
    this.apiCodeDescriptor = this.generateApiCodeDescriptor()
  }

  private generateApiCodeDescriptor(): ApiCodeDescriptor {
    const apiCodeDescriptor: ApiCodeDescriptor = {}

    // 遍历 apiCodeProvider 的所有静态属性 获取其对应的 metadata
    for (const propertyKey in this.apiCodeProvider) {
      // 取出 propertyKey 对应的 metadataKeys
      const metadata: ApiCodeDescriptionMetadata | undefined =
        Reflect.getMetadata(
          API_CODE_DESCRIPTION_METADATA_KEY,
          this.apiCodeProvider,
          propertyKey,
        )

      if (metadata) {
        const { apiCode, description } = metadata
        apiCodeDescriptor[apiCode] = description
      }
    }

    return apiCodeDescriptor
  }

  findAll() {
    return this.apiCodeDescriptor
  }

  findOne(apiCode: number) {
    return this.apiCodeDescriptor[apiCode]
  }
}
