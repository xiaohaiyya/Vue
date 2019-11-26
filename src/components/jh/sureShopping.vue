<template>
    <div>
          <div id="header">
       <i class="el-icon-arrow-left" id="eleme" @click="back()"></i>
     <span id="login">
        确认订单
      </span>
      <router-link to="/login" id="changeCity" v-if=" !this.$store.state.loginShow">登录|注册</router-link>
      <router-link to="/dyhome" id="changeCity" v-if=" this.$store.state.loginShow">
        <i class="el-icon-s-custom"></i>
      </router-link>
    </div>
    <div id="addAddress" v-if="this.$store.state.sendV" @click="chooseAddress()">
             <span>地址：{{this.$store.state.sendV.address}}{{this.$store.state.sendV.address_detail}}</span>
                <span>收件人：{{this.$store.state.sendV.name}} 手机号：{{this.$store.state.sendV.phone}}</span>
    </div>
    <div id="addAddress" @click="chooseAddress()" v-else>
        <i class="el-icon-location-outline"></i>
        <span> 请添加一个收货地址</span>
        <i class="el-icon-arrow-right" id="iconRight"></i>
    </div>
    <div id="arriveTime">
        <span id="arrive">送达时间</span>
        <span id="time">尽快送达|预计23:50</span><br>
       <span id="kuaidi">蜂鸟专送</span>
    </div>
    <p id="pay" @click="open">支付方式 <span id="online">在线支付 <i class="el-icon-arrow-right"></i></span></p>
     <p id="hongbao">红包 <span id="online">暂时只在饿了么app中支持</span></p>
     <div id="getData">
        <h2><img :src="'//elm.cangdu.org/img/'+shops.image_path" alt="">{{shops.name}}</h2>
        <li v-for="(v,i) in this.$store.state.gouwucheData" :key="i">
            <span id="shoppingName">{{v.name}}</span>
            <span id="shoppingPrice">￥{{v.specfoods[0].price}}</span>
            <span id="shoppingCount"><i class="el-icon-close"></i>{{v.is_featured}}</span>
            
        </li>
        <li><span id="shoppingName">餐盒</span> <span id="shoppingPrice">￥3</span></li>
        <li><span id="shoppingName">配送费</span>  <span id="shoppingPrice">￥4</span></li>
     </div>
     <div id="payPrice">
         <span>订单￥{{holePrice}}</span><span id="waitingForPay">待支付</span>
         <div id="waitingForPayDiv">￥{{holePrice}}</div>
     </div>
     <div id="kouwei">
         <p id="beizhu" @click="taste()">订单备注 
             <span v-if="!dataPush">口味、偏好等 <i class="el-icon-arrow-right"></i></span>
            <span v-if="dataPush">{{getData()}} <i class="el-icon-arrow-right"></i></span>
         </p>
         <p id="fapiao">发票 <span>不需要开发票 <i class="el-icon-arrow-right"></i></span></p>
     </div>
     <div id="footer"><span id="waitingForPayFooter">待支付￥{{holePrice}}</span> <div id="sureShopping" @click="payFor()">确认下单</div></div>
    </div>
</template>

<script>
export default {
    name:"sureShopping",
    data() {
        return {
            theShopping:'',
            shops:"",
            holePrice:0,
            dataPush:"",
            inpData:"",
            
        }
    },
    created() {
        if(this.$route.params.shops){
            this.shops = this.$route.params.shops;
             this.theShopping = this.$route.query;
        for(var i=0;i<this.theShopping.length;i++){
            this.holePrice += this.theShopping[i].is_featured*this.theShopping[i].specfoods[0].price;
        }
        this.holePrice+=7;
        }
       this.dataPush = this.$route.params.dataPush;
        this.inpData = this.$route.params.inpData;
    },
    methods: {
       back(){
            history.go(-1);
        },
        payFor(){
            if(!this.$store.state.loginShow){
                 this.$alert('请进入登录页面登陆之后在付款', '请登录', {
                confirmButtonText: '确定',
               center:true
        });
            }else{
                    this.$router.push({
                        name:"goumai"
                    })
            }
        },
        taste(){
            this.$router.push({
                name:'taste'
            })
        },
        getData(){
            var datacao='';
            for(var i=0;i<this.dataPush.length;i++){
                if(this.dataPush[i]){
                 datacao +=this.dataPush[i];
                }
            }
            datacao+=this.inpData;
            return datacao;
        },
         open() {
        this.$confirm('目前只能使用在线支付，不好意思，亲', '支付方式', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '选择成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消选择'
          });          
        });
      },
       chooseAddress(){
                this.$router.push({
                    name:'chooseAddress',
                    query:this.shops
                })
        },
    },
}
</script>

