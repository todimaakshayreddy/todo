(this.webpackJsonpakshaytodo=this.webpackJsonpakshaytodo||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(8),r=n.n(o),a=(n(13),n(14),n(7)),s=n(6),l=n(3),u=n(0);var d=function(e){var t=e.addlist,n=e.list,i=Object(c.useState)(""),o=Object(l.a)(i,2),r=o[0],a=o[1];return Object(u.jsx)("div",{className:"formDiv",children:Object(u.jsxs)("form",{onSubmit:function(e){var c;e.preventDefault(),c=n.length>0?n[n.length-1].id+1:0,t({id:c,title:r,done:!1}),a("")},children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter Task",required:!0,value:r,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)("span",{children:"+"})})]})})},j=function(e){return Object(u.jsxs)("div",{className:"list",children:[Object(u.jsx)("input",{type:"checkbox",checked:e.e.done,onChange:function(){return function(){if(e.e.done)return null;e.handleChange(e.e.id)}()}}),Object(u.jsx)("span",{style:e.e.done?{textDecoration:"line-through"}:null,children:e.e.title})]})};var h=function(e){return Object(u.jsxs)("div",{className:"list",children:[Object(u.jsx)("input",{type:"checkbox",checked:!0,onChange:function(){return null}}),Object(u.jsx)("span",{style:e.e.done?{textDecoration:"line-through"}:null,children:e.e.title})]})},f=function(){var e,t;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos")),t=null===localStorage.getItem("list")?[]:JSON.parse(localStorage.getItem("list"));var n=function(e){e.forEach((function(e,t){e.id=t+1}))},i=Object(c.useState)(t),o=Object(l.a)(i,2),r=o[0],f=o[1],b=Object(c.useState)(e),O=Object(l.a)(b,2),g=O[0],p=O[1];Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(r))}),[r]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(g))}),[g]);var x=function(e){var t=r.filter((function(t){return e!==t.id}));f(t)},m=function(e){var t=r.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{done:!t.done}):t}));!function(e){var t=e.filter((function(e){return!0===e.done})),c=[].concat(Object(s.a)(g),[t[0]]);n(c),p(c)}(t),t=t.filter((function(e){return!0!==e.done})),f(t)};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h4",{children:"To Do App"}),Object(u.jsx)(d,{addlist:function(e){var t=[].concat(Object(s.a)(r),[e]);n(t),f(t)},list:r}),r.length>0?r.map((function(e){return Object(u.jsx)(j,{e:e,remove:x,handleChange:m},e.id)})):Object(u.jsx)("p",{children:"Add Task's"}),Object(u.jsx)("hr",{className:"hr"}),g.length>0?g.map((function(e){return Object(u.jsx)(h,{e:e},e.id)})):Object(u.jsx)("p",{children:"All Task's Done"}),g.length>0?Object(u.jsx)("span",{className:"comp",onClick:function(){p("")},children:"Clear Completed"}):""]})};var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(f,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.22ffbc01.chunk.js.map