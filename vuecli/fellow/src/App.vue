<template>
  <div id="app">
    <div>
      <button @click="home">首页</button>
      <button @click="forward">前进</button>
      <button @click="back">后退</button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/connect">Connect</router-link>|
      <router-link to="/backhome">back home</router-link>|
      <router-link to="/aliashome">alias home</router-link>
    </div>
    <div class="router-trans">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    
     
  </div>
</template>
<script>
export default {
  methods: {
    home(){
      this.$router.push('/connect/backtest2/xiaoming/20');
    },
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-trans{
  position: relative;
}
.fade-enter{
  
  width: 100%;
  transform: translateX(-100%)
}
.fade-enter-active{
  transition: all 1s ease;
}
.fade-enter-to{
  position: absolute;
  top:0;
  width: 100%;
  transform: translateX(0)
}
.fade-leave{
  width: 100%;
  transform: translateX(0)
}
.fade-leave-active{
  transition: all 1s ease;
}
.fade-leave-to{
  position: absolute;
  top:0;
  width: 100%;
  transform: translateX(100%)
}
</style>
