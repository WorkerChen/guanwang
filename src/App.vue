<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import headerComponent from "./components/header.vue";
import footerComponent from "./components/footer.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    headerComponent,
    footerComponent
  },
  methods: {
    fun(doc, win) {
      var docEl = doc.documentElement,
        resizeEvt =
          "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          docEl.style.fontSize = 20 * (clientWidth / 1920) + "px";
        };
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener("DOMContentLoaded", recalc, false);
    }
  },
  mounted() {
    this.fun(document, window);
  }
};
</script>

<style>
@import "./assets/common/font/font.css";

a {
  text-decoration: none;
}

#app {
  font-family: "huipu", "huipu2", "huipu3", "huipu4", "huipu5";
  text-align: left;
  overflow: hidden;
  /* line-height: 20px; */
  line-height: 2em;
  user-select: none;
}
/* body {
  
} */
/* p{
  margin-block-end: 0em;
} */
</style>