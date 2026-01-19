import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'   // 👈 THÊM DÒNG NÀY
import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App)
  .use(router)                // 👈 THÊM DÒNG NÀY
  .mount('#app')
