import {createApp} from 'vue'
import store from "@/Scripts/store"
import router from "@/Scripts/router";
import App from './App.vue'


createApp(App).use(store).use(router).mount('#app')
