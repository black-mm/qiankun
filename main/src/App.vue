<template>
  <div class="app">
    <!-- 子应用渲染盒子 -->
    <div id="subapp-viewport"></div>
    <div class="tag-view">
      <span v-for="item,index in tagView" :key=index>{{item.title}}</span>
    </div>
    <div class="main" :class="hideSideBar">
      <!-- 第一行 -->
      <div class="top-title">
        <span>相关推荐</span>
      </div>
      <!-- 链接 -->
      <div class="catalog">
        <div v-for="item,index in list" :key="index" @click="goTo(item)" :class="setClass(item)">{{item.path}}</div>
        <div @click="toAbout">sale中的About</div>
        <div @click="toHome">sale中的Home</div>
      </div>
    </div>
    <!-- 侧边栏按钮 -->
    <sidebar />
  </div>
</template>

<script>
import sidebar from '@/components/sidebar.vue'
import { mapState } from 'vuex'

export default {
  name: '',
  components: {
    sidebar
  },
  data() {
    return {
      list:[
        {
          path:'/sub-vue',
          title:'sub-vue'
        },
        // {
        //   path:'/sale',
        //   title:'sale'
        // }
      ],
      active: 'main',
    }
  },
  watch:{
    $route:{
      handler(to){
        if(!to.query.title) return 
        let obj = {
          title:to.query.title,
          path:to.path
        }
        this.$store.commit('addTagView',obj)
      }
    }
  },
  created() {
  },
  computed: {
    ...mapState(['sidebar','tagView']),
    hideSideBar() {
      return {
        'hideSideBar': this.sidebar
      }
    },
  },
  methods: {
    goTo(item) {
      this.active = item.path
      history.pushState(null, item.path, item.path+'?title='+item.title)
    },
    toAbout(){
      history.pushState(null, '/sale/about', '/sale/about?title=About关于')
    },
    toHome(){
      history.pushState(null, '/sale/home', '/sale/home?title=Home首页')
    },
    setClass(item) {
      return { 'active': this.active == item.path }
    },
    createToken(){
      localStorage.setItem('token',1)
    },
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
  margin-top: 50px;
}
.main {
  width: 300px;
  box-sizing: border-box;
  background-color:#e2e2f0;
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
.tag-view{
  width: calc(100% - 200px);
  height: 50px;
  background-color: #d9d9d9;
  position: fixed;
  top: 0px;
  padding: 10px 10px 0 10px;
  span{
    margin-right: 10px;
  }
}
</style>
