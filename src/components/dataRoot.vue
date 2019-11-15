<template>
  <div>
    <el-row class="content">
      <NavComponent></NavComponent>
      <h1 class="data_title">资料</h1>
      <el-row type="flex" :gutter="16" class="showImg">
        <el-col :span="12" class="data_img">
          <router-link to="/dataRoot/dataDetail">
            <div class="mask">
              <div class="mask_text">123</div>
            </div>
            <img src="../../static/img/box.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="12" class="data_img">
          <router-link to="/dataRoot/dataDetail">
            <img src="../../static/img/box.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="12" class="data_img">
          <router-link to="/dataRoot/dataDetail">
            <img src="../../static/img/box.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="12" class="data_img">
          <router-link to="/dataRoot/dataDetail">
            <img src="../../static/img/box.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="12" class="data_img">
          <router-link to="/dataRoot/dataDetail">
            <img src="../../static/img/box.jpg" alt />
          </router-link>
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
.content .data_title {
  text-align: center;
  padding: 3vw 0;
  font-weight: bolder;
  font-size: 3vw;
  color: #86837a;
}
.content .showImg {
  flex-wrap: wrap;
}
.content .showImg img {
  padding-bottom: 1vw;
  width: 100%;
  height: 100%;
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
}
@media screen and (max-width: 778px) {
  .content .data_title {
    font-size: 20px;
    padding: 20px;
  }
}
</style>