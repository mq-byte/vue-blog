import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Applications from './views/Applications.vue'
// import Blog from './views/Blog.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue')
    },
    {
      path: '/itemapp',
      name: 'itemapp',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "aplications" */ './views/Itemapp.vue')
    },
    {
      path: '/blogDetail/:type/:name',
      name: 'blogDetail',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "aplications" */ './views/BlogDetail.vue')
    },
  ]
})
