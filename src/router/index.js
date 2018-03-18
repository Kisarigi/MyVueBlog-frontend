import Vue from 'vue'
import Router from 'vue-router'
import blog from '../components/Blog'
import admin from '../components/Admin'
import article from '../components/Article'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/article',
      name: 'blog',
      component: blog
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/showArticle',
      name: 'showArticle',
      component: article
    },
  ]
})
