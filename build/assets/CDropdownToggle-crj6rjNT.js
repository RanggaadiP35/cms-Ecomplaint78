import{r as u,_ as A,R as a,a as c,c as O,P as r,q as ie,v as se}from"./index-DQvjgStD.js";import{a as le}from"./index.es-yNj0I_EF.js";import{C as de}from"./CConditionalPortal-BS2K3NAO.js";import{u as z}from"./useForkedRef-JzaBuqs-.js";import{C as pe}from"./CButton-DqYmZECj.js";import{u as ce,i as ue}from"./isRTL-DaGrxY3a.js";var fe=function(e,t,o,i){var n=e.length,s=e.indexOf(t);return s===-1?!o&&i?e[n-1]:e[0]:(s+=o?1:-1,s=(s+n)%n,e[Math.max(0,Math.min(s,n-1))])},me=function(e){var t=[];if(typeof e=="object")for(var o in e)t.push("dropdown-menu".concat(o==="xs"?"":"-".concat(o),"-").concat(e[o]));return typeof e=="string"&&t.push("dropdown-menu-".concat(e)),t},ve=function(e,t,o,i){var n=e;return t==="dropup"&&(n=i?"top-end":"top-start"),t==="dropup-center"&&(n="top"),t==="dropend"&&(n=i?"left-start":"right-start"),t==="dropstart"&&(n=i?"right-start":"left-start"),o==="end"&&(n=i?"bottom-start":"bottom-end"),n},S=u.createContext({}),J=u.forwardRef(function(e,t){var o,i=e.children,n=e.alignment,s=e.as,b=s===void 0?"div":s,d=e.autoClose,m=d===void 0?!0:d,R=e.className,y=e.container,k=e.dark,l=e.direction,v=e.offset,C=v===void 0?[0,2]:v,g=e.onHide,w=e.onShow,E=e.placement,D=E===void 0?"bottom-start":E,P=e.popper,T=P===void 0?!0:P,F=e.portal,Y=F===void 0?!1:F,H=e.variant,x=H===void 0?"btn-group":H,j=e.visible,V=j===void 0?!1:j,Z=A(e,["children","alignment","as","autoClose","className","container","dark","direction","offset","onHide","onShow","placement","popper","portal","variant","visible"]),$=u.useRef(null),h=u.useRef(null),p=u.useRef(null),G=z(t,$),I=u.useState(V),L=I[0],M=I[1],B=ce(),_=B.initPopper,ee=B.destroyPopper,re=x==="nav-item"?"li":b;typeof n=="object"&&(T=!1);var ne={alignment:n,container:y,dark:k,dropdownToggleRef:h,dropdownMenuRef:p,popper:T,portal:Y,variant:x,visible:L,setVisible:M},te={modifiers:[{name:"offset",options:{offset:C}}],placement:ve(D,l,n,ue(p.current))};u.useEffect(function(){M(V)},[V]),u.useEffect(function(){return L&&h.current&&p.current&&(h.current.focus(),T&&_(h.current,p.current,te),window.addEventListener("mouseup",U),window.addEventListener("keyup",K),h.current.addEventListener("keydown",q),p.current.addEventListener("keydown",q),w&&w()),function(){T&&ee(),window.removeEventListener("mouseup",U),window.removeEventListener("keyup",K),h.current&&h.current.removeEventListener("keydown",q),p.current&&p.current.removeEventListener("keydown",q),g&&g()}},[L]);var q=function(f){if(L&&p.current&&(f.key==="ArrowDown"||f.key==="ArrowUp")){f.preventDefault();var oe=f.target,ae=Array.from(p.current.querySelectorAll(".dropdown-item:not(.disabled):not(:disabled)"));fe(ae,oe,f.key==="ArrowDown",!0).focus()}},K=function(f){m!==!1&&f.key==="Escape"&&M(!1)},U=function(f){if(!(!h.current||!p.current)&&!h.current.contains(f.target)&&(m===!0||m==="inside"&&p.current.contains(f.target)||m==="outside"&&!p.current.contains(f.target))){setTimeout(function(){return M(!1)},1);return}};return a.createElement(S.Provider,{value:ne},x==="input-group"?a.createElement(a.Fragment,null,i):a.createElement(re,c({className:O(x==="nav-item"?"nav-item dropdown":x,(o={"dropdown-center":l==="center","dropup dropup-center":l==="dropup-center"},o["".concat(l)]=l&&l!=="center"&&l!=="dropup-center",o),R)},Z,{ref:G}),i))}),N=r.oneOf(["start","end"]);J.propTypes={alignment:r.oneOfType([N,r.shape({xs:N.isRequired}),r.shape({sm:N.isRequired}),r.shape({md:N.isRequired}),r.shape({lg:N.isRequired}),r.shape({xl:N.isRequired}),r.shape({xxl:N.isRequired})]),as:r.elementType,autoClose:r.oneOfType([r.bool,r.oneOf(["inside","outside"])]),children:r.node,className:r.string,dark:r.bool,direction:r.oneOf(["center","dropup","dropup-center","dropend","dropstart"]),offset:r.any,onHide:r.func,onShow:r.func,placement:ie,popper:r.bool,portal:r.bool,variant:r.oneOf(["btn-group","dropdown","input-group","nav-item"]),visible:r.bool};J.displayName="CDropdown";var Q=u.forwardRef(function(e,t){var o=e.children,i=e.as,n=i===void 0?"a":i,s=e.className,b=A(e,["children","as","className"]);return a.createElement(le,c({className:O("dropdown-item",s),as:n},b,{ref:t}),o)});Q.propTypes={as:r.elementType,children:r.node,className:r.string};Q.displayName="CDropdownItem";var W=u.forwardRef(function(e,t){var o=e.children,i=e.as,n=i===void 0?"ul":i,s=e.className,b=A(e,["children","as","className"]),d=u.useContext(S),m=d.alignment,R=d.container,y=d.dark,k=d.dropdownMenuRef,l=d.popper,v=d.portal,C=d.visible,g=z(t,k);return a.createElement(de,{container:R,portal:v??!1},a.createElement(n,c({className:O("dropdown-menu",{show:C},m&&me(m),s),ref:g,role:"menu","aria-hidden":!C},!l&&{"data-coreui-popper":"static"},y&&{"data-coreui-theme":"dark"},b),n==="ul"?a.Children.map(o,function(w,E){if(a.isValidElement(w))return a.createElement("li",{key:E},a.cloneElement(w))}):o))});W.propTypes={as:r.elementType,children:r.node,className:r.string};W.displayName="CDropdownMenu";var X=function(e){var t=e.children,o=e.caret,i=o===void 0?!0:o,n=e.custom,s=e.className,b=e.navLink,d=b===void 0?!0:b,m=e.split,R=e.trigger,y=R===void 0?"click":R,k=A(e,["children","caret","custom","className","navLink","split","trigger"]),l=u.useContext(S),v=l.dropdownToggleRef,C=l.variant,g=l.visible,w=l.setVisible,E=c(c({},(y==="click"||y.includes("click"))&&{onClick:function(T){T.preventDefault(),w(!g)}}),(y==="focus"||y.includes("focus"))&&{onFocus:function(){return w(!0)},onBlur:function(){return w(!1)}}),D=c({className:O({"nav-link":C==="nav-item"&&d,"dropdown-toggle":i,"dropdown-toggle-split":m,show:g},s),"aria-expanded":g},!k.disabled&&c({},E)),P=function(){return n&&a.isValidElement(t)?a.createElement(a.Fragment,null,a.cloneElement(t,c(c({"aria-expanded":g},!k.disabled&&c({},E)),{ref:v}))):C==="nav-item"&&d?a.createElement("a",c({href:"#"},D,{role:"button",ref:v}),t):a.createElement(pe,c({},D,{tabIndex:0},k,{ref:v}),t,m&&a.createElement("span",{className:"visually-hidden"},"Toggle Dropdown"))};return a.createElement(P,null)};X.propTypes={caret:r.bool,children:r.node,className:r.string,custom:r.bool,split:r.bool,trigger:se};X.displayName="CDropdownToggle";export{J as C,X as a,W as b,Q as c};
