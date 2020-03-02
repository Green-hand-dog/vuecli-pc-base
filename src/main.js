import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';

// 关闭生产环境的运行（警告)信息
Vue.config.productionTip = false;

// 通用全局样式引入
import './assets/style/common.scss';

// 引入element ui 
import { Button, Select } from 'element-ui';
Vue
.use(Button)
.use(Select)
;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
