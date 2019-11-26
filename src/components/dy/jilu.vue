<template>
  <div id="zong">
      <div id="tou">
            <span @click="dia()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h2 id="q2">购买记录</h2>
        </div>
        <div id="zhong">
            <img src="../dy/child/img/z2.png" alt="" id="q3">
            <p id="q4">没有购买记录</p>
        </div>
  </div>
</template>

<script>
export default {
    name:"jilu",
    methods: {
        dia(){
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
    #q3{
        position: absolute;
        left: 0.5rem;
        top: 1.5rem
    }
    #q4{
        position: absolute;
        left: 1.4rem;
        top: 3.3rem;
        font-size: 0.2rem;
        color: gray;
    }
</style>