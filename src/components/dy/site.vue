<template>
    <div id="wai">
        <div id="tou">
            <span @click="zhxx()"><i class="el-icon-arrow-left" id="q1"></i></span>
            <h2 id="q2">编辑地址</h2>
            <h3 id="q3">编辑</h3>
        </div>
        <div id="q4"></div>
        <div id="q5"></div>
        <div id="hou" @click="qwe()"><div id="div4"><p id="p7">新增地址</p><p id="p10">></p></div></div>
        <ul id="qq">
            <li v-for="(v,i) in  this.$store.state.duyan" :key="i" :id="'lis'+i">
                 <p id="p1">{{v.name}}</p>
                <p id="p2">{{v.phone}}</p>
                <span class="el-icon-close del_list" @click="del(i)" id="p3"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"site",
    data() {
        return {
            data:{
                
            },
        }
    },
    methods: {
       zhxx(){
           this.$router.back();
       },
       qwe(){
           this.$router.push({
               path:"xinzeng",
               name:"xinzeng",
               query:{
                     data:this.data,
                }
        }
           )},
        diaoyong(){
            const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.user_id+"/addresses";
            this.$http({
                url:api,
                method:"get",
                data:{
                   
                }
            }).then(res=>{
                console.log(res);
                this.$store.state.duyan = res.data
                // this.list=res.data;
            })
        },
        del(i){
            $("#lis"+i).remove();
            const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.user_id+"/addresses/"+this.address_list[i].id;
            this.$http({
                url:api,
                method:"delete",
                withCredentials:true,
                data:{
                    user_id:this.data.user_id,
                    address_id:this.list[i].id
                }
            }).then(res=>{
                this.getdizhi();
                alert(res.data.success);
                console.log("dahou")
            })
        }
    },
    created() {
     this.data=this.$route.query.data;
     if(this.data = ""){
         this.data=this.$route.store.data;
     }
     console.log(this.data);
      this.diaoyong();
    },
    
}
</script>

<style scoped>
#wai{
  position: relative;
    }
  #tou{
        width: 3.75rem;
        height: 0.5rem;
        background-color: cornflowerblue;
        position: relative;
        color: white;
  }
  #hou{
      background-color:white;
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
        top: 0.1rem;
    }
    #q3{
        position: absolute;
        left: 3.3rem;
        top: 0.15rem;
    }
    #q4,#q5{
        width: 3.75rem;
        height: 0.1rem;
        border-bottom: 0.01rem solid gainsboro
    }
    #div4{
        border-bottom: 0.01rem solid gainsboro;
        width: 3.75rem;
        height: 0.5rem;
        position: relative;
    }
    #p7 {
        position: absolute;
        left: 0.4rem;
        top: 0.15rem;
        font-size: 0.2rem;
        color: black;
    }
    #p10{
        position: absolute;
        left: 3.4rem;
        top: 0.14rem;
        font-size: 0.2rem;
        opacity: 0.5;
        color: black;
    }
    ul{
        width: 3.75rem;
        height: 0.5rem;
        
    }
    li{
       background-color: pink;
       margin-top: 0.1rem;
       overflow: hidden;
    }
    li span{
        float: right;
    }
    /* #p1{
        position: absolute;
        left: 0.15rem;
        top: 0.05rem
    }
    #p2{
        position: absolute;
        left: 0.15rem;
        top: 0.25rem
    } */
    /* #p3{
        position: absolute;
        left: 3rem;
        top: 0.15rem;
        font-size: 0.25rem
    } */
</style>