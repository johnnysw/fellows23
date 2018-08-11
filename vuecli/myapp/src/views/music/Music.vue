<template>
  <div>
    <div class="container">
      <ul>
        <li @click="goDetail" v-for="item in musicList" :key="item.id">
          <img :src="item.bg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  created () {
    this.$emit('routerEmit', 'music');
    this.getData()
  },
  data(){
    return{
      musicList:[]
    }
  },
  methods:{
    getData(){
      axios.get('./data/musiclist.json').then((res)=>{
        this.musicList = res.data.albums
      }).catch(()=>{

      })
    },
    goDetail(){
      this.$router.push('/musicdetail');
    }
  }
}
</script>
<style scoped>
ul{
  display: flex;
  flex-wrap: wrap;
}
ul li{
  width: 50%;
}
ul li img{
  width: 100%
}
</style>
