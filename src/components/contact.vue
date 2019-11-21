<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <nav-component></nav-component>
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
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
import {requestConfigs} from '../api/api';
export default {
  name: "seriesDetail",
  components: {
    NavComponent
  },
  data(){
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
    }
  },
  methods:{
    getConfigs(){
      requestConfigs().then((res) => {
          console.log(res)
          let data = res.data;
           console.log(data)
           if(data){
             this.buy = data.buy,
             this.bussiness = data.bussiness,
             this.email = data.email,
             this.eng_buy = data.eng_buy,
             this.ins_bg = data.ins_bg,
             this.ins_title = data.ins_title,
             this.media = data.media,
             this.phone = data.phone,
             this.wechat_bg = data.wechat_bg,
             this.wechat_title = data.wechat_title,
             this.weibo_bg = data.weibo_bg,
             this.weibo_title = data.weibo_title;
           }
        });
    }
  },
  mounted:function(){
    this.getConfigs()
  }
};
</script>
<style scoped>
.content {
  padding: 0vw 16vw;
  margin-top: 0;
}
.content .detail_title {
  color: #a19d91;
  font-size: 3vw;
  text-align: center;
  font-weight: bolder;
  padding: 3vw 0;
}
.content .join {
  padding-bottom: 3vw;
}
.content .join .join_title {
  color: #a19d91;
  font-size: 1.5vw;
  text-align: left;
  font-weight: bolder;
}
.content .contact_text {
  padding: 1vw 0;
}
.content .item {
  font-size: 1vw;
  color: #a19d91;
  font-weight: 400;
  line-height: 2vw;
}
.icon {
  font-size: 2vw;
  color: #000;
  vertical-align: middle;
  padding-right: 1vw;
  cursor: pointer;
}
.way {
  color: #a19d91;
}

@media screen and (max-width: 778px) {
  .content .detail_title {
    font-size: 20px;
    padding: 20px;
  }
  .content .join .join_title {
    margin-top: 18px;
    font-size: 18px;
  }
  .content .contact_text {
    padding-top: 2.5vw;
  }
  .content .item {
    line-height: 20px;
  }

  .way {
    line-height: 30px;
  }
}
</style>
