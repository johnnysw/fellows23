import Vue from 'vue'
import Router from 'vue-router'
import Error from './views/404.vue'
import Movie from './views/movie/Movie.vue'
import MovieDetail from './views/movie/MovieDetail.vue'
import Music from './views/music/Music.vue'
import Photo from './views/photo/Photo.vue'
import Book from './views/book/Book.vue'
import MusicDetail from './views/music/MusicDetail.vue'
import PhotoDetail from './views/photo/PhotoDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/moviedetail',
      name: 'moviedetail',
      component:MovieDetail
      
    },
    {
      path: '/musicdetail',
      name: 'musicdetail',
      component:MusicDetail
      
    },
    {
      path: '/book',
      name: 'book',
      component:Book
      
    },
    {
      path: '/photo',
      name: 'photo',
      component:Photo
    },
    {
      path: '/photodetail',
      name: 'photodetail',
      component:PhotoDetail
    },
    {
      path:'*',
      component:Error,
    }
  ]
})
