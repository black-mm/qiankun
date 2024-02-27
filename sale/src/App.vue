<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <span @click="change">app1</span>
      <div @click="changeData">sale修改数据</div>
      <div>{{global}}</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import actions from './action'
export default {
  name: '',
  data() {
    return {
      global:''
    }
  },
  mounted(){
    actions.onGlobalStateChange((state)=>{
      console.log('[sale微应用]监听：'+state.name)
      this.global = state
    },true)
  },
  methods: {
    change() {
      history.pushState(null, '/sub-vue', '/sub-vue')
    },
    changeData(){
      let obj = {name:'sale微应用😻😻😻😻'}
      actions.setGlobalState(obj)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
