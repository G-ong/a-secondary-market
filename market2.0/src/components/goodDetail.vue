<!-- 订单页面 -->
<template>
  <div>
    <!-- 上半部分 -->
    <div>
      <div>
        <img src="../assets/6.jpg" alt="" class="img1">
        <p class="p1">二度发现小铺</p>
      </div>
      <div>
        <form action="">
          <input type="text" v-model="title">
          <button @click="find" class="button">搜索</button>
        </form>
      </div>
      <div>
        <img src="../assets/3.png" alt="" class="img3">
      </div>
    </div>
  <!-- 下半部分 -->
  <div>
    <!-- 左半部分 -->
    <div class="left">
      <div class="leftTop">
        <img :src="'http://5101g0918f.wicp.vip'+good.goodsPicture" alt="" class="img"> 
      </div>
      <div class="leftBottom">
        <p class="p11">{{good.goodsName}}</p>
      </div>
    </div>
    <!-- 右半部分 -->
    <div class="right">
      <div class="rightTop">
        <p>商品简介：{{good.introduction}}</p>
      </div>
      <div class="rightMiddle1">
        <p>现有数量：{{good.number}}</p>
      </div>
      <div class="rightMiddle2"></div>
      <div class="rightBottom">
        <button class="btn1" @click="buy">立即购买</button>
        <button class="btn2">加入收藏</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
return{
  good:''
}
  },
  methods:{

  find(){
    window.localStorage.setItem('find', this.title);
        // this.$bus.$emit('title',this.title);
        // alert(this.title);
            this.$router.push({
                path:'/find'
            });
  },
  buy(){
    //   提交订单
      const data = {
                  goodsId:this.good.id,
                  number:1
              }
              axios.post('http://5101g0918f.wicp.vip/bill/addBill',data,
                )
              .then((res)=>{
                  console.log(res); 
                  alert("提交订单成功")
              })
              .catch((error)=>{
                  console.log(error)  
              })
  }
  },
mounted(){
      axios.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem("user")
    //  token = eval('(' + token + ')');
     token = eval( token );
    if (token) {
        config.headers.token = token;    
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
            //   查询单个商品详细信
              const data = {
                  goodsId:localStorage.getItem('goodsId')
              }
              axios.post('http://5101g0918f.wicp.vip/goods/showGoodsMessage',data,
                )
              .then((res)=>{
                  // this.imgurll='http://bbbbbblack.free.idcfengye.com'+res.data.data.goodsPicture;
                  this.good=res.data.data;
                //   console.log("A",this.good); 
                  console.log(res); 
              })
              .catch((error)=>{
                  console.log(error)  
              })
   },
}
</script>

<style scoped>
.p11{
  text-align: center;
  font-size: 25px;  
}
.img{
  width: 100%;
  height: 100%;
}
.p1{  
  color: #C67560;
  margin-left: 18%;
  font-size: 31px;
  margin-top: -111px;
  font-family: STXinwei;
}
.img1{
    margin-left: 21%;
    width: 8%;
}
.img3{  
  position: fixed;
  right: 17%;
  top: 70px;
  width: 18%;
}
input{
    width: 26%;
    position: fixed;
    top: 14%;
    left: 36%;
    height: 4%;
    border-radius: 25px;
    border: 5px solid #E9BBAB;
    outline: none;
}
.button{
    position: fixed;
    top: 119px;
    left: 57%;
    height: 4%;
    border-radius: 25px;
    border: 1px solid #C67560;
    width: 70px;
    background-color: #C67560;
    color: #E4B1A1;
    font-size: 17px;
}
.left{  
  background-color: #A6B6C3;
  width: 33%;
  height: 50%;
  position: fixed;
  top: 226px;
  left: 246px;
  border-radius: 20px;
}
.right{  
  width: 33%;
  height: 50%;
  position: fixed;
  top: 226px;
  right: 227px;
  border-radius: 20px;
}
.leftTop{  
  background-color: #E9BBAB;
  width: 31%;
  height: 38%;
  position: fixed;
  top: 240px;
  left: 261px;
  border-radius: 20px;
}
.leftBottom{
  background-color: #FFFABF;
  width: 31%;
  height: 8%;
  position: fixed;
  top: 557px;
  left: 261px;
  border-radius: 30px;
}
.rightTop{  
  background-color: #F8D198;
  width: 33%;
  height: 15%;
  position: fixed;
  top: 226px;
  right: 227px;
  border-radius: 20px;
}
.rightMiddle1{  
  background-color: #FFFABF;
  width: 33%;
  height: 6%;
  position: fixed;
  top: 355px;
  right: 227px;
  border-radius: 30px;
}
.rightMiddle2{    
  background-color: #FFFABF;
  width: 33%;
  height: 20%;
  position: fixed;
  top: 412px;
  right: 227px;
  border-radius: 20px;
}
.btn1{  
  background-color: #F8D198;
  color: #F19070;
  width: 15%;
  height: 6%;
  position: fixed;
  top: 582px;
  right: 488px;
  border-radius: 14px;
  font-family: YouYuan;
  font-size: 20px;
  font-weight: 700;
}
.btn2{  
  color: #8797AE;
  background-color: #E9BBAB;
  width: 15%;
  height: 6%;
  position: fixed;
  top: 582px;
  right: 227px;
  border-radius: 14px;
  font-family: YouYuan;
  font-size: 20px;
  font-weight: 700;
}
</style>