// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Antd from 'ant-design-vue'
import ElementUI from 'element-ui'
import App from './App'
import 'ant-design-vue/dist/antd.css';
import 'element-ui/lib/theme-chalk/index.css';

/** 注册 Antd 组件 */
Vue.use(Antd);
/** 注册 element 组件 */
Vue.use(ElementUI, {size: 'small'});

/** 生产提示关闭 */
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
