import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      redirect:'/dashboard',
      component: DefaultLayout,
      meta:{requiresAuth:true},
      children:[
        {path:'/dashboard',name:'dashboard',component: ()=> import('@/views/Dashborad.vue')}
      ]
    },

    {
      path: '/auth',
      redirect:'/login',
      component: AuthLayout,
      meta:{isGues:true},
      children:[
        {path:'/login',name:'login',component: ()=> import('@/views/Auth/Login.vue')}
      ]

    },
  ],
})

export default router
