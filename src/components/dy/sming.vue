<template>
  <div id="zong">
      <div id="tou">
          <span @click="zhww()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h3 id="q2">红包说明</h3>
      </div>
      <p>代金券说明<br>
Q1: 什么是商家代金券？
商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。<br>
Q2: 怎么获得商家代金券？<br>
进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。
「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。<br>
Q3: 商家代金券使用条件<br>
商家代金券仅限在指定商家使用
商家代金券仅限在线支付使用
每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
  </div>
</template>

<script>
export default {
name:"sming",
methods: {
    zhww(){
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

</style>