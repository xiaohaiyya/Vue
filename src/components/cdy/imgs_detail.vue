<!--第四个页面 点击轮播图出来-->
<template>
  <div>
    <!-- 1.头部 -->
    <div id="header">
      <span id="eleme" @click="back()">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span id="login">{{titless}}</span>
    </div>

    <!-- 2.筛选 -->
    <div id="filter">
      <!-- -------------------------头部--------------------------------- -->
      <div id="filter_li">
        <!-- 2.1分类 -->
        <p slot="title" @click="one()">
          <span id="fenlei">{{titles}}</span>
          <i :class="icon" id="icon"></i>
        </p>
        <!-- 2.2排序 -->
        <p slot="title" @click="two()">
          <span id="sort">排序</span>
          <i :class="icon1" id="icon2"></i>
        </p>
        <!-- 2.3.筛选 -->
        <p slot="title" @click="three()">
          <span id="shaixuan">筛选</span>
          <i :class="icon2" id="icon3"></i>
        </p>
      </div>

      <!--  ------------------------点击后出来--------------------------- -->
      <!-- a.分类 -->
      <div id="allKinds" v-show="fenlei_bol">
        <!-- 左 -->
        <ul id="kinds">
          <li :key="i" v-for="(v,i) in kinds" @click="getKinds(i,v.id)" class="kinds_li">
            <img :src="https+v.image_url" v-show="i>0" />
            <span>{{v.name}}</span>
            <div>
              <span id="kinds_count">{{v.count}}</span>
              <i class="el-icon-arrow-right" v-show="i>0"></i>
            </div>
          </li>
        </ul>
        <!-- 右 -->
        <ul id="kinds_right">
          <li :key="b" v-show="b>0" v-for="(a,b) in kindsTwoLocal" @click="getKindRight(a.id)">
            <!--判断大于0再遍历，可以除去下标为0的，除去第一个-->
            <span>{{a.name}}</span>
            <span id="kinds_right_count">{{a.count}}</span>
          </li>
        </ul>
      </div>

      <!-- b.排序 -->
      <div id="second" v-if="paixu_bol">
        <ul id="sort">
          <li @click="getAllFood(4)">
            <i class="el-icon-sort"></i>
            <span>智能排序</span>
            <i class="el-icon-check"></i>
          </li>
          <li @click="getAllFood(5)">
            <i class="el-icon-location-outline"></i>
            <span>距离最近</span>
            <i class="el-icon-check"></i>
          </li>
          <li @click="getAllFood(6)">
            <i class="el-icon-wind-power"></i>
            <span>销量最高</span>
            <i class="el-icon-check"></i>
          </li>
          <li @click="getAllFood(1)">
            <i class="el-icon-baseball"></i>
            <span>起送价最低</span>
            <i class="el-icon-check"></i>
          </li>
          <li @click="getAllFood(2)">
            <i class="el-icon-time"></i>
            <span>配送速度最快</span>
            <i class="el-icon-check"></i>
          </li>
          <li @click="getAllFood(3)">
            <i class="el-icon-star-off"></i>
            <span>评分最高</span>
            <i class="el-icon-check"></i>
          </li>
        </ul>
      </div>

      <!-- c.筛选 -->
      <div id="third" v-if="shaixuan_bol">
        <p id="third_one">配送方式</p>
        <!-- a.蜂鸟专送 -->
        <ul id="third_two" @click="getFeng()">
          <li>
            <span v-if="change_bol[0]">
              <i class="el-icon-s-promotion icon_name"></i>
            </span>
            <span v-if="!change_bol[0]">
              <i class="el-icon-close icon_name"></i>
            </span>
            <span id="third_two_text">{{filterText}}</span>
          </li>
        </ul>
        <p id="third_three">商家属性(可以多选)</p>
        <!-- b.六个选择 -->
        <ul id="third_four">
          <li :key="i" v-for="(v,i) in allFilterData" @click="getFilterTwo(i)">
            <!-- 1.鹏超教的 布尔值！！牛逼 -->
            <span class="icon_name" v-if="change_bol[i+1]">{{v.icon_name}}</span>
            <span class="icon_name" v-if="!change_bol[i+1]">
              <i class="el-icon-close"></i>
            </span>
            <span id="third_four_name">{{v.name}}</span>
          </li>
        </ul>
        <!-- c.点击按钮 -->
        <div id="third_bottom">
          <el-button id="btn_left">清空</el-button>
          <el-button type="success" @click="getAllFood()">
            <span>确定</span>
            <span>({{count}})</span>
          </el-button>
        </div>
      </div>
    </div>

    <!---------------------------------- 3.展示列表---------------------------------------------->
    <div id="allFood">
      <ul>
        <li v-for="(v,i) in allFoodData" :key="i">
          <router-link :to="{name:'shopsDetail',query:v}">
            <img :src="img_before2+v.image_path" alt id="foodImg" />
            <span id="paizi">品牌</span>
            <span id="title">{{v.name}}</span>
            <span v-if="v.supports.length==3" id="piao">{{v.supports[2].icon_name}}</span>
            <span v-if="v.supports.length > 1" id="zhun">{{v.supports[1].icon_name}}</span>
            <span v-if="v.supports.length >= 1" id="bao">{{v.supports[0].icon_name}}</span>

            <el-rate
              v-model="v.rating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
              id="score"
            ></el-rate>
            <span id="soldNum">月售：{{v.recent_order_num}}</span>
            <div v-if="v.delivery_mode" id="zhuansong">{{v.delivery_mode.text}}</div>
            <div id="ontime">准时达</div>
            <div id="liBot">
              <span id="money">￥20起送/{{v.piecewise_agent_fee.tips}}</span>
              <span id="distance">
                <span id="time">/{{v.order_lead_time}}</span>
                {{v.distance }}
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "imgsdetails",
  data() {
    return {
      dataQuery: "",
      allFoodData: "",
      img_before2: "//elm.cangdu.org/img/",
      kinds: "",
      kindsTwo: [],
      kindsTwoLocal: "",
      kindsTwoLocalIndex: "",
      https: "https://fuss10.elemecdn.com/",
      icon: "el-icon-caret-bottom",
      icon1: "el-icon-caret-bottom",
      icon2: "el-icon-caret-bottom",
      titles: "",
      titless: "",
      indexID: "",

      // 1.筛选部分
      // 蜂鸟专送
      filterText: "",
      // 蜂鸟专送ID
      filterTextID: "",

      // 6个列表
      allFilterData: "",
      change_bol: [true, true, true, true, true, true, true],
      count: 0,
      // 2.点击筛选后 请求到的数据 下面列表展示出来
      support_ids: [
        "&support_ids[]=8",
        "&support_ids[]=7",
        "&support_ids[]=9",
        "&support_ids[]=5",
        "&support_ids[]=3",
        "&support_ids[]=4"
      ],
      support_ids_bool: ["", "", "", "", "", ""],

      // 分类 排序 筛选 消失出现
      fenlei_bol: false,
      paixu_bol: false,
      shaixuan_bol: false
    };
  },
  created() {
    // console.log(this.$route.query);
    this.dataQuery = this.$route.query;
    this.titles = this.$route.query.title;
    this.titless = this.$route.query.title;
    // 一上来就调用的三个函数
    this.getAllFood();
    this.getKinds();
    this.getFilter();
  },
  methods: {
    back() {
      this.$router.back();
    },
    //                                      点击分类后
    one() {
      // JQ中如何操作属性  方法:attr(属性名，属性值/函数)
      //  console.log(a);
      // $("#kinds li").attr("index", function(x, y) {
      //   return x; //index赋值
      // });
      // console.log($("#kinds li"));
      this.kindsTwoLocal = JSON.parse(localStorage.getItem("dizhi_arr"));
      this.kindsTwoLocalIndex = JSON.parse(localStorage.getItem("dizhi_index"));
      var lis = document.getElementsByClassName("kinds_li");
      lis[this.kindsTwoLocalIndex].style.backgroundColor = "#ffffff";
      ///////////////////////////////分界线/////////////////////////////////////////////////
      // 分类
      var fenlei = document.getElementById("fenlei");
      var icon1 = document.getElementById("icon");
      // 筛选
      var icon3 = document.getElementById("icon3");
      var shaixuan = document.getElementById("shaixuan");
      // 排序
      var icon2 = document.getElementById("icon2");
      var sort = document.getElementById("sort");
      if (this.fenlei_bol == false) {
        // 分类
        this.fenlei_bol = !this.fenlei_bol;
        fenlei.style.color = "#3190e8";
        this.icon = "el-icon-caret-top";
        icon1.style.color = "#3190e8";
        this.titles = "分类";
        // 排序
        this.paixu_bol = false;
        sort.style.color = "#666666";
        this.icon1 = "el-icon-caret-bottom";
        icon2.style.color = "#666666";
        // 筛选
        this.shaixuan_bol = false;
        shaixuan.style.color = "#666666";
        this.icon2 = "el-icon-caret-bottom";
        icon3.style.color = "#666666";
      } else {
        this.fenlei_bol = !this.fenlei_bol;
        fenlei.style.color = "#666666";
        this.icon = "el-icon-caret-bottom";
        icon1.style.color = "#666666";
        this.titles = this.titless;
      }
    },
    // 分类里面左边选择食物种类
    getKinds(a) {
      const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.kinds = res.data;
        //  右边ul li遍历出来
        this.kindsTwo = this.kinds[a].sub_categories;
        // 两种方法：1.存本地 2.存数据源(存进去刷新后没了，但是！手机没有刷新功能)
        localStorage.setItem("dizhi_arr", JSON.stringify(this.kindsTwo));//存本地名字相同，直接覆盖了，每次存进去的不同
        this.kindsTwoLocal = JSON.parse(localStorage.getItem("dizhi_arr"));
        localStorage.setItem("dizhi_index", a);
        //点击哪一个让左边li对应的背景颜色改变     // 康宇教的！！！
        var lis = document.getElementsByClassName("kinds_li");
        for (let i = 0; i < this.kinds.length; i++) {
          if (i == a) {
            lis[a].style.backgroundColor = "#ffffff";
          } else {
            lis[i].style.backgroundColor = "#f5f5f5";
          }
        }
      });
    },
    // 分类里面右边种类点击后切换
    getKindRight(a) {
      this.indexID = a;
      console.log(this.indexID);
      this.getAllFood();
      this.one();
    },
    //                                 点击排序后
    //                              点击排序执行的
    two() {
      // 排序
      var icon2 = document.getElementById("icon2");
      var sort = document.getElementById("sort");
      // 分类
      var fenlei = document.getElementById("fenlei");
      var icon1 = document.getElementById("icon");
      // 筛选
      var icon3 = document.getElementById("icon3");
      var shaixuan = document.getElementById("shaixuan");

      if (this.paixu_bol == false) {
        // 排序
        this.paixu_bol = !this.paixu_bol;
        sort.style.color = "#3190e8";
        this.icon1 = "el-icon-caret-top";
        icon2.style.color = "#3190e8";
        // 分类
        this.fenlei_bol = false;
        fenlei.style.color = "#666666";
        this.icon = "el-icon-caret-bottom";
        icon1.style.color = "#666666";
        this.titles = this.titless;
        // 筛选
        this.shaixuan_bol = false;
        shaixuan.style.color = "#666666";
        this.icon2 = "el-icon-caret-bottom";
        icon3.style.color = "#666666";
      } else {
        this.paixu_bol = !this.paixu_bol;
        sort.style.color = "#666666";
        this.icon1 = "el-icon-caret-bottom";
        icon2.style.color = "#666666";
      }
    },
    //点击排序后的li列表点击后
    getAllFood(number) {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.$store.state.myCity.latitude +
        "&longitude=" +
        this.$store.state.myCity.longitude +
        "&extras[]=activities&keyword=&restaurant_category_ids[]=" +
        this.indexID +
        "&order_by=" +
        number +
        "&delivery_mode[]=" +
        this.filterTextID +
        this.support_ids_bool[0] +
        this.support_ids_bool[1] +
        this.support_ids_bool[2] +
        this.support_ids_bool[3] +
        this.support_ids_bool[4] +
        this.support_ids_bool[5];
      // console.log(api);
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.allFoodData = res.data;
        // 点击后消失  排序部分
        var is = document.getElementsByClassName("el-icon-check");
        // 对号出来
        for (let i = 0; i < is.length; i++) {
          if (number - i == 4) {
            is[i].style.display = "block";
            this.two_next();
          } else if (i - number == 2) {
            is[i].style.display = "block";
            this.two_next();
          } else {
            is[i].style.display = "none";
          }
        }
        // 蜂鸟专送文字,一上来就要得到
        for (let i = 0; i < res.data.length; i++) {
          this.filterText = res.data[0].delivery_mode.text;
        }
        this.filterTextID = "";
        // 筛选里面点击确定 筛选消失
        this.three_next();
      });
    },

    //                                    点击筛选后
    //                              点击筛选后
    three() {
      // 筛选
      var icon3 = document.getElementById("icon3");
      var shaixuan = document.getElementById("shaixuan");
      // 排序
      var icon2 = document.getElementById("icon2");
      var sort = document.getElementById("sort");
      // 分类
      var fenlei = document.getElementById("fenlei");
      var icon1 = document.getElementById("icon");

      if (this.shaixuan_bol == false) {
        // 筛选
        this.shaixuan_bol = !this.shaixuan_bol;
        shaixuan.style.color = "#3190e8";
        this.icon2 = "el-icon-caret-top";
        icon3.style.color = "#3190e8";
        // 分类
        this.fenlei_bol = false;
        fenlei.style.color = "#666666";
        this.icon = "el-icon-caret-bottom";
        icon1.style.color = "#666666";
        this.titles = this.titless;
        // 排序
        this.paixu_bol = false;
        sort.style.color = "#666666";
        this.icon1 = "el-icon-caret-bottom";
        icon2.style.color = "#666666";
      } else {
        this.shaixuan_bol = !this.shaixuan_bol;
        shaixuan.style.color = "#666666";
        this.icon2 = "el-icon-caret-bottom";
        icon3.style.color = "#666666";
      }
    },
    // 1.蜂鸟专送文字部分
    getFeng() {
      for (let i = 0; i < this.allFoodData.length; i++) {
        // 得到蜂鸟专送字 对应的id值 1
        this.filterTextID = this.allFoodData[0].delivery_mode.id;
        console.log(this.filterTextID);
      }
      var text = document.getElementById("third_two_text");
      if (this.change_bol[0]) {
        this.$set(this.change_bol, 0, !this.change_bol[0]);
        text.style.color = "#3190e8";
        this.filterTextID = 1;
        this.count++;
      } else {
        this.$set(this.change_bol, 0, !this.change_bol[0]);
        text.style.color = "#666666";
        this.count--;
        this.filterTextID = "";
      }
    },
    //2.品牌商家 外卖保 准时达  新店 在线支付 开发票
    // 得到名字 还有小名
    getFilter() {
      const api =
        "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.allFilterData = res.data;
      });
    },
    // 3..一个函数 六个调用后改变颜色还有字体
    getFilterTwo(i) {
      this.$set(this.change_bol, i + 1, !this.change_bol[i + 1]);
      // name[i].style.color = "#3190e8";
      if (this.change_bol[i + 1]) {
        this.count--;
        this.support_ids_bool[i] = "";
        console.log(this.support_ids_bool);
      } else {
        this.count++;
        this.support_ids_bool[i] = this.support_ids[i];
        console.log(this.support_ids_bool);
      }
      console.log(this.change_bol);
    },

    //                                另外两个函数
    two_next() {
      var second = document.getElementById("second");
      var icon = document.getElementById("icon2");
      var sort = document.getElementById("sort");
      second.style.display = "none";
      this.icon1 = "el-icon-caret-bottom";
      icon.style.color = "#333333";
      sort.style.color = "#333333";
    },

    three_next() {
      var third = document.getElementById("third");
      var icon = document.getElementById("icon3");
      var shaixuan = document.getElementById("shaixuan");
      icon.style.color = "#333333";
      third.style.display = "none";
      this.icon2 = "el-icon-caret-bottom";
      shaixuan.style.color = "#333333";
    }
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
  position: fixed;
  z-index: 2;
  top: 0;
}
#header a {
  color: white;
}
#eleme {
  float: left;
}

