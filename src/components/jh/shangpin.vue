<template>
  <div>
    <div id="left">
      <ul v-for="(v,i) in liebiaoData" :key="i" id="uls">
        <!-- <router-link :to="{name:'fenyeliebiao',query:v}"><li>{{v.name}}</li></router-link> -->
        <a :href="'#li'+i">
          <li :id="'liColor'+i" @click="liColor(i)">{{v.name}}</li>
        </a>
      </ul>
    </div>
    <div id="right">
      <ul v-for="(b,j) in liebiaoData" :key="j" :id="'li'+j">
        <p id="nameAnd">
          <span id="name">{{b.name}}</span>
          {{b.description}}
        </p>

        <li v-for="(v,i) in b.foods" :key="i" @click="push(v)">
          <img :src="beforeImg+v.image_path" alt />
          <div>
            <h3>{{v.name}}</h3>
            <p id="des">{{v.description}}</p>
            <p id="tips">{{v.tips}} 好评率{{v.satisfy_rate}}%</p>
          </div>
          <span id="price">￥{{v.specfoods[0].price}}</span>
          <span class="price">起</span>
          <!-- 遮罩 -->
          <span id="theMask" v-if="bol">
            <span id="maskTitle">{{getName(v)}}</span>
            <br />
            <span id="close" class="el-icon-close" @click="close()"></span>
          </span>

          <!-- ------------------- -->
          <div class="theMask" :id="'mask'+i">
            <h3 id="titleName">{{v.name}}</h3>
            <i class="el-icon-close" @click.stop="close(i)" id="closeBtn"></i>
            <div id="maskMiddle">
              <span
                :id="'span1'+i"
                class="span1"
                @click.stop="span1(i)"
              >{{v.specfoods[0].specs_name}}</span>
              <span
                :id="'span2'+i"
                class="span2"
                v-if="v.specfoods.length>1"
                @click.stop="span2(i)"
              >{{v.specfoods[1].specs_name}}</span>
            </div>
            <div id="maskFooter">
              <span id="maskPrice">￥{{v.specfoods[0].price}}</span>
              <button @click.stop="dec(v,i)" v-if="v.is_featured>0" id="jianhao">-</button>
              <span id="mounth" v-if="v.is_featured>0">{{v.is_featured}}</span>
              <button id="joinIN" @click.stop="joinIn(v,i)">加入购物车</button>
            </div>
          </div>
          <button id="btn" v-if="v.specfoods.length>1" @click.stop="changeBol(i)">选规格</button>

          <span v-else id="xuanze">
            <button @click.stop="dec(v,i)" v-if="v.is_featured>0">-</button>
            <span id="mounth" v-if="v.is_featured>0">{{v.is_featured}}</span>
            <button @click.stop="add(v,i)" id="jia">+</button>
            
          </span>
        </li>
      </ul>
    </div>

    <div id="footer">
      <div id="shabi" class="animated">
        <i class="el-icon-close" @click="none()" id="guanbianniu"></i>
        <h2>购物车 <button id="qingkonggouwuche" @click="qingkonggouwuche()">清空</button></h2> 
        <li v-for="(v,i) in this.$store.state.gouwucheData" :key="i">
          <button @click.stop="dec(v,i)" v-if="v.is_featured>0" id="jianhao">-</button>
          <span id="gouwuchelibiandedongxi">{{v.name}}</span>
          <span id="chengshu"><i class="el-icon-close"></i>{{v.is_featured}}</span>
        </li>
      </div>
      <div id="footer_l">
        <span id="icon2" v-if="holePrice>0" @click="display()">
          <i class="el-icon-shopping-cart-full"></i>
          <span id="theCount" v-if="holePrice>0">{{shoppingConnt}}</span>
        </span>
        <span id="icon1" v-if="holePrice<1">
          <i class="el-icon-shopping-cart-full"></i>
          <span id="theCount" v-if="holePrice>0">{{shoppingConnt}}</span>
        </span>

        <div id="footer_m">
          <span>￥{{holePrice}}</span>
          <br />
          <span>{{dataHeader.piecewise_agent_fee.tips}}</span>
        </div>
      </div>
      <div id="footer_r2" v-if="holePrice>19" @click="sureShopping()">去结算</div>
      <div id="footer_r1" v-else>还差￥20起送</div>
    </div>
    <button id="jiaAnimate">+</button>
  </div>
