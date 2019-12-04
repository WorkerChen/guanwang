<template name="component-name">
  <div>
    <nav-component></nav-component>
    <div class="content">
      <h1 class="pro_title">记录</h1>
      <div class="pro_item">
        <div class="item" v-for="item in list" v-bind:key="item.id">
          <img v-bind:src="item.cover" alt @click="gotoDetail(item.id)" />
        </div>
      </div>
    </div>
    <!-- <el-row class="content">
      <NavComponent></NavComponent>
      <h1 class="detail_title">{{$t('moments.name')}}</h1>
      <el-row :gutter="16" type="flex" class="show_detail" >
        <el-col :span="24" v-for="item in list" v-bind:key="item.id">
          <router-link to="/dynamic/dynDetail">
            <img v-bind:src="item.cover" alt @click="gotoDetail(item.id)"/>
          </router-link>
        </el-col>
       
      </el-row>
    </el-row>-->
  </div>
</template>
<script>
import NavComponent from "./Nav";
import { requestMoments } from "../api/api";
export default {
  name: "dynamic",
  components: {
    NavComponent
  },
  data() {
    return {
      count: 0,
      limit: 10,
      currentPage: 1,
      list: []
    };
  },
  methods: {
    getList() {
      var language = this.$i18n.locale == "zh" ? "1" : "2";
      var allParams =
        "?page=" +
        this.currentPage +
        "&limit=" +
        this.limit +
        "&language=" +
        language +
        "sort=1";
      requestMoments(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },
    gotoDetail(id) {
      console.log(id);
      this.$router.push({ name: "dynDetail", query: { id: id } });
    }
  },
  mounted: function() {
    this.getList();
  },
  created() {
    // 控制是否显示导航栏
    this.$bus.on("ChangeLocation", val => {
      this.getList();
    });
  }
};
</script>
<style scoped lang="less">
.content {
  padding: 0 15rem;
  margin-top: 5.1rem;
  .pro_title {
    width: 100%;
    text-align: center;
    font-size: 2.6rem;
    color: #86837a;
    font-weight: bolder;
  }
  .pro_item {
    margin-top: 7rem;
    width: 100%;
    .item {
      width: 100%;
      height: 28rem;
      margin-bottom: 1.1rem;

      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>