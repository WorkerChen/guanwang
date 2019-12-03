<template>
  <div>
    <!-- 内容 -->
    <nav-component></nav-component>
    <div class="content">
      <h1 class="detail_title">{{title}}</h1>
      <div class="detail_item">
        <div class="item_text" v-html="detail"></div>
        <div class="item_img">
          <div class="img" v-for="item in list" v-bind:key="item.id">
            <router-link
              :to="{ name: 'proDetail', query: { id: item.id,title ,type_id}}"
              class="link_img"
            >
              <div class="mask">
                <div class="mask_text">{{item.title}}</div>
              </div>
              <img v-bind:src="item.cover" alt />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 
    <el-row class="content">
      <el-row :span="24">
        <h1>{{title}}</h1>
      </el-row>

        
      <el-row v-html="detail" class="type_detail">
      </el-row>

      <el-row class="show_pic" type="flex" :gutter="16">
        <el-col class="series_img" :span="8" v-for="item in list" v-bind:key="item.id">
          <router-link
            :to="{ name: 'proDetail', params: { id: item.id,title ,Did}}"
            class="link_img"
          >
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.cover" alt />
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
  name: "seriesDetail",
  components: {
    NavComponent
  },
  data() {
    return {
      title: "",
      detail: "",
      list: [],
      type_id: ""
    };
  },
  methods: {
    getType() {
      console.log(this.$route.query.id);
      var allParams = "?id=" + this.$route.query.id;
      requestType(allParams).then(res => {
        console.log(res.data);
        if (res.data == "{}") {
          this.$message({
            message: "请求失败",
            type: "error"
          });
        } else {
          this.title = res.data.title;
          this.detail = res.data.description;
          this.list = res.data.products;
          this.type_id = res.data.id;
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
  .detail_title {
    font-size: 2.5rem;
    color: #86837a;
    font-weight: bolder;
  }
  .detail_item {
    width: 100%;
    margin-top: 2.4rem;
    .item_text {
      padding: 0 13.4rem;
      display: inline-block;
      margin: 0 auto;
    }
    .item_img {
      margin-top: 5rem;
      .img {
        display: inline-block;
        width: 20rem;
        height: 20rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        position: relative;
        overflow: hidden;
        &:nth-child(3n + 3) {
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
            line-height: 20rem;
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
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
<style scoped>
/* .mask {
  position: absolute;
  top: 0;
  left: 0;
  border: 7.5px solid #ffffff;
  border-top: 0;
  border-bottom: 1vw solid #ffffff;
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
  font-size: 4vw;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
}
.series_img:hover .mask {
  opacity: 0.5;
  transition: all 1.5s ease-in-out;
}
.content {
  padding: 0 16vw;
  margin-top: 0;
}
.content h1 {
  padding-top: 2vw;
  font-size: 2vw;
  color: #a19d91;
  font-weight: bolder;
}
.content .type_detail {
  padding: 40px 0;
  padding-left: 255px;
  line-height: 40px;
  color: #a19d91;
}
.content .text {
  padding: 0 12vw 3vw 12vw;
}
.content .text p {
  color: #a19d91;
  font-size: 0.8vw;
  padding: 1vw 0 0 1vw;
  text-align: left;
}
.show_pic {
  flex-wrap: wrap;
}
.series_img {
  padding-bottom: 1vw;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
}
.link_img {
  width: 100%;
  height: 100%;
} */
</style>