<template>
  <div>
    <div class="container">
      <ul>
        <li @click="goDetail(items.id)" v-for="(items,index) in datas" :key="index">
          <div class="item-img">
            <img :src="items.images.small" alt="">
          </div>
          <div class="item-info">
            <h4>{{items.title}}</h4>
            <span v-for="(item,index1) in items.casts" :key="index1">{{item.name}}/</span>
            <p>{{items.collect_count}}已观看</p>
            <p>年份：{{items.year}}</p>
            <span v-for="(item2,indexs) in items.genres" :key="indexs+'12'">{{item2}}/</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="loading" v-show="loadingShow">
      <div class="image">
        <img src="@/assets/img/loading.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$emit('routerEmit', 'movie');
    activeNav = 'movie'
    this.getData();
  },
  data(){
    return{
      datas:[],
      loadingShow:false,
      isEnd:false
    }
  },
  methods:{
    getData(){
      // https://api.myjson.com/bins/1a1xac
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start='+this.datas.length+'&count=10')
      .then((response)=> {
        this.datas =this.datas.concat(response.data.subjects);
        this.loadingShow = false
        console.log(this.datas);
        if(response.data.subjects.length == 0){
          this.isEnd = true;
        }
      })
      .catch((error) => {
        console.log(error);
      }); 
    },
    goDetail(id){
      this.$router.push({name:'moviedetail',params:{movieId:id}})
    }
  },
  mounted () {
    window.onscroll=()=>{
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeigth = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;
        if(scrollTop+clientHeight==scrollHeigth){
          if(!this.isLoading){
            if(!this.isEnd){
              this.loadingShow = true;
              this.getData();
            }
          }
        } 
     }
  }
}
</script>
<style scoped>
.container {
  padding: 1rem 0.2rem;
}
.container li {
  border-bottom: 1px solid #333;
  padding: 0.3rem 0.2rem;
  display: flex;
}
.container li:last-child {
  border-bottom: none;
}
.container li .item-img {
  flex-grow: 1;
  width: 0;
}

.container li .item-info {
  flex-grow: 2;
  width: 0;
  margin-left: 0.3rem;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}
.loading .image {
  position: absolute;
  padding: 1rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
