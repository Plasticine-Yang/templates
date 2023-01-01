import { FastifyAdapter } from '@nestjs/platform-fastify'
import { logger } from '../logger'

const fastifyAdaptor = new FastifyAdapter({
  logger,
})

export { fastifyAdaptor }
