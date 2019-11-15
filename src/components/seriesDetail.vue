<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <nav-component></nav-component>
      <el-row :span="24">
        <h1>系列名</h1>
      </el-row>

      <el-row class="text" :xs="24">
        <p>独有的特色系列，从天然石材获取的灵感。</p>
        <p>在纹理中洞见时间的沉积，没有开端，也没有终点。</p>
        <p>在有迹可循的动向之中，或是停留，或是变化。</p>
        <p>尘埃从别处破碎，又在此刻凝聚，我们探寻另一种存在。</p>
      </el-row>

      <el-row class="show_pic" type="flex" :gutter="16">
        <el-col class="series_img" :span="8">
          <router-link to="/proDetail">
            <div class="mask">
              <div class="mask_text">123</div>
            </div>
            <img src="../../static/img/dingzhi1.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="8" class="series_img">
          <router-link to="/proDetail">
            <div class="mask">
              <div class="mask_text">123</div>
            </div>
            <img src="../../static/img/dingzhi1.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="8" class="series_img">
          <router-link to="/proDetail">
            <div class="mask">
              <div class="mask_text">123</div>
            </div>
            <img src="../../static/img/dingzhi1.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="8" class="series_img">
          <router-link to="/proDetail">
            <div class="mask">
              <div class="mask_text">123</div>
            </div>
            <img src="../../static/img/dingzhi1.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="8" class="series_img">
          <router-link to="/proDetail">
            <div class="mask">
              <div class="mask_text">123</div>
            </div>
            <img src="../../static/img/dingzhi1.jpg" alt />
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
.series_img:hover .mask {
  opacity: 0.5;
  transition: all 1.5s ease-in-out;
}
.content {
  padding: 0 16vw;
  margin-top: 0;
}
.content h1 {
  padding-top: 2vw;
  font-size: 2vw;
  color: #a19d91;
  font-weight: bolder;
}
.content .text {
  padding: 0 12vw 3vw 12vw;
}
.content .text p {
  color: #a19d91;
  font-size: 0.8vw;
  padding: 1vw 0 0 1vw;
  text-align: left;
}
.show_pic {
  flex-wrap: wrap;
}
.series_img {
  padding-bottom: 1vw;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
}
</style>