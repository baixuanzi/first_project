import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: () => import('../components/common/Home'),
    meta: {title: '自述文件'},
    children: [
      {
        path: '/dashboard',
        component: () => import('../components/page/Dashboard'),
        meta: {title: '系统首页'}
      },
      {
        path: '/403',
        component: () => import('../components/page/403'),
        meta: {title: '403'}
      },
      {
        path: '404',
        component: () => import('../components/page/404'),
        meta: {title: '404'}
      },
      {
        path: '/xinjianliucheng',
        component: () => import('../components/HelloWorld'),
        meta: {title: '新建流程'}
      },
      {
        path: '/editor',
        component: () => import('../components/page/Test'),
        meta: {title: '编辑'}
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../components/page/Login'),
    meta: {title: '登录'}
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
