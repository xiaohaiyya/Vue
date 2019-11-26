<template>
  <div id="zong">
      <div id="tou">
            <span @click="diaa()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h2 id="q2">兑换会员</h2>
        </div>
        <div id="one">成功兑换后将关联到当前帐号：77777777</div>
        <input type="text" placeholder="请输入10位卡号"><br><input type="text" placeholder="请输入6位卡密">
        <div id="two">兑换</div>
        <div id="xia">
            <p id="q3">——温馨提示——</p>
            <p id="q4">新兑换的会员服务，权益以[会员说明]为准。</p>
            <p id="q5">月卡:30次减免配送费</p>
            <p id="q6">季卡:90次减免配送费</p>
            <p id="q7">年卡:360次减免配送费</p>
            <p id="q8">*仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天机算）</p>
        </div>
  </div>
</template>

<script>
export default {
    name:"duihuan",
    methods: {
        diaa(){
            this.$router.back();
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
        top: 0.1rem;
    }
    #one{
        width: 3.6rem;
        height: 0.3rem;
        padding-left: 0.15rem;
        line-height: 0.3rem;
        font-size: 0.13rem;
        color: gray
    }
    input{
        width: 3.6rem;
        background-color: white;
        height: 0.4rem;
        border-bottom:0.001rem solid gainsboro;
        padding-left: 0.15rem;
    }
    #two{
        width: 3.45rem;
        height: 0.4rem;
        color: white;
        text-align: center;
        line-height: 0.4rem;
        background-color: gainsboro;
        margin-left: 0.15rem;margin-top: 0.15rem;
        border-radius: 3%;
    }
    #xia{
        position: relative;
    }
    #q3{
        color: gray;
        margin-left: 1.25rem;
        margin-top: 0.2rem;
    }
    #q4{
        color: gray;
        font-size: 0.12rem;
        margin-left: 0.5rem;
        margin-top: 0.2rem;
    }
    #q5,#q6,#q7,#q8{
        color: gray;
        font-size: 0.12rem;
        margin-left: 0.5rem;
        margin-top: 0.1rem;
    }
</style>