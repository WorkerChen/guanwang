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
          <div class="Nav_item" ref="float">
            <div class="Nav_text">
              <span class="glyphicon glyphicon-align-justify" id="icon" v-on:click="menu"></span>
              <div class="ning" style="display:none;width:1.8rem; margin-left:1rem ;options:0">
                <router-link to="/">
                  <img src="../../static/img/ning.png" alt style="width:100%; height:100%" />
                </router-link>
              </div>
              <span
                class="glyphicon glyphicon-arrow-left"
                style="color:#fff;margin-left:1.5rem;display:none"
                @click="back"
              ></span>
              <a @click="changeType('zh')">中</a>
              <a>/</a>
              <a @click="changeType('en')">EN</a>
            </div>
            <div class="hover" ref="hover"></div>
            <transition name="Menu">
              <div class="nav_item" v-show="navShow" ref="Menu">
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
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from "util";
import { Menu } from "element-ui";
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
    // 监听浏览器滚动事件
    window.addEventListener("scroll", this.float);
  },
  methods: {
    menu: function() {
      this.navShow = !this.navShow;
      var Menu = this.$refs.Menu;
      let offscroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (offscroll > this.clientHeight) {
        Menu.style.width = "14rem";
        Menu.style.marginTop = "5.7rem";
        Menu.style.transition = "2s ";
      } else {
        Menu.style.width = "12.5rem";
        Menu.style.marginTop = "5.7rem";
        Menu.style.transition = "2s";
      }
    },

    changeType(type) {
      localStorage.setItem("locale", type);
      this.$i18n.locale = type;
      this.$bus.emit("ChangeLocation", type);
    },
    back() {
      this.$router.go(-1);
    },

    float() {
      let offscroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      let top = offscroll;
      var float = this.$refs.float;
      let float_a = float.children[0].children;
      let float_hover = float.children[1];
      var Menu = this.$refs.Menu;
      // 判断滚动条高度是否超过头部
      if (top > this.clientHeight) {
        float.style = "position:fixed;top:1rem;";
        for (let i = 0; i < float_a.length; i++) {
          if (i > 2) {
            float_a[i].style.display = "none";
            float_a[i].style.transition = "2s";
            float_a[i].style.options = "1";
          }
          float_a[i].style.color = "#fff";
          float_a[1].style.display = "inline-block";
          float_a[2].style.display = "inline-block";
        }
        float_hover.style.width = "14rem";
        float_hover.style.transition = "2s";
        if (Menu) {
          Menu.style.width = "14rem";
          Menu.style.marginTop = "5.7rem";
          Menu.style.transition = "2s";
        }
      } else {
        for (let i = 0; i < float_a.length; i++) {
          if (i > 2) {
            float_a[i].style.display = "inline-block";
            float_a[i].style.transition = "2s";
            float_a[i].style.options = "0";
          }
          float_a[i].style.color = "#868379";
          float_a[1].style.display = "none";
          float_a[1].style.options = "1";
          float_a[i].style.transition = "2s";
          float_a[2].style.display = "none";
        }
        float_hover.style.width = "0";
        if (Menu) {
          Menu.style.width = "12.5rem";
          Menu.style.marginTop = "5.7rem";
          Menu.style.transition = "1s";
        }
      }
    }
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
      right: 0;
      width: 8rem;
      height: 4.5rem;
      float: right;
      display: block;
      z-index: 999;
      &::after {
        clear: both;
      }

      .Nav_item {
        width: 8rem;
        height: 4.5rem;
        position: relative;
        z-index: 999;

        .Nav_text {
          position: absolute;
          bottom: 0rem;
          font-size: 1rem;
          line-height: 1.5rem;
          width: 14rem;
          z-index: 999;

          .glyphicon {
            width: 2.3rem;
            line-height: 1.6rem;
            color: #868379;
            overflow: hidden;
            vertical-align: bottom;
            transition: 2s;
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

        .hover {
          position: absolute !important;
          bottom: -1.2rem !important;
          left: -1.4rem;
          height: 100%;
          font-size: 1rem;
          width: 0;
          height: 4rem;
          background: #3c393c;
          opacity: 0.5;
        }
      }
    }
  }
}
@keyframes down {
  0% {
    padding: 0;
  }
  100% {
    padding: 0 1.3rem;
  }
}
.Menu-enter-active {
  transition-delay: 3s;
  animation: openNav 2s ease-in-out;
}
.Menu-leave-active {
  transition-delay: 3s;
  animation: closeNav 2s ease-in-out;
}
@keyframes openNav {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes closeNav {
  0% {
    opacity: 1;
  }
  100% {
    height: 0;
  }
}
</style>

<style scoped>
.nav_item {
  position: fixed;
  right: -4rem;
  margin-top: 5rem;
  background-color: #f5f6f6;
  width: 12.5rem;
  height: 35rem;
  overflow: hidden;
  opacity: 0.9;
  right: 0;
  top: 1rem;
  z-index: 999;
}
.nav_item .item {
  text-indent: 3rem;
  line-height: 5rem;
  color: #868379;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 1;
  z-index: 999;
}

.nav_item .item:hover {
  background-color: #cccccc;
}
.nav_item .item:active {
  background-color: #cccccc;
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
</style>