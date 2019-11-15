<template name="component-name">
  <div>
    <el-row class="content">
      <NavComponent></NavComponent>
      <h1 class="detail_title">动态</h1>
      <el-row :gutter="16" type="flex" class="show_detail">
        <el-col :span="24">
          <router-link to="/dynamic/dynDetail">
            <img src="../../static/img/zhuan33001.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="24">
          <router-link to="/dynamic/dynDetail">
            <img src="../../static/img/zhuan33001.jpg" alt />
          </router-link>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
export default {
  name: "dynamic",
  components: {
    NavComponent
  }
};
</script>
<style scoped>
.content {
  padding: 0 16vw;
  margin-top: 0;
}
.content .detail_title {
  color: #a19d91;
  font-size: 3vw;
  padding: 3vw 0;
  text-align: center;
  font-weight: bolder;
}
.content .show_detail {
  flex-wrap: wrap;
}
.content .show_detail img {
  padding-bottom: 2vw;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
@media screen and (max-width: 778px) {
  .content .detail_title {
    font-size: 20px;
    padding: 20px;
  }
}
</style>