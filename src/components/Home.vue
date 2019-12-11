<template>
  <div>
    <nav-component></nav-component>

    <!-- banner -->
    <div class="banner">
      <el-carousel arrow="never" height="45rem">
        <el-carousel-item v-for="item in banner_herf">
          <img :src="item.href" :data-href="item.link" @click="link_to" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 产品 -->
    <div class="product">
      <div class="series_all">
        <div class="series_img">
          <router-link to="/series">
            <img :src="all_bg" />
          </router-link>
        </div>
        <div class="series_text">
          <h1 class="text_title">{{all_title}}</h1>
          <div class="text">{{all_content}}</div>
        </div>
        <div class="series_flex">
          <router-link :to="{ name: 'SeriesType', query: { id: top.id }}">
            <div class="flex_img">
              <div class="mask">
                <div class="mask_text">实验品</div>
              </div>
              <img :src="test_bg" />
            </div>
          </router-link>

          <div class="flex_img">
            <router-link to="/new">
              <div class="mask">
                <div class="mask_text">新品</div>
              </div>
            </router-link>
            <img :src="new_bg" />
          </div>
        </div>
        <div class="other">
          <div class="other_img" v-for="item in adverts" :key="item.id ">
            <img :src="item.href" :data-href="item.link" @click="link_to" />
          </div>
          <!-- <div class="other_img">
            <img src="../../static/img/fang021.jpg" alt />
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import NavComponent from "./Nav";
import { requestConfigs } from "../api/api";
import { requestBanners } from "../api/api";
import { requestAdvers } from "../api/api";
import { requestTop } from "../api/api";
import { requestNew } from "../api/api";
import { Link } from "element-ui";

export default {
  name: "Home",
  data() {
    return {
      count: 0,
      limit: 10,
      currentPage: 1,
      all_bg: "",
      test_bg: "",
      all_title: "",
      all_content: "",
      // Banner
      banner_herf: [],
      adverts: [],
      top: [],
      new: [],
      new_cover: [],
      new_bg: []
    };
  },
  methods: {
    getBanners() {
      // banner
      var language = this.$i18n.locale == "zh" ? "1" : "2";
      var allParams =
        "?page=" +
        this.currentPage +
        "&limit=" +
        this.limit +
        "&language=" +
        language;
      requestBanners(allParams).then(res => {
        console.log(res.data.data);
        this.banner_herf = res.data.data;
      });
      requestAdvers(allParams).then(res => {
        this.adverts = res.data.data;

        // for (let i = 0; i < res.data.data.length; i++) {
        //   if (res.data.data[i].type == 1) {
        //     this.adverts[i].link = "proDetail";
        //   } else if (res.data.data[i].type == 2) {
        //     this.adverts[i].link = "ProjectDetail";
        //   } else if ((res.data.data[i].type = 3)) {
        //     this.adverts[i].link = "dynDetail";
        //   } else if (res.data.data[i].type) {
        //     this.adverts[i].link = "dataDetail";
        //   }
        // }
        // console.log(this.adverts);
      });
      requestTop(allParams).then(res => {
        this.top = res.data;
      });
      var allParams_new = "?language=1&limit=10&page=1&newer=1";
      requestNew(allParams_new).then(res => {
        this.new = res.data.data;
        this.new_cover = res.data.data[0].cover;
      });
      requestConfigs(allParams).then(res => {
        this.test_bg = res.data.test_bg;
        this.new_bg = res.data.new_bg;
        this.all_bg = res.data.all_bg;
        this.all_content = res.data.all_content;
        this.all_title = res.data.all_title;
      });
    },

    link_to(ev) {
      var link = ev.target.dataset.href;

      if (link == undefined) {
        this.$alert("链接为空");
        return false;
      }
      window.location.href = link;
      // var XMLHTTP = link.substring(0, 4);

      // var link = ev.target.dataset.link;
      // var id = ev.target.dataset.id;
      // if (link == 1) {
      //   this.$router.push({
      //     name: "proDetail",
      //     query: { id: id }
      //   });
      // } else if (link == 2) {
      //   this.$router.push({
      //     name: "ProjectDetail",
      //     query: { id: id }
      //   });
      //   console.log(2);
      //   return;
      // } else if (link == 3) {
      //   this.$router.push({
      //     name: "dynDetail",
      //     query: { id: id }
      //   });
      // } else if (link == 4) {
      //   this.$router.push({
      //     name: "dataDetail",
      //     query: { id: id }
      //   });
      // }
    }
  },
  components: {
    NavComponent
  },
  mounted() {
    this.getBanners();
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
.banner {
  width: 100%;
  height: 45rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.product {
  padding: 0 15rem;
  width: 96rem;

  margin-top: 9.4rem;
  .series_img {
    width: 49rem;
    margin-right: 2.2rem;
    display: inline-block;
    height: 30rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .series_text {
    float: right;
    display: inline-block;
    width: 14rem;
    .text_title {
      display: block;
      font-size: 2.5rem;
      padding: 0;
      margin: 0;
      line-height: 2.5rem;
      vertical-align: top;
      color: #868379;
      font-weight: bolder;
    }
    .text {
      margin-top: 3rem;
      font-size: 1rem;
      color: #868379;
      line-height: 3rem;
    }
  }
  .series_flex {
    margin-top: 1.6rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .flex_img {
      width: 32.2rem;
      height: 27.4rem;
      overflow: hidden;
      position: relative;

      &:first-child {
        margin-right: 1.6rem;
      }
      &:hover .mask {
        display: block;
        opacity: 0.5;
        animation: fade 2s;
      }
      .mask {
        transition: all 2s;
        // display: none;
        width: 100%;
        height: 100%;
        background: #000;
        position: absolute;
        opacity: 0.6;
        display: none;

        .mask_text {
          display: inline-block;
          font-size: 2.2rem;
          font-weight: bolder;
          color: #fff;
          position: absolute;
          bottom: 1.5rem;
          right: 1.6rem;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .other {
    margin-top: 8.8rem;
    width: 100%;
    .other_img {
      height: 30rem;
      &:nth-child(odd) {
        margin-bottom: 3rem;
      }
      img {
        width: 100%;
        height: 100%;
      }
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
</style>


<style>
.el-carousel__button {
  width: 3rem;
  height: 0.5rem;
}
.el-carousel__container {
  width: 100%;
  height: 45rem;
}
</style>