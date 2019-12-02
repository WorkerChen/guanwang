<template>
  <div>
    <!-- 内容 -->
    <nav-component></nav-component>
    <div class="content">
      <div class="new_title">新品</div>
      <div class="new_item"></div>
    </div>
  </div>
</template>
 
<script>
import NavComponent from "./Nav";
import { requestNew } from "../api/api";

export default {
  name:''
};
</script>
<style scoped lang="less">
.content {
  padding: 0 15rem;
  width: 96rem;
  margin-top: 5.1rem;
  .new_title {
    font-size: 2.5rem;
    color: #86837a;
    font-weight: bolder;
  }
  .pro_detail {
    width: 100%;
    margin-top: 2.4rem;
    .pro_text {
      padding: 0 13.4rem;
      display: inline-block;
      margin: 0 auto;
    }
    .pro_img {
      margin-top: 5rem;
      width: 100%;
      .item {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
<style scoped>