import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/login')
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
        },
        {
          path: '/article/add-article',
          name: 'ys-article_add-detail',
          meta: {},
          component: () => import('../views/article/add-article'),
        },
        {
          path: '/article/:id',
          name: 'ys_article-details',
          meta: {},
          component: () => import('../views/article/article-details'),
        },
        {
          path: '/article-type/:id',
          name: 'ys_article-type_articles',
          meta: {},
          component: () => import('../views/article/article-type-articles'),
        },
      ]
    }
  ]
})