<style scoped>
#header {
 
  background-color: #3190e8;
  height: 0.5rem;
  width: 3.55rem;
  font-size: 0.2rem;
  line-height: 0.5rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  color: white;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
}
#header a {
  color: white;
}
#eleme {
  float: left;
  margin-top: 0.15rem;
}
#changeCity {
  font-size: 0.15rem;
  float: right;
}
#login {
  display: inline-block;
  width: 2rem;
  overflow: hidden;
}
.el-icon-s-custom {
  font-size: 0.2rem;
}
#addAddress{
    margin-top:  0.5rem;
    height: 0.7rem;
    line-height: 0.7rem;
    background-color: #fff;
    padding-left: 0.2rem;
    border-bottom: 0.01rem dashed rgba(255, 0, 119, 0.705);
    overflow: scrll;
}
#addAddress #iconRight{
    margin-left: 1.5rem;
}
#arriveTime{
    padding-left: 0.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    position: relative;
    background-color: #fff;
    padding-bottom: 0.1rem;
}
#arrive{
    font-size: 0.18rem;
    font-weight: 800;
}
#time{
    color: #3190e8;
    margin-left: 0.8rem;
}
#kuaidi{
    position: absolute;
    left: 2.2rem;
    top: 0.55rem;
    background-color: #3190e8;
    height: 0.2rem;
    line-height: 0.2rem;
    color: #fff;
    font-size: 0.12rem;
    border-radius: 0.03rem;
}
#pay{
    margin-top: 0.1rem;
    background-color: #fff;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.15rem ;
    overflow: hidden;
    padding-left: 0.2rem;
    border-bottom: 0.01rem solid #ddd;
}
#online{
    font-size: 0.13rem;
    font-weight: 300;
    float: right;
    margin-right: 0.2rem;

}
#hongbao{
    background-color: #fff;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.13rem ;
    overflow: hidden;
    padding-left: 0.2rem;
     font-weight: 300;
    border-bottom: 0.01rem solid #ddd;
}
#getData h2 img{
    width: 0.3rem;
    margin-top: 0.1rem;
    vertical-align: top;
    margin-right: 0.1rem;
}
#getData h2{
    height: 0.4rem;
    line-height: 0.4rem;
    padding-left: 0.2rem;
    background-color: #fff;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    margin-top: 0.1rem;
    border-bottom: 0.01rem  solid #eee;
}
li{
    height: 0.5rem;
    line-height: 0.5rem;
    font-size:0.14rem;
    padding-left: 0.2rem;
    overflow: hidden;
    background-color: #fff;
}
#shoppingCount{
    margin-left: 1rem;
    color: orangered;
    float: right;
}
#shoppingPrice{
    margin-left: 0.4rem;
    float: right;
    margin-right: 0.2rem;
}
#payPrice{
    padding-top: 0.1rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-top: 0.01rem solid #eee;
    height: 0.6rem;
    line-height: 0.3rem;
}
#waitingForPay{
    margin-left: 1.8rem;
    color: orangered;
}
#waitingForPayDiv{
    margin-left: 2.5rem;
    color: orangered;
}
#kouwei{
    margin-top: 0.1rem;
    background-color: #fff;
    padding-left: 0.2rem;
     margin-bottom: 0.8rem;
}
#kouwei #beizhu{
    height: 0.5rem;
    line-height: 0.5rem;
    font-size:0.14rem;
    overflow: hidden;
    
}
#kouwei span{
    font-size: 0.13rem;
    font-weight: 300;
    margin-left: 1.9rem;
    overflow: hidden;
}
#kouwei #fapiao{
     height: 0.5rem;
    line-height: 0.5rem;
    font-size:0.14rem;
   
}
#footer{
    position: fixed;
    bottom: 0;
    height: 0.5rem;
    background: #333;
    line-height: 0.5rem;
    width: 3.75rem;
    overflow: hidden;
    padding-left: 0.2rem;
}
#waitingForPayFooter{
    color: white;
}
#sureShopping{
    background-color: #4cd964;
    width: 1rem;
    text-align: center;
    color: white;
    font-size: 0.14rem;
    float: right;
    height: 0.5rem;
}
</style>