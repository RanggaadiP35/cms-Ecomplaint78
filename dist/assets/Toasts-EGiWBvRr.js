import{r as o,_ as R,M as Q,R as i,U as X,B as u,E as A,P as r,W as Z,ak as L,am as D,a7 as $,j as e,d as _,e as y,f as N,o as C,g as T,F as x,m as F}from"./index-8shILgU5.js";var W=o.createContext({}),d=o.forwardRef(function(s,n){var l=s.children,a=s.animation,t=a===void 0?!0:a,c=s.autohide,U=c===void 0?!0:c,E=s.className,j=s.color,v=s.delay,w=v===void 0?5e3:v,m=s.index,b=s.key,k=s.visible,B=k===void 0?!1:k,H=s.onClose,M=s.onShow,G=R(s,["children","animation","autohide","className","color","delay","index","key","visible","onClose","onShow"]),z=o.useRef(),J=Q(n,z),O=o.useState(!1),Y=O[0],P=O[1],S=o.useRef();o.useEffect(function(){P(B)},[B]);var K={visible:Y,setVisible:P};o.useEffect(function(){return function(){return clearTimeout(S.current)}},[]),o.useEffect(function(){q()},[Y]);var q=function(){U&&(clearTimeout(S.current),S.current=window.setTimeout(function(){P(!1)},w))};return i.createElement(X,{in:Y,nodeRef:z,onEnter:function(){return M&&M(m??null)},onExited:function(){return H&&H(m??null)},timeout:250,unmountOnExit:!0},function(V){var p;return i.createElement(W.Provider,{value:K},i.createElement("div",u({className:A("toast",(p={fade:t},p["bg-".concat(j)]=j,p["border-0"]=j,p["show showing"]=V==="entering"||V==="exiting",p.show=V==="entered",p),E),"aria-live":"assertive","aria-atomic":"true",role:"alert",onMouseEnter:function(){return clearTimeout(S.current)},onMouseLeave:function(){return q()}},G,{key:b,ref:J}),l))})});d.propTypes={animation:r.bool,autohide:r.bool,children:r.node,className:r.string,color:Z,delay:r.number,index:r.number,key:r.number,onClose:r.func,onShow:r.func,visible:r.bool};d.displayName="CToast";var h=o.forwardRef(function(s,n){var l=s.children,a=s.className,t=R(s,["children","className"]);return i.createElement("div",u({className:A("toast-body",a)},t,{ref:n}),l)});h.propTypes={children:r.node,className:r.string};h.displayName="CToastBody";var g=o.forwardRef(function(s,n){var l=s.children,a=s.as,t=R(s,["children","as"]),c=o.useContext(W).setVisible;return a?i.createElement(a,u({onClick:function(){return c(!1)}},t,{ref:n}),l):i.createElement(L,u({onClick:function(){return c(!1)}},t,{ref:n}))});g.propTypes=u(u({},L.propTypes),{as:r.elementType});g.displayName="CToastClose";var f=o.forwardRef(function(s,n){var l=s.children,a=s.className,t=s.closeButton,c=R(s,["children","className","closeButton"]);return i.createElement("div",u({className:A("toast-header",a)},c,{ref:n}),l,t&&i.createElement(g,null))});f.propTypes={children:r.node,className:r.string,closeButton:r.bool};f.displayName="CToastHeader";var I=o.forwardRef(function(s,n){var l=s.children,a=s.className,t=s.placement,c=s.push,U=R(s,["children","className","placement","push"]),E=o.useState([]),j=E[0],v=E[1],w=o.useRef(0);o.useEffect(function(){w.current++,c&&m(c)},[c]);var m=function(b){v(function(k){return D(D([],k,!0),[i.cloneElement(b,{index:w.current,key:w.current,onClose:function(B){return v(function(H){return H.filter(function(M){return M.props.index!==B})})}})],!1)})};return i.createElement($,{portal:typeof t=="string"},j.length>0||l?i.createElement("div",u({className:A("toaster toast-container",{"position-fixed":t,"top-0":t&&t.includes("top"),"top-50 translate-middle-y":t&&t.includes("middle"),"bottom-0":t&&t.includes("bottom"),"start-0":t&&t.includes("start"),"start-50 translate-middle-x":t&&t.includes("center"),"end-0":t&&t.includes("end")},a)},U,{ref:n}),l,j.map(function(b){return i.cloneElement(b,{visible:!0})})):null)});I.propTypes={children:r.node,className:r.string,placement:r.oneOfType([r.string,r.oneOf(["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"])]),push:r.any};I.displayName="CToaster";const ee=()=>{const[s,n]=o.useState(0),l=o.useRef(),a=e.jsxs(d,{title:"CoreUI for React.js",children:[e.jsxs(f,{closeButton:!0,children:[e.jsx("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:e.jsx("rect",{width:"100%",height:"100%",fill:"#007aff"})}),e.jsx("strong",{className:"me-auto",children:"CoreUI for React.js"}),e.jsx("small",{children:"7 min ago"})]}),e.jsx(h,{children:"Hello, world! This is a toast message."})]});return e.jsxs(e.Fragment,{children:[e.jsx(F,{color:"primary",onClick:()=>n(a),children:"Send a toast"}),e.jsx(I,{ref:l,push:s,placement:"top-end"})]})},te=()=>e.jsxs(_,{children:[e.jsx(y,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Toast"})," ",e.jsx("small",{children:"Basic"})]}),e.jsxs(T,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button."}),e.jsx(x,{href:"components/toast",children:e.jsxs(d,{autohide:!1,visible:!0,children:[e.jsxs(f,{closeButton:!0,children:[e.jsx("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:e.jsx("rect",{width:"100%",height:"100%",fill:"#007aff"})}),e.jsx("strong",{className:"me-auto",children:"CoreUI for React.js"}),e.jsx("small",{children:"7 min ago"})]}),e.jsx(h,{children:"Hello, world! This is a toast message."})]})}),e.jsx(x,{href:"components/toast",children:ee()})]})]})}),e.jsx(y,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Toast"})," ",e.jsx("small",{children:"Translucent"})]}),e.jsxs(T,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Toasts are slightly translucent to blend in with what's below them."}),e.jsx(x,{href:"components/toast#translucent",tabContentClassName:"bg-dark",children:e.jsxs(d,{autohide:!1,visible:!0,children:[e.jsxs(f,{closeButton:!0,children:[e.jsx("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:e.jsx("rect",{width:"100%",height:"100%",fill:"#007aff"})}),e.jsx("strong",{className:"me-auto",children:"CoreUI for React.js"}),e.jsx("small",{children:"7 min ago"})]}),e.jsx(h,{children:"Hello, world! This is a toast message."})]})})]})]})}),e.jsx(y,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Toast"})," ",e.jsx("small",{children:"Stacking"})]}),e.jsxs(T,{children:[e.jsx("p",{className:"text-body-secondary small",children:"You can stack toasts by wrapping them in a toast container, which will vertically add some spacing."}),e.jsx(x,{href:"components/toast#stacking",children:e.jsxs(I,{className:"position-static",children:[e.jsxs(d,{autohide:!1,visible:!0,children:[e.jsxs(f,{closeButton:!0,children:[e.jsx("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:e.jsx("rect",{width:"100%",height:"100%",fill:"#007aff"})}),e.jsx("strong",{className:"me-auto",children:"CoreUI for React.js"}),e.jsx("small",{children:"7 min ago"})]}),e.jsx(h,{children:"Hello, world! This is a toast message."})]}),e.jsxs(d,{autohide:!1,visible:!0,children:[e.jsxs(f,{closeButton:!0,children:[e.jsx("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:e.jsx("rect",{width:"100%",height:"100%",fill:"#007aff"})}),e.jsx("strong",{className:"me-auto",children:"CoreUI for React.js"}),e.jsx("small",{children:"7 min ago"})]}),e.jsx(h,{children:"Hello, world! This is a toast message."})]})]})})]})]})}),e.jsx(y,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Toast"})," ",e.jsx("small",{children:"Custom content"})]}),e.jsxs(T,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Customize your toasts by removing sub-components, tweaking them with"," ",e.jsx("a",{href:"https://coreui.io/docs/utilities/api",children:"utilities"}),", or by adding your own markup. Here we've created a simpler toast by removing the default"," ",e.jsx("code",{children:"<CToastHeader>"}),", adding a custom hide icon from"," ",e.jsx("a",{href:"https://coreui.io/icons/",children:"CoreUI Icons"}),", and using some"," ",e.jsx("a",{href:"https://coreui.io/docs/utilities/flex",children:"flexbox utilities"})," to adjust the layout."]}),e.jsx(x,{href:"components/toast#custom-content",children:e.jsx(d,{autohide:!1,className:"align-items-center",visible:!0,children:e.jsxs("div",{className:"d-flex",children:[e.jsx(h,{children:"Hello, world! This is a toast message."}),e.jsx(g,{className:"me-2 m-auto"})]})})}),e.jsx("p",{className:"text-body-secondary small",children:"Alternatively, you can also add additional controls and components to toasts."}),e.jsx(x,{href:"components/toast#custom-content",children:e.jsx(d,{autohide:!1,visible:!0,children:e.jsxs(h,{children:["Hello, world! This is a toast message.",e.jsxs("div",{className:"mt-2 pt-2 border-top",children:[e.jsx(F,{type:"button",color:"primary",size:"sm",children:"Take action"}),e.jsx(g,{as:F,color:"secondary",size:"sm",className:"ms-1",children:"Close"})]})]})})})]})]})}),e.jsx(y,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Toast"})," ",e.jsx("small",{children:"Custom content"})]}),e.jsxs(T,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Building on the above example, you can create different toast color schemes with our"," ",e.jsx("a",{href:"https://coreui.io/docs/utilities/colors",children:"color"})," and"," ",e.jsx("a",{href:"https://coreui.io/docs/utilities/background",children:"background"})," utilities. Here we've set ",e.jsx("code",{children:'color="primary"'})," and added ",e.jsx("code",{children:".text-white"})," ","class to the ",e.jsx("code",{children:"<Ctoast>"}),", and then set ",e.jsx("code",{children:"white"})," property to our close button. For a crisp edge, we remove the default border with"," ",e.jsx("code",{children:".border-0"}),"."]}),e.jsx(x,{href:"components/toast#color-schemes",children:e.jsx(d,{autohide:!1,color:"primary",className:"text-white align-items-center",visible:!0,children:e.jsxs("div",{className:"d-flex",children:[e.jsx(h,{children:"Hello, world! This is a toast message."}),e.jsx(g,{className:"me-2 m-auto",white:!0})]})})})]})]})})]});export{te as default};
