webpackJsonp([1],{"+dB2":function(t,e){},"43lu":function(t,e){},"5Ys/":function(t,e){},"96Fq":function(t,e){},"9pxQ":function(t,e,a){t.exports=a.p+"static/fonts/glyphicons-halflings-regular.f4769f9.eot"},AyxH:function(t,e,a){t.exports=a.p+"static/img/qxilie.43dbb2c.jpg"},BS0G:function(t,e){},CcHy:function(t,e){},KEzn:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={name:"Nav",data:()=>({navShow:""}),created(){this.$bus.on("isShow",t=>{this.navShow=t})},methods:{}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade"}},[t.navShow?a("div",{staticClass:"nav_item"},[a("router-link",{attrs:{to:"/series"}},[a("div",{staticClass:"item"},[t._v(t._s(t.$t("nav.product")))])]),t._v(" "),a("router-link",{attrs:{to:"/projuct"}},[a("div",{staticClass:"item"},[t._v(t._s(t.$t("nav.project")))])]),t._v(" "),a("router-link",{attrs:{to:"/dynamic"}},[a("div",{staticClass:"item"},[t._v(t._s(t.$t("nav.moments")))])]),t._v(" "),a("router-link",{attrs:{to:"/dataRoot"}},[a("div",{staticClass:"item"},[t._v(t._s(t.$t("nav.data")))])]),t._v(" "),a("router-link",{attrs:{to:"/contact"}},[a("div",{staticClass:"item"},[t._v(t._s(t.$t("nav.contact")))])]),t._v(" "),a("router-link",{attrs:{to:"/about"}},[a("div",{staticClass:"item"},[t._v(t._s(t.$t("nav.about")))])])],1):t._e()])],1)},staticRenderFns:[]};var o=a("VU/8")(i,n,!1,function(t){a("yscz")},"data-v-795ad75c",null).exports,c={name:"headerComponents",data:()=>({navShow:!1,isShow:!1,clientHeight:"",float_nav_show:!1}),mounted(){this.clientHeight=document.getElementById("header").offsetHeight,window.addEventListener("scroll",()=>{(document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset)>this.clientHeight?(this.isShow=!0,this.navShow=!1,this.$bus.emit("isShow",this.navShow)):this.isShow=!1}),console.log(this.clientHeight),document.addEventListener("click",t=>{"icon"!=t.target.id&&(this.navShow=!1,this.$bus.emit("isShow",this.navShow),this.float_nav_show=!1)})},methods:{menu:function(){this.navShow=!this.navShow,this.$bus.emit("isShow",this.navShow)},float_navShow:function(){this.float_nav_show=!this.float_nav_show},changeType(t){localStorage.setItem("locale",t),this.$i18n.locale=t,this.$bus.emit("ChangeLocation",t)}},components:{NavComponent:o}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"header"},[s("div",{staticClass:"logo_img"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a("ZBJ4"),alt:""}})])],1),t._v(" "),s("div",{staticClass:"Nav"},[s("div",{staticClass:"Nav_item"},[s("div",{staticClass:"Nav_text"},[s("span",{staticClass:"glyphicon glyphicon-align-justify",on:{click:t.menu}}),t._v(" "),s("a",{on:{click:function(e){return t.changeType("zh")}}},[t._v("中")]),t._v(" "),s("a",[t._v("/")]),t._v(" "),s("a",{on:{click:function(e){return t.changeType("en")}}},[t._v("EN")])])])])])])])},staticRenderFns:[]};var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"footer"},[a("el-footer",[a("div",{staticClass:"footer_item"},[a("div",{staticClass:"item_link"},[a("a",{attrs:{href:"/about"}},[t._v(t._s(t.$t("footer.about")))])]),t._v(" "),a("div",{staticClass:"item_link"},[a("a",{attrs:{href:"/contact"}},[t._v(t._s(t.$t("footer.contact")))])]),t._v(" "),a("div",{staticClass:"item_link"},[a("a",{attrs:{href:"/join"}},[t._v(t._s(t.$t("footer.join")))])]),t._v(" "),a("div",{staticClass:"item_link"},[a("a",{attrs:{href:"#"}},[t._v("info@ns-space.cn")])])]),t._v(" "),a("div",{staticClass:"footer_text"},[a("div",{staticClass:"text"},[t._v("\n          Copyright © 2019 NINGSHENG All Rights Reserved.\n          "),a("span",[t._v("粤ICP备19135826号-1")])]),t._v(" "),a("div",{staticClass:"icon"},[a("a",{attrs:{href:"../../static/img/WeChat.jpg",target:"_blank"}},[a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("a",{attrs:{href:"https://www.instagram.com/ningsheng_/",target:"_blank"}},[a("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),a("a",{attrs:{href:"https://weibo.com/ningshengspace",target:"_blank"}},[a("i",{staticClass:"iconfont"},[t._v("")])])])])])],1)])},staticRenderFns:[]};var d={name:"app",data:()=>({}),components:{headerComponent:a("VU/8")(c,r,!1,function(t){a("43lu")},"data-v-4d0c926a",null).exports,footerComponent:a("VU/8")({},l,!1,function(t){a("96Fq")},"data-v-3931353e",null).exports},methods:{fun(t,e){var a=t.documentElement,s="orientationchange"in window?"orientationchange":"resize",i=function(){var t=a.clientWidth;t&&(a.style.fontSize=t/1920*20+"px")};t.addEventListener&&(e.addEventListener(s,i,!1),t.addEventListener("DOMContentLoaded",i,!1))}},mounted(){this.fun(document,window)}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header-component"),this._v(" "),e("router-view"),this._v(" "),e("footer-component")],1)},staticRenderFns:[]};var m=a("VU/8")(d,v,!1,function(t){a("ttr4")},null,null).exports,h=a("zL8q"),u=a.n(h),_=(a("tvR6"),a("/ocq")),p=a("mtWM"),g=a.n(p),f=a("mw3O"),C=a.n(f);g.a.defaults.baseURL="/api",g.a.defaults.timeout=15e5,g.a.defaults.withCredentials=!0,g.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",g.a.interceptors.request.use(t=>("post"===t.method&&(t.data=C.a.stringify(t.data)),t),t=>{console.log("错误的传参！")}),g.a.interceptors.response.use(t=>t,t=>{if(401==t.response.status){h.MessageBox.alert("请重新登录","登录超时",{confirmButtonText:"确定",closeOnPressEscape:!1,showClose:!1,callback:t=>{"confirm"==t&&dt.push("/login")}})}else Object(h.Message)({message:t.response.data.msg,type:"error"});return Promise.reject(t)});let b="http://111.230.135.20/api";const A=t=>g.a.get(`${b}/type`+`${t}`).then(t=>t.data),w=t=>g.a.get(`${b}/product`+`${t}`).then(t=>t.data);var y={name:"Home",data:()=>({banner_herf:[],adverts:[],top:[],new:[],new_cover:[]}),methods:{getBanners(){var t="?language=1&limit=10&page=1";(t=>g.a.get(`${b}/banners`+`${t}`).then(t=>t.data))(t).then(t=>{console.log(t.data.data),this.banner_herf=t.data.data}),(t=>g.a.get(`${b}/adverts`+`${t}`).then(t=>t.data))(t).then(t=>{this.adverts=t.data.data}),(t=>g.a.get(`${b}/top/type`+`${t}`).then(t=>t.data))(t).then(t=>{this.top=t.data});(t=>g.a.get(`${b}/products`+`${t}`).then(t=>t.data))("?language=1&limit=10&page=1&newer=1").then(t=>{this.new=t.data.data,this.new_cover=t.data.data[0].cover})}},components:{NavComponent:o},mounted(){this.getBanners()}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),t._v(" "),a("div",{staticClass:"banner"},[a("el-carousel",{attrs:{arrow:"never",height:"45rem"}},t._l(t.banner_herf,function(t){return a("el-carousel-item",[a("img",{attrs:{src:t.href}})])}),1)],1),t._v(" "),a("div",{staticClass:"product"},[a("div",{staticClass:"series_all"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"series_flex"},[a("router-link",{attrs:{to:{name:"SeriesType",params:{id:t.top.id}}}},[a("div",{staticClass:"flex_img"},[a("div",{staticClass:"mask"},[a("div",{staticClass:"mask_text"},[t._v("实验品")])]),t._v(" "),a("img",{attrs:{src:t.top.image}})])]),t._v(" "),a("div",{staticClass:"flex_img"},[a("router-link",{attrs:{to:"/new"}}),t._v(" "),t._m(2),t._v(" "),a("img",{attrs:{src:t.new_cover}})],1)],1),t._v(" "),a("div",{staticClass:"other"},t._l(t.adverts,function(t){return a("div",{staticClass:"other_img"},[a("img",{attrs:{src:t.href}})])}),0)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"series_img"},[e("a",{attrs:{href:""}},[e("img",{attrs:{src:a("AyxH")}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"series_text"},[e("h1",{staticClass:"text_title"},[this._v("全系列")]),this._v(" "),e("div",{staticClass:"text"},[this._v("我们以工艺为起点，突破固有的经验，尝试将各种材料相结合，开发创新而实用的建筑材料及其衍生品。对探索的渴望将引领我们不断发现。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mask"},[e("div",{staticClass:"mask_text"},[this._v("新品")])])}]};var x=a("VU/8")(y,k,!1,function(t){a("BS0G"),a("CcHy")},"data-v-5336a1b5",null).exports,P={name:"proDetail",data:()=>({title:"暂无数据",detail:"暂无数据",image:[],type:"",cover:"",material:"",areas:[],categories:[],categories_cover:"",parameter:"",proLink:[]}),components:{NavComponent:o},methods:{getProduct(){var t="?id="+this.$route.params.id;w(t).then(t=>{this.title=t.data.title,this.detail=t.data.description,this.image=t.data.pictures,this.cover=t.data.cover,this.type=t.data.type.title,this.material=t.data.material;for(var e=0;e<t.data.areas.length;e++)this.areas.push({title:t.data.areas[e].title,icon:t.data.areas[e].icon});this.categories=t.data.categories,this.categories_cover=t.data.category_cover,this.parameter=t.data.parameter;var a="?id="+this.$route.params.type_id;console.log(a),A(a).then(t=>{this.proLink=t.data.products})})}},mounted:function(){this.getProduct()}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Nav-component"),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"pro_title"},[t._v(t._s(t.title))]),t._v(" "),a("h1",{staticClass:"pro_type"},[t._v(t._s(t.type))]),t._v(" "),a("div",{staticClass:"detail_item"},[a("div",{staticClass:"detail_img"},[a("img",{attrs:{src:t.cover,alt:""}})]),t._v(" "),a("div",{staticClass:"detail_text"},[a("div",{staticClass:"material"},[a("h1",{staticClass:"mater_title"},[t._v("主要材料")]),t._v(" "),a("div",{staticClass:"mater_value"},[t._v(t._s(t.material))])]),t._v(" "),a("div",{staticClass:"cate"},[a("div",{staticClass:"cate_title"},[t._v("规格")]),t._v(" "),a("div",{staticClass:"cate_item"},t._l(t.categories,function(e){return a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v(t._s(e.title)+"：")]),t._v(" "),a("div",{staticClass:"details"},t._l(e.details,function(e){return a("span",[t._v(t._s(e.title))])}),0)])}),0),t._v(" "),a("div",{staticClass:"cate_img"},[a("img",{attrs:{src:t.categories_cover,alt:""}})]),t._v(" "),a("div",{staticClass:"other"},[t._v("其他规格尺寸和厚度可根据要求定制")])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"likes"},[a("div",{staticClass:"likes_title"},[t._v("类似产品")]),t._v(" "),a("div",{staticClass:"likes_item"},t._l(t.proLink,function(t){return a("div",{staticClass:"item"},[a("img",{attrs:{src:t.cover,alt:""}})])}),0)]),t._v(" "),a("div",{staticClass:"down_img"},[a("a",{attrs:{href:t.cover,target:"_blank"}},[t._v("点击下载图片")])]),t._v(" "),a("div",{staticClass:"down_excel"},[a("a",{attrs:{href:t.parameter}},[t._v("下载参数表")])]),t._v(" "),t._m(1)])]),t._v(" "),t._l(t.image,function(t){return a("div",{staticClass:"pic_img"},[a("div",{staticClass:"item_img"},[a("img",{attrs:{src:t.href,alt:""}})])])})],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"areas"},[e("h1",{staticClass:"areas_title"},[this._v("使用区域")]),this._v(" "),e("div",{staticClass:"areas_item"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact"},[this._v("\n          对于价格、可用性、起订量、货期和销售条款\n          等请\n          "),e("a",{attrs:{href:"/contact"}},[this._v("联络我们")])])}]};var $=a("VU/8")(P,E,!1,function(t){a("fUTv")},"data-v-3c76144e",null).exports,L={name:"Series",components:{NavComponent:o},data:()=>({count:0,limit:10,currentPage:1,list:[]}),methods:{getList(){var t="zh"==this.$i18n.locale?"1":"2";(t=>g.a.get(`${b}/types`+`${t}`).then(t=>t.data))("?page="+this.currentPage+"&limit="+this.limit+"&language="+t).then(t=>{this.list=t.data.data,this.count=t.data.count,console.log(this.list)})},gotoDetail(t){console.log(t),this.$router.push({name:"SeriesType",params:{id:t}})}},created(){this.$bus.on("ChangeLocation",t=>{this.getList()})},mounted:function(){this.getList()}},Q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"series_title"},[t._v("全系列产品")]),t._v(" "),a("div",{staticClass:"series_item"},t._l(t.list,function(e){return a("div",{key:e.id,staticClass:"item"},[a("router-link",{attrs:{to:{name:"SeriesType",params:{id:e.id}}}},[a("div",{staticClass:"mask"},[a("div",{staticClass:"mask_text"},[t._v(t._s(e.title))])]),t._v(" "),a("img",{attrs:{src:e.image,alt:""}})])],1)}),0)])],1)},staticRenderFns:[]};var R=a("VU/8")(L,Q,!1,function(t){a("dhag")},"data-v-413a3d79",null).exports,D={name:"seriesType",components:{NavComponent:o},data:()=>({id:0,title:"",detail:"",list:[]}),methods:{getType(){console.log(this.$route.params.id);var t="?id="+this.$route.params.id;A(t).then(t=>{console.log(t.data),this.title=t.data.title,this.detail=t.data.description,this.list=t.data.child})}},mounted:function(){this.getType()}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"type_title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"type_detail"},[a("div",{staticClass:"type_text",domProps:{innerHTML:t._s(t.detail)}}),t._v(" "),a("div",{staticClass:"type_img"},t._l(t.list,function(e){return a("div",{key:e.id,staticClass:"img_item"},[a("router-link",{staticClass:"link_img",attrs:{to:{name:"seriesDetail",params:{id:e.id}}}},[a("div",{staticClass:"mask"},[a("div",{staticClass:"mask_text"},[t._v(t._s(e.title))])]),t._v(" "),a("img",{attrs:{src:e.image,alt:""}})])],1)}),0)])])],1)},staticRenderFns:[]};var N=a("VU/8")(D,B,!1,function(t){a("nQmp"),a("ujEq")},"data-v-e4454dec",null).exports,S={name:"seriesDetail",components:{NavComponent:o},data:()=>({title:"",detail:"",list:[],type_id:""}),methods:{getType(){console.log(this.$route.params.id);var t="?id="+this.$route.params.id;A(t).then(t=>{console.log(t.data),this.title=t.data.title,this.detail=t.data.description,this.list=t.data.products,this.type_id=t.data.id})}},mounted:function(){this.getType()}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"detail_title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"detail_item"},[a("div",{staticClass:"item_text",domProps:{innerHTML:t._s(t.detail)}}),t._v(" "),a("div",{staticClass:"item_img"},t._l(t.list,function(e){return a("div",{key:e.id,staticClass:"img"},[a("router-link",{staticClass:"link_img",attrs:{to:{name:"proDetail",params:{id:e.id,title:t.title,type_id:t.type_id}}}},[a("div",{staticClass:"mask"},[a("div",{staticClass:"mask_text"},[t._v(t._s(e.title))])]),t._v(" "),a("img",{attrs:{src:e.cover,alt:""}})])],1)}),0)])])],1)},staticRenderFns:[]};var T=a("VU/8")(S,j,!1,function(t){a("SESH"),a("qQOs")},"data-v-1cd61149",null).exports,H={name:"seriesDetail",components:{NavComponent:o},data:()=>({count:0,limit:10,currentPage:1,list:[]}),methods:{getList(){var t="zh"==this.$i18n.locale?"1":"2";(t=>g.a.get(`${b}/data/documents`+`${t}`).then(t=>t.data))("?page="+this.currentPage+"&limit="+this.limit+"&language="+t).then(t=>{this.list=t.data.data,this.count=t.data.count})},gotoDetail(t){console.log(t),this.$router.push({name:"dynDetail",params:{id:t}})}},mounted:function(){this.getList()},created(){this.$bus.on("ChangeLocation",t=>{this.getList()})}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavComponent"),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"data_title"},[t._v("资源")]),t._v(" "),a("div",{staticClass:"data_item"},t._l(t.list,function(e){return a("div",{key:e.id,staticClass:"item"},[a("router-link",{staticClass:"link_img",attrs:{to:{name:"DataDetail",params:{id:e.id}}}},[a("div",{staticClass:"mask"},[a("div",{staticClass:"mask_text"},[t._v(t._s(e.title))])]),t._v(" "),a("img",{attrs:{src:e.cover,alt:""}})])],1)}),0)])],1)},staticRenderFns:[]};var V=a("VU/8")(H,U,!1,function(t){a("qP8/")},"data-v-271a2ffd",null).exports,I={name:"seriesDetail",components:{NavComponent:o},data:()=>({id:0,title:"",detail:""}),methods:{getList(){console.log(this.$route.params.id),(t=>g.a.get(`${b}/data/document`+`${t}`).then(t=>t.data))("?id="+this.$route.params.id).then(t=>{console.log(t),this.title=t.data.title,this.detail=t.data.detail,this.cover=t.data.cover})}},mounted:function(){this.getList()}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavComponent"),t._v(" "),a("el-row",{staticClass:"content"},[a("h1",{staticClass:"detail_title"},[t._v(t._s(t.title))]),t._v(" "),a("el-row",{attrs:{gutter:16,type:"flex"}},[a("el-col",{staticClass:"data_img",attrs:{span:8}},[a("div",{staticClass:"mask"},[a("div",{staticClass:"mask_text"},[t._v("123")])]),t._v(" "),a("img",{attrs:{src:t.cover,alt:""}})])],1)],1)],1)},staticRenderFns:[]};var Z=a("VU/8")(I,M,!1,function(t){a("vWee")},"data-v-1a5acd06",null).exports,O={name:"seriesDetail",data:()=>({count:0,limit:10,currentPage:1,list:[]}),components:{NavComponent:o},methods:{getProject(){var t="zh"==this.$i18n.locale?"1":"2";(t=>g.a.get(`${b}/projects`+`${t}`).then(t=>t.data))("?page="+this.currentPage+"&limit="+this.limit+"&language="+t).then(t=>{this.count=t.data.count,this.list=t.data.data})},gotoDetail(t){console.log(t),this.$router.push({name:"ProjectDetail",params:{id:t}})}},mounted:function(){this.getProject()}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-component"),this._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"pro_title"},[this._v("项目")]),this._v(" "),e("div",{staticClass:"pro_item"},this._l(this.list,function(t){return e("div",{key:t.id,staticClass:"item"},[e("router-link",{staticClass:"img_link",attrs:{to:{name:"ProjectDetail",params:{id:t.id}}}},[e("img",{attrs:{src:t.cover}})])],1)}),0)])],1)},staticRenderFns:[]};var z=a("VU/8")(O,K,!1,function(t){a("nEuE")},"data-v-20c63e27",null).exports,F={name:"ProjectDetail",data:()=>({id:0,title:"",detail:"",products:[],cover:"",product_img:[]}),components:{NavComponent:o},methods:{getlist(){console.log(this.$route.params.id),(t=>g.a.get(`${b}/project`+`${t}`).then(t=>t.data))("?id="+this.$route.params.id).then(t=>{this.title=t.data.title,this.cover=t.data.cover,this.detail=t.data.detail,console.log(t.data.products);for(var e=0;e<t.data.products.length;e++){var a=t.data.products[e].product_id;console.log(a),w("?id="+a).then(t=>{this.product_img.push(t.data.cover)})}})}},mounted(){this.getlist()}},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"pro_title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"pro_detail"},[a("div",{staticClass:"pro_text",domProps:{innerHTML:t._s(t.detail)}}),t._v(" "),a("div",{staticClass:"pro_img"},[a("div",{staticClass:"item"},[a("router-link",{attrs:{to:"#"}},[a("img",{attrs:{src:t.cover,alt:""}})])],1)])])])],1)},staticRenderFns:[]};var Y=a("VU/8")(F,J,!1,function(t){a("k8ma"),a("NMKs")},"data-v-52534133",null).exports,W={name:"dynamic",components:{NavComponent:o},data:()=>({count:0,limit:10,currentPage:1,list:[]}),methods:{getList(){var t="zh"==this.$i18n.locale?"1":"2";(t=>g.a.get(`${b}/moments`+`${t}`).then(t=>t.data))("?page="+this.currentPage+"&limit="+this.limit+"&language="+t).then(t=>{this.list=t.data.data,this.count=t.data.count})},gotoDetail(t){console.log(t),this.$router.push({name:"dynDetail",params:{id:t}})}},mounted:function(){this.getList()},created(){this.$bus.on("ChangeLocation",t=>{this.getList()})}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"pro_title"},[t._v("记录")]),t._v(" "),a("div",{staticClass:"pro_item"},t._l(t.list,function(e){return a("div",{key:e.id,staticClass:"item"},[a("img",{attrs:{src:e.cover,alt:""},on:{click:function(a){return t.gotoDetail(e.id)}}})])}),0)])],1)},staticRenderFns:[]};var X=a("VU/8")(W,q,!1,function(t){a("e/yq")},"data-v-7e9af4ef",null).exports,G={name:"seriesDetail",components:{NavComponent:o},data:()=>({id:0,title:"",detail:"",cover:""}),methods:{getMoment(){console.log(this.$route.params.id),(t=>g.a.get(`${b}/moment`+`${t}`).then(t=>t.data))("?id="+this.$route.params.id).then(t=>{console.log(t.data),this.title=t.data.title,this.detail=t.data.detail,this.cover=t.data.cover})}},mounted:function(){this.getMoment()}},tt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavComponent"),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"dyn_title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"dyn_item"},[a("div",{staticClass:"text",domProps:{innerHTML:t._s(t.detail)}}),t._v(" "),a("div",{staticClass:"item_img"},[a("div",{staticClass:"item"},[a("img",{attrs:{src:t.cover,alt:""}})])])])])],1)},staticRenderFns:[]};var et=a("VU/8")(G,tt,!1,function(t){a("oPmd")},"data-v-62a1001f",null).exports,at={name:"seriesDetail",components:{NavComponent:o},data:()=>({detail:""}),methods:{getDocument(){(t=>g.a.get(`${b}/document`+`${t}`).then(t=>t.data))("zh"==this.$i18n.locale?"?code=about_cn":"?code=about_en").then(t=>{let e=t.data;e&&(this.detail=e.detail)})}},mounted:function(){this.getDocument()},created(){this.$bus.on("ChangeLocation",t=>{this.getDocument()})}},st={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"about_title"},[t._v(t._s(t.$t("about.name")))]),t._v(" "),a("div",{staticClass:"about_text"},[a("div",{domProps:{innerHTML:t._s(t.detail)}},[t._v(t._s(t.detail))])])])],1)},staticRenderFns:[]};var it=a("VU/8")(at,st,!1,function(t){a("KEzn")},"data-v-e4fbeb78",null).exports,nt={name:"seriesDetail",components:{NavComponent:o},data:()=>({bussiness:"",buy:"",email:"",eng_buy:"",ins_bg:"",ins_title:"",media:"",phone:"",wechat_bg:"",wechat_title:"",weibo_bg:"",weibo_title:""}),methods:{getConfigs(){(t=>g.a.get(`${b}/configs`,t).then(t=>t.data))().then(t=>{console.log(t);let e=t.data;console.log(e),e&&(this.buy=e.buy,this.bussiness=e.bussiness,this.email=e.email,this.eng_buy=e.eng_buy,this.ins_bg=e.ins_bg,this.ins_title=e.ins_title,this.media=e.media,this.phone=e.phone,this.wechat_bg=e.wechat_bg,this.wechat_title=e.wechat_title,this.weibo_bg=e.weibo_bg,this.weibo_title=e.weibo_title)})}},mounted:function(){this.getConfigs()}},ot={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav-component"),t._v(" "),s("div",{staticClass:"content"},[s("h1",{staticClass:"con_title"},[t._v(t._s(t.$t("contact.name")))]),t._v(" "),s("div",{staticClass:"con_item"},[s("div",{staticClass:"item"},[s("div",{staticClass:"item_title"},[t._v(t._s(t.$t("contact.join")))]),t._v(" "),s("div",{staticClass:"item_text"},[s("div",{staticClass:"text"},[t._v("邮箱："+t._s(t.email))]),t._v(" "),s("div",{staticClass:"text"},[t._v("电话："+t._s(t.phone))])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item_title"},[t._v(t._s(t.$t("contact.buy")))]),t._v(" "),s("div",{staticClass:"item_text"},[s("div",{staticClass:"text"},[t._v("零售电话:"+t._s(t.buy))]),t._v(" "),s("div",{staticClass:"text"},[t._v("工程购买:"+t._s(t.eng_buy))])])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item_title"},[t._v(t._s(t.$t("contact.media")))]),t._v(" "),s("div",{staticClass:"item_text"},[s("div",{staticClass:"text"},[t._v("商务合作:"+t._s(t.bussiness))]),t._v(" "),s("div",{staticClass:"text"},[t._v("媒体合作:"+t._s(t.media))])])])]),t._v(" "),s("div",{staticClass:"con_icon"},[s("div",{staticClass:"icon_item wechat"},[s("i",{staticClass:"iconfont icon-weixin icon"}),t._v("\n        "+t._s(t.$t("contact.wechat"))+"\n        "),s("img",{attrs:{src:a("bGHl")}})]),t._v(" "),s("div",{staticClass:"icon_item"},[s("a",{attrs:{href:"https://www.instagram.com/ningsheng_/",target:"_blank"}},[s("i",{staticClass:"iconfont icon-ins icon"}),t._v("\n          "+t._s(t.$t("contact.ins"))+"\n        ")])]),t._v(" "),s("div",{staticClass:"icon_item"},[s("a",{attrs:{href:"https://weibo.com/ningshengspace",target:"_blank"}},[s("i",{staticClass:"iconfont icon-weibo icon"}),t._v("\n          "+t._s(t.$t("contact.weibo"))+"\n        ")])])])])],1)},staticRenderFns:[]};var ct=a("VU/8")(nt,ot,!1,function(t){a("oePu")},"data-v-fe6481aa",null).exports,rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-component"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"new_title"},[this._v("新品")]),this._v(" "),e("div",{staticClass:"new_item"})])}]};var lt=a("VU/8")({name:""},rt,!1,function(t){a("+dB2"),a("P5rz")},"data-v-0380b7b1",null).exports;s.default.use(_.a);var dt=new _.a({routes:[{path:"/",name:"Home",component:x},{path:"/Series",name:"Series",component:R},{path:"/Series/SeriesType",name:"SeriesType",component:N},{path:"/Series/seriesType/seriesDetail",name:"seriesDetail",component:T},{path:"/proDetail",name:"proDetail",component:$},{path:"/projuct",name:"Projuct",component:z},{path:"/projuct/ProjectDetail",name:"ProjectDetail",component:Y},{path:"/dataRoot",name:"DataRoot",component:V},{path:"/dataRoot/dataDetail",name:"DataDetail",component:Z},{path:"/dynamic",name:"dynamic",component:X},{path:"/dynamic/dynDetail",name:"dynDetail",component:et},{path:"/About",name:"About",component:it},{path:"/Contact",name:"Contact",component:ct},{path:"/new",name:"New",component:lt}]}),vt=a("fC7K"),mt=a("Rf8U"),ht=a.n(mt),ut=a("TXmL");a("rT9f"),a("j/h8"),a("9pxQ"),a("5Ys/");s.default.use(ht.a,g.a),s.default.use(ut.a),s.default.use(u.a),s.default.use(vt.a),s.default.config.productionTip=!1;const _t=new ut.a({locale:localStorage.getItem("locale")||"zh",messages:{zh:a("alS+"),en:a("YTqk")}});new s.default({el:"#App",router:dt,i18n:_t,components:{App:m},template:"<App/>"})},NMKs:function(t,e){},P5rz:function(t,e){},SESH:function(t,e){},YTqk:function(t,e){t.exports={nav:{product:"Product",project:"Project",moments:"Journal",data:"Downloads",contact:"Contact",about:"About"},footer:{about:"About us",contact:"Contact us",join:"Join us"},contact:{name:"Contact us",join:"Inquiry/Join us/Design proposal",buy:"Purchase",media:"Business & Press",wechat:"Wechat",ins:"Instagram",weibo:"Weibo"},product:{name:"All collections"},about:{name:"About us"},moments:{name:"Journal"},data:{name:"Downloads"}}},ZBJ4:function(t,e){t.exports="data:image/png;base64,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"},"alS+":function(t,e){t.exports={nav:{product:"产品",project:"项目",moments:"动态",data:"资料",contact:"联络",about:"我们"},footer:{about:"关于我们",contact:"联络我们",join:"加入我们"},contact:{name:"联络我们",join:"咨询/加入我们/设计提案",buy:"购买",media:"商务&媒体合作",wechat:"微信公众号",ins:"Instagram",weibo:"微博"},product:{name:"全系列产品"},about:{name:"关于我们"},moments:{name:"动态"},data:{name:"资料"}}},bGHl:function(t,e,a){t.exports=a.p+"static/img/WeChat.7da1a71.jpg"},dhag:function(t,e){},"e/yq":function(t,e){},fUTv:function(t,e){},"j/h8":function(t,e,a){t.exports=a.p+"static/fonts/glyphicons-halflings-regular.e18bbf6.ttf"},k8ma:function(t,e){},nEuE:function(t,e){},nQmp:function(t,e){},oPmd:function(t,e){},oePu:function(t,e){},"qP8/":function(t,e){},qQOs:function(t,e){},rT9f:function(t,e){},ttr4:function(t,e){},tvR6:function(t,e){},ujEq:function(t,e){},vWee:function(t,e){},yscz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8974159bfb77ea776ec2.js.map