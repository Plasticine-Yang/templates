import { readFileSync } from 'fs'
import { resolve } from 'path'

import { parse } from 'yaml'

/** @description 获取项目运行环境 */
const getMode = (): NodeJS.ProcessEnv['MODE'] => {
  return process.env.MODE ?? 'development'
}

/** @description 读取项目配置 */
const loadConfig = () => {
  const mode = getMode()
  const yamlPath = resolve(process.cwd(), `.config/.${mode}.yaml`)
  const yamlFile = readFileSync(yamlPath, 'utf-8')
  const config = parse(yamlFile)

  return config
}

export { getMode, loadConfig }
