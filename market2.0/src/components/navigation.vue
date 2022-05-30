<!-- 顶部导航 -->
<template>
  <div class="all">
      <div v-if="manage=='2'">
            <div class="gezi" @click="shouye"><span class="ge1">首页</span></div>
            <div class="gezi" @click="dingdan"><span class="ge2">订单</span></div>
            <div class="gezi" @click="chushou"><span class="ge3">出售</span></div>
            <!-- <div class="gezi" @click="xiaoxi"><span class="ge4">消息</span></div> -->
            <div class="gezi" @click="wode"><span class="ge5">我的</span></div>
      </div>
      <div v-if="manage=='1'">
            <div class="gezi" @click="liebiao"><span class="ge1">列表</span></div>
            <div class="gezi" @click="shenhe"><span class="ge2">审核</span></div>
            <div class="gezi" @click="chuli"><span class="ge3">处理</span></div>
            <!-- <div class="gezi" @click="xiangqing"><span class="ge4">详情</span></div> -->
            <!-- <div class="gezi" @click="wode2"><span class="ge5">我的</span></div> -->
      </div> 
      <div>
                <a @click="login">登录</a>
                <img src="../assets/7.png" alt="" class="img1">
      </div>
  </div>
</template>

<script>
export default {
    name:"navigation",
    data(){
        return{
          manage:localStorage.getItem('manage')
        }
    },
    methods:{
        shouye(){
            this.$router.push({
                path:'/'
            })
        },
        dingdan(){
            this.$router.push({
                path:'/order'
            })
        },
        chushou(){
            this.$router.push({
                path:'/sell'
            })
        },
        xiaoxi(){
            this.$router.push({
                path:'/news'
            })
        },
        wode(){
            this.$router.push({
                path:'/my'
            })
        },
        login(){
            this.$router.push({
                path:'/login'
            })
        },
        liebiao(){
            this.$router.push({
                path:'/list'
            })
        },
        shenhe(){
            this.$router.push({
                path:'/check'
            })
        },
        chuli(){
            this.$router.push({
                path:'/deal'
            })
        },
        xiangqing(){
            this.$router.push({
                path:'/detail'
            })
        },
        wode2(){
            this.$router.push({
                path:'/my2'
            })
        },

    },
}
</script>
<style scoped>
.all{
    background-color: #E9BBAB;
    height: 55px;
    border-bottom: 7px solid #C67560;
}
.gezi{
    float: left;
    margin-left: 90px;
    font-size: 27px;
    margin-top: 20px;
}
.ge1{
    background-color: #C67560;
    width: 90px;
    height: 35px;
}
.ge2{
    background-color: #F19070;
    width: 90px;
    height: 35px;
}
.ge3{
    background-color: #F8D198;
    width: 90px;
    height: 35px;
}
.ge4{
    background-color: #A6B6C3;
    width: 90px;
    height: 35px;
}
.ge5{
    background-color: #8797AE;
    width: 90px;
    height: 35px;
}
span{
    display: block;
    width: 70px;  
    /* border: 1px solid black; */
    background-color: black;
    text-align: center;
    /* 鼠标放上有小手 */
    cursor: pointer;
    color: #E9BBAB;
    font-family: YouYuan;
    font-size: larger;
}
a{
    position: fixed;
    right: 86px;
    top: 31px;
    font-size: 22px;
    color: #8797AE;
    font-weight: 700;
    cursor: pointer;
}
.img1{
  width: 6%;
  position: fixed;
  top: -32px;
  right: 10px;
}
</style>