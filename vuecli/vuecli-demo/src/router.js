import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Error from './views/404.vue'
import aboutCom1 from '@/components/aboutCom1.vue'
import aboutCom2 from '@/components/aboutCom2.vue'

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
      component: About,
      // beforeEnter(to,from,next){
      //   console.log(to);
      //   console.log(from);
      //   next();
      // },
      children:[
        {
          path:'test1/:username/:userage',
          name:'test1',
          component:aboutCom1
        },
        {
          path:'test2',
          name:'test2',
          component:aboutCom2
        }
      ]
    },
    {
      path:'/home',
      redirect:"/"
    },
    {
      path:'/redir',
      name:'redir',
      redirect:"/about/test1/:username/:userage"
    },
    {
      path:'/alia',
      component:About,
      alias:'/aliasname'
    },
    {
      path:'*',
      component:Error,
    }
  ]
})
