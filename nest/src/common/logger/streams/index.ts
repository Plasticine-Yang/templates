import { createConsoleStream } from './console-stream'
import { createFileStream } from './file-stream'

export const streams = [createConsoleStream(), createFileStream()]
