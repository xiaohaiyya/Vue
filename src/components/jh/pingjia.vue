<template>
  <div>
      <div id="evaInf">
        <div id="ivfL">
          <span id="score">{{shopScore.overall_score.toFixed(1)}}</span><br>
         <span id="holeEva">综合评价</span><br>
         <span id="rate">高于周边商家{{(100*shopScore.compare_rating).toFixed(1)}}%</span>
        </div>
        <div id="infR">
          <span id="sevice">服务态度  <span class="iconScore"><el-rate
  v-model="shopScore.service_score"
  disabled
  text-color="#ff9900"
  >
</el-rate></span>
<span class="score">{{shopScore.service_score.toFixed(1)}}</span></span><br>
          <span id="food">菜品评价  <span class="iconScore"><el-rate
  v-model="shopScore.food_score"
  disabled
  text-color="#ff9900"
  >
</el-rate></span><span class="score">{{shopScore.food_score.toFixed(1)}}</span></span><br>
          <span id="time">送达时间  <span class="timeDe">{{shopScore.deliver_time}}分钟</span></span>
        </div>
      </div>
      <div id="middle">
        <ul>
          <li v-for="(v,i) in cateData" :key="i" @click="color(i)">
            {{v.name}}({{v.count}})
          </li>
        </ul>
      </div>
      <div id="footer">
        <ul>
          <li v-for="(v,i) in addData" :key="i">
           <div>
              <img  src="http://elm.cangdu.org/img/default.jpg" alt=""  id="imgs">
            <!-- <img v-else :src="'http://elm.cangdu.org/img/'+v.avatar" alt=""  id="imgs"> -->
           </div>
              <span id="user">{{v.username}}</span>
              <br>
              
              <span id="haoping"><el-rate
  v-model="v.rating_star"
  disabled
  show-score
  text-color="#ff9900">
</el-rate></span><span>{{v.time_spent_desc}}</span>
              <!-- <span id="foodName0">{{v.item_ratings[0].food_name}}</span> -->
              <!-- <span id="foodName1" v-if="v.item_ratings.length>1">{{v.item_ratings[1].food_name}}</span> -->
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
var lis;
export default {
    name:'pingjia',
    data() {
      return {
        beforeImg:'http://elm.cangdu.org/img/',
        dataHeader:"",
         addData:'',//这个是评价信息
            shopScore:'',//这个是商铺分数
            cateData:'',//这个是评价分类数据
            // beforeImg:'https://fuss10.elemecdn.com/'
      }
    },
    methods: {
      //获取评价信息
        getAddData(){
            const api = 'https://elm.cangdu.org/ugc/v2/restaurants/'+this.dataHeader.id+'/ratings?offset=0&limit=10';
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
                console.log(res);
                this.addData = res.data
                console.log(this.addData)
            })
        },
        //获取商铺分数
        getShopScore(){
            const api = 'https://elm.cangdu.org/ugc/v2/restaurants/'+this.dataHeader.id+'/ratings/scores';
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
              console.log(res);
                this.shopScore = res.data;
            })
        },
        getCateData(){
            const api = 'https://elm.cangdu.org/ugc/v2/restaurants/'+this.dataHeader.id+'/ratings/tags';
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
              
                this.cateData = res.data;
            })
        },
        color(j){
           $("#middle li").css("background","#ebf5ff");
           $("#middle li").eq(j).css("background","#3190e8");
            
        }
    },
    created() {
      this.dataHeader = this.$route.query;
      // console.log("评价信息")
      // console.log("商铺分数")
      this.getShopScore();
      // this.getCateData();
      this.getCateData()
      this.getAddData();
    },
}
</script>

<style scoped>
  #evaInf{
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    overflow:hidden;
    margin-top: 0.01rem;
    margin-bottom: 0.1rem;
    background-color: #fff;
  }
  #ivfL{
    float: left;
    margin-left: 0.3rem;
    text-align: center;
    width: 1rem;
  }
  #score{
    color: #ff6600;
    font-size: 0.3rem;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }
  #holeEva{
      font-size: 0.15rem
  }
  #rate{
font-size: 0.1rem
  }
  #infR{
    float: left;
    font-size: 0.15rem
  }
  #food{
    display: inline-block;
    margin-top: 0.05rem;
    margin-bottom: 0.05rem;
  }
 .score{
   font-size: 0.12rem;
   color: #ff6600;
 }
 .timeDe{
   color: #333;
   font-size: 0.12rem;
 }
 .iconScore{
   display: inline-block;
   transform: scale(0.5,0.5);
 }
 #middle{
   float: left;
   background-color: #fff;
 }
 #middle li{
   float: left;
   width: 0.8rem;
   margin: 0.05rem;
   font-size: 0.13rem;
   /* border: 0.01rem solid #333; */
   height: 0.3rem;
   text-align: center;
   color: #333;
   line-height: 0.3rem;
   border-radius: 0.05rem;
   background-color: #ebf5ff;
 }
 #footer li{
   border-top: 0.01rem solid gainsboro;
 }
 #haoping{
   display: inline-block;
   transform: scale(0.5,0.5)
 }
 #imgs{
   width: 0.3rem;
 }
</style>