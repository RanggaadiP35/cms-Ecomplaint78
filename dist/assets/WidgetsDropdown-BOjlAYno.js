import{r as m,_ as M,R as i,f as E,B as F,E as T,g as B,P as a,W,o as D,e as o,j as e,d as S,i as n,X as y,Y as g,Z as b,$ as r}from"./index-8shILgU5.js";import{a as j,C as k,b as O}from"./index.esm-QOxS9LXJ.js";import{c as H,a as P,b as I}from"./cib-twitter-00_H7eLt.js";import{a as K,b as J,d as C,e as R}from"./cil-people-BKgPdOQQ.js";var c=m.forwardRef(function(s,l){var t,w=s.action,N=s.chart,p=s.className,u=s.color,h=s.title,x=s.value,f=M(s,["action","chart","className","color","title","value"]);return i.createElement(E,F({className:T((t={},t["bg-".concat(u)]=u,t["text-white"]=u,t),p)},f,{ref:l}),i.createElement(B,{className:"pb-0 d-flex justify-content-between align-items-start"},i.createElement("div",null,x&&i.createElement("div",{className:"fs-4 fw-semibold"},x),h&&i.createElement("div",null,h)),w),N)});c.propTypes={action:a.node,chart:a.oneOfType([a.string,a.node]),className:a.string,color:W,title:a.oneOfType([a.string,a.node]),value:a.oneOfType([a.string,a.node,a.number])};c.displayName="CWidgetStatsA";var d=m.forwardRef(function(s,l){var t,w=s.className,N=s.chart,p=s.color,u=s.icon,h=s.values,x=M(s,["className","chart","color","icon","values"]);return i.createElement(E,F({className:w},x,{ref:l}),i.createElement(D,{className:T("position-relative d-flex justify-content-center align-items-center",(t={},t["bg-".concat(p)]=p,t))},u,N),i.createElement(B,{className:"row text-center"},h&&h.map(function(f,A){return i.createElement(i.Fragment,{key:A},A%2!==0&&i.createElement("div",{className:"vr"}),i.createElement(o,null,i.createElement("div",{className:"fs-5 fw-semibold"},f.value),i.createElement("div",{className:"text-uppercase text-body-secondary small"},f.title)))})))});d.propTypes={chart:a.oneOfType([a.string,a.node]),className:a.string,color:W,icon:a.oneOfType([a.string,a.node]),values:a.arrayOf(a.any)};d.displayName="CWidgetStatsD";const L=s=>{const l={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}};return e.jsxs(S,{className:s.className,xs:{gutter:4},children:[e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(d,{...s.withCharts&&{chart:e.jsx(j,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[65,59,84,84,51,55,40],fill:!0}]},options:l})},icon:e.jsx(n,{icon:H,height:52,className:"my-4 text-white"}),values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],style:{"--cui-card-cap-bg":"#3b5998"}})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(d,{...s.withCharts&&{chart:e.jsx(j,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[1,13,9,17,34,41,38],fill:!0}]},options:l})},icon:e.jsx(n,{icon:P,height:52,className:"my-4 text-white"}),values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],style:{"--cui-card-cap-bg":"#00aced"}})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(d,{...s.withCharts&&{chart:e.jsx(j,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[78,81,80,45,34,12,40],fill:!0}]},options:l})},icon:e.jsx(n,{icon:I,height:52,className:"my-4 text-white"}),values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],style:{"--cui-card-cap-bg":"#4875b4"}})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(d,{color:"warning",...s.withCharts&&{chart:e.jsx(j,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[35,23,56,22,97,23,64],fill:!0}]},options:l})},icon:e.jsx(n,{icon:K,height:52,className:"my-4 text-white"}),values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}]})})]})};L.propTypes={className:a.string,withCharts:a.bool};var v=function(s,l){if(!(typeof window>"u")&&!(typeof document>"u")){var t=document.body;return window.getComputedStyle(t,null).getPropertyValue(s).replace(/^\s/,"")}};const $=s=>{const l=m.useRef(null),t=m.useRef(null);return m.useEffect(()=>{document.documentElement.addEventListener("ColorSchemeChange",()=>{l.current&&setTimeout(()=>{l.current.data.datasets[0].pointBackgroundColor=v("--cui-primary"),l.current.update()}),t.current&&setTimeout(()=>{t.current.data.datasets[0].pointBackgroundColor=v("--cui-info"),t.current.update()})})},[l,t]),e.jsxs(S,{className:s.className,xs:{gutter:4},children:[e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(c,{color:"primary",value:e.jsxs(e.Fragment,{children:["26K"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(-12.4% ",e.jsx(n,{icon:J}),")"]})]}),title:"Users",action:e.jsxs(y,{alignment:"end",children:[e.jsx(g,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(n,{icon:C})}),e.jsxs(b,{children:[e.jsx(r,{children:"Action"}),e.jsx(r,{children:"Another action"}),e.jsx(r,{children:"Something else here..."}),e.jsx(r,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(k,{ref:l,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:v("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(c,{color:"info",value:e.jsxs(e.Fragment,{children:["$6.200"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(40.9% ",e.jsx(n,{icon:R}),")"]})]}),title:"Income",action:e.jsxs(y,{alignment:"end",children:[e.jsx(g,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(n,{icon:C})}),e.jsxs(b,{children:[e.jsx(r,{children:"Action"}),e.jsx(r,{children:"Another action"}),e.jsx(r,{children:"Something else here..."}),e.jsx(r,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(k,{ref:t,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:v("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(c,{color:"warning",value:e.jsxs(e.Fragment,{children:["2.49%"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(84.7% ",e.jsx(n,{icon:R}),")"]})]}),title:"Conversion Rate",action:e.jsxs(y,{alignment:"end",children:[e.jsx(g,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(n,{icon:C})}),e.jsxs(b,{children:[e.jsx(r,{children:"Action"}),e.jsx(r,{children:"Another action"}),e.jsx(r,{children:"Something else here..."}),e.jsx(r,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(k,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(c,{color:"danger",value:e.jsxs(e.Fragment,{children:["44K"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(-23.6% ",e.jsx(n,{icon:J}),")"]})]}),title:"Sessions",action:e.jsxs(y,{alignment:"end",children:[e.jsx(g,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(n,{icon:C})}),e.jsxs(b,{children:[e.jsx(r,{children:"Action"}),e.jsx(r,{children:"Another action"}),e.jsx(r,{children:"Something else here..."}),e.jsx(r,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(O,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{border:{display:!1},grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})})]})};$.propTypes={className:a.string,withCharts:a.bool};export{$ as W,L as a,v as g};
