import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from '../pages/WelcomePage.vue'
import TimePage from '../pages/TimePage.vue'
import EChartsPage from '../pages/EChartsPage.vue'
import _404Page from '../pages/_404Page.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: WelcomePage,
    },
    {
        path: '/time',
        name: 'time',
        component: TimePage,
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: EChartsPage,
    },
    {
        path: '/_404',
        name: '_404',
        component: _404Page,
    },
    {
        path: '*',
        name: 'other',
        redirect: '/_404',
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
