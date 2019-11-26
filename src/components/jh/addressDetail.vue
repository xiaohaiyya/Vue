<template>
  <div>
      <div id="header">
          <router-link to="/address" id="eleme">  <i class="el-icon-arrow-left"></i> </router-link>
          <span id="login">{{detailAddress.name}}</span>
          <router-link to="/address" id="changeCity">切换城市</router-link>
      </div>
      <div id="search">
          <input type="text" v-model="keyWord" placeholder="输入学校、商务楼、地址" id="text"><br>
          <button @click="search()" id="btn">提交</button>
      </div>
      <ul id="searchArea">
         <li v-for="(v,i) in backSearch" :key="i">
           <router-link :to="{name:'jihewenjian',query:v}" >    <p id="weight">{{v.name}}</p></router-link>
         <router-link :to="{name:'jihewenjian',query:v}" >  <p id="qing">{{v.address}}</p></router-link>
          </li>
          
      </ul>
  </div>
</template>

<script>
export default {
    name:'addressDetail',
    data() {
        return {
            detailAddress:'',
            keyWord:'',
            backSearch:''
        }
    },
    methods: {
        saveData(){
            
        },
        search(){
            if(this.keyWord==""){
                alert("请填写搜索关键字");
                return;
            }
            const api = "https://elm.cangdu.org/v1/pois?city_id="+this.detailAddress.id+"&keyword="+this.keyWord;
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                console.log(res);
                this.backSearch = res.data;
            })
        }
    },
    created() {
        this.detailAddress = this.$route.query;
        this.$store.state.id = this.detailAddress.id;
        // console.log(this)
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
}
#header a {
  color: white;
}
#eleme {
  float: left;
}
#changeCity {
  font-size: 0.15rem;
  float: right;
}
#search {
  width: 3.75rem;
  text-align: center;
  margin-top: 0.05rem;
  padding-top: 0.05rem;
  padding-bottom: 0.05rem;
  background: white;
}
#search input {
  width: 2.9rem;
}
#text {
  border: 1px solid gainsboro;
  outline: none;
  height: 0.3rem;
  padding-left: 0.1rem;
}
#btn {
  background-color: #3190e8;
  border-radius: 0.01rem;
  border: 0px;
  width: 3rem;
  margin-top: 0.1rem;
  height: 0.3rem;
  color: white;
}
#searchArea {
  width: 3.42rem;
  height: 7.93rem;
  padding: 0 0.35rem 0 0;
  background-color: #fff;
}
#searchArea li {
  width: 3.42rem;
  height: 0.46rem;
  border-bottom: 0.01rem solid gainsboro;
  font-size: 0.12rem;
  padding: 0.16rem 1rem 0 0.3rem;
  font-weight: 700;
}
#weight {
  color: #555555;
  font-weight: normal;
  font-size: 0.15rem;
  /* border: 0.01rem solid orange; */
  /* margin-bottom: 0.01rem; */
}
#qing {
  font-weight: 300;
  font-size: 0.12rem;
  margin-top: 0.05rem;
  /* letter-spacing: 0.001rem; */
  color: #999999;
}
</style>