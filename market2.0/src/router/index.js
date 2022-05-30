import VueRouter from 'vue-router'
//引入组件
import HomePage from '../components/HomePage.vue'
import order from '../components/order.vue'
import order1 from '../components/order1.vue'
import sell from '../components/sell.vue'
import news from '../components/news.vue'
import my from '../components/my.vue'
import my2 from '../components/my2.vue'
import find from '../components/find.vue'
import find1 from '../components/find1.vue'
import login from '../components/login.vue'
import list from '../components/list.vue'
import check from '../components/check.vue'
import check1 from '../components/check1.vue'
import deal from '../components/deal.vue'
import detail from '../components/detail.vue'
import goodDetail from '../components/goodDetail.vue'
import change from '../components/change.vue'
//创建并暴露一个路由器
export default new VueRouter({
    routes: [{
            path: '/',
            component: HomePage,
        },
        {
            path: '/order',
            component: order,
        },
        {
            path: '/order1',
            component: order1,
        },
        {
            path: '/sell',
            component: sell,
        },
        {
            path: '/news',
            component: news,
        },
        {
            path: '/my',
            component: my,
        },
        {
            path: '/find',
            component: find,
        },
        {
            path: '/login',
            component: login,
        },
        {
            path: '/list',
            component: list,
        },
        {
            path: '/check',
            component: check,
        },
        {
            path: '/check1',
            component: check1,
        },
        {
            path: '/deal',
            component: deal,
        },
        {
            path: '/detail',
            component: detail,
        },
        {
            path: '/my2',
            component: my2,
        },
        {
            path: '/goodDetail',
            component: goodDetail,
        },
        {
            path: '/find1',
            component: find1,
        },
        {
            path: '/change',
            component: change,
        }
    ]
})