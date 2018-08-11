<template>
  <div>
    <h1>电影名称：{{$route.params.id}}</h1>
  </div>
</template>
<script>
export default {
  created() {
    this.getData()
  },
  methods:{
    getData(){
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
      .then((res)=>{
        console.log(res);
        
      })
      .catch(()=>{

      })
    }
  }
}
</script>

