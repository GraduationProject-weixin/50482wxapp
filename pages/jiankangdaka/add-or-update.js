(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiankangdaka/add-or-update"],{"22cd":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");a(n("66fd"));var t=a(n("63ab"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"63ab":function(e,t,n){"use strict";n.r(t);var a=n("f86f"),i=n("76e6");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("644f");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"94bcf65a",null,!1,a["a"],s);t["default"]=u.exports},"644f":function(e,t,n){"use strict";var a=n("edae"),i=n.n(a);i.a},"76e6":function(e,t,n){"use strict";n.r(t);var a=n("cf4c"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},cf4c:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,i,r,s){try{var o=e[r](s),u=o.value}catch(h){return void n(h)}o.done?t(u):Promise.resolve(u).then(a,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function o(e){r(s,a,i,o,u,"next",e)}function u(e){r(s,a,i,o,u,"throw",e)}o(void 0)}))}}var o=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},u=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},h={data:function(){return{cross:"",ruleForm:{dakabianhao:this.getUUID(),dangtiantiwen:"",shifoufare:"",shifoukesou:"",dakashijian:"",dakabeizhu:"",yonghuzhanghao:"",yonghuxingming:"",shhf:""},shifoufareOptions:[],shifoufareIndex:0,shifoukesouOptions:[],shifoukesouIndex:0,user:{},ro:{dakabianhao:!1,dangtiantiwen:!1,shifoufare:!1,shifoukesou:!1,dakashijian:!1,dakabeizhu:!1,yonghuzhanghao:!1,yonghuxingming:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o,xiaEditor:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(a.default.mark((function t(n){var i,r,s,o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ruleForm.dakashijian=this.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),t.next=4,this.$api.session(i);case 4:if(r=t.sent,this.user=r.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.shifoufareOptions="否,是".split(","),this.shifoukesouOptions="否,是".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=20;break}return this.ruleForm.id=n.id,t.next=18,this.$api.info("jiankangdaka",this.ruleForm.id);case 18:r=t.sent,this.ruleForm=r.data;case 20:if(this.cross=n.cross,!n.cross){t.next=60;break}s=e.getStorageSync("crossObj"),t.t0=a.default.keys(s);case 24:if((t.t1=t.t0()).done){t.next=60;break}if(o=t.t1.value,"dakabianhao"!=o){t.next=30;break}return this.ruleForm.dakabianhao=s[o],this.ro.dakabianhao=!0,t.abrupt("continue",24);case 30:if("dangtiantiwen"!=o){t.next=34;break}return this.ruleForm.dangtiantiwen=s[o],this.ro.dangtiantiwen=!0,t.abrupt("continue",24);case 34:if("shifoufare"!=o){t.next=38;break}return this.ruleForm.shifoufare=s[o],this.ro.shifoufare=!0,t.abrupt("continue",24);case 38:if("shifoukesou"!=o){t.next=42;break}return this.ruleForm.shifoukesou=s[o],this.ro.shifoukesou=!0,t.abrupt("continue",24);case 42:if("dakashijian"!=o){t.next=46;break}return this.ruleForm.dakashijian=s[o],this.ro.dakashijian=!0,t.abrupt("continue",24);case 46:if("dakabeizhu"!=o){t.next=50;break}return this.ruleForm.dakabeizhu=s[o],this.ro.dakabeizhu=!0,t.abrupt("continue",24);case 50:if("yonghuzhanghao"!=o){t.next=54;break}return this.ruleForm.yonghuzhanghao=s[o],this.ro.yonghuzhanghao=!0,t.abrupt("continue",24);case 54:if("yonghuxingming"!=o){t.next=58;break}return this.ruleForm.yonghuxingming=s[o],this.ro.yonghuxingming=!0,t.abrupt("continue",24);case 58:t.next=24;break;case 60:this.styleChange();case 61:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{dakabeizhuChange:function(e){this.ruleForm.dakabeizhu=e},styleChange:function(){this.$nextTick((function(){}))},dakashijianConfirm:function(e){console.log(e),this.ruleForm.dakashijian=e.result,this.$forceUpdate()},shifoufareChange:function(e){this.shifoufareIndex=e.target.value,this.ruleForm.shifoufare=this.shifoufareOptions[this.shifoufareIndex]},shifoukesouChange:function(e){this.shifoukesouIndex=e.target.value,this.ruleForm.shifoukesou=this.shifoukesouOptions[this.shifoukesouIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=s(a.default.mark((function t(){var n,i,r,s,o,u,h,c,f,d;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.cross){t.next=16;break}if(o=e.getStorageSync("statusColumnName"),u=e.getStorageSync("statusColumnValue"),""==o){t.next=16;break}if(n||(n=e.getStorageSync("crossObj")),o.startsWith("[")){t.next=12;break}for(h in n)h==o&&(n[h]=u);return c=e.getStorageSync("crossTable"),t.next=10,this.$api.update("".concat(c),n);case 10:t.next=16;break;case 12:i=Number(e.getStorageSync("userid")),r=n["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 16:if(!r||!i){t.next=38;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=r,f={page:1,limit:10,crossuserid:i,crossrefid:r},t.next=22,this.$api.list("jiankangdaka",f);case 22:if(d=t.sent,!(d.data.total>=s)){t.next=28;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!this.ruleForm.id){t.next=33;break}return t.next=31,this.$api.update("jiankangdaka",this.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,this.$api.add("jiankangdaka",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!this.ruleForm.id){t.next=43;break}return t.next=41,this.$api.update("jiankangdaka",this.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,this.$api.add("jiankangdaka",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(n,"-").concat(a,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=h}).call(this,n("543d")["default"])},edae:function(e,t,n){},f86f:function(e,t,n){"use strict";var a={"xia-editor":()=>n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f")),"w-picker":()=>Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))}},[["22cd","common/runtime","common/vendor"]]]);