/* 2.分类 排序 筛选 */
#filter #filter_li {
  background-color: #fff;
  /* width: 1.24297rem;
  height: 0.23438rem; */
  border-bottom: 0.00578rem solid #ebe6e6;
  overflow: hidden;
  /* margin-bottom: 2rem; */
  position: fixed;
  z-index: 2;
  margin-top: 0.5rem;
}
#filter_li p {
  width: 1.24rem;
  height: 0.23438rem;
  border-right: 0.00578rem solid #ebe6e6;
  float: left;
  text-align: center;
  margin: 0.07031rem 0;
  font-size: 0.13rem;
  color: #333333;
  line-height: 0.23rem;
}
#filter_li p .el-icon-caret-bottom {
  color: #333333;
}

/* 2.1分类 */
#allKinds {
  width: 3.75rem;
  height: 3.75rem;
  /* border: 0.00578rem solid pink; */
  overflow: hidden;
  /* display: none; */
  position: fixed;
  z-index: 2;
  margin-top: 0.88rem;
  background-color: #fff;
}
/* 2.1.1左边ul */
#kinds {
  /* padding-left:0.9rem; */
  float: left;
  /* overflow: scroll; */
}
/* 左边ul里面内容 */
#kinds img {
  width: 0.1875rem;
  height: 0.1875rem;
  vertical-align: middle;
  margin-right: 0.0468rem;
  /* border: 0.00578rem solid blueviolet; */
}
#kinds li {
  width: 1.68203rem;
  height: 0.42rem;
  /* border: 0.00578rem solid blueviolet; */
  padding: 0 0.11719rem;
  background: #f5f5f5;
  line-height: 0.42rem;
  font-size: 0.12rem;
  overflow: hidden;
  color: #666666;
}
#kinds li div {
  float: right;
  /* display: inline; */
  /* border: 0.00578rem solid blueviolet; */
}
#kinds li #kinds_count {
  padding: 0.01rem 0.01rem;
  color: #ffffff;
  background: #cccccc;
  border-radius: 30%;
  font-size: 0.1rem;
  margin-left: 0.2rem;
}
#kinds li .el-icon-arrow-right {
  color: #cccccc;
  line-height: 0.42rem;
}

