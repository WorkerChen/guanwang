<template name="component-name">
  <div>
    <el-row class="content">
      <NavComponent></NavComponent>
      <h1 class="detail_title">目录册</h1>
      <el-row :gutter="16" type="flex" class="show_detail">
        <el-col :span="8" class="data_img">
          <div class="mask">
            <div class="mask_text">123</div>
          </div>
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="8" class="data_img">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="8" class="data_img">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="8" class="data_img">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="8" class="data_img">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="8" class="data_img">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="8" class="data_img">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="8" class="data_img">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="8" class="data_img">
          <img src="../../static/img/box.jpg" alt />
        </el-col>
        <el-col :span="8" class="data_img">
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
  padding: 0 16vw;
  margin-top: 0;
}
.content .detail_title {
  color: #a19d91;
  font-size: 2vw;
  padding: 6vw 0;
  text-align: left;
  font-weight: bolder;
}
.content .show_detail {
  flex-wrap: wrap;
}
.content .show_detail img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  border: 7.5px solid #ffffff;
  border-top: 0;
  border-bottom: 1vw solid #ffffff;
  right: 0;
  bottom: 0;
  background: #000000;
  opacity: 0;
  width: 100%;
  height: 100%;
}
.mask_text {
  color: #ffffff;
  position: absolute;
  font-size: 4vw;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
}
.data_img:hover .mask {
  opacity: 0.5;
  transition: all 1.5s ease-in-out;
}
.data_img {
  position: relative;
  padding-bottom: 1vw;
}
</style>