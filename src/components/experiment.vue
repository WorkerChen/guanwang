<template>
  <div>

    <!-- 内容 -->
    <div class="content">
      <h1 class="type_title">{{this.$i18n.locale == "zh"?title:title_en}}</h1>
      <div class="type_detail">
        <div v-html="detail" class="type_text" v-if="this.$i18n.locale == 'zh'"></div>
        <div v-html="detail_en" class="type_text" v-if="this.$i18n.locale != 'zh'"></div>
        <div class="type_img">
          <div class="img_item" v-for="item in list" v-bind:key="item.id">
            <router-link :to="{ name: 'expDetail', query: { id: item.id }}" class="link_img">
              <div class="mask">
                <div class="mask_text">{{item.title}}</div>
              </div>
              <img v-bind:src="item.cover" alt />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-row class="content">
      <nav-component></nav-component>
      <el-row>
        <h1 class="detail_title">{{title}}</h1>
      </el-row>
      <el-row v-html="detail" class="type_detail"></el-row>
      <el-row class="series_pic" type="flex" justify="center" :gutter="10">
        <el-col class="series_img" :span="12" v-for="item in list" v-bind:key="item.id">
          <router-link :to="{ name: 'seriesDetail', params: { id: item.id }}" class="link_img">
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.image" alt />
          </router-link>
        </el-col>
      </el-row>
    </el-row>-->
  </div>
</template>
<script>
import { requesetExperimentConfig } from "../api/api";
import { requesetExperiments } from "../api/api";
export default {
  name: "seriesType",
  
  data() {
    return {
      title:"",
      detail:"",
      title_en:"",
      detail_en:"",
      list:[],
    };
  },
  methods: {
    getConfig() {
      var allParams = "";
      requesetExperimentConfig(allParams).then(res => {
        // console.log(res.data);
        if (res.data == "{}") {
          this.$message({
            message: "请求失败",
            type: "error"
          });
        } else {
          this.title = res.data.title;
          this.detail = res.data.detail;
          this.title_en = res.data.title_en;
          this.detail_en = res.data.detail_en;
        }
      });
    },
    getList(){
        var language = this.$i18n.locale == "zh" ? "1" : "2";
        var allParams = "?page=1&limit=10000&language="+language;
        requesetExperiments(allParams).then(res=>{
            this.list = res.data.data;
        })
    }
  },
  mounted: function() {
    this.getConfig();
    this.getList();
  },
  created() {
    // 控制是否显示导航栏
    this.$bus.on("ChangeLocation", val => {
      this.getList();
    });
  }
};
</script>
<style scoped lang="less">
.content {
  padding: 0 15rem;
  width: 96rem;
  margin-top: 5.1rem;
  .type_title {
    font-size: 2.5rem;
    color: #86837a;
    font-weight: bolder;
  }
  .type_detail {
    width: 100%;
    margin-top: 2.4rem;
    .type_text {
      color: #86837a;
      padding-left: 13.4rem;
      padding-right: 1rem;
      display: inline-block;
      margin: 0 auto;
      width: 100%;
    }
    .type_img {
      margin-top: 5rem;
      width: 100%;
      .img_item {
        display: inline-block;
        width: 32rem;
        margin-bottom: 1rem;
        position: relative;
        height: 32rem;
        &:hover .mask {
          display: block;
          opacity: 0.5;
          animation: fade 2s;
        }
        &:nth-child(odd) {
          margin-right: 1rem;
        }
        .mask {
          transition: all 2s;
          display: none;
          width: 100%;
          height: 100%;
          background: #000;
          position: absolute;
          opacity: 0.6;
          .mask_text {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 2.2rem;
            font-weight: bolder;
            text-align: center;
            line-height: 28rem;
            color: #fff;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    @keyframes fade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.5;
      }
    }
  }
}
p {
   
    margin-block-end: 0em;
    margin: 0 0 0 10px;
}
</style>

<style scoped>
/* .content .detail_title {
  color: #a19d91;
  font-size: 2vw;
  text-align: left;
  font-weight: bolder;
  padding-top: 5vw;
}
.content .type_detail {
  padding: 40px 0;
  padding-left: 255px;
  line-height: 40px;
  color: #a19d91;
}
.content .text {
  text-align: right;
  padding: 0 12vw 3vw 12vw;
  font-size: 0.8vw;
}
.content .text p {
  color: #a19d91;
  padding: 1vw 0 0 1vw;
  text-align: left;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  border: 7.5px solid #ffffff;
  border-top: 0;
  border-bottom: 0;
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
  font-size: 3vw;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.series_img:hover .mask {
  opacity: 0.5;
  transition: all 1.5s ease-in-out;
}
.link_img {
  width: 100%;
  height: 100%;
}
.content {
  padding: 0vw 16vw;
  margin-top: 0;
}
.content .series_title {
  text-align: center;
  font-size: 3vw;
  font-weight: bolder;
  color: #86837a;
  padding: 3vw 0;
}
.series_pic {
  flex-wrap: wrap;
}
.series_img {
  position: relative;

  margin-bottom: 1vw;
}

img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
@media screen and (max-width: 778px) {
  .content .series_title {
    font-size: 20px;
    padding: 20px;
  }
} */
</style>
