(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-group_photo"],{"25c7":function(t,a,e){"use strict";e.r(a);var n=e("509fd"),i=e("b84f");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("2e1d");var u=e("2877"),s=Object(u["a"])(i["default"],n["a"],n["b"],!1,null,"3888756b",null);a["default"]=s.exports},2642:function(t,a,e){"use strict";var n=e("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("c7e9")),o=n(e("3809")),u=n(e("1a0f")),s=n(e("ec4e")),d={components:{avatar:i.default},data:function(){return{show_path:"",list_id:0}},onShow:function(){o.default.routeSonHook(),this.show_path=s.default.staticPhoto()+"default_group_photo/300.jpg"},computed:{},methods:{upload:function(t){this.show_path=t.path,this.send()},send:function(){var t=this;uni.showLoading(),t.$httpSendFile({local_url:t.show_path,data:{list_id:t.list_id},type:4,success:function(a){t.$httpSend({path:"/im/message/upGroupPhoto",data:{list_id:t.list_id},success:function(t){u.default.getChatList(),uni.hideLoading(),uni.showToast({title:"更换成功",duration:1e3})}})}})}},onLoad:function(t){var a=this;a.list_id=t.list_id,a.$httpSend({path:"/im/message/getGroupPhoto",data:{list_id:a.list_id},success:function(t){a.show_path=s.default.staticPhoto()+t}})},watch:{}};a.default=d},"2e1d":function(t,a,e){"use strict";var n=e("bf83"),i=e.n(n);i.a},"509fd":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"main"},[e("avatar",{attrs:{selWidth:"600upx",selHeight:"600upx",avatarSrc:t.show_path,avatarStyle:"width: 600upx; height: 600upx; border-radius: 15upx;"},on:{upload:function(a){a=t.$handleEvent(a),t.upload(a)}}})],1)],1)},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},b84f:function(t,a,e){"use strict";e.r(a);var n=e("2642"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=i.a},bf83:function(t,a,e){var n=e("dbd2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("0ee44066",n,!0,{sourceMap:!1,shadowMode:!1})},dbd2:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".main[data-v-3888756b]{text-align:center;padding-top:%?70?%}",""])}}]);