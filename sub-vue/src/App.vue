<template>
  <div id="app">
    <div id="nav">
      我是sub-vue 微应用
      <div @click="change">微应用更改state</div>
      <div> {{state}}</div>
    </div>
  </div>
</template>
<script>
import actions from "./action"
export default ({
  name: '',
  data(){
    return {
      state:''
    }
  },
  mounted() {
    actions.onGlobalStateChange((state) => {
      console.log('微应用监听：'+state.name)
      this.state = state
    }, true)
  },
  methods: {
    change(){
      let obj = {name:'😈😈劳资是微应用😈😈'}
      actions.setGlobalState(obj)
    }
  }
})
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
