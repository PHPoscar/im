(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-message-group_qrcode~pages-my-qrcode"],{"0514":function(t,e,o){"use strict";var n=o("5442"),r=o.n(n);r.a},"3ef8":function(t,e,o){"use strict";var n=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(o("f499"));o("c5f6");var i,u=n(o("8d69")),s={name:"tki-qrcode",props:{size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){var t=this;this._empty(this.val)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):i=new u.default({context:t,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),i.clear()},_saveCode:function(){var t=this;""!=this.result&&uni.saveImageToPhotosAlbum({filePath:t.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=typeof t,o=!1;return"number"==e&&""==String(t)?o=!0:"undefined"==e?o=!0:"object"==e?"{}"!=(0,r.default)(t)&&"[]"!=(0,r.default)(t)&&null!=t||(o=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(o=!0):"function"==e&&(o=!1),o}},watch:{size:function(t,e){var o=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout(function(){o._makeCode()},100))},val:function(t,e){var o=this;this.onval&&(t==e||this._empty(t)||setTimeout(function(){o._makeCode()},0))}},computed:{cpSize:function(){return"upx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout(function(){t._makeCode()},0))}};e.default=s},"504c":function(t,e,o){"use strict";o.r(e);var n=o("3ef8"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},5442:function(t,e,o){var n=o("c2be");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=o("4f06").default;r("81716cfc",n,!0,{sourceMap:!1,shadowMode:!1})},"5fd8":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"_qrCode"},[o("v-uni-canvas",{staticClass:"_qrCodeCanvas",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{id:"_myQrCodeCanvas","canvas-id":"_myQrCodeCanvas"}}),o("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{src:t.result}})],1)},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},"6c7b":function(t,e,o){var n=o("5ca1");n(n.P,"Array",{fill:o("36bd")}),o("9c6c")("fill")},"8d69":function(t,e,o){"use strict";var n=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(o("f499"));o("6c7b"),o("c5f6");var i={};(function(){function t(t){var e,o,n;return t<128?[t]:t<2048?(e=192+(t>>6),o=128+(63&t),[e,o]):(e=224+(t>>12),o=128+(t>>6&63),n=128+(63&t),[e,o,n])}function e(e){for(var o=[],n=0;n<e.length;n++)for(var r=e.charCodeAt(n),i=t(r),u=0;u<i.length;u++)o.push(i[u]);return o}function o(t,o){this.typeNumber=-1,this.errorCorrectLevel=o,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=e(t),this.make()}o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+o][e+n]=0<=o&&o<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==o||6==o)||2<=o&&o<=4&&2<=n&&n<=4)},createQrcode:function(){for(var t=0,e=0,o=null,n=0;n<8;n++){this.makeImpl(n);var r=s.getLostPoint(this);(0==n||t>r)&&(t=r,e=n,o=this.modules)}this.modules=o,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var n=t[e],r=t[o];if(null==this.modules[n][r])for(var i=-2;i<=2;i++)for(var u=-2;u<=2;u++)this.modules[n+i][r+u]=-2==i||2==i||-2==u||2==u||0==i&&0==u}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var n=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=n,this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=n}},setupTypeInfo:function(t,e){for(var o=n[this.errorCorrectLevel]<<3|e,r=s.getBCHTypeInfo(o),i=0;i<15;i++){var u=!t&&1==(r>>i&1);i<6?this.modules[i][8]=u:i<8?this.modules[i+1][8]=u:this.modules[this.moduleCount-15+i][8]=u;u=!t&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=u:i<9?this.modules[8][15-i-1+1]=u:this.modules[8][15-i-1]=u}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new c,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var n=0,r=this.utf8bytes.length;n<r;n++)t.put(this.utf8bytes[n],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,o=0,n=0,r=this.rsBlock.length/3,i=new Array,u=0;u<r;u++)for(var a=this.rsBlock[3*u+0],l=this.rsBlock[3*u+1],f=this.rsBlock[3*u+2],c=0;c<a;c++)i.push([f,l]);for(var d=new Array(i.length),g=new Array(i.length),m=0;m<i.length;m++){var p=i[m][0],v=i[m][1]-p;o=Math.max(o,p),n=Math.max(n,v),d[m]=new Array(p);for(u=0;u<d[m].length;u++)d[m][u]=255&t.buffer[u+e];e+=p;var y=s.getErrorCorrectPolynomial(v),T=new h(d[m],y.getLength()-1),C=T.mod(y);g[m]=new Array(y.getLength()-1);for(u=0;u<g[m].length;u++){var w=u+C.getLength()-g[m].length;g[m][u]=w>=0?C.get(w):0}}var b=new Array(this.totalDataCount),P=0;for(u=0;u<o;u++)for(m=0;m<i.length;m++)u<d[m].length&&(b[P++]=d[m][u]);for(u=0;u<n;u++)for(m=0;m<i.length;m++)u<g[m].length&&(b[P++]=g[m][u]);return b},mapData:function(t,e){for(var o=-1,n=this.moduleCount-1,r=7,i=0,u=this.moduleCount-1;u>0;u-=2){6==u&&u--;while(1){for(var a=0;a<2;a++)if(null==this.modules[n][u-a]){var l=!1;i<t.length&&(l=1==(t[i]>>>r&1));var h=s.getMask(e,n,u-a);h&&(l=!l),this.modules[n][u-a]=l,r--,-1==r&&(i++,r=7)}if(n+=o,n<0||this.moduleCount<=n){n-=o,o=-o;break}}}}},o.PAD0=236,o.PAD1=17;for(var n=[1,0,3,2],u={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case u.PATTERN000:return(e+o)%2==0;case u.PATTERN001:return e%2==0;case u.PATTERN010:return o%3==0;case u.PATTERN011:return(e+o)%3==0;case u.PATTERN100:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case u.PATTERN101:return e*o%2+e*o%3==0;case u.PATTERN110:return(e*o%2+e*o%3)%2==0;case u.PATTERN111:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new h([1],0),o=0;o<t;o++)e=e.multiply(new h([1,a.gexp(o)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,n=0,r=0;r<e;r++)for(var i=0,u=t.modules[r][0],s=0;s<e;s++){var a=t.modules[r][s];if(s<e-6&&a&&!t.modules[r][s+1]&&t.modules[r][s+2]&&t.modules[r][s+3]&&t.modules[r][s+4]&&!t.modules[r][s+5]&&t.modules[r][s+6]&&(s<e-10?t.modules[r][s+7]&&t.modules[r][s+8]&&t.modules[r][s+9]&&t.modules[r][s+10]&&(o+=40):s>3&&t.modules[r][s-1]&&t.modules[r][s-2]&&t.modules[r][s-3]&&t.modules[r][s-4]&&(o+=40)),r<e-1&&s<e-1){var l=0;a&&l++,t.modules[r+1][s]&&l++,t.modules[r][s+1]&&l++,t.modules[r+1][s+1]&&l++,0!=l&&4!=l||(o+=3)}u^a?i++:(u=a,i>=5&&(o+=3+i-5),i=1),a&&n++}for(s=0;s<e;s++)for(i=0,u=t.modules[0][s],r=0;r<e;r++){a=t.modules[r][s];r<e-6&&a&&!t.modules[r+1][s]&&t.modules[r+2][s]&&t.modules[r+3][s]&&t.modules[r+4][s]&&!t.modules[r+5][s]&&t.modules[r+6][s]&&(r<e-10?t.modules[r+7][s]&&t.modules[r+8][s]&&t.modules[r+9][s]&&t.modules[r+10][s]&&(o+=40):r>3&&t.modules[r-1][s]&&t.modules[r-2][s]&&t.modules[r-3][s]&&t.modules[r-4][s]&&(o+=40)),u^a?i++:(u=a,i>=5&&(o+=3+i-5),i=1)}var h=Math.abs(100*n/e/e-50)/5;return o+=10*h,o}},a={glog:function(t){if(t<1)throw new Error("glog("+t+")");return a.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return a.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)a.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)a.EXP_TABLE[l]=a.EXP_TABLE[l-4]^a.EXP_TABLE[l-5]^a.EXP_TABLE[l-6]^a.EXP_TABLE[l-8];for(l=0;l<255;l++)a.LOG_TABLE[a.EXP_TABLE[l]]=l;function h(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var o=0;while(o<t.length&&0==t[o])o++;this.num=new Array(t.length-o+e);for(var n=0;n<t.length-o;n++)this.num[n]=t[n+o]}h.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var n=0;n<t.getLength();n++)e[o+n]^=a.gexp(a.glog(this.get(o))+a.glog(t.get(n)));return new h(e,0)},mod:function(t){var e=this.getLength(),o=t.getLength();if(e-o<0)return this;for(var n=new Array(e),r=0;r<e;r++)n[r]=this.get(r);while(n.length>=o){var i=a.glog(n[0])-a.glog(t.get(0));for(r=0;r<t.getLength();r++)n[r]^=a.gexp(a.glog(t.get(r))+i);while(0==n[0])n.shift()}return new h(n,0)}};var f=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function c(){this.buffer=new Array,this.length=0}o.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=f[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var o=e.length/3,n=0,r=0;r<o;r++){var i=e[3*r+0],u=e[3*r+2];n+=u*i}var s=t>9?2:1;if(this.utf8bytes.length+s<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},c.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var o=0;o<e;o++)this.putBit(t>>>e-o-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var d=[];i=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:"_myQrCodeCanvas",context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var e in t)this.options[e]=t[e];for(var n=null,i=(e=0,d.length);e<i;e++)if(d[e].text==this.options.text&&d[e].text.correctLevel==this.options.correctLevel){n=d[e].obj;break}e==i&&(n=new o(this.options.text,this.options.correctLevel),d.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:n}));var u=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},s=function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),o=n.getModuleCount(),r=t.size,i=t.imageSize,s=(r/o).toPrecision(4),l=(r/o).toPrecision(4),h=0;h<o;h++)for(var f=0;f<o;f++){var c=Math.ceil((f+1)*s)-Math.floor(f*s),d=Math.ceil((h+1)*s)-Math.floor(h*s),g=u({row:h,col:f,count:o,options:t});e.setFillStyle(n.modules[h][f]?g:t.background),e.fillRect(Math.round(f*s),Math.round(h*l),c,d)}if(t.image){var m=function(e,o,n,r,i,u,s,a,l){e.setLineWidth(s),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(o+u,n),e.arcTo(o+r,n,o+r,n+u,u),e.arcTo(o+r,n+i,o+r-u,n+i,u),e.arcTo(o,n+i,o,n+i-u,u),e.arcTo(o,n,o+u,n,u),e.closePath(),a&&e.fill(),l&&e.stroke()},p=Number(((r-i)/2).toFixed(2)),v=Number(((r-i)/2).toFixed(2));m(e,p,v,i,i,2,6,!0,!0),e.drawImage(t.image,p,v,i,i)}setTimeout(function(){e.draw(!0,function(){setTimeout(function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&(a(e.tempFilePath)?a(e.apFilePath)?t.cbResult(e.tempFilePath):t.cbResult(e.apFilePath):t.cbResult(e.tempFilePath))},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){uni.hideLoading()}},t.context)},t.text.length+100)})},t.usingComponents?0:150)};s(this.options);var a=function(t){var e=typeof t,o=!1;return"number"==e&&""==String(t)?o=!0:"undefined"==e?o=!0:"object"==e?"{}"!=(0,r.default)(t)&&"[]"!=(0,r.default)(t)&&null!=t||(o=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(o=!0):"function"==e&&(o=!1),o}},i.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,function(){t&&t()})}})();var u=i;e.default=u},9928:function(t,e,o){"use strict";o.r(e);var n=o("5fd8"),r=o("504c");for(var i in r)"default"!==i&&function(t){o.d(e,t,function(){return r[t]})}(i);o("0514");var u=o("2877"),s=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,"63f596a6",null);e["default"]=s.exports},c2be:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"._qrCode[data-v-63f596a6]{position:relative}._qrCodeCanvas[data-v-63f596a6]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""])}}]);