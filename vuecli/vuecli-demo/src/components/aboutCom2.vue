<template>
  <div>
    <h1>about子路有页面2</h1>
     <h1>{{$store.state.num}}</h1> 
     <h1>{{count}}</h1>
     <button @click="add">增加</button>
     <button @click="$store.commit('reduce')">减小</button>
  </div>
</template>

<script>
import store from '@/store.js'
import {mapState} from 'vuex'
export default {
  store,
  computed:mapState({
    count(state){
      return state.num
    }
  }),
  // computed:{
  //   conut(){
  //     return store.state.num
  //   }
  // },
  methods:{
    add(){
      console.log(1);
      
      store.commit('add')
    }
  }
}
</script>

<style scoped>

</style>

