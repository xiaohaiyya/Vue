<!--JH-->
<template>
  <div>
    <div id="header">
      <span id="eleme" @click="back()">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span id="login">密码登录</span>
    </div>
    <ul id="uls">
      <li>
        <input v-model="username" placeholder="账号" type="text" />
      </li>
      <li>
        <input v-model="password" placeholder="密码" type="text" />
      </li>
      <li>
        <input v-model="codeNum" placeholder="验证码" type="text" id="yanzhengma" />
        <img :src="code" alt />
        <button @click="getCode()" id="change">换一张</button>
      </li>
    </ul>

    <p id="e1">温馨提示：未注册过的账号，登陆时将自动注册</p>
    <p id="e1">注册过的用户可凭账号密码登录</p>

    <div id="footer">
      <button @click="loginBtn()" id="sh3">登录</button>
    </div>
    <div id="float">
      <router-link to="reset">
        <p id="sh4">重置密码</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      code: "",
      password: "",
      username: "",
      codeNum: ""
    };
  },
  created() {
    this.getCode();
  },
  methods: {
    back() {
      this.$router.back();
    },
    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {}
      }).then(res => {
        this.code = res.data.code;
      });
    },
    loginBtn() {
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNum
        }
      }).then(res => {
        console.log(res);
        if (res.data.message) {
          alert(res.data.message);
          return;
        }
        this.$store.state.loginShow = false;
        this.$router.push({
          name: "home",
          query: res
        });
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

#uls {
  margin-top: 0.1rem;
}
#e1{
padding-left: 0.15rem;
}
#uls li {
  height: 0.4rem;
  width: 3.75rem;
  background-color: #fff;
  border-bottom: 0.01rem solid gainsboro;
}
#uls li input {
  height: 0.4rem;
  line-height: 0.4rem;
  padding-left: 0.1rem;
  font-size: 0.15rem;
}
p {
  color: red;
  font-size: 0.13rem;
  letter-spacing: 0.01rem;
  margin-top: 0.1rem;
}
#footer {
  width: 3.75rem;
  text-align: center;
}
#change {
  background-color: white;
  color: #3190e8;
  border: 0px;
  outline: none;
}
#sh3 {
  width: 3rem;
  height: 0.45rem;
  border: 0px;
  border-radius: 0.05rem;
  color: white;
  margin-top: 0.07rem;
  background-color: #4cd964;
}
#float {
  overflow: hidden;
  width: 3.75rem;
}
#sh4 {
  float: right;
  color: #3190e8;
}
#uls li #yanzhengma {
  height: 0.3rem;
}
</style>