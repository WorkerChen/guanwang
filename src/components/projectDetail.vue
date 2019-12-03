<template>
  <div>
    <!-- 内容 -->
    <nav-component></nav-component>
    <div class="content">
      <div class="pro_title">{{title}}</div>
      <div class="pro_detail">
        <div class="pro_text" v-html="detail"></div>
        <div class="pro_img">
          <div class="item">
            <img :src="cover" alt />
          </div>
        </div>
        <!-- <div class="pro_use">
          <div class="user_title">使用的产品</div>
          <div class="user_img">
            <div class="item" v-for="item in product_img">
              <img v-bind:src="item" alt />
            </div>
          </div>
        </div>-->
      </div>
    </div>
    <!-- <el-row class="content">
      <el-row>
        <h1 class="detail_title">{{title}}</h1>
      </el-row>
      <el-row v-html="detail" class="type_detail"></el-row>
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
    </el-row>-->
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
      console.log(this.$route.query.id);
      var allParams = "?id=" + this.$route.query.id;
      requestProject(allParams).then(res => {
        if (res.data == "{}") {
          this.$message({
            message: "请求无数据",
            type: "error"
          });
        } else {
          console.log(res.data);
          if (res.data.cover == "" || res.data.title == "") {
            let that = this;
            this.$alert("暂无产品信息", "消息", {
              confirmButtonText: "返回",
              callback: function() {
                that.$router.back(-1);
              }
            });
          }
          this.title = res.data.title;
          this.cover = res.data.cover;
          this.detail = res.data.detail;
          console.log(res.data.products);
          for (var i = 0; i < res.data.products.length; i++) {
            var product_id = res.data.products[i].product_id;
            var allParams = "?id=" + product_id;
            requestProduct(allParams).then(res => {
              this.product_img.push(res.data.cover);
            });
          }
        }
      });
    }
  },

  mounted() {
    this.getlist();
  }
};
</script>
<style scoped lang="less">
.content {
  padding: 0 15rem;
  width: 96rem;
  margin-top: 5.1rem;
  .pro_title {
    font-size: 2.5rem;
    color: #86837a;
    font-weight: bolder;
  }
  .pro_detail {
    width: 100%;
    margin-top: 2.4rem;
    .pro_text {
      padding: 0 13.4rem;
      display: inline-block;
      margin: 0 auto;
    }
    .pro_img {
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
<style scoped>
/* .content .detail_title {
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
} */
</style>