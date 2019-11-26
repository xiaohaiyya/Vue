<template>
  <div id="first">
    <div id="wrap">
      <span @click="home()">
        <i class="el-icon-arrow-left" id="i1"></i>
      </span>
      <h3 id="i2">账户信息</h3>
    </div>
    <div id="photo">
      <p id="i3">头像</p>
      <div id="i4"></div>
      <p id="i5">></p>
    </div>
    <router-link to="/popel">
      <div id="name">
        <p id="i6">用户名</p>
        <p id="i8">{{this.$route.query.data.username}}</p>
        <p id="i7">></p>
      </div>
    </router-link>
    <div id="site" @click="w2()">
      <p id="i6">收货地址</p>
      <p id="i7">></p>
    </div>
    <div id="hao">
      <p id="i9">账号绑定</p>
    </div>
    <div id="iphone" @click="dian()">
      <i class="el-icon-mobile" id="i0"></i>
      <p id="i10">手机</p>
      <p id="i7">></p>
    </div>
    <div id="an">
      <p id="i9">安全设置</p>
    </div>
    <div id="pass" @click="wer()">
      <p id="i6">登录密码</p>
      <p id="i7">></p>
    </div>
    <button id="i11" @click="close()">退出登录</button>
    <div id="app" v-show="show">
      <div id="shang">
        <i class="el-icon-warning-outline" id="i12"></i>
        <p>请在手机app中设置</p>
      </div>
      <div id="xia" @click="dian2()">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zhxx",
  data() {
    return {
      show: false,
      data: {}
    };
  },
  created() {
    this.data = this.$route.query.data;
    console.log(this.data);
  },
  methods: {
    home() {
      this.$router.back();
    },
    dian() {
      this.show = true;
    },

    close() {
      const api = "https://elm.cangdu.org/v2/signout";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        console.log(res.data);
        this.$store.state.loginShow = false;
      });
    },
    dian2() {
      this.show = false;
    },
    w2() {
      this.$router.push({
        path: "/site",
        name: "site",
        query: {
          data: this.data
        }
      });
      console.log(this.data);
    },
    wer() {
      this.$router.push({
        path: "reset",
        name: "reset"
      });
    }
  }
};
</script>

<style scoped>
#first {
  position: relative;
}
#wrap {
  width: 3.75rem;
  height: 0.5rem;
  background-color: cornflowerblue;
  position: relative;
  color: white;
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
  left: 1.4rem;
  top: 0.1rem;
}
#photo {
  background-color: white;
  width: 3.75rem;
  height: 0.75rem;
  position: absolute;
  left: 0;
  top: 0.6rem;
}
#i3 {
  font-size: 0.15rem;
  position: absolute;
  left: 0.15rem;
  line-height: 0.75rem;
}
#i4 {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  left: 2.9rem;
  top: 0.12rem;
}
#i5 {
  position: absolute;
  left: 3.55rem;
  line-height: 0.75rem;
  font-size: 0.2rem;
  opacity: 0.5;
}
#i12 {
  color: darkorange;
  font-size: 0.5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
}
#name {
  background-color: white;
  position: absolute;
  left: 0;
  top: 1.378rem;
  width: 3.75rem;
  height: 0.6rem;
  color: black;
}
#i6 {
  font-size: 0.15rem;
  position: absolute;
  left: 0.15rem;
  line-height: 0.6rem;
}
#i7 {
  position: absolute;
  left: 3.55rem;
  line-height: 0.6rem;
  font-size: 0.2rem;
  opacity: 0.5;
}
#i8 {
  position: absolute;
  left: 2.7rem;
  line-height: 0.6rem;
  font-size: 0.15rem;
}
#site {
  background-color: white;
  position: absolute;
  left: 0;
  top: 2rem;
  width: 3.75rem;
  height: 0.6rem;
}
#hao {
  position: absolute;
  left: 0;
  top: 2.6rem;
  width: 3.75rem;
  height: 0.4rem;
}
#i9 {
  line-height: 0.4rem;
  font-size: 0.13rem;
  position: absolute;
  left: 0.15rem;
}
#iphone {
  background-color: white;
  position: absolute;
  left: 0;
  top: 3rem;
  width: 3.75rem;
  height: 0.6rem;
}
#i0 {
  color: deepskyblue;
  position: absolute;
  left: 0.15rem;
  line-height: 0.6rem;
}
#i10 {
  position: absolute;
  left: 0.35rem;
  line-height: 0.6rem;
}
#an {
  position: absolute;
  left: 0;
  top: 3.6rem;
  width: 3.75rem;
  height: 0.4rem;
}
#pass {
  background-color: white;
  position: absolute;
  left: 0;
  top: 4rem;
  width: 3.75rem;
  height: 0.6rem;
}
#i11 {
  position: absolute;
  left: 0.1rem;
  top: 4.9rem;
  color: white;
  background-color: red;
  width: 3.55rem;
  height: 0.35rem;
}
#app {
  position: absolute;
  left: 0.5rem;
  top: 2rem;
  background-color: whitesmoke;
  border-radius: 0.1rem;
  width: 2.5rem;
  height: 1.5rem;
  /* opacity: 0; */
}
#shang {
  text-align: center;
}
#xia {
  width: 2.5rem;
  height: 0.3rem;
  position: absolute;
  left: 0;
  top: 1.2rem;
  text-align: center;
  color: white;
  background-color: greenyellow;
  line-height: 0.3rem;
}
</style>