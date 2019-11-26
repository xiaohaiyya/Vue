<template>
  <div id="zong">
      <div id="tou">
          <span @click="zhpp()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h3 id="q2">推荐有奖</h3>
      </div>
      <img src="../dy/child/img/tui.png" alt="" id="w1">
      <div id="san">
          <img src="../dy/child/img/wei.png" alt="" id="w2" @click="down()">
          <img src="../dy/child/img/z3.jpg" alt="" id="w3" @click="down()">
          <img src="../dy/child/img/er.png" alt="" id="w4" @click="down()">
          <p id="w5">邀请微信好友</p>
          <p id="w6">邀请QQ好友</p>
          <p id="w7">面对面邀请</p>
      </div>
      <div id="d1"><p id="s1">累计收益</p><p id="s2">0</p><p id="s3">元</p></div>
      <div id="d2"><p id="s1">成功邀请</p><p id="s2">0</p><p id="s3">人</p></div>
        <div id="shou">-收益明细-</div>
        <img src="../dy/child/img/bao.png" alt="" id="bao">
        <div id="zui">还不赶紧去邀请好友</div>
            <div id="app" v-show="show">
           <div id="shang"><i class="el-icon-warning-outline" id="i12"></i><p>确认邀请</p></div>
           <div id="xia" @click="sure()">确认</div>
         </div>
  </div>
</template>

<script>
export default {
    name:"tuijian",
    data() {
        return {
            show:false
        }
    },
    methods: {
        zhpp(){
            this.$router.back();
        },
        down(){
            this.show = true;
        },
        sure(){
            this.show = false;
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
    #w1{
        width: 3.75rem;
    }
     #i12{
      color: darkorange;
      font-size: 0.5rem;
      margin-top: 0.2rem;
      margin-bottom: 0.1rem;
    }
    #app{
      position: absolute;
      left: 0.5rem;
      top: 2rem;
      background-color: whitesmoke;
      border-radius: 0.1rem;
      width: 2.5rem;
      height: 1.5rem;
      /* opacity: 0; */
    }
    #shang{
      text-align: center;
    }
    #xia{
      width: 2.5rem;
      height: 0.3rem;
      position:absolute;
      left: 0;
      top: 1.2rem;
      text-align: center;
      color: white;
      background-color: greenyellow;
      line-height: 0.3rem;
    }
    #san{
        width: 3.75rem;
        height: 1.3rem;
        background-color: white;
        position: relative;
    }
    #w2{
        width: 0.8rem;
        position: absolute;
        left: 0.15rem;
        top: 0.2rem;
    }
     #w3{
        width: 0.8rem;
        position: absolute;
        left: 1.5rem;
        top: 0.2rem;
        border-radius: 50%;
    }
     #w4{
        width: 0.8rem;
        position: absolute;
        left: 2.8rem;
        top: 0.2rem;
    }
    #w5{
        font-size: 0.12rem;
        color: gray;
        position: absolute;
        left: 0.2rem;
        top: 1.1rem
    }
    #w6{
        font-size: 0.12rem;
        color: gray;
        position: absolute;
        left: 1.6rem;
        top: 1.1rem
    }
    #w7{
        font-size: 0.12rem;
        color: gray;
        position: absolute;
        left: 2.9rem;
        top: 1.1rem
    }
    #d1{
        width: 1.87rem;
        height: 0.5rem;
        border-right: 0.01rem solid gray;
        float: left;
        position: relative;
        margin-top: 0.15rem;
    }
    #d2{
        width: 1.87rem;
        height: 0.5rem;
        float: left;
        position: relative;
        margin-top: 0.15rem;
    }
    #s1{
        font-size: 0.115rem;
        color: gray;
        position: absolute;
        left: 0.7rem;
        top: 0.15rem
    }
    #s2{
        font-size: 0.12rem;
        color: red;
        position: absolute;
        left: 0.8rem;
        top: 0.3rem
    }
    #s3{
        font-size: 0.12rem;
        color:gray;
        position: absolute;
        left: 0.9rem;
        top: 0.3rem
    }
    #shou{
        width: 3.75rem;
        font-size: 0.1rem;
        position: absolute;
        top: 4.9rem;
        text-align: center;
    }
    #bao{
        width: 0.3rem;
        position: absolute;
        left: 1.75rem;
        top: 5.15rem;
    }
    #zui{
         width: 3.75rem;
        font-size: 0.1rem;
        position: absolute;
        top: 5.6rem;
        text-align: center;
        color: gray
    }
</style>