<template>
  <div :class="active">
    <header>
      <span @click="routerPush({path:'/',title:'电影',name:'movie'})">首页</span>
      <h2>{{title}}</h2>
    </header>
    <nav>
      <ul>
        <li :class="{active:item.name==active||item.name==navTitle}" v-for="(item,index) in navList" :key='index' @click='routerPush(item)'>{{item.title}}</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props:['navTitle'],
  
  methods: {
    routerPush(obj){
      this.$router.push(obj.path);
      // this.$emit('routerEmit', obj.title);
      this.title = obj.title;
      this.active = obj.name;
    },
  },
  computed: {
    // theme(){
    //   this.navActive
    // }
  },
  data(){
    return{
      title:"电影",
      active:'movie',
      navList:[
        {
          id:'101',
          name:'movie',
          title:"电影",
          path:'/',
        },
        {
          id:'102',
          name:"music",
          title:'音乐',
          path:'/music'
        },
        {
          id:'103',
          name:"book",
          title:'书籍',
          path:'/book'
        },
        {
          id:'104',
          name:"photo",
          title:'图片',
          path:'/photo'
        }
      ]
    }
  },
  computed:{
    isActive(){
      return this.active
    }
  },
  mounted () {
    this.$nextTick(function () {
        
        this.active = this.$props.navTitle
        this.navList.forEach(val => {
        if(val.name == this.active){
          this.title = val.title
        }
      });
        
      })
    this.title = activeNav;
  },
}
</script>
<style scoped>
  header{
    height: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    color: #fff;
  }
  nav{
    height: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  nav ul{
    display: flex;
  }
  nav li{
    flex-grow: 1;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    color: #999;
  }
  header span{
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    padding-left:.5rem;
  }
  header h2{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .active{
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
</style>
