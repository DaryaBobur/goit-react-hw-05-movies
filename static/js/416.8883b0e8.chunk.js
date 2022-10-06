"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[416],{854:function(e,n,t){var r=t(4691),a=t(184);n.Z=function(){return(0,a.jsx)(r.VL,{visible:!0,height:"100",width:"100",color:"black",wrapperStyle:{marginRight:"auto",marginLeft:"auto"}})}},6416:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(5861),a=t(885),c=t(7757),i=t.n(c),u=t(2791),s=t(7689),o=t(6929),p=t(6731),f=t(184),d=function(){var e,n,t=null!==(e=null===(n=(0,s.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(p.OL,{state:{from:t},to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(p.OL,{state:{from:t},to:"reviews",children:"Reviews"})})]})]})},v=t(854),l=function(){var e,n,t=(0,u.useState)(null),c=(0,a.Z)(t,2),p=c[0],l=c[1],h=(0,u.useState)(null),x=(0,a.Z)(h,2),m=x[0],g=x[1],j=(0,u.useState)(!1),w=(0,a.Z)(j,2),b=w[0],k=w[1],y=(0,s.UO)().movieId,_=(0,s.s0)(),Z=null!==(e=null===(n=(0,s.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return k(!0),e.prev=3,e.next=6,(0,o.fh)({movieId:y});case 6:n=e.sent,l(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),g(e.t0);case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);return(0,f.jsxs)(f.Fragment,{children:[p&&(0,f.jsx)("button",{type:"button",onClick:function(){return _(Z)},children:"Go back"}),b&&(0,f.jsx)(v.Z,{}),p&&(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:p.data.title}),(0,f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(p.data.poster_path),alt:""}),(0,f.jsxs)("p",{children:["User score: ",Math.round(10*Number(p.data.vote_average))+"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:p.data.overview}),(0,f.jsx)("h3",{children:"Genres"}),p.data.genres.map((function(e){var n=e.name,t=e.id;return(0,f.jsx)("p",{children:n},t)}))]}),p&&(0,f.jsx)(d,{}),m&&(0,f.jsx)("p",{children:"Please try again later!"}),(0,f.jsx)(u.Suspense,{fallback:(0,f.jsx)(v.Z,{}),children:(0,f.jsx)(s.j3,{})})]})}},6929:function(e,n,t){t.d(n,{Eb:function(){return v},Hu:function(){return l},R:function(){return f},fh:function(){return d},vP:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),i=t(4569),u=t.n(i),s="https://api.themoviedb.org/3",o="f17c8764406c58be1dc553dcf8d1d1db",p=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,i,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,r=void 0===t?"":t,a=n.page,i=void 0===a?1:a,e.next=3,u().get("".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&page=").concat(i,"&include_adult=false&query=").concat(r));case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,e.next=3,u().get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,e.next=3,u().get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,e.next=3,u().get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=416.8883b0e8.chunk.js.map