<template>
  <div id="zong">
      <div id="tou">
            <span @click="diad()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h2 id="q2">积分商城</h2>
        </div>
        <p id="w1">请重新进入</p>
        <p id="w2">请返回后重新进入积分商城~</p>
        <img src="../dy/child/img/z4.jpg" alt="" id="w3">
  </div>
</template>

<script>
export default {
    name:"jifenshangcheng",
    methods: {
        diad(){
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
    #w3{
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 50%;
        position: absolute;
        left: 1rem;
        top: 3rem
    }
    #w1{
        font-size: 0.25rem;
        color: cornflowerblue;
        position: absolute;
        left: 1.2rem;
        top: 2rem;
    }
    #w2{
        font-size: 0.15rem;
        color: grey;
        position: absolute;
        left: 0.95rem;
        top: 2.5rem;
    }
</style>