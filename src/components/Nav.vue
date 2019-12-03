<template>
  <div>
    <transition name="fade">
      <div class="nav_item" v-if="navShow">
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
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      navShow: ""
    };
  },
  mounted() {},
  created() {
    // 控制是否显示导航栏
    this.$bus.on("isShow", val => {
      this.navShow = val;
    });
  },
  methods: {}
};
</script>
<style scoped>
.nav_item {
  position: absolute;
  z-index: 999;
  background-color: #e6e7e7;
  width: 12.5rem;
  height: 45rem;
  overflow: hidden;
  opacity: 0.9;
  right: 0;
  top: 7.2rem;
}
.fade-enter-active {
  animation: openNav 0.8s ease-in-out;
}
.fade-leave-active {
  animation: closeNav 0.8s ease-in-out;
}
@keyframes openNav {
  0% {
    height: 0;
  }
  100% {
  }
}
@keyframes closeNav {
  0% {
  }
  100% {
    height: 0%;
  }
}

.nav_item .item {
  text-indent: 3rem;
  line-height: 5rem;
  color: #868379;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 1;
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