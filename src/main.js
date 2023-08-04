import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import $httpPushMessageState from '@/methods/pushMessageState';

import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filter';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency, date
}
app.config.globalProperties.$httpPushMessageState = $httpPushMessageState;

app.use(VueAxios, axios);
app.use(router);
app.component('LoadingComponent', Loading);
app.mount('#app');