</template>

<script>
ojbk: [231, 412, 42135, 523453];
import { Loading } from "element-ui";
let loadingInstance;
export default {
  name: "shangpin",
  data() {
    return {
      dataHeader: "",
      shabiBol: false,
      onePrice: "",
      holePrice: 0,
      beforeImg: "//elm.cangdu.org/img/",
      liebiaoData: "", //店铺商品信息
      shopData: "", //店铺信息
      shoppingConnt: 0,
      bol: false,
    };
  },
  beforeCreate() {
    loadingInstance = Loading.service({
      fullscreen: true
    });
  },
  methods: {
    qingkonggouwuche(){
     this.shoppingConnt=0;
       this.holePrice =0;
       for(var i=0;i<this.$store.state.gouwucheData.length;i++){
         this.$store.state.gouwucheData[i].is_featured=0;
       }
        this.$store.state.gouwucheData.splice(0,this.$store.state.gouwucheData.length);
    },
    getliebiaoData() {
      const api =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
        this.dataHeader.id;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.liebiaoData = res.data;
        loadingInstance.close();
      });
    },
    getshopData() {
      const api =
        "https://elm.cangdu.org/shopping/restaurant/" + this.dataHeader.id;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.shopData = res.data;
      });
    },

    add(v, u) {
      v.is_featured++;
      this.holePrice += v.specfoods[0].price;
      this.shoppingConnt++;
      if (v.is_featured == 1) {
        this.$store.state.gouwucheData.push(v);
      }
      console.log(event);
      // $("#jia").css("display","none")
      $("#jiaAnimate").css({
        display:"block",
        left:event.clientX+"px",
        top:event.clientY+"px"
      });
     $("#jiaAnimate").animate({
        left:"13%",
        top:"89%"
     },1000,function(){
       $("#jiaAnimate").css("display","none")
     })




    },
    dec(v, i) {
      v.is_featured--;
      this.holePrice -= v.specfoods[0].price;
      this.shoppingConnt--;
      if (v.is_featured == 0) {
        this.$store.state.gouwucheData.splice(
          this.$store.state.gouwucheData.findIndex(item => item === v),
          1
        );
      }
    },
    changeBol(i) {
      console.log($("#mask" + i));
      $("#mask" + i).css("display", "block");
    },
    close(i) {
      $("#mask" + i).css("display", "none");
    },
    span1(i) {
      $("#span1" + i).css("color", "#3190e8");
      $("#span1" + i).css("border", "0.01rem solid #3190e8");
      $("#span2" + i).css("color", "#333");
      $("#span2" + i).css("border", "0.01rem solid #333");
    },
    span2(i) {
      $("#span2" + i).css("border", "0.01rem solid #3190e8");
      $("#span2" + i).css("color", "#3190e8");
      $("#span1" + i).css("color", "#333");
      $("#span1" + i).css("border", "0.01rem solid #333");
    },
    joinIn(v, i) {
      v.is_featured++;
      this.holePrice += v.specfoods[0].price;
      this.shoppingConnt++;
      if (v.is_featured == 1) {
        this.$store.state.gouwucheData.push(v);
      }
    },
    getName(v) {
      return v.name;
    },
    sureShopping() {
      this.$router.push({
        name: "sureShopping",
        // query: this.gouwucheData,
        params: {
          shops: this.dataHeader
        }
      });
    },
    push(v) {
      this.$router.push({
        name: "shangpinDetail",
        query: v
      });
    },
    display() {
      $("#shabi").css("display", "block");
      $("#shabi").addClass("fadeInUp");
      // this.shabiBol = true;
    },
    none() {
      // this.shabiBol = false;
      $("#shabi").css("display", "none");
    },
    liColor(i) {
      console.log(i);
      $("#left #uls li").css("background", "#f5f5f5");
      $("#left #liColor" + i).css("background", "white");
      for (var a = 0; a < this.liebiaoData.length; a++) {
        if (a == i) {
          $("#left #liColor" + i).css("border-left", "#3190e8 solid 0.08rem");
        } else {
          $("#left #liColor" + a).css("border-left", "0");
        }
      }

      //   $("#left #liColor" + i).css("border-left", "#3190e8 solid 0.1rem");
      //   border-left: #3190e8 solid 0.1rem;
    }
  },
  created() {
    this.$store.state.gouwucheData=[];
    this.dataHeader = this.$route.query;
    this.getliebiaoData();
    this.getshopData();
  }
};
</script>

