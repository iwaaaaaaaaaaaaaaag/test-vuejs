import { createApp } from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import router from './router'

const app = createApp(App)

app.component("LikeNumber", LikeNumber)
app.config.globalProperties.$filter = {
    upperCase(value)
    {
        return value.toUpperCase()
    }
}
app.mixin({
    created() {
        console.log("global mixin")
    }
})

app.use(router)
app.mount('#app')
