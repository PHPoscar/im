(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-qrcode"],{"0e18":function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".qrimg[data-v-6a371c10]{text-align:center;background:#fff;padding-bottom:%?40?%}.bode_main[data-v-6a371c10]{margin:%?150?% %?35?% 0 %?35?%;width:%?680?%;height:%?800?%;border-radius:%?50?%}.photo[data-v-6a371c10]{width:%?110?%;height:%?110?%;margin-left:%?30?%;margin-right:%?30?%}.my_padding[data-v-6a371c10]{padding-bottom:20px}.my_padding[data-v-6a371c10]:before{background-color:#fff}.my_padding[data-v-6a371c10]:before{background-color:#fff}.my_padding[data-v-6a371c10]:after{background-color:#fff}.text_font[data-v-6a371c10]{color:#8f8f94}",""])},"1ac3":function(t,a,i){"use strict";i.r(a);var n=i("4afc"),o=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,function(){return n[t]})}(e);a["default"]=o.a},"4afc":function(t,a,i){"use strict";var n=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(i("6552")),e=n(i("7784")),d=(n(i("164f")),n(i("ae82"))),u=n(i("ca63")),r=n(i("d8d9")),c={components:{uniList:o.default,uniListItem:e.default,tkiQrcode:r.default},data:function(){return{my_data:{id:0},img_path:""}},onShow:function(){d.default.routeTabBarHook();var t=this;uni.$on("data_user_info",function(a){t.my_data=a}),t.my_data=u.default.data("user_info")},onLoad:function(){},onUnload:function(){uni.$off("data_user_info")},computed:{qrPhoto:function(){return u.default.data("cache").local_photo},myPhoto:function(){return u.default.staticPhoto()+this.my_data.photo},qrData:function(){return u.default.data("http_url")+"/chat_add/"+this.my_data.id}},methods:{qrR:function(t){this.img_path=t}},watch:{}};a.default=c},"4cdb":function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"bode_main"},[i("v-uni-view",{staticClass:"uni-list my_padding"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-media-list uni-list-cell-navigate"},[i("v-uni-view",{staticClass:"uni-media-list-logo photo"},[i("v-uni-image",{attrs:{src:t.myPhoto,"lazy-load":!0}})],1),i("v-uni-view",{staticClass:"uni-media-list-body"},[i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(t.my_data.nickname))]),i("v-uni-view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[t._v(t._s(t.my_data.doodling))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"qrimg"},[i("tki-qrcode",{ref:"qrcode",attrs:{val:t.qrData,onval:!0,size:500,icon:t.qrPhoto,iconSize:65,unit:"upx",background:"#ffffff",foreground:"#000000",pdground:"#000000",loadMake:!0,showLoading:!0,loadingText:"加载中..."},on:{result:function(a){a=t.$handleEvent(a),t.qrR(a)}}}),i("v-uni-text",{staticClass:"text_font"},[t._v("扫一扫上面的二维码,加我为好友")])],1)],1)],1)},o=[];i.d(a,"a",function(){return n}),i.d(a,"b",function(){return o})},"6a03":function(t,a,i){var n=i("0e18");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("2d90ef91",n,!0,{sourceMap:!1,shadowMode:!1})},"73eb":function(t,a,i){"use strict";i.r(a);var n=i("4cdb"),o=i("1ac3");for(var e in o)"default"!==e&&function(t){i.d(a,t,function(){return o[t]})}(e);i("d353");var d=i("2877"),u=Object(d["a"])(o["default"],n["a"],n["b"],!1,null,"6a371c10",null);a["default"]=u.exports},d353:function(t,a,i){"use strict";var n=i("6a03"),o=i.n(n);o.a}}]);