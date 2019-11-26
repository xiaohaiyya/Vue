<!--CDY-->
<template>
  <div>
    <!-- 1.选择地址 -->
    <div id="top">
      <p>
        <!-- <router-link to="/search"> <i class="el-icon-arrow-left"></i></router-link> -->
        <i class="el-icon-arrow-left" @click="back()"></i>
        <span>添加地址</span>
      </p>
    </div>
    <!-- 2.下面内容 -->
    <div id="content">
      <!-- a.联系人 -->
      <div id="first">
        <span id="people">联系人</span>
        <input type="text" name="你的名字" placeholder="你的名字" v-model="name" />
        <div id="choose">
          <span id="left">
            <el-radio v-model="sex" label="1">
              <span id="men">先生</span>
            </el-radio>
          </span>
          <span id="right">
            <el-radio v-model="sex" label="2">
              <span id="women">女士</span>
            </el-radio>
          </span>
        </div>
      </div>
      <!-- b.联系电话 -->
      <div id="second">
        <span id="tel">联系电话</span>
        <input type="text" placeholder="你的手机号" v-model="telephone" />
        <i class="el-icon-plus" @click="chuxian(show)"></i>
        <input type="text" id="beixuan" placeholder="备选电话" v-model="phone_bk" />
      </div>
      <!-- c.送餐地址 -->
      <div id="third">
        <p id="foodAddress">送餐地址</p>
        <router-link to="/searchSchool" >
          <div id="school" v-if="this.$store.state.addressName">{{this.$store.state.addressName}}</div>
          <div id="school"  v-else>小区/写字楼/学校等</div>
        </router-link>
       
         
        <input type="text" placeholder="详细地址（如门牌号等）" id="third_inp" v-model="address_detail" />
      </div>
      <!-- d.标签 -->
      <div id="fourth">
        <span id="tags">标签</span>
        <input type="text" placeholder="无/家/学校/公司" v-model="tag_type" />
      </div>
    </div>
    <!-- 3.底部确定按钮 -->
    <span>
      <el-button type="success" id="button" @click="SureBtn()">确定</el-button>
    </span>
    <!-- 4.弹出框 -->
    <div id="popup">
      <i class="el-icon-warning-outline"></i>
      <p id="alert">密码修改成功</p>
      <button id="sure" @click="close()">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addAddress",
  data() {
    return {
      sex: "1",
      show: true,
      name: "",
      telephone: "",
      address_detail: "",
      tag_type: "",
      phone_bk: "",
      queryName:"",
      addressData:''
    };
  },
  created() {
    this.addressData = this.$route.query.name;
    
  },
  methods: {
    back() {
      this.$router.back();
    },
    SureBtn() {
      console.log(this.$store.state.user_id)
      const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.user_id+"/addresses";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          user_id:this.$store.state.user_id,
          name: this.name,
          phone : this.telephone,
          address_detail: this.address_detail,
          tag_type: this.tag_type,
          phone_bk: this.phone_bk,
          address: this.$store.state.addressName,
          sex:this.sex,
          tag:this.tag_type,
          geohash:this.$store.state.geohash    

        }
      }).then(res => {
        console.log(res);
       this.$store.state.theAddress.push(res.data);
        this.$store.state.loginShow = false;
        

        var popUp = document.getElementById("popup");
        var alert = document.getElementById("alert");
        if (res.data.message) {
          //   alert(res.data.message);
          alert.innerText = res.data.message;
          popUp.style.display = "block";
          //   return;
        } else {
          alert.innerText = res.data.success;
          popUp.style.display = "block";
        }
      });
    },
    close() {
      var sure = document.getElementById("sure");
      var popUp = document.getElementById("popup");
      popUp.style.display = "none";
    },
    chuxian() {
      var beixuan = document.getElementById("beixuan");
      if (this.show == true) {
        beixuan.style.display = "block";
        this.show = false;
      } else {
        beixuan.style.display = "none";
        this.show = true;
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 1.搜索 */
#top p {
  width: 3.75rem;
  height: 0.45rem;
  /* border: 1px solid peru; */
  text-align: center;
  color: #ffffff;
  background: #3190e8;
  overflow: hidden;
  line-height: 0.45rem;
  position: fixed;
  top: 0;
}
#top p .el-icon-arrow-left {
  line-height: 0.45rem;
  font-size: 0.24rem;
  float: left;
}
/* 2.第二部分 */
#content {
  width: 3.42187rem;
  margin-top: 0.45rem;
  padding: 0.16406rem;
  background-color: #ffffff;
}
#content #first #people {
  width: 0.97776rem;
  height: 1.17172rem;
  /* border: olivedrab 0.005rem solid; */
  color: #666666;
  padding-right: 0.4rem;
}
#content #first input {
  width: 2.44422rem;
  height: 0.58594rem;
  border-bottom: #e9e6e6 0.005rem solid;
  color: #666666;
}
#choose {
  width: 2.44422rem;
  height: 0.58594rem;
  line-height: 0.5859rem;
  margin-left: 0.94rem;
  border-bottom: #e9e6e6 0.005rem solid;
}
/* 2.联系电话 */
#second {
  border-top: #e9e6e6 0.005rem solid;
  border-bottom: #e9e6e6 0.005rem solid;
}
#second #tel {
  width: 0.9777rem;
  height: 0.5859rem;
  /* border: olivedrab 0.005rem solid; */
  margin-right: 0.2rem;
  color: #666666;
  /* padding: 1rem; */
}
#second input {
  width: 2.2442rem;
  height: 0.5859rem;
  /* margin-left: 0.94rem; */
  border-bottom: #e9e6e6 0.005rem solid;
  /* border: olivedrab 0.005rem solid; */
}
#second .el-icon-plus {
  color: #3190e8;
  font-size: 0.2rem;
}
#second #beixuan {
  display: none;
  margin-left: 0.9rem;
}
/* 3.送餐地址 */
#third {
  border-bottom: #e9e6e6 0.005rem solid;
}
#third #foodAddress {
  color: #666666;
  display: inline;
}
#third #school {
  margin-left: 0.3rem;
  line-height: 0.5859rem;
  font-size: 0.12rem;
  color: #666666;
  display: inline;
}
#third input {
  width: 2.2442rem;
  height: 0.5859rem;
  margin-left: 1rem;
}
#third #third_inp {
  border-top: #e9e6e6 0.005rem solid;
  border-bottom: #e9e6e6 0.005rem solid;
  margin-left: 1rem;
}
/* 4.标签 */
#fourth {
  margin-left: 0.1rem;
  /* border-bottom: #e9e6e6 0.005rem solid; */
}
#fourth #tags {
  width: 0.9777rem;
  height: 0.5859rem;
  /* border: olivedrab 0.005rem solid; */
  margin-right: 0.45rem;
  color: #666666;
  /* padding: 1rem; */
}
#fourth input {
  width: 2.2442rem;
  height: 0.5859rem;
}
/* 5.底部点击按钮 */
#button {
  width: 3.42188rem;
  height: 0.42rem;
  margin: 0.14063rem 0.16406rem 0 0.1406rem;
}
/* 6.弹出框 */
#popup {
  width: 2.8125rem;
  height: 1.8488rem;
  /* border: #3190e8 solid 1px; */
  position: fixed;
  top: 2rem;
  left: 0.46875rem;
  background: #ffffff;
  text-align: center;
  padding-top: 0.1426rem;
  display: none;
}
#popup .el-icon-warning-outline {
  font-size: 0.7031rem;
  color: #f8cb86;
}
#popup p {
  height: 0.21rem;
  /* border: #3190e8 solid 1px; */
  margin-top: 0.1875rem;
  margin-left: 0.12rem;
  font-size: 0.17rem;
}
#popup #sure {
  width: 2.8125rem;
  height: 0.45rem;
  border: 0px;
  border-radius: 0.05rem;
  color: white;
  background-color: #4cd964;
  font-size: 0.16rem;
  margin-top: 0.26rem;
}
</style>