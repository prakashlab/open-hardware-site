(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8GQP":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return E}));var r=n("q1tI"),o=n.n(r),i=n("Jg8R"),a=n("Wbzz"),l=n("zCiS"),c=n("eXLw"),m=n("zLVn"),u=n("KQm4"),s=n("t+gz"),p=n("YwZP"),f=function e(t){var n=t.items,o=t.observe,a=t.onClick,c=Object(m.a)(t,["items","observe","onClick"]),s=Object(p.useLocation)().pathname,f=r.useState(!1),d=f[0],b=f[1],v=[];return o&&(v=function e(t){var n=[];return t.forEach((function(t){var r=t.url,o=t.items;if(r){var i=r.split("#")[1];i&&n.push(i)}o&&n.push.apply(n,Object(u.a)(e(o)))})),n}(n)),r.useEffect((function(){if("undefined"!=typeof window&&"IntersectionObserver"in window){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&b(e.target.id)}))}),{rootMargin:"0% 0% -80% 0%"});return v.forEach((function(t){var n=document.getElementById(t);n&&e.observe(n)})),function(){v.forEach((function(t){var n=document.getElementById(t);n&&e.unobserve(n)}))}}}),[v]),r.createElement(l.Ul,Object.assign({listStyle:"none",p:"0"},c),n.map((function(t,n){var o=t.value,c=t.url,m=t.type,u=t.items,p=c===s,f=d===c.split("#")[1];return r.createElement(l.Li,{key:n,mb:"8"},"link"===m&&r.createElement(i.e,{href:c,color:f?"primary":"text",fontWeight:"semibold",onClick:function(){return a()},activeStyle:{color:"primary"}},o),u&&r.createElement(e,{items:u,mt:"2",listStyle:"none",p:"0",observe:p,onClick:a,sx:{li:{mb:1,a:{fontWeight:"normal",fontSize:"md"}}}}))})))},d=function(e){var t=e.onClick,n=Object(m.a)(e,["onClick"]),o=Object(s.b)("gallery")[0];return o?r.createElement(l.Nav,n,r.createElement(l.Ul,{d:"grid",listStyle:"none",p:"0",row:"repeat("+o.items.length+", auto)",gap:"2",m:"0"},o.items.map((function(e,n){var o=e.value,a=e.url,c=e.items;return r.createElement(l.Li,{key:n},a?r.createElement(i.e,{href:a,w:"100%",d:"flex",justifyContent:"center",fontWeight:"semibold",color:"text",activeStyle:{color:"primary"}},o):r.createElement(l.H4,{my:"4",fontSize:"xl",borderTopWidth:0!==n&&"1px",pt:0!==n&&4},o),c&&r.createElement(f,{items:c,onClick:t}))})))):null},b={Callout:function(e){var t=e.level,n=void 0===t?"accent":t,o=Object(m.a)(e,["level"]);return r.createElement(l.Div,Object.assign({bg:"muted",rounded:"md",borderTop:"4",borderColor:n,p:"4"},o))}},v={heading:{scrollMarginTop:["130px","40px","40px","50px"]},h2:{borderTopWidth:"1px",pt:6,mt:6,fontSize:"4xl",a:{color:"text",textDecoration:"none"}},h3:{fontSize:"3xl"},styles:{inlineCode:{bg:"muted"}}},x=function(e){var t=e.title,n=e.excerpt,o=e.body,m=e.previousDoc,u=e.nextDoc,s=r.useState(!1),p=s[0],f=s[1];return r.createElement(i.i,{theme:v},r.createElement(i.f,{components:b},r.createElement(l.Container,{pb:"8"},r.createElement(l.Button,{d:["inline-flex","none"],w:"100%",justifyContent:"space-between",boxShadow:"lg",border:"0",position:"fixed",top:"55px",rounded:"none",left:"0",right:"0",pt:"17px",px:"4",bg:"background",zIndex:"200",onClick:function(){return f(!p)}},"Menu"," ",r.createElement(i.c,{name:"chevron-down",transform:p?"rotate(180deg)":"none",transition:"all .15s ease-in",mr:"2"})),r.createElement(l.Grid,{col:"1|180px 1fr|180px 1fr|250px 1fr",gap:"null|6|6|20",alignItems:"flex-start"},r.createElement(l.Div,{position:["fixed","sticky"],top:[p?"116px":"-100vh",0],transition:"all .15s ease-in",left:"0",width:["100%","auto"],h:"100vh",borderRightWidth:[0,1],overflow:"scroll",bg:"background",zIndex:"90",pl:[4,0],pt:[4,8],pb:"32"},r.createElement(d,{onClick:function(){return f(!1)}})),r.createElement(l.Div,{mt:[10,0],pt:"8"},r.createElement(c.a,{src:"docs-header",my:"6"}),t&&r.createElement(l.H1,{mt:"0",mb:"2",fontWeight:"extrabold"},t),n&&r.createElement(l.P,{fontSize:"xl|2xl",mt:"2",mb:"0"},n),o&&r.createElement(i.g,null,o),r.createElement(l.Flexbox,{justifyContent:"space-between",mt:"10"},m&&r.createElement(l.Button,{as:a.Link,variant:"link",href:Object(a.withPrefix)(m.slug)},r.createElement(i.c,{name:"arrow-left",mr:"2"}),m.title),u&&r.createElement(l.Button,{as:a.Link,variant:"primary",ml:"auto",href:Object(a.withPrefix)(u.slug)},u.title,r.createElement(i.c,{name:"arrow-right",ml:"2"}))))))))},E=(t.default=function(e){var t=e.data;return o.a.createElement(i.d,{pathname:t.doc.slug},o.a.createElement(x,Object.assign({},t.doc,{previousDoc:t.prev,nextDoc:t.next})))},"2494776967")}}]);
//# sourceMappingURL=component---node-modules-reflexjs-gatsby-theme-doc-src-doc-template-js-3d32b1fbb3170113f0be.js.map