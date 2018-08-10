import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/Movie.vue'
import MovieDetail from './views/movie/MovieDetail.vue'
import Music from './views/music/Music.vue'
import Photo from './views/photo/Photo.vue'
import Book from './views/book/Book.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie',
      component:Movie
      
    },
    {
      path: '/music',
      name: 'music',
      component:Music
      
    },
    {
      path: '/moviedetail',
      name: 'moviedetail',
      component:MovieDetail
      
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
    }
  ]
})
