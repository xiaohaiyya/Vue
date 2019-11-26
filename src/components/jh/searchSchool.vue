<!--JH 地址-->
<template>
  <div id="all">
    <!-- 1.头部 -->
    <div id="header">
      <span>
        <i class="el-icon-arrow-left" id="eleme" @click="back()"></i>
      </span>
      <span id="login">搜索</span>
    </div>
    <!-- 2.搜索框 -->
    <div id="search">
      <input type="text" v-model="keyWord" placeholder="请输入小区/写字楼/学校等" id="text" />
      <button @click="search()" id="btn">搜索</button>
    </div>
    <!-- 3.中间文字 -->
    <div id="word">
      <p>找不到地址？</p>
      <p>尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号等）可稍后输入哦</p>
    </div>
    <!-- 4.请求来的地址列表展示 -->
    <ul id="searchArea">
      <!-- <router-link :to="{name:'jihewenjian',query:v}"> -->
      <li v-for="(v,i) in backSearch" :key="i" @click="getSchool(v)">
        <p id="weight">{{v.name}}</p>
        <p id="qing">{{v.address}}</p>
      </li>
      <!-- </router-link> -->
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "address",
  data() {
    return {
    //   detailAddress: "",
      keyWord: "",
      backSearch: "",
      shuju1:""
    };
  },
  created() {
    console.log(this.$route.query);
    this.detailAddress = this.$route.query;
    this.shuju1 = this.$store.state.id;
    console.log(this.$store.state.id);
  },
  methods: {
    back() {
      this.$router.back();
    },
    search() {
      if (this.keyWord == "") {
        alert("请填写搜索关键字");
        return;
      }
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.shuju1+
        "&keyword=" +
        this.keyWord;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res);
        this.backSearch = res.data;
        var word = document.getElementById("word");
        word.style.display = "none";
      });
    },
     getSchool(a) {
       this.$store.state.addressName = a.name;
      this.$router.push({
        name: "addAddress",
      });
    }
  },
  computed: {
    ...mapState({
      shuju(a) {
        this.shuju1 = a.shuju;
        // return a.shuju;
      }
    })
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 1.头部 */
#header {
  overflow: hidden;
  background-color: #3190e8;
  height: 0.5rem;
  width: 3.55rem;
  font-size: 0.2rem;
  line-height: 0.5rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  color: white;
  overflow: hidden;
  text-align: center;
}
#header a {
  color: white;
}
#eleme {
  font-size: 0.24rem;
  line-height: 0.5rem;
  float: left;
}
#changeCity {
  font-size: 0.15rem;
  float: right;
}
/* 2.搜索 */
#search {
  width: 3.75rem;
  text-align: center;
  margin-top: 0.05rem;
  /* padding-top: 0.05rem; */
  padding-bottom: 0.05rem;
  background: white;
}
#text {
  width: 2.47rem;
  height: 0.35rem;
  border: 1px solid gainsboro;
  /* outline: none; */
  padding-left: 0.1rem;
  font-size: 0.14rem;
  background-color: #f1f1f1;
}
#btn {
  background-color: #3190e8;
  border-radius: 10%;
  border: 0px;
  width: 0.6188rem;
  margin-top: 0.1rem;
  margin-left: 0.14rem;
  height: 0.3516rem;
  color: white;
  font-size: 0.14rem;
}
/* 3.中间文字 */
#word {
  background-color: #fff;
  padding: 2.5rem 0 3rem 0;
  text-align: center;
  /* border: #3190e8 solid 0.05rem; */
  color: #aaaaaa;
}
#searchArea {
  width: 3.42rem;
  height: 7.93rem;
  padding: 0.16406rem 0.24rem 0.16406rem 0.08rem;
  background-color: #fff;
}
#searchArea li {
  width: 3.42rem;
  height: 0.46rem;
  /* border-top: 0.01rem solid gainsboro; */
  font-size: 0.15rem;
  padding: 0.16rem 0.1rem 0 0.16rem;
  font-weight: 700;
}
#weight {
  color: #555555;
  font-weight: normal;
  font-size: 0.175rem;
  /* border: 0.01rem solid orange; */
  /* margin-bottom: 0.01rem; */
}
#qing {
  font-weight: 300;
  font-size: 0.15rem;
  margin-top: 0.05rem;
  /* letter-spacing: 0.001rem; */
  color: #999999;
}
</style>