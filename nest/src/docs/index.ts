import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { NestFastifyApplication } from '@nestjs/platform-fastify'

import pkg from '../../package.json'

const setupDocument = (app: NestFastifyApplication) => {
  const config = new DocumentBuilder()
    .setTitle(pkg.name)
    .setDescription(pkg.description)
    .setVersion(pkg.version)
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/api/doc', app, document)
}

export { setupDocument }
