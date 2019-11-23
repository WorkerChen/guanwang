<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <nav-component></nav-component>
      <el-row>
        <h1 class="detail_title">{{title}}</h1>
      </el-row>
      <el-row v-html="detail" class="type_detail">
        <!-- <div ></div> -->
      </el-row>
      <el-row class="series_pic" type="flex" justify="center" :gutter="10">
        <el-col class="series_img" :span="24">
          <router-link to="#" class="link_img">
            <img :src="cover" alt />
          </router-link>
        </el-col>
      </el-row>

      <div class="product">
        <div class="product_title">使用的产品</div>
        <div class="product_flex">
          <div class="product_img" v-for="item in product_img">
            <img v-bind:src="item" alt />
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>
 
<script>
import NavComponent from "./Nav";
import { requestProject } from "../api/api";
import { requestProduct } from "../api/api";
export default {
  name: "ProjectDetail",
  data() {
    return {
      id: 0,

      title: "",
      detail: "",
      products: [],
      cover: "",

      product_img: []
    };
  },
  components: {
    NavComponent
  },
  methods: {
    getlist() {
      console.log(this.$route.params.id);
      var allParams = "?id=" + this.$route.params.id;
      requestProject(allParams).then(res => {
        this.title = res.data.title;
        this.cover = res.data.cover;
        this.detail = res.data.title;
        console.log(res.data.products);
        for (var i = 0; i < res.data.products.length; i++) {
          var product_id = res.data.products[i].product_id;
          var allParams = "?id=" + product_id;
          requestProduct(allParams).then(res => {
            this.product_img.push(res.data.cover);
          });
        }
      });
    }
  },

  mounted() {
    this.getlist();
  }
};
</script>
<style scoped>
.content .detail_title {
  color: #a19d91;
  font-size: 28px;
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
.product {
  margin-top: 60px;
}
.product_title {
  display: block;
  width: 100%;
  font-size: 30px;
  font-weight: bolder;
  color: #86837a;
}
.product_flex {
  display: flex;
}
.product_img {
  flex-wrap: wrap;
  width: 24%;
  margin-top: 60px;
  padding-right: 1%;
}

@media screen and (max-width: 778px) {
  .content {
    padding: 0;
    width: 100%;
  }
  .type_detail {
    padding-left: 0 !important;
    text-align: center;
  }
}
</style>