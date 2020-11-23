import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Header from '../components/Header.vue'
import Mneu from '../components/Mneu.vue'
import mind1 from '../views/mind1.vue'
import mind2 from '../views/mind2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
 
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {  path: '/Header',
          name: 'Header',
         component: Header,
       // meta: ['数据管理', '用户列表']
      },
      {  path: '/Mneu',
         name: 'Mneu',
          component: Mneu,
   // meta: ['数据管理', '用户列表']
      } ,{
        path: '/mind1',
        name: 'mind1',
        component: () => import(/* webpackChunkName: "about" */ '../views/mind1.vue'),
      },
      {
        path: '/mind2',
        name: 'mind2',
        component: () => import(/* webpackChunkName: "about" */ '../views/mind2.vue'),
      },
      // ,
      // {
      //   path: '/mind1',
      //   name: 'mind1',
      //   component: mind1
      // },
      //  {
      //   path: '/mind2',
      //   name: 'mind2',
      //   component: mind2
      // },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
