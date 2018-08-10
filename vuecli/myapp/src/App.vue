<template>
  <div>
    <navigation :navTitle="propsTitle"></navigation>
    <router-view @routerEmit='changeRouter'/>
  </div>
</template>
<script>
import navigation from '@/components/public/Navigation.vue'
export default {
  data(){
    return{
      propsTitle:"music"
    }
  },
  components:{
    navigation
  },
  methods:{
    changeRouter(title){
      this.propsTitle=title
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
  padding:1rem 0;
}
</style>
