<template>
  <div :class="active">
    <header>
      <span @click="routerPush({name:'movie',title:'电影',id:'101',path:'/'})">首页</span>
      <h3>{{title}}</h3>
    </header>
    <nav>
      <ul>
        <!-- <li>电影</li>
        <li>音乐</li>
        <li>书籍</li>
        <li>图片</li> -->
        <li :class="{'nav-active':active==items.name}" @click='routerPush(items)' v-for="(items,index) in navList" :key="index+'nl'">{{items.title}}</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: ['movieTitle'],
  mounted() {
    this.$nextTick(function () {
      this.navList.forEach(val => {
        if(val.name == this.movieTitle){
          this.active = val.name;
          this.title = val.title;
        }
      });
    })
  },
  methods: {
    routerPush(obj){
      this.$router.push(obj.path);
      this.active = obj.name;
      this.title = obj.title;
    }
  },
  data(){
    return{
      active:"movie",
      title:'电影',
      navList:[
        {
          name:'movie',
          title:'电影',
          id:'101',
          path:'/'
        },
        {
          name:'music',
          title:'音乐',
          id:'102',
          path:'/music'
        },
        {
          name:'book',
          title:'图书',
          id:'103',
          path:'/book'
        },
        {
          name:'photo',
          title:'图片',
          id:'104',
          path:'/photo'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .nav-active{
    color: #fff;
  }
  .movie header,.movie nav{
    background-color: rgb(33, 150, 243);
  }
  .music header,.music nav{
    background-color: rgb(0, 150, 136);
  }
  .book header,.book nav{
    background-color: rgb(121, 85, 72);
  }
  .photo header,.photo nav{
    background-color: rgb(63, 81, 181);
  }
  header,nav{
    height: 1rem;
    width: 100%;
    position: fixed;
    z-index: 10;
    color: #fff;
  }
  header{
    top: 0;
  }
  header h3{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  header span{
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    margin-left: .3rem;
  }
  nav{
    bottom: 0;
  }
  nav ul{
    display: flex;
  }
  nav ul li{
    color: #ccc;
    flex-grow: 1;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
  }
</style>
