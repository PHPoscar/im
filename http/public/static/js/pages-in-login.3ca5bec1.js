(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-in-login"],{"37d6":function(n,t,a){"use strict";var i=a("ee94"),e=a.n(i);e.a},"5b8c":function(n,t,a){"use strict";var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"login-bg"},[a("v-uni-view",{staticClass:"login-card"},[a("v-uni-view",{staticClass:"uni-media-image"},[a("v-uni-image",{staticClass:"uni-media-loading",attrs:{src:"/static/theme/default/app.png"}})],1),a("v-uni-view",{staticClass:"login-head"},[n._v("")]),a("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-label",{staticClass:"label-2-text"},[a("v-uni-text",[n._v("帐号")])],1),a("v-uni-view",[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"手机号/相遇号(6-16位字母/数字)"},model:{value:n.form.username,callback:function(t){n.$set(n.form,"username",t)},expression:"form.username"}})],1),n.form.username?a("v-uni-view",{staticClass:"uni-icon uni-icon-clear",on:{click:function(t){t=n.$handleEvent(t),n.delInputUsernameText(t)}}}):a("v-uni-view",{staticClass:"uni-icon"}),a("v-uni-view",{staticClass:"uni-icon placeholdertext"},[n._v("")])],1),a("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-label",{staticClass:"label-2-text"},[a("v-uni-text",[n._v("密码")])],1),a("v-uni-view",[a("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入密码(6-16位)",password:n.showPassword},model:{value:n.form.password,callback:function(t){n.$set(n.form,"password",t)},expression:"form.password"}})],1),n.form.password?a("v-uni-view",{staticClass:"uni-icon uni-icon-clear",on:{click:function(t){t=n.$handleEvent(t),n.delInputPasswordText(t)}}}):a("v-uni-view",{staticClass:"uni-icon"}),a("v-uni-view",{staticClass:"uni-icon uni-icon-eye",class:[n.showPassword?"":"uni-active"],on:{click:function(t){t=n.$handleEvent(t),n.changePassword(t)}}})],1),a("v-uni-view",{staticClass:"login-function-old"},[a("v-uni-view",{staticClass:"login-register ",staticStyle:{color:"red"},on:{click:function(t){t=n.$handleEvent(t),n.go_register(t)}}},[n._v("快速注册>")])],1)],1),a("v-uni-view",{staticClass:"login-btn"},[a("v-uni-button",{class:["landing",n.checkIn?"landing_true":"landing_false"],attrs:{disabled:!n.checkIn,type:"primary"},on:{click:function(t){t=n.$handleEvent(t),n.subLongin(t)}}},[n._v("登 录")])],1)],1)],1)},e=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return e})},"7d9a":function(n,t,a){"use strict";a.r(t);var i=a("5b8c"),e=a("cfe0");for(var o in e)"default"!==o&&function(n){a.d(t,n,function(){return e[n]})}(o);a("37d6");var s=a("2877"),d=Object(s["a"])(e["default"],i["a"],i["b"],!1,null,"16bd192a",null);t["default"]=d.exports},cfe0:function(n,t,a){"use strict";a.r(t);var i=a("d7a7"),e=a.n(i);for(var o in i)"default"!==o&&function(n){a.d(t,n,function(){return i[n]})}(o);t["default"]=e.a},d7a7:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{showPassword:!0,form:{username:"",password:""}}},onLoad:function(){},computed:{checkIn:function(){return""!=this.form.password&&""!=this.form.username&&this.form.password.length>5}},methods:{changePassword:function(){this.showPassword=!this.showPassword},delInputUsernameText:function(){this.form.username=""},delInputPasswordText:function(){this.form.password=""},subLongin:function(){var n=this;n.checkIn&&n.$httpSend({path:"/im/in/login",data:n.form,success:function(n){uni.setStorage({key:"token",data:n.token,fail:function(){uni.showModal({content:"本地存储数据不可用!"})},success:function(){uni.reLaunch({url:"../chat/index"})}})}})},go_forget:function(){uni.navigateTo({url:"../../pages/in/forget"})},go_frozen:function(){uni.navigateTo({url:"../../pages/set/frozen"})},go_register:function(){uni.navigateTo({url:"../../pages/in/reg"})}}};t.default=i},dae4:function(n,t,a){t=n.exports=a("2350")(!1),t.push([n.i,".uni-media-image[data-v-16bd192a]{padding:%?10?% %?10?%;margin-top:%?10?%;text-align:center}.uni-media-loading[data-v-16bd192a]{width:%?150?%;height:%?150?%}.landing[data-v-16bd192a]{height:%?84?%;line-height:%?84?%;color:#fff;font-size:%?32?%;bordor:none;border-radius:%?10?%}.placeholdertext[data-v-16bd192a]{\n\twidth:%?40?%;\n\t\n\t\n\theight:%?24?%}.landing_false[data-v-16bd192a]{background-color:#d8d8d8}.login-btn[data-v-16bd192a]{padding:%?10?% %?20?%;margin-top:%?100?%;text-align:center}.login-function[data-v-16bd192a]{\n\t\n\tmargin-top:%?350?%;\n\t\n\t\n\tcolor:#999;text-align:center}.login-function-old[data-v-16bd192a]{margin-top:%?60?%;margin-right:%?30?%;color:red;text-align:center}.login-forget[data-v-16bd192a]{float:left;font-size:%?26?%;color:#999}.textspace[data-v-16bd192a]{padding:%?10?% %?10?%}.login-register[data-v-16bd192a]{color:#666;float:right;font-size:%?26?%}.login-input uni-input[data-v-16bd192a]{background:#f2f5f6;font-size:%?28?%;padding:%?10?% %?25?%;height:%?62?%;line-height:%?62?%;border-radius:%?8?%}.login-margin-b[data-v-16bd192a]{margin-bottom:%?25?%}.login-input[data-v-16bd192a]{padding:%?20?% %?20?%}.login-head[data-v-16bd192a]{font-size:%?34?%;text-align:center;padding:%?25?% %?10?% %?55?% %?10?%}.login-card[data-v-16bd192a]{background:#fff;border-radius:%?12?%;padding:%?10?% %?25?%;\n\t/* box-shadow: 0 6upx 18upx rgba(0,0,0,0.12); */position:relative;margin-top:%?100?%}.login-bg[data-v-16bd192a]{\n\t/* height: 260upx;\n\tpadding: 25upx;\n\tbackground: linear-gradient(#FF978D, #FFBB69); */}uni-page-body[data-v-16bd192a]{background-color:#fff}.uni-input[data-v-16bd192a]{height:%?50?%;width:%?460?%;padding:%?15?% 0 %?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.uni-form-item .with-fun .uni-icon[data-v-16bd192a]{text-align:left}body.?%PAGE?%[data-v-16bd192a]{background-color:#fff}",""])},ee94:function(n,t,a){var i=a("dae4");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("4f06").default;e("3d2dd67a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);