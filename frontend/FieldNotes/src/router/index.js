import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component: HomePage
    },
    {
        path:'/login',
        name:'login',
        component: LoginPage
    },
    {
        path:'/Regster',
        name:'register',
        component:RegisterPage
    },
    {
        path:'/dashboard',
        name:'dashboard',
        component:DashboardPage
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router