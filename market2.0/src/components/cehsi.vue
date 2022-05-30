<!-- 消息页面 -->
<template>
  <div>
    <!-- 左边部分 -->
    <div class="left">
            <button @click="delete2()" class="btn1">删除</button>
      <p class="p">购入</p>
      <!-- 未完成 -->
      <!-- 暂无人购买 可修改 -->
          <div v-for="order in orders" :key="order.id">
            <div class="white">
            <p class="state">未完成</p>
            <p class="name">{{order.goods.goodsName}}</p>
            <p class="time">{{order.createTime}}</p>
            <button @click="delete1(order.billId)" class="btn11">删除</button>
              </div>
          </div>
      <!-- 有人购买 可确认卖出 -->
          <div v-for="reorder in reorders" :key="reorder.id">
            <div class="white">
            <p class="state">未完成</p>
            <p class="name">{{reorder.goods.goodsName}}</p>
            <p class="time">{{reorder.createTime}}</p>
            <button @click="ok(reorder.billId)">确认</button>
              </div>
          </div>
    </div>
    <!-- 右边部分 -->
    <div class="right">
      <p class="p">出售</p>
      <!-- 未完成 -->
          <div v-for="noneSell in noneSells" :key="noneSell.id">
            <div class="white">
            <p class="state">未完成</p>
            <p class="name">{{noneSell.goods.goodsName}}</p>
            <p class="time">{{noneSell.createTime}}</p>
            <button @click="change1(noneSell.goods.id)" class="btn2">修改</button>
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
      orders:[],
      reorders:[],
      noneSells:[],
      a:'',
      isAgree:true
    }
  },
//     mounted(){
//       axios.interceptors.request.use(function (config) {
//     let token = window.localStorage.getItem("user");
//     //  token = eval('(' + token + ')');
//      token = eval( token );
//     if (token) {
//         config.headers.token = token;    
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });
//             //   查询当前用户所提交订单
//               const data = {
//               }
//               axios.post('http://5101g0918f.wicp.vip/bill/showYourBills',data,
//                 )
//               .then((res)=>{
//                 this.orders=res.data.data;
//                   console.log("2",res); 
//               })
//               .catch((error)=>{
//                   console.log(error)  
//               });
//               // 查询其他买家对当前卖家提交的订单
//               const data2 = {
//               }
//               axios.post('http://5101g0918f.wicp.vip/URL: /bill/showOthersBills',data2,
//                 )
//               .then((res)=>{
//                 this.reorders=res.data.data;
//                   console.log(res); 
//               })
//               .catch((error)=>{
//                   console.log(error)  
//               });
//               // 查看当前用户所提交商品
//               const data1 = {
//               }
//               axios.post('http://5101g0918f.wicp.vip/submit/showYourSubmit',data1,
//                 )
//               .then((res)=>{
//                 this.noneSells=res.data.data;
//                   console.log(res); 
//               })
//               .catch((error)=>{
//                   console.log(error)  
//               })
//     },
    methods:{
      delete1(a){
            //   删除订单
              const data = {
                billId:a
              }
              axios.post('http://5101g0918f.wicp.vip/bill/delBill',data,
                )
              .then((res)=>{
                  console.log(res); 
                  alert("删除订单成功");
                  this.$router.push({
                      path:'/order1'
                  });
              })
              .catch((error)=>{
                  console.log(error)  
              })
      },
      delete2(){
            //   删除提交商品
              const data = {
                goodsId:12
              }
              axios.post('http://5101g0918f.wicp.vip/goods/deleteSubmittedGoods',data,
                )
              .then((res)=>{
                  console.log("1",res); 
                  alert("删除出售商品成功");
                  // this.$router.push({
                  //     path:'/order1'
                  // });
              })
              .catch((error)=>{
                  console.log(error)  
              })
      },
      ok(a){
        // this.isAgree=confirm("是否出售该商品");
        // if (isAgree==true)
        //   {
        //   document.write("是")
        //   }
        // else
        //   {
        //   document.write("否")
        //   }
        // },
            //   确认出售商品
              const data = {
                billId:a,
                isAgree:true
              }
              axios.post('http://5101g0918f.wicp.vip/bill/HandleOtherBills',data,
                )
              .then((res)=>{
                  console.log(res); 
                  alert("商品售出成功");
                  this.$router.push({
                      path:'/order1'
                  });
              })
              .catch((error)=>{
                  console.log(error)  
              })
      },
      change1(a){
        localStorage.setItem('change',a);
            this.$router.push({
                path:'/change'
            })
      }
    }
}
</script>

<style scoped>
.btn11{
  float: left;
  margin-top: -13%;
  margin-left: 88%;
  background-color: #F8D198;
  outline: none;
  border-style: none;
}
.btn1{
  float: right;
  margin-top: -16%;
  margin-right: 2%;
  background-color: #F8D198;
  outline: none;
  border-style: none;
}
.btn2{
  float: right;
  margin-top: -10%;
  margin-right: 2%;
  background-color: #F8D198;
  outline: none;
  border-style: none;
}
.time{
  margin-left: 34%;
  margin-top: -3%;
}
.name{
  margin-left: 50%;
  font-size: 20px;
}
.state{
  color: #606060;
  font-weight: 700;
  float: left;
  font-size: 20px;
  line-height: 70%;
  margin-left: 10px;
  font-family: YouYuan;
}
.white{  
  height: 70%;
  background-color: white;
  width: 90%;
  margin-left: 5%;
}
.left{  
  float: left;
  width: 30%;
  height: 550px;
  background-color: #F8D198;
  margin-left: 19%;
  margin-top: 20px;
  border-radius: 20px;
}  
.right{  
  float: right;
  width: 30%;
  height: 550px;
  background-color: #E9BBAB;
  margin-right: 19%;
  margin-top: 20px;
  border-radius: 20px;
}
.p{  
  font-size: 40px;
  color: #946C6C;
  text-align: center;
  margin-top: 10px;
  font-family: YouYuan;
  }
</style>