<style scoped>
#left #liColor0 {
  background-color: #fff;
}
#shabi {
  width: 3.75rem;
  height: 2rem;
  background-color: rgba(3, 3, 3, 0.5);
  position: absolute;
  top: -2rem;
  text-align: center;
  position: relative;
  display: none;
}
#shabi button {
  position: absolute;
  left: 0.2rem;
}
#shabi li {
  margin-top: 0.1rem;
  overflow: hidden;
}
#guanbianniu {
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
}
/* 1.左边 */
#left {
  float: left;
  width: 0.9rem;
  height: 5rem;
  overflow: scroll;
}
#left li {
  border-bottom: 0.01rem solid #ededed;
  /* height: 0.3rem; */
  line-height: 0.3rem;
  padding: 0.16rem 0.07rem;
  overflow: hidden;
  background-color: #f5f5f5;
  color: #666666;
  width: 0.6rem;
  margin-right: 0;
  height: 0.31rem;
  /* border-left: #3190e8 solid 0.1rem; */
  /* border: orange solid 0.005rem; */
}
#left a {
  color: black;
}
/* 2.右边 */
#right {
  float: right;
  height: 5rem;
  overflow: scroll;
  /* border: 0.005rem solid orange; */
  /* padding-left:0.09rem;  */
  width: 2.84rem;
}
#nameAnd {
  width: 2.67rem;
  height: 0.31rem;
  padding: 0.09375rem;
  line-height: 0.35rem;
  font-size: 0.13rem;
  font-weight: 300;
  /* border: 0.005rem solid orange; */
}
#nameAnd #name {
  font-weight: 700;
  font-size: 0.17rem;
  margin-right: 0.04rem;
  color: #666666;
}

#right ul li {
  padding: 0.14rem 0.08375rem 0.14rem 0.09375rem;
  height: 1rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #ededed;
  color: #333;
  overflow: hidden;
  overflow-x: hidden;
  /* border: 0.005rem solid orange; */
}
#right img {
  width: 0.46875rem;
  float: left;
  margin-right: 0.1rem;
  position: relative;
}
#price {
  margin-left: 0.55rem;
  font-size: 0.16rem;
  color: orangered;
  /* border: 0.005rem solid orange; */
  margin-top: 0.02rem;
}
.price {
  font-size: 0.13rem;
}
#des {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  font-size: 0.13rem;
  color: #666666;
}
#tips {
  /* border: #3190e8 solid 0.005rem; */
  margin-left: 0.55rem;
  font-size: 0.13rem;
  margin-bottom: 0.1rem;
}
#btn {
  background-color: #3190e8;
  color: #fff;
  outline: none;
  border: 0px;
  border-radius: 0.03rem;
  float: right;
  margin-top: 0.05rem;
}

::-webkit-scrollbar {
  display: none;
}
#footer {
  position: absolute;
  bottom: 0;
  height: 0.472rem;
  background: #333;
  color: white;
  width: 3.75rem;
}
#footer_l {
  float: left;
}
#footer_r2 {
  background-color: #4cd964;
  color: white;
  text-align: center;
  width: 1rem;
  float: right;
  height: 0.472rem;
  line-height: 0.472rem;
}
#footer_r1 {
  background-color: #535356;
  width: 1rem;
  float: right;
  height: 0.472rem;
  line-height: 0.472rem;
}

