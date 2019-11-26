<template>
  <div>
      <div id="header">
          <span id="eleme" @click="back()"> <i class="el-icon-arrow-left"></i> </span>
          <span id="login">订单备注</span>
      </div>
      <div id="beizhu">
          <h4>快速备注</h4>
          <ul v-for="(v,i) in tasteData" :key="i" :id="'uls'+i">
              <li v-for="(b,j) in v" :key="j" :id="'lis'+j" @click="liColor(i,j,b)">
            {{b}}{{i}}{{j}}
              </li>
          </ul>
      </div>
      <div id="others">
          <p>其他备注</p>
          <input type="text" v-model="inpData" placeholder="请输入备注内容（可不填）">
          
      </div>
      <button id="btn" @click="btn()">确定</button>
  </div>
</template>

<script>
export default {
    name:"taste",
    data() {
        return {
            tasteData:'',
            inpData:'',
            dataPush:[]
        }
    },
    methods: {
        getTasteData(){
            const api = 'https://elm.cangdu.org/v1/carts/1/remarks';
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                this.tasteData = res.data.remarks;
            })
        },
        back(){
            this.$router.back();
        },
        liColor(i,j,b){
            $("#uls"+i+" li").css({
                color:"black",
                background:"white"
            });
             $("#uls"+i+" #lis"+j).css({
                color:"white",
                background:"#3190e8"
            });
            console.log(i)
            console.log(b)
            this.dataPush[i] = b;
            console.log(this.dataPush);
        },
        btn(){
                this.$router.push({
                    name:"sureShopping",
                    params:{
                        dataPush:this.dataPush,
                        inpData:this.inpData
                    }
                })
        }
    },
    created() {
        this.getTasteData()
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
       color: white;
       overflow: hidden;
       text-align: center;
   }
   #header a{
       color: white;
   }
   #eleme{
        float: left;
    }
    #beizhu{
        background-color: #fff;
        margin-top: 0.1rem;
        padding-left: 0.2rem;
        padding-top: 0.2rem;
        padding-bottom: 0.3rem;
    }
  ul{
      display: inline-block;
      overflow: hidden;
      border: 0.02rem solid #3190e8;
      border-radius: 0.03rem;
      margin: 0.1rem;
      border-right: 0;
  }
  ul li{
      display: inline-block;
      float: left;
      width: 0.8rem;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      border: 0.02rem solid #3190e8;
      border-left: 0 solid #000;
      border-top: 0 solid #000;
      border-bottom: 0 solid #000;
  }
  #others{
      /* text-align: center; */
      background-color: #fff;
      margin-top: 0.1rem;
      padding-left: 0.2rem;
  }
   #others input{
       margin-left: 0.3rem;
       margin-top: 0.1rem;
       font-size: 0.15rem;
       width: 2.8rem;
       height: 1.2rem;
       border: 0.01rem solid gainsboro;
       margin-bottom: 0.3rem;
   }
   #btn{
       margin-left: 0.5rem;
       width: 2.8rem;
       height: 0.5rem;
       border: 0px;
       outline: none;
       background-color: #4cd964;
       color: white;
       font-size: 0.15rem;
       letter-spacing: 0.05rem;
   }
</style>