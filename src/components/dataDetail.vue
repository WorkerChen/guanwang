<template name="component-name">
  <div>
    <div class="content">
      <div class="data_title">{{title}}</div>
      <div class="data_item">
        <div class="item" v-for="item in list">
          <a :href="item.file_link">
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.cover" alt />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { requestDatas } from "../api/api";
export default {
  name: "seriesDetail",

  data() {
    return {
      id: 0,
      list: []
    };
  },
  methods: {
    getList() {
      console.log(this.$route.query.id);
      this.title = this.$route.query.title;
      var allParams = "?type_id=" + this.$route.query.id;
      requestDatas(allParams).then(res => {
        if (res.data == "{}") {
          this.$message({
            message: "请求失败",
            type: "error"
          });
        } else {
          this.list = res.data.data;
        }
      });
    }
    // gotoDetail(id){
    //   console.log(id);
    //   this.$router.push({ name: 'dynDetail',params:{id:id}});
    // }
  },
  mounted: function() {
    this.getList();
  }
};
</script>
<style scoped lang="less">
.content {
  padding: 0 15rem;
  width: 96rem;
  margin-top: 5.1rem;
  .data_title {
    width: 100%;
    font-size: 2.6rem;
    color: #86837a;
    font-weight: bolder;
  }
  .data_item {
    margin-top: 8rem;
    width: 100%;
    .item {
      display: inline-block;
      width: 20rem;
      height: 20rem;
      margin-right: 2rem;
      margin-bottom: 2rem;
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
</style>

<style>
.text p span {
  width: 100%;
  display: block;
  padding: 0 12.4rem;
}
.text p img {
  width: 100%;
  height: 100%;
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