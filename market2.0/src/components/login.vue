<template>
  <div class="all">
         <!-- 退出登录 -->
         <button @click="logout" class="tuichu">退出登录</button>
    <img src="../assets/login-5.png" alt="" class="img1">
    <img src="../assets/login-4.png" alt="" class="img2">
    <form>
         <img src="../assets/login-1.jpg" alt="" class="img3"><span class="wen1">身份:</span>
         <div>
         <input type="radio" name="sex"  class="inp1" @click="manage">
         <span class="wenzi1">管理员</span>
         <input type="radio" name="sex" class="inp2" @click="user">
         <span class="wenzi2">用户</span>
         </div>
         <img src="../assets/login-2.jpg" alt="" class="img4" ><span class="wen2">账号:</span>
         <input type="text" class="tex1" v-model="number">
         <img src="../assets/login-3.jpg" alt="" class="img5"><span class="wen3">密码:</span>
         <input type="password" class="tex2" v-model="password">
         <button type="button" class="btn1" @click="register">注册</button> 
         <button type="button" class="btn2" @click="login">登录</button>
    </form>
  </div>
</template>

<script> 
import axios from 'axios'
export default {
    data() {
      return {
        // user1:true,//true表示用户
        number:'',
        password:''
      };
    },
    methods: {
      manage(){
        window.localStorage.setItem('manage',1);
      },
      user(){
        window.localStorage.setItem('manage',2);
      },
      login(){
        // alert("1");
              const data = {
                  userName:this.number,
                  password:this.password
              }
              axios.post('http://5101g0918f.wicp.vip/user/login',data,
                )
              .then((res)=>{
                  console.log(res.data.code); 
                  if(res.data.code==200){
                  alert("登录成功");
                  localStorage.setItem('user', JSON.stringify(res.data.data.token));//将token存储起来
                  location.reload();
                  }
                  else if(res.data.code==401)
                  alert(res.data.msg)
              })
              .catch((error)=>{
                  console.log(error)  
              })
            this.$router.push({
                path:'/'
            });
      },
      logout(){
        // 退出
              const data = {
              }
              axios.post('http://5101g0918f.wicp.vip/user/logout',data,
                )
              .then((res)=>{
                  console.log(res); 
              localStorage.setItem('user','');
              alert("退出成功！");
      window.localStorage.setItem('a', '');
      window.localStorage.setItem('address', '');
      window.localStorage.setItem('change', '');
      window.localStorage.setItem('find', '');
      window.localStorage.setItem('goodname', '');
      window.localStorage.setItem('goodsId', '');
      window.localStorage.setItem('id', '');
      window.localStorage.setItem('introduction', '');
      window.localStorage.setItem('sex', '');
      window.localStorage.setItem('manage', '');
      window.localStorage.setItem('name', '');
      window.localStorage.setItem('number', '');
      window.localStorage.setItem('phone', '');
      window.localStorage.setItem('manage', '');
      window.localStorage.setItem('shenhename', '');
      window.localStorage.setItem('small', '');
      window.localStorage.setItem('user', '');
              })
              .catch((error)=>{
                  console.log(error)  
              })
      },
      register(){
              const data = {
                  userName:this.number,
                  password:this.password
              }
              axios.post('http://5101g0918f.wicp.vip/user/register',data,
                )
              .then((res)=>{
                  console.log(res); 
                  alert(res.data.msg)
              })
              .catch((error)=>{
                  console.log(error)  
              })


      }
    },
  };
</script>

<style scoped>
      .tuichu{
        position: fixed;
        top: 32px;
        right: 159px;
        color: #8797AE;
      }
     .all{
        height: 250px;
        width: 500px;
        margin: 12% 32%;
        border: 8px solid #ECC5B7;
        border-radius: 30px;
        padding-top: 55px;
     }
     .img1{  
        position: fixed;
        width: 11%;
        top: 80px;
        left: 32%;
     }
     .img2{
          position: fixed;
          width: 28%;
          top: 89px;
          left: 42%;
     }
    .img3{
          position: fixed;
          width: 7%;
          top: 265px;
          left: 34%;
    }
    .img4{
          position: fixed;
          width: 7%;
          top: 339px;
          left: 34%;
    }
    .img5{  
         position: fixed;
         width: 6%;
         top: 391px;
         left: 492px;
    }
    span{
        font-family: YouYuan;
        font-weight: bold;
    }
    .wen1{  
          font-size: 32px;
          color: #F8D198;
          position: fixed;
          top: 280px;
          left: 40%;
    }
    .wen2{  
          font-size: 32px;
          color: #8797AE;
          position: fixed;
          top: 344px;
          left: 40%;
    }
    .wen3{  
          font-size: 32px;
          color: #C67560;
          position: fixed;
          top: 405px;
          left: 40%;
    }
    .btn1{
          cursor: pointer;
          font-size: 32px;
          color: #C67560;
          position: fixed;
          top: 474px;
          left: 36%;
          width: 126px;
          background-color: #8797AE;
          border-radius: 15px;
          border: none;
    }
    .btn2{  
          cursor: pointer;
          font-size: 32px;
          color: #C67560;
          position: fixed;
          top: 474px;
          left: 48%;
          width: 240px;
          background-color: #E9BBAB;
          border-radius: 15px;
          border: none;
    }
    .inp1{
        position: fixed;
        top: 289px;
        left: 47%;
        color: pink;
    }
    .inp2{
        position: fixed;
        top: 289px;
        left: 58%;
        color: pink;
    }
    .wenzi1{
      position: fixed;
      top: 282px;
      left: 50%;
      font-size: 27px;
    }
    .wenzi2{
      position: fixed;
      top: 282px;
      left: 61%;
      font-size: 27px;
    }
    .tex1{    
      outline: none;
      position: fixed;
      top: 345px;
      left: 47%;
      font-size: 24px;
      border: 0;
      border-bottom: 2px solid #8797AE;
    }
    .tex2{  
      outline: none;
      position: fixed;
      top: 404px;
      left: 47%;
      font-size: 24px;
      border: 0;
      border-bottom: 2px solid #C67560;
    }
</style>