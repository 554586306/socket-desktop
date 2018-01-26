// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/style/reset.css'
import iview from 'iview'
import myView from '@/components/common'
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(iview)
Vue.use(myView)


// 注册公共组件
//Object.keys(CommonComponents).forEach((key) => {
//var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
//Vue.component(`v${name}`, CommonComponents[key])
//})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
