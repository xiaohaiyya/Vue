<template>
  <div id="zong">
      <div id="tou">
          <span @click="zhqq()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h3 id="q2">余额问题</h3>
      </div>
      <div id="wei">
          <h3 id="a1">Q1:使用余额的条件</h3>
          <h5 id="a2">为了保护账户安全，使用余额前必须先绑定手机号。</h5>
          <h3 id="a3">Q2:余额可以怎么使用</h3>
          <h5 id="a4">余额可以在饿了么平台上提现，当余额大于等于待支付金额可以在支持线上支付的商家进行消费。提现功能将于2016年12月25日00.00全面开放</h5>
          <h3 id="a5">Q3：我要如何提现？</h3>
          <h5 id="a6">为了保护账户和资金安全，您在提现前需要出入真实姓名和用该姓名开通的银行卡号,选择开户行，并验证乙绑定饿了么账号的手机号。每日只能提现一次，每次限额50元，若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改金额。</h5>
          <h3 id="a7">Q4:为什么会提现失败？</h3>
          <h5 id="a8">可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</h5>
      </div>
  </div>
</template>

<script>
export default {
    name:"shuoming",
    methods: {
        zhqq(){
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
        top: 0.15rem;
    }
    #wei{
        position: relative;
        width: 3.7rem;
    }
    #a1{
        position: absolute;
        left: 0.15rem;
        top: 0.15rem;
    }
    #a2{
        position: absolute;
        left: 0.15rem;
        top: 0.4rem;
    }
    #a3{
        position: absolute;
        left: 0.15rem;
        top: 0.7rem;
    }
    #a4{
        position: absolute;
        left: 0.15rem;
        top: 1rem;
        line-height: 0.2rem;
    }
    #a5{
        position: absolute;
        left: 0.15rem;
        top: 1.7rem;
    }
    #a6{
        position: absolute;
        left: 0.15rem;
        top: 2rem;
        line-height: 0.2rem;
    }
    #a7{
        position: absolute;
        left: 0.15rem;
        top: 3.1rem;
    }
    #a8{
        position: absolute;
        left: 0.15rem;
        top: 3.4rem;
        line-height: 0.2rem;
    }
</style>