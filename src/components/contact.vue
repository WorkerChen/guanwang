<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <nav-component></nav-component>
      <el-row>
        <h1 class="detail_title">联络我们</h1>
      </el-row>
      <el-row class="join">
        <h1 class="join_title">咨询/加入我们/设计提案</h1>
        <el-row class="contact_text">
          <el-col class="item" :span="24">邮箱：</el-col>
          <el-col class="item" :span="24">电话：</el-col>
        </el-row>
      </el-row>
      <el-row class="join">
        <h1 class="join_title">购买</h1>
        <el-row class="contact_text">
          <el-col class="item" :span="24">零售电话:</el-col>
          <el-col class="item" :span="24">工程购买:</el-col>
        </el-row>
      </el-row>
      <el-row class="join">
        <h1 class="join_title">合作</h1>
        <el-row class="contact_text">
          <el-col class="item" :span="24">商务合作:</el-col>
          <el-col class="item" :span="24">媒体合作:</el-col>
        </el-row>
      </el-row>
      <el-row class="join">
        <el-row class="way">
          <el-col :span="8" :xs="24">
            <i class="iconfont icon-weixin icon"></i>微信公众号
          </el-col>
          <el-col :span="8" :xs="24">
            <i class="iconfont icon-ins icon"></i>Instagram
          </el-col>
          <el-col :span="8" :xs="24">
            <i class="iconfont icon-weibo icon"></i>微博
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
  padding: 0vw 16vw;
  margin-top: 0;
}
.content .detail_title {
  color: #a19d91;
  font-size: 3vw;
  text-align: center;
  font-weight: bolder;
  padding: 3vw 0;
}
.content .join {
  padding-bottom: 3vw;
}
.content .join .join_title {
  color: #a19d91;
  font-size: 1.5vw;
  text-align: left;
  font-weight: bolder;
}
.content .contact_text {
  padding: 1vw 0;
}
.content .item {
  font-size: 1vw;
  color: #a19d91;
  font-weight: 400;
  line-height: 2vw;
}
.icon {
  font-size: 2vw;
  color: #000;
  vertical-align: middle;
  padding-right: 1vw;
  cursor: pointer;
}
.way {
  color: #a19d91;
}

@media screen and (max-width: 778px) {
  .content .detail_title {
    font-size: 20px;
    padding: 20px;
  }
  .content .join .join_title {
    margin-top: 18px;
    font-size: 18px;
  }
  .content .contact_text {
    padding-top: 2.5vw;
  }
  .content .item {
    line-height: 20px;
  }

  .way {
    line-height: 30px;
  }
}
</style>
