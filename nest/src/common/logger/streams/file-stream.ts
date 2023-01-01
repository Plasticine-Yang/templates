import { createWriteStream, mkdirSync } from 'fs'
import { resolve } from 'path'

import dayjs from 'dayjs'

import pretty from 'pino-pretty'

import { LOG_PATH } from 'src/common/constants'

import type { FastifyLoggerStreamDestination } from 'fastify/types/logger'

export function createFileStream(): FastifyLoggerStreamDestination {
  const logFilePath = resolveLogFilePath()
  const writeStream = createWriteStream(logFilePath)
  const prettyStream = pretty({ destination: writeStream })

  return prettyStream
}

function resolveLogFilePath() {
  const logFileName = dayjs().format('log-YYYY-MM-DD-HH-mm-ss.txt')

  // 确保日志目录存在
  mkdirSync(LOG_PATH, { recursive: true })

  return resolve(LOG_PATH, logFileName)
}
