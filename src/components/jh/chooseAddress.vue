<!--CDY-->
<template>
  <div>
    <!-- 1.选择地址 -->
    <div id="top">
      <p>
        <i class="el-icon-arrow-left" @click="back()"></i>
        <span>选择地址</span>
      </p>
    </div>

    <!-- 2. -->
    <div id="gethuowu">
      <ul>
        <li v-for="(v,i) in dataShoppings" :key="i" @click="send(v)">
          <span>地址：{{v.address}}{{v.address_detail}}</span>
          <p>收件人：{{v.name}} 手机号：{{v.phone}}</p>
        </li>
      </ul>
    </div>
    <router-link to="/addAddress">
      <div id="shouhuo">
        <p>
          <i class="el-icon-circle-plus-outline"></i>
          <span>新增收货地址</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      dataShoppings: ""
    };
  },
  created() {
    // console.log(this.$route.query);
    console.log("fsfd");
    console.log(this.$store.state.user_id);
    this.gethuowuData();
  },
  methods: {
    back() {
      this.$router.back();
    },
    gethuowuData() {
      const api =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.user_id +
        "/addresses";
      this.$http({
        url: api,
        methods: "get"
      }).then(res => {
        console.log(res);
        this.dataShoppings = res.data;
      });
    },
    send(v) {
      this.$store.state.sendV = v;
      this.$router.push({
        name: "sureShopping"
      });
    }
  }
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
/* 2.新增收货地址 */
#gethuowu {
  margin-top: 0.45rem;
  /* border: 0.01rem solid orange; */
}
#gethuowu li {
  width: 3.42rem;
  height: 0.46rem;
  padding: 0.16406rem;
  border: 0.01rem solid #ccc;
  background-color: #ffffff;
}
#gethuowu span {
  /* border: 0.01rem solid orange; */
  color: #3190e8;
  font-size: 0.18rem;
}
#gethuowu p {
  /* border: 0.01rem solid orange; */
  margin-top: 0.2rem;
  color: #666666;
}

#shouhuo {
  width: 3.75rem;
  height: 0.5859rem;
  margin-top: 0.45rem;
  /* border: pink solid 0.005rem; */
  text-align: center;
  line-height: 0.5859rem;
  color: #3190e8;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  /* padding-top: ; */
}
</style>