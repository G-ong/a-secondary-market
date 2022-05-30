import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(Vuex)

// Vue.prototype.$ajax = axios
new Vue({
    render: h => h(App),
    axios,
    router: router,
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')