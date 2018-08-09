<template>
  <div>
    <h1>联系我们</h1>
    <router-link :to="{name:'test1',params:{name:'lisi',age:'30'}}">test1</router-link> |
    <router-link to="/connect/test2/zhangsan/20">test2</router-link>|
    <router-link to="/connect/backtest2/zhangsan/20">back test2</router-link> 
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
 
</style>


