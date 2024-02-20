<template>
  <div>
    <div class="main">
      <div>main 基座</div>
      <span @click="goTo('/sub-vue')">vue app1</span>
      <span @click="goTo('/sale')">sale</span>
    </div>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  methods: {
    goTo(path) {
      history.pushState(null, path, path)
    }
  }
}
</script>
<style>
#subapp-viewport {
  padding: 30px;
  background-color: pink;
}
.main{
  background-color: #205716e0;
  padding: 20px 10px;
  margin-bottom: 50px;
  color: #fff;
}
.main div:first-child{
  text-align: center;
}
.main span{
  text-decoration: underline;
    text-underline-offset: 6px;
    margin-right: 10px;
}

</style>
