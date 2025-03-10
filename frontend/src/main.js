import { createApp } from 'vue';
import App from './App.vue';
import './main.css';

const app = createApp(App)

if (document.querySelector('#app')) {
    app.mount('#app')
} else {
    console.error('#app didnt found')
}