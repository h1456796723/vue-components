import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// 引入初始化样式
import '@/assets/css/reset.scss'

const app = createApp(App)
app.use(router)

app.mount('#app')
