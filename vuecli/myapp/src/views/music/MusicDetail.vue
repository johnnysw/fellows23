<template>
  <div class="container">
    <aplayer  v-if="isReady" :music= 'musicList[0]' :list= 'musicList' :showLrc='true'/>
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import axios from 'axios'
export default {
  created () {
    this.getData();
  },
  components: {
    Aplayer
  },
  data(){
    return{
      musicList:[],
      music:{},
      isReady : false
    }
  },
  methods:{
    getData(){
      axios.get('./data/musicdata.json').then((res)=>{
        let thisObj = {};
        this.musicList = res.data.musicData;
        for(let i=0;i<this.musicList.length;i++){
          this.musicList[i].lrc = location.origin+location.pathname+this.musicList[i].lrc
        };
        this.isReady = true;
      }).catch(()=>{

      })
    }
  }
}
</script>

