<template>
  <div>
    <div class="service">
      <span class="num el-icon-arrow-left" @click="back1()"></span>
      <span class="service_b">服务中心</span>
    </div>
    <!-- <div class="left">
  
  </div>
  <div class="right">
  
    </div>-->
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple left">
          <a href>
            <span class="el-icon-phone-outline girl"></span>
            <span class="wezi">在线客服</span>
          </a>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light right">
          <a href>
            <span class="el-icon-phone-outline phone"></span>
            <span class="wenzi">在线客服</span>
          </a>
        </div>
      </el-col>
    </el-row>
    <div class="popular">
      <h4>热门问题</h4>
    </div>
    <div class="manyA">
      <ul>
        <li :key="i" v-for="(v,i) in alls" class="manyB">
          <span class="display">{{all[v]}}</span>
          <span class="el-icon-arrow-right jiantou" @click="getchuan(all[v],i)"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "servicecentre",
  data() {
    return {
      all: "", //获取的值
      alls: [], //所有标题的key数组
      alls1:[],//所有解释的key数组 
        };
  },
  created() {
    this.all = this.$route.query;
    // this.huoqu();
    this.getA();
    this.getB();
  },
  
  
  methods: {
    
    // key名遍历
    getA() {
      var arrServe = [];
      var arr = [];
      for (const key in this.all) {
        arr.push(key);
      }

      for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 1 && i <= 24) {
          arrServe.push(arr[i]);
        }
        if (i % 2 == 0 && i > 25) {
          arrServe.push(arr[i]);
        }
      }
      this.alls = arrServe;
    },
    // 解析遍历
    getB() {
      var arrServe1 = [];
      var arr1 = [];
      for (const key in this.$route.query) {
        arr1.push(key);
      }
      for (var i = 0; i < arr1.length; i++) {
        if (i % 2 == 0 && i <= 24) {
          arrServe1.push(arr1[i]);
        }
        if (i % 2 == 1 && i > 25) {
          arrServe1.push(arr1[i]);
        }
      }
      this.alls1 = arrServe1;
    },
    // 传到解释页面
    getchuan(a,i){
      this.$router.push({ 
        name:"ziyemian",
        query:{
          grr:this.alls1,//解析
          grrA:this.all,//全部信息传送
          grrB:a,//名字
          key:i,//解析下标传送
          
          }
      })
    },
    // 返回上一级
    back1() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
/* 顶部 */
.service {
  height: 0.45rem;
  background-color: #3190e8;
  text-align: center;
  /* margin-bottom: 0.05rem; */
}
/* 左箭头 */
.num {
  line-height: 0.45rem;
  color: white;
  margin-left: 0.05rem;
  font-size: 0.26rem;
  float: left;
}
.service_b {
  line-height: 0.45rem;
  color: white;
  font-size: 0.18rem;
  font-weight: 700;
  clear: both;
}
/* 在线客服 */
.left {
  width: 1.865rem;
  height: 0.96rem;
  background-color: white;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
/* 女孩头像 */
.left .girl {
  color: orangered;
  font-size: 0.25rem;
  margin-left: 0.8rem;
  margin-bottom: 0.1rem;
  margin-top: 0.2rem;
}
.left .wezi {
  color: #333333;
  margin-left: 0.63rem;
  padding-bottom: 0.1rem;
}
/* 电话 */
.right {
  width: 1.865rem;
  height: 0.96rem;
  background-color: white;
  border-bottom: 1px solid #e4e4e4;
}
.right .phone {
  color: green;
  font-size: 0.25rem;
  margin-left: 0.8rem;
  margin-bottom: 0.1rem;
  margin-top: 0.2rem;
}
/* 文字 */
.right .wenzi {
  color: #333333;
  margin-left: 0.63rem;
  padding-bottom: 0.1rem;
}
/* 热门问题 */
.popular {
  height: 0.6rem;
  background-color: white;
  clear: both;
  border-bottom: 1px solid #e4e4e4;
}
.popular > h4 {
  line-height: 0.6rem;
  font-size: 0.2rem;
  color: #333333;
  margin-left: 0.1rem;
}
/* 遍历 */
/* .manyA {
  height: 0.5rem;
  background-color: white;
  border-bottom: 1px solid #e4e4e4;
} */
.manyA span {
  line-height: 0.5rem;
  color: #666666;
  margin-left: 0.1rem;
  font-size: 0.15rem;
}
.manyA .jiantou {
  line-height: 0.5rem;
  float: right;
  color: #666666;
  font-size: 0.2rem;
  margin-right:0.15rem; 
  clear: both;
}
/* li */
.manyB {
  height: 0.5rem;
  background-color: white;
  border-bottom: 1px solid #e4e4e4;
}
/* .manyB .display{
  width: 0.5rem;
  background-color: red;
} */
</style>