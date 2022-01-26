import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(router);

app.mount('#app')
  .$nextTick(window.removeLoading);

console.log('fs', window.fs);
console.log('ipcRenderer', window.ipcRenderer);
