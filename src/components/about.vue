<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <nav-component></nav-component>
      <el-row>
        <h1 class="detail_title">{{$t('about.name')}}</h1>
      </el-row>
      <el-row></el-row>
      <el-row>
        <el-col class="col_img">
          <div v-html="detail"></div>
          <!-- <img src="../../static/img/box.jpg" alt /> -->
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
import { requestDocument } from "../api/api";
export default {
  name: "seriesDetail",
  components: {
    NavComponent
  },
  data() {
    return {
      detail: ""
    };
  },
  methods: {
    getDocument() {
      var language = this.$i18n.locale;
      var allParams = language=="zh"?"?code=about_cn":"?code=about_en";
      requestDocument(allParams).then(res => {
        console.log(res);
        let data = res.data;
        console.log(data);
        if (data) {
          this.detail = data.detail;
        }
      });
    },
    
  },
  mounted: function() {
    this.getDocument();
  },
  created() {
    // 控制是否显示导航栏
    this.$bus.on("ChangeLocation", val => {
      this.getDocument();
    });
  },
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
.content .col_img img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 778px) {
  .content .detail_title {
    font-size: 20px;
    padding: 20px;
  }
}
</style>