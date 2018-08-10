<template>
  <div>
    <div class="container">
      <h1>电影</h1>
      <ul>
        <li v-for="(items,index) in dataList" :key='index+"dl"'>
          {{items.title}}
        </li>
      </ul>
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
      dataList:[]
    }
  },
  methods:{
    getData(){
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters')
      .then((response) => {
        this.dataList = response.data.subjects
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>
<style scoped>

</style>
