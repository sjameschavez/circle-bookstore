

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import Toast from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


const app = createApp(App)

app.use(Toast, {
  autoClose: 3000,
  theme: 'light',
})

app.use(createPinia())
app.use(router)

app.mount('#app')
