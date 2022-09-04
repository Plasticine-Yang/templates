import { App } from 'vue'
import { router } from '~/router'

export const setupApp = (app: App) => {
  app.use(router)
  app.mount('#app')
}
