import{r as p,_ as f,R as i,a as g,c as x,P as o,u as R,j as e,o as D,m as z,n as S}from"./index-DQvjgStD.js";import{C as l}from"./index.es-yNj0I_EF.js";import{f as m,g as N}from"./DocsExample-6Vxn7Boi.js";import{b as M,a as A,S as y}from"./sweetalert2.all-DTvVwEbb.js";import{C as T,a as E,b as L,c as u}from"./CDropdownToggle-crj6rjNT.js";import{C as O}from"./CAvatar-DpfiiHi1.js";import{c as I}from"./cil-lock-locked-DmxpJbVL.js";import{C as P}from"./CContainer-B4pb1IMo.js";import{c as U,a as b,b as w}from"./cil-sun-CiqFXe3L.js";import{c as k}from"./cil-moon-BFUMwZPK.js";var j=p.forwardRef(function(s,r){var a=s.children,t=s.as,n=t===void 0?"h6":t,c=s.className,d=f(s,["children","as","className"]);return i.createElement(n,g({className:x("dropdown-header",c)},d,{ref:r}),a)});j.propTypes={as:o.elementType,children:o.node,className:o.string};j.displayName="CDropdownHeader";var v=p.forwardRef(function(s,r){var a,t=s.children,n=s.className,c=s.container,d=s.position,H=f(s,["children","className","container","position"]);return i.createElement("div",g({className:x("header",(a={},a["header-".concat(d)]=d,a),n)},H,{ref:r}),c?i.createElement("div",{className:typeof c=="string"?"container-".concat(c):"container"},t):i.createElement(i.Fragment,null,t))});v.propTypes={children:o.node,className:o.string,container:o.oneOfType([o.bool,o.oneOf(["sm","md","lg","xl","xxl","fluid"])]),position:o.oneOf(["fixed","sticky"])};v.displayName="CHeader";var h=p.forwardRef(function(s,r){var a=s.children,t=s.as,n=t===void 0?"ul":t,c=s.className,d=f(s,["children","as","className"]);return i.createElement(n,g({className:x("header-nav",c),role:"navigation"},d,{ref:r}),a)});h.propTypes={as:o.elementType,children:o.node,className:o.string};h.displayName="CHeaderNav";var C=p.forwardRef(function(s,r){var a=s.children,t=s.className,n=f(s,["children","className"]);return i.createElement("button",g({type:"button",className:x("header-toggler",t)},n,{ref:r}),a??i.createElement("span",{className:"header-toggler-icon"}))});C.propTypes={children:o.node,className:o.string};C.displayName="CHeaderToggler";const q=""+new URL("user-default-MQOkq-Hs.jpg",import.meta.url).href,F=()=>{const s=R(),r=async()=>{try{await M(A),y.fire({icon:"success",title:"Logged out",text:"You have successfully logged out."}).then(()=>{s("/Login")}),console.log("User logged out successfully!")}catch(a){console.log(a.message),y.fire({icon:"error",title:"Logout failed",text:"There was an error logging out."})}};return e.jsxs(T,{variant:"nav-item",children:[e.jsx(E,{placement:"bottom-end",className:"py-0 pe-0",caret:!1,children:e.jsx(O,{src:q,size:"md"})}),e.jsxs(L,{className:"pt-0",placement:"bottom-end",children:[e.jsx(j,{className:"bg-body-secondary fw-semibold mb-2",children:"Account"}),e.jsxs(u,{href:"#",children:[e.jsx(l,{icon:I,onClick:r,className:"me-2"}),"Logout"]})]})]})},$=()=>{const s=p.useRef(),{colorMode:r,setColorMode:a}=D("coreui-free-react-admin-template-theme"),t=z(),n=S(c=>c.sidebarShow);return p.useEffect(()=>{document.addEventListener("scroll",()=>{s.current&&s.current.classList.toggle("shadow-sm",document.documentElement.scrollTop>0)})},[]),e.jsx(v,{position:"sticky",className:"mb-4 p-0",ref:s,children:e.jsxs(P,{className:"border-bottom px-4",fluid:!0,children:[e.jsx(C,{onClick:()=>t({type:"set",sidebarShow:!n}),style:{marginInlineStart:"-14px"},children:e.jsx(l,{icon:U,size:"lg"})}),e.jsxs(h,{className:"d-none d-md-flex",children:[e.jsx(m,{}),e.jsx(m,{}),e.jsx(m,{})]}),e.jsxs(h,{className:"ms-auto",children:[e.jsx(m,{children:e.jsx(N,{href:"#"})}),e.jsx(m,{children:e.jsx(N,{href:"#"})}),e.jsx(m,{children:e.jsx(N,{href:"#"})})]}),e.jsxs(h,{children:[e.jsxs(T,{variant:"nav-item",placement:"bottom-end",children:[e.jsx(E,{caret:!1,children:r==="dark"?e.jsx(l,{icon:k,size:"lg"}):r==="auto"?e.jsx(l,{icon:b,size:"lg"}):e.jsx(l,{icon:w,size:"lg"})}),e.jsxs(L,{children:[e.jsxs(u,{active:r==="light",className:"d-flex align-items-center",as:"button",type:"button",onClick:()=>a("light"),children:[e.jsx(l,{className:"me-2",icon:w,size:"lg"})," Light"]}),e.jsxs(u,{active:r==="dark",className:"d-flex align-items-center",as:"button",type:"button",onClick:()=>a("dark"),children:[e.jsx(l,{className:"me-2",icon:k,size:"lg"})," Dark"]}),e.jsxs(u,{active:r==="auto",className:"d-flex align-items-center",as:"button",type:"button",onClick:()=>a("auto"),children:[e.jsx(l,{className:"me-2",icon:b,size:"lg"})," Auto"]})]})]}),e.jsx("li",{className:"nav-item py-1",children:e.jsx("div",{className:"vr h-100 mx-2 text-body text-opacity-75"})}),e.jsx(F,{})]})]})})};export{$ as A};
