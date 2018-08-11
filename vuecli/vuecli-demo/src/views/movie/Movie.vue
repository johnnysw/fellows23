<template>
  <div>
    <div class="container">
      <ul>
        <li @click="$router.push({name:'moviedetail',params:{id:items.id}})" v-for="(items,index) in dataList" :key='index+"dl"'>
          <div>
            <img :src="items.images.small" alt="">
          </div>
          <div>
            <h3>{{items.title}}</h3>
            <span v-for="(items,index) in items.casts" :key="index+'mc'">{{items.name}}/</span>
            <p>{{items.collect_count}}人已观看</p>
            <p>年份{{items.year}}</p>
            <span v-for="(items,index) in items.genres" :key="index+'mg'">{{items}}/</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="loading" v-show="!isFinish">
      <div class="load-content">
        <img src="@/assets/loading.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getData()
  },
  data () {
    return {
      dataList:[],
      isFinish:true,
    }
  },
  methods:{
    getData(){
      this.isFinish = false;
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start='+this.dataList.length+'&count=10')
      .then((response) => {
        this.dataList = this.dataList.concat(response.data.subjects)
        this.isFinish = true;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    
  },
  mounted() {
    window.onscroll = ()=>{
      console.log("可视高度:"+document.documentElement.clientHeight);
      console.log('滚动高度：'+document.documentElement.scrollHeight);
      console.log(document.documentElement.scrollTop);
      let cHeight = document.documentElement.clientHeight;
      let sHeight = document.documentElement.scrollHeight;
      let sTop = document.documentElement.scrollTop;
      if(sTop + cHeight == sHeight){
        if(this.isFinish){
          this.getData();
        }
      }
    }
  },
  

}

</script>
<style scoped>
.loading{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.5);
}
.load-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 1rem;
  border-radius: .1rem;
  background: rgba(255,255,255,.5);
}
ul{
  padding:0 .2rem;
}
li{
  display: flex;
  border-bottom: 1px solid #999;
  padding:.5rem 0;
}
li div{
  width: 0;
}
li div:first-child{
  flex-grow: 1
}
li div:last-child{
  flex-grow: 2;
  margin-left: .5rem
}
</style>
