<template name="component-name">
  <div>
    <nav-component></nav-component>

    <div class="container">
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
    </div>
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
import NavComponent from "./Nav";
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
  components: {
    NavComponent
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
        language;
      requesProject(allParams).then(res => {
        this.count = res.data.count;
        this.list = res.data.data;
      });
    },
    gotoDetail(id) {
      console.log(id);
      this.$router.push({ name: "ProjectDetail", params: { id: id } });
    }
  },
  mounted: function() {
    this.getProject();
  }
};
</script>
<style scoped>
.detail_title {
  color: #a19d91;
  font-size: 3vw;
  padding: 3vw;
  margin-top: 12px;
  text-align: center;
  font-weight: bolder;
}

.show_detail {
  flex-wrap: wrap;
}
.img_link {
  height: 600px;
}
.img_link img {
  padding-bottom: 4vw;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
@media screen and (max-width: 778px) {
  .detail_title {
    font-size: 20px;
    padding: 20px;
  }
  .img_link {
    height: 300px;
  }
}
</style>