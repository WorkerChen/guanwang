<template>
  <div>
    <transition name="fade">
      <div class="nav_item" v-if="navShow">
        <router-link to="/series">
          <div class="item">产品</div>
        </router-link>
        <router-link to="/projuct">
          <div class="item">项目</div>
        </router-link>
        <router-link to="/dynamic">
          <div class="item">动态</div>
        </router-link>
        <router-link to="/dataRoot">
          <div class="item">资料</div>
        </router-link>
        <router-link to="/contact">
          <div class="item">联络</div>
        </router-link>
        <router-link to="/about">
          <div class="item">我们</div>
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
  width: 246px;
  height: 750px;
  overflow: hidden;
  opacity: 0.9;
  right: 0;
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
  text-indent: 60px;
  line-height: 100px;
  color: #868379;
  font-size: 25px;
  cursor: pointer;
  opacity: 1;
}

.nav_item .item:hover {
  background-color: #cccccc;
}
.nav_item .item:active {
  background-color: #cccccc;
}

@media screen and (max-width: 1200px) {
  .nav_item {
    width: 180px;
    height: 600px;
  }

  .nav_item {
    width: 166px;
    height: 600px;
  }
  .nav_item .item {
    font-size: 18px;
    text-indent: 50px;
    line-height: 50px;
  }
}
@media screen and (max-width: 778px) {
  .nav_item {
    width: 80px;
    height: 300px;
  }
  .nav_item .item {
    font-size: 14px;
    text-indent: 33px;
    line-height: 30px;
  }
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