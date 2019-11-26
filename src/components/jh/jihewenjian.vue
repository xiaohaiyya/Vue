<template>
  <div>
       <transition name="cj" mode="out-in" >
      <router-view></router-view>
    </transition>
      
         <div id="bottom"> 
      <ul>
        <li @click="changecolor(0)" id="li0">
         <router-link to='shouye'> <i class="el-icon-eleme"></i>
          <p>外卖</p> </router-link>
        </li >
        <li @click="changecolor(1)" id="li1">
         <router-link to='search'> <i class="el-icon-odometer"></i>
          <p>搜索</p> </router-link>
        </li>
        <li @click="changecolor(2)" id="li2">
          <router-link to='order'><i class="el-icon-cherry"></i>
          <p>订单</p> </router-link>
        </li>
        <li @click="changecolor(3)" id="li3">
         <router-link to='dyhome'> <i class="el-icon-user"></i>
          <p>我的</p> </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'jihewenjian',
     created() {
        this.$store.state.geohash = this.$route.query.geohash;
        if (this.$route.query.name) {
            this.$store.state.myCity = this.$route.query;
        }
    },
    methods: {
      changecolor(i){
        $("#bottom ul li a").css("color","black");
        $("#bottom ul #li"+i+" a").css("color","#3190e8")
      }
    },
}
</script>

<style scoped>
/* enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"  */
.cj-enter-active{
				animation: bounceInUp 0.5s;

}

#bottom {
  position: fixed;
top: 92%
}
#bottom ul {
  width: 3.75rem;
  height: 8%;
  /* border: 1px solid peru; */
  background-color: #ffffff;
  position: fixed;
  bottom: 0rem;
}
#bottom ul li:first-child a{
  color: #3190e8;
}
#bottom ul li {
  float: left;
  width: 0.9375rem;
  height: 100%;
  padding-top: 0.05rem;
  font-size: 0.234rem;
  text-align: center;
  /* color: #3190e8; */
  /* color: #666666; */
}
#bottom ul li p {
  font-size: 0.12rem;
}
#bottom li a{
    color: black;
}

</style>