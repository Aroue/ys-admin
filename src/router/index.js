import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login')
    },
    {
      path: '/',
      component: () => import('../components/Container'),
      children: [
        {
          path: '/',
          name: 'ys-home',
          meta: {},
          component: () => import('../views/article/homeArticle'),
        }
      ]
    }
  ]
})
