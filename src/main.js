import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// import normalize.css
import 'normalize.css'

// import boxicons
import 'boxicons/css/boxicons.min.css'

createApp(App).use(store).mount('#app')
