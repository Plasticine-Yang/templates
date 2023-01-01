import { FastifyLoggerStreamDestination } from 'fastify/types/logger'
import pretty from 'pino-pretty'

export function createConsoleStream(): FastifyLoggerStreamDestination {
  const prettyStream = pretty()

  return prettyStream
}
