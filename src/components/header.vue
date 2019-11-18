<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="header" id="header">
          <div class="logo col-md-4">
            <router-link to="/">
              <img src="../../static/img/logo.png" alt class="img_logo" />
            </router-link>
          </div>
          <div class="nav col-lg-2 col-lg-offset-6 col-xs-offset-0 col-sm-offset-3">
            <div class="lang">
              <span class="glyphicon glyphicon-align-justify icon" v-on:click="menu" id="icon"></span>
              <a @click="changeType('zh')">中</a>
              <a>/</a>
              <a @click="changeType('en')">EN</a>
            </div>
          </div>
        </div>
        <div class="float" v-if="isShow">
          <div class="float_header">
            <span
              class="glyphicon glyphicon-align-justify hide_icon"
              v-on:click="float_navShow"
              id="icon"
            ></span>
            <span class="hide_text">
              <router-link to="/">凝</router-link>
            </span>
          </div>

          <div>
            <transition name="fade">
              <div class="float_nav" v-if="float_nav_show">
                <div class="float_item">
                  <router-link to="/series">
                    <div class="item">{{$t('nav.product')}}</div>
                  </router-link>
                  <router-link to="/projuct">
                    <div class="item">{{$t('nav.project')}}</div>
                  </router-link>
                  <router-link to="/dynamic">
                    <div class="item">{{$t('nav.moments')}}</div>
                  </router-link>
                  <router-link to="/dataRoot">
                    <div class="item">{{$t('nav.data')}}</div>
                  </router-link>
                  <router-link to="/contact">
                    <div class="item">{{$t('nav.contact')}}</div>
                  </router-link>
                  <router-link to="/about">
                    <div class="item">{{$t('nav.about')}}</div>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavComponent from "./Nav";
export default {
  name: "headerComponents",
  data() {
    return {
      navShow: false,
      isShow: false,
      clientHeight: "",
      float_nav_show: false
    };
  },
  mounted() {
    // 获取header高度
    this.clientHeight = document.getElementById("header").offsetHeight;
    // 获取滚动条高度
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      // 判断滚动条高度是否超过头部
      if (top > this.clientHeight) {
        this.isShow = true;
        this.navShow = false;
        this.$bus.emit("isShow", this.navShow);
      } else {
        this.isShow = false;
      }
    });

    console.log(this.clientHeight);

    document.addEventListener("click", e => {
      if (e.target.id != "icon") {
        this.navShow = false;
        this.$bus.emit("isShow", this.navShow);
        this.float_nav_show = false;
      }
    });
  },
  methods: {
    menu: function() {
      this.navShow = !this.navShow;
      this.$bus.emit("isShow", this.navShow);
    },
    float_navShow: function() {
      this.float_nav_show = !this.float_nav_show;
    },
    changeType(type){
      localStorage.setItem('locale',type)
      this.$i18n.locale = type;
    }
  },
  components: {
    NavComponent
  }
};
</script>
<style scoped>
.header {
  display: inline-block;
  width: 100%;
  padding: 1vw 0;
  position: relative;
}
.header * {
  vertical-align: bottom;
}

.logo_img {
  width: 100%;
  height: 100%;
}
.header .nav {
  text-align: right;
  color: #86837a;
  cursor: pointer;
  padding-right: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-bottom: 1vw;
}
.lang {
  font-size: 0;
  line-height: 30px;
  right: 0;
  bottom: 0;
}

.lang a {
  display: inline-block;
  font-size: 25px;
  color: #868379;
  line-height: 30px !important;
  user-select: none;
}

.lang a:nth-child(2n):hover {
  color: red;
}

.lang a:hover {
  text-decoration: none;
}
.glyphicon {
  top: 0;
}
.icon::before {
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
  font-size: 30px;
  line-height: 30px;
  margin-top: 50px;
}
.float {
  position: fixed;
  z-index: 999;
  right: 118px;
  top: 0;
  width: 120px;
}
.float_header {
  display: flex;
  animation: hide_show 1s ease-out;
  background: #86837a;
  overflow: hidden;
  height: 70px;
}

.float_header .hide_text a {
  text-decoration: none;
  color: #fff;
  font-size: 30px;
  font-weight: bolder;
  line-height: 70px;
  vertical-align: middle;
}

.float_header .hide_icon::before {
  font-size: 30px;
  line-height: 70px;
  vertical-align: middle;
  color: #fff;
  margin-right: 20px;
  margin-left: 20px;
}

.float .float_nav {
  background-color: #e6e7e7;
  overflow: hidden;
  opacity: 0.9;
}

.fade-enter-active {
  animation: openFloatNav 0.8s ease-in-out;
}
.fade-leave-active {
  animation: openFloatNav 0.8s reverse;
}
@keyframes openFloatNav {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}

.float_nav .float_item .item {
  text-align: center;
  line-height: 50px;
  color: #868379;
  font-size: 20px;
  cursor: pointer;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.float_item .item:hover {
  background-color: #cccccc;
}
.float_item .item:active {
  background-color: #cccccc;
}

@keyframes hide_show {
  0% {
    width: 0%;
  }
  100% {
    width: 120px;
  }
}

@media screen and (max-width: 1920px) {
  .container {
    width: 1671px;
  }
  .container_content {
    width: 1300px;
  }
}
@media screen and (max-width: 1765px) {
  .container {
    width: 1500px;
  }
  .container_content {
    width: 1300px;
  }
  .float {
    right: 134px;
  }
}
@media screen and (max-width: 1520px) {
  .container {
    width: 1250px;
  }
}
@media screen and (max-width: 1260px) {
  .container {
    width: 1000px;
  }
  .header .nav {
    line-height: 66px;
  }
  .lang a {
    font-size: 24px;
    line-height: 24px !important;
    margin-top: 0;
  }
  .icon {
    font-size: 24px;
    margin-right: 0;
    line-height: 24px;
    vertical-align: bottom;
  }
  .textbook {
    margin-left: 0;
    font-size: 20px;
  }
}
@media screen and (max-width: 1100px) {
  .container {
    width: 980px;
  }
  .logo {
    height: 100%;
  }
  .float {
    right: 60px;
  }
  @keyframes hide_show {
    0% {
      width: 0%;
    }
    100% {
      width: 100px;
    }
  }
}
@media screen and (max-width: 1000px) {
  .container {
    width: 100%;
  }
  .float {
    right: 0;
    width: 100px;
  }

  .float_header .hide_text a {
    font-size: 24px;
  }

  .float_header .hide_icon::before {
    font-size: 24px;

    margin-right: 20px;
    margin-left: 20px;
  }
}
@media screen and (max-width: 778px) {
  .container {
    width: 100%;
  }

  .header * {
    padding: 0;
    vertical-align: bottom;
  }
  .header .nav {
    line-height: 40px;
  }
  .lang {
    line-height: 34px;
    vertical-align: top;
  }
  .lang a {
    font-size: 16px;
    line-height: 20px !important;
  }
  .img_logo {
    vertical-align: top;
    width: 140px;
  }
  .logo {
    display: inline-block;
  }

  .nav {
    display: inline-block;
    float: right;
  }
  .icon::before {
    font-size: 16px;
    margin-right: 5px;
    line-height: 16px;
    vertical-align: bottom;
  }
}
</style>