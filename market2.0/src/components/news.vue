<!-- 消息页面 -->
<template>
  <div>
    <!-- 左边部分 -->
    <div class="left">
      <p>已购入</p>
    </div>
    <!-- 右边部分 -->
    <div class="right">
      <p>已出售</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
p{  
  font-size: 40px;
  color: #946C6C;
  text-align: center;
  margin-top: 10px;
  font-family: YouYuan;
  }
</style>