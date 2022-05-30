<!-- 我的页面 -->
<template>
  <div>
    <!-- 头像部分 -->
    <!-- <div>
      <span>+</span>
      <img src="" alt="">
    </div> -->
    <img src="../assets/my.png" alt="" class="img">
    <!-- 用户名 -->
    <div class="name">
      <p class="p">{{name}}</p>
    <!-- 修改用户名 -->
    <div class="small" @click="change"></div>
    </div>
    <!-- 我的资料 -->
    <div class="left">
      <img src="../assets/t1.png" alt="" class="img1">
      <p class="p1">我的资料</p>
      <div>
        <p class="p2">性别:</p>
        <input type="text" name=""  size="22" class="in1" v-model="sex" ><br>
      </div>
      <div>
        <p class="p2">地址:</p>
        <input type="text" name=""  size="22" class="in2" v-model="address" ><br>
      </div>
      <div>
        <p class="p2">联系电话:</p>
        <input type="text" name=""  v-model="phone" size="22" class="in3"><br>
      </div>
      <button class="btn" @click="btn">确定</button>
    </div>
    <!-- 我的收藏 -->
    <div class="right">
      <img src="../assets/t2.png" alt="" class="img2">
      <p class="p11">我的收藏</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      name:localStorage.getItem('name'),
      sex:localStorage.getItem('sex'),
      address:localStorage.getItem('address'),
      phone:localStorage.getItem('phone')
    }
  },
  mounted(){

      axios.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem("user");
    //  token = eval('(' + token + ')');
     token = eval( token );
    if (token) {
        config.headers.token = token;    
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
      // 查看当前用户信息
              const data = {
              }
              axios.post('http://5101g0918f.wicp.vip/user/showUserMessage',data,
                )
              .then((res)=>{
                  console.log("2",res); 
                  this.name=res.data.data.nickName;
                  this.phone=res.data.data.phoneNumber;
              })
              .catch((error)=>{
                  console.log(error)  
              })
  },
  methods:{
    change(){
      this.name=prompt("请输入想要修改的用户名");
      window.localStorage.setItem('name', this.name);
    },
    btn(){
      window.localStorage.setItem('sex', this.sex);
      window.localStorage.setItem('address', this.address);
      window.localStorage.setItem('phone', this.phone);
      
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
      // 发送用户数据
              const data = {
                  nickName:this.name,
                  phoneNumber:this.phone
              }
              axios.post('http://5101g0918f.wicp.vip/user/addUserMessage',data,
                )
              .then((res)=>{
                  console.log("1",res); 
    alert("修改成功！");
              })
              .catch((error)=>{
                  console.log(error)  
              })
    }
  }
}
</script>

<style scoped>
    .img1{  
      width: 2%;
      float: left;
      position: fixed;
      top: 38%;
      left: 32%;
    }
    .img2{    
      width: 2%;
      float: left;
      position: fixed;
      top: 39%;
      left: 56%;
    }
    .img{
      width: 50%;
      margin-left: 26%;
      margin-top: -3px;
    }
    .name{  
      width: 100px;
      height: 42px;
      background-color: #E9BBAB;
      position: fixed;
      top: 24%;
      left: 30%;
    }
    .p{
      text-align: center;
      font-size: 25px;
      margin-top: 10px;
    }
    .small{  
      height: 35px;
      width: 37px;
      position: fixed;
      top: 197px;
      left: 537px;
    }
    .left{  
      float: left;
      background-color: #F8D198;
      width: 326px;
      height: 300px;
      margin-left: 378px;
      border-radius: 15px;
    }
    .right{
      float: left;
      background-color: #8797AE;
      width: 326px;
      height: 300px;
      margin-left: 22px;
      border-radius: 15px;
    }
    input{
      margin-left: 140px;
      border-style: none;
      outline: none;
      background-color: #FFFABF;
    }
    .p11{ 
      font-family: STXinwei;
      color: #E9BBAB;
      font-size: 30px;
      text-align: center;
      margin-top: 10px;
    }
    .p1{ 
      font-family: STXinwei;
      color: #946C6C;
      font-size: 30px;
      text-align: center;
      margin-top: 10px;
    }
    
    .p2{
      color: #F19774;
      font-weight: 700;
      font-size: 25px;
      margin-left: 10px;
      margin-bottom: -15px;
    }
    .in1{
      position: fixed;
      top: 372px;
    }
    .in2{
      position: fixed;
      top: 429px;
    }
    .in3{
      position: fixed;
      top: 485px;
    }
    .btn{
      outline: none;
      border-style: none;
      background-color: #FFFABF;
      margin-left: 260px;
    }
</style>