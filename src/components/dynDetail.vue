<template>
  <div>
    <el-row class="content">
      <NavComponent></NavComponent>
      <h1 class="data_title">{{title}}</h1>
      <el-row class="showImg">
        <el-col :span="24">
          <div v-html="detail"></div>
        </el-col>
        <!-- <el-col :span="24">
          <img src="../../static/img/box.jpg" alt />
        </el-col> -->
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";

import {requestMoment} from '../api/api'; 
export default {
  name: "seriesDetail",
  components: {
    NavComponent
  },
  data(){
    return {
      id:0,
      title:'',
      detail:'',
    }
  },
  methods:{
    getMoment(){
      console.log(this.$route.params.id);
      var allParams = '?id='+ this.$route.params.id;
        requestMoment(allParams).then((res) => {
          console.log(res.data);
          this.title = res.data.title;
          this.detail = res.data.detail;
        });
    }
  },
  mounted:function(){
    this.getMoment();
  }
};
</script>
<style scoped>
.content {
  margin-top: 0;
  padding: 0 16vw;
}
.content .data_title {
  text-align: left;
  padding: 3vw 0;
  font-weight: bolder;
  font-size: 2vw;
  color: #86837a;
}

.content .showImg img {
  width: 100%;
  height: 100%;
}
</style>