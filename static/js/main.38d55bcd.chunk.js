(this["webpackJsonpconditional-rendering-practice"]=this["webpackJsonpconditional-rendering-practice"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c);var u=a(2),o=a.n(u),l=a(3),i=a(1),m=Object(n.createContext)(),p=({children:e})=>{var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],s=a[1],u=Object(n.useState)("Popular"),p=Object(i.a)(u,2),v=p[0],b=p[1],f=Object(n.useState)([]),d=Object(i.a)(f,2),h=d[0],g=d[1],E=Object(n.useState)(""),j=Object(i.a)(E,2),x=j[0],O=j[1],N=Object(n.useState)(1),S=Object(i.a)(N,2),k=S[0],w=S[1],y=Object(n.useState)([]),M=Object(i.a)(y,2),C=M[0],P=M[1],T=Object(n.useState)(!1),_=Object(i.a)(T,2),A=_[0],U=_[1],H=Object(n.useState)(!0),L=Object(i.a)(H,2),I=L[0],J=L[1],q=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/popular?api_key=cd5b4662e2ece3b664b2ef446e4b6f14&language=en-US&page=3",e.next=3,fetch("https://api.themoviedb.org/3/movie/popular?api_key=cd5b4662e2ece3b664b2ef446e4b6f14&language=en-US&page=3");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,g(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=cd5b4662e2ece3b664b2ef446e4b6f14&language=en-US&page=".concat(k));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,""===x.trim()&&P(a.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==x.trim()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("https://api.themoviedb.org/3/search/movie?api_key=cd5b4662e2ece3b664b2ef446e4b6f14&query=".concat(x,"&language=en-US&page=").concat(k));case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,P(n.results),J(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(()=>{q()},[]),Object(n.useEffect)(()=>{""===x.trim()&&J(!0),z()},[x,k]),Object(n.useEffect)(()=>{var e=setTimeout(()=>{U(!1)},1300);return()=>clearTimeout(e)},[C,k]),r.a.createElement(m.Provider,{value:{hiddenMenu:c,setHiddenMenu:s,activeMenu:v,setActiveMenu:b,movies:h,search:x,setSearch:O,currentPage:k,setCurrentPage:w,series:C,setSeries:P,getPopularMovie:q,searchMovies:z,handleChange:B,isLoading:A,setIsLoading:U,showPage:I,setShowPage:J,newPage:e=>{"next"===e?(w(e=>e+1),U(!0)):"previous"===e&&1!==k&&w(e=>e-1)}}},e)};var v={fontSize:"22px",fontWeight:"1000",color:"#cb6ad2",userSelect:"none"},b=function(){return r.a.createElement("h2",{style:v},"Movie App")};var f=function(e){var t=Object(n.useContext)(m),a=t.setHiddenMenu,c=t.activeMenu,s=t.setActiveMenu;return r.a.createElement("button",{onClick:()=>{s(e.btnText),a(!0)},className:"navlink",style:{color:c===e.btnText?"#f9a5ff":"#ffff"}},e.btnText)};var d=function(){var e=Object(n.useContext)(m).hiddenMenu;return r.a.createElement("div",{className:(e?"hidden":"")+" Nav-menu"},r.a.createElement(f,{btnText:"Popular"}),r.a.createElement(f,{btnText:"All Movies"}))};var h=function(){var e=Object(n.useContext)(m),t=e.search,a=e.setSearch,c=e.handleChange,s=e.activeMenu;return r.a.createElement("form",{onSubmit:c,className:"form-style"},"Popular"!==s&&r.a.createElement("input",{value:t,onChange:e=>a(e.target.value),type:"text",placeholder:"search for movies........"}))};var g=function(){var e=Object(n.useContext)(m),t=e.hiddenMenu,a=e.setHiddenMenu;return r.a.createElement("nav",{className:"nav-style"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(b,null),r.a.createElement(d,null)),r.a.createElement(h,null),r.a.createElement("i",{onClick:()=>a(!t),id:"burgerMenu",className:t?"fas fa-bars":"fas fa-times"})))};var E=function(){var e=Object(n.useContext)(m).movies;return r.a.createElement("div",{className:"popular-movies"},r.a.createElement("div",{className:"popular-box"},e&&e.map((e,t)=>r.a.createElement("img",{key:t,src:"https://image.tmdb.org/t/p/w400".concat(e.poster_path),alt:""}))))};var j=function(){return r.a.createElement("div",{className:"loader"})};var x=function(){var e=Object(n.useContext)(m),t=e.series,a=e.isLoading;return r.a.createElement("div",{className:"movies"},r.a.createElement("div",{className:"popular-box"},t&&0===t.length&&r.a.createElement("h1",{className:"error"},"Page not found"),a?r.a.createElement(j,null):t&&t.map((e,t)=>r.a.createElement("img",{key:t,src:"https://image.tmdb.org/t/p/w400".concat(e.poster_path),alt:""}))))};var O=function(){var e=Object(n.useContext)(m),t=e.newPage,a=e.currentPage,c=e.showPage;return r.a.createElement("div",{className:"page"},c&&r.a.createElement("div",{className:"page-container"},r.a.createElement("button",{style:{cursor:1!==a?"pointer":"not-allowed",background:1!==a?"#32de57":"#303847"},onClick:()=>t("previous")}," Prev page "),r.a.createElement("button",{onClick:()=>t("next")}," Next page ")))};var N=function(){var e=Object(n.useContext)(m).activeMenu;return r.a.createElement("div",{className:"Output"},"Popular"===e&&r.a.createElement("div",{className:"popular-box"},r.a.createElement(E,null)),"All Movies"===e&&r.a.createElement("div",{className:"popular-box"},r.a.createElement(x,null),r.a.createElement(O,null)))},S={width:"100%",heigth:"100%"};var k=function(){return r.a.createElement("section",{style:S,className:"hero"},r.a.createElement(g,null),r.a.createElement(N,null))};var w=function(){return r.a.createElement(p,null,r.a.createElement(k,null))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.38d55bcd.chunk.js.map