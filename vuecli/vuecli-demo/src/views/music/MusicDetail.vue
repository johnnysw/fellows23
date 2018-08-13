<template>
  <div>
    <aplayer v-if="isif" autoplay
  :music="dataList[0]"
  :list='dataList'
  :showLrc='true'
/>
  </div>
</template>
<script>
import aplayer from 'vue-aplayer'
import axios from 'axios';
export default {
  components:{
    aplayer
  },
  data(){
    return{
      isif:false,
      dataList:[]
    }
  },
  created () {
    this.getData();
  },
  methods:{
    getData(){
      axios.get('./data/musicdata.json')
      .then((res)=>{
        this.dataList=res.data.musicData;
        this.isif = true;
        
        for(var i=0;i<res.data.musicData.length;i++){
          this.dataList[i].lrc = location.origin+"/"+ res.data.musicData[i].lrc;
          console.log(this.dataList[i].lrc);
          
        }
        
      })
      .catch(()=>{

      })
    }
  }
}
</script>
