<template name="component-name">
  <div>
    <el-row class="content">
      <NavComponent></NavComponent>
      <h1 class="detail_title">{{$t('moments.name')}}</h1>
      <el-row :gutter="16" type="flex" class="show_detail" >
        <el-col :span="24" v-for="item in list" v-bind:key="item.id">
          <!-- <router-link to="/dynamic/dynDetail"> -->
            <img v-bind:src="item.cover" alt @click="gotoDetail(item.id)"/>
          <!-- </router-link> -->
        </el-col>
        <!-- <el-col :span="24">
          <router-link to="/dynamic/dynDetail">
            <img src="../../static/img/zhuan33001.jpg" alt />
          </router-link>
        </el-col> -->
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
import {requestMoments} from '../api/api'; 
export default {
  name: "dynamic",
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
        requestMoments(allParams).then((res) => {
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
.content .detail_title {
  color: #a19d91;
  font-size: 3vw;
  padding: 3vw 0;
  text-align: center;
  font-weight: bolder;
}
.content .show_detail {
  flex-wrap: wrap;
}
.content .show_detail img {
  padding-bottom: 2vw;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
@media screen and (max-width: 778px) {
  .content .detail_title {
    font-size: 20px;
    padding: 20px;
  }
}
</style>