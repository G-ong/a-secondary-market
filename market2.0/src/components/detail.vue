<template>
  <div class="box">
      <!-- 左边部分 -->
      <div class="leftTop">
        
      </div>
      <div class="leftBottom">
          
      </div>
      <!-- 右边部分 -->
      <div>
          <div class="rightTop"></div>
          <div class="rightmiddle1"></div>
          <div class="rightmiddle2"></div>
          <button class="btn">修&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;改</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{    
    width: 30%;
    height: 60px;
    background-color: #A6B6C3;
    position: fixed;
    top: 585px;
    right: 245px;
    border-radius: 8px;
    outline: none;
    border-style: none;
    color: #97797B;
    font-size: 27px;
    font-weight: 700;
}
.rightmiddle1{
    width: 30%;
    height: 60px;
    background-color: #FFFABF;
    position: fixed;
    top: 320px;
    right: 245px;
    border-radius: 25px;
}
.rightmiddle2{
    width: 30%;
    height: 170px;
    background-color: #FFFABF;
    position: fixed;
    top: 397px;
    right: 245px;
    border-radius: 25px;
}
.rightTop{
    width: 30%;
    height: 200px;
    background-color: #F8D198;
    position: fixed;
    top: 105px;
    right: 245px;
    border-radius: 25px;
}
.leftBottom{  
    background-color: #FFFABF;
    width: 31%;
    height: 60px;
    border-radius: 25px;
    position: fixed;
    top: 562px;
    left: 254px;
}
.leftTop{  
    background-color: #A6B6C3;
    width: 33%;
    height: 550px;
    border-radius: 25px;
    position: fixed;
    top: 105px;
    left: 240px;
}
.box{  
    width: 70%;
    height: 600px;
    background-color: #E9BBAB;
    margin-left: 15%;
    margin-top: 1%;
    border-radius: 25px;
}
</style>