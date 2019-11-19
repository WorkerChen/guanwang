<template>
  <div>
    <!-- banner -->
    <el-row>
      <NavComponent></NavComponent>
      <el-col :span="24">
        <el-carousel class="banner" arrow="never" height="750px" >
          <el-carousel-item v-for="item in banner_herf">
            <img :src="item.href" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <!-- 产品 -->
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="first">
            <div class="textbook col-md-3">
              <h1>全系列</h1>
              <p class="text">我们以工艺为起点，突破固有的经验，尝试将各种材料相结合，开发创新而实用的建筑材料及其衍生品。对探索的渴望将引领我们不断发现。</p>
            </div>

            <div class="col-md-9 img_pro">
              <router-link to="/series">
                <img src="../../static/img/qxilie.jpg" />
              </router-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="product">
            <div class="pro_item">
              <div class="mask">
                <div class="mask_text">试验品</div>
              </div>
              <img src="../../static/img/shiyang.jpg" />
            </div>
            <div class="pro_item">
              <div class="mask">
                <div class="mask_text">新品</div>
              </div>
              <img src="../../static/img/new.jpg" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="big_img">
            <img src="../../static/img/zhuan33001.jpg" />
          </div>
        </div>
        <div class="row">
          <div class="big_img">
            <img src="../../static/img/fang021.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- <el-row class="content">
      <el-row class="first">
        <el-col :xs="24" :span="19">
          <router-link to="/series">
            <img src="../../static/img/qxilie.jpg" alt class="img_pro" />
          </router-link>
        </el-col>
        <el-col :span="4" :xs="{span:24,offset:0,push:0}" :push="1" class="textbook">
          <h1>全系列</h1>
          <p class="text">我们以工艺为起点，突破固有的经验，尝试将各种材料相结合，开发创新而实用的建筑材料及其衍生品。对探索的渴望将引领我们不断发现。</p>
        </el-col>
      </el-row>

      <el-row type="flex" class="product">
        <el-col :span="11" class="pro_item">
          <div class="mask">
            <div class="mask_text">试验品</div>
          </div>
          <img src="../../static/img/shiyang.jpg" alt class="img_pro" />
        </el-col>
        <el-col :span="11" class="pro_item">
          <div class="mask">
            <div class="mask_text">新品</div>
          </div>
          <img src="../../static/img/new.jpg" alt class="img_pro" />
        </el-col>
      </el-row>
      <el-row class="scond">
        <el-col :span="24">
          <img src="../../static/img/zhuan33001.jpg" alt class="img_pro" />
        </el-col>
      </el-row>
      <el-row class="second">
        <el-col :span="24">
          <img src="../../static/img/fang021.jpg" alt class="img_pro" />
        </el-col>
      </el-row>
    </el-row>-->
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

<style>
@media screen and (min-width: 1920px) {
  .container {
    width: 1300px;
  }
}
.banner {
  margin-bottom: 182px;
}
.el-carousel__container {
  height: 750px;
}
.el-carousel__button {
  width: 60px;
  height: 10px;
}
.el-carousel__indicator--horizontal {
  padding: 20px 15px;
}
.banner img {
  width: 100%;
  height: 800px;
}
.content .first {
  width: 100%;
  height: 100%;
}

.img_pro {
  display: block;
  padding: 0 !important;
}
.img_pro img {
  width: 100%;
}
.content .textbook {
  padding-right: 0 !important;
  padding-left: 40px;
  float: right;
}
.content .textbook::after {
  clear: both;
}
.content .first h1 {
  text-align: left;
  font-weight: bolder;
  color: #868379;
  vertical-align: bottom;
  font-size: 52px;
  line-height: 52px;
}

.content .first .text {
  margin-top: 40px;
  font-size: 20px;
  line-height: 52px;
  color: #868379;
}
.product {
  display: flex;
  margin-top: 15px;
}

.product .pro_item {
  position: relative;
  padding: 0 !important;
}
.product .pro_item:nth-child(1) {
  margin-right: 7.5px;
}
.product .pro_item:nth-child(2) {
  margin-left: 7.5px;
}
.product .pro_item img {
  width: 100%;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  opacity: 0;
}
.mask_text {
  display: inline-block;
  color: #000;
  position: absolute;
  font-size: 4vw;
  right: 30px;
  bottom: 30px;
  font-weight: bolder;
}
.big_img {
  margin-top: 182px;
}
.big_img {
  width: 100%;
}
.big_img img {
  width: 100%;
}

.pro_item:hover .mask {
  opacity: 0.5;
  transition: all 1.5s ease-in-out;
}

.router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
}
.pro_img a {
  width: 100%;
  height: 100%;
  clear: both;
}
.el-carousel__item {
  width: 100%;
  height: 100%;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1675px) and (min-width: 1920px) {
  .el-carousel__container {
    height: 800px;
  }
}

@media screen and (max-width: 1200px) {
  .el-carousel__container {
    height: 600px !important;
  }
  .banner img {
    height: 600px;
  }
  .content {
    margin-top: 100px;
  }
  .content .first h1 {
    font-size: 38px;
  }
  .content .first .text {
    margin-top: 30px;
    font-size: 16px;
  }
  .big_img {
    margin-top: 140px;
  }
  .banner {
    margin-bottom: 50px;
  }
  .content .textbook .text {
    font-size: 14px;
    margin-top: 0px;
    padding: 15px;
  }
}
@media screen and (max-width: 778px) {
  .el-carousel__button {
    height: 3px;
    width: 32px;
  }
  .el-carousel__indicator--horizontal {
    padding: 20px 5px;
  }
  .el-carousel__container {
    height: 300px !important;
  }
  .banner img {
    height: 300px;
  }
  .content {
    margin-top: 30px;
  }
  .content .textbook {
    margin-top: 15px;
    margin-left: 0;
    padding-left: 0;
    font-size: 24px;
  }
  .content .textbook h1 {
    text-align: center;
    font-size: 24px;
  }
  .content .textbook .text {
    font-size: 14px;
    margin-top: 0px;
    line-height: 28px;
    padding: 15px;
  }
  .product {
    display: block;
  }
  .product .pro_item:nth-child(1) {
    margin-right: 0;
    margin-bottom: 15px;
  }
  .product .pro_item:nth-child(2) {
    margin-left: 0;
  }
  .big_img {
    margin-top: 15px;
  }
  .banner {
    margin-bottom: 0;
  }
}
</style>
