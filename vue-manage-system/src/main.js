import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //默认主题
//echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import './assets/css/icon.css'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(ElementUI,{
  size: 'small'
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
