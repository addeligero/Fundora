import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'fundora',
    themes: {
      fundora: {
        dark: false,
        colors: {
          background: '#f4f7f0',
          surface: '#ffffff',
          primary: '#b9e96b',
          secondary: '#18312a',
          info: '#5d8bd2',
          warning: '#e88950',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
