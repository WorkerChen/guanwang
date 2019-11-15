<template>
  <div>
    <el-row class="content">
      <NavComponent></NavComponent>
      <h1 class="data_title">动态详情页</h1>
      <el-row class="showImg">
        <el-col :span="24">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="24">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
      </el-row>
    </el-row>
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
.content {
  margin-top: 0;
  padding: 0 16vw;
}
.content .data_title {
  text-align: left;
  padding: 3vw 0;
  font-weight: bolder;
  font-size: 2vw;
  color: #86837a;
}

.content .showImg img {
  width: 100%;
  height: 100%;
}
</style>