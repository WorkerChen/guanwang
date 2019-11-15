<template name="component-name">
  <div>
    <nav-component></nav-component>

    <div class="container">
      <div class="row">
        <h1 class="detail_title">项目</h1>
      </div>
      <div class="row">
        <router-link to="/projuct/projuctDetail" class="img_link">
          <img src="../../static/img/zhuan33001.jpg" />
        </router-link>
        <router-link to="/projuct/projuctDetail" class="img_link">
          <img src="../../static/img/zhuan33001.jpg" />
        </router-link>
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
export default {
  name: "seriesDetail",
  components: {
    NavComponent
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
.img_link img {
  padding-bottom: 4vw;
  width: 100%;
  cursor: pointer;
}
@media screen and (max-width: 778px) {
  .detail_title {
    font-size: 20px;
    padding: 20px;
  }
}
</style>