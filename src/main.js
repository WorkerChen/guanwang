// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import Bus from 'vue-bus'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap3/dist/css/bootstrap.min.css'
import 'bootstrap3/dist/fonts/glyphicons-halflings-regular.ttf'
import 'bootstrap3/dist/fonts/glyphicons-halflings-regular.eot'
import '../static/css/iconfont/iconfont.css'


Vue.use(VueAxios, axios);

Vue.use(ElementUI)
Vue.use(Bus)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#App',
    router,
    components: { App },
    template: '<App/>'
})