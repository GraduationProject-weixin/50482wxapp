(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0453":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,i,t,r,u,s){try{var a=e[u](s),h=a.value}catch(o){return void i(o)}a.done?n(h):Promise.resolve(h).then(t,r)}function s(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var s=e.apply(n,i);function a(e){u(s,t,r,a,h,"next",e)}function h(e){u(s,t,r,a,h,"throw",e)}a(void 0)}))}}function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}var h=function(){return i.e("components/momo-multipleSelect/momo-multipleSelect").then(i.bind(null,"bd56"))},o={data:function(){var e;return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,yishengxingbieOptions:[],yishengxingbieIndex:0,yishengzhichengOptions:[],yishengzhichengIndex:0,ruleForm:(e={yonghuzhanghao:"",mima:"",yonghuxingming:"",xingbie:"",yonghudianhua:"",touxiang:"",yishengzhanghao:""},a(e,"mima",""),a(e,"yishengxingming",""),a(e,"xingbie",""),a(e,"yishengdianhua",""),a(e,"touxiang",""),a(e,"zhicheng",""),a(e,"yishengjianjie",""),e),tableName:""}},components:{multipleSelect:h},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var n=s(t.default.mark((function n(){var i;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],i=e.getStorageSync("loginTable"),this.tableName=i,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"yisheng"==this.tableName&&(this.yishengxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yishengxingbieOptions[0]),"yisheng"==this.tableName&&(this.yishengzhichengOptions="主任,副主任".split(","),this.ruleForm.zhicheng=this.yishengzhichengOptions[0]),this.styleChange();case 7:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},yonghutouxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang="upload/"+n.file,e.$forceUpdate()}))},yishengxingbieChange:function(e){this.yishengxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yishengxingbieOptions[this.yishengxingbieIndex]},yishengtouxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang="upload/"+n.file,e.$forceUpdate()}))},yishengzhichengChange:function(e){this.yishengzhichengIndex=e.target.value,this.ruleForm.zhicheng=this.yishengzhichengOptions[this.yishengzhichengIndex]},toggleTab:function(e){this.$refs[e].show()},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=s(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yonghuzhanghao||"yonghu"!=this.tableName){e.next=3;break}return this.$utils.msg("用户账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if("yonghu"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){e.next=9;break}return this.$utils.msg("两次密码输入不一致"),e.abrupt("return");case 9:if(this.ruleForm.yonghuxingming||"yonghu"!=this.tableName){e.next=12;break}return this.$utils.msg("用户姓名不能为空"),e.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.yonghudianhua||this.$validate.isMobile(this.ruleForm.yonghudianhua)){e.next=15;break}return this.$utils.msg("用户电话应输入手机格式"),e.abrupt("return");case 15:if(this.ruleForm.yishengzhanghao||"yisheng"!=this.tableName){e.next=18;break}return this.$utils.msg("医生账号不能为空"),e.abrupt("return");case 18:if(this.ruleForm.mima||"yisheng"!=this.tableName){e.next=21;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 21:if("yisheng"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){e.next=24;break}return this.$utils.msg("两次密码输入不一致"),e.abrupt("return");case 24:if(this.ruleForm.yishengxingming||"yisheng"!=this.tableName){e.next=27;break}return this.$utils.msg("医生姓名不能为空"),e.abrupt("return");case 27:if("yisheng"!=this.tableName||!this.ruleForm.yishengdianhua||this.$validate.isMobile(this.ruleForm.yishengdianhua)){e.next=30;break}return this.$utils.msg("医生电话应输入手机格式"),e.abrupt("return");case 30:return e.next=32,this.$api.register("".concat(this.tableName),this.ruleForm);case 32:this.$utils.msgBack("注册成功");case 34:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()}};n.default=o}).call(this,i("543d")["default"])},"0943":function(e,n,i){"use strict";(function(e){i("6cdc"),i("921b");t(i("66fd"));var n=t(i("3735"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},1749:function(e,n,i){"use strict";var t=i("e62a"),r=i.n(t);r.a},3735:function(e,n,i){"use strict";i.r(n);var t=i("b2bc"),r=i("48c7");for(var u in r)"default"!==u&&function(e){i.d(n,e,(function(){return r[e]}))}(u);i("1749");var s,a=i("f0c5"),h=Object(a["a"])(r["default"],t["b"],t["c"],!1,null,"72c79bb6",null,!1,t["a"],s);n["default"]=h.exports},"48c7":function(e,n,i){"use strict";i.r(n);var t=i("0453"),r=i.n(t);for(var u in t)"default"!==u&&function(e){i.d(n,e,(function(){return t[e]}))}(u);n["default"]=r.a},b2bc:function(e,n,i){"use strict";var t,r=function(){var e=this,n=e.$createElement;e._self._c},u=[];i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return t}))},e62a:function(e,n,i){}},[["0943","common/runtime","common/vendor"]]]);