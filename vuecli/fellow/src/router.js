import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Connect from './views/Connect.vue'
import ConnectCom1 from '@/components/ConnectCom1.vue'
import ConnectCom2 from '@/components/ConnectCom2.vue'
import ErrorPage from '@/views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),//懒加载
      // beforeEnter(to,from,next){
      //   // console.log(to);
      //   // console.log(from);
      //   next();
      // }
    },
    {
      path: '/connect',
      name: 'connect',
      component: Connect,
      children:[
        {
          path: 'test1',
          name: 'test1',
          component: ConnectCom1,
        },
        {
          path: 'test2/:name/:age',
          name: 'test2',
          component: ConnectCom2,
        },
        {
          path:'backtest2/:name/:age',
          redirect:'test2/:name/:age'
        }
      ]
    },
    {
      path:'/backhome',
      redirect:'/'
    },
    {
      path:'/aliashome',
      component:Home,
      alias:"/homealias"
    },
    {
      path:'*',
      component:ErrorPage
    }
  ]
})
