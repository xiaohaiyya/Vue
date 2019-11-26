<template>
  <div id="zong">
      <div id="tou">
          <span @click="zhtt()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h3 id="q2">会员中心</h3>
      </div>
      <div id="zi">为账户77777777购买会员</div>
      <div id="tequan">
          <router-link to="/huiyuanshuoming"><div id="one"><p id="p1">会员特权</p><p id="p2">会员说明</p><p id="p3">></p></div></router-link>
          <div id="two"><i class="el-icon-loading" id="p4"></i>
          <p id="p5">减免配送费</p>
          <p id="p6">每月减免30单，每日可减免3单，每单最高减4元</p><p id="p7">蜂鸟专送专享</p>
          </div>
         <div id="three"><i class="el-icon-loading" id="p4"></i>
          <p id="p5">减免配送费</p>
          <p id="p6">每月减免30单，每日可减免3单，每单最高减4元</p><p id="p7">蜂鸟专送专享</p>
          </div>
      </div>
      <div id="kaitong">
          <div id="kai1">开通会员</div>
          <div id="kai2"><p id="p8">1个月</p><p id="p9">￥20</p>
          <router-link to="/goumai"><el-button size="mini" id="p10">购买</el-button></router-link>
          </div>
      </div>
      <div @click="q2()" id="one" style="margin-top: 0.18rem;"><p id="p1">兑换会员</p><p id="p11">使用卡号卡密</p><p id="p3">></p></div>
        <div @click="q3()" id="one" style="margin-top: 0.18rem;"><p id="p1">购买记录</p><p id="p12">开发票</p><p id="p3">></p></div>
  </div>
</template>

<script>
export default {
    name:"hiyuan",
    methods: {
        zhtt(){
            this.$router.back();
        },
        q2(){
            this.$router.push({
                path:"/duihuan",
                name:"duihuan"
            })
        },
        q3(){
            this.$router.push({
                path:"/jilu",
                name:"jilu"
            })
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
    #zi{
        width: 3.6rem;
        height: 0.35rem;
        padding-left: 0.15rem;
        line-height: 0.35rem;
        font-size: 0.135rem
    }
    #one{
        background-color: white;
        width: 3.75rem;
        height: 0.5rem;
        position: relative;
        line-height: 0.5rem;
        border-bottom: 0.01rem solid gainsboro;
        color: black
    }
    #p1{
        position: absolute;
        left: 0.15rem;
    }
    #p2{
        position: absolute;
        left: 2.9rem;
        font-size: 0.135rem;
        color: grey
    }
    #p3{
        position: absolute;
        left: 3.5rem;
        color: grey;
        font-size: 0.2rem
    }
    #p11{
         position: absolute;
        left: 2.6rem;
        color: grey;
        font-size: 0.14rem
    }
    #p12{
         position: absolute;
        left: 3rem;
        color: grey;
        font-size: 0.14rem
    }
    #two,#three{
        position: relative;
        width: 3.75rem;
        height: 1rem;
        background-color: white;
        border-bottom: 0.01rem solid gainsboro;
    }
    #p4{
        position: absolute;
        left: 0.15rem;
        top: 0.3rem;
        color: aqua;
        font-size: 0.3rem
    }
    #p5{
        position: absolute;
        left: 0.6rem;
        top: 0.2rem;
    }
    #p6{
        position: absolute;
        left: 0.6rem;
        top: 0.4rem;
        font-size: 0.13rem;
        color: gray
    }
    #p7{
        position: absolute;
        left: 0.6rem;
        top: 0.6rem;
        font-size: 0.13rem;
        color: gray;
    }
    #kaitong{
        margin-top: 0.15rem;
    }
    #kai1{
        background-color: white;
        width: 3.6rem;
        height: 0.5rem;
        padding-left: 0.15rem;
        line-height: 0.5rem;
        border-bottom: 0.01rem solid gainsboro;
    }
    #kai2{
        background-color: white;
        width: 3.6rem;
        height: 0.65rem;
        padding-left: 0.15rem;
        line-height: 0.65rem;
        border-bottom: 0.01rem solid gainsboro;
        position: relative;
    }
    #p9{
        position: absolute;
        left:0.6rem;
        top: 0;
        color: darkorange
    }
    #p10{
        width: 0.5rem;
        height: 0.35rem;
        /* line-height: 0.65rem; */
        color: darkorange;
        /* border-radius: 10%; */
        position: absolute;
        left: 3rem;
        top: 0.15rem;
    }
</style>