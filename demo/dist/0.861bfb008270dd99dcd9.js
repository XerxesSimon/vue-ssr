webpackJsonp([0],{49:function(t,n,e){"use strict";function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json";return s()({url:t,method:"get",params:n,headers:{"Content-Type":e}})}function r(){return a("http://127.0.0.1:5000/test")}function i(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function a(r,i){try{var o=n[r](i),u=o.value}catch(t){return void e(t)}if(!o.done)return Promise.resolve(u).then(function(t){a("next",t)},function(t){a("throw",t)});t(u)}return a("next")})}}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"books container"},[t._v("\n  小书\n  "+t._s(t.data)+"\n")])},u=[],c=e(13),s=e.n(c),d={data:function(){return{data:"1111"}},created:function(){this.b()},mounted:function(){},methods:{init:function(){var t=this;s()({url:"http://127.0.0.1:5000/test",method:"get",data:"",headers:{"Content-Type":"application/json"}}).then(function(n){t.data=n.data}).catch(function(n){t.data=n}),this.data="8888888"},b:function(){function t(){return n.apply(this,arguments)}var n=i(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r();case 2:n=t.sent,this.data=n.data;case 4:case"end":return t.stop()}},t,this)}));return t}(),a:function(){var t=this;this.data="2222",r().then(function(n){t.data=n.data}).catch(function(n){t.data="555"}),this.data="333"}}},f=d,h=e(14),l=Object(h.a)(f,o,u,!1,null,null,null);n.default=l.exports}});