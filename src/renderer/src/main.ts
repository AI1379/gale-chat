import { createApp } from 'vue';
import App from './App.vue';
import "element-plus/theme-chalk/index.css"

createApp(App)
  .mount('#app')
  .$nextTick(window.removeLoading);

console.log('fs', window.fs);
console.log('ipcRenderer', window.ipcRenderer);
