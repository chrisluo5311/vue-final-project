import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import App from './App.vue';
import router from './router';
import { currency } from './methods/filter';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency
}
app.use(VueAxios, axios);
app.use(router);
app.component('LoadingComponent', Loading);
app.mount('#app');
