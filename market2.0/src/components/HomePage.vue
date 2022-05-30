<!-- 主页 -->
<template>
  <div>
    <!-- 上半部分 -->
    <div>
      <div>
        <button>xiaoshi</button>
        <img src="../assets/6.jpg" alt="" class="img1">
        <p class="p1">二度发现小铺</p>
      </div>
      <div>
        <img src="../assets/5.png" alt="" class="img2">
        <p class="p2">每日公告</p>
      </div>
      <div>
        <form action="">
          <input type="text" v-model="title">
          <button @click="find">搜索</button>
        </form>
      </div>
      <div>
        <img src="../assets/3.png" alt="" class="img3">
        <img src="../assets/1.png" alt="" class="img4">
        <p class="p3">今日上新</p>
      </div>
      <div>
        <img src="../assets/2.png" alt="" class="img5">
        <p class="p4">好物分类</p>
      </div>
    </div>
    <!-- 中间部分 -->
    <div>
        <div class="box1">
          <div class="yellow1"></div>
          <div class="yellow2"></div>
          </div> 
        <div class="box2">
          <div class="yellow3"></div>
        </div>
        <div class="box3">
          <!-- 竖线 -->
          <div><span>|</span></div>
          <p class="pp1">学习用品</p>
          <p class="pp2">学习资料</p>
          <p class="pp3">服装饰品</p>
          <p class="pp4">鞋子</p>
          <p class="pp5">食物</p>
          <p class="pp6">电子产品</p>
          <p class="pp7">日常用品</p>
          <p class="pp8">其他</p>
          <div class="shuxian1"></div>
          <div class="shuxian2"></div>
          <div class="shuxian3"></div>
          <div class="shuxian4"></div>
        </div>
    </div>
    <!-- 下面部分 -->
    <div>
        <p class="p5">猜你喜欢</p>
        <img src="../assets/4.png" alt="" class="img6">
        <div class="box4">
          <div><div class="yellow4"></div></div>
          <div><div class="yellow5"></div></div>
          <div><div class="yellow6"></div></div>
          <div><div class="yellow7"></div></div>
        </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
name:'HomePage',
data() {
    return {
      title:''
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
  }
}

}
</script>

