<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <div class="logo_img">
          <img src="../../static/img/logo.png" alt />
        </div>
        <div class="Nav">
          <div class="Nav_item">
            <div class="Nav_text">
              <span class="glyphicon glyphicon-align-justify" v-on:click="menu"></span>
              <a @click="changeType('zh')">中</a>
              <a>/</a>
              <a @click="changeType('en')">EN</a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="float" v-if="isShow">
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
      </div>-->
    </div>
  </div>
  <!-- <div>
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
  </div>-->
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
    changeType(type) {
      localStorage.setItem("locale", type);
      this.$i18n.locale = type;
      this.$bus.emit("ChangeLocation", type);
    }
  },
  components: {
    NavComponent
  }
};
</script>
<style scoped lang="less">
.wrapper {
  width: 100%;

  .header {
    padding: 2.2rem 5.5rem;
    width: 100%;
    height: 9.5rem;
    height: 9.5rem;
    display: inline-block;
    overflow: hidden;

    .logo_img {
      padding: 0;
      display: inline-block;
      margin: 0;
      width: 16.2rem;
      height: 4.5rem;
      vertical-align: middle;
      img {
        height: 4.5rem;
        display: inline-block;
        width: 16.2rem;
        overflow: hidden;
      }
    }

    .Nav {
      display: inline-block;
      right: 0;
      width: 8rem;
      height: 4.5rem;
      float: right;
      &::after {
        clear: both;
      }

      .Nav_item {
        width: 8rem;
        height: 4.5rem;
        position: relative;

        .Nav_text {
          position: absolute !important;
          bottom: 0 !important;
          font-size: 1.5rem;
          line-height: 1.5rem;
          overflow: hidden;
          .glyphicon {
            width: 2.3rem;
            line-height: 1.5rem;
            color: #868379;
            overflow: hidden;
            &::before {
              line-height: 1.5rem;
              cursor: pointer;
              margin-right: 1.2rem;
            }
          }
          a {
            text-decoration: none;
            color: #868379;
            cursor: pointer;
            &:nth-child(even):hover {
              color: #cccccc;
            }
          }
        }
      }
    }
  }

  .float {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
  }
}
</style>