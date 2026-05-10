import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initSessionFromStorage } from './stores/sessionStore'

initSessionFromStorage()

createApp(App).use(router).mount('#app')
