<template>
  <div>
    <ul>
      <li @click='goDetail(index)' v-for="(item,index) in dataList" :key="index+'pdl'">
        <img :src="item.src" alt="">
      </li>
    </ul>
  </div>
</template>
<script>

export default {
 created() {
    this.$emit('routerChange','photo');
    this.getData();
  },
  data(){
    return{
      dataList:[]
    }
  },
  methods: {
    goDetail(index){
      this.$store.commit('changIndex',index);
      this.$store.commit('changLength',this.dataList.length);
      this.$router.push('/photodetail')
    },
    getData(){
      axios.get("./data/photodata.json")
      .then((res)=>{
        console.log(res);
        this.dataList = res.data.photoData
      })
      .catch(()=>{

      })
    }
  }
  
}
</script>
<style scoped>
.content{
  width: 100px;
  height: 100px;
  background: red;
  margin:100px auto;
}
ul li{
  width: 50%;
  float: left;
}
</style>

