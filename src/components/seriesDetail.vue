<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <nav-component></nav-component>
      <el-row :span="24">
        <h1>{{title}}</h1>
      </el-row>

      <!-- <el-row class="text" :xs="24" v-html="detail">
        
      </el-row>-->
      <el-row v-html="detail" class="type_detail">
        <!-- <div ></div> -->
      </el-row>

      <el-row class="show_pic" type="flex" :gutter="16">
        <el-col class="series_img" :span="8" v-for="item in list" v-bind:key="item.id">
          <router-link
            :to="{ name: 'proDetail', params: { id: item.id,title ,Did}}"
            class="link_img"
          >
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.cover" alt />
          </router-link>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
import { requestType } from "../api/api";
export default {
  name: "seriesDetail",
  components: {
    NavComponent
  },
  data() {
    return {
      title: "",
      detail: "",
      list: [],
      Did: ""
    };
  },
  methods: {
    getType() {
      console.log(this.$route.params.id);
      var allParams = "?id=" + this.$route.params.id;
      this.Did = this.$route.params.id;
      requestType(allParams).then(res => {
        console.log(res.data);
        this.title = res.data.title;
        this.detail = res.data.description;
        this.list = res.data.products;
      });
    }
  },
  mounted: function() {
    this.getType();
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
.content .type_detail {
  padding: 40px 0;
  padding-left: 255px;
  line-height: 40px;
  color: #a19d91;
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
.link_img {
  width: 100%;
  height: 100%;
}
</style>