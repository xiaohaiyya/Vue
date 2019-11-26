<template>
  <div id="zong">
      <div id="tou">
            <span @click="diay()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h2 id="q2">在线支付</h2>
        </div>
            <img src="../dy/child/img/z3.jpg" alt="" id="w1">
            <p id="w2">下载饿了么APP</p>
            <div id="xiq" @click="dow()">下载</div>
        <div id="apa" v-show="show">
           <div id="shang"><i class="el-icon-warning-outline" id="i12"></i><p>IOS用户请前往App Store下载</p></div>
           <div id="xia" @click="dia()">确认</div>
         </div>
  </div>
</template>

<script>
export default {
    name:"xiazai",
    data() {
        return {
            show:false
        }
    },
    methods: {
        diay(){
            this.$router.back();
        },
        dow(){
          this.show = true;
        },
        dia(){
          this.show = false;
          console.log("123")
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
        position: relative;
    }
    #w1{
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        left: 1.2rem;
        top: 1.5rem;
    }
    #w2{
        position: absolute;
        left: 1.4rem;
        top: 3.1rem;
        color: gray;
    }
    #xiq{
        width: 3.5rem;
        height: 0.4rem;
        background-color:greenyellow;
        position: absolute;
        left: 0.15rem;
        top: 3.5rem;
        color: white;
        text-align: center;
        line-height: 0.4rem;
        border-radius: 0.1rem;
    }
    #apa{
      position: absolute;
      left: 0.7rem;
      top: 2rem;
      background-color: whitesmoke;
      border-radius: 0.1rem;
      width: 2.5rem;
      height: 1.5rem;
      
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
</style>