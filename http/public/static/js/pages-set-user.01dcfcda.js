(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-user"],{"261a":function(t,e,n){"use strict";n.r(e);var i=n("f9d3"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"2e03":function(t,e,n){"use strict";n.r(e);var i=n("855e"),o=n("261a");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var u=n("2877"),s=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"15e32e0d",null);e["default"]=s.exports},"4a44":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("1d68")),a={routeTabBarHook:function(){o.default.routeTool(),o.default.setStatusTips()},routeSonHook:function(){o.default.routeTool()}};e.default=a},"855e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-textarea"},["2"==t.type?n("v-uni-view",[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-radio-group",{on:{change:function(e){e=t.$handleEvent(e),t.radioChange(e)}}},[n("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",[n("v-uni-radio",{attrs:{checked:"0"==t.info[t.show_type[t.type].key],value:"0",color:"#1AAD19"}})],1),n("v-uni-view",[t._v("男")])],1),n("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",[n("v-uni-radio",{attrs:{checked:"1"==t.info[t.show_type[t.type].key],value:"1",color:"#1AAD19"}})],1),n("v-uni-view",[t._v("女")])],1)],1)],1)],1):n("v-uni-textarea",{attrs:{"auto-height":""},model:{value:t.info[t.show_type[t.type].key],callback:function(e){t.$set(t.info,t.show_type[t.type].key,e)},expression:"info[show_type[type].key]"}})],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},f9d3:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("4c92"));var o=i(n("4a44")),a=i(n("f7af")),u={components:{},data:function(){return{info:{},content:"",type:"",show_type:[{title:"昵称",key:"nickname"},{title:"个性签名",key:"doodling"},{title:"性别",key:"sex"}]}},onShow:function(){o.default.routeSonHook();var t=this;uni.$on("data_user_info",function(e){t.info=e})},onLoad:function(t){var e=this;e.type=t.type,uni.setNavigationBarTitle({title:e.show_type[e.type].title+"设置"}),e.info=a.default.data("user_info")},onUnload:function(){uni.$off("data_user_info")},computed:{},methods:{send:function(){var t=this;t.$httpSend({path:"/im/set/setInfo",data:{content:t.info[t.show_type[t.type].key],type:t.type},success:function(e){uni.showToast({title:"保存成功",duration:2e3}),a.default.data("user_info",t.info),setTimeout(function(){uni.navigateBack()},2e3)}})},radioChange:function(t){this.info[this.show_type[this.type].key]=t.target.value}},onNavigationBarButtonTap:function(t){this.send()},watch:{}};e.default=u}}]);