<style scoped>
.img1{
    margin-left: 21%;
    width: 8%;
}
.img2{
    position: fixed;
    left: 19%;
    top: 24%;
}
.img3{  
  position: fixed;
  right: 17%;
  top: 70px;
  width: 18%;
}
.img4{  
  width: 26%;
  position: fixed;
  left: 495px;
  top: 24%;
}
.img5{
  width: 3%;
  position: fixed;
  right: 34%;
  top: 24%;
}
.img6{  
  width: 5%;
  position: fixed;
  top: 88%;
  left: 18%;
}
.p1{  
  color: #C67560;
  margin-left: 18%;
  font-size: 31px;
  margin-top: -111px;
  font-family: STXinwei;
}
.p2{    
  color: #F19070;
  margin-left: 22%;
  font-size: 31px;
  margin-top: -17px;
  font-family: YouYuan;
  font-weight: bold;
}
.p3{      
  color: #F8D198;
  margin-left: 43%;
  font-size: 31px;
  margin-top: -64px;
  font-family: YouYuan;
  font-weight: bold;
}
.p4{
  color: #8797AE;
  margin-left: 67%;
  font-size: 31px;
  margin-top: -64px;
  font-family: YouYuan;
  font-weight: bold;
}
.p5{  
  width: 5px;
  font-size: 31px;
  font-family: YouYuan;
  color: #8797AE;
  position: fixed;
  top: 66%;
  left: 19%;
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
.yellow1{  
  width: 180px;
  height: 100px;
  background-color: #FFFABF;
  border-radius: 10%;
  position: fixed;
  left: 19%;
  top: 36%;
}
.yellow2{
  width: 180px;
  height: 100px;
  background-color: #FFFABF;
  border-radius: 10%;
  position: fixed;
  left: 19%;
  top: 51%;
}
.yellow3{  
  width: 360px;
  height: 227px;
  background-color: #FFFABF;
  border-radius: 10%;
  position: fixed;
  left: 35%;
  top: 285px;
}
.yellow4{     
  width: 12%;
  height: 170px;
  background-color: #FFFABF;
  border-radius: 20px;
  position: fixed;
  left: 63%;
  top: 561px;
}
.yellow5{   
  width: 12%;
  height: 170px;
  background-color: #FFFABF;
  border-radius: 20px;
  position: fixed;
  left: 50%;
  top: 561px;
}
.yellow6{   
  width: 12%;
  height: 170px;
  background-color: #FFFABF;
  border-radius: 20px;
  position: fixed;
  left: 37%;
  top: 561px;
}
.yellow7{   
  width: 12%;
  height: 170px;
  background-color: #FFFABF;
  border-radius: 20px;
  position: fixed;
  left: 24%;
  top: 561px;
}
.box1{
    width: 200px;
    height: 250px;
    background-color: #F19070;
    margin-left: 18%;
    border-radius: 10%;
}
.box2{
    width: 386px;
    height: 250px;
    background-color: #F8D198;
    border-radius: 10%;
    position: fixed;
    left: 34%;
    top: 34%;
}
.box3{
    width: 200px;
    height: 250px;
    background-color: #8797AE;
    border-radius: 10%;
    position: fixed;
    right: 341px;
    top: 34%;
}
.box4{  
    width: 53%;
    height: 200px;
    background-color: #A6B6C3;
    margin-left: 23%;
    margin-top: 2%;
    border-radius: 20px;
}
.shuxian1{  
  width: 85px;
  height: 47px;
  margin-bottom: 10px;
  border-top: 5px solid #E2B8AB;
  border-bottom: 5px solid #E2B8AB;
  position: fixed;
  top: 41%;
  margin-left: 5px;
}
.shuxian2{
  width: 85px;
  height: 47px;
  margin-bottom: 10px;
  border-top: 5px solid #E2B8AB;
  border-bottom: 5px solid #E2B8AB;
  position: fixed;
  top: 41%;
  margin-left: 109px;
}
.shuxian3{
  width: 85px;
  height: 47px;
  margin-bottom: 10px;
  border-top: 5px solid #E2B8AB;
  border-bottom: 5px solid #E2B8AB;
  position: fixed;
  top: 54%;
  margin-left: 109px;
}
.shuxian4{
  width: 85px;
  height: 47px;
  margin-bottom: 10px;
  border-top: 5px solid #E2B8AB;
  border-bottom: 5px solid #E2B8AB;
  position: fixed;
  top: 54%;
  margin-left: 5px;
}
span{
  font-size: 230px;
  margin-left: 44px;
  color: #E2B8AB;
}
.pp1{
  position: fixed;
  top: 36%;
  margin-left: 13px;
  color: #E2B8AB;
  font-size: large;
  cursor: pointer;
}
.pp2{
  position: fixed;
  top: 42%;
  margin-left: 13px;
  color: #E2B8AB;
  font-size: large;
  cursor: pointer;
}
.pp3{
  position: fixed;
  top: 49%;
  margin-left: 13px;
  color: #E2B8AB;
  font-size: large;
  cursor: pointer;
}
.pp4{
  position: fixed;
  top: 55%;
  margin-left: 30px;
  color: #E2B8AB;
  font-size: large;
  cursor: pointer;
}
.pp5{
  position: fixed;
  top: 36%;
  margin-left: 129px;
  color: #E2B8AB;
  font-size: large;
  cursor: pointer;
}
.pp6{
  position: fixed;
  top: 42%;
  margin-left: 114px;
  color: #E2B8AB;
  font-size: large;
  cursor: pointer;
}
.pp7{
  position: fixed;
  top: 49%;
  margin-left: 114px;
  color: #E2B8AB;
  font-size: large;
  cursor: pointer;
}
.pp8{
  position: fixed;
  top: 55%;
  margin-left: 131px;
  color: #E2B8AB;
  font-size: large;
  cursor: pointer;
}
</style>