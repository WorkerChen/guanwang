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
import VueI18n from 'vue-i18n'
import '../static/css/modifyP.css'
import 'bootstrap3/dist/css/bootstrap.min.css'
import 'bootstrap3/dist/fonts/glyphicons-halflings-regular.ttf'
import 'bootstrap3/dist/fonts/glyphicons-halflings-regular.eot'
import '../static/css/iconfont/iconfont.css'
import '../static/css/font-awesome-4.7.0/css/font-awesome.min.css'
import { prototype } from 'node-notifier/notifiers/notificationcenter'


Vue.use(VueAxios, axios);
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(Bus)


Vue.prototype.isPc = function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = 1;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = 2;
            break;
        }
    }
    return flag;
}

Vue.config.productionTip = false

const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'zh', // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh': require('./languega/zh.json'), // 中文语言包
        'en': require('./languega/en.json') // 英文语言包
    }
})
/* eslint-disable no-new */
new Vue({
    el: '#App',
    router,
    i18n,
    components: {
        App
    },
    template: '<App/>'
})