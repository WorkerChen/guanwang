<template>
  <div>
    <!-- 内容 -->
    <div class="content">
      <div class="new_title">新品</div>
      <div class="new_item">
        <div class="item" v-for="item in new_list">
          <router-link :to="{ name: 'proDetail', params: { id: item.id}}" class="link_img">
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img :src="item.cover" alt />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { requestNew } from "../api/api";

export default {
  name: "new",
  data() {
    return {
      new_list: []
    };
  },
  methods: {
    getlist() {
      var allParams = "?language=1&limit=10&page=1&newer=1";
      requestNew(allParams).then(res => {
        // console.log(res.data.data);
        this.new_list = res.data.data;
        console.log(this.new_list);
      });
    }
  },

  mounted() {
    this.getlist();
  }
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
  .new_item {
    margin-top: 7rem;
    display: flex;
    .item {
      width: 33%;
      height: 20rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      position: relative;
      &:nth-child(3n + 3) {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
      &:hover .mask {
        display: block;
        opacity: 0.5;
        animation: fade 2s;
      }
      .mask {
        transition: all 2s;
        display: none;
        width: 100%;
        height: 100%;
        background: #000;
        position: absolute;
        opacity: 0.6;
        .mask_text {
          width: 100%;
          height: 100%;
          display: block;
          font-size: 2.2rem;
          font-weight: bolder;
          text-align: center;
          line-height: 20rem;
          color: #fff;
        }
      }
    }
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
<style scoped>