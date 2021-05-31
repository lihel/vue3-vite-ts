import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app=createApp(App)
app.mount('#app')
app.use(router)

let oneRun = true; 
router.beforeEach((to, from, next) => {
  next();
})