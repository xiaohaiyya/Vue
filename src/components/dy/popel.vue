<template>
  <div id="wai">
      <div id="shang">
          <span @click="zhcc()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h3 id="q2">修改用户名</h3>
      </div>
      <div id="kuang">
         <input type="text" placeholder="输入用户名" id="q9"><br>
      </div>
      <div id="zi">用户名只能修改一次（5-24字符之间）</div>
      <div id="queren">确认修改</div>
  </div>
</template>

<script>
export default {
    name:"popel",
    methods: {
        zhcc(){
            this.$router.back();
        }
    },
}
</script>

<style scoped>
#wai{
  position: relative;
}
#q9{
    padding-left: 0.15rem;
}
  #shang{
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
   input{
       width: 3.5rem;
       height: 0.4rem;
       border: 0.01rem solid gainsboro;
       margin-left: 0.1rem;
        margin-top: 0.08rem;
   }
   #zi{
       font-size: 0.1rem;
       color: grey;
       width: 3.5rem;
       height: 0.3rem;
       line-height: 0.3rem;
        margin-left: 0.1rem;
        margin-top: 0.08rem;
   }
   #queren{
       width: 3.5rem;
       height: 0.45rem;
        background-color: cornflowerblue;
        text-align: center;
        line-height: 0.45rem;
        color: white;
        margin-left: 0.1rem;
        margin-top: 0.08rem;
   }
</style>