<template>
  <div>
    <!-- 图片遮罩层 -->
    <div class="mask" v-if="mask">
      <div class="mask_img">
        <img v-bind:src="cover" alt />
      </div>
    </div>
    <!-- 内容 -->

    <div class="content">
      <h1 class="pro_title">{{title}}</h1>
      <h1 class="pro_type">{{sub_title}}</h1>
      <div class="detail_item">
        <div class="detail_img" @click="fade">
          <img v-bind:src="cover" alt id="mask" />
        </div>

        <div class="detail_text">
          <div class="material">
            <h1 class="mater_title">{{$t('product.material')}}</h1>
            <div class="mater_value">{{material}}</div>
          </div>
          <div class="cate">
            <div class="cate_title">{{$t('product.spec')}}</div>
            <div class="cate_item">
              <div v-for="item in categories" class="item">
                <div class="title">{{item.title}}：</div>
                <div class="details">
                  <span v-for="value in item.details">{{value.title}}</span>
                </div>
              </div>
            </div>

            <!-- <div class="cate_img">
              <img v-bind:src="categories_cover" alt />
            </div> -->
            <div class="other">{{category_text}}</div>
          </div>
          <!-- 使用区域 -->
          <div class="areas">
            <h1 class="areas_title">{{$t('product.area')}}</h1>
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
            <div class="likes_title">{{$t('product.similar')}}</div>
            <div class="likes_item">
              <div class="item" v-for="item in proLink">
                <img v-bind:src="item.cover" :data-id="item.id" @click="Likes($event)" />
              </div>
            </div>
          </div>

          <!-- <div class="down_img">
            <a :href="cover" target="_blank">点击下载图片</a>
          </div> -->

          <div class="down_excel">
            <a :href="parameter">{{$t('product.download')}}</a>
          </div>

          <div class="contact">
            {{$t('product.detail')}}
            <router-link to="/contact">{{$t('product.contact')}}</router-link>
          </div>
        </div>
      </div>
      <div class="pro_pic">
        <div class="pic_img" v-for="item in image">
          <div class="item_img">
            <img :src="item.href" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { requestProduct } from "../api/api";
import { requestType } from "../api/api";

export default {
  name: "proDetail",
  data() {
    return {
      id: "",
      title: "暂无数据",
      sub_title: "暂无数据",
      detail: "暂无数据",
      image: [],
      type: "",
      cover: "",
      material: "",
      areas: [],
      categories: [],
      categories_cover: "",
      category_text: "",
      parameter: "",
      proLink: [],
      mask: false
    };
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
          this.areas = res.data.areas;
          this.categories = res.data.categories;
          this.categories_cover = res.data.category_cover;
          this.category_text = res.data.category_text;
          this.parameter = res.data.parameter;
          this.sub_title = res.data.sub_title;
          this.proLink = res.data.similar;
        }

        // 类似产品
        // var allParams2 = "?id=" + this.$route.query.type_id;
        // console.log(allParams2);
        // requestType(allParams2).then(res => {
        //   if (res.data == "{}") {
        //     this.$message({
        //       message: "请求失败",
        //       type: "error"
        //     });
        //   } else {
        //     console.log(res.data.products);
        //     this.proLink = res.data.products;
        //   }
        // });
      });
    },
    fade() {
      this.mask = !this.mask;
    },
    Likes(ev) {
      if (this.id != ev.target.dataset.id) {
        this.id = ev.target.dataset.id;
        this.getProduct();
      }
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
            margin-bottom: 1.4rem;
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
            font-size: 1rem;
            color: #868379;
          }
          .item_img {
            margin-top: 2rem;
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
        flex-wrap: wrap;
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
      color: #86837a;
    font-size: 1rem;
      a {
        color: #fecc3f;
        text-decoration: none;
      }
    }
  }
  .pro_pic {
    margin-top: 7.8rem;
    .pic_img {
      display: block;
      width: 100%;
      .item_img {
        margin-bottom: 2rem;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>