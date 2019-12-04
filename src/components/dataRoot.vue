<template>
  <div>
    <NavComponent></NavComponent>
    <div class="content">
      <div class="data_title">资源</div>
      <div class="data_item">
        <div class="item" v-for="item in list" v-bind:key="item.id">
          <router-link :to="{ name: 'DataDetail', query: { id: item.id }}" class="link_img">
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.cover" alt />
          </router-link>
        </div>
      </div>
    </div>
    <!-- <el-row class="content">
      <h1 class="data_title">{{$t('data.name')}}</h1>
      <el-row type="flex" :gutter="16" class="showImg">
        <el-col :span="12" class="data_img" v-for="item in list" v-bind:key="item.id">
          <router-link :to="{ name: 'DataDetail', params: { id: item.id }}" class="link_img">
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.cover" alt />
          </router-link>
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
      count: 0,
      limit: 10,
      currentPage: 1,
      list: []
    };
  },
  methods: {
    getList() {
      var language = this.$i18n.locale == "zh" ? "1" : "2";
      var allParams =
        "?page=" +
        this.currentPage +
        "&limit=" +
        this.limit +
        "&language=" +
        language +
        "sort=1";
      requestDatas(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    }
    // gotoDetail(id) {
    //   console.log(id);
    //   this.$router.push({ name: "dynDetail", params: { id: id } });
    // }
  },
  mounted: function() {
    this.getList();
  },
  created() {
    // 控制是否显示导航栏
    this.$bus.on("ChangeLocation", val => {
      this.getList();
    });
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
    text-align: center;
    font-size: 2.6rem;
    color: #86837a;
    font-weight: bolder;
  }
  .data_item {
    width: 100%;
    margin-top: 7rem;
    .item {
      display: inline-block;
      width: 32rem;
      height: 28rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      position: relative;

      &:nth-child(even) {
        margin-right: 0;
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
          line-height: 28rem;
          color: #fff;
        }
      }
      img {
        width: 100%;
        height: 100%;
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