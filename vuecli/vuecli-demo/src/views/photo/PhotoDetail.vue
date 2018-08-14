<template>
  <div>
    <div class="container" @click="swipetap">
      <v-touch tag="div"  :style='styleObj' class="content"  @swiperight="onswiperight" @swipeleft="onSwipeLeft">Swipe me!</v-touch>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
export default {
 created() {
    this.$emit('routerChange','photo');
    if(this.$store.state.nowIndex==-1){
      this.$router.push("/photo")   
    }
  },
  data(){
    return{
      nowIn:this.$store.state.nowIndex+1,
      thisLength:this.$store.state.listLength
    }
  },
  computed:{
    styleObj(){
      return{
        background:`#000 url("./img/${this.nowIn}.jpg") no-repeat center/contain`
      }
    }
  },
  methods: {
    onSwipeLeft(){
      this.nowIn++;
      if(this.nowIn==this.thisLength+1){
        this.nowIn = 1
      }
    },
    swipetap(){
      this.$router.push("/photo")      
    },
    onswiperight(){
      this.nowIn--;
      if(this.nowIn==0){
        this.nowIn = this.thisLength
      }
    }
  }
  
}
</script>
<style scoped>
.content{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

