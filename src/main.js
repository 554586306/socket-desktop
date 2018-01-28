// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import myView from '@/components/common'
import store from '@/store'

import 'iview/dist/styles/iview.css'
import '@/style/base/base.css'

Vue.use(iview)
Vue.use(myView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})