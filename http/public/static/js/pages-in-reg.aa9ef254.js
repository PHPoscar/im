(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-in-reg"],{"35c0":function(n,t,a){"use strict";var i=a("36fe"),e=a.n(i);e.a},"36fe":function(n,t,a){var i=a("50b4");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("4f06").default;e("799eb52a",i,!0,{sourceMap:!1,shadowMode:!1})},"4e5e":function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{showPassword:!0,form:{username:"",password:""}}},onLoad:function(){},computed:{checkIn:function(){return""!=this.form.password&&""!=this.form.username&&this.form.password.length>5&&this.form.username.length>5}},methods:{changePassword:function(){this.showPassword=!this.showPassword},delInputUsernameText:function(){this.form.username=""},delInputPasswordText:function(){this.form.password=""},subReg:function(){var n=this;n.checkIn&&(/^\w{1,20}$/.test(this.form.username)?/^\w{1,20}$/.test(this.form.password)?n.$httpSend({path:"/im/in/reg",data:n.form,success:function(n){uni.setStorage({key:"token",data:n.token,fail:function(){uni.showModal({content:"本地存储数据不可用!"})},success:function(){uni.reLaunch({url:"../chat/index"})}})}}):uni.showModal({content:"密码只能包括下划线、数字、字母,长度6-20位"}):uni.showModal({content:"相遇号只能包括下划线、数字、字母,并且不能超过20个"}))},go_forget:function(){uni.navigateTo({url:"../../pages/in/forget"})},go_register:function(){uni.navigateTo({url:"../../pages/in/reg"})}}};t.default=i},"50b4":function(n,t,a){t=n.exports=a("2350")(!1),t.push([n.i,".landing[data-v-57c0a05d]{height:%?84?%;line-height:%?84?%;color:#fff;font-size:%?32?%;bordor:none;border-radius:%?10?%}.placeholdertext[data-v-57c0a05d]{\n\twidth:%?48?%;\n\t\n\theight:%?24?%}.landing_false[data-v-57c0a05d]{background-color:#d8d8d8}.login-btn[data-v-57c0a05d]{padding:%?10?% %?20?%;margin-top:%?100?%;text-align:center}.login-input uni-input[data-v-57c0a05d]{background:#f2f5f6;font-size:%?28?%;padding:%?10?% %?25?%;height:%?62?%;line-height:%?62?%;border-radius:%?8?%}.login-margin-b[data-v-57c0a05d]{margin-bottom:%?25?%}.login-input[data-v-57c0a05d]{padding:%?20?% %?20?%}.login-head[data-v-57c0a05d]{font-size:%?34?%;text-align:center;margin-top:%?35?%;margin-bottom:%?24?%;padding:%?25?% %?80?% %?130?% %?10?%}.login-card[data-v-57c0a05d]{background:#fff;border-radius:%?12?%;padding:%?10?% %?25?%;\n\t/* box-shadow: 0 6upx 18upx rgba(0,0,0,0.12); */position:relative;margin-top:%?100?%}.login-bg[data-v-57c0a05d]{\n\t/* height: 260upx;\n\tpadding: 25upx;\n\tbackground: linear-gradient(#FF978D, #FFBB69); */}.uni-input[data-v-57c0a05d]{height:%?50?%;width:%?460?%;padding:%?15?% 0 %?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.uni-icon[data-v-57c0a05d]{text-align:left}uni-page-body[data-v-57c0a05d]{background-color:#fff}body.?%PAGE?%[data-v-57c0a05d]{background-color:#fff}",""])},5154:function(n,t,a){"use strict";var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"login-bg"},[a("v-uni-view",{staticClass:"login-card"},[a("v-uni-view",{staticClass:"login-head"},[n._v("输入您的注册信息")]),a("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-label",{staticClass:"label-2-text"},[a("v-uni-text",[n._v("帐号")])],1),a("v-uni-view",[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"手机号/相遇号(6-16位字母/数字)"},model:{value:n.form.username,callback:function(t){n.$set(n.form,"username",t)},expression:"form.username"}})],1),n.form.username?a("v-uni-view",{staticClass:"uni-icon uni-icon-clear",on:{click:function(t){t=n.$handleEvent(t),n.delInputUsernameText(t)}}}):a("v-uni-view",{staticClass:"uni-icon"}),a("v-uni-view",{staticClass:"uni-icon placeholdertext"})],1),a("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-label",{staticClass:"label-2-text"},[a("v-uni-text",[n._v("密码")])],1),a("v-uni-view",[a("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入密码(6-16位)",password:n.showPassword},model:{value:n.form.password,callback:function(t){n.$set(n.form,"password",t)},expression:"form.password"}})],1),n.form.password?a("v-uni-view",{staticClass:"uni-icon uni-icon-clear",on:{click:function(t){t=n.$handleEvent(t),n.delInputPasswordText(t)}}}):a("v-uni-view",{staticClass:"uni-icon"}),a("v-uni-view",{staticClass:"uni-icon uni-icon-eye",class:[n.showPassword?"":"uni-active"],on:{click:function(t){t=n.$handleEvent(t),n.changePassword(t)}}})],1)],1)],1),a("v-uni-view",{staticClass:"login-btn"},[a("v-uni-button",{class:["landing",n.checkIn?"landing_true":"landing_false"],attrs:{disabled:!n.checkIn,type:"primary"},on:{click:function(t){t=n.$handleEvent(t),n.subReg(t)}}},[n._v("注 册")])],1)],1)},e=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return e})},7182:function(n,t,a){"use strict";a.r(t);var i=a("5154"),e=a("91ea");for(var s in e)"default"!==s&&function(n){a.d(t,n,function(){return e[n]})}(s);a("35c0");var o=a("2877"),u=Object(o["a"])(e["default"],i["a"],i["b"],!1,null,"57c0a05d",null);t["default"]=u.exports},"91ea":function(n,t,a){"use strict";a.r(t);var i=a("4e5e"),e=a.n(i);for(var s in i)"default"!==s&&function(n){a.d(t,n,function(){return i[n]})}(s);t["default"]=e.a}}]);