<template>
  <div id="zong">
      <div id="tou">
          <span @click="zhjj()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h3 id="q2">兑换红包</h3>
      </div>
      <input v-model="exchange_code" type="text" placeholder="请输入兑换码" id="r1"><br>
      <input type="text" placeholder="验证码" id="r2">
      <div id="zi">
          <p id="r4">看不清</p>
          <img :src="code" alt="" id="r5"><p @click="getCode()" id="r3">换一张</p>
      </div>
      <div id="an">兑换</div>
  </div>
</template>

<script>
export default {
    name:"duihongbao",
    data() {
        return {
            code:"",
            password:"",
            username:"",
            codeNum:""
        }
    },
    created() {
        this.getCode();
    },
    methods: {
        zhjj(){
            this.$router.back();
        },
        getCode(){
            const api = "https://elm.cangdu.org/v1/captchas"
            this.$http({
                url:api,
                method:"post",
                withCredentials:true,
                data:{}
            }).then(res => {this.code = res.data.code;})
        },
        getdui(){
            const api = "https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange"
            this.$http({
                url:api,
                method:"post",
                withCredentials:true,
                data:{}
            }).then(res => {this.exchange_code = res.data.exchange_code;})
        }
    },
    
}
</script>

<style scoped>
     #zong{
  position: relative;
  }
  #tou{
        width: 3.75rem;
        height: 0.5rem;
        background-color: cornflowerblue;
        position: relative;
        color: white;
  }
    #q1{
        position: absolute;
        left: 0.05rem;
        top: 0.1rem;
        font-size: 0.3rem;
        color: white;
    }
    #q2{
        position: absolute;
        left: 1.4rem;
        top: 0.15rem;
    }
    #r1{
        width: 3.5rem;
        height: 0.5rem;
        border-radius: 0.05rem;
        margin-left: 0.15rem;
        margin-top: 0.15rem;
        padding-left: 0.15rem;
    }
    #r2{
        width: 1.8rem;
        /* height: 0.5rem; */
        border-radius: 0.05rem;
        margin-left: 0.15rem;
        margin-top: 0.15rem;
        padding: 0.15rem;
        float: left;
    }
    #zi{
        width: 1.3rem;
        height: 0.5rem;
        margin-left: 0.1rem;
        margin-top: 0.15rem;
        background-color: white;
        border-radius: 0.05rem;
        float: left;
        position: relative;
    }
    #r5{
        width: 0.6rem;
        height: 0.4rem;
        position: absolute;
        left: 0.1rem;
        top: 0.1rem;
    }
    #r3{
        color: #3190e8;
        font-size: 0.14rem;
        position: absolute;
        left: 0.75rem;
        top: 0.3rem;
    }
    #r4{
        font-size: 0.14rem;
         position: absolute;
        left: 0.75rem;
        top: 0.1rem;
    }
    #an{
        width: 3.5rem;
        height: 0.4rem;
        background-color: gainsboro;
        color: white;
        position: absolute;
        left: 0.15rem;
        top: 2rem;
        border-radius: 0.05rem;
        text-align: center;
        line-height: 0.4rem;
    }
</style>