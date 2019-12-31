<template>
  <div>
    <div class="content">
      <h1 class="con_title">{{$t('contact.name')}}</h1>
      <div class="con_item">
        <div class="item">
          <div class="item_title">{{$t('contact.join')}}</div>
          <div class="item_text">
            <div class="text">邮箱：{{email}}</div>
            <div class="text">电话：{{phone}}</div>
          </div>
        </div>

        <div class="item">
          <div class="item_title">{{$t('contact.buy')}}</div>
          <div class="item_text">
            <div class="text">零售电话:{{buy}}</div>
            <div class="text">工程购买:{{eng_buy}}</div>
          </div>
        </div>

        <div class="item">
          <div class="item_title">{{$t('contact.media')}}</div>
          <div class="item_text">
            <div class="text">商务合作:{{bussiness}}</div>
            <div class="text">媒体合作:{{media}}</div>
          </div>
        </div>
      </div>

      <div class="con_icon">
        <div class="icon_item wechat">
          <i class="iconfont icon-weixin icon"></i>
          {{$t('contact.wechat')}}
          <img :src="wechat_bg" />
        </div>
        <div class="icon_item">
          <a href="https://www.instagram.com/ningsheng_/" target="_blank">
            <i class="iconfont icon-ins icon"></i>
            {{$t('contact.ins')}}
            <img :src="ins_bg" />
          </a>
        </div>
        <div class="icon_item">
          <a href="https://weibo.com/ningshengspace" target="_blank">
            <i class="iconfont icon-weibo icon"></i>
            {{$t('contact.weibo')}}
            <!-- <img :src="weibo_bg" /> -->
          </a>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <!-- <el-row class="content">
      <el-row>
        <h1 class="detail_title">{{$t('contact.name')}}</h1>
      </el-row>
      <el-row class="join">
        <h1 class="join_title">{{$t('contact.join')}}</h1>
        <el-row class="contact_text">
          <el-col class="item" :span="24">邮箱：{{email}}</el-col>
          <el-col class="item" :span="24">电话：{{phone}}</el-col>
        </el-row>
      </el-row>
      <el-row class="join">
        <h1 class="join_title">{{$t('contact.buy')}}</h1>
        <el-row class="contact_text">
          <el-col class="item" :span="24">零售电话:{{buy}}</el-col>
          <el-col class="item" :span="24">工程购买:{{eng_buy}}</el-col>
        </el-row>
      </el-row>
      <el-row class="join">
        <h1 class="join_title">{{$t('contact.media')}}</h1>
        <el-row class="contact_text">
          <el-col class="item" :span="24">商务合作:{{bussiness}}</el-col>
          <el-col class="item" :span="24">媒体合作:{{media}}</el-col>
        </el-row>
      </el-row>
      <el-row class="join">
        <el-row class="way">
          <el-col :span="8" :xs="24">
            <i class="iconfont icon-weixin icon"></i>{{$t('contact.wechat')}}
          </el-col>
          <el-col :span="8" :xs="24">
            <i class="iconfont icon-ins icon"></i>{{$t('contact.ins')}}
          </el-col>
          <el-col :span="8" :xs="24">
            <i class="iconfont icon-weibo icon"></i>{{$t('contact.weibo')}}
          </el-col>
        </el-row>
      </el-row>
    </el-row>-->
  </div>
</template>
<script>
import { requestConfigs } from "../api/api";
export default {
  name: "seriesDetail",
  data() {
    return {
      bussiness: "",
      buy: "",
      email: "",
      eng_buy: "",
      ins_bg: "",
      ins_title: "",
      media: "",
      phone: "",
      wechat_bg: "",
      wechat_title: "",
      weibo_bg: "",
      weibo_title: ""
    };
  },
  methods: {
    getConfigs() {
      var allparams = "?sort=1";
      requestConfigs(allparams).then(res => {
        if (res.data == "{}") {
          this.$message({
            message: "请求失败",
            type: "error"
          });
        } else {
          let data = res.data;
          console.log(data);
          if (data) {
            (this.buy = data.buy),
              (this.bussiness = data.bussiness),
              (this.email = data.email),
              (this.eng_buy = data.eng_buy),
              (this.ins_bg = data.ins_bg),
              (this.ins_title = data.ins_title),
              (this.media = data.media),
              (this.phone = data.phone),
              (this.wechat_bg = data.wechat_bg),
              (this.wechat_title = data.wechat_title),
              (this.weibo_bg = data.weibo_bg),
              (this.weibo_title = data.weibo_title);
          }
        }
      });
    }
  },
  mounted: function() {
    this.getConfigs();
  }
};
</script>
<style scoped lang="less">
.content {
  width: 96rem;
  padding: 0 15rem;
  margin-top: 5.1rem;
  .con_title {
    width: 100%;
    text-align: center;
    color: #86837a;
    font-size: 2.6rem;
    font-weight: bold;
  }
  .con_item {
    width: 100%;

    margin-top: 7rem;

    .item_title {
      font-size: 2rem;
      color: #86837a;
      font-weight: 600;
    }
    .item {
      margin-top: 4.5rem;
      color: #86837a;
      font-size: 1rem;
      .item_text {
        margin-top: 3rem;

        .text {
          line-height: 2.4rem;
        }
      }
    }
  }
  .con_icon {
    margin-top: 7.6rem;
    display: flex;
    height: 18.3rem;

    .icon_item {
      width: 33%;
      color: #86837a;
      line-height: 3rem;
      font-size: 1rem;
      height: 3rem;
      cursor: pointer;

      .iconfont {
        font-size: 3rem;
        vertical-align: middle;
        margin-right: 0.8rem;
        color: #86837b;
      }
      a {
        text-decoration: none;
        color: #86837b;
      }
      &:hover img {
        display: block;
      }
      img {
        display: block;
        margin-top: 2rem;
        width: 11rem;
        height: 11rem;
        display: none;
      }
    }
    .wechat {
      img {
        width: 11rem;
        height: 11rem;
        display: none;
      }
    }
  }
}
</style>
