<template>
  <div>
    <div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
     main 基座
    </div>
    <div @click="goTo">vue app1</div>
    <!-- <router-view/> -->
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return{

    }
  },
  methods:{
    goTo(){
      history.pushState(null, '/sub-vue', '/sub-vue')
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
  background-color: pink;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
