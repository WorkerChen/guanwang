<template>
  <div>
    <div class="wrapper">
      <div class="header" id="header">
        <div class="logo_img">
          <router-link to="/">
            <img src="../../static/img/logo.png" alt />
          </router-link>
        </div>
        <div class="Nav">
          <div class="Nav_item">
            <div class="Nav_text">
              <span class="glyphicon glyphicon-align-justify" id="icon" v-on:click="menu"></span>
              <a @click="changeType('zh')">中</a>
              <a>/</a>
              <a @click="changeType('en')">EN</a>
            </div>
          </div>
        </div>
      </div>
      <div class="float" v-if="isShow">
        <div class="float_header">
          <span class="hide_text">
            <router-link to="/">凝</router-link>
          </span>
          <span
            class="glyphicon glyphicon-align-justify hide_icon"
            v-on:click="float_navShow"
            id="icon"
          ></span>
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
    document.addEventListener("click", e => {
      if (e.target.id != "icon") {
        this.navShow = false;
        this.$bus.emit("isShow", this.navShow);
        this.float_nav_show = false;
      }
    });
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
    padding: 1.2rem 4.5rem;
    width: 100%;
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
          vertical-align: bottom;

          .glyphicon {
            width: 2.3rem;
            line-height: 1.5rem;
            color: #868379;
            overflow: hidden;
            vertical-align: bottom;
            &::before {
              line-height: 1.5rem;
              cursor: pointer;
              margin-right: 1.2rem;
              font-size: 1.4rem;
            }
          }
          a {
            text-decoration: none;
            color: #868379;
            cursor: pointer;
            font-size: 1.4rem;

            &:nth-child(even):hover {
              color: #cccccc;
            }
          }
        }
      }
    }
  }

  .float {
    font-size: 1.5rem;
    position: fixed;
    top: 1rem;
    right: 4.5rem;
    z-index: 999;
    padding: 0 1.4rem;
    background: #86837a;
    animation: down 1s ease-in;
    opacity: 0.9;

    .float_header {
      width: 100%;
      height: 100%;
      line-height: 4rem;
      .hide_text {
        margin-right: 0.5rem;

        a {
          display: inline-block;
          vertical-align: middle;
          text-decoration: none;
          color: #e0deda;
          font-weight: bolder;
          cursor: pointer;
        }
      }
      .glyphicon {
        font-size: 1.4rem;

        vertical-align: middle;

        color: #e0deda;
      }
    }

    .float_nav {
      width: 100%;
      .float_item {
        width: 100%;
        a {
          text-decoration: none;
          font-size: 1rem;
          cursor: pointer;
          .item {
            cursor: pointer;
            line-height: 3rem;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
}
@keyframes down {
  0% {
    padding: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
    padding: 0 1.3rem;
  }
}
</style>
<style scoped>
</style>