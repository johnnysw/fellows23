<template>
  <div class="container">
    <!-- <h1>detail{{$route.params.id}}</h1> -->
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:tap="onSwipeTap" v-on:swiperight="onSwipeRight" class="content" :style="styleobj"></v-touch>
  </div>
</template>
<script>
import Vue from 'vue'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
export default {
  data(){
    return{
      imgid:this.$route.params.id+1
      // styleobj:{
      //   background:" #000 url('../../../public/img/1.jpg') no-repeat center/contain"
      // }
    }
  },
  created () {
    this.$emit('routerEmit', 'photo');
  },
  computed:{
    styleobj(){
      return {background:`#000 url('./img/${this.imgid}.jpg') no-repeat center/contain`}
    }
    
  },
  methods:{
    onSwipeLeft(){
      // this.imgid--
      console.log('left');
      
      
    },
    onSwipeRight(){
      // this.imgid++
      console.log('right');
    },
    onSwipeTap(){
      // this.$router.go(-1)
      console.log('tap');
      
    }
  }
}
</script>
<style scoped>
.content{
    
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
  }
</style>

