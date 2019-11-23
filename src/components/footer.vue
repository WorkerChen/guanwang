<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer_item">
            <div>
              <router-link to="/about">{{$t('footer.about')}}</router-link>
            </div>
            <div>
              <router-link to="/contact">{{$t('footer.contact')}}</router-link>
            </div>
            <div>
              <router-link to="/contact">{{$t('footer.join')}}</router-link>
            </div>
            <div>
              <router-link to="#">info@ns-space.cn</router-link>
            </div>
          </div>
          <div class="footer_text">
            Copyright © 2019 NINGSHENG All Rights Reserved.
            <span class="bianhao">粤ICP备19135826号-1</span>
            <div class="footer_icon">
              <i class="iconfont">&#xe628;</i>
              <i class="iconfont">&#xe639;</i>
              <i class="iconfont">&#xe63d;</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-row class="footer">
      <el-col :span="24" :xs="24">
        <el-row class="foot_nav">
          <el-col :xs="24" :sm="3" :md="2" :lg="2" :xl="2">
            <router-link to="/about">关于我们</router-link>
          </el-col>
          <el-col :xs="{span:24,offset:0}" :sm="3" :md="2" :lg="2" :xl="2" :offset="1">
            <router-link to="/contact">联络我们</router-link>
          </el-col>
          <el-col :xs="{span:24,offset:0}" :sm="3" :md="2" :lg="2" :xl="2" :offset="1">
            <router-link to="/contact">加入我们</router-link>
          </el-col>
          <el-col :xs="{span:24,offset:0}" :sm="5" :md="4" :lg="4" :xl="4" :offset="1">
            <router-link to="#">info@ns-space.cn</router-link>
          </el-col>
        </el-row>
        <el-row class="footer_text">
          <el-col :span="18" :xs="24" class="foot_text_act">
            Copyright © 2019 NINGSHENG All Rights Reserved.
            <span class="bianhao">粤ICP备19135826号-1</span>
          </el-col>
          <el-col :span="3" :xs="24" class="icon">
            <i class="iconfont aicon" style="font-size:1.5vw">&#xe628;</i>
            <i class="iconfont aicon" style="font-size:1.5vw">&#xe639;</i>
            <i class="iconfont aicon" style="font-size:1.5vw">&#xe63d;</i>
          </el-col>
        </el-row>
      </el-col>
    </el-row>-->
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  background: #868379;
  margin-top: 5vw;
  padding: 42px 0;
  font-size: 18px !important;
  color: #e1dedb;
  width: 100%;
  bottom: 0;
}

.router-link-active {
  text-decoration: none;
}

.footer_item {
  display: flex;
}
.footer_item div {
  display: inline-block;
  padding-right: 24px;
}
.footer_item div a {
  text-decoration: none;
  color: #e1dedb;
}
.footer_item div a:hover {
  color: #ffffff;
}
.footer_item div:last-child {
  display: inline-block;
  padding-right: 0;
}
.footer_text {
  position: relative;
  margin-top: 24px;
  height: 100%;
}
.footer_text span {
  margin-left: 36px;
}
.footer_icon {
  position: absolute;
  right: 0;
  bottom: 0;
}
.footer_icon i {
  margin-right: 10px;
  color: #ffffff;
  font-size: 40px;
  cursor: pointer;
}
@media screen and (min-width: 1920px) {
  .container {
    width: 1300px;
  }
}
@media screen and (max-width: 996px) {
  .footer {
    padding: 2vw 1vw;
    font-size: 14px !important;
  }
  .footer_icon {
    position: relative;
    left: 0;
  }
  .footer_text {
    margin-top: 0;
  }
  .footer_text span {
    display: block;
    margin-left: 0;
  }
  .footer_item {
    display: block;
  }
  .footer_item div {
    width: 100%;
    display: block;
    line-height: 40px;
  }
  .footer_icon .iconfont {
    font-size: 30px;
  }
}
@media screen and (max-width: 778px) {
  .footer {
    font-size: 12px;
    margin-top: 60px;
  }
  .footer_item div {
    line-height: 28px;
  }
  .footer_icon .iconfont {
    font-size: 12px;
  }
}
</style>