<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <el-carousel arrow="never" height="46rem" :interval="6000">
        <el-carousel-item v-for="item in banner_herf" :key="item.id">
          <img :src="item.href" :data-link="item.link" :data-type="item.type"
              :data-param="item.param" @click="banner_link" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 产品 -->
    <div class="product">
      <div class="series_all">
        <div class="series_img">
          <router-link to="/series">
            <div class="mask">
              <div class="mask_text">{{$t('home.all')}}</div>
            </div>

            <img :src="all_bg" />
          </router-link>
        </div>
        <div class="series_text">
          <h1 class="text_title">{{this.$i18n.locale == "zh"?all_title:en_title}}</h1>
          <div class="text">{{this.$i18n.locale == "zh"?all_content:en_content}}</div>
        </div>
        <div class="series_flex">
          <router-link :to="{ name: 'SeriesType', query: { id: top.id }}">
            <div class="flex_img">
              <div class="mask">
                <div class="mask_text">{{$t('home.exp')}}</div>
              </div>
              <img :src="test_bg" />
            </div>
          </router-link>

          <div class="flex_img">
            <router-link to="/new">
              <div class="mask">
                <div class="mask_text">{{$t('home.pro')}}</div>
              </div>
            </router-link>
            <img :src="new_bg" />
          </div>
        </div>
        <div class="other">
          <div class="other_img" v-for="item in adverts" :key="item.id ">
            <img
              ref="imgInfo"
              :src="item.href"
              :data-type="item.type"
              :data-link="item.link"
              :data-param="item.param"
              @click="link_to"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { requestConfigs } from "../api/api";
import { requestBanners } from "../api/api";
import { requestAdvers } from "../api/api";
import { requestTop } from "../api/api";
import { requestNew } from "../api/api";
import { Link } from "element-ui";
import router from "../router";

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
      new_bg: [],
      en_title: "",
      en_content: "",
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
        language +
        "&sort=1";
      requestBanners(allParams).then(res => {
        console.log(res.data.data);
        this.banner_herf = res.data.data;
      });
      requestAdvers(allParams).then(res => {
        this.adverts = res.data.data;
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
        this.en_title = res.data.en_title;
        this.en_content = res.data.en_content;
      });
    },

    link_to(ev) {
      var type = ev.target.dataset.type;
      var link = ev.target.dataset.link;
      var param = ev.target.dataset.param;

      if (type == 1) {
        if (param) {
          // 首页
          this.$router.push({ name: "proDetail", query: { id: param } });
        }
      } else if (type == 2) {
        if (param) {
          // 项目
          this.$router.push({ name: "ProjectDetail", query: { id: param } });
        }
      } else if (type == 3) {
        if (param) {
          // 记录
          this.$router.push({ name: "dynDetail", query: { id: param } });
        }
      } else if (type == 4) {
        if (param) {
          // 记录
          this.$router.push({ name: "DataDetail", query: { id: param } });
        }
      }
      if (type == 5) {
        // 外链
        if (link == "") {
          this.$alert("链接为空");
          return false;
        }
        window.location.href = link;
      } else {
        return;
      }
    },
    banner_link(ev) {
      var type = ev.target.dataset.type;
      var link = ev.target.dataset.link;
      var param = ev.target.dataset.param;

      if (type == 1) {
        if (param) {
          // 首页
          this.$router.push({ name: "proDetail", query: { id: param } });
        }
      } else if (type == 2) {
        if (param) {
          // 项目
          this.$router.push({ name: "ProjectDetail", query: { id: param } });
        }
      } else if (type == 3) {
        if (param) {
          // 记录
          this.$router.push({ name: "dynDetail", query: { id: param } });
        }
      } else if (type == 4) {
        if (param) {
          // 记录
          this.$router.push({ name: "DataDetail", query: { id: param } });
        }
      }
      if (type == 5) {
        // 外链
        if (link == "") {
          this.$alert("链接为空");
          return false;
        }
        window.location.href = link;
      } else {
        return;
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop); //页面滚动距离
      let scrollImg = this.$refs.imgInfo;
      for (let i = 0; i < scrollImg.length; i++) {
        // console.log(scrollImg[i].offsetTop);
        let offsetImg_top =
          scrollImg[i].offsetTop - scrollImg[i].clientHeight - 50;
        // console.log(offsetImg_top);
        if (scrollTop > offsetImg_top) {
          let difference = scrollTop - offsetImg_top;
          let half = difference / 20 + "px";
          // console.log(half);
          scrollImg[i].style.transform = `translateY(${half})`;
        }
      }
    }
  },

  mounted() {
    this.getBanners();
    window.addEventListener("scroll", this.handleScroll);
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
    cursor: pointer;
  }
}
.product {
  padding: 0 15rem;
  width: 96rem;

  margin-top: 6.4rem;
  .series_img {
    width: 49rem;
    margin-right: 2.2rem;
    display: inline-block;
    height: 30rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
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
      position: relative;
      padding: inherit;
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
    margin-top: 1.6rem;
    width: 100%;
    .other_img {
      height: 30rem;
      overflow: hidden;

      &:nth-child(odd) {
        margin-bottom:1.6rem;
      }
      img {
        margin-top: -2rem;
        top: 0;
        width: 100%;
        height: 32rem;
        cursor: pointer;
        transition: 1s;
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