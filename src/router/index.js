import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/Main.vue'
import Products from '@/pages/product/Products.vue'


Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/main',
            name: 'Main',
            component: Main
        },
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },

    ]
})