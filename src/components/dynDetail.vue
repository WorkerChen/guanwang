<template>
  <div>
    <div class="content">
      <h1 class="dyn_title" v-if="this.isPc()==1">{{title}}</h1>
      <h1 class="dyn_title_mobile" v-if="this.isPc()==2">{{title}}</h1>
      <div class="dyn_item">
        <div class="text" v-html="detail"></div>
        <!-- <div class="item_img">
          <div class="item">
            <img :src="cover" alt />
          </div>
        </div> -->
      </div>
    </div>
    <!-- <el-row class="content">
      <h1 class="data_title">{{title}}</h1>
      <el-row class="showImg">
        <el-col :span="24">
          <div v-html="detail"></div>
        </el-col>
        
      </el-row>
    </el-row>-->
    <!-- <el-col :span="24">
          <img src="../../static/img/box.jpg" alt />
    </el-col>-->
  </div>
</template>
<script>
import { requestMoment } from "../api/api";
export default {
  data() {
    return {
      id: 0,
      title: "",
      detail: "",
      cover: ""
    };
  },
  methods: {
    getMoment() {
      console.log(this.$route.query.id);
      var allParams = "?id=" + this.$route.query.id;
      requestMoment(allParams).then(res => {
        if (res.data == "{}") {
          this.$message({
            message: "请求失败",
            type: "error"
          });
        } else {
          console.log(res.data);
          this.title = res.data.title;
          this.detail = res.data.detail;
          this.cover = res.data.cover;
        }
      });
    }
  },
  mounted: function() {
    this.getMoment();
  }
};
</script>
<style scoped lang="less">
.content {
  padding: 0 15rem;
  width: 96rem;
  margin-top: 5.1rem;
  overflow: hidden;
  .dyn_title {
    font-size: 2.5rem;
    color: #86837a;
    font-weight: bolder;
  }
  .dyn_title_mobile {
    font-size: 4rem;
    color: #86837a;
    font-weight: bolder;
  }
  .dyn_item {
    width: 100%;
    margin-top: 2.4rem;
    color: #86837a;
    .text {
      display: inline-block;
      margin: 0 auto;
      padding: 0;
      p {
        
        img {
          width: 100%;
        }
      }
    }
    .item_img {
      
      margin-top: 5rem;
      width: 100%;
      .item {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
<style>
.text p span {
  width: 100%;
  display: block;
  padding: 0 12.4rem;
}
.text p img {
  width: 100%;
  height: 100%;
}
p {
   margin: 0 0 0 10px;
    margin-block-end: 0em;
    
}
</style>
