import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowIndex:-1,
    listLength:0
  },
  mutations: {
    changIndex(state,index){
      state.nowIndex = index
    },
    changLength(state,length){
      state.listLength = length
    }
  },
  actions: {

  }
})
