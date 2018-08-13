<template>
  <div>
    <div class="container">
      <v-touch tag="div" class="content" @tap="swipetap" @swiperight="onswiperight" @swipeleft="onSwipeLeft">Swipe me!</v-touch>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
export default {
 created() {
    this.$emit('routerChange','photo')
  },
  methods: {
    onSwipeLeft(){
      console.log('left');
      
    },
    swipetap(){
      console.log('tap');
      
    },
    onswiperight(){
      console.log('right');
      
    }
  }
  
}
</script>
<style scoped>
.content{
  width: 100px;
  height: 100px;
  background: red;
  margin:100px auto;
}
</style>

