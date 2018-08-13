<template>
  <div>
    <div class="container">
      <ul>
        <li @click="$router.push({name:'photodetail',params:{id:index}})" v-for="(item,index) in dataList" :key="index+'dl'">
          <img :src="item.src" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    this.$emit('routerEmit', 'photo');
    this.getData();
  },
  data(){
    return{
      dataList:[]
    }
  },
  methods:{
    getData(){
      axios('./data/photodata.json')
      .then((res)=>{
        this.dataList = res.data.photoData
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
img{
  width: 100%;
}
</style>

