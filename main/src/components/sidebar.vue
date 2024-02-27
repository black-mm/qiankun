<template>
  <div class="sidebar" @click="setSidebar">
    <span>隐藏</span>
    <span>侧栏</span>
    <span>{{$store.state.sidebar}}</span>
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
    setSidebar(){
        this.$store.commit('setSidebar')
    }
  }
}
</script>

<style>
.sidebar {
  position: fixed;
  right: 20px;
  bottom: 50px;
  background-color: #fff;
  color: #747474;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 11px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>