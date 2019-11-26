<template>
  <div id="zong">
      <div id="tou">
          <span @click="zhee()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h3 id="q2">积分问题</h3>
      </div>
      <div id="wei">
          <h3 id="a1">Q1:怎么获得积分？</h3>
          <h5 id="a2">在线支付的订单将获得订单积分奖励：积分将在用户完评价后获得。可获得积分=订单金额X10（即1元=10点积分）。订单金额指实际付款金额，不包含活动优惠金额。每位用户每天最多可以获得2000积分，体验商家的订单和评价不会获得积分</h5>
          <h3 id="a3">Q2:积分用来做什么</h3>
          <h5 id="a4">可以在积分商城兑换各种礼品</h5>
          <h3 id="a5">Q3：礼品换了很多天还没有收到，怎么办？</h3>
          <h5 id="a6">礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</h5>
          <h3 id="a7">Q4:礼品兑换中的手机充值卡兑换，怎样进行充值，充值之前会和我电话确认吗？</h3>
          <h5 id="a8">不会，手机充值卡兑换，时直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话时，请确认电话是否正确</h5>
      </div>
  </div>
</template>

<script>
export default {
    name:"shuoming",
    methods: {
        zhee(){
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
        line-height: 0.2rem;
    }
    #a3{
        position: absolute;
        left: 0.15rem;
        top: 1.45rem;
    }
    #a4{
        position: absolute;
        left: 0.15rem;
        top: 1.7rem;
        line-height: 0.2rem;
    }
    #a5{
        position: absolute;
        left: 0.15rem;
        top: 1.95rem;
    }
    #a6{
        position: absolute;
        left: 0.15rem;
        top: 2.4rem;
        line-height: 0.2rem;
    }
    #a7{
        position: absolute;
        left: 0.15rem;
        top: 2.9rem;
    }
    #a8{
        position: absolute;
        left: 0.15rem;
        top: 3.4rem;
        line-height: 0.2rem;
    }
</style>