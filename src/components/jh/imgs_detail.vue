<template>
<div>
<div id="header">
          <span id="eleme" @click="back()"> <i class="el-icon-arrow-left"></i> </span>
          <span id="login">{{dataQuery.title}}</span>
      </div>
      <div id="shaixuan">为筛选预留的位置</div>
      <div id="allFood">
      <ul>
        <li v-for="(v,i) in allFoodData" :key="i">
          <router-link :to="{name:'shopsDetail',query:v}">
          <img :src="img_before2+v.image_path" alt id="foodImg" />
          <span id="paizi">品牌</span>
          <span id="title">{{v.name}}</span>
          <span  v-if="v.supports.length==3" id="piao">{{v.supports[2].icon_name}}</span>
          <span id="zhun">{{v.supports[1].icon_name}}</span>
          <span id="bao">{{v.supports[0].icon_name}}</span>  
         
          <el-rate v-model="v.rating" disabled show-score text-color="#ff9900" score-template="{value}" id="score"></el-rate>
          <span id="soldNum">月售：{{v.recent_order_num}}</span>
          <div id="zhuansong">{{v.delivery_mode.text}}</div>
          <div id="ontime">准时达</div>
          <div id="liBot"><span id="money"> ￥20起送/{{v.piecewise_agent_fee.tips}}</span> <span id="distance"><span id="time">/{{v.order_lead_time}}</span>{{v.distance }}</span> </div>
           </router-link>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import { Loading } from 'element-ui';
let loadingInstance;
export default {
    name:"imgsdetails",
    data() {
        return {
            dataQuery:"",
            allFoodData: "",
            img_before2: "//elm.cangdu.org/img/",
        }
    },
    methods: {
         back(){
            this.$router.back()
        },
         getAllFood() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.$store.state.myCity.latitude +
        "&longitude=" +
        this.$store.state.myCity.longitude;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.allFoodData = res.data;
        loadingInstance.close();

      });
    },
    beforeCreate() {
      loadingInstance = Loading.service({
        fullscreen: true,
    })
    },
    },
    created() {
        this.dataQuery = this.$route.query
        this.getAllFood();
    },
}
</script>

<style scoped>
#header{
       overflow: hidden;
       background-color:#3190e8;
       height: 0.5rem;
       width: 3.55rem;
       font-size: 0.2rem;
       line-height: 0.5rem;
       padding-left: 0.1rem;
       padding-right: 0.1rem;
       color: white;
       overflow: hidden;
       text-align: center;
   }
   #header a{
       color: white;
   }
   #eleme{
        float: left;
    }
    #allFood {
  background: #fff;
  padding-right: 0.1rem;
  position: relative;
}
#allFood li {
  width: 3.55rem;
  padding-left: 0.1rem;
  overflow: hidden;
  padding-top: 0.1rem;
   padding-right: 0.1rem;
  padding-bottom: 0.1rem;
  border-bottom: 0.01rem solid gainsboro;
}
#allFood li img {
  width: 0.6rem;
  float: left;
  margin-right: 0.1rem;
}
#paizi {
  font-weight: 800;
  background-color: yellow;
  border-radius: 0.03rem;
  margin-right: 0.04rem;
  font-size: 0.13rem;
}
#title {
  font-weight: 800;
  font-size: 0.16rem;
}
#liBot{
  overflow: hidden;
}
#soldNum{
  font-size: 0.1rem;
}
#money,#distance{
  font-size: 0.1rem;
  font-weight: 200;
   
}
#distance{
  float: right;
  margin-top: 0.05rem;
  padding-right: 0.2rem;
}
#time{
  float: right;
    font-size: 0.1rem;
  font-weight: 200;
  color: blue;
  /* margin-top: 0.02rem; */
}
#bao{
  float: right;
  border: 0.01rem solid gainsboro;
  font-size: 0.06rem;
}
#zhun{
  float: right;
   border: 0.01rem solid gainsboro;
   margin-left: 0.01rem;
   margin: 0.01rem;
   font-size: 0.06rem;
}
#piao{
   float: right;
   font-size: 0.06rem;
   border: 0.01rem solid gainsboro;
}
#zhuansong{
  background-color: #57A9FF;
  color: #fff;
  display: inline-block;
  font-size: 0.1rem;
  position: absolute;
  right: 0.44rem;
  border: 0.01rem solid #57A9FF;
}
#ontime{
  background-color: white;
  color: #57A9FF;
  border: 0.01rem solid #57A9FF;
  display: inline-block;
  font-size: 0.1rem;
  position: absolute;
  right: 0.1rem;
}
#allFood a{
  color: black
}
</style>