#lis {
  position: relative;
}

/* 1.+ -  */
#xuanze {
  /* border: orange solid 0.05rem; */
  overflow: hidden;
  margin-left: 0.9rem;
  /* color:#fff; */
}
#xuanze button {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #d6d4d4;
  color: white;
  border: 0px;
  outline: none;
  line-height: 0.1rem;
  font-size: 0.15rem;
}
#xuanze #jia {
  background-color: #3190e8;
  float: right;
}
 #jiaAnimate{
   width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
   background-color: #3190e8;
color: white;
  border: 0px;
  outline: none;
  line-height: 0.1rem;
  font-size: 0.15rem;
  display: none;
  position: absolute;
}
#mounth {
  display: inline-block;
}

#footer_m {
  margin-left: 0.8rem;
}
#footer_l {
  position: relative;
}
#icon1 {
  position: absolute;
  top: -0.25rem;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.3rem;
  background-color: #3d3d3f;
  margin: 0.05rem;
  border-radius: 50%;
  text-align: center;
  line-height: 0.5rem;
  border: 0.05rem solid #444;
}
#icon2 {
  position: absolute;
  top: -0.25rem;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.3rem;
  background-color: #3190e8;
  margin: 0.05rem;
  border-radius: 50%;
  text-align: center;
  line-height: 0.5rem;
  border: 0.05rem solid #444;
}

/* 选规格以后出来 */
.theMask {
  width: 2.39rem;
  /* height: 1.2rem; */
  position: absolute;
  background-color: white;
  top: 2.5rem;
  left: 0.8rem;
  border: 0.01rem solid #ddd;
  display: none;
  overflow: hidden;
  border: orange solid 0.05rem;
  z-index: 1000;
}

#titleName {
  width: 2.39rem;
  height: 0.21rem;
  padding: 0.11719rem;
  /* border: green solid 0.005rem; */
  font-size: 0.13rem;
  text-align: center;
}

.span1,
.span2 {
  display: inline-block;
  width: 0.4rem;
  height: 0.3rem;
  font-size: 0.15rem;
  text-align: center;
  line-height: 0.3rem;
  border: 0.01rem solid #ededed;
  border: 0.01rem solid #333;
  /* border: green solid 0.005rem; */
}
#maskMiddle {
  margin-top: 0.1rem;
  margin-bottom: 0.35rem;
  padding-left: 0.1rem;
}
#maskMiddle h5 {
  /* border: green solid 0.005rem; */
  margin-bottom: 0.1rem;
}
#maskFooter {
  width: 2.39rem;
  height: 0.31rem;
  margin-top: 0.2rem;
  padding: 0.11719rem;
  background-color: #f5f5f5;
  line-height: 0.3rem;
  /* border: green solid 0.005rem; */
}
#maskFooter #joinIN {
  outline: none;
  background-color: #3190e8;
  /* border: green solid 0.005rem; */
  border: 0px;
  /* float: right; */
  color: white;
  border-radius: 0.03rem;
  height: 0.3rem;
  line-height: 0.3rem;
}
#maskPrice {
  /* border: green solid 0.005rem; */
  color: red;
  margin-right: 1rem;
}

#theCount {
  position: absolute;
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  line-height: 0.2rem;
  left: 0.4rem;
  top: -0.1rem;
  color: white;
  background-color: red;
  font-size: 0.12rem;
}

#closeBtn {
  position: absolute;
  top: 0.05rem;
  right: 0.05rem;
}

#jianhao {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #3190e8;
  color: white;
  border: 0px;
  outline: none;
  line-height: 0.1rem;
  font-size: 0.15rem;
}
#qingkonggouwuche{
  width: 0.4rem;
  height: 0.2rem;
  border-radius: 0.01rem;
  line-height: 0.2rem;
  background-color: #3190e8;
  color: white;
  border: 0px;
  outline: none;

}
#chengshu{
  margin: 0.2rem;
  color: orange;
}

</style>