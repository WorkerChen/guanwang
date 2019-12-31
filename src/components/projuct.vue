<template name="component-name">
  <div>
    <div class="content">
      <h1 class="pro_title">项目</h1>
      <div class="pro_item">
        <div class="item" v-for="item in list" :key="item.id">
          <router-link :to="{name: 'ProjectDetail', query: { id: item.id }}" class="img_link">
            <img v-bind:src="item.cover" />
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <div class="row">
        <h1 class="detail_title">项目</h1>
      </div>
      <div class="row">
        <div v-for="item in list" :key="item.id" class="link_img">
          <router-link :to="{name: 'ProjectDetail', params: { id: item.id }}" class="img_link">
            <img v-bind:src="item.cover" />
          </router-link>
        </div>
      </div>
    </div>-->
    <!-- <el-row class="content">
      <NavComponent></NavComponent>
      <h1 class="detail_title">项目</h1>
      <el-row :gutter="16" type="flex" class="show_detail">
        <el-col :span="24">
          <router-link to="/projuct/projuctDetail">
            <img src="../../static/img/zhuan33001.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="24">
          <router-link to="/projuct/projuctDetail">
            <img src="../../static/img/zhuan33001.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="24">
          <router-link to="/projuct/projuctDetail">
            <img src="../../static/img/zhuan33001.jpg" alt />
          </router-link>
        </el-col>
      </el-row>
    </el-row>-->
  </div>
</template>
<script>
import { requesProject } from "../api/api";
export default {
  name: "seriesDetail",
  data() {
    return {
      count: 0,
      limit: 10,
      currentPage: 1,
      list: []
    };
  },

  methods: {
    getProject() {
      var language = this.$i18n.locale == "zh" ? "1" : "2";
      var allParams =
        "?page=" +
        this.currentPage +
        "&limit=" +
        this.limit +
        "&language=" +
        language +
        "sort=1";
      requesProject(allParams).then(res => {
        if (res.data == "{}") {
          let that = this;
          this.$alert("暂无产品信息", "消息", {
            confirmButtonText: "返回",
            callback: function() {
              that.$router.back(-1);
            }
          });
        }
        this.count = res.data.count;
        this.list = res.data.data;
      });
    }
  },
  mounted: function() {
    this.getProject();
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
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>