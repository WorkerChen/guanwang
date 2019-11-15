<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <nav-component></nav-component>
      <el-row>
        <h1 class="detail_title">系列名</h1>
      </el-row>
      <el-row class="text">
        <p>独有的特色系列，从天然石材获取的灵感。</p>
        <p>在纹理中洞见时间的沉积，没有开端，也没有终点。</p>
        <p>在有迹可循的动向之中，或是停留，或是变化。</p>
        <p>尘埃从别处破碎，又在此刻凝聚，我们探寻另一种存在。</p>
      </el-row>
      <el-row :gutter="16">
        <el-col class="detail_img" :span="24">
          <router-link to="/series/seriesType/seriesDetail">
            <img src="../../static/img/zhuan33001.jpg" alt />
          </router-link>
        </el-col>
        <el-col :span="24">
          <router-link to="/series/seriesType/seriesDetail">
            <img src="../../static/img/zhuan33001.jpg" alt />
          </router-link>
        </el-col>
      </el-row>

      <el-row class="use_projuct">
        <h1 class="detail_title">使用的产品</h1>
        <el-row :gutter="20" type="flex" class="flex_img">
          <el-col :span="6" :xs="12">
            <router-link to="/projuect">
              <img src="../../static/img/box.jpg" alt />
            </router-link>
          </el-col>
          <el-col :span="6" :xs="12">
            <img src="../../static/img/box.jpg" alt />
          </el-col>
          <el-col :span="6" :xs="12">
            <img src="../../static/img/box.jpg" alt />
          </el-col>
          <el-col :span="6" :xs="12">
            <img src="../../static/img/box.jpg" alt />
          </el-col>
        </el-row>
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
  text-align: left;
  font-weight: bolder;
  padding-top: 5vw;
}
.content .text {
  padding: 0 12vw 3vw 12vw;
  font-size: 0.8vw;
}
.content .text p {
  color: #a19d91;
  padding: 1vw 0 0 1vw;
  text-align: left;
}
.detail_img {
  padding-bottom: 2vw;
}
img {
  width: 100%;
  height: 100%;
  padding-bottom: 4vw;
}
.flex_img {
  flex-wrap: wrap;
}
</style>