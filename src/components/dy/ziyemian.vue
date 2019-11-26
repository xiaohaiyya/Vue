<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark head">
        <!-- 左箭头 -->
        <span class="a el-icon-arrow-left" @click="back1()"></span>
        <span class="name">{{jiexi2}}</span>
      </div>
    </el-col>
    <div class="neirong">
      <p>{{aee[jiexi[key]]}}</p>
    </div>
  </el-row>
</template>

<script>
export default {
  name: "resolving",
  data() {
    return {
      aee: "",//全部信息获取
      jieXi: "", //   解释信息获取
      jiexi2: null,//会员名字获取
      key:""//解释信息下标
    };
  },
  created() {
    //   解释信息获取
    this.jiexi = this.$route.query.grr;
    // 会员名字获取
    this.jiexi2 = this.$route.query.grrB;
    //全部信息获取
    this.aee = this.$route.query.grrA;
    //解释信息下标获取
    this.key = this.$route.query.key;
  },
  methods: {
   
    // 返回上一级
    back1() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.head {
    width: 100%;
  background-color: #3190e8;
  height: 0.45rem;
  text-align: center;
  position: fixed;
}
/* 左箭头 */
.a {
  line-height: 0.45rem;
  float: left;
  font-size: 0.26rem;
  color: white;
}
/* 中间名字 */
.name {
  line-height: 0.45rem;
  color: white;
  font-size: 0.18rem;
  font-weight: 700;
  clear: both;
}
/* 内容设置 */
.neirong>p{
    font-size: 0.2rem;
    color: #333333;
    margin: 0.05rem;
    margin-top: 0.5rem;
    margin-bottom: 0.6rem;
}
</style>