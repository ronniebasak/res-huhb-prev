(function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var u=a[i];0!==o[u]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},o={index:0},n=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2a588a86"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=r);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var l=new Error;n=function(t){u.onerror=u.onload=null,clearTimeout(c);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}o[e]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{staticClass:"purple--text",attrs:{app:"",color:"white",dark:"",elevation:"0"}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("h2",{staticClass:"headline"},[e._v(" Vuetify ")])],1),a("v-spacer"),a("v-btn",{staticClass:"grey--text",attrs:{fab:"",small:"",text:""}},[a("v-icon",[e._v("mdi-magnify")])],1)],1),a("v-main",[a("v-container",[a("router-view")],1)],1)],1)},n=[],i=r["a"].extend({name:"App",data:function(){return{}}}),s=i,u=a("2877"),l=a("6544"),c=a.n(l),p=a("7496"),d=a("40dc"),f=a("8336"),m=a("a523"),v=a("132d"),b=a("adda"),g=a("f6c4"),h=a("2fa4"),y=Object(u["a"])(s,o,n,!1,null,null,null),w=y.exports;c()(y,{VApp:p["a"],VAppBar:d["a"],VBtn:f["a"],VContainer:m["a"],VIcon:v["a"],VImg:b["a"],VMain:g["a"],VSpacer:h["a"]});var x=a("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7"),a("3ca3"),a("ddb0");var _=a("8c4f"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",xl:"10","offset-xl":"1"}},[a("p",{staticClass:"text-md-h1 text-h2"},[e._v("Coding")]),a("v-tabs",[a("v-tab",[e._v("Articles")]),a("v-tab",[e._v("Videos")]),a("v-tab",[e._v("Tutorials")])],1),a("v-row",[a("v-col",{attrs:{cols:"12",xl:"8","offset-xl":"2",order:"1"}},[e._l(e.contents,(function(e,t){return[a("card-comp",{key:"img_"+t,attrs:{authorName:e.authorName,created:e.created,img:e.img,preview:e.preview,title:e.title,alternate:Boolean(t%2)}})]}))],2)],1)],1)],1)],1)},V=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"my-5",attrs:{elevation:"20",rounded:"xl"}},[a("v-responsive",{attrs:{"aspect-ratio":4.5}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",order:!e.$vuetify.breakpoint.xs&&e.alternate?2:1}},[a("v-img",{style:{borderRadius:e.$vuetify.breakpoint.xs?"24px 24px 0 0":e.alternate?"0 24px 24px 0":"24px 0 0 24px"},attrs:{src:e.img,height:"100%"}})],1),a("v-col",{staticClass:"px-10 py-10",attrs:{cols:"12",sm:"6",order:!e.$vuetify.breakpoint.xs&&e.alternate?1:2}},[a("p",{staticClass:"text-h5"},[e._v(e._s(e.title))]),a("p",{staticClass:"body-2"},[a("span",{staticStyle:{display:"inline-block"}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-clock-time-eight-outline")]),e._v(" "+e._s(e.created)+" ")],1),a("span",{staticStyle:{display:"inline-block","margin-left":"15px"}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-fountain-pen-tip")]),e._v(" "+e._s(e.authorName)+" ")],1)]),e.$vuetify.breakpoint.xs?e._e():a("div",[e._v(" "+e._s(e.preview)+" ")])])],1)],1)],1)},S=[],q=r["a"].extend({name:"CardComponent",props:{title:String,img:String,created:String,authorName:String,preview:String,alternate:Boolean}}),j=q,O=a("62ad"),A=a("6b53"),M=a("0fd9"),N=a("8dd9"),P=Object(u["a"])(j,C,S,!1,null,null,null),B=P.exports;c()(P,{VCol:O["a"],VIcon:v["a"],VImg:b["a"],VResponsive:A["a"],VRow:M["a"],VSheet:N["a"]});var T=r["a"].extend({name:"Home",components:{CardComp:B},data:function(){return{contents:[{title:"7 habits of Highly Successful women",img:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45",created:"Aug 3, 2020",authorName:"Sohan Basak",preview:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint illum veritatis aspernatur quisquam. Quos corporis accusantium ipsum fugiat eaque suscipit laborum cum inventore perspiciatis dolor cumque odit rerum temporibus voluptate obcaecati qui laboriosam corrupti iure, vero, ratione voluptas dolorem aut aliquid. Fuga, quibusdam atque fugiat libero et labore voluptatum pariatur?"},{title:"7 habits of Highly Successful men",img:"https://images.unsplash.com/photo-1623559033326-581700ef14b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",created:"Aug 3, 2020",authorName:"Meenank Minnu",preview:"veritatis aspernatur quisquam. Quos corporis accusantium ipsum fugiat eaque suscipit laborum cum inventore perspiciatis dolor cumque odit rerum temporibus voluptate obcaecati qui laboriosam corrupti iure, vero, ratione voluptas dolorem aut aliquid. Fuga, quibusdam atque fugiat libero et labore voluptatum pariatur?"}]}}}),$=T,E=a("71a3"),H=a("fe57"),F=Object(u["a"])($,k,V,!1,null,null,null),I=F.exports;c()(F,{VCol:O["a"],VRow:M["a"],VTab:E["a"],VTabs:H["a"]}),r["a"].use(_["a"]);var L=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],R=new _["a"]({mode:"history",base:"/",routes:L}),D=R,G=a("2f62");r["a"].use(G["a"]);var J=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=a("f309");r["a"].use(Q["a"]);var W=new Q["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:D,store:J,vuetify:W,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=index.062c4f89.js.map