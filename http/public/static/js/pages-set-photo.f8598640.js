(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-photo"],{2362:function(t,a,n){"use strict";n.r(a);var o=n("44ec"),e=n("7edb");for(var u in e)"default"!==u&&function(t){n.d(a,t,function(){return e[t]})}(u);n("27cc");var i=n("2877"),d=Object(i["a"])(e["default"],o["a"],o["b"],!1,null,"0391ca72",null);a["default"]=d.exports},"27cc":function(t,a,n){"use strict";var o=n("3963"),e=n.n(o);e.a},3963:function(t,a,n){var o=n("72b6");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=n("4f06").default;e("25655b62",o,!0,{sourceMap:!1,shadowMode:!1})},"44ec":function(t,a,n){"use strict";var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("v-uni-view",{staticClass:"main"},[n("avatar",{attrs:{selWidth:"600upx",selHeight:"600upx",avatarSrc:t.myPhoto,avatarStyle:"width: 600upx; height: 600upx; border-radius: 15upx;"},on:{upload:function(a){a=t.$handleEvent(a),t.upload(a)}}})],1)],1)},e=[];n.d(a,"a",function(){return o}),n.d(a,"b",function(){return e})},"72b6":function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".main[data-v-0391ca72]{text-align:center;padding-top:%?70?%}",""])},"7edb":function(t,a,n){"use strict";n.r(a);var o=n("efbf"),e=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(a,t,function(){return o[t]})}(u);a["default"]=e.a},efbf:function(t,a,n){"use strict";var o=n("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("a481");var e=o(n("0497")),u=o(n("ae82")),i=(o(n("164f")),o(n("19ce"))),d=o(n("ca63")),r={components:{avatar:e.default},data:function(){return{show_path:"",my_data:{}}},onShow:function(){u.default.routeSonHook();var t=this;t.my_data=d.default.data("user_info"),t.show_path=d.default.staticPhoto()+t.my_data.photo,uni.$on("data_user_info",function(a){t.my_data=a})},onLoad:function(t){},onUnload:function(){uni.$off("data_user_info")},computed:{myPhoto:function(){return this.show_path.replace("70.jpg","300.jpg")}},methods:{upload:function(t){this.show_path=t.path,this.send()},send:function(){var t=this;uni.showLoading(),t.$httpSendFile({local_url:t.show_path,type:1,success:function(a){t.$httpSend({path:"/im/action/upPhoto",success:function(t){var a=d.default.data("user_info");a.photo=a.photo.replace(/(\?_=)[\d\.]+$/,"$1"+Math.random()),d.default.data("user_info",a),uni.hideLoading(),uni.showToast({title:"更换成功",duration:1e3}),i.default.downloadPhoto()}}),i.default.downloadPhoto()}})}},watch:{}};a.default=r}}]);