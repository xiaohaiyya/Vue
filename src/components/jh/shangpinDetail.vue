<template>
 <div>
     <div id="header">
          <span id="eleme" @click="back()"> <i class="el-icon-arrow-left"></i> </span>
          <span id="login">{{dataReceive.name}}</span>
      </div>
      <img :src="beforeImg+dataReceive.image_path"  alt="" id="imgs">
      <h5 id="niceP">{{dataReceive.description}}</h5>
      <h4 id="p1">{{dataReceive.name}}</h4>
      <h5>评分: <el-rate
  v-model="dataReceive.rating"
  disabled
  show-score
  text-color="#ff9900"
 >
</el-rate></h5>

<span id="price">售价￥{{dataReceive.specfoods[0].price}}起</span>

<h5><p id="des">{{dataReceive.tips}}</p></h5>
 </div>
</template>

<script>
export default {
    name:"shangpinDetail",
    data() {
        return {
            dataReceive:'',
            beforeImg:'//elm.cangdu.org/img/',
        }
    },
    methods: {
        back(){
            this.$router.back()
        }
    },
    created() {
        this.dataReceive = this.$route.query;
        console.log(this.dataReceive)
    },
}
</script>

<style scoped>
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
  top: 0;
  z-index: 10;
}
#header a {
  color: white;
}
#eleme {
  float: left;
}
#imgs{
    margin-top: 0.5rem;
    width: 3.75rem;
}
#p1{
margin: 0.1rem;
}
h5{
    margin: 0.1rem;
}
 #price{
        margin: 0.1rem;
        font-size: 0.13rem;
        color: orangered;
    }
    #des{
        font-size: 0.13rem;
    }
</style>