<template>
  <div>
      <div class="tongguo">
      <div class="left">已通过</div>
      <div class="big">
          <div v-for="good in goods" :key="good.id" class="Box" @click="put(good.id)">
        <div v-if="good.goodsStatus=='1'">
            <div class="box2">
              <div class="box3">
                <img :src="'http://5101g0918f.wicp.vip'+good.goodsPicture" alt="" class="imgg" >
              </div>
            </div>
            <div class="box4">{{good.goodsName}}</div>
          </div>
          </div>
      </div></div>
      <!-- 待审核 -->
      <div class="daishenhe">
      <div class="right">待审核</div>     
      <div class="big">
          <div v-for="good in goods" :key="good.id" class="Box2" @click="put(good.id)">
            <div v-if="good.goodsStatus=='0'">
            <div class="box2">
              <div class="box3">
                <img :src="'http://5101g0918f.wicp.vip'+good.goodsPicture" alt="" class="imgg" >
              </div>
            </div>
            <div class="box4">{{good.goodsName}}</div>
          </div>
          </div>
      </div></div>
      <!-- 未通过 -->
      <div class="weitongguo">
      <div class="middle">未通过</div>
      <div class="big">
          <div v-for="good in goods" :key="good.id" class="Box3" @click="put(good.id)">
            <div v-if="good.goodsStatus=='-1'">
            <div class="box2">
              <div class="box3">
                <img :src="'http://5101g0918f.wicp.vip'+good.goodsPicture" alt="" class="imgg" >
              </div>
            </div>
            <div class="box4">{{good.goodsName}}</div>
          </div>
          </div>
      </div></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
           users:'',
           goods:[],
           local:''
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
    }
}
</script>

<style scoped>
.tongguo{
  width: 32%;
  float: left;
}
.daishenhe{
  width: 31%;
  float: left;
  margin-left: 60px;
}
.weitongguo{
  width: 30%;
  float: right;
  margin-right: 38px;
}
.left{  
    float: left;
    background-color: #C67560;
    width: 100%;
    color: white;
    margin-left: 4%;
    margin-top: 8%;
    height: 35px;
    font-size: 24px;
    text-align: center;
    line-height: 35px;
    font-weight: 700;
}
.middle{  
  float: left;
  background-color: #C67560;
  width: 100%;
  color: white;
  margin-left: 2%;
  margin-top: 8%;
  height: 35px;
  font-size: 24px;
  text-align: center;
  line-height: 35px;
  font-weight: 700;
}
.right{  
    float: right;
    background-color: #E9BBAB;
    width: 100%;
    color: white;
    margin-right: 4%;
    margin-top: 8%;
    height: 35px;
    font-size: 24px;
    text-align: center;
    line-height: 35px;
    font-weight: 700;
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
button{
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
.Box{
  float: left;
  margin-left: -269px;
  margin-right: -14px;
}
.Box2{
  float: left;
  margin-left: -305px;
  margin-right: 16px;
}
.Box3{
  float: left;
  margin-left: -286px;
  margin-right: 0px;
}
.imgg{  
  width: 130px;
  height: 100px;
  margin-left: 20px;
  margin-top: 7px;
  pointer-events: auto; 
  }
.box2{     width: 190px;
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
</style>