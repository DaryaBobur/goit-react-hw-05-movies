"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[174],{8169:function(n,e,t){t.d(e,{Z:function(){return v}});var r,i,a,o,c=t(168),s=t(6731),u=t(6444),p=(0,u.ZP)(s.OL)(r||(r=(0,c.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  text-decoration: none;\n  color: #2a2a2a;\n  padding-bottom: 15px;\n  padding-top: 15px;\n\n  &.active {\n      color: red;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: pink;\n  }\n"]))),d=u.ZP.ul(i||(i=(0,c.Z)(["\n  display: flex;\n  padding-right: 20px;\n"]))),l=u.ZP.li(a||(a=(0,c.Z)(["\n  display: flex;\n\n  :not(:last-child) {\n    margin-right: 15px;\n  }\n"]))),x=u.ZP.header(o||(o=(0,c.Z)(["\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n"]))),f=t(184),h=[{href:"/",text:"Home"},{href:"/movies",text:"Movies"}],v=function(){return(0,f.jsx)(x,{children:(0,f.jsx)(d,{children:h.map((function(n){var e=n.href,t=n.text;return e.includes("/movies")?(0,f.jsx)(l,{children:(0,f.jsx)(p,{to:e,children:t})},e):(0,f.jsx)(l,{children:(0,f.jsx)(p,{to:e,end:!0,children:t})},e)}))})})}},430:function(n,e,t){t.d(e,{Z:function(){return s}});var r,i=t(8402),a=t(168),o=t(6444).ZP.div(r||(r=(0,a.Z)(["\n    display: flex;\n    justify-content: center;\n"]))),c=t(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(i.VL,{visible:!0,height:"100",width:"100",color:"black"})})}},7174:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,a,o,c,s,u,p=t(5861),d=t(885),l=t(7757),x=t.n(l),f=t(2791),h=t(7689),v=t(6929),m=t(6731),g=t(168),b=t(6444),j=b.ZP.div(r||(r=(0,g.Z)(["\n    padding-top: 30px;\n    padding-bottom: 10px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n\n    h2 {\n        margin-bottom: 15px;\n        font-size: 18px;\n    }\n"]))),Z=t(184),w=function(){var n,e,t=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,Z.jsxs)(j,{children:[(0,Z.jsx)("h2",{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(m.OL,{state:{from:t},to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(m.OL,{state:{from:t},to:"reviews",children:"Reviews"})})]})]})},k=t(430),y=t(8169),_=b.ZP.div(i||(i=(0,g.Z)(["\n    display: flex;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    padding-bottom: 10px;\n\n    p {\n        margin-bottom: 15px;\n    }\n\n    h3 {\n        margin-bottom: 10px;\n    }\n"]))),P=b.ZP.div(a||(a=(0,g.Z)(["\n    display: block;\n    margin-top: 30px;\n    padding-left: 20px;\n"]))),S=b.ZP.h2(o||(o=(0,g.Z)(["\n    font-size: 24px;\n    margin-bottom: 15px;\n"]))),z=b.ZP.img(c||(c=(0,g.Z)(["\n    width: 250px;\n    height: auto;\n    display: block;\n"]))),C=b.ZP.div(s||(s=(0,g.Z)(["\n    display: flex;\n\n    p {\n        :not(:last-child) {\n            margin-right: 10px;\n        }\n    }\n\n"]))),H=function(n){var e=n.movie.data,t=e.title,r=e.poster_path,i=e.vote_average,a=e.overview,o=e.genres,c=e.release_date;return(0,Z.jsxs)(_,{children:[(0,Z.jsx)(z,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(r),alt:t}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(S,{children:[t," (",c.slice(0,4),")"]}),(0,Z.jsxs)("p",{children:["User score: ",Math.round(10*Number(i))+"%"]}),(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)("p",{children:a}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)(C,{children:o.map((function(n){var e=n.name,t=n.id;return(0,Z.jsx)("p",{children:e},t)}))})]})]})},I=b.ZP.button(u||(u=(0,g.Z)(["\n    display: flex;\n    align-items: center;\n    min-width: 30px;\n    border: 0;\n    padding: 5px 5px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n   \n    border-radius: 4px;\n    color: #2a2a2a;\n    \n    font-weight: 700;\n    font-size: 12px;\n    line-height: 1.88;\n    letter-spacing: 0.06em;\n    background-color: #e0e0e0;\n    cursor: pointer;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover, :focus {\n        background-color: #757575;\n        color: #ffffff;\n    }\n"]))),O=t(8617),U=function(){var n,e,t=(0,f.useState)(null),r=(0,d.Z)(t,2),i=r[0],a=r[1],o=(0,f.useState)(null),c=(0,d.Z)(o,2),s=c[0],u=c[1],l=(0,f.useState)(!1),m=(0,d.Z)(l,2),g=m[0],b=m[1],j=(0,h.UO)().movieId,_=(0,h.s0)(),P=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";(0,f.useEffect)((function(){var n=function(){var n=(0,p.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(j){n.next=2;break}return n.abrupt("return");case 2:return b(!0),n.prev=3,n.next=6,(0,v.fh)({movieId:j});case 6:e=n.sent,a(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),u(n.t0);case 13:return n.prev=13,b(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[3,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[j]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(y.Z,{}),i&&(0,Z.jsxs)(I,{type:"button",onClick:function(){return _(P)},children:[(0,Z.jsx)(O.C4H,{fontSize:18}),"Go back"]}),g&&(0,Z.jsx)(k.Z,{}),i&&(0,Z.jsx)(H,{movie:i}),i&&(0,Z.jsx)(w,{}),s&&(0,Z.jsx)("p",{children:"Please try again later!"}),(0,Z.jsx)(f.Suspense,{fallback:(0,Z.jsx)(k.Z,{}),children:(0,Z.jsx)(h.j3,{})})]})}},6929:function(n,e,t){t.d(e,{Eb:function(){return x},Hu:function(){return f},R:function(){return d},fh:function(){return l},vP:function(){return p}});var r=t(5861),i=t(7757),a=t.n(i),o=t(4569),c=t.n(o),s="https://api.themoviedb.org/3",u="f17c8764406c58be1dc553dcf8d1d1db",p=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(s,"/trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i,o,p;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,r=void 0===t?"":t,i=e.page,o=void 0===i?1:i,n.next=3,c().get("".concat(s,"/search/movie?api_key=").concat(u,"&language=en-US&page=").concat(o,"&include_adult=false&query=").concat(r));case 3:return p=n.sent,n.abrupt("return",p);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.movieId,n.next=3,c().get("".concat(s,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.movieId,n.next=3,c().get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.movieId,n.next=3,c().get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=174.f02ee2f9.chunk.js.map