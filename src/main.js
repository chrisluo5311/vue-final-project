import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import $httpPushMessageState from '@/methods/pushMessageState';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
import { currency, date, formatTime, toUnixStamp } from './methods/filter';

const app = createApp(App);

// globalProperties
app.config.globalProperties.$filters = {
  currency, date, formatTime, toUnixStamp
}
app.config.globalProperties.$httpPushMessageState = $httpPushMessageState;

// vee-validate
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});
setLocale('zh_TW'); // 設定預設語系

app.use(VueAxios, axios);
app.use(router);
app.component('LoadingComponent', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
