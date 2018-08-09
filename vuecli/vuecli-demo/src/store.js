import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:1
  },
  mutations: {
    add(state){
      state.num++
    },
    reduce(state){
      state.num--
    }
  },
  actions: {

  }
})