/* 2.1.2右边ul */
#kinds_right {
  width: 1.8164rem;
  height: 3.6rem;
  /* border: 0.00578rem solid black; */
  float: right;
  overflow: scroll;
  /* 用滚动的话，高度需要固定， */
  overflow-x: hidden;
}
/* 右边ul内容 */
#kinds_right li {
  width: 1.58203rem;
  height: 0.42rem;
  border-bottom: 0.00578rem solid #e7e5e5;
  padding: 0 0.11719rem;
  background: #ffffff;
  line-height: 0.42rem;
  font-size: 0.12rem;
  overflow: hidden;
  color: #666666;
}
#kinds_right li #kinds_right_count {
  float: right;
}
/* 2.2排序 */
#second {
  position: fixed;
  z-index: 2;
  /* display: none; */
  margin-top: 0.88rem;
}
#sort li {
  width: 3.75rem;
  /* height: 0.5859rem; */
  border-bottom: 0.00578rem solid #f0ecec;
  background: #ffffff;
}
#sort li span {
  line-height: 0.5859rem;
  color: #333333;
  font-size: 0.13rem;
}
#sort li i {
  margin-left: 0.0875rem;
  margin-right: 0.0703rem;
}
#sort li .el-icon-sort {
  color: #2973b8;
}
#sort li .el-icon-location-outline {
  color: #5ea4e6;
}
#sort li .el-icon-wind-power {
  color: #db9e94;
}
#sort li .el-icon-baseball {
  color: #d8c585;
}
#sort li .el-icon-time {
  color: #8a9c73;
}
#sort li .el-icon-star-off {
  color: #d8c585;
}
#sort li .el-icon-check {
  font-weight: 700;
  float: right;
  line-height: 0.5859rem;
  margin-right: 0.3rem;
  color: rgb(25, 89, 150);
  display: none;
}

