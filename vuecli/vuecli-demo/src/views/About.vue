<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name:'test1',params:{username:'lisi',userage:'20'}}">子路由1</router-link>
    <router-link to="/about/test2">子路由2</router-link>
    <router-view></router-view>
  </div>
  
</template>
<script>
export default {
  
 beforeRouteEnter(to, from, next){
    // console.log(to);
    // console.log(from);
    next();
  }
}
</script>


