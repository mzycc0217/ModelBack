<template>
  <div>
      <div class="_header"><Headers></Headers></div>
     <!-- 内容加侧边栏 -->
     <div class="container">
      <div class="_Menu">
          <mneu></mneu>
          </div>

     <!-- 内容 -->
     <div class="_container">
        <!-- <router-view></router-view> -->
        <router-link :to="path"></router-link>
         
          <!-- <h1>主页面</h1>
          <router-view></router-view> -->
     </div>
      </div>
      <!-- <el-header><Headers></Headers></el-header>
     
       <el-aside><mneu></mneu></el-aside>
       <el-container> <h1>主页面</h1></el-container> -->
  </div>
</template>

<script>

import Headers from '../components/Header.vue'
import Mneu from '../components/Mneu.vue'
export default {
  components: { Mneu,Headers },
  data(){
      return{
          path:"mind1", 
      }
  },
  mounted() {
     
       // this.tonative()
  },
  methods:{
      tonative(){
        console.log("调用父组建");
       let path=  window.localStorage.getItem("Path");
       this.path=path;
       
      }
  }

}
</script>

<style>
body{
    margin: 0px;
    padding: 0px;
}
.container{
    display: flex;
}
._container{
    width: 600px;
    height: 600px;
}
</style>