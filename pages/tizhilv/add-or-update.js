(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tizhilv/add-or-update"],{"198e":function(e,t,n){"use strict";var i=n("1caf"),r=n.n(i);r.a},"1caf":function(e,t,n){},2877:function(e,t,n){"use strict";n.r(t);var i=n("ee77"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"358e":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");i(n("66fd"));var t=i(n("6258"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},6258:function(e,t,n){"use strict";n.r(t);var i=n("f53b"),r=n("2877");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("198e");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"2160df4d",null,!1,i["a"],o);t["default"]=s.exports},ee77:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,o){try{var u=e[a](o),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(i,r)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function u(e){a(o,i,r,u,s,"next",e)}function s(e){a(o,i,r,u,s,"throw",e)}u(void 0)}))}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},s=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{bianhao:this.getUUID(),yonghuzhanghao:"",yonghuxingming:"",dengjishijian:"",tizhilv:"",xiangqing:""},user:{},ro:{bianhao:!1,yonghuzhanghao:!1,yonghuxingming:!1,dengjishijian:!1,tizhilv:!1,xiangqing:!1}}},components:{wPicker:u,xiaEditor:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=o(i.default.mark((function t(n){var r,a,o,u;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ruleForm.dengjishijian=this.$utils.getCurDateTime(),r=e.getStorageSync("nowTable"),t.next=4,this.$api.session(r);case 4:if(a=t.sent,this.user=a.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=18;break}return this.ruleForm.id=n.id,t.next=16,this.$api.info("tizhilv",this.ruleForm.id);case 16:a=t.sent,this.ruleForm=a.data;case 18:if(this.cross=n.cross,!n.cross){t.next=50;break}o=e.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 22:if((t.t1=t.t0()).done){t.next=50;break}if(u=t.t1.value,"bianhao"!=u){t.next=28;break}return this.ruleForm.bianhao=o[u],this.ro.bianhao=!0,t.abrupt("continue",22);case 28:if("yonghuzhanghao"!=u){t.next=32;break}return this.ruleForm.yonghuzhanghao=o[u],this.ro.yonghuzhanghao=!0,t.abrupt("continue",22);case 32:if("yonghuxingming"!=u){t.next=36;break}return this.ruleForm.yonghuxingming=o[u],this.ro.yonghuxingming=!0,t.abrupt("continue",22);case 36:if("dengjishijian"!=u){t.next=40;break}return this.ruleForm.dengjishijian=o[u],this.ro.dengjishijian=!0,t.abrupt("continue",22);case 40:if("tizhilv"!=u){t.next=44;break}return this.ruleForm.tizhilv=o[u],this.ro.tizhilv=!0,t.abrupt("continue",22);case 44:if("xiangqing"!=u){t.next=48;break}return this.ruleForm.xiangqing=o[u],this.ro.xiangqing=!0,t.abrupt("continue",22);case 48:t.next=22;break;case 50:this.styleChange();case 51:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{xiangqingChange:function(e){this.ruleForm.xiangqing=e},styleChange:function(){this.$nextTick((function(){}))},dengjishijianConfirm:function(e){console.log(e),this.ruleForm.dengjishijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=o(i.default.mark((function t(){var n,r,a,o,u,s,c,h,l,g;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.cross){t.next=16;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){t.next=16;break}if(n||(n=e.getStorageSync("crossObj")),u.startsWith("[")){t.next=12;break}for(c in n)c==u&&(n[c]=s);return h=e.getStorageSync("crossTable"),t.next=10,this.$api.update("".concat(h),n);case 10:t.next=16;break;case 12:r=Number(e.getStorageSync("userid")),a=n["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 16:if(!a||!r){t.next=38;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:r,crossrefid:a},t.next=22,this.$api.list("tizhilv",l);case 22:if(g=t.sent,!(g.data.total>=o)){t.next=28;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!this.ruleForm.id){t.next=33;break}return t.next=31,this.$api.update("tizhilv",this.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,this.$api.add("tizhilv",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!this.ruleForm.id){t.next=43;break}return t.next=41,this.$api.update("tizhilv",this.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,this.$api.add("tizhilv",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},f53b:function(e,t,n){"use strict";var i={"xia-editor":()=>n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f")),"w-picker":()=>Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))}},[["358e","common/runtime","common/vendor"]]]);