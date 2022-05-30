// 出售商品页面
<template>
  <div>
  <!-- 下半部分 -->
  <form>
    <input type="file" @change="getFile($event)" class="inp">
    <img :src="URL" alt="" class="inp1" v-show="istrue">
    <!-- <img src="URL" alt="" class="inp1" v-show="istrue"> -->
    <!-- <img :src="`data:image/png;base64,${URL}`"  alt="" class="inp1" v-show="istrue"> -->
    <button @click="submitForm($event)" class="btn1">提交</button>
</form>
  <div>
    <!-- 左半部分 -->
    <div class="left">
    <div class="leftTop">
        <span class="span">+</span>
      </div>
        <form action="">
        <input type="text" name="" id="" placeholder="商品名称" class="leftBottom1" v-model="goodsName"></form>
    </div>
    <!-- 右半部分 -->
    <div class="right">
        <input type="text" name="" id="" placeholder="商品简介" class="rightTop" v-model="introduction">
        <input type="text" name="" id="" placeholder="商品价格" class="rightMiddle1" v-model="price">
      <div class="rightMiddle2"></div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
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
    },
    data() {
      return {
        imageUrl: '',
            goodsName:'',
            introduction:'',
            price:'',
            number:'',
            file:'',
            istrue:false,
            URL:require('../assets/1.png')
      };
    },
    methods: {          
      getFile(event) {
            this.file = event.target.files[0];
            console.log(this.file);
            if(this.istrue==true){
            this.istrue=false;
            }
            else if(this.istrue==false)
            this.istrue=true
            this.URL='../assets/'+this.file.name;
            let reader=new FileReader();
            reader.readAsDataURL(event.target.files[0]); 
            reader.onload=()=>{
              console.log("1",reader);
            this.URL=reader.result;
            // this.URL = this.result.replace('data:image/png;base64,', '');
            // this.URL = this.result.replace('data:image/jpeg;base64,', '');
            console.log(this.URL);
            }
          },
          submitForm(event) {
            // alert("1");
            event.preventDefault();
            let formData = new FormData();
          formData.append('goodsName',this.goodsName);
          formData.append('introduction',this.introduction);
          formData.append('price',this.price);
          formData.append('number',1);
          formData.append('file',this.file);
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
 
            axios.post('http://5101g0918f.wicp.vip/goods/submitGoods', formData, config).then(function (response) {
                  if(response.data.code==401)alert("请登录");
                  else{
                    
              if (response.status === 200) {
                alert("提交成功");
                console.log(response.data);
              }
                  }
            })
                if(this.istrue==true){
                this.istrue=false;
                }
                else if(this.istrue==false)
                this.istrue=true
                this.goodsName='';
                this.introduction='';
                this.price='';
                this.file='';
          }  }
  }
</script>

<style scoped>
.span{
  position: fixed;
  top: 41%;
  left: 32%;
  font-size: 100px;
  color: white;
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
.leftBottom1{  
  background-color: #FFFABF;
  width: 31%;
  height: 6%;
  position: fixed;
  top: 565px;
  left: 261px;
  border-radius: 30px;
  z-index: 2;
  border-style: none;
  outline: none;
}
.rightTop{  
  background-color: #F8D198;
  width: 33%;
  height: 15%;
  position: fixed;
  top: 226px;
  right: 227px;
  border-radius: 20px;
  border-style: none;
  outline: none;
}
.rightMiddle1{  
  background-color: #FFFABF;
  width: 33%;
  height: 6%;
  position: fixed;
  top: 355px;
  right: 227px;
  border-radius: 30px;
  border-style: none;
  outline: none;
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
  width: 33%;
  height: 6%;
  position: fixed;
  top: 582px;
  right: 227px;
  border-radius: 14px;
  font-family: YouYuan;
  font-size: 20px;
  font-weight: 700;
  outline: none;
  border-style: none;
}
.inp{
  width: 31%;
  height: 38%;
  position: fixed;
  top: 240px;
  left: 261px;
  opacity: 0;
  z-index: 1;
}
.inp1{
  /* display: none; */
  width: 31%;
  height: 38%;
  position: fixed;
  top: 240px;
  left: 261px;
  z-index: 10;
}
</style>