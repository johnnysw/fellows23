<template>
  <div>
    <div class="container">
      <ul>
        <li @click='$router.push("/musicdetail")' v-for="(items,index) in dataList" :key='index+"ml"'>
          <img :src="items.bg"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  created() {
    this.$emit('routerChange','music')
    this.getData();
  },
  data(){
    return{
      dataList:[]
    }
  },
  methods:{
    getData(){
      axios.get('./data/musiclist.json')
      .then((res)=>{
        this.dataList = res.data.albums
      })
      .catch(()=>{

      })
    }
  }
}
</script>
<style scoped>
  ul li{
    float: left;
    width: 50%;
  }
  ul li img{
    width: 100%
  }
</style>

