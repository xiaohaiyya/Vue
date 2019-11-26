<!--JH-->
<!--第三个页面-->
<template>
  <div id="shouye">
    <!-- 1. 顶部-->
    <div id="header">
      <router-link to="/search" id="eleme">
        <i class="el-icon-search"></i>
      </router-link>

      <span id="login">
        <router-link to="/addressTop">
          <span>{{this.$store.state.myCity.name}}</span>
          <span>({{this.$store.state.myCity.address}})</span>
        </router-link>
      </span>

      <router-link to="/login" id="changeCity" v-if=" !this.$store.state.loginShow">登录|注册</router-link>
      <router-link to="/dyhome" id="changeCity" v-if=" this.$store.state.loginShow">
        <i class="el-icon-s-custom"></i>
      </router-link>
    </div>

    <!-- 2. 轮播图页面-->
    <div id="sate" v-if="show">
      <swiper :options="swiperOption" ref="mySwiper"   id="swipers">
        <!-- slides -->
        <swiper-slide>
          <ul>
            <li v-for="(v,i) in shouyeData1" :key="i" v-show="i<8">
              <router-link :to="{name:'imgsdetails',query:v}">
                <img :src="img_before+v.image_url" alt />
                <p>{{v.title}}</p>
              </router-link>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul>
            <li v-for="(v,i) in shouyeData1" :key="i" v-show="i>=8">
              <router-link :to="{name:'imgsdetails',query:v}">
                <img :src="img_before+v.image_url" alt />
                <p>{{v.title}}</p>
              </router-link>
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- 3.品牌 效果展示 -->
    <div id="allFood">
      <div id="nearby">附近商家</div>
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
export default {
  name: "shouye",
  data() {
    return {
      shouyeData1: "",
      show:false,
      allFoodData: "",
      img_before2: "//elm.cangdu.org/img/",
      img_before: "https://fuss10.elemecdn.com",
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  created() {
    if (this.$route.query.name) {
      this.$store.state.myCity = this.$route.query;
    }
    this.getFirstData();
    this.getAllFood();
  },
  methods: {
    getFirstData() {
      const api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.shouyeData1 = res.data;
        this.show = true;
      });
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
      });
    }
  }
};
</script>

<style scoped>
#header {
  overflow: hidden;
  background-color: #3190e8;
  height: 0.5rem;
  width: 3.55rem;
  font-size: 0.2rem;
  line-height: 0.5rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  color: white;
  overflow: hidden;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 10;
}
#header a {
  color: white;
}
#eleme {
  float: left;
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
#sate {
  margin-top: 0.5rem;
  width: 3.75rem;
  /* height: 1.98rem; */
  border-bottom: 0.01rem solid gainsboro;
  /* padding-bottom: 0.1rem; */
  /* padding-top: 0.06rem; */
    padding-bottom: 0.1rem;
  margin-bottom: 0.05rem;
  background-color: #fff;
}
#sate swiper swiper-slide {
  width: 3.75rem;
  /* border: #3190e8 solid 0.005rem; */
}
.swiper-slide swiper-slide-active {
  width: 100%;
}
#sate ul li {
  width: 0.51rem;
  height: 0.72rem;
  /* border: #3190e8 solid 0.005rem; */
  margin-left: 0.3rem;
  margin-top: 0.1rem;
  float: left;
  text-align: center;
  font-weight: 200;
}
#sate ul li img {
  width: 0.4219rem;
  margin-bottom: 0.15rem;
}
/* #sate .swiper-pagination{

  margin-top: 4rem;
  border: #3190e8 solid 0.005rem;
} */
#sate #swipers {
  width: 100%;
}
#sate a {
  font-size: 0.12rem;
  color: #666666;
}
#allFood {
  background: #fff;
  padding-right: 0.1rem;
  position: relative;
}
#allFood #nearby{
  /* width: 3.75rem;
  height: 0.38rem;
  line-height: 0.38rem;
  font-size: 0.13rem; */
  color: #817d7d;
  margin-left: 0.1rem;
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
  font-weight: 700;
  background-color: #ffD930;
  border-radius: 0.03rem;
  margin-right: 0.04rem;
  font-size: 0.12rem;
}
#title {
  font-weight: 700;
  font-size: 0.15rem;
}
#liBot {
  overflow: hidden;
}
#soldNum {
  font-size: 0.1rem;
}
#money,
#distance {
  color: #666666;
  font-size: 0.1rem;
  font-weight: 200;
}
#distance {
  float: right;
  margin-top: 0.05rem;
  /* padding-right: 0.2rem; */
  color: #666666;
}
#time {
  float: right;
  font-size: 0.1rem;
  font-weight: 200;
  color: #3190e8;
  /* margin-top: 0.02rem; */
}
#bao {
  float: right;
  /* border: 0.01rem solid gainsboro; */
  font-size: 0.06rem;
}
#zhun {
  float: right;
  /* border: 0.01rem solid gainsboro; */
  margin-left: 0.01rem;
  margin: 0.01rem;
  font-size: 0.06rem;
}
#piao {
  float: right;
  font-size: 0.06rem;
  /* border: 0.01rem solid gainsboro; */
}
.el-rate__item {
  width: 0;
}
#zhuansong {
  background-color: #57a9ff;
  color: #fff;
  display: inline-block;
  font-size: 0.1rem;
  position: absolute;
  right: 0.44rem;
  border: 0.01rem solid #57a9ff;
}
#ontime {
  background-color: white;
  color: #57a9ff;
  border: 0.01rem solid #57a9ff;
  display: inline-block;
  font-size: 0.1rem;
  position: absolute;
  right: 0.1rem;
}
#allFood a {
  color: #666666;
}
#shouye {
  padding-bottom: 0.5rem;
}


#score span i{
  margin-right: -0.5rem;
}
</style>