/* 2.3筛选 */
#third {
  font-size: 0.13rem;
  color: #666666;
  /* border: #8a9c73 solid 0.05rem; */
  /* display: none; */
  position: fixed;
  z-index: 2;
  margin-top: 0.88rem;
  background-color: #f5f5f5;
}
#third_one {
  width: 3.63281rem;
  height: 0.35156rem;
  padding-left: 0.11719rem;
  /* border: #2973b8 solid 0.005rem; */
  line-height: 0.35156rem;
  background-color: #fff;
}
#third_two {
  padding-left: 0.11719rem;
  /* border: #2973b8 solid 0.005rem; */
  background-color: #fff;
}
#third_two li {
  line-height: 0.31656rem;
  border: #dbd8d8 solid 0.005rem;
  width: 0.97281rem;
  height: 0.31656rem;
  border-radius: 8%;
}
#third_two li .icon_name {
  color: #3690e8;
}
#third_three {
  line-height: 0.35156rem;
  width: 3.63281rem;
  height: 0.35156rem;
  /* border: pink solid 0.005rem; */
  padding-left: 0.11719rem;
  background-color: #fff;
}
#third_four {
  background-color: #fff;
  overflow: hidden;
  /* border: purple solid 0.005rem; */
  padding: 0 0.11719rem 0.11719rem;
}
#third_four li {
  border-radius: 8%;
  width: 0.95rem;
  height: 0.31656rem;
  float: left;
  padding: 0 0.05859rem;
  border: #dbd8d8 solid 0.005rem;
  line-height: 0.31656rem;
  margin-right: 0.05859rem;
  margin-bottom: 0.05859rem;
}
#third_four .icon_name {
  width: 0.1875rem;
  height: 0.1875rem;
  font-size: 0.12rem;
  border: #3690e8 0.005rem solid;
  border-radius: 20%;
  padding: 0.01rem 0.02rem;
  line-height: 0.1875rem;
  color: cornflowerblue;
  /* background-color: pink; */
}
#third_bottom {
  padding: 0.07031rem 0.04688rem;
  /* border: purple solid 0.005rem; */
  overflow: hidden;
}
#third_bottom button {
  width: 1.7rem;
  height: 0.41031rem;
  /* border: purple solid 0.005rem; */
  border-radius: 4%;
  color: #fff;
  float: right;
  font-size: 0.1875rem;
}
#third_bottom #btn_left {
  float: left;
  background: #ffffff;
  color: black;
}
/* 3.食物 */
#allFood {
  background: #fff;
  padding-right: 0.1rem;
  position: relative;
  /* border: #2973b8 solid 0.005rem; */
}
#allFood li {
  width: 3.55rem;
  padding-left: 0.1rem;
  overflow: hidden;
  padding-top: 0.1rem;
  padding-right: 0.1rem;
  padding-bottom: 0.1rem;
  /* border: pink solid 0.005rem; */
  border-bottom: 0.01rem solid gainsboro;
}
#allFood li img {
  width: 0.6rem;
  float: left;
  margin-right: 0.1rem;
}
#paizi {
  font-weight: 700;
  background-color: #ffd930;
  border-radius: 0.03rem;
  margin-right: 0.04rem;
  font-size: 0.12rem;
}
#title {
  font-weight: 700;
  font-size: 0.15rem;
}
#liBot {
  overflow: hidden;
}
#soldNum {
  font-size: 0.1rem;
}
#money,
#distance {
  color: #666666;
  font-size: 0.12rem;
  font-weight: 200;
}
#distance {
  float: right;
  margin-top: 0.05rem;
  /* padding-right: 0.2rem; */
  color: #666666;
}
#time {
  float: right;
  font-size: 0.1rem;
  font-weight: 200;
  color: #3190e8;
  /* margin-top: 0.02rem; */
}
#bao {
  float: right;
  /* border: 0.01rem solid gainsboro; */
  font-size: 0.06rem;
  color: #999999;
}
#zhun {
  float: right;
  /* border: 0.01rem solid gainsboro; */
  margin-left: 0.01rem;
  margin: 0.01rem;
  font-size: 0.06rem;
  color: #999999;
}
#piao {
  float: right;
  font-size: 0.06rem;
  color: #999999;
  /* border: 0.01rem solid gainsboro; */
}
#zhuansong {
  /* width: 0.3703rem; */
  height: 0.1267rem;
  background-color: #57a9ff;
  color: #fff;
  display: inline-block;
  font-size: 0.1rem;
  position: absolute;
  right: 0.44rem;
  border: 0.01rem solid #57a9ff;
}
#ontime {
  background-color: white;
  color: #57a9ff;
  border: 0.01rem solid #57a9ff;
  display: inline-block;
  font-size: 0.1rem;
  position: absolute;
  right: 0.1rem;
}
#allFood a {
  color: #666666;
}
</style>