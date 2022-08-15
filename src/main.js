import { createApp } from 'vue'
import App from './App.vue'
import Modal from './components/UI/Modal'
import router from 'vue-router'

const app = createApp(App)

app.component('Modal', Modal)
app.use(router)
app.mount('#app')

console.log(app)