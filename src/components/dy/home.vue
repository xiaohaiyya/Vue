<template>
  <div id="home">
    <div id="one">
      <i class="el-icon-arrow-left" id="i1" @click="back()"></i>
      <h3 id="i2">我的</h3>
      <div id="h1" @click="router()">
        <div id="h2">
          <el-avatar :size="59" :src="circleUrl"></el-avatar>
        </div>
        <span id="h3" v-text="username" v-if="this.$store.state.loginShow"></span>
        <span v-if="!this.$store.state.loginShow" id="h3" @click.stop="loginIn()">注册|登录</span>
        <span id="h4" class="el-icon-mobile-phone"></span>
        <span id="h5" v-text="mobile"></span>
        <span id="h6" class="el-icon-arrow-right top_i" ></span>
      </div>
    </div>
    <div>
      <div id="div1" @click="we1()">
        <p id="p1">0.00</p>
        <p id="p4">元</p>
        <p id="p5">我的余额</p>
      </div>
      <div id="div2" @click="we2()">
        <p id="p2">3</p>
        <p id="p6">个</p>
        <p id="p5">我的优惠</p>
      </div>
      <div id="div3" @click="we3()">
        <p id="p3">0</p>
        <p id="p6">分</p>
        <p id="p5">我的积分</p>
      </div>
    </div>
    <div id="two">
      <div id="div4" @click="order()">
        <i id="e1" class="iconfont">&#xe600;</i>
        <p id="p7">我的订单</p>
        <p id="p10">></p>
      </div>
      <div id="div5" @click="ret1()">
        <i id="e1" class="iconfont" style="color:orange">&#xe60e;</i>
        <p id="p8">积分商城</p>
        <p id="p11">></p>
      </div>
      <router-link to="/huiyuan">
        <div id="div6">
          <i id="e1" class="iconfont" style="color:gold">&#xe607;</i>
          <p id="p9">饿了么会员卡</p>
          <p id="p12">></p>
        </div>
      </router-link>
    </div>
    <div id="three">
      <div id="div7" @click="fuwu()">
        <i id="e1" class="iconfont" style="color:blue">&#xe61d;</i>
        <p id="p14">服务中心</p>
        <p id="p13">></p>
      </div>
      <div id="div8" @click="ret4()">
        <i id="e1" class="iconfont" style="color:#3190e8">&#xe68c;</i>
        <p id="p14">下载饿了么APP</p>
        <p id="p13">></p>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username: "",
      mobile: "",
      gift_amount: "0",
      data: {}
    };
  },
  created() {
    this.getuser();
  },
  methods: {
      loginIn(){
          this.$router.push({
              name:"login"
          })
      },
    order() {
      this.$router.push({
        name: "order"
      });
    },
    fuwu() {
      const api = "https://elm.cangdu.org/v3/profile/explain";
      this.$http({
        url: api,
        methed: "get",
        withCredentials: true, //默认为false
        data: {}
      }).then(res => {
        // console.log(res.data);
        this.service = res.data;
        // console.log(this.service);
        this.$router.push({
          name: "fuwu",
          query: this.service
        });
      });
    },
    ret1() {
      this.$router.push({
        path: "/jifenshangcheng",
        name: "jifenshangcheng"
      });
    },
    ret4() {
      this.$router.push({
        path: "/xiazai",
        name: "xiazai"
      });
    },
    we1() {
      this.$router.push({
        path: "/yue",
        name: "yue"
      });
    },
    we2() {
      this.$router.push({
        path: "/youhui",
        name: "youhui"
      });
    },
    we3() {
      this.$router.push({
        path: "/jifen",
        name: "jifen"
      });
    },
    router() {
        this.$store.state.dyAddressDate = this.data;
      if (!this.$store.state.loginShow) {
        this.$router.push({
          name: "login"
        });
      } else {
          this.$store.state.dyAddressDate = this.data
        this.$router.push({
          path: "/zhxx",
          name: "zhxx",
          query: {
            data: this.data
          },
        });
         console.log(this.data)
      }
    },
    getuser() {
      const api = "https://elm.cangdu.org/v1/user";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res.data);
        this.data = res.data;
        console.log(this.data);
          this.username = res.data.username;
          this.gift_amount = res.data.gift_amount;
          // console.log(this.gift_amount);
        if (!res.data.mobile) {
          this.mobile = "暂无绑定手机号";
        } else {
          this.mobile = res.data.mobile;
        }
      });
    },
    back(){
      history.go(-1);
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 1477980 */
  src: url("http://at.alicdn.com/t/font_1477980_2buov3gi6du.eot");
  src: url("http://at.alicdn.com/t/font_1477980_2buov3gi6du.eot?#iefix")
      format("embedded-opentype"),
    url("http://at.alicdn.com/t/font_1477980_2buov3gi6du.woff2") format("woff2"),
    url("http://at.alicdn.com/t/font_1477980_2buov3gi6du.woff") format("woff"),
    url("http://at.alicdn.com/t/font_1477980_2buov3gi6du.ttf")
      format("truetype"),
    url("http://at.alicdn.com/t/font_1477980_2buov3gi6du.svg#iconfont")
      format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
#home {
  position: relative;
}
#e1 {
  line-height: 0.5rem;
  padding-left: 0.15rem;
}
#one {
  width: 3.75rem;
  height: 1.3rem;
  background-color: cornflowerblue;
  position: relative;
  color: white;
}
#two {
  position: absolute;
  top: 2.4rem;
  background-color: white;
  width: 3.75rem;
  height: 1.5rem;
}
#three {
  position: absolute;
  top: 4.02rem;
  background-color: white;
  width: 3.75rem;
}
#div6,
#div4,
#div5,
#div8,
#div7 {
  border-bottom: 0.01rem solid gainsboro;
  width: 3.75rem;
  height: 0.5rem;
  position: relative;
  color: black;
}
#tu1 {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  left: 0.1rem;
  top: 0.6rem;
}
#i1 {
  position: absolute;
  left: 0.05rem;
  top: 0.1rem;
  font-size: 0.3rem;
  color: white;
}
#i2 {
  position: absolute;
  left: 1.5rem;
  top: 0.1rem;
}
#i3 {
  position: absolute;
  left: 0.8rem;
  top: 0.63rem;
  color: white;
}
#i4 {
  position: absolute;
  left: 0.8rem;
  top: 0.86rem;
  color: white;
}
#i5 {
  position: absolute;
  left: 3.5rem;
  top: 0.7rem;
  color: white;
}
#div1 {
  float: left;
  width: 1.24rem;
  height: 1rem;
  background-color: white;
  text-align: center;
  position: relative;
}
#div2,
#div3 {
  float: left;
  width: 1.24rem;
  height: 1rem;
  background-color: white;
  border-left: 0.01rem solid gray;
  text-align: center;
  position: relative;
}
#p1 {
  color: darkorange;
  font-size: 0.3rem;
  float: left;
  position: absolute;
  left: 0.2rem;
  top: 0.24rem;
}
#p2 {
  color: chocolate;
  font-size: 0.3rem;
  float: left;
  position: absolute;
  left: 0.5rem;
  top: 0.24rem;
}
#p3 {
  color: chartreuse;
  font-size: 0.3rem;
  float: left;
  position: absolute;
  left: 0.5rem;
  top: 0.24rem;
}
#p4 {
  float: left;
  position: absolute;
  left: 0.82rem;
  top: 0.35rem;
}
#p5 {
  position: absolute;
  left: 0.28rem;
  top: 0.65rem;
  font-size: 0.14rem;
}
#p6 {
  float: left;
  position: absolute;
  left: 0.7rem;
  top: 0.35rem;
}
#p7,
#p8,
#p9,
#p14 {
  position: absolute;
  left: 0.4rem;
  top: 0.15rem;
  font-size: 0.2rem;
}
#p10,
#p11,
#p12,
#p13 {
  position: absolute;
  left: 3.4rem;
  top: 0.14rem;
  font-size: 0.2rem;
  opacity: 0.5;
}
#h1 {
  position: relative;
}
#h2 {
  position: absolute;
  left: 0.15rem;
  top: 0.45rem;
}
#h3 {
  position: absolute;
  left: 0.9rem;
  top: 0.55rem;
}
#h4 {
  position: absolute;
  left: 0.9rem;
  top: 0.8rem;
}
#h5 {
  position: absolute;
  left: 1.1rem;
  top: 0.8rem;
}
#h6 {
  position: absolute;
  left: 3.3rem;
  top: 0.7rem;
}
</style>