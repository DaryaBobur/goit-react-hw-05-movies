"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[355],{430:function(n,t,e){e.d(t,{Z:function(){return o}});var r,a=e(8402),c=e(168),u=e(6444).ZP.div(r||(r=(0,c.Z)(["\n    display: flex;\n    justify-content: center;\n"]))),i=e(184),o=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.VL,{visible:!0,height:"100",width:"100",color:"black"})})}},5355:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c=e(5861),u=e(885),i=e(7757),o=e.n(i),s=e(7689),p=e(2791),f=e(6929),v=e(430),d=e(168),l=e(6444),h=l.ZP.ul(r||(r=(0,d.Z)(["\n    padding-top: 20px;\n    padding-bottom: 30px;\n\n    li {\n        margin-bottom: 15px;\n    }\n\n    p {\n        :not(:last-child) {\n            margin-bottom: 15px;\n        } \n    }\n"]))),x=e(184),m=function(n){var t=n.review;return(0,x.jsx)(h,{children:t.data.results.map((function(n){var t=n.author,e=n.content;return(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:(0,x.jsxs)("b",{children:["Author: ",t," "]})}),(0,x.jsx)("p",{children:e})]},e)}))})},g=l.ZP.p(a||(a=(0,d.Z)(["\n    margin-top: 20px;\n    margin-bottom: 30px;\n    font-size: 18px;\n    font-weight: 500;\n"]))),w=function(){var n=(0,p.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)(null),i=(0,u.Z)(a,2),d=i[0],l=i[1],h=(0,p.useState)(!1),w=(0,u.Z)(h,2),b=w[0],k=w[1],y=(0,s.UO)().movieId;return(0,p.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y){n.next=2;break}return n.abrupt("return");case 2:return k(!0),n.prev=3,n.next=6,(0,f.Hu)({movieId:y});case 6:t=n.sent,r(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),l(n.t0);case 13:return n.prev=13,k(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[3,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[y]),(0,x.jsxs)(x.Fragment,{children:[e&&0===e.data.total_pages&&(0,x.jsx)(g,{children:"We don't have any reviews for this movie!"}),e&&(0,x.jsx)(m,{review:e}),b&&(0,x.jsx)(v.Z,{}),d&&(0,x.jsx)("p",{children:"Please try again later!"})]})}},6929:function(n,t,e){e.d(t,{Eb:function(){return d},Hu:function(){return l},R:function(){return f},fh:function(){return v},vP:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),o="https://api.themoviedb.org/3",s="f17c8764406c58be1dc553dcf8d1d1db",p=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a,u,p;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query,r=void 0===e?"":e,a=t.page,u=void 0===a?1:a,n.next=3,i().get("".concat(o,"/search/movie?api_key=").concat(s,"&language=en-US&page=").concat(u,"&include_adult=false&query=").concat(r));case 3:return p=n.sent,n.abrupt("return",p);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,i().get("".concat(o,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,i().get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,i().get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=355.f33e8f06.chunk.js.map