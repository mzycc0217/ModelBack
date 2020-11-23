<template>
    <div id="Menu">
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
  
      background-color="#545c64"
      text-color="#fff"
      @select="RoteToPath"
      active-text-color="#ffd04b">
      <el-submenu :index=item.Id v-for="item in MenuList" :key="item.Id" >
        <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-location"></i> 
          <span>{{item.Name}}</span>
        </template>
        <el-menu-item-group v-if="childrenif(item.children)" >
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item  v-for="items in item.children" :key="items.Id" :index="items.Path">{{items.Name}}</el-menu-item>
         
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
   </div>
</template>

<script>
export default {
data(){
    return {
       
        MenuList:[{
            Id:"1",
            Name:"菜单管理",
            Path:".././",
            children:[]
        },{
            Id:"2",
            Name:"权限管理",
            Path:".././",
              children:[
                  {
             Id:"6",
              Name:"人员权限管理",
              Path:"/mind1",
              },   
                {
             Id:"7",
              Name:"人员管理",
              Path:"/mind2",
              }
              ]
        }]

    }
},
mounted:{

},
methods:{
     childrenif:function(value){
         if (value.length==0) {
             return false
         }
          return true
     },
  childreniftwo:function(value){
         if (value.length==0) {
             return "el-icon-menu"
         }
          return "el-icon-location"
     },
    //  点击子菜单切换的地方
     RoteToPath:function(key, keyPath){
      console.log("path", key);
       window.localStorage.setItem("Path",key);

      this.$parent.tonative();

     },
    //  handleOpen(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
}
}
</script>

<style>
body{
  padding: 0px;
    margin: 0px;
}
#Menu{
    display: block;
    width: 200px;
    height: 1000px;
    background-color:rgb(26, 34, 38);
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>