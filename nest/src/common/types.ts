/**
 * @description 业务统一响应体
 */
export interface BusinessResponse<T = unknown> {
  code: number
  message: string
  data: T | null
}

/**
 * @description 业务统一异常响应体
 */
export interface BusinessErrorResponse<T = unknown> {
  statusCode: number
  timestamp: string
  path: string
  message: T | null
}
