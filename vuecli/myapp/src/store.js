import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    xPhotoList:[],
    xNowIndex:0
  },
  mutations: {
    changeIndex(state,index){
      state.xNowIndex = index;
    },
    savePhotoList(state,arr){
      state.xPhotoList = arr
    }
  },
  actions: {

  }
})
