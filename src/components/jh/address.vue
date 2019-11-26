<template>
   <div id="address">
      <div id="header">
          <router-link to="/address" id="eleme">eleme</router-link>
          <router-link to="/login" id="login" v-if="!this.$store.state.loginShow">登录|注册</router-link>
           <router-link to="/dyhome" id="login" v-if=" this.$store.state.loginShow" >
        <i class="el-icon-s-custom"></i>
      </router-link>
      </div>
      <ul id="myAddress">
          <li><span>当前定位城市：</span><span id="span2"> 当前定位不准时，请在城市列表中选择</span></li>
          <router-link :to="{name:'addressDetail',query:myAddress}"><li>{{myAddress.name}}<span id="span1"> > </span></li></router-link>
      </ul>
      <ul id="hotAddress">
          <li id="hotHeader">热门城市</li>
          <li v-for="(v,i) in hotAddress" :key="i"><router-link :to="{name:'addressDetail',query:v}">{{v.name}}</router-link></li>
      </ul>
      <div id="holeAddress" v-if="holeAddress">
          <ul v-for="(v,i) in word" :key=i>
               <li id="wordDiv">{{v}}</li>
              <li v-for="(b,j) in holeAddress[v]" :key=j><router-link :to="{name:'addressDetail',query:b}">{{b.name}}</router-link></li>
          </ul>
      </div>
   </div>
</template>

<script>
export default {
    name:'address',
    data() {
        return {
            myAddress:'',
            hotAddress:'',
            holeAddress:'',
            word:['A','B','C','D','E','F','G','H','I','J','K',"L","M",'N','O','P','Q','R','S','T','U',"v",'W','X','Y','Z']
        }
    },
    methods: {
        getMyAddress(){
            let api = 'https://elm.cangdu.org/v1/cities?type=guess';
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                this.myAddress=res.data;
            })
        },
        getHotAddress(){
            let api = 'https://elm.cangdu.org/v1/cities?type=hot'
            this.$http({
                url:api,
                method:'get',
            }).then(res=>{
                this.hotAddress = res.data;
            })
        },
        getHoleAddress(){
            let api = 'https://elm.cangdu.org/v1/cities?type=group';
            this.$http({
                url:api,
                method:'get',

            }).then(res=>{
                this.holeAddress = res.data;
            })
        }
    },
    created() {
        this.getMyAddress();
        this.getHotAddress();
        this.getHoleAddress();
    },
}
</script>

<style scoped>
   #header{
       overflow: hidden;
       background-color:#3190e8;
       height: 0.5rem;
       width: 3.55rem;
       font-size: 0.2rem;
       line-height: 0.5rem;
       padding-left: 0.1rem;
       padding-right: 0.1rem;
   }
   #eleme{
       float: left;
   }
   #login{
       float: right;
   }
   #header a{
       color: white;
   }
   #myAddress li{
        padding-left: 0.1rem;
       padding-right: 0.1rem;
        width: 3.55rem;
       border-bottom: 1px solid gainsboro;
       height: 0.5rem;
       line-height: 0.5rem;
       overflow: hidden;
       background-color: #fff;
   }
   #myAddress a{
       color: #3190e8;
        font-size: 0.2rem;
        overflow: hidden;
   }
   #span1{
       float: right;
       color: black;
   }
   #span2{
       font-size: 0.12rem;
       float: right;
       font-weight: 200;
   }
   #hotAddress li{
       border-bottom: 1px solid gainsboro;
       float: left;
       width: 0.928rem;
       height: 0.4rem;
       text-align: center;
       line-height: 0.4rem;
       border-right: 1px solid gainsboro;
       color: #3190e8;
       background-color: #fff;
   }
   #hotAddress li a{
       color: #3190e8;
   }
   #hotAddress #hotHeader{
       width: 3.65rem;
       padding-left: 0.1rem;
       text-align: left;
       border-right: 0px;
   }
   #holeAddress li{
       border-bottom: 1px solid gainsboro;
       float: left;
       width: 0.928rem;
       height: 0.4rem;
       text-align: center;
       line-height: 0.4rem;
       border-right: 0.01rem solid gainsboro;
       color: #3190e8;
       overflow: hidden;
       background-color: #fff;
   }
    #holeAddress #wordDiv{
       margin-top: 0.05rem;
       padding-left: 0.1rem;
       width: 3.64rem;
        text-align: left;
        color: black;
   }
   #holeAddress a{
       color: black;
       font-weight: 300;
   }
</style>