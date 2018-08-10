<template>
  <div class="container">
    电影详情页面
    {{detailData.title}}
  </div>
</template>
<script>
export default {
  created() {
    this.getData();
  },
  data(){
    return{
      detailData:{}
    }
  },
  methods:{
    getData(){
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.$route.params.movieId).then((res)=>{
          console.log(res);
          this.detailData = res.data
        }).catch((res)=>{
          console.log("error!")
        })
    }
  }
}
</script>
