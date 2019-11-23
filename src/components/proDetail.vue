<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <Nav-component></Nav-component>
      <el-row>
        <!-- 产品标题 -->
        <el-col class="content_header">
          <el-col class="pro_title" :span="24">{{title}}</el-col>
          <el-col class="pro_type" :span="24">{{type}}</el-col>
        </el-col>
        <!-- 产品内容 -->
        <el-col>
          <el-col :span="8" class="pro_img" :xs="24">
            <img v-bind:src="cover" alt />
          </el-col>
          <el-col :span="12" :offset="4" class="pro_left" :xs="{span:24,offset:0}">
            <el-row class="item_one">
              <h1 class="item_title">主要材料</h1>
              <el-col class="item">{{material}}</el-col>
            </el-row>

            <el-row class="item_one">
              <h1 class="item_title">规格</h1>
              <el-col class="text" :span="18">
                <el-col v-for="item in categories" class="item">
                  <div class="title">{{item.title}}:</div>
                  <div class="details">
                    <span>123123</span>
                    <span>123123</span>
                  </div>
                </el-col>
              </el-col>
              <el-col
                class="pro_img"
                :span="6"
                :offset="8"
                :md="{offset:0}"
                :sm="{offset:0}"
                :xs="{offset:0}"
              >
                <img v-bind:src="categories_cover" alt />
              </el-col>
            </el-row>

            <el-row class="item_one">
              <el-col class="item">其他颜色和纹理可根据要求定制</el-col>
            </el-row>

            <el-row class="item_one">
              <h1 class="item_title">使用区域</h1>
              <el-col class="areas" v-for="item in areas">
                <div class="areas_title">{{item.title}}：</div>
                <div class="araes_img">
                  <img v-bind:src="item.icon" alt />
                </div>
              </el-col>
            </el-row>

            <el-row class="item_one">
              <h1 class="item_title">类似产品</h1>
              <el-row :gutter="5" class="pro_like" type="flex">
                <el-col :span="4" :xs="8" v-for="item in proLink">
                  <div class="proLink">
                    <img v-bind:src="item" alt />
                  </div>
                </el-col>
              </el-row>
            </el-row>

            <el-row class="item_one">
              <a :href="cover" class="pro_down">下载图片</a>
              <a :href="parameter" class="pro_down">下载技术参数表</a>
              <el-col class="pro_text">
                对于价格、可用性、起订量、货期和销售条款等请
                <router-link to="/contact" class="pro_link">联络我们</router-link>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
        <el-col class="pro_pic">
          <el-col v-for="item in image">
            <img v-bind:src="item.href" alt />
          </el-col>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
import { requestProduct } from "../api/api";
import { requestType } from "../api/api";

export default {
  name: "proDetail",
  data() {
    return {
      title: "暂无数据",
      detail: "暂无数据",
      image: [],
      type: "",
      cover: "",
      material: "",
      areas: [],
      categories: [],
      categories_cover: "",
      parameter: "",
      proLink: []
    };
  },
  components: {
    NavComponent
  },
  methods: {
    getProduct() {
      var allParams = "?id=" + this.$route.params.id;
      requestProduct(allParams).then(res => {
        this.title = res.data.title;
        this.detail = res.data.description;
        this.image = res.data.pictures;
        this.cover = res.data.cover;
        this.type = res.data.type.title;
        this.material = res.data.material;
        for (var i = 0; i < res.data.areas.length; i++) {
          this.areas.push({
            title: res.data.areas[i].title,
            icon: res.data.areas[i].icon
          });
        }
        this.categories = res.data.categories;
        this.categories_cover = res.data.category_cover;
        this.parameter = res.data.parameter;
        console.log(res.data.type_id);
        var allParams2 = "?id=" + res.data.type_id;
        requestType(allParams2).then(res => {
          for (var i = 0; i < 7; i++) {
            if (res.data.products[i].id != this.$route.params.id) {
              if (res.data.products[i].cover != "") {
                this.proLink.push(res.data.products[i].cover);
              }
            }
          }
        });
      });
    }
  },
  mounted: function() {
    this.getProduct();
  }
};
</script>
<style scoped>
.content {
  width: 100%;
  margin-top: 0;
  padding: 0 16vw;
}

.content .content_header {
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 4vw 0;
}

.content .content_header .pro_title {
  font-size: 2vw;
  color: #868379;
  font-weight: bolder;
}

.content .content_header .pro_type {
  font-size: 1.5vw;
  color: #868379;
  font-weight: 600;
}

.pro_img img {
  width: 100%;
}
.pro_pic {
  margin: 0;
  padding: 0;
}
.pro_pic img {
  width: 100%;

  height: 500px;
}

.content .pro_left {
  color: #86837a;
}
.pro_like {
  flex-wrap: wrap;
}

.content .pro_left .item_one {
  padding-bottom: 4vw;
}

.content .pro_left .item_one .item_title {
  font-size: 2vw;
  padding-bottom: 2vw;
  font-weight: bolder;
}
.item_one::after {
  clear: both;
}

.content .pro_left .item_one .item {
  font-size: 1vw;
}
.pro_down {
  color: #fec402;
  display: block;
  line-height: 2vw;
  font-size: 1vw;
}
.pro_text {
  font-size: 1vw;
  line-height: 2vw;
}
.pro_link {
  color: #fec402;
}
.areas {
  display: inline-block;
  margin-right: 40px;
  width: 176px;
  height: 112px;
}
.araes_img {
  margin-top: 20px;
  width: 176px;
  height: 112px;
}
.araes_img img {
  width: 100%;
  height: 100%;
}
.text {
  float: left;
}
.title {
  float: left;
}
.title::after {
  content: "";
  clear: both;
}
.details {
  float: left;
}
.details::after {
  content: "";
  clear: both;
}
.details span {
  display: block;
}
.proLink {
  width: 80px;
  height: 80px;
}
.proLink img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 778px) {
  .content {
    padding: 0;
  }
  .pro_down,
  .pro_text {
    line-height: 5vw;
  }
  .content .content_header .pro_title {
    font-size: 20px;
  }
  .content .content_header .pro_type {
    font-size: 18px;
  }
  .content .pro_left .item_one .item_title {
    margin-top: 20px;
  }
  .pro_like img {
    margin-bottom: 10px;
  }
  .areas {
    display: block;
    height: 100%;
  }
  .araes_img {
    margin: 0;
  }
  .pro_img {
    float: none;
  }
}
</style>