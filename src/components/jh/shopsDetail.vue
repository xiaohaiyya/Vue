<template>
    <div>
        <div id="head">
            <span id="eleme" @click="back()"> <i class="el-icon-arrow-left"></i> </span>
            <img :src="beforeIMg+dataHeader.image_path" alt="" >
            <span id="title">{{dataHeader.name}}</span><br>
            <span id="right" @click="tiaozhuan()"> > </span>
            <span id="tips">商家配送 / 分钟必达 / {{dataHeader.piecewise_agent_fee.tips}}</span><br>
            <span id="gonggao">公告：{{dataHeader.promotion_info}}</span>
        </div>
        <div id="baikuang">
            <router-link :to="{name:'shangpin',query:dataHeader}">商品</router-link>
            <router-link :to="{name:'pingjia',query:dataHeader}">评价</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'shopsDetail',
    data() {
        return {
            beforeIMg:'//elm.cangdu.org/img/',
            dataHeader:'',
            
        }
    },
    created() {
        console.log(this.$route.query);
        if (this.$route.query.id) {
            this.dataHeader = this.$route.query;
        }
        
        // this.getliebiaoData();
    },
    methods: {
         back(){
            this.$router.back()
        },
        tiaozhuan(){
            this.$router.push({
                name:"shangjiaxiangqing",
                query:this.dataHeader
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
background-color:gray;
padding-top: 0.1rem;
padding-bottom: 0.1rem;
}
    #head img{
        width: 0.5rem;
        float: left;
        margin-right: 0.05rem;
    }
    #title{
        font-weight: 600;
        letter-spacing: 0.01rem;
        font-size: 0.16rem;
    }
    #tips{
        font-size: 0.1rem;
         letter-spacing: 0.01rem;
         margin-top: 0.01rem;
         margin-bottom: 0.05rem;
    }
    #gonggao{
        font-size: 0.1rem;
        letter-spacing: 0.02rem;
    }
    #right{
        float: right;
    }
    #baikuang{
        width: 3.75rem;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.15rem;
        background-color: white;
    }
    #baikuang a{
        display: inline-block;
        width:1.8rem ;
        text-align: center;
        color: black;
    }
    #eleme{
        position: absolute;
        left: 0.01rem;
        top: 0.25rem;
    }
</style>