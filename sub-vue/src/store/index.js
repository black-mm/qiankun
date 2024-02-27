import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    global:{
      name:'小王'
    }
  },
  mutations: {
    setGlobal(state,payload){
      state.global = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
