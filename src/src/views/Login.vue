<template>
 <div>
     <div id="container">
         <div class="ProgroumName">

         </div>

       <div class="input_s">
             <div class="input_"><label>账号:</label> <el-input v-model="formList.Account" placeholder="请输入账号"  style="width:300px; "></el-input></div>

             <div class="input_"><label>密码:</label> <el-input v-model="formList.Password" placeholder="请输入密码"  style="width:300px;"></el-input></div>
       </div>
       <div class="btn_">
             <el-button type="primary" style="width:200px" @click="submit()" :loading="loadings">{{text}}</el-button>
       </div>
          
     </div>
     <!--  -->
 </div>
   
</template>


<script>
export default {
data(){
    return {
     formList:{
         Account:"",
         Password:"",
         
     },
     text:"登陆",
     loadings:false
    }
},
   mounted() {

   },
   methods: {
      submit: function() {
          this.text="登陆中";
          this.loadings=true;
          console.log(this.formList);
            this.$router.push({ path: '/Home' })
          this.text="登陆";
           this.loadings=false;
      }
    }

}
</script>

<style>
   #container{
      
       width: 450px;
       height: 400px;
       border: 1px solid black;
       border-radius: 20px;
       margin: 0 auto;
        /* display:inline-block; */
/*设置元素绝对定位*/
    position:absolute;
/*top 50%*/
    top: 50%;
/*left 50%*/
    left: 50%;
/*css3   transform 实现*/
    transform: translate(-50%, -50%);


   }
   .ProgroumName{
       width: 100%;
       height: 100px;
   }
.input_s {
   
    width: 450px;
 
    margin-top: 60px;
}
.input_{
    margin-top: 20px;
}
.btn_{
    margin-top: 40px;
}
</style>