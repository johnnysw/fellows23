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
      nowIndex:0,
      listLength:0
    }
  },
  created () {
    this.$emit('routerEmit', 'photo');
    if(this.$store.state.xNowIndex == 0){
      this.$router.push('/photo')
    }else{
      this.nowIndex = this.$store.state.xNowIndex;
      this.listLength = this.$store.state.xPhotoList.length;
    }
  },
  computed:{
    styleobj(){
      return {background:`#000 url('./img/${this.nowIndex}.jpg') no-repeat center/contain`}
    }
    
  },
  methods:{
    onSwipeLeft(){
      if(this.nowIndex+1<=this.listLength){
        this.nowIndex++;
      }else{
        this.nowIndex = 1
      }
      
      console.log(this.listLength);
      
    },
    onSwipeRight(){
      if(this.nowIndex>1){
        this.nowIndex--;
      }else{
        this.nowIndex = this.listLength
      }
    },
    onSwipeTap(){
      this.$router.go(-1)
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

