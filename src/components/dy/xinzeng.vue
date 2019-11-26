<template>
  <div id="nuwly">
    <div id="tou">
      <span @click="sear()">
        <i class="el-icon-arrow-left" id="q1"></i>
      </span>
      <h2 id="q2">新增地址</h2>
    </div>
    <div id="biao">
      <input v-model="name" type="text" placeholder="请填写你的姓名" />
      <br />
      <input v-model="address" type="text" placeholder="小区/写字楼/学校等" @click="wwe()" />
      <br />
      <input v-model="address_detail" type="text" placeholder="请填写详细送餐地址" />
      <br />
      <input v-model="phone" type="text" placeholder="请填写能够联系到您的手机号" />
      <br />
      <input v-model="phone_bk" type="text" placeholder="备用联系电话（备选）" />
    </div>
    <div id="q3" @click="add_address()">新增地址</div>
  </div>
</template>

<script>
export default {
  name: "xinzeng",
  data() {
    return {
      data: {},
      user_id: "",
      address: "",
      address_detail: "",
      name: "",
      phone: "",
      phone_bk: "",
      geohash: "",
      tag: "tag",
      sex: "1",
      tag_type: "1",
      geo_xinxi: {}
    };
  },
  created() {
    // console.log(this.$route.query.data)
    this.data = this.$route.query.data;
    console.log(this.$route.query.data);
    this.user_id = this.$route.query.data.user_id;
    this.address = this.$route.query.name.name;
    this.geohash = this.$route.query.name.geohash;
    console.log(this.user_id);
  },
  methods: {
    sear() {
      this.$router.back();
    },
    wwe() {
      this.$router.push({
        path: "searchSchool",
        name: "searchSchool",
        query: {
          data: this.data
        }
      });
    },
    add_address() {
      const api =
        "https://elm.cangdu.org/v1/users/" + this.user_id + "/addresses";
      this.$http({
        url: api,
        method: "post",
        data: {
          user_id: this.user_id,
          address: this.address,
          address_detail: this.address_detail,
          geohash: this.geohash,
          name: this.name,
          phone: this.phone,
          tag: this.tag,
          sex: this.sex,
          phone_bk: this.phone_bk,
          tag_type: this.tag_type
        }
      }).then(res => {
        console.log(res.data.success);
      });
    }
  }
};
</script>

<style scoped>
#nuwly {
  position: relative;
}
#tou {
  width: 3.75rem;
  height: 0.5rem;
  background-color: cornflowerblue;
  position: relative;
  color: white;
}
#q1 {
  position: absolute;
  left: 0.05rem;
  top: 0.1rem;
  font-size: 0.3rem;
  color: white;
}
#q2 {
  position: absolute;
  left: 1.4rem;
  top: 0.1rem;
}
#biao {
  width: 3.75rem;
  height: 2.5rem;
  background-color: white;
}
input {
  width: 3.5rem;
  height: 0.4rem;
  border: 0.01rem solid gainsboro;
  margin-left: 0.1rem;
  margin-top: 0.08rem;
  background-color: gainsboro;
}
#q3 {
  width: 3.6rem;
  height: 0.35rem;
  line-height: 0.35rem;
  text-align: center;
  color: white;
  margin-top: 0.15rem;
  background-color: lawngreen;
}
</style>