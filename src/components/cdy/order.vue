<!--CDY-->
<template>
  <div>
    <!-- 1.搜索状态栏 -->
    <div id="top">
      <p>
        <!-- <router-link to="/search"> <i class="el-icon-arrow-left"></i></router-link> -->
        <i class="el-icon-arrow-left" @click="back()"></i>
        <span>订单列表</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  created() {
    console.log(this.$route.query);
  },
  methods: {
    back(){
      this.$router.back();
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 1.搜索 */
#top p {
  width: 3.75rem;
  height: 0.45rem;
  /* border: 1px solid peru; */
  text-align: center;
  color: #ffffff;
  background: #3190e8;
  overflow: hidden;
  line-height: 0.45rem;
  position: fixed;
  top: 0;
}
#top p .el-icon-arrow-left {
  line-height: 0.45rem;
  font-size: 0.24rem;
  float: left;
}
</style>