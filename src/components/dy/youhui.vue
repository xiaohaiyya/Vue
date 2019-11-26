<template>
  <div id="zong">
     
      <div id="tou">
          <span @click="zhww()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h3 id="q2">我的优惠</h3>
      </div>
      <div id="zhong">
          <p id="s1">红包</p><p id="s2" @click="ww2()">商家代金券</p>
      </div>
      <div id="warp">
        <p id="p2">
            有三个红包即将到期
            <i class="el-icon-question" id="ss1"></i>
            <router-link id="d1_ro" to="/sming">红包说明</router-link>
        </p>
        <ul>
            <li :key="i" v-for="(v,i) in suoyou" id="lis" v-show="show1">  
                <span id="xian"></span>
                <span id="lis_s1">￥</span>
                <span id="lis_s2">{{v.amount}}</span>
                <!-- <span id="lis_s3"></span> -->
                <p id="lis_p1">
                    {{v.description_map.sum_condition}}
                </p>
                <h4 id="lis_p2">
                    {{v.name}}
                </h4>
                <p id="lis_p3">
                    {{v.description_map.validity_periods}}
                </p>
                <p id="lis_p4">
                    {{v.description_map.phone}}
                </p>
                <p id="lis_p5">
                    {{v.description_map.validity_delta}}
                </p>
            </li>
        </ul>
         <p id="zi">限品类：快餐便当、特色菜系、小时夜宵、甜品饮品、异国料理</p>
        <p id="p3" @click="lol3()">查看历史红包<i class="el-icon-arrow-right"></i> </p>
    </div>
    <div id="d1">
        <span @click="lol1()">兑换红包</span>
        <span @click="lol2()">推荐有奖</span>
        <span id="d1_s3"></span>
    </div>
    
</div>
  
</template>

<script>
export default {
    name:"youhui",
    data(){
        return{
            suoyou:"",
            show1:false
        }
    },
    created() {
        this.hongbao();
    },
    methods: {
        ww2(){
            this.$router.push({
                path:"/daijinquan",
                name:"daijinquan"
            })
        },
        zhww(){
            this.$router.back();
        },
        lol1(){
            this.$router.push({
                path:"/duihongbao",
                name:"duihongbao"
            })
        },
        lol2(){
            this.$router.push({
                path:"/tuijian",
                name:"tuijian"
            })
        },
        lol3(){
            this.$router.push({
                path:"/lishi",
                name:"lishi"
            })
        },
        hongbao(){
            const api = "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0";
            this.$http.get(api).then((res)=>{
                this.show1=true;
                this.suoyou=res.data;
            })
       }
    },
    lishi(){
            this.$router.push({
                name:"lishi"
            })
        },
    tuijian(){
            this.$router.push({
                name:"tuijian"
            })
        },
    duihongbao(){
            this.$router.push({
                name:"duihongbao"
            }) 
        }
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
        top: 0.15rem;
    }
    #zhong{
        width: 3.75rem;
        height: 0.5rem;
        background-color: white;
    }
    #s1{
        position: absolute;
        left: 0.7rem;
        line-height: 0.5rem;
    }
    #s2{
        position: absolute;
        left: 2.3rem;
        line-height: 0.5rem;
    }
     #warp{
        width: 3.55rem;
        padding: 0 0.10rem;
    }
    #p2{
        width: 3.55rem;
        height: 0.40rem;
        line-height: 0.4rem;
        color: #666666;
        font-size: 0.13rem;
        position: relative;
    }
    
    #d1_ro{
        color: #3190e8;
        position: absolute;
        top: 0;
        right: 0;
    }
    /* 红包内容 */
    #xian{
        display: inline-block;
        width: 100%;
        border-top: 0.05rem dotted white;
        border-radius: 0.10rem;
        position: absolute;
        top: -0.03rem;
    }
    #lis{
        width: 100%;
        height: 1rem;
        background-color: white;
        border-radius: 0.10rem;
        margin-top: 0.008rem;
        position: relative;
        border-top: 0.07rem solid red;
    }
    #lis_s1{
        color: red;
        font-size: 0.2rem;
        position: absolute;
        top: 0.40rem;
        left: 0.10rem;
    }
    #lis_s2{
        color: red;
        font-size: 38.9px;
        position: absolute;
        top: 0.24rem;
        left: 0.30rem;
    }
    /* #lis_s3{
        display: inline-block;
        width: 0.0646rem;
        height: 0.0646rem;
        background-color: red;
        position: absolute;
        top: 0.49rem;
        left: 0.53rem;
    } */
    #lis_p1{
        color: #999999;
        font-size: 0.1035rem;
        position: absolute;
        top: 0.70rem;
        left: 0.14rem;
    }
    #lis_p2{
        color: #666666;
        position: absolute;
        top: 0.25rem;
        left: 1.18rem;
    }
    #lis_p3{
        color: #999999;
        font-size: 0.104rem;
        position: absolute;
        top: 0.45rem;
        left: 1.18rem;
    }
    #lis_p4{
        color: #999999;
        font-size: 0.104rem;
        position: absolute;
        top: 0.62rem;
        left: 1.18rem;
    }
    #lis_p5{
        color: #ff5340;
        font-size: 0.175rem;
        position: absolute;
        top: 0.30rem;
        right: 0.10rem;
    }
    /* 查看历史红包 */
    #p3{
        width: 100%;
        height: 1rem;
        color: #999999;
        font-size: 0.13rem;
        text-align: center;
        line-height: 0.58rem;
        margin-top: 0.4rem;
    }
    /* 底部导航栏 */
    #d1{
        display: flex;
        justify-content: space-around;
        width: 3.75rem;
        height: 0.50rem;
        background-color: white;
        margin-top: 0.13rem;
        line-height: 0.50rem;
        position: relative;
    }
    #d1>span{
        color: #555555;
        font-size: 0.18rem;
    }
    #d1_s3{
        height: 0.5rem;
        position: absolute;
        top: 0;
        right: 1.85rem;
        border-right: 1px solid rgba(0, 0, 0, 0.1)
    }
    #zi{
        font-size: 0.1rem;
        position: absolute;
        left: 0.15rem;
        top: 4.7rem;
        color: gray;
    }
    #ss1{
        position:absolute;
        left: 2.8rem;
        top: 0.12rem;
        color: #3190e8
    }
</style>