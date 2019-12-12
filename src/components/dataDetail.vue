<template name="component-name">
  <div>
    <NavComponent></NavComponent>
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
    <!-- <el-row class="content">
      <h1 class="detail_title">{{title}}</h1>
      <el-row :gutter="16" type="flex">
        <el-col :span="8" class="data_img">
          <div class="mask">
            <div class="mask_text">123</div>
          </div>
          <img v-bind:src="cover" alt />
        </el-col>
      </el-row>
    </el-row>-->
  </div>
</template>
<script>
import NavComponent from "./Nav";
import { requestDatas } from "../api/api";
export default {
  name: "seriesDetail",
  components: {
    NavComponent
  },
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
</style>
<style scoped>
/* .content {
  padding: 0 16vw;
  margin-top: 0;
}
.content .detail_title {
  color: #a19d91;
  font-size: 2vw;
  padding: 4vw 0;
  text-align: left;
  font-weight: bolder;
}
.content .show_detail {
  flex-wrap: wrap;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  border-top: 0;
  padding: 0 !important;
  right: 0;
  bottom: 0;
  background: #000000;
  opacity: 0;
  width: 100%;
  height: 100%;
}
.mask_text {
  color: #ffffff;
  position: absolute;
  font-size: 4vw;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
}
.data_img:hover .mask {
  opacity: 0.5;
  transition: all 1.5s ease-in-out;
}
.data_img {
  width: 400px;
  height: 400px;
  position: relative;
  overflow: hidden;
  padding: 0 !important;
  margin-bottom: 1vw;
}
.data_img img {
  width: 100%;
  height: 100%;
} */
</style>
