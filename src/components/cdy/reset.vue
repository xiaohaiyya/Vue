<!--CDY-->
<template>
  <div>
    <!-- 1.头部 -->
    <div id="header">
      <span id="eleme" @click="back()">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span id="login">重置密码</span>
    </div>
    <!-- 2.五个输入框 -->
    <div id="first">
      <input type="text" placeholder="账号" v-model="username" />
      <input type="text" placeholder="旧密码" v-model="oldpassword" />
      <input type="text" placeholder="请输入新密码" v-model="newpassword" />
      <input type="text" placeholder="请确认密码" v-model="confirmpassword" />
    </div>
    <div id="first_code">
      <input type="text" placeholder="验证码" v-model="codeNum" />
      <img :src="code" alt />
      <button @click="getCode()" id="change">换一张</button>
    </div>
    <!-- 3.底部 -->
    <div id="footer">
      <button @click="getPassword()" id="sh3">确认修改</button>
      <!-- <button @click="open()">测试</button> -->
    </div>
    <!-- 4.弹出框 -->
    <div id="popup">
      <i class="el-icon-warning-outline"></i> 
      <p id="alert">密码修改成功</p>
      <button id="sure" @click="close()">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "reset",
  data() {
    return {
      code: "",
      username: "",
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
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
    getPassword() {
      const api = "https://elm.cangdu.org/v2/changepassword";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          // 必须与接口文档里面写的对应，这样才可以传到后台，找到对应的，后台判断，post请求，然后打开通道，找到对应的，响应给前端。
          username: this.username,
          oldpassWord: this.oldpassword,
          newpassword: this.newpassword,
          confirmpassword: this.confirmpassword,
          captcha_code: this.codeNum
        }
      }).then(res => {
        var popUp = document.getElementById("popup");
        var alert = document.getElementById("alert");
        if (res.data.message ) {
        //   alert(res.data.message);
          alert.innerText = res.data.message;
          popUp.style.display = "block";
        //   return;
        }else{
            alert.innerText = res.data.success;
            popUp.style.display = "block";
        }
        console.log(res);
      });
    },
    close(){
        var sure = document.getElementById("sure");
        var popUp = document.getElementById("popup");
        popUp.style.display = "none";
    }
  }
};
</script>

<style scoped>
/* 1.头部 */
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
/* 2.输入框 */
#first {
  margin-top: 0.15rem;
}
#first input {
  height: 0.21rem;
  width: 3.375rem;
  padding: 0.14063rem 0.1875rem 0.14063rem 0.1875rem;
  background-color: rgb(255, 255, 255);
  font-size: 0.16rem;
  border-bottom: rgb(240, 237, 237) 0.01rem solid;
}
#first_code {
  background-color: rgb(255, 255, 255);
}
#first_code input {
  height: 0.22438rem;
  width: 1.75rem;
  padding: 0.14063rem 0.1875rem 0.14063rem 0.1875rem;
}
#first_code #change {
  background-color: white;
  color: #3190e8;
  border: 0px;
  outline: none;
}
/* 3.确认修改 */
#footer {
  width: 3.75rem;
  text-align: center;
}
#sh3 {
  width: 3.5156rem;
  height: 0.45rem;
  border: 0px;
  border-radius: 0.05rem;
  color: white;
  margin-top: 0.2rem;
  background-color: #4cd964;
  font-size: 0.16rem;
}
/* 4.弹出框 */
#popup {
  width: 2.8125rem;
  height: 1.8488rem;
  /* border: #3190e8 solid 1px; */
  position: fixed;
  top: 2rem;
  left: 0.46875rem;
  background: #ffffff;
  text-align: center;
  padding-top: 0.1426rem;
  display: none;
}
#popup .el-icon-warning-outline{
  font-size: 0.7031rem;
  color: #f8cb86;
}
#popup p{
  height: 0.21rem;
  /* border: #3190e8 solid 1px; */
  margin-top: 0.1875rem;
  margin-left: 0.12rem;
  font-size: 0.17rem;
}
#popup #sure {
  width: 2.8125rem;
  height: 0.45rem;
  border: 0px;
  border-radius: 0.05rem;
  color: white;
  background-color: #4cd964;
  font-size: 0.16rem;
  margin-top: 0.26rem;
}
</style>