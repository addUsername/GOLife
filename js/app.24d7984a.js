(function(e){function t(t){for(var n,o,s=t[0],u=t[1],c=t[2],l=0,h=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==i[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={app:0},a=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2a47e434"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}i[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/GOLife/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-navigation-drawer",{attrs:{color:"secundary","expand-on-hover":"true","mini-variant":"true",absolute:"",dark:""}},[r("v-list",[r("v-list-item",{staticClass:"px-4"},[r("v-list-item-content",[r("v-list-item-avatar",{attrs:{link:"",to:"https://www.github.com/addusername"}},[r("v-img",{attrs:{"max-width":"65",src:"https://api.iconify.design/mdi:github.svg"}})],1),r("v-list-item-subtitle",[e._v("addUsername")])],1)],1),r("v-divider")],1)],1),r("home")],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("v-container",{staticClass:"pa-5",attrs:{fluid:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-card",{staticClass:"fill-height",attrs:{color:"secundary"}},[r("v-card-title",[e._v(" Conway's Game Of Life!")]),r("v-card-subtitle",[r("v-icon",[e._v("mdi-arrow-left")]),e._v(" Settings")],1),r("v-card-text",[r("v-col",[r("v-btn",{nativeOn:{click:function(t){return e.init(t)}}},[r("v-icon",[e._v("mdi-arm-flex")]),e._v("Load")],1),r("v-btn",{nativeOn:{click:function(t){return e.stop(t)}}},[r("v-icon",[e._v("mdi-pause")]),e._v("Pause")],1),r("v-btn",{nativeOn:{click:function(t){return e.start(t)}}},[r("v-icon",[e._v("mdi-play")]),e._v("Start")],1),r("v-btn",{nativeOn:{click:function(t){return e.background(t)}}},[r("v-icon",[e._v("mdi-theme-light-dark")])],1)],1),r("v-col",[r("div",[e.isLoaded?r("canvas",{attrs:{id:"canvas",width:e.window_width/1.05,height:e.window_height/1.5}},[e._v(" Sorry, this demo requires a web browser which supports HTML5 canvas! ")]):e._e()])])],1)],1)],1)],1)],1)},s=[],u={name:"Home",components:{},data:function(){return{SIZE:20,OPACITY:.5,FOCAL_LENGTH:3,FPS:1,renderer:"",cubes:[],cubesAlive:[],num_cubes:"",ticker:"",cur_white:!0,window_width:window.innerWidth,window_height:window.innerHeight,isLoaded:!0}},methods:{init:function(){this.isLoaded=!0,this.cubesAlive=[];for(var e,t=[],r=0;r<this.SIZE;++r){t=[];for(var n=0;n<1;++n){for(var i=0;i<this.SIZE;++i)if(Math.random()<.5?(t.push(1),e=this.OPACITY):(t.push(0),e=0),0==r||0==n||0==i||r==this.SIZE-1||9==n||i==this.SIZE-1){var a=Pre3d.ShapeUtils.makeCube(.5),o=new Pre3d.Transform;o.translate(r-5,n-5,i-5),this.cubes.push({shape:a,color:new Pre3d.RGBA(r/10,n/10,i/10,e),trans:o})}this.cubesAlive.push(t),t=[]}this.num_cubes=this.cubes.length}this.ticker.start()},draw:function(){console.log("drrawing!!!");for(var e=0;e<this.num_cubes;++e){var t=this.cubes[e];this.renderer.fill_rgba=t.color,this.renderer.transform=t.trans,this.renderer.bufferShape(t.shape)}this.cur_white?this.renderer.ctx.setFillColor(1,1,1,1):this.renderer.ctx.setFillColor(0,0,0,1),this.renderer.drawBackground(),this.renderer.drawBuffer(),this.renderer.emptyBuffer()},spin_and_draw:function(){this.nextIteration(),this.draw()},nextIteration:function(){var e=[],t=[],r=0;this.cubes=[];for(var n=0;n<this.SIZE;++n){t=[];for(var i=0;i<1;++i){for(var a=0;a<this.SIZE;++a)if(this.applyRules(n,a)?(t.push(1),r=this.OPACITY):(t.push(0),r=0),0==n||0==i||0==a||n==this.SIZE-1||1==i||a==this.SIZE-1){var o=Pre3d.ShapeUtils.makeCube(.5),s=new Pre3d.Transform;s.translate(n-5,i-5,a-5),this.cubes.push({shape:o,color:new Pre3d.RGBA(n/10,i/10,a/10,r),trans:s})}e.push(t),t=[]}}this.cubesAlive=e,console.log(e)},applyRules:function(e,t){if(0==e||e==this.SIZE-1)return!1;if(0==t||t==this.SIZE-1)return!1;var r=this.getSum_Neighboors(e,t);return!(r>3||r<2)&&(1==this.cubesAlive[e][t]||!this.cubesAlive[e][t]&&r>2)},getSum_Neighboors:function(e,t){var r=0;return r+=this.cubesAlive[e-1][t-1]+this.cubesAlive[e-1][t]+this.cubesAlive[e-1][t+1],r+=this.cubesAlive[e][t-1]+this.cubesAlive[e][t+1],r+=this.cubesAlive[e+1][t-1]+this.cubesAlive[e+1][t]+this.cubesAlive[e+1][t+1],r},stop:function(){this.ticker.stop()},start:function(){this.ticker.start()},background:function(){this.cur_white=!this.cur_white}},mounted:function(){console.log("mounted()!!");var e=document.getElementById("canvas");console.log(e),this.renderer=new Pre3d.Renderer(e),console.log(this.renderer),this.renderer.camera.focal_length=this.FOCAL_LENGTH,DemoUtils.autoCamera(this.renderer,0,0,-30,.4,-1.06,0,this.draw),this.ticker=new DemoUtils.Ticker(this.FPS,this.spin_and_draw),console.log(this.ticker)}},c=u,l=r("2877"),d=r("6544"),h=r.n(d),v=r("8336"),f=r("b0af"),p=r("99d9"),b=r("62ad"),m=r("a523"),w=r("132d"),g=r("0fd9"),_=Object(l["a"])(c,o,s,!1,null,null,null),y=_.exports;h()(_,{VBtn:v["a"],VCard:f["a"],VCardSubtitle:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:b["a"],VContainer:m["a"],VIcon:w["a"],VRow:g["a"]});var S={name:"App",components:{home:y},data:function(){return{}}},k=S,A=r("7496"),O=r("ce7e"),C=r("adda"),I=r("8860"),P=r("da13"),E=r("8270"),L=r("5d23"),x=r("f774"),V=Object(l["a"])(k,i,a,!1,null,null,null),T=V.exports;h()(V,{VApp:A["a"],VDivider:O["a"],VImg:C["a"],VList:I["a"],VListItem:P["a"],VListItemAvatar:E["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VNavigationDrawer:x["a"]});r("d3b7");var j=r("8c4f");n["a"].use(j["a"]);var Z=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],B=new j["a"]({mode:"history",base:"/GOLife/",routes:Z}),G=B,F=r("f309");n["a"].use(F["a"]);var H=new F["a"]({theme:{themes:{light:{primary:"#90caf9",secondary:"#ffecb3",background:"#eeeeee"},dark:{primary:"#62768B",secondary:"#cbba83",background:"#bcbcbc"}}}});n["a"].config.productionTip=!1,new n["a"]({router:G,vuetify:H,render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.24d7984a.js.map