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
  methods: {}
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
  color: #2c3e50;
  overflow: hidden;
}
body,
p,
ul,
li,
ol,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
td,
input,
textarea,
select,
option {
  margin: 0;
  padding: 0;
}

ul,
ol,
li {
  list-style: none;
}
a {
  text-decoration: none;
  display: block;
}
img {
  border: none;
  display: block;
}
.router-link-active {
  text-decoration: none;
}
</style>