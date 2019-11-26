<template>
<div>
    <div id="head">
            <span id="eleme"  @click="bacllk() "> <i class="el-icon-arrow-left"></i> </span>
            <span id="title">商家详情</span>
        </div>
        <h3 >活动与属性</h3>
        <div id="huodong">
            <ul>
                <li v-for="(v,i) in shuxingData.supports" :key="i">
                    <span id="jingpin" :style="'background:#'+v.icon_color">
                        {{v.icon_name}}
                    </span>
                   <h5>{{v.description}}</h5> 
                </li>
            </ul>
        </div>
        <div id="safe">
               <div><h3 id="h3">食品监督安全公示</h3> <span>企业认证详情<i class="el-icon-arrow-right el-icon--right" @click="push()"></i></span> </div>   
               <div id="p2">
                   <p>监督检查结果：<span>良好</span></p>    
                   <p>检查日期：</p>
               </div>
               

        </div>
        <h3>商家信息</h3>
        <h4>效果演示</h4>
        <h4 id="spe">地址：{{dataHeader.address}}</h4>
          <h4>营业时间：{{dataHeader.opening_hours}}</h4>
            <h4>营业执照</h4>
              <h4>餐饮服务许可证</h4>
                
</div>
</template>

<script>
export default {
name:"shangjiaxiangqing",
data() {
    return {
        dataHeader:'',
        shuxingData:''
    }
},
created() {
    this.dataHeader = this.$route.query;
    this.getshuxingData();
},
methods: {
    getshuxingData(){
        const api = 'https://elm.cangdu.org/shopping/restaurant/'+this.dataHeader.id;
        this.$http({
            url:api,
            method:"get"
        }).then(res=>{
            console.log(res);
            this.shuxingData = res.data;
        })
    },
    bacllk(){
       this.$router.back()
    },
    push(){
        this.$router.push({
            name:'safegongshi'
        })
    }
},
}
</script>

<style scoped>
#head{
overflow: hidden;
padding-left: 0.2rem;
padding-right: 0.2rem;
width: 3.35rem;
color: white;
background-color:#3190e8;
height: 0.3rem;
padding-top: 0.1rem;
padding-bottom: 0.1rem;
text-align: center;
}
 #title{
        font-weight: 600;
        letter-spacing: 0.01rem;
        font-size: 0.16rem;
        line-height: 0.3rem;
    }
    #eleme{
        position: absolute;
        left: 0.01rem;
        top: 0.15rem;
    }
h3{
    height: 0.4rem;
    margin-top: 0.1rem;
    background-color: #fff;
    line-height: 0.4rem;
    padding-left: 0.2rem;
    /* border-bottom: 0.01rem solid rgba(51, 51, 51, 0.13); */
}
li{
    margin-left: 0.2rem;
    height: 0.3rem;
    font-size: 0.15rem;
}
#huodong{
    background-color: #fff;
    padding-top: 0.13rem;
    padding-bottom: 0.13rem;
}
#jingpin{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    color: white;
    font-size: 0.12rem;
    text-align: center;
    line-height: 0.2rem;
    border-radius: 0.03rem;
    margin-right: 0.12rem;
}
h5{
    display: inline-block;
}
#safe{
    width: 3.75rem;
    margin-right: 0.1rem;
    background-color: #fff;
}
h4{
    height: 0.4rem;
    line-height: 0.4rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-bottom:0.01rem solid #ddd;
}
#spe{
    height: 0.5rem;
    line-height: 0.25rem;
}
#h3{
    display: inline-block;
    margin-right: 0.8rem;
}
#p2{
    height: 0.5rem;
    line-height: 0.25rem;
    overflow: hidden;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    border-top: 0.01rem solid #ddd;
}
#huodong{
    border-top: 0.01rem solid #ddd;
}
#p2 span{
    color: rgb(126, 211, 33);
}
</style>