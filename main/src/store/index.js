import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //不隐藏为false,隐藏true
    sidebar:false,
  },
  mutations: {
    setSidebar(state){
      state.sidebar = !state.sidebar
    }
  },
  actions: {
  },
  modules: {
  }
})

