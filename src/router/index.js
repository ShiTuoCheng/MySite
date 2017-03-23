import Vue from 'vue'
import Router from 'vue-router'
//页面组件
import Index from '../pages/index.vue'
import Developed from '../pages/developed.vue'
import AboutMe from '../pages/aboutMe.vue'
import Welcome from '../pages/welcome.vue'
import Article from '../pages/article.vue'
import ArticleDetail from '../pages/articleDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/index',
      component: Index
    },{
      path: '/article',
      component: Article
    },{
      path: '/post',
      component: Developed
    },{
      path: '/aboutMe',
      component: AboutMe
    },{
      path: '/articleDetail',
      component: ArticleDetail
    }
  ]
})
