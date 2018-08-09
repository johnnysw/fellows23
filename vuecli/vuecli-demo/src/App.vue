<template>
  <div id="app">
    <div>
      <button @click="home">首页</button>
      <button @click="back">返回</button>
      <button @click="forward">前进</button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/home">backhome</router-link>|
      <router-link :to="{name:'redir',params:{username:'zhangsan',userage:'30'}}">带参数重定向</router-link>|
      <router-link to="/alia">别名</router-link>
    </div>
    <div class="rooterbar">
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
      this.$router.push({name:'redir',params:{username:'zhangsan',userage:'30'}})
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
.rooterbar{
  position: relative;
}
.fade-enter-active{
  position: absolute;
  width: 100%;
  top:0;
  transition: all 1s ease;
  transform: translateX(100%);
}
.fade-enter-to{
transform: translateX(0)
}
.fade-leave-active{
  position: absolute;
  width: 100%;
  top:0;
  transition: all 1s ease;
  transform: translateX(0)
}
.fade-leave-to{
transform: translateX(-100%)
}
</style>
