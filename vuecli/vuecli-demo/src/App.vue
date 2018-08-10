<template>
  <div id="app">
    <navigation :movieTitle="movieName"></navigation>
    <div class="container">
      <router-view @routerChange='change'/>
    </div>
  </div>
</template>
<script>
import navigation from '@/components/Navigation.vue'
export default {
  data(){
    return{
      movieName:"movie"
    }
  },
  components:{
    navigation
  },
  methods:{
    change(name){
      this.movieName = name
    }
  }
}
</script>

<style scoped>
.container{
  padding: 1rem 0;
}
</style>
