import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.less'
import router from './router'
import store from './store'

const app=createApp(App)
app.use(router) // 要在app.mount('#app')前边，不然会导致刷新页面无法渲染
app.use(store)
app.mount('#app')

export default app;