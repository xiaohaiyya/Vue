<template>
    <div id="zong">
        <div id="tou">
          <span @click="zhww()"><i class="el-icon-arrow-left" id="w1"></i></span>
            <h3 id="w2">我的优惠</h3>
      </div>
      <div id="zhong">
          <p id="s1" @click="ee()">红包</p><p id="s2" @click="ww2()">商家代金券</p>
      </div>
        <i class="el-icon-question" id="q1">商家代金券说明</i>
        <img src="../dy/child/img/jin.png" alt="" id="q2">
        <p id="q3">无法使用代金券</p>
        <p id="q4">非客户端或客户端版本过低</p>
        <div id="q5">下载或升级客户端</div>
    </div>
</template>

<script>
export default {
    name:"daijinquan",
    methods: {
        ee(){
            this.$router.push({
                name:"youhui",
                // path:"youhui"
            })
        },
        zhww(){
            this.$router.push({
                name:"dyhome",
                // path:"home"
            })
        }
    },
}
</script>

<style scoped>
    #zong{
        position: relative;
    }
    #q1{
        color: cornflowerblue;
        font-size: 0.12rem;
        position: absolute;
        left: 2.6rem;
        top: 1.2rem
    }
    #q2{
        position: absolute;
        left: 0.4rem;
        top: 1.5rem
    }
    #q3{
        font-size: 0.14rem;
        position: absolute;
        left: 1.4rem;
        top: 3.2rem;
        color: gray
    }
    #q4{
        font-size: 0.14rem;
        position: absolute;
        left: 1.1rem;
        top: 3.4rem;
        color: gray
    }
    #q5{
        width: 2.5rem;
        height: 0.4rem;
        background-color:greenyellow;
        position: absolute;
        left: 0.7rem;
        top: 3.8rem;
        color: white;
        text-align: center;
        line-height: 0.4rem;
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
    #w1{
        position: absolute;
        left: 0.05rem;
        top: 0.1rem;
        font-size: 0.3rem;
        color: white;
    }
    #w2{
        position: absolute;
        left: 1.4rem;
        top: 0.15rem;
    }
    #zhong{
        width: 3.75rem;
        height: 0.5rem;
        background-color: white;
    }
    #s1{
        position: absolute;
        left: 0.7rem;
        line-height: 0.5rem;
    }
    #s2{
        position: absolute;
        left: 2.3rem;
        line-height: 0.5rem;
    }
</style>