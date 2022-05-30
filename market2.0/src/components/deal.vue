<template>
  <div class="box">
      <div v-for="good in goods" :key="good.id">
          <div class="box1">
             <p class="p1">已处理</p>
             <p class="p2">用户名:{{good.userName}}</p>
             <p class="p3">已提交不合格商品数：{{good.count}}</p>
             <div v-if="good.userStatus=='1'">
               <p class="p4">当前状态：警告</p>
             </div>
             <div v-if="good.userStatus=='0'">
               <p class="p4">当前状态：封禁</p>
             </div>
          </div>
      </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
       goods:[],
  }
},
    mounted(){
      axios.interceptors.request.use(function (config) {
      let token = window.localStorage.getItem("user")
      // token = eval('(' + token + ')');
     token = eval( token );
      // console.log(token)
      if (token) {
          config.headers.token = token;    
      }
      return config;
      }, function (error) {
          return Promise.reject(error);
      });
    //    展示有提交不合格商品的用户列表
              const data = {
              }
              axios.post('http://5101g0918f.wicp.vip/admin/showBannedUser',data,
                )
              .then((res)=>{
                  console.log("3",res); 
                  this.goods=res.data.data;
              })
              .catch((error)=>{
                  console.log(error)  
              })
    },
}
</script>

<style scoped>
.p4{
    margin-left: 66%;
  font-size: 20px;
  margin-top: -58px;
}
.p3{
    font-size: 20px;
  margin-left: -13%;
  margin-top: 7%;
}
.p2{
    font-size: 20px;
  margin-left: 13px;
}
.p1{
  line-height: 50px;
  font-size: 27px;
}
p{
  float: left;
}
.box{  
    width: 70%;
    height: 700px;
    background-color: #E9BBAB;
    margin-left: 15%;
    margin-top: 1%;
    border-radius: 25px;
}
.box1{  
    background-color: #C67560;
    width: 80%;
    height: 100px;
    font-weight: 700;
    padding-left: 10px;
    margin-left: 10%;
    margin-top: 10px;
}
</style>