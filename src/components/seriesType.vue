<template>
  <div>
    <nav-component></nav-component>

    <!-- 内容 -->
    <div class="content">
      <h1 class="type_title">{{title}}</h1>
      <div class="type_detail">
        <div v-html="detail" class="type_text"></div>
        <div class="type_img">
          <div class="img_item" v-for="item in list" v-bind:key="item.id">
            <router-link :to="{ name: 'seriesDetail', query: { id: item.id }}" class="link_img">
              <div class="mask">
                <div class="mask_text">{{item.title}}</div>
              </div>
              <img v-bind:src="item.image" alt />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-row class="content">
      <nav-component></nav-component>
      <el-row>
        <h1 class="detail_title">{{title}}</h1>
      </el-row>
      <el-row v-html="detail" class="type_detail"></el-row>
      <el-row class="series_pic" type="flex" justify="center" :gutter="10">
        <el-col class="series_img" :span="12" v-for="item in list" v-bind:key="item.id">
          <router-link :to="{ name: 'seriesDetail', params: { id: item.id }}" class="link_img">
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.image" alt />
          </router-link>
        </el-col>
      </el-row>
    </el-row>-->
  </div>
</template>
<script>
import NavComponent from "./Nav";
import { requestType } from "../api/api";
export default {
  name: "seriesType",
  components: {
    NavComponent
  },
  data() {
    return {
      id: 0,
      title: "",
      detail: "",
      list: []
    };
  },
  methods: {
    getType() {
      console.log(this.$route.query.id);
      var allParams = "?id=" + this.$route.query.id;
      requestType(allParams).then(res => {
        // console.log(res.data);
        if (res.data == "{}") {
          this.$message({
            message: "请求失败",
            type: "error"
          });
        } else {
          this.title = res.data.title;
          this.detail = res.data.description;
          this.list = res.data.child;
        }
      });
    }
  },
  mounted: function() {
    this.getType();
  }
};
</script>
<style scoped lang="less">
.content {
  padding: 0 15rem;
  width: 96rem;
  margin-top: 5.1rem;
  .type_title {
    font-size: 2.5rem;
    color: #86837a;
    font-weight: bolder;
  }
  .type_detail {
    width: 100%;
    margin-top: 2.4rem;
    .type_text {
      padding: 0 13.4rem;
      display: inline-block;
      margin: 0 auto;
    }
    .type_img {
      margin-top: 5rem;
      width: 100%;
      .img_item {
        display: inline-block;
        width: 32.5rem;
        margin-bottom: 1rem;
        position: relative;
        height: 28rem;
        &:hover .mask {
          display: block;
          opacity: 0.5;
          animation: fade 2s;
        }
        &:nth-child(odd) {
          margin-right: 1rem;
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
            line-height: 28rem;
            color: #fff;
          }
        }
        img {
          width: 100%;
          height: 100%;
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
  }
}
</style>

<style scoped>
/* .content .detail_title {
  color: #a19d91;
  font-size: 2vw;
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
@media screen and (max-width: 778px) {
  .content .series_title {
    font-size: 20px;
    padding: 20px;
  }
} */
</style>
