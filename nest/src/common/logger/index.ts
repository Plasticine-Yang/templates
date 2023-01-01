import type { FastifyLoggerOptions } from 'fastify'
import type { PinoLoggerOptions } from 'fastify/types/logger'

import { streams } from './streams'

import { multistream } from 'pino'

const logger: FastifyLoggerOptions & PinoLoggerOptions = {
  stream: multistream(streams),
}

export { logger }
