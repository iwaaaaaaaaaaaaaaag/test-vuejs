import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)


router.beforeEach((to, from, next) => {
    console.log('global-beforeEach');
    if (to.path === "/users/1"){
        next("/");      
    }
    next();
  })
  

app.use(router)
app.mount('#app')
