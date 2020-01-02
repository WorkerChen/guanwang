<template>
  <div>
    <!-- 内容 -->
    <div class="content">
      <h1 class="about_title">{{$t('about.name')}}</h1>
      <div class="about_text">
        <div v-html="detail" class="text">{{detail}}</div>
      </div>
    </div>
    <!-- <el-row class="content">
      <nav-component></nav-component>
      <el-row>
        <h1 class="detail_title">{{$t('about.name')}}</h1>
      </el-row>
      <el-row></el-row>
      <el-row>
        <el-col class="col_img">
          <div v-html="detail"></div>
          
        </el-col>
      </el-row>
    </el-row>
    </div>-->
    <!-- <img src="../../static/img/box.jpg" alt /> -->
  </div>
</template>
<script>
import { requestDocument } from "../api/api";
export default {
  name: "seriesDetail",

  data() {
    return {
      detail: ""
    };
  },
  methods: {
    getDocument() {
      var language = this.$i18n.locale;
      var allParams = language == "zh" ? "?code=about_cn" : "?code=about_en";
      var allParams = allParams + "&sort=1";
      requestDocument(allParams).then(res => {
        let data = res.data;

        if (data) {
          this.detail = data.detail;
        }
      });
    }
  },
  mounted: function() {
    this.getDocument();
  },
  created() {
    // 控制是否显示导航栏
    this.$bus.on("ChangeLocation", val => {
      this.getDocument();
    });
  }
};
</script>
<style scoped lang="less">
.content {
  .about_title {
    color: #868379;
    display: inline-block;
    margin: 0 auto;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
  }
  .about_text {
    width: 96rem;
    font-size: 1rem;
    margin-top: 6rem;
    color: #868379;
    line-height: 2rem;
    font-weight: 500;
    .text {
      display: inline-block;
      margin: 0 auto;
    }
  }
  .about_img {
    margin-top: 5rem;
    width: 100%;
  }
}
</style>
<style>
.text {
  width: 100%;
  display: block;
  padding: 0 12.4rem;
}
.text p img {
  width: 100%;
}
</style>