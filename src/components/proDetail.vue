<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <Nav-component></Nav-component>
      <el-row>
        <!-- 产品标题 -->
        <el-col class="content_header">
          <el-col class="pro_title" :span="24">灰 GY1001</el-col>
          <el-col class="pro_type" :span="24">灯具</el-col>
        </el-col>
        <!-- 产品内容 -->
        <el-col>
          <el-col :span="8" class="pro_img" :xs="24">
            <img src="../../static/img/pro_one.jpg" alt />
          </el-col>
          <el-col :span="12" :offset="4" class="pro_left" :xs="{span:24,offset:0}">
            <el-row class="item_one">
              <h1 class="item_title">主要材料</h1>
              <el-col class="item">混泥土、大理石</el-col>
            </el-row>

            <el-row class="item_one">
              <h1 class="item_title">规格</h1>
              <el-col class="item" :span="9" :md="24" :sm="24" :xs="24">
                <el-col class="item">尺寸：600 x 600 mm</el-col>
                <el-col class="item">重量：</el-col>
                <el-col class="item">光源：</el-col>
                <el-col class="item">电压：</el-col>
              </el-col>
              <el-col
                class="pro_img"
                :span="7"
                :offset="8"
                :md="{offset:0}"
                :sm="{offset:0}"
                :xs="{offset:0}"
              >
                <img src="../../static/img/box.jpg" alt />
              </el-col>
            </el-row>

            <el-row class="item_one">
              <el-col class="item">其他颜色和纹理可根据要求定制</el-col>
            </el-row>

            <el-row class="item_one">
              <h1 class="item_title">使用区域</h1>
              <el-col class="item">室内：</el-col>
              <el-col class="item">室外：</el-col>
            </el-row>

            <el-row class="item_one">
              <h1 class="item_title">类似产品</h1>
              <el-row :gutter="5" class="pro_like" type="flex">
                <el-col :span="4" :xs="8">
                  <img src="../../static/img/pro_like.jpg" alt />
                </el-col>
                <el-col :span="4" :xs="8">
                  <img src="../../static/img/pro_like.jpg" alt />
                </el-col>
                <el-col :span="4" :xs="8">
                  <img src="../../static/img/pro_like.jpg" alt />
                </el-col>
                <el-col :span="4" :xs="8">
                  <img src="../../static/img/pro_like.jpg" alt />
                </el-col>
                <el-col :span="4" :xs="8">
                  <img src="../../static/img/pro_like.jpg" alt />
                </el-col>
                <el-col :span="4" :xs="8">
                  <img src="../../static/img/pro_like.jpg" alt />
                </el-col>
              </el-row>
            </el-row>

            <el-row class="item_one">
              <router-link to="#" class="pro_down">下载图片</router-link>
              <router-link to="#" class="pro_down">下载技术参数表</router-link>
              <el-col class="pro_text">
                对于价格、可用性、起订量、货期和销售条款等请
                <router-link to="#" class="pro_link">联络我们</router-link>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
        <el-col class="pro_pic">
          <el-col>
            <img src="../../static/img/pic.jpg" alt />
          </el-col>
        </el-col>
        <el-col class="pro_pic">
          <el-col>
            <img src="../../static/img/pic.jpg" alt />
          </el-col>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
import {requestProduct} from '../api/api';
export default {
  name: "proDetail",
  components: {
    NavComponent
  },
  methods:{
    getProduct(){
      console.log(this.$route.params.id);
      var allParams = '?id='+ this.$route.params.id;
        requestProduct(allParams).then((res) => {
          console.log(res.data);
          this.title = res.data.title;
          this.detail = res.data.description;
          this.list = res.data.products;
        });
    }
  },
  mounted:function(){
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
  height: 100%;
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

@media screen and (max-width: 778px) {
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
}
</style>