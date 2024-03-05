<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <span @click="change">app1</span>
      <div>
        <span v-for="item,index in tagview" :key=index>{{item}}</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tagview:[],
    }
  },
  mounted(){
    
  },
  watch:{
    $route:{
      handler(to){
        if(to.query.title) return
        let obj = {
          title: to.meta.title,
          path: to.path
        }
        this.$global.commit('addTagView',obj)
      },
    }
  },
  methods: {
    change() {
      history.pushState(null, '/sub-vue', '/sub-vue?title=sub-vue')
    },
   
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
