import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// import normalize.css
import 'normalize.css'

// import boxicons
import 'boxicons/css/boxicons.min.css'

createApp(App).use(store).use(router).mount('#app')
