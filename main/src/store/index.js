import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //不隐藏为false,隐藏true
    sidebar:false,
    tagView:[]
  },
  mutations: {
    setSidebar(state){
      state.sidebar = !state.sidebar
    },
    addTagView(state,payload){
      if(state.tagView.some(i=>i.title==payload.title))return 
      state.tagView.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})

