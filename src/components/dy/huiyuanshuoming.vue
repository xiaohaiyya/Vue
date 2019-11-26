<template>
  <div id="zong">
      <div id="tou">
            <span @click="diao()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h2 id="q2">新增地址</h2>
        </div>
        <div id="wei">
            <h5 id="a11">尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</h5>
          <h3 id="a1">Q1:特权介绍</h3>
          <h5 id="a2">身份标识：饿了么会员服务有效期内，享有专属皇冠标识。减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。
更多特权，敬请期待！</h5>
          <h3 id="a3">Q2:资费介绍</h3>
          <h5 id="a4">饿了么会员卡：20元</h5>
          <h3 id="a5">Q3: 使用说明</h3>
          <h5 id="a6">当用户满足以下任一条件，会员服务自动失效：自绑定之日起超过31天；在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</h5>
          <h3 id="a7">Q4:购卡说明</h3>
          <h5 id="a8">在线购买：饿了么App>我的>饿了么会员卡</h5>
          <h3 id="a9">Q5: 温馨提示</h3>
          <h5 id="a10">用户在当前会员服务失效前，无法购买新卡。请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</h5>
      </div>
  </div>
</template>

<script>
export default {
name:"huiyuanshuoming",
methods: {
    diao(){
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
    #wei{
        position: relative;
        width: 3.7rem;
    }
    #a1{
        position: absolute;
        left: 0.15rem;
        top: 1.1rem;
    }
    #a2{
        position: absolute;
        left: 0.15rem;
        top: 1.4rem;
        line-height: 0.2rem;
    }
    #a3{
        position: absolute;
        left: 0.15rem;
        top: 2.25rem;
    }
    #a4{
        position: absolute;
        left: 0.15rem;
        top: 2.5rem;
        line-height: 0.2rem;
    }
    #a5{
        position: absolute;
        left: 0.15rem;
        top: 2.77rem;
    }
    #a6{
        position: absolute;
        left: 0.15rem;
        top: 3rem;
        line-height: 0.2rem;
    }
    #a7{
        position: absolute;
        left: 0.15rem;
        top: 3.7rem;
    }
    #a8{
        position: absolute;
        left: 0.15rem;
        top: 3.9rem;
        line-height: 0.2rem;
    }
    #a11{
        line-height: 0.2rem;
        padding-left: 0.15rem;
    }
    #a9{
        position: absolute;
        left: 0.15rem;
        top: 4.2rem;
    }
    #a10{
        position: absolute;
        left: 0.15rem;
        top: 4.5rem;
    }
</style>