
<template>
  <div id="app">
    <!-- 1.搜索状态栏 -->
    <div id="top">
      <p>
        <i class="el-icon-arrow-left" @click="back()"></i>
        <span>搜索</span>
      </p>
    </div>

    <!-- 2.请输入商家或美食名称 -->
    <div id="second">
      <input placeholder="请输入商家或美食名称" v-model="food" class="texInp" v-on="inpNone()" />
      <!--v-on 会有冲突-->
      <input type="submit" class="subInp" @click="getFood()" />
      <!--提交按钮-->
    </div>

    <!-- 3.搜索历史 -->
    <div id="third" v-show="num==1">
      <p>搜索历史</p>
      <ul>
        <li v-for="(v,i) in historyArr" :key="i">
          <span>{{v}}</span>
          <i class="el-icon-close" @click="deleteNowLi(i)"></i>
        </li>
      </ul>
      <p id="empty" @click="deleteLocal()">清空搜索历史</p>
    </div>

    <!-- 4.商家 -->
    <div id="food" v-if="num ==2">
      <ul>
        <h4>商家</h4>
        <li :key="i" v-for="(v,i) in backFood">
          <img :src="'http://elm.cangdu.org/img/' + v.image_path" alt />
          <span>{{v.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      food: "", //输入框绑定的值
      getGeohash: "",
      backFood: "", //请求来的数据
      // show: false,
      historyArr: [], //下面数组改变 数据会重新渲染
      num: "" //数据会渲染
    };
  },
  created() {
    // console.log(this.$route.query);
    this.getGeohash = this.$route.query.geohash;
    this.getLocal();
  },
  methods: {
    back() {
      this.$router.back();
    },
    //第一步：一上来就运行
    getLocal() {
      // sessionStorage.clear();
      for (var m in sessionStorage) {
        // console.log(m);
        if (
          m != "loglevel:webpack-dev-server" &&
          m != "length" &&
          m != "key" &&
          m != "getItem" &&
          m != "setItem" &&
          m != "removeItem" &&
          m != "clear" &&
          m != ""
        ) {
          this.historyArr.unshift(m);
          // console.log(this.historyArr);
        }
        // console.log(sessionStorage);
      }
      if (this.historyArr.length == 0) {
        this.num = 0;
      } else {
        this.num = 1;
      }
    },
    // 第二步：点击提交 商家数据出来+存到本地+把搜索的值放到数组里
    getFood() {
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.getGeohash +
        "&keyword=" +
        this.food;
      this.$http({
        url: api,
        methods: "get"
      }).then(res => {
        this.backFood = res.data;
        console.log(res.data);
        this.num = 2;
        // $("#third").css("display", "none");

        sessionStorage.setItem(this.food, "success");
        for (let i = 0; i < this.historyArr.length; i++) {
          if (this.food == this.historyArr[i]) {
            return;
          }
        }
        this.historyArr.unshift(this.food);
        console.log(this.historyArr);
      });
    },
    // 下一步：删除输入框字，执行这个，v-on绑定事件，监督输入框的值,与第三步冲突
    inpNone() {
      if (this.food == "") {
        if (this.historyArr.length >= 1) {//避免了冲突
          this.num = 1;
        }
      }
    },
    // 第三步：删除当前li---》其实就是数组元素删除，会重新渲染
    deleteNowLi(a) {
      for (let i = 0; i < this.historyArr.length; i++) {
        if (i == a) {
          sessionStorage.removeItem(this.historyArr[a]);
          this.historyArr.splice(a, 1);//删除一个，数组重新渲染
          console.log(this.historyArr);
          console.log(sessionStorage)
        }
      }
      if (this.historyArr.length <= 0) {
        this.num = 0;
        console.log(this.historyArr);
      }
    },
    // 第四步：删除所有的数组元素+本地的也全部删除
    deleteLocal() {
      sessionStorage.clear();
      this.historyArr = [];
      this.num = 0;
      console.log(sessionStorage);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#app{
  height: 92%;
  overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
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
/* 2.请输入商家或美食名称 */
#second {
  width: 3.75rem;
  height: 0.59rem;
  /* border: 1px solid peru; */
  background-color: #fff;
  line-height: 0.59rem;
  margin-top: 0.45rem;
}
#second .texInp {
  width: 2.7rem;
  height: 0.35rem;
  margin-left: 0.12rem;
  padding-left: 5px;
}
#second .subInp {
  width: 0.77rem;
  height: 0.35rem;
  background-color: #3190e8;
  color: #fff;
  font-size: 0.14rem;
}
/* 3.搜索历史 */
#third {
  width: 3.75rem;
  /* border: 1px solid peru; */
  /* display: none; */
}
#third p {
  width: 3.75rem;
  height: 0.46rem;
  /* border: 1px solid peru; */
  background-color: #f5f5f5;
  color: #666666;
  line-height: 0.46rem;
  font-size: 0.14rem;
  padding-left: 0.12rem;
  font-weight: 700;
  /* display: none; */
  /* margin-top: 1rem; */
}
#third li {
  width: 3.6rem;
  height: 0.46rem;
  background-color: #fff;
  padding: 0 0.0731rem 0.00578rem 0.0731rem;
  /* border: 1px solid orange; */
  line-height: 0.46rem;
  color: #333333;
  overflow: hidden;
}
#third li .el-icon-close {
  color: #3190e8;
  float: right;
  line-height: 0.46rem;
  font-weight: 700;
}
#third #empty {
  width: 3.6rem;
  height: 0.46rem;
  background-color: #fff;
  text-align: center;
  color: #3190e8;
  font-size: 0.16rem;
}

/* 4.请求来的商家或食品 */
#food h4 {
  width: 3.75rem;
  height: 0.46rem;
  padding-left: 0.12rem;
  color: #666666;
  line-height: 0.46rem;
  font-size: 0.14rem;
  /* display: none; */
}
#food ul {
  width: 3.75rem;
  /* border: 1px solid peru; */
}

#food ul li {
  width: 3.53rem;
  height: 0.7731rem;
  border-bottom: 2px solid #f5f5f5;
  background-color: #fff;
  padding: 0.11719rem;
}
#food ul li img {
  width: 0.3984rem;
  height: 0.3984rem;
  vertical-align: top;
}
</style>