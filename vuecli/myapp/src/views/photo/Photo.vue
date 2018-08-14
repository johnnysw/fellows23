<template>
  <div>
    <div class="container">
      <ul>
        <li @click="goDetail(index)" v-for="(item,index) in dataList" :key="index+'dl'">
          <img :src="item.src" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
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
        this.dataList = res.data.photoData;
        this.$store.commit('savePhotoList',this.dataList)
      })
      .catch(()=>{

      })
    },
    goDetail(index){
      this.$store.commit('changeIndex',index+1);
      this.$router.push('/photodetail')
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

