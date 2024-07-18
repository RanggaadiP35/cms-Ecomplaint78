import{r as h,_ as D,R as u,a as $,c as B,P as v}from"./index-DQvjgStD.js";var R=h.forwardRef(function(e,s){var a=e.children,r=e.active,n=e.as,t=n===void 0?"a":n,i=e.className,l=e.disabled,c=D(e,["children","active","as","className","disabled"]);return u.createElement(t,$({className:B(i,{active:r,disabled:l})},r&&{"aria-current":"page"},t==="a"&&l&&{"aria-disabled":!0,tabIndex:-1},(t==="a"||t==="button")&&{onClick:function(y){y.preventDefault,!l&&c.onClick&&c.onClick(y)}},{disabled:l},c,{ref:s}),a)});R.propTypes={active:v.bool,as:v.elementType,children:v.node,className:v.string,disabled:v.bool};R.displayName="CLink";var C={},b=function(){return b=Object.assign||function(s){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t])}return s},b.apply(this,arguments)};function U(e,s){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)s.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a}function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var A={exports:{}},N,P;function H(){if(P)return N;P=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return N=e,N}var T,E;function J(){if(E)return T;E=1;var e=H();function s(){}function a(){}return a.resetWarningCache=s,T=function(){function r(i,l,c,y,d,g){if(g!==e){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function n(){return r}var t={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:s};return t.PropTypes=t,t},T}A.exports=J()();var V=A.exports,o=j(V),I={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var s={}.hasOwnProperty;function a(){for(var r=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if(i==="string"||i==="number")r.push(t);else if(Array.isArray(t)){if(t.length){var l=a.apply(null,t);l&&r.push(l)}}else if(i==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){r.push(t.toString());continue}for(var c in t)s.call(t,c)&&t[c]&&r.push(c)}}}return r.join(" ")}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(I);var Y=I.exports,_=j(Y),G=function(e){return e.replace(/([-_][a-z0-9])/gi,function(s){return s.toUpperCase()}).replace(/-/gi,"")},F=h.forwardRef(function(e,s){var a,r=e.className,n=e.content,t=e.customClassName,i=e.height,l=e.icon,c=e.name,y=e.size,d=e.title,g=e.use,m=e.width,w=U(e,["className","content","customClassName","height","icon","name","size","title","use","width"]),x=h.useState(0),O=x[0],k=x[1],p=l||n||c;n&&process,c&&process,h.useMemo(function(){return k(O+1)},[p,JSON.stringify(p)]);var z=d?"<title>".concat(d,"</title>"):"",f=h.useMemo(function(){var M=p&&typeof p=="string"&&p.includes("-")?G(p):p;if(Array.isArray(p))return p;if(typeof p=="string"&&u.icons)return u.icons[M]},[O]),W=h.useMemo(function(){return Array.isArray(f)?f[1]||f[0]:f},[O]),q=function(){return Array.isArray(f)&&f.length>1?f[0]:"64 64"}(),L=function(){return w.viewBox||"0 0 ".concat(q)}(),S=t?_(t):_("icon",(a={},a["icon-".concat(y)]=y,a["icon-custom-size"]=i||m,a),r);return u.createElement(u.Fragment,null,g?u.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",className:S},i&&{height:i},m&&{width:m},{role:"img","aria-hidden":"true"},w,{ref:s}),u.createElement("use",{href:g})):u.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:L,className:S},i&&{height:i},m&&{width:m},{role:"img","aria-hidden":"true",dangerouslySetInnerHTML:{__html:z+W}},w,{ref:s})),d&&u.createElement("span",{className:"visually-hidden"},d))});F.propTypes={className:o.string,content:o.oneOfType([o.array,o.string]),customClassName:o.string,height:o.number,icon:o.oneOfType([o.array,o.string]),name:o.string,size:o.oneOf(["custom","custom-size","sm","lg","xl","xxl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]),title:o.any,use:o.any,width:o.number};F.displayName="CIcon";export{F as C,R as a};
