<template>
  <div>
    <!-- 图片遮罩层 -->
    <div class="mask" v-if="mask">
      <div class="mask_img">
        <img v-bind:src="cover" alt />
      </div>
    </div>
    <!-- 内容 -->

    <Nav-component></Nav-component>
    <div class="content">
      <h1 class="pro_title">{{title}}</h1>
      <h1 class="pro_type">{{type}}</h1>
      <div class="detail_item">
        <div class="detail_img" @click="fade">
          <img v-bind:src="cover" alt id="mask" />
        </div>

        <div class="detail_text">
          <div class="material">
            <h1 class="mater_title">主要材料</h1>
            <div class="mater_value">{{material}}</div>
          </div>
          <div class="cate">
            <div class="cate_title">规格</div>
            <div class="cate_item">
              <div v-for="item in categories" class="item">
                <div class="title">{{item.title}}：</div>
                <div class="details">
                  <span v-for="value in item.details">{{value.title}}</span>
                </div>
              </div>
            </div>

            <div class="cate_img">
              <img v-bind:src="categories_cover" alt />
            </div>
            <div class="other">其他规格尺寸和厚度可根据要求定制</div>
          </div>
          <!-- 使用区域 -->
          <div class="areas">
            <h1 class="areas_title">使用区域</h1>
            <div class="areas_item">
              <!-- <div class="item" v-for="item in areas">
                <div class="item_title">{{item.title}}</div>
                <div class="item_img">
                  <img :src="item.icon" alt />
                </div>
              </div>-->
              <div class="item" v-for="item in areas">
                <div class="item_title">{{item.title}}</div>
                <div class="item_img">
                  <img :src="item.icon" alt />
                </div>
              </div>
            </div>
          </div>

          <div class="likes">
            <div class="likes_title">类似产品</div>
            <div class="likes_item">
              <div class="item" v-for="item in proLink">
                <img :src="item.cover" />
              </div>
            </div>
          </div>

          <div class="down_img">
            <a :href="cover" target="_blank">点击下载图片</a>
          </div>

          <div class="down_excel">
            <a :href="parameter">下载参数表</a>
          </div>

          <div class="contact">
            对于价格、可用性、起订量、货期和销售条款
            等请
            <router-link to="/contact">联络我们</router-link>
          </div>
        </div>
      </div>
      <div class="pic_img" v-for="item in image">
        <div class="item_img">
          <img :src="item.href" alt />
        </div>
      </div>
    </div>

    <!-- <el-row class="content">
      <el-row>
        <el-col class="content_header">
          <el-col class="pro_title" :span="24">{{title}}</el-col>
          <el-col class="pro_type" :span="24">{{type}}</el-col>
        </el-col>
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
    </el-row>-->
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
      id: "",
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
      proLink: [],
      mask: false
    };
  },
  components: {
    NavComponent
  },
  methods: {
    getId() {
      this.id = this.$route.query.id;
    },
    getProduct() {
      var allParams = "?id=" + this.id;
      console.log(allParams);
      requestProduct(allParams).then(res => {
        // if ((res.data = "{}")) {
        // }
        if (res.data == "{}") {
          this.$message({
            message: "请求失败",
            type: "error"
          });
        } else {
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
        }

        // 类似产品;
        var allParams2 = "?id=" + this.$route.query.type_id;
        console.log(allParams2);
        requestType(allParams2).then(res => {
          if (res.data == "{}") {
            this.$message({
              message: "请求失败",
              type: "error"
            });
          } else {
            console.log(res.data.products);
            this.proLink = res.data.products;
          }
        });
      });
    },
    fade() {
      this.mask = !this.mask;
    },
    Likes(ev) {
      this.id = ev.target.dataset.id;
      this.getProduct();
    }
  },
  mounted: function() {
    this.getId();
    this.getProduct();

    document.addEventListener("click", e => {
      if (e.target.id == "mask") {
        this.mask = true;
      } else {
        this.mask = false;
      }
    });
  }
};
</script>
<style scoped lang="less">
.mask {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  .mask_img {
    height: 25rem;
    text-align: center;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
    img {
      height: 100%;
    }
  }
}
.content {
  width: 96rem;
  padding: 0 15rem;
  margin-top: 5.1rem;
  position: relative;

  .pro_title {
    width: 100%;
    color: #86837a;
    font-size: 2.6rem;
    font-weight: bold;
  }
  .pro_type {
    width: 100%;
    color: #86837a;
    font-size: 1rem;
    margin-top: 2rem;
    text-indent: 3px;
  }
  .detail_item {
    margin-top: 2.5rem;
    display: flex;
    position: relative;
    .detail_img {
      width: 22.3rem;
      height: 22.3rem;
      display: inline-block;
      margin-right: 10.8rem;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .detail_text {
      display: inline-block;
      width: 33rem;
      &::after {
        clear: both;
        overflow: hidden;
        height: 68.5rem;
      }
      h1 {
        margin: 0 !important;
        padding: 0 !important;
      }
      .material {
        width: 100%;
        .mater_title {
          font-size: 2rem;
          color: #86837a;
          font-weight: bold;
        }
        .mater_value {
          font-size: 1rem;
          margin-top: 1.4rem;
          color: #86837a;
        }
      }
      .cate {
        margin-top: 3rem;
        .cate_title {
          font-size: 2rem;
          color: #86837a;
          font-weight: bold;
        }
        .cate_item {
          display: inline-block;
          margin-top: 1.4rem;
          position: relative;
          .item {
            width: 100%;
            margin-bottom: 3rem;
            font-size: 1rem;
            color: #86837a;
            .title {
              display: inline-block;
              vertical-align: top;
            }
            .details {
              display: inline-block;
              span {
                width: 100%;
                display: block;
              }
            }
          }
        }

        .cate_img {
          float: right;
          display: inline-block;
          width: 8.4rem;
          height: 8.4rem;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .other {
          color: #86837a;
          font-size: 1rem;
        }
      }
    }
    .areas {
      margin-top: 3rem;
      .areas_title {
        width: 100%;
        color: #86837a;
        font-size: 2rem;
        font-weight: bold;
      }
      .areas_item {
        margin-top: 2.2rem;
        .item {
          display: inline-block;
          width: 10rem;
          margin-right: 2.4rem;
          &:last-child {
            margin-right: 0;
          }
          .item_title {
            font-size: 1.5rem;
            color: #868379;
          }
          .item_img {
            margin-top: 2rem;
            height: 5rem;
            width: 100%;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .likes {
      margin-top: 3rem;
      .likes_title {
        font-size: 2rem;
        color: #86837a;
        font-weight: bold;
      }
      .likes_item {
        display: flex;
        .item {
          margin-top: 2.2rem;
          width: 4rem;
          height: 4rem;
          margin-right: 0.6rem;
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .down_img {
      margin-top: 2.5rem;
      a {
        color: #fecc3f;
      }
    }
    .down_excel {
      margin-top: 2rem;
      a {
        color: #fecc3f;
      }
    }
    .contact {
      margin-top: 2rem;
      a {
        color: #fecc3f;
        text-decoration: none;
      }
    }
  }
  .pic_img {
    display: block;
    width: 100%;

    margin-top: 7.8rem;
    .item_img {
      height: 37.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>