<template>
  <div>
    <!-- 内容 -->
    <el-row class="content">
      <nav-component></nav-component>
      <el-row>
        <h1 class="detail_title">{{title}}</h1>
      </el-row>
      <el-row v-html="detail">
        <!-- <div ></div> -->
      </el-row>
      <el-row class="series_pic" type="flex" justify="center" :gutter="10">
        
        


        <el-col class="series_img" :span="12" v-for="item in list" v-bind:key="item.id">
          <router-link :to="{ name: 'seriesDetail', params: { id: item.id }}">
            <div class="mask">
              <div class="mask_text">{{item.title}}</div>
            </div>
            <img v-bind:src="item.image" alt  />
             </router-link>
        </el-col>


        
      </el-row>
    </el-row>
  </div>
</template>
<script>
import NavComponent from "./Nav";
import {requestType} from '../api/api'; 
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
      list:[]
    }
  },
  methods:{
    getType(){
      console.log(this.$route.params.id);
      var allParams = '?id='+ this.$route.params.id;
        requestType(allParams).then((res) => {
          console.log(res.data);
          this.title = res.data.title;
          this.detail = res.data.description;
          this.list = res.data.child;
        });
    }
  },
  mounted:function(){
    this.getType();
  }
};
</script>
<style scoped>
/* .content {
  padding: 0 16vw;
  margin-top: 0;
}
.content .detail_title {
  color: #a19d91;
  font-size: 2vw;
  text-align: left;
  font-weight: bolder;
  padding-top: 5vw;
}
.content .text {
  padding: 0 12vw 3vw 12vw;
  font-size: 0.8vw;
}
.content .text p {
  color: #a19d91;
  padding: 1vw 0 0 1vw;
  text-align: left;
}
.detail_img {
  padding-bottom: 2vw;
}
img {
  width: 100%;
  height: 100%;
  padding-bottom: 4vw;
}
.flex_img {
  flex-wrap: wrap;
}
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
.series_pic {
  flex-wrap: wrap;
}
.series_img {
  position: relative;
  margin-bottom: 1vw;
} */
.content .detail_title {
  color: #a19d91;
  font-size: 2vw;
  text-align: left;
  font-weight: bolder;
  padding-top: 5vw;
}
.content .text {
  text-align: right;
  padding: 0 12vw 3vw 12vw;
  font-size: 0.8vw;
}
.content .text p {
  color: #a19d91;
  padding: 1vw 0 0 1vw;
  text-align: left;
}
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