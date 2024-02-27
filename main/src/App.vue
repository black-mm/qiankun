<template>
  <div class="app">
    <!-- 子应用渲染盒子 -->
    <div id="subapp-viewport"></div>
    <div class="main" :class="hideSideBar">
      <!-- 第一行 -->
      <div class="top-title">
        <span>相关推荐</span>
      </div>
      <!-- 链接 -->
      <div class="catalog">
        <div v-for="item,index in list" :key="index" @click="goTo(item)" :class="setClass(item)">{{item}}</div>
        <div @click="test">基座更改state按钮</div>
      </div>
    </div>
    <!-- 侧边栏按钮 -->
    <sidebar />
  </div>
</template>

<script>
import sidebar from '@/components/sidebar.vue'
import { mapState } from 'vuex'

import actions from './action'
export default {
  name: '',
  components: {
    sidebar
  },
  data() {
    return {
      list: ['/sub-vue', '/sale'],
      active: 'main'
    }
  },
  computed: {
    ...mapState(['sidebar']),
    hideSideBar() {
      return {
        'hideSideBar': this.sidebar
      }
    },
  },
  created() {
    actions.onGlobalStateChange((state, prev) => {
      console.log('基座监听当前值的值:  ' + state.name)
      console.log('基座监听改变前的值:  ' + prev.name)
    })
  },
  methods: {
    goTo(path) {
      this.active = path
      history.pushState(null, path, path)
    },
    toAbout() {
      history.pushState(null, '/sale/about', '/sale/about')
    },
    setClass(item) {
      return { 'active': this.active == item }
    },
    test() {
      let obj = {name:'娃哈哈😎😎😎'}
      actions.setGlobalState(obj);
    }
  }
}
</script>
<style scoped lang="scss">
.app {
  background-color: rgb(242, 243, 245);
  min-height: 100vh;
  padding: 0 100px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.main {
  width: 300px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px 10px;
  height: fit-content;
}
#subapp-viewport {
  flex: 1;
  box-sizing: border-box;
  padding: 30px;
  background-color: #fff;
  height: fit-content;
}
.top-title {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e4e1e1f5;
  span {
    font-weight: 600;
  }
}
.catalog div {
  cursor: pointer;
  line-height: 30px;
  height: 30px;
}
.active {
  background-color: #eae8eacc;
}
.hideSideBar {
  display: none;
}
</style>
