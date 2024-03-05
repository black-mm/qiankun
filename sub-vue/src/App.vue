<template>
  <div id="app">
    <div id="nav">
      我是sub-vue 微应用
      <div >微应用更改state</div>
      <div> {{state}}</div>
    </div>
  </div>
</template>
<script>
export default ({
  name: '',
  data(){
    return {
      state:''
    }
  },
  mounted() {
  
  },
  methods: {
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
