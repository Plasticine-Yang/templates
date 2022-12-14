import { createApp } from 'vue'
import App from './App.vue'

import { setupApp } from '~/setup'

const app = createApp(App)

setupApp(app)
