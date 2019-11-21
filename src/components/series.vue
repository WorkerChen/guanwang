<template>
  <div>
    <el-row class="content">
      <nav-component></nav-component>
      <el-row class="series_title">{{$t('product.name')}}</el-row>
      <el-row class="series_pic" type="flex" justify="center" :gutter="10">
        <el-col class="series_img" :span="12" v-for="item in list" v-bind:key="item.id">
          <router-link :to="{ name: 'SeriesType', params: { id: item.id }}">
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.image" alt  />
             </router-link>
        </el-col>
        <!-- <el-col :span="12" class="series_img">
          <router-link to="/series/SeriesType">
            <div class="mask">
              <div class="mask_text">123</div>
            </div>
            <img src="../../static/img/series_four.jpg" alt />
          </router-link>
        </el-col> -->
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
import {requestTypes} from '../api/api'; 
export default {
  name: "Series",

  components: {
    NavComponent
  },
  data(){
    return {
      count:0,
      limit:10,
      currentPage: 1,
      list:[]
    }
  },
  methods:{
    getList(){
      var language = this.$i18n.locale=="zh"?"1":"2";
      var allParams = '?page='+ this.currentPage + '&limit=' + this.limit+"&language="+language;
        requestTypes(allParams).then((res) => {
          this.list=res.data.data;
          this.count=res.data.count
        });
    },
    gotoDetail(id){
      console.log(id);
      this.$router.push({ name: 'SeriesType',params:{id:id}});
    }
  },
  created() {
    // 控制是否显示导航栏
    this.$bus.on("ChangeLocation", val => {
      this.getList();
    });
  },
  mounted:function(){
    this.getList();
  }
};
</script>
<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  border: 7.5px solid #ffffff;
  border-top: 0;
  border-bottom: 0;
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
  font-size: 3vw;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.series_img:hover .mask {
  opacity: 0.5;
  transition: all 1.5s ease-in-out;
}
.content {
  padding: 0vw 16vw;
  margin-top: 0;
}
.content .series_title {
  text-align: center;
  font-size: 3vw;
  font-weight: bolder;
  color: #86837a;
  padding: 3vw 0;
}
.series_pic {
  flex-wrap: wrap;
}
.series_img {
  position: relative;
  margin-bottom: 1vw;
}

img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
@media screen and (max-width: 778px) {
  .content .series_title {
    font-size: 20px;
    padding: 20px;
  }
}
</style>