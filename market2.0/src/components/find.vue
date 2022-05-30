<!-- 搜索显示页面 -->
<template>
  <div>
      <div>
        <img src="../assets/login-5.png" alt="" class="img1">
        <p class="p1">二度发现小铺</p>
      </div>
      <div>
        <form action="">
          <input type="text" v-model="title">
          <button @click="find">搜索</button>
        </form>
      </div>
      <div class="box1">
         <img src="../assets/ca.png" alt="" class="img11">
      </div>
      <div class="big">
          <div v-for="good in goods" :key="good.id" class="box" @click="put(good.id)">
            <div class="box2">
              <div class="box3">
                <img :src="'http://5101g0918f.wicp.vip'+good.goodsPicture" alt="" class="imgg" >
              </div>
            </div>
            <div class="box4">{{good.goodsName}}</div>
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
           local:''
        }
    },
    // created(){

		// 	this.$bus.$on('title',(users)=>{
		// 		this.users= users
    //             alert("shod")
		// 	})
    // },
   mounted(){
    //  localStorage.setItem()
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
        // axios.get('http://bbbbbblack.free.idcfengye.com/goods/showAllGoods',{
        //     params:{
        //     },
        // })
        // .then((res)=>{
        //     console.log(res);   //  处理成功的函数 相当于success
        // })
        // .catch((error)=>{
        //     console.log(error)  //  错误处理 相当于error
        // })
        
    //    关键词查询商品信息
           this.local=localStorage.getItem('find')
              const data = {
                  keyWords:this.local
              }
              axios.post('http://5101g0918f.wicp.vip/goods/findGoods',data,
                // headers: {
                //     'Content-Type':'application/json'
                // },
                )
              .then((res)=>{
                  console.log(res); 
                  this.goods=res.data.data;
              })
              .catch((error)=>{
                  console.log(error)  
              })
   },
   methods:{
  find(){
    window.localStorage.setItem('find', this.title);
        // this.$bus.$emit('title',this.title);
        // alert(this.title);
            this.$router.push({
                path:'/find1'
            });
  },
  put(id){
    localStorage.setItem('goodsId',id);
            this.$router.push({
                path:'/goodDetail'
            });
  }
   }
}
</script>

<style scoped>
.img11{
  width: 803px;
  margin-top: -56px;
}
.big{
  width: 73%;
}
.box{
  float: left;
  margin-left: 0px;
  margin-right: -191px;
}
.imgg{  
  width: 130px;
  height: 100px;
  margin-left: 20px;
  margin-top: 7px;
  pointer-events: auto; 
  }
.p1{  
  color: #C67560;
  margin-left: 28%;
  font-size: 31px;
  margin-top: -111px;
  font-family: STXinwei;
}
.img1{
    margin-left: 31%;
    width: 8%;
}
input{
    width: 26%;
    position: absolute;
    top: 14%;
    left: 42%;
    height: 4%;
    border-radius: 25px;
    border: 5px solid #E9BBAB;
    outline: none;
}
button{
    position: absolute;
    top: 119px;
    left: 63%;
    height: 4%;
    border-radius: 25px;
    border: 1px solid #C67560;
    width: 70px;
    background-color: #C67560;
    color: #E4B1A1;
    font-size: 17px;
}
.box1{  
  width: 800px;
  height: 100px;
  background-color: #E9BBAB;
  margin-left: 307px;
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