<template>
  <div>
    <div class="footer">
      <el-footer>
        <div class="footer_item">
          <div class="item_link">
            <a href="/about">{{$t('footer.about')}}</a>
          </div>
          <div class="item_link">
            <a href="/contact">{{$t('footer.contact')}}</a>
          </div>
          <div class="item_link">
            <a href="/join">{{$t('footer.join')}}</a>
          </div>

          <div class="item_link">
            <a href="#">info@ns-space.cn</a>
          </div>
        </div>
        <div class="footer_text">
          <div class="text">
            Copyright © 2019 NINGSHENG All Rights Reserved.
            <span>粤ICP备19135826号-1</span>
          </div>
          <div class="icon">
            <a href="../../static/img/WeChat.jpg" target="_blank">
              <i class="iconfont">&#xe634;</i>
            </a>
            <a href="https://www.instagram.com/ningsheng_/" target="_blank">
              <i class="iconfont">&#xe607;</i>
            </a>
            <a href="https://weibo.com/ningshengspace" target="_blank">
              <i class="iconfont">&#xe60c;</i>
            </a>
            <a href="https://www.pinterest.co.uk/ningsheng_/" target="_blank">
              <i class="iconfont">&#xe60a;</i>
            </a>
          </div>
        </div>
      </el-footer>
    </div>

    <!-- <div class="footer">
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
    </div>-->
  </div>
</template>
<script>
export default {};
</script>

<style scoped lang="less">
.footer {
  padding: 3.8rem 15rem;
  width: 100%;
  height: 10rem;
  background: #868379;
  color: #ffffff;
  margin-top: 10.5rem;
  .footer_item {
    display: flex;
    .item_link {
      margin-right: 1.2rem;
      vertical-align: top;
      a {
        font-size: 0.9rem;

        color: #e1dedb;
        text-decoration: none;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .footer_text {
    height: 2.7rem;
    position: relative;
    .text {
      position: absolute;
      bottom: 0;
      display: inline;
      font-size: 0.9rem;
      vertical-align: bottom;
      color: #e1dedb;
      span {
        margin-left: 1.8rem;
      }
    }
    .icon {
      display: inline-block;
      position: absolute;
      bottom: 0;
      right: 0;
      a {
        color: #e1dedb;
        text-decoration: none;
        .iconfont {
          font-size: 2rem;
          margin-left: 0.2rem;
          cursor: pointer;
        }
      }
    }
  }
}
</style>