(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4186)}])},4186:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return c}});var r=i(5893),s=i(7294),n=i(1664),l=i.n(n),c=!0;t.default=function(e){let{trailersData:t}=e;console.log(t);let[i,n]=(0,s.useState)(t),[c,a]=(0,s.useState)(t.slice(0,2)),[h,d]=(0,s.useState)(t.length),[u,o]=(0,s.useState)(""),x=()=>{a(i.slice(0,2))},f=()=>{d(i.length)},j=e=>{d(e.length)},g=(e,t)=>{if(u){let r=i.filter(e=>e.title.toLowerCase().includes(u.toLowerCase()));a(r.slice(t,e+t)),j(r)}else a(i.slice(t,e+t)),f()};(0,s.useEffect)(()=>{(async()=>await f())(),x()},[]);let[_,p]=(0,s.useState)(0);return(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick(e){e.preventDefault(),p(_+1)},children:"+1"}),(0,r.jsx)("div",{children:_}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"searchBar",children:"Search bar"}),(0,r.jsx)("input",{type:"text",id:"searchBar",onChange(e){o(e.target.value),g(2,0)}})]}),(0,r.jsx)("ul",{children:c.map((e,t)=>(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{children:e.title}),(0,r.jsx)("p",{children:e.description}),(0,r.jsx)("img",{src:"http://0.0.0.0:8055/assets/"+e.image}),(0,r.jsx)("iframe",{width:"640",height:"360",src:e.url}),(0,r.jsx)(l(),{href:"/trailer/"+e.id,children:"Voir la page de ce trailer"}),(0,r.jsx)("hr",{})]},t))}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{children:"Page"}),(0,r.jsx)("section",{style:{display:"flex"},children:Array.from({length:Math.ceil(h/2)},(e,t)=>(0,r.jsx)("div",{onClick(){g(2,2*t)},style:{padding:"1rem",background:"grey",marginRight:"1rem"},children:t},t))})]})]})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);