<template>
  <div>
    <nav-component></nav-component>

    <!-- banner -->
    <div class="banner">
      <el-carousel arrow="never" height="45rem">
        <el-carousel-item v-for="item in banner_herf">
          <img :src="item.href" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 产品 -->
    <div class="product">
      <div class="series_all">
        <div class="series_img">
          <a href>
            <img src="../../static/img/qxilie.jpg" />
          </a>
        </div>
        <div class="series_text">
          <h1 class="text_title">全系列</h1>
          <div class="text">我们以工艺为起点，突破固有的经验，尝试将各种材料相结合，开发创新而实用的建筑材料及其衍生品。对探索的渴望将引领我们不断发现。</div>
        </div>
        <div class="series_flex">
          <div class="flex_img">
            <div class="mask">
              <div class="mask_text">实验品</div>
            </div>
            <img src="../../static/img/shiyang.jpg" />
          </div>

          <div class="flex_img">
            <div class="mask">
              <div class="mask_text">新品</div>
            </div>
            <img src="../../static/img/shiyang.jpg" />
          </div>
        </div>
        <div class="other">
          <div class="other_img">
            <img src="../../static/img/zhuan33001.jpg" />
          </div>
          <div class="other_img">
            <img src="../../static/img/fang021.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import NavComponent from "./Nav";
import { requestBanners } from "../api/api";
export default {
  name: "Home",
  data() {
    return {
      // Banner
      banner_herf: []
    };
  },
  methods: {
    getBanners() {
      // banner
      var allParams = "?language=1&limit=10&page=1";
      requestBanners(allParams).then(res => {
        console.log(res.data.data);
        this.banner_herf = res.data.data;
      });
    }
  },
  components: {
    NavComponent
  },
  mounted() {
    this.getBanners();
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
  width: 100%;

  margin-top: 9.4rem;
  .series_img {
    width: 49rem;
    margin-right: 2.2rem;
    display: inline-block;
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
      width: 100%;
      &:nth-child(odd) {
        margin-bottom: 10rem;
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