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
        <div class="pro_use">
          <div class="user_title">使用的产品</div>
          <div class="user_img">
            <div class="covers" v-for="item in products" :key="item.id">
              <router-link :to="{ name: 'proDetail', query: { id: item.info.id,title ,type_id}}">
                <div class="mask">
                  <div class="mask_text">{{item.info.title}}</div>
                </div>
                <img :src="item.info.cover" alt />
              </router-link>
            </div>
          </div>
        </div>
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
export default {
  name: "ProjectDetail",
  data() {
    return {
      id: 0,

      title: "",
      detail: "",
      products: [],
      cover: ""
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
          this.products = res.data.products;
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

    .pro_use {
      margin-top: 5.7rem;
      .user_title {
        font-size: 2.5rem;
        font-weight: bold;
        color: #86837a;
      }
      .user_img {
        margin-top: 5.7rem;
        width: 100%;
        .covers {
          display: inline-block;
          width: 14rem;
          height: 14rem;
          overflow: hidden;
          margin-right: 2.5rem;
          position: relative;
          &:last-child {
            display: inline-block;
            width: 14rem;
            height: 14rem;
            overflow: hidden;
            margin-right: 0;
          }
          &:hover .mask {
            display: block;
            opacity: 0.5;
            animation: fade 2s;
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
              line-height: 14rem;
              color: #fff;
            }
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
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
.text p span {
  width: 100%;
  display: block;
  padding: 0 12.4rem;
}
.text p img {
  width: 100%;
  height: 100%;
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