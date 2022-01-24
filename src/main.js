import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './plugins/i18n'

// import normalize.css
import 'normalize.css'

// import boxicons
import 'boxicons/css/boxicons.min.css'

createApp(App).use(store).use(router).use(i18n).mount('#app')
