<template>
    <div>
        <div id="head">
            <span id="eleme"  @click="bacllk() "> <i class="el-icon-arrow-left"></i> </span>
            <span id="title">食品监督安全公示</span>
        </div>
        <h3>食品监督安全公示</h3>
        <div id="p2">
                   <p>监督检查结果：<span>良好</span></p>    
                   <p>检查日期：</p>
               </div>
        <h3>工商登记信息</h3>     
        <div id="info">
            <h5>企业名称</h5>
            <h5>工商执照注册号</h5>
            <h5>注册资本</h5>
            <h5>注册地址</h5>
            <h5>属地监管人</h5>
            <h5>法定代表人</h5>
            <h5>经营范围</h5>
            </div>  
            <h3>餐饮许可证</h3>     
        <div id="info">
            <h5>营业范围</h5>
            <h5>许可证有效期</h5>
            <h5>许可证号</h5>
            <h5>发证时间</h5>
            <h5>发证机关</h5>
            
            </div>  
    </div>
    
</template>

<script>
export default {
    name:"safegongshi",
    methods: {
        bacllk(){
       this.$router.back()
    },
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
    #p2{
    height: 0.5rem;
    line-height: 0.25rem;
    overflow: hidden;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    border-top: 0.01rem solid #ddd;
    background-color: #fff;
    margin-bottom: 0.1rem;
}
h3{
    height: 0.4rem;
   
    background-color: #fff;
    line-height: 0.4rem;
    padding-left: 0.2rem;
}
#p2 span{
    color: rgb(126, 211, 33);
}
#info{
    background-color: #fff;
    border-top: 0.01rem solid #ddd;
    margin-bottom: 0.1rem;
}
#info h5{
    height: 0.4rem;
    line-height: 0.4rem;
    padding-left: 0.2rem;
}
</style>