(function(t){function e(e){for(var n,i,c=e[0],u=e[1],s=e[2],l=0,p=[];l<c.length;l++)i=c[l],o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var u=a[i];0!==o[u]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},o={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"83e3703d"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=n);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t),r=function(e){u.onerror=u.onload=null,clearTimeout(s);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}o[t]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),o=a.n(n);o.a},1356:function(t,e,a){},"295a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forecast"},[a("v-expansion-panel",[a("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[a("div",[t._v("Weather")])]},proxy:!0}])},[a("v-card",[a("v-expansion-panel",{attrs:{expand:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(5,function(e,n){return a("v-expansion-panel-content",{key:n,scopedSlots:t._u([{key:"header",fn:function(){return[a("div",[t._v("Today")])]},proxy:!0}],null,!0)},[a("v-card",[a("v-card-text",[t._v("Lorem ipsum dolor sit amet, consec'tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])],1)],1)}),1)],1)],1)],1)],1)},o=[],r=a("2877"),i=a("6544"),c=a.n(i),u=a("b0af"),s=a("99d9"),l=a("cd55"),d=a("49e2"),p={},f=Object(r["a"])(p,n,o,!1,null,null,null);e["default"]=f.exports;c()(f,{VCard:u["a"],VCardText:s["a"],VExpansionPanel:l["a"],VExpansionPanelContent:d["a"]})},"4e69":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("bb71");a("da64");n["default"].use(o["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" |\n  ")],1),a("router-view"),a("v-card",{attrs:{color:"grey lighten-4",flat:"",height:"100%",tile:""}},[a("v-toolbar",{attrs:{dense:""}},[a("v-toolbar-side-icon"),a("v-toolbar-title",[t._v("Weather Noroff")]),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n        "),a("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v("|\n        "),a("router-link",{attrs:{to:"/forecast"}},[t._v("Forecast")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("search")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("favorite")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("more_vert")])],1)],1),a("router-view")],1)],1)},i=[],c=(a("034f"),a("2877")),u=a("6544"),s=a.n(u),l=a("8336"),d=a("b0af"),p=a("132d"),f=a("9910"),m=a("71d9"),v=a("706c"),h=a("2a7f"),b={},y=Object(c["a"])(b,r,i,!1,null,null,null),g=y.exports;s()(y,{VBtn:l["a"],VCard:d["a"],VIcon:p["a"],VSpacer:f["a"],VToolbar:m["a"],VToolbarSideIcon:v["a"],VToolbarTitle:h["a"]});var _=a("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("LandingPage",{attrs:{msg:"Welcome to Your Vue.js App"}}),n("leaflet",{staticClass:"center",attrs:{towns:{name:"Trondheim",lat:63.42,lng:10.39,temperature:10}}})],1)},k=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello middle"},[a("h1",[t._v(t._s(t.msg))]),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),a("div",{staticClass:"hello"},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-form",{ref:"form"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-text-field",{staticClass:"centered-input text--darken-3 mt-3",attrs:{label:"Location Name",placeholder:"location"},model:{value:t.userInput,callback:function(e){t.userInput=e},expression:"userInput"}}),a("v-btn",{on:{click:t.searchLocation}},[t._v("Search")])],1)],1)],1),a("Forecast")],1)])},T=[],j=a("295a"),P=a("bc3a"),S=a.n(P),A={name:"LandingPage",components:{Forecast:j["default"]},data:function(){return{name:"forecast",APIKEY:"De4gSQukjG9OkTDNmm2kFMq8725A5yo2",forecast:null,temperatureArray:null,todayArray:null,current:null,locationSearch:null,userInput:"",key:254946,localizedName:"Oslo",latitude:"",longtitude:""}},methods:{fetchData:function(){var t=this;S.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+this.key+".json?apikey="+this.APIKEY+"&metric=true").then(function(e){t.forecast=e.data.DailyForecasts;var a=t.forecast.map(function(t){return{date:t.Date,maxTemperature:t.Temperature.Maximum.Value,minTemperature:t.Temperature.Minimum.Value,iconNight:t.Day.IconPhrase,iconDay:t.Night.IconPhrase}});t.temperatureArray=a})},fetchCurrent:function(){var t=this;S.a.get("http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/"+this.key+".json?apikey="+this.APIKEY+"&metric=true&details=true").then(function(e){t.current=e.data[0].Temperature.Value})},searchLocation:function(){var t=this;S.a.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+this.APIKEY+"&q="+this.userInput).then(function(e){t.locationSearch=e,t.key=t.locationSearch.data[0].Key,t.localizedName=t.locationSearch.data[0].LocalizedName,t.latitude=t.locationSearch.data[0].GeoPosition.Latitude,t.longtitude=t.locationSearch.data[0].GeoPosition.Longtitude,t.fetchData(),t.fetchCurrent()}).catch(function(t){console.log(t)})}}},I=A,V=(a("7cd4"),a("4bd4")),O=a("a722"),L=a("2677"),C=Object(c["a"])(I,w,T,!1,null,"3a98e817",null),E=C.exports;s()(C,{VBtn:l["a"],VForm:V["a"],VLayout:O["a"],VTextField:L["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("link",{attrs:{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.4.0/dist/leaflet.css",integrity:"sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==",crossorigin:""}}),t._m(0),a("div",{attrs:{id:"mapid"}}),a("button",{on:{click:t.changeLocation}},[t._v(" New York")])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(" THIS IS TEST ")])])}],D=a("e11e"),Y=a.n(D),q={name:"leaf",props:{towns:Object},data:function(){return{mymap:null}},mounted:function(){this.initMap()},methods:{initMap:function(){this.mymap=Y.a.map("mapid").setView([this.towns.lat,this.towns.lng],10);var t,e=Y.a.marker([this.towns.lat,this.towns.lng]).addTo(this.mymap);e.bindPopup("Noroff AS").openPopup(),this.mymap.on("click",function(e){console.log(e.latlng),null!=t&&t.remove(),t=Y.a.marker(e.latlng),t.addTo(this.mymap).bindPopup().openPopup()}),this.tileLayer=Y.a.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:"pk.eyJ1Ijoid29raW5nIiwiYSI6ImNqdHByejVjcjA3Nm80ZHIwZTgydDA0aWYifQ.A7Nu-j7baTtMJnjPzrTlNA"}).addTo(this.mymap)},changeLocation:function(){this.towns.lat=40.779,this.towns.lng=-73.96,this.mymap.remove(),this.initMap()}}},F=q,W=(a("f6e3"),Object(c["a"])(F,N,M,!1,null,null,null)),$=W.exports,H={name:"home",data:function(){return{lat:59.93,lng:10.75}},components:{LandingPage:E,Forecast:j["default"],leaflet:$}},K=H,Q=(a("cccb"),Object(c["a"])(K,x,k,!1,null,null,null)),z=Q.exports;n["default"].use(_["a"]);var B=new _["a"]({routes:[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/forecast",name:"forecast",component:function(){return a.e("about").then(a.bind(null,"295a"))}}]}),J=a("2f62");n["default"].use(J["a"]);var Z=new J["a"].Store({state:{},mutations:{},actions:{}}),G=a("ce5b"),R=a.n(G);a("bf40");n["default"].use(R.a),n["default"].config.productionTip=!1,new n["default"]({router:B,store:Z,render:function(t){return t(g)}}).$mount("#app")},"7cd4":function(t,e,a){"use strict";var n=a("9c59"),o=a.n(n);o.a},"9c59":function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("4e69"),o=a.n(n);o.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},e5d4:function(t,e,a){},f6e3:function(t,e,a){"use strict";var n=a("e5d4"),o=a.n(n);o.a}});
//# sourceMappingURL=app.5073bdfe.js.map