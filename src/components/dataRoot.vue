<template>
  <div>
    <el-row class="content">
      <NavComponent></NavComponent>
      <h1 class="data_title">{{$t('data.name')}}</h1>
      <el-row type="flex" :gutter="16" class="showImg">
        <el-col :span="12" class="data_img" v-for="item in list" v-bind:key="item.id">
          <router-link :to="{ name: 'DataDetail', params: { id: item.id }}">
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.cover" alt />
          </router-link>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
import {requestDatas} from '../api/api';
export default {
  name: "seriesDetail",
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
        requestDatas(allParams).then((res) => {
          this.list=res.data.data;
          this.count=res.data.count
        });
    },
    gotoDetail(id){
      console.log(id);
      this.$router.push({ name: 'dynDetail',params:{id:id}});
    }
  },
  mounted:function(){
    this.getList();
  },
  created() {
    // 控制是否显示导航栏
    this.$bus.on("ChangeLocation", val => {
      this.getList();
    });
  },
};
</script>
<style scoped>
.content {
  padding: 0 16vw;
  margin-top: 0;
}
.content .data_title {
  text-align: center;
  padding: 3vw 0;
  font-weight: bolder;
  font-size: 3vw;
  color: #86837a;
}
.content .showImg {
  flex-wrap: wrap;
}
.content .showImg img {
  padding-bottom: 1vw;
  width: 100%;
  height: 100%;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  border: 7.5px solid #ffffff;
  border-top: 0;
  border-bottom: 1vw solid #ffffff;
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
  position: relative;
}
@media screen and (max-width: 778px) {
  .content .data_title {
    font-size: 20px;
    padding: 20px;
  }
}
</style>