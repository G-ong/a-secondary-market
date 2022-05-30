<template>
  <div>
      <!-- 左边部分 -->
      <div class="left">
            <!-- 上边部分 -->
            <div class="leftTop">
                <img :src="'http://5101g0918f.wicp.vip'+small" alt="" class="img">
            </div>
            <div class="leftBottom">
                {{shenhename}}
            </div>
            <!-- 下边部分 -->
            <div>
                <div class="rightTop"><p class="jianjie"> 商品简介：{{introduction}}</p></div>
                <div class="rightmiddle1"><p class="jianjie">现有数量：{{number}}</p> </div>
                <div class="rightmiddle2"></div>
                <form action="">
                <textarea class="rightBottom" type="text" placeholder="审核意见"></textarea>
                </form>
                <button class="btn1" @click="back()">退回</button>
                <button class="btn2" @click="pass()">通过</button>
            </div>
      </div>
      <!-- 右边部分 -->
      <div class="right">
          <p>待审核列表</p>
          <div v-for="good in goods" :key="good.id">
            <div v-if="good.goodsStatus=='0'">   
          <div class="white" @click="put(good.id)">
              <span>商品名：{{good.goodsName}}</span>
              <span>商品价格：{{good.price}}元</span>
         </div>
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
           users:'',
           goods:[],
           local:'',
           small:'',
           introduction:'',
           shenhename:'',
           number:'',
           Id:''
        }
    },
    mounted(){
        this.small=localStorage.getItem('small');
        this.introduction=localStorage.getItem('introduction');
        this.shenhename=localStorage.getItem('shenhename');
        this.number=localStorage.getItem('number');
        this.Id=localStorage.getItem('Id');
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
    //    查询所有商品
              const data = {
              }
              axios.post('http://5101g0918f.wicp.vip/admin/showAllGoodsInfo',data,
                )
              .then((res)=>{
                  console.log("1",res); 
                  this.goods=res.data.data;
              })
              .catch((error)=>{
                  console.log(error)  
              })
    },
    methods:{
        put(a){
    //    查询单个商品详细信息
              const data = {
                  goodsId:a
              }
              axios.post('http://5101g0918f.wicp.vip/admin/showAllGoodsDetails',data,
                )
              .then((res)=>{
                  console.log("2",res.data.data.goodsPicture); 
                  localStorage.setItem('small',res.data.data.goodsPicture);
                  localStorage.setItem('introduction',res.data.data.introduction);
                  localStorage.setItem('shenhename',res.data.data.goodsName);
                  localStorage.setItem('number',res.data.data.number);
                  localStorage.setItem('Id',res.data.data.id);
                    this.$router.push({
                        path:'/check'
                    });
              })
              .catch((error)=>{
                  console.log(error)  
              })
        },
        back(){
            
    //    审核商品(未通过)
              const data = {
                  goodsId:this.Id,
                  status:-1
              }
              axios.post('http://5101g0918f.wicp.vip/admin/checkGoods',data,
                )
              .then((res)=>{
                  console.log(res); 
                  alert("退回成功");
                    this.$router.push({
                        path:'/check'
                    });
              })
              .catch((error)=>{
                  console.log(error)  
              })
        },
        pass(){
            
    //    审核商品(通过)
              const data = {
                  goodsId:this.Id,
                  status:1
              }
              axios.post('http://5101g0918f.wicp.vip/admin/checkGoods',data,
                )
              .then((res)=>{
                  console.log(res); 
                  alert("成功通过");
                    this.$router.push({
                        path:'/check'
                    });
              })
              .catch((error)=>{
                  console.log(error)  
              })
        }
    }
}
</script>

<style scoped>
.jianjie{
    margin-top: 10px;
    margin-left: 10px;
}
span{
    line-height: 44px;
    font-size: 16px;
    margin-right: 17px;
}
.white{  
    width: 80%;
    height: 44px;
    background-color: white;
    margin-left: 10%;
    border-radius: 10px;
    margin-top: 10px;
}
.btn1{  
    width: 7%;
    height: 60px;
    background-color: #807572;
    position: fixed;
    top: 511px;
    right: 532px;
    border-radius: 8px;
    outline: none;
    border-style: none;
    font-size: 27px;
    font-weight: 700;
}
.btn2{  
    width: 7%;
    height: 60px;
    background-color: #F19070;
    position: fixed;
    top: 585px;
    right: 532px;
    border-radius: 8px;
    outline: none;
    border-style: none;
    font-size: 27px;
    font-weight: 700;
}
textarea{
    position: fixed;
    left: 240px;
    top: 511px;
    height: 127px;
    width: 37%;
    border-radius: 8px;
    border-style: none;
    outline: none;
    resize: none;
}
.rightmiddle1{  
    width: 22%;
    height: 48px;
    background-color: #FFFABF;
    position: fixed;
    top: 257px;
    right: 535px;
    border-radius: 25px;
}
.rightmiddle2{  
    width: 22%;
    height: 152px;
    background-color: #FFFABF;
    position: fixed;
    top: 319px;
    right: 535px;
    border-radius: 25px;
}
.rightTop{  
    width: 22%;
    height: 138px;
    background-color: #F8D198;
    position: fixed;
    top: 105px;
    right: 535px;
    border-radius: 25px;
}
.leftBottom{     
    background-color: #FFFABF;
    width: 22%;
    height: 60px;
    border-radius: 25px;
    position: fixed;
    top: 405px;
    left: 246px;
    font-size: 35px;
    line-height: 60px;
    text-align: center;
}
.leftTop{  
    background-color: #A6B6C3;
    width: 23%;
    height: 368px;
    border-radius: 25px;
    position: fixed;
    top: 105px;
    left: 240px;
}
.left{  
    float: left;
    background-color: #E9BBAB;
    width: 50%;
    height: 600px;
    position: fixed;
    left: 200px;
}
.right{  
    float: right;
    background-color: #E9BBAB;
    position: fixed;
    right: 200px;
    width: 22%;
    height: 600px;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
}
.Box2{
  float: left;
  margin-left: -305px;
  margin-right: 16px;
}
.imgg{  
  width: 130px;
  height: 100px;
  margin-left: 20px;
  margin-top: 7px;
  pointer-events: auto; 
  }
.box2{     
  width: 190px;
  height: 125px;
  background-color: #C67560;
  margin-left: 307px;
  margin-top: 15px;
  padding-top: 10px;
}
.box3{    width: 170px;
  height: 115px;
  background-color: #FFFABF;
  margin-left: 10px;
  border-radius: 25px;
}
.box4{      
  width: 190px;
  height: 40px;
  background-color: #C67560;
  margin-left: 307px;
  margin-top: 15px;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
}
.img{  
  width: 96%;
  height: 77%;
  border-radius: 47px;
  margin-left: 2%;
  margin-top: 7px;
}
</style>