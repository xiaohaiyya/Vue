<template>
  <div id="zong">
      <div id="shang">
           <span @click="zhrr()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h3 id="q2">我的积分</h3>
      </div>
      <div id="zhong">
          <p id="q3">当前积分</p><p id="q5">0</p><p id="q6">分</p>
           <router-link to="/jifenshuoming"><p id="q4"><i class="el-icon-question"></i>积分说明</p></router-link>
          <div id="q5"></div>
      </div>
      <div id="ti">积分兑换商品</div>
      <div id="xia">
          <p id="q7">最近30天积分记录</p>
          <img src="../dy/child/img/z2.png" alt="" id="q9">
          <p id="q8">最近30天无积分记录</p>
          <p id="q10">快去下单赚取大量积分吧</p>
      </div>
  </div>
</template>

<script>
export default {
    name:"jifen",
    methods: {
        zhrr(){
            this.$router.back();
        }
    },
}
</script>

<style scoped>
    #zong{
  position: relative;
  }
  #shang{
        width: 3.75rem;
        height: 2.3rem;
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
     #zhong{
        background-color: white;
        width: 3.5rem;
        height: 1.6rem;
        position: absolute;
        left: 0.13rem;
        top:0.6rem;
        border-radius: 2%;
    }
    #q3{
        position: absolute;
        left: 0.1rem;
        top: 0.08rem;
    }
    #q4{
        position: absolute;
        left: 2.6rem;
        top: 0.08rem;
        color: cornflowerblue;
    }
    #q5{
        position: absolute;
        left: 0.1rem;
        top: 0.35rem;
        font-size: 0.4rem;
    }
    #q6{
        position: absolute;
        left: 1rem;
        top: 0.55rem;
    }
    #ti{
        width: 3.3rem;
        height: 0.5rem;
        background-color: red;
        color: white;
        position: absolute;
        left: 0.22rem;
        top: 1.6rem;
        border-radius: 3%;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.25rem;
    }
    #q7{
       position: absolute;
       left: 0.22rem;
       top: 2.5rem;
       color: gray; 
    }
    #q8{
        position: absolute;
        left: 1.3rem;
        top: 4.6rem
    }
    #q9{
        width: 2.5rem;
        position: absolute;
        left: 0.75rem;
        top: 3rem;
    }
    #q10{
        position: absolute;
        left: 1.5rem;
        top: 4.9rem;
        font-size: 0.1rem;
        color: grey;
    }
</style>