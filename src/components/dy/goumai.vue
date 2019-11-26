<template>
  <div id="zong">
    <p id="w1">支付剩余时间</p>
      <div id="tou">
            <span @click="diaq()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h2 id="q2">在线支付</h2>
        </div>
        <div id="zhong">
          
        <p id="w2">00:{{minute}}:{{second}}</p>
        </div>
        <div id="zi">选择支付方式</div>
        <div id="zhi"><i class="el-icon-chat-dot-round" id="q3"></i><p id="q5">支付宝</p><i class="el-icon-success" id="q4"></i></div>
        <div id="wei"><i class="el-icon-chat-dot-square" id="q7"></i><p id="q5">微信</p><i class="el-icon-success" id="q4"></i></div>
        <div id="fu" @click="dian4()">确认支付</div>
        <div id="app" v-show="show">
           <div id="shang"><i class="el-icon-warning-outline" id="i12"></i><p>暂不开放支付功能</p></div>
           <div id="xia" @click="dian2()">确认</div>
         </div>
         <div id="apa" v-show="show">
           <div id="shang"><i class="el-icon-warning-outline" id="i12"></i><p>当前环境无法支付，请打开官方APP进行付款</p></div>
           <div id="xia" @click="dian3()">确认</div>
         </div>
  </div>
</template>

<script>
export default {
  name:"goumai",
  data () {
      return {
        minutes: 15,
        seconds:0,
        show:true
          } 
  },
   mounted () {
      this.add()
    },
  methods: {
    diaq(){
      this.$router.back();
    },
    dian2(){
      this.show = false;
    },
    dian4(){
      this.show = true;
    },
    dian3(){
      this.show = false;
    },
    num: function (n) {
        return n < 10 ? '0' + n : '' + n
      },
      add: function () {
        var _this = this
        var time = window.setInterval(function () {
          if (_this.seconds === 0 && _this.minutes !== 0) {
            _this.seconds = 59
            _this.minutes -= 1
          } else if (_this.minutes === 0 && _this.seconds === 0) {
            _this.seconds = 0
            window.clearInterval(time)
          } else {
            _this.seconds -= 1
          }
        }, 1000)
      },
      watch: {
      second: {
        handler (newVal) {
          this.num(newVal)
        }
      },
      minute: {
        handler (newVal) {
          this.num(newVal)
        }
      }
  }
  },
   computed: {
      second: function () {
        return this.num(this.seconds)
      },
      minute: function () {
        return this.num(this.minutes)
      }
    }
}
</script>

<style scoped>
#app,#apa{
      position: absolute;
      left: 0.5rem;
      top: 2rem;
      background-color: whitesmoke;
      border-radius: 0.1rem;
      width: 2.5rem;
      height: 1.5rem;
      /* opacity: 0; */
    }
    #apa{
      opacity: 0;
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
#i12{
      color: darkorange;
      font-size: 0.5rem;
      margin-top: 0.2rem;
      margin-bottom: 0.1rem;
    }
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
    #zhong{
      width: 3.75rem;
      height: 1.5rem;
      background-color:white;
      text-align: center;
      line-height: 1.5rem;
      font-size: 0.5rem
    }
    #zi{
      width: 3.75rem;
      height: 0.4rem;
      padding-left: 0.15rem;
      line-height: 0.4rem;
    }
    #zhi,#wei{
      width: 3.75rem;
      height: 0.5rem;
      background-color: white;
      border-bottom: 0.001rem solid gainsboro;
      line-height: 0.6rem;
      position: relative;
    }
    #q3{
      font-size: 0.3rem;
      color: aqua;
      padding-left: 0.15rem;
    }
    #q7{
      font-size: 0.3rem;
      color: greenyellow;
      padding-left: 0.15rem;
    }
    #q4{
      position: absolute;
      left: 3.2rem;
      top: 0.15rem;
      font-size: 0.2rem
      
    }
    #q5{
      position: absolute;
      left: 0.6rem;
      top: 0rem;
    }
    #fu{
      color: white;
      width: 3.5rem;
      background-color:lawngreen;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      margin-top: 0.15rem;
      margin-left: 0.1rem;
      border-radius: 3%;
    }
    #w1{
      position: absolute;
      left: 1.5rem;
      top: 0.8rem;
      font-size: 0.1rem;

    }
</style>