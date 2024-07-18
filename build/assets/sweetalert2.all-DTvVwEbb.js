import{p as hn,g as lp}from"./index-DQvjgStD.js";var tl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},up=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],c=n[t++],h=n[t++],f=((i&7)<<18|(o&63)<<12|(c&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return e.join("")},Tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,h=c?n[i+1]:0,f=i+2<n.length,g=f?n[i+2]:0,y=o>>2,P=(o&3)<<4|h>>4;let R=(h&15)<<2|g>>6,V=g&63;f||(V=64,c||(R=64)),r.push(t[y],t[P],t[R],t[V])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Iu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):up(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],h=i<n.length?t[n.charAt(i)]:0;++i;const g=i<n.length?t[n.charAt(i)]:64;++i;const P=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||h==null||g==null||P==null)throw new hp;const R=o<<2|h>>4;if(r.push(R),g!==64){const V=h<<4&240|g>>2;if(r.push(V),P!==64){const U=g<<6&192|P;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dp=function(n){const e=Iu(n);return Tu.encodeByteArray(e,!0)},Xs=function(n){return dp(n).replace(/\./g,"")},bu=function(n){try{return Tu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=()=>fp().__FIREBASE_DEFAULTS__,mp=()=>{if(typeof process>"u"||typeof tl>"u")return;const n=tl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bu(n[1]);return e&&JSON.parse(e)},mo=()=>{try{return pp()||mp()||gp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Au=n=>{var e,t;return(t=(e=mo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wp=n=>{const e=Au(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Cu=()=>{var n;return(n=mo())===null||n===void 0?void 0:n.config},Pu=n=>{var e;return(e=mo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xs(JSON.stringify(t)),Xs(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Ep(){var n;const e=(n=mo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Su(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tp(){const n=qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function bp(){return!Ep()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ru(){try{return typeof indexedDB=="object"}catch{return!1}}function ku(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function Ap(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="FirebaseError";class vt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Cp,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],c=o?Pp(o,r):"Error",h=`${this.serviceName}: ${c} (${i}).`;return new vt(i,h,r)}}function Pp(n,e){return n.replace(Sp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sp=/\{\$([^}]+)}/g;function Rp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],c=e[i];if(nl(o)&&nl(c)){if(!Vi(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function nl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ei(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Ii(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function kp(n,e){const t=new Dp(n,e);return t.subscribe.bind(t)}class Dp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Op(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=sa),i.error===void 0&&(i.error=sa),i.complete===void 0&&(i.complete=sa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Op(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sa(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=1e3,Np=2,xp=4*60*60*1e3,Lp=.5;function rl(n,e=Vp,t=Np){const r=e*Math.pow(t,n),i=Math.round(Lp*r*(Math.random()-.5)*2);return Math.min(xp,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n){return n&&n._delegate?n._delegate:n}class yt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new yp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Up(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&c.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const c=this.instances.get(i);return c&&e(c,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fp(n){return n===zn?void 0:n}function Up(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Mp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const jp={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},qp=te.INFO,$p={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Hp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=$p[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class go{constructor(e){this.name=e,this._logLevel=qp,this._logHandler=Hp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const zp=(n,e)=>e.some(t=>n instanceof t);let il,sl;function Wp(){return il||(il=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kp(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Du=new WeakMap,_a=new WeakMap,Ou=new WeakMap,oa=new WeakMap,ja=new WeakMap;function Gp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{t(yn(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Du.set(t,n)}).catch(()=>{}),ja.set(e,n),e}function Qp(n){if(_a.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});_a.set(n,e)}let va={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _a.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ou.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yp(n){va=n(va)}function Xp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(aa(this),e,...t);return Ou.set(r,e.sort?e.sort():[e]),yn(r)}:Kp().includes(n)?function(...e){return n.apply(aa(this),e),yn(Du.get(this))}:function(...e){return yn(n.apply(aa(this),e))}}function Jp(n){return typeof n=="function"?Xp(n):(n instanceof IDBTransaction&&Qp(n),zp(n,Wp())?new Proxy(n,va):n)}function yn(n){if(n instanceof IDBRequest)return Gp(n);if(oa.has(n))return oa.get(n);const e=Jp(n);return e!==n&&(oa.set(n,e),ja.set(e,n)),e}const aa=n=>ja.get(n);function Vu(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,e),h=yn(c);return r&&c.addEventListener("upgradeneeded",f=>{r(yn(c.result),f.oldVersion,f.newVersion,yn(c.transaction),f)}),t&&c.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",g=>i(g.oldVersion,g.newVersion,g))}).catch(()=>{}),h}const Zp=["get","getKey","getAll","getAllKeys","count"],em=["put","add","delete","clear"],ca=new Map;function ol(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ca.get(e))return ca.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=em.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zp.includes(t)))return;const o=async function(c,...h){const f=this.transaction(c,i?"readwrite":"readonly");let g=f.store;return r&&(g=g.index(h.shift())),(await Promise.all([g[t](...h),i&&f.done]))[0]};return ca.set(e,o),o}Yp(n=>({...n,get:(e,t,r)=>ol(e,t)||n.get(e,t,r),has:(e,t)=>!!ol(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function nm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ea="@firebase/app",al="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new go("@firebase/app"),rm="@firebase/app-compat",im="@firebase/analytics-compat",sm="@firebase/analytics",om="@firebase/app-check-compat",am="@firebase/app-check",cm="@firebase/auth",lm="@firebase/auth-compat",um="@firebase/database",hm="@firebase/database-compat",dm="@firebase/functions",fm="@firebase/functions-compat",pm="@firebase/installations",mm="@firebase/installations-compat",gm="@firebase/messaging",wm="@firebase/messaging-compat",ym="@firebase/performance",_m="@firebase/performance-compat",vm="@firebase/remote-config",Em="@firebase/remote-config-compat",Im="@firebase/storage",Tm="@firebase/storage-compat",bm="@firebase/firestore",Am="@firebase/vertexai-preview",Cm="@firebase/firestore-compat",Pm="firebase",Sm="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="[DEFAULT]",Rm={[Ea]:"fire-core",[rm]:"fire-core-compat",[sm]:"fire-analytics",[im]:"fire-analytics-compat",[am]:"fire-app-check",[om]:"fire-app-check-compat",[cm]:"fire-auth",[lm]:"fire-auth-compat",[um]:"fire-rtdb",[hm]:"fire-rtdb-compat",[dm]:"fire-fn",[fm]:"fire-fn-compat",[pm]:"fire-iid",[mm]:"fire-iid-compat",[gm]:"fire-fcm",[wm]:"fire-fcm-compat",[ym]:"fire-perf",[_m]:"fire-perf-compat",[vm]:"fire-rc",[Em]:"fire-rc-compat",[Im]:"fire-gcs",[Tm]:"fire-gcs-compat",[bm]:"fire-fst",[Cm]:"fire-fst-compat",[Am]:"fire-vertex","fire-js":"fire-js",[Pm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Map,km=new Map,Ta=new Map;function cl(n,e){try{n.container.addComponent(e)}catch(t){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Dt(n){const e=n.name;if(Ta.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Ta.set(e,n);for(const t of Js.values())cl(t,n);for(const t of km.values())cl(t,n);return!0}function ir(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new rr("app","Firebase",Dm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=Sm;function Nu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ia,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(t||(t=Cu()),!t)throw _n.create("no-options");const o=Js.get(i);if(o){if(Vi(t,o.options)&&Vi(r,o.config))return o;throw _n.create("duplicate-app",{appName:i})}const c=new Bp(i);for(const f of Ta.values())c.addComponent(f);const h=new Om(t,r,c);return Js.set(i,h),h}function qa(n=Ia){const e=Js.get(n);if(!e&&n===Ia&&Cu())return Nu();if(!e)throw _n.create("no-app",{appName:n});return e}function ht(n,e,t){var r;let i=(r=Rm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(h.join(" "));return}Dt(new yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="firebase-heartbeat-database",Nm=1,Ni="firebase-heartbeat-store";let la=null;function xu(){return la||(la=Vu(Vm,Nm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ni)}catch(t){console.warn(t)}}}}).catch(n=>{throw _n.create("idb-open",{originalErrorMessage:n.message})})),la}async function xm(n){try{const t=(await xu()).transaction(Ni),r=await t.objectStore(Ni).get(Lu(n));return await t.done,r}catch(e){if(e instanceof vt)Qn.warn(e.message);else{const t=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(t.message)}}}async function ll(n,e){try{const r=(await xu()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(e,Lu(n)),await r.done}catch(t){if(t instanceof vt)Qn.warn(t.message);else{const r=_n.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qn.warn(r.message)}}}function Lu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=1024,Mm=30*24*60*60*1e3;class Fm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ul();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=Mm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ul(),{heartbeatsToSend:r,unsentEntries:i}=Um(this._heartbeatsCache.heartbeats),o=Xs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function ul(){return new Date().toISOString().substring(0,10)}function Um(n,e=Lm){const t=[];let r=n.slice();for(const i of n){const o=t.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),hl(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),hl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Bm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ru()?ku().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ll(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ll(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hl(n){return Xs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){Dt(new yt("platform-logger",e=>new tm(e),"PRIVATE")),Dt(new yt("heartbeat",e=>new Fm(e),"PRIVATE")),ht(Ea,al,n),ht(Ea,al,"esm2017"),ht("fire-js","")}jm("");function $a(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Mu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qm=Mu,Fu=new rr("auth","Firebase",Mu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new go("@firebase/auth");function $m(n,...e){Zs.logLevel<=te.WARN&&Zs.warn(`Auth (${Wr}): ${n}`,...e)}function qs(n,...e){Zs.logLevel<=te.ERROR&&Zs.error(`Auth (${Wr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,...e){throw Ha(n,...e)}function Pt(n,...e){return Ha(n,...e)}function Uu(n,e,t){const r=Object.assign(Object.assign({},qm()),{[e]:t});return new rr("auth","Firebase",r).create(e,{appName:n.name})}function vn(n){return Uu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ha(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Fu.create(n,...e)}function z(n,e,...t){if(!n)throw Ha(e,...t)}function Wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qs(e),new Error(e)}function Xt(n,e){n||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Hm(){return dl()==="http:"||dl()==="https:"}function dl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hm()||Su()||"connection"in navigator)?navigator.onLine:!0}function Wm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xt(t>e,"Short delay should be less than long delay!"),this.isMobile=vp()||Ip()}get(){return zm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n,e){Xt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Hi(3e4,6e4);function sr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function An(n,e,t,r,i={}){return ju(n,i,async()=>{let o={},c={};r&&(e==="GET"?c=r:o={body:JSON.stringify(r)});const h=$i(Object.assign({key:n.config.apiKey},c)).slice(1),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode),Bu.fetch()(qu(n,n.config.apiHost,t,h),Object.assign({method:e,headers:f,referrerPolicy:"no-referrer"},o))})}async function ju(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Km),e);try{const i=new Ym(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw Ms(n,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const h=o.ok?c.errorMessage:c.error.message,[f,g]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ms(n,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw Ms(n,"email-already-in-use",c);if(f==="USER_DISABLED")throw Ms(n,"user-disabled",c);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Uu(n,y,g);_t(n,y)}}catch(i){if(i instanceof vt)throw i;_t(n,"network-request-failed",{message:String(i)})}}async function wo(n,e,t,r,i={}){const o=await An(n,e,t,r,i);return"mfaPendingCredential"in o&&_t(n,"multi-factor-auth-required",{_serverResponse:o}),o}function qu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?za(n.config,i):`${n.config.apiScheme}://${i}`}function Qm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ym{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),Gm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ms(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Pt(n,e,r);return i.customData._tokenResponse=t,i}function fl(n){return n!==void 0&&n.enterprise!==void 0}class Xm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Jm(n,e){return An(n,"GET","/v2/recaptchaConfig",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(n,e){return An(n,"POST","/v1/accounts:delete",e)}async function $u(n,e){return An(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eg(n,e=!1){const t=Ne(n),r=await t.getIdToken(e),i=Wa(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Pi(ua(i.auth_time)),issuedAtTime:Pi(ua(i.iat)),expirationTime:Pi(ua(i.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ua(n){return Number(n)*1e3}function Wa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const i=bu(t);return i?JSON.parse(i):(qs("Failed to decode base64 JWT payload"),null)}catch(i){return qs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pl(n){const e=Wa(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof vt&&tg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(n){var e;const t=n.auth,r=await n.getIdToken(),i=await xi(n,$u(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const c=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Hu(o.providerUserInfo):[],h=ig(n.providerData,c),f=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!(h!=null&&h.length),y=f?g:!1,P={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Aa(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,P)}async function rg(n){const e=Ne(n);await eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ig(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Hu(n){return n.map(e=>{var{providerId:t}=e,r=$a(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,e){const t=await ju(n,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,c=qu(n,i,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",Bu.fetch()(c,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function og(n,e){return An(n,"POST","/v2/accounts:revokeToken",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=pl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await sg(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,c=new Nr;return r&&(z(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),o&&(z(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=$a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ng(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Aa(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await xi(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eg(this,e)}reload(){return rg(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await xi(this,Zm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,c,h,f,g,y;const P=(r=t.displayName)!==null&&r!==void 0?r:void 0,R=(i=t.email)!==null&&i!==void 0?i:void 0,V=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,U=(c=t.photoURL)!==null&&c!==void 0?c:void 0,j=(h=t.tenantId)!==null&&h!==void 0?h:void 0,M=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,ee=(g=t.createdAt)!==null&&g!==void 0?g:void 0,J=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ie,emailVerified:fe,isAnonymous:Je,providerData:me,stsTokenManager:b}=t;z(ie&&b,e,"internal-error");const v=Nr.fromJSON(this.name,b);z(typeof ie=="string",e,"internal-error"),dn(P,e.name),dn(R,e.name),z(typeof fe=="boolean",e,"internal-error"),z(typeof Je=="boolean",e,"internal-error"),dn(V,e.name),dn(U,e.name),dn(j,e.name),dn(M,e.name),dn(ee,e.name),dn(J,e.name);const I=new Kt({uid:ie,auth:e,email:R,emailVerified:fe,displayName:P,isAnonymous:Je,photoURL:U,phoneNumber:V,tenantId:j,stsTokenManager:v,createdAt:ee,lastLoginAt:J});return me&&Array.isArray(me)&&(I.providerData=me.map(T=>Object.assign({},T))),M&&(I._redirectEventId=M),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new Nr;i.updateFromServerResponse(t);const o=new Kt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await eo(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Hu(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),h=new Nr;h.updateFromIdToken(r);const f=new Kt({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:c}),g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Aa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(f,g),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map;function Gt(n){Xt(n instanceof Function,"Expected a class definition");let e=ml.get(n);return e?(Xt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ml.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zu.type="NONE";const gl=zu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n,e,t){return`firebase:${n}:${e}:${t}`}class xr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=$s(this.userKey,i.apiKey,o),this.fullPersistenceKey=$s("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xr(Gt(gl),e,r);const i=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let o=i[0]||Gt(gl);const c=$s(r,e.config.apiKey,e.name);let h=null;for(const g of t)try{const y=await g._get(c);if(y){const P=Kt._fromJSON(e,y);g!==o&&(h=P),o=g;break}}catch{}const f=i.filter(g=>g._shouldAllowMigration);return!o._shouldAllowMigration||!f.length?new xr(o,e,r):(o=f[0],h&&await o._set(c,h.toJSON()),await Promise.all(t.map(async g=>{if(g!==o)try{await g._remove(c)}catch{}})),new xr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yu(e))return"Blackberry";if(Xu(e))return"Webos";if(Ka(e))return"Safari";if((e.includes("chrome/")||Ku(e))&&!e.includes("edge/"))return"Chrome";if(Qu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wu(n=qe()){return/firefox\//i.test(n)}function Ka(n=qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ku(n=qe()){return/crios\//i.test(n)}function Gu(n=qe()){return/iemobile/i.test(n)}function Qu(n=qe()){return/android/i.test(n)}function Yu(n=qe()){return/blackberry/i.test(n)}function Xu(n=qe()){return/webos/i.test(n)}function yo(n=qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ag(n=qe()){var e;return yo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cg(){return Tp()&&document.documentMode===10}function Ju(n=qe()){return yo(n)||Qu(n)||Xu(n)||Yu(n)||/windows phone/i.test(n)||Gu(n)}function lg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,e=[]){let t;switch(n){case"Browser":t=wl(qe());break;case"Worker":t=`${wl(qe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((c,h)=>{try{const f=e(o);c(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(n,e={}){return An(n,"GET","/v2/passwordPolicy",sr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=6;class fg{constructor(e){var t,r,i,o;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:dg,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,c,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(i=f.containsLowercaseLetter)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(o=f.containsUppercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(c=f.containsNumericCharacter)!==null&&c!==void 0?c:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yl(this),this.idTokenSubscription=new yl(this),this.beforeStateQueue=new ug(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Gt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $u(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(zt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=i==null?void 0:i._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===h)&&(f!=null&&f.user)&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(vn(this));const t=e?Ne(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hg(this),t=new fg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await og(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Gt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(h,this,"internal-error"),h.then(()=>{c||o(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,i);return()=>{c=!0,f()}}else{const f=e.addObserver(t);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&$m(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Kr(n){return Ne(n)}class yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=kp(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mg(n){_o=n}function eh(n){return _o.loadJS(n)}function gg(){return _o.recaptchaEnterpriseScript}function wg(){return _o.gapiScript}function yg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const _g="recaptcha-enterprise",vg="NO_RECAPTCHA";class Eg{constructor(e){this.type=_g,this.auth=Kr(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(c,h)=>{Jm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const g=new Xm(f);return o.tenantId==null?o._agentRecaptchaConfig=g:o._tenantRecaptchaConfigs[o.tenantId]=g,c(g.siteKey)}}).catch(f=>{h(f)})})}function i(o,c,h){const f=window.grecaptcha;fl(f)?f.enterprise.ready(()=>{f.enterprise.execute(o,{action:e}).then(g=>{c(g)}).catch(()=>{c(vg)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,c)=>{r(this.auth).then(h=>{if(!t&&fl(window.grecaptcha))i(h,o,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let f=gg();f.length!==0&&(f+=h),eh(f).then(()=>{i(h,o,c)}).catch(g=>{c(g)})}}).catch(h=>{c(h)})})}}async function _l(n,e,t,r=!1){const i=new Eg(n);let o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c=Object.assign({},e);return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function vl(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _l(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await _l(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(n,e){const t=ir(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Vi(o,e??{}))return i;_t(i,"already-initialized")}return t.initialize({options:e})}function Tg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bg(n,e,t){const r=Kr(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=th(e),{host:c,port:h}=Ag(e),f=h===null?"":`:${h}`;r.config.emulator={url:`${o}//${c}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Cg()}function th(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ag(n){const e=th(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:El(r.substr(o.length+1))}}else{const[o,c]=r.split(":");return{host:o,port:El(c)}}}function El(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Cg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,t){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function Pg(n,e){return An(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(n,e){return wo(n,"POST","/v1/accounts:signInWithPassword",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(n,e){return wo(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}async function kg(n,e){return wo(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Ga{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Li(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Li(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vl(e,t,"signInWithPassword",Sg);case"emailLink":return Rg(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vl(e,r,"signUpPassword",Pg);case"emailLink":return kg(e,{idToken:t,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(n,e){return wo(n,"POST","/v1/accounts:signInWithIdp",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="http://localhost";class Yn extends Ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=$a(t,["providerId","signInMethod"]);if(!r||!i)return null;const c=new Yn(r,i);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Lr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Lr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Lr(e,t)}buildRequest(){const e={requestUri:Dg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$i(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vg(n){const e=Ei(Ii(n)).link,t=e?Ei(Ii(e)).deep_link_id:null,r=Ei(Ii(n)).deep_link_id;return(r?Ei(Ii(r)).link:null)||r||t||e||n}class Qa{constructor(e){var t,r,i,o,c,h;const f=Ei(Ii(e)),g=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,P=Og((i=f.mode)!==null&&i!==void 0?i:null);z(g&&y&&P,"argument-error"),this.apiKey=g,this.operation=P,this.code=y,this.continueUrl=(o=f.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(c=f.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=Vg(e);try{return new Qa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.providerId=Gr.PROVIDER_ID}static credential(e,t){return Li._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Qa.parseLink(t);return z(r,"argument-error"),Li._fromEmailAndCode(e,r.code,r.tenantId)}}Gr.PROVIDER_ID="password";Gr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends nh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends zi{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return pn.credential(t,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends zi{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends zi{constructor(){super("twitter.com")}static credential(e,t){return Yn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gn.credential(t,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Kt._fromIdTokenResponse(e,r,i),c=Il(r);return new Fr({user:o,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Il(r);return new Fr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Il(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends vt{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,to.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new to(e,t,r,i)}}function rh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?to._fromErrorAndOperation(n,o,e,r):o})}async function Ng(n,e,t=!1){const r=await xi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(n,e,t=!1){const{auth:r}=n;if(zt(r.app))return Promise.reject(vn(r));const i="reauthenticate";try{const o=await xi(n,rh(r,i,e,n),t);z(o.idToken,r,"internal-error");const c=Wa(o.idToken);z(c,r,"internal-error");const{sub:h}=c;return z(n.uid===h,r,"user-mismatch"),Fr._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(n,e,t=!1){if(zt(n.app))return Promise.reject(vn(n));const r="signIn",i=await rh(n,r,e),o=await Fr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function Lg(n,e){return ih(Kr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(n){const e=Kr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function AI(n,e,t){return zt(n.app)?Promise.reject(vn(n)):Lg(Ne(n),Gr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Mg(n),r})}function Fg(n,e,t,r){return Ne(n).onIdTokenChanged(e,t,r)}function Ug(n,e,t){return Ne(n).beforeAuthStateChanged(e,t)}function CI(n){return Ne(n).signOut()}const no="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(no,"1"),this.storage.removeItem(no),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){const n=qe();return Ka(n)||yo(n)}const jg=1e3,qg=10;class oh extends sh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bg()&&lg(),this.fallbackToPolling=Ju(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,f)=>{this.notifyListeners(c,f)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(r);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},o=this.storage.getItem(r);cg()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oh.type="LOCAL";const $g=oh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends sh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ah.type="SESSION";const ch=ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new vo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const h=Array.from(c).map(async g=>g(t.origin,o)),f=await Hg(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,c;return new Promise((h,f)=>{const g=Ya("",20);i.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(P){const R=P;if(R.data.eventId===g)switch(R.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(R.data.response);break;default:clearTimeout(y),clearTimeout(o),f(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function Wg(n){St().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function Kg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Qg(){return lh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="firebaseLocalStorageDb",Yg=1,ro="firebaseLocalStorage",hh="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Eo(n,e){return n.transaction([ro],e?"readwrite":"readonly").objectStore(ro)}function Xg(){const n=indexedDB.deleteDatabase(uh);return new Wi(n).toPromise()}function Ca(){const n=indexedDB.open(uh,Yg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ro,{keyPath:hh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ro)?e(r):(r.close(),await Xg(),e(await Ca()))})})}async function Tl(n,e,t){const r=Eo(n,!0).put({[hh]:e,value:t});return new Wi(r).toPromise()}async function Jg(n,e){const t=Eo(n,!1).get(e),r=await new Wi(t).toPromise();return r===void 0?null:r.value}function bl(n,e){const t=Eo(n,!0).delete(e);return new Wi(t).toPromise()}const Zg=800,ew=3;class dh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ca(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ew)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vo._getInstance(Qg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Kg(),!this.activeServiceWorker)return;this.sender=new zg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ca();return await Tl(e,no,"1"),await bl(e,no),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Jg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Eo(i,!1).getAll();return new Wi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dh.type="LOCAL";const tw=dh;new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n,e){return e?Gt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rw(n){return ih(n.auth,new Xa(n),n.bypassAuthState)}function iw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),xg(t,new Xa(n),n.bypassAuthState)}async function sw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),Ng(t,new Xa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:c,type:h}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rw;case"linkViaPopup":case"linkViaRedirect":return sw;case"reauthViaPopup":case"reauthViaRedirect":return iw;default:_t(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=new Hi(2e3,1e4);class Vr extends fh{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=Ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ow.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="pendingRedirect",Hs=new Map;class cw extends fh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hs.get(this.auth._key());if(!e){try{const r=await lw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hs.set(this.auth._key(),e)}return this.bypassAuthState||Hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lw(n,e){const t=dw(e),r=hw(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function uw(n,e){Hs.set(n._key(),e)}function hw(n){return Gt(n._redirectPersistence)}function dw(n){return $s(aw,n.config.apiKey,n.name)}async function fw(n,e,t=!1){if(zt(n.app))return Promise.reject(vn(n));const r=Kr(n),i=nw(r,e),c=await new cw(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=10*60*1e3;class mw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ph(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Pt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Al(e))}saveEventToCache(e){this.cachedEventUids.add(Al(e)),this.lastProcessedEventTime=Date.now()}}function Al(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ph({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ph(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(n,e={}){return An(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_w=/^https?/;async function vw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ww(n);for(const t of e)try{if(Ew(t))return}catch{}_t(n,"unauthorized-domain")}function Ew(n){const e=ba(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!_w.test(t))return!1;if(yw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=new Hi(3e4,6e4);function Cl(){const n=St().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Tw(n){return new Promise((e,t)=>{var r,i,o;function c(){Cl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cl(),t(Pt(n,"network-request-failed"))},timeout:Iw.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=St().gapi)===null||o===void 0)&&o.load)c();else{const h=yg("iframefcb");return St()[h]=()=>{gapi.load?c():t(Pt(n,"network-request-failed"))},eh(`${wg()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw zs=null,e})}let zs=null;function bw(n){return zs=zs||Tw(n),zs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=new Hi(5e3,15e3),Cw="__/auth/iframe",Pw="emulator/auth/iframe",Sw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kw(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?za(e,Pw):`https://${n.config.authDomain}/${Cw}`,r={apiKey:e.apiKey,appName:n.name,v:Wr},i=Rw.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${$i(r).slice(1)}`}async function Dw(n){const e=await bw(n),t=St().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:kw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sw,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const c=Pt(n,"network-request-failed"),h=St().setTimeout(()=>{o(c)},Aw.get());function f(){St().clearTimeout(h),i(r)}r.ping(f).then(f,()=>{o(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vw=500,Nw=600,xw="_blank",Lw="http://localhost";class Pl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mw(n,e,t,r=Vw,i=Nw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},Ow),{width:r.toString(),height:i.toString(),top:o,left:c}),g=qe().toLowerCase();t&&(h=Ku(g)?xw:t),Wu(g)&&(e=e||Lw,f.scrollbars="yes");const y=Object.entries(f).reduce((R,[V,U])=>`${R}${V}=${U},`,"");if(ag(g)&&h!=="_self")return Fw(e||"",h),new Pl(null);const P=window.open(e||"",h,y);z(P,n,"popup-blocked");try{P.focus()}catch{}return new Pl(P)}function Fw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="__/auth/handler",Bw="emulator/auth/handler",jw=encodeURIComponent("fac");async function Sl(n,e,t,r,i,o){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Wr,eventId:i};if(e instanceof nh){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Rp(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,P]of Object.entries({}))c[y]=P}if(e instanceof zi){const y=e.getScopes().filter(P=>P!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),g=f?`#${jw}=${encodeURIComponent(f)}`:"";return`${qw(n)}?${$i(h).slice(1)}${g}`}function qw({config:n}){return n.emulator?za(n,Bw):`https://${n.authDomain}/${Uw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="webStorageSupport";class $w{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ch,this._completeRedirectFn=fw,this._overrideRedirectResult=uw}async _openPopup(e,t,r,i){var o;Xt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=await Sl(e,t,r,ba(),i);return Mw(e,c,Ya())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Sl(e,t,r,ba(),i);return Wg(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Xt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Dw(e),r=new mw(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ha,{type:ha},i=>{var o;const c=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ha];c!==void 0&&t(!!c),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ju()||Ka()||yo()}}const Hw=$w;var Rl="@firebase/auth",kl="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kw(n){Dt(new yt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=r.options;z(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zu(n)},g=new pg(r,i,o,f);return Tg(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Dt(new yt("auth-internal",e=>{const t=Kr(e.getProvider("auth").getImmediate());return(r=>new zw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(Rl,kl,Ww(n)),ht(Rl,kl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=5*60,Qw=Pu("authIdTokenMaxAge")||Gw;let Dl=null;const Yw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Qw)return;const i=t==null?void 0:t.token;Dl!==i&&(Dl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xw(n=qa()){const e=ir(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ig(n,{popupRedirectResolver:Hw,persistence:[tw,$g,ch]}),r=Pu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const c=Yw(o.toString());Ug(t,c,()=>c(t.currentUser)),Fg(t,h=>c(h))}}const i=Au("auth");return i&&bg(t,`http://${i}`),t}function Jw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}mg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Pt("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Jw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Kw("Browser");var Zw="firebase",ey="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht(Zw,ey,"app");const mh="@firebase/installations",Ja="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=1e4,wh=`w:${Ja}`,yh="FIS_v2",ty="https://firebaseinstallations.googleapis.com/v1",ny=60*60*1e3,ry="installations",iy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xn=new rr(ry,iy,sy);function _h(n){return n instanceof vt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh({projectId:n}){return`${ty}/projects/${n}/installations`}function Eh(n){return{token:n.token,requestStatus:2,expiresIn:ay(n.expiresIn),creationTime:Date.now()}}async function Ih(n,e){const r=(await e.json()).error;return Xn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Th({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function oy(n,{refreshToken:e}){const t=Th(n);return t.append("Authorization",cy(e)),t}async function bh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ay(n){return Number(n.replace("s","000"))}function cy(n){return`${yh} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=vh(n),i=Th(n),o=e.getImmediate({optional:!0});if(o){const g=await o.getHeartbeatsHeader();g&&i.append("x-firebase-client",g)}const c={fid:t,authVersion:yh,appId:n.appId,sdkVersion:wh},h={method:"POST",headers:i,body:JSON.stringify(c)},f=await bh(()=>fetch(r,h));if(f.ok){const g=await f.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:Eh(g.authToken)}}else throw await Ih("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=/^[cdef][\w-]{21}$/,Pa="";function dy(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=fy(n);return hy.test(t)?t:Pa}catch{return Pa}}function fy(n){return uy(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Map;function Ph(n,e){const t=Io(n);Sh(t,e),py(t,e)}function Sh(n,e){const t=Ch.get(n);if(t)for(const r of t)r(e)}function py(n,e){const t=my();t&&t.postMessage({key:n,fid:e}),gy()}let Wn=null;function my(){return!Wn&&"BroadcastChannel"in self&&(Wn=new BroadcastChannel("[Firebase] FID Change"),Wn.onmessage=n=>{Sh(n.data.key,n.data.fid)}),Wn}function gy(){Ch.size===0&&Wn&&(Wn.close(),Wn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="firebase-installations-database",yy=1,Jn="firebase-installations-store";let da=null;function Za(){return da||(da=Vu(wy,yy,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Jn)}}})),da}async function io(n,e){const t=Io(n),i=(await Za()).transaction(Jn,"readwrite"),o=i.objectStore(Jn),c=await o.get(t);return await o.put(e,t),await i.done,(!c||c.fid!==e.fid)&&Ph(n,e.fid),e}async function Rh(n){const e=Io(n),r=(await Za()).transaction(Jn,"readwrite");await r.objectStore(Jn).delete(e),await r.done}async function To(n,e){const t=Io(n),i=(await Za()).transaction(Jn,"readwrite"),o=i.objectStore(Jn),c=await o.get(t),h=e(c);return h===void 0?await o.delete(t):await o.put(h,t),await i.done,h&&(!c||c.fid!==h.fid)&&Ph(n,h.fid),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(n){let e;const t=await To(n.appConfig,r=>{const i=_y(r),o=vy(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===Pa?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function _y(n){const e=n||{fid:dy(),registrationStatus:0};return kh(e)}function vy(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Ey(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Iy(n)}:{installationEntry:e}}async function Ey(n,e){try{const t=await ly(n,e);return io(n.appConfig,t)}catch(t){throw _h(t)&&t.customData.serverCode===409?await Rh(n.appConfig):await io(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Iy(n){let e=await Ol(n.appConfig);for(;e.registrationStatus===1;)await Ah(100),e=await Ol(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await ec(n);return r||t}return e}function Ol(n){return To(n,e=>{if(!e)throw Xn.create("installation-not-found");return kh(e)})}function kh(n){return Ty(n)?{fid:n.fid,registrationStatus:0}:n}function Ty(n){return n.registrationStatus===1&&n.registrationTime+gh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by({appConfig:n,heartbeatServiceProvider:e},t){const r=Ay(n,t),i=oy(n,t),o=e.getImmediate({optional:!0});if(o){const g=await o.getHeartbeatsHeader();g&&i.append("x-firebase-client",g)}const c={installation:{sdkVersion:wh,appId:n.appId}},h={method:"POST",headers:i,body:JSON.stringify(c)},f=await bh(()=>fetch(r,h));if(f.ok){const g=await f.json();return Eh(g)}else throw await Ih("Generate Auth Token",f)}function Ay(n,{fid:e}){return`${vh(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(n,e=!1){let t;const r=await To(n.appConfig,o=>{if(!Dh(o))throw Xn.create("not-registered");const c=o.authToken;if(!e&&Sy(c))return o;if(c.requestStatus===1)return t=Cy(n,e),o;{if(!navigator.onLine)throw Xn.create("app-offline");const h=ky(o);return t=Py(n,h),h}});return t?await t:r.authToken}async function Cy(n,e){let t=await Vl(n.appConfig);for(;t.authToken.requestStatus===1;)await Ah(100),t=await Vl(n.appConfig);const r=t.authToken;return r.requestStatus===0?tc(n,e):r}function Vl(n){return To(n,e=>{if(!Dh(e))throw Xn.create("not-registered");const t=e.authToken;return Dy(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Py(n,e){try{const t=await by(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await io(n.appConfig,r),t}catch(t){if(_h(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Rh(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await io(n.appConfig,r)}throw t}}function Dh(n){return n!==void 0&&n.registrationStatus===2}function Sy(n){return n.requestStatus===2&&!Ry(n)}function Ry(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ny}function ky(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Dy(n){return n.requestStatus===1&&n.requestTime+gh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(n){const e=n,{installationEntry:t,registrationPromise:r}=await ec(e);return r?r.catch(console.error):tc(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(n,e=!1){const t=n;return await Ny(t),(await tc(t,e)).token}async function Ny(n){const{registrationPromise:e}=await ec(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){if(!n||!n.options)throw fa("App Configuration");if(!n.name)throw fa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw fa(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function fa(n){return Xn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="installations",Ly="installations-internal",My=n=>{const e=n.getProvider("app").getImmediate(),t=xy(e),r=ir(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Fy=n=>{const e=n.getProvider("app").getImmediate(),t=ir(e,Oh).getImmediate();return{getId:()=>Oy(t),getToken:i=>Vy(t,i)}};function Uy(){Dt(new yt(Oh,My,"PUBLIC")),Dt(new yt(Ly,Fy,"PRIVATE"))}Uy();ht(mh,Ja);ht(mh,Ja,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="analytics",By="firebase_id",jy="origin",qy=60*1e3,$y="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new go("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},st=new rr("analytics","Analytics",Hy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(n){if(!n.startsWith(nc)){const e=st.create("invalid-gtag-resource",{gtagURL:n});return et.warn(e.message),""}return n}function Vh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Wy(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Ky(n,e){const t=Wy("firebase-js-sdk-policy",{createScriptURL:zy}),r=document.createElement("script"),i=`${nc}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Gy(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Qy(n,e,t,r,i,o){const c=r[i];try{if(c)await e[c];else{const f=(await Vh(t)).find(g=>g.measurementId===i);f&&await e[f.appId]}}catch(h){et.error(h)}n("config",i,o)}async function Yy(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let c=i.send_to;Array.isArray(c)||(c=[c]);const h=await Vh(t);for(const f of c){const g=h.find(P=>P.measurementId===f),y=g&&e[g.appId];if(y)o.push(y);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){et.error(o)}}function Xy(n,e,t,r){async function i(o,...c){try{if(o==="event"){const[h,f]=c;await Yy(n,e,t,h,f)}else if(o==="config"){const[h,f]=c;await Qy(n,e,t,r,h,f)}else if(o==="consent"){const[h,f]=c;n("consent",h,f)}else if(o==="get"){const[h,f,g]=c;n("get",h,f,g)}else if(o==="set"){const[h]=c;n("set",h)}else n(o,...c)}catch(h){et.error(h)}}return i}function Jy(n,e,t,r,i){let o=function(...c){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Xy(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function Zy(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(nc)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=30,t_=1e3;class n_{constructor(e={},t=t_){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Nh=new n_;function r_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function i_(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:r_(r)},o=$y.replace("{app-id}",t),c=await fetch(o,i);if(c.status!==200&&c.status!==304){let h="";try{const f=await c.json();!((e=f.error)===null||e===void 0)&&e.message&&(h=f.error.message)}catch{}throw st.create("config-fetch-failed",{httpStatus:c.status,responseMessage:h})}return c.json()}async function s_(n,e=Nh,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw st.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw st.create("no-api-key")}const c=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new c_;return setTimeout(async()=>{h.abort()},qy),xh({appId:r,apiKey:i,measurementId:o},c,h,e)}async function xh(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Nh){var o;const{appId:c,measurementId:h}=n;try{await o_(r,e)}catch(f){if(h)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:c,measurementId:h};throw f}try{const f=await i_(n);return i.deleteThrottleMetadata(c),f}catch(f){const g=f;if(!a_(g)){if(i.deleteThrottleMetadata(c),h)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:h};throw f}const y=Number((o=g==null?void 0:g.customData)===null||o===void 0?void 0:o.httpStatus)===503?rl(t,i.intervalMillis,e_):rl(t,i.intervalMillis),P={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return i.setThrottleMetadata(c,P),et.debug(`Calling attemptFetch again in ${y} millis`),xh(n,P,r,i)}}function o_(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(st.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function a_(n){if(!(n instanceof vt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class c_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function l_(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,c=Object.assign(Object.assign({},r),{send_to:o});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(){if(Ru())try{await ku()}catch(n){return et.warn(st.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return et.warn(st.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function h_(n,e,t,r,i,o,c){var h;const f=s_(n);f.then(V=>{t[V.measurementId]=V.appId,n.options.measurementId&&V.measurementId!==n.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${V.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(V=>et.error(V)),e.push(f);const g=u_().then(V=>{if(V)return r.getId()}),[y,P]=await Promise.all([f,g]);Zy(o)||Ky(o,y.measurementId),i("js",new Date);const R=(h=c==null?void 0:c.config)!==null&&h!==void 0?h:{};return R[jy]="firebase",R.update=!0,P!=null&&(R[By]=P),i("config",y.measurementId,R),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.app=e}_delete(){return delete Si[this.app.options.appId],Promise.resolve()}}let Si={},Nl=[];const xl={};let pa="dataLayer",f_="gtag",Ll,Lh,Ml=!1;function p_(){const n=[];if(Su()&&n.push("This is a browser extension environment."),Ap()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=st.create("invalid-analytics-context",{errorInfo:e});et.warn(t.message)}}function m_(n,e,t){p_();const r=n.options.appId;if(!r)throw st.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw st.create("no-api-key");if(Si[r]!=null)throw st.create("already-exists",{id:r});if(!Ml){Gy(pa);const{wrappedGtag:o,gtagCore:c}=Jy(Si,Nl,xl,pa,f_);Lh=o,Ll=c,Ml=!0}return Si[r]=h_(n,Nl,xl,e,Ll,pa,t),new d_(n)}function g_(n=qa()){n=Ne(n);const e=ir(n,so);return e.isInitialized()?e.getImmediate():w_(n)}function w_(n,e={}){const t=ir(n,so);if(t.isInitialized()){const i=t.getImmediate();if(Vi(e,t.getOptions()))return i;throw st.create("already-initialized")}return t.initialize({options:e})}function y_(n,e,t,r){n=Ne(n),l_(Lh,Si[n.app.options.appId],e,t,r).catch(i=>et.error(i))}const Fl="@firebase/analytics",Ul="0.10.4";function __(){Dt(new yt(so,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return m_(r,i,t)},"PUBLIC")),Dt(new yt("analytics-internal",n,"PRIVATE")),ht(Fl,Ul),ht(Fl,Ul,"esm2017");function n(e){try{const t=e.getProvider(so).getImmediate();return{logEvent:(r,i,o)=>y_(t,r,i,o)}}catch(t){throw st.create("interop-component-reg-failed",{reason:t})}}}__();var Bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gn,Mh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function I(){}I.prototype=v.prototype,b.D=v.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(T,A,S){for(var E=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)E[dt-2]=arguments[dt];return v.prototype[A].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,v,I){I||(I=0);var T=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)T[A]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(A=0;16>A;++A)T[A]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=b.g[0],I=b.g[1],A=b.g[2];var S=b.g[3],E=v+(S^I&(A^S))+T[0]+3614090360&4294967295;v=I+(E<<7&4294967295|E>>>25),E=S+(A^v&(I^A))+T[1]+3905402710&4294967295,S=v+(E<<12&4294967295|E>>>20),E=A+(I^S&(v^I))+T[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=I+(v^A&(S^v))+T[3]+3250441966&4294967295,I=A+(E<<22&4294967295|E>>>10),E=v+(S^I&(A^S))+T[4]+4118548399&4294967295,v=I+(E<<7&4294967295|E>>>25),E=S+(A^v&(I^A))+T[5]+1200080426&4294967295,S=v+(E<<12&4294967295|E>>>20),E=A+(I^S&(v^I))+T[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=I+(v^A&(S^v))+T[7]+4249261313&4294967295,I=A+(E<<22&4294967295|E>>>10),E=v+(S^I&(A^S))+T[8]+1770035416&4294967295,v=I+(E<<7&4294967295|E>>>25),E=S+(A^v&(I^A))+T[9]+2336552879&4294967295,S=v+(E<<12&4294967295|E>>>20),E=A+(I^S&(v^I))+T[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=I+(v^A&(S^v))+T[11]+2304563134&4294967295,I=A+(E<<22&4294967295|E>>>10),E=v+(S^I&(A^S))+T[12]+1804603682&4294967295,v=I+(E<<7&4294967295|E>>>25),E=S+(A^v&(I^A))+T[13]+4254626195&4294967295,S=v+(E<<12&4294967295|E>>>20),E=A+(I^S&(v^I))+T[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=I+(v^A&(S^v))+T[15]+1236535329&4294967295,I=A+(E<<22&4294967295|E>>>10),E=v+(A^S&(I^A))+T[1]+4129170786&4294967295,v=I+(E<<5&4294967295|E>>>27),E=S+(I^A&(v^I))+T[6]+3225465664&4294967295,S=v+(E<<9&4294967295|E>>>23),E=A+(v^I&(S^v))+T[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=I+(S^v&(A^S))+T[0]+3921069994&4294967295,I=A+(E<<20&4294967295|E>>>12),E=v+(A^S&(I^A))+T[5]+3593408605&4294967295,v=I+(E<<5&4294967295|E>>>27),E=S+(I^A&(v^I))+T[10]+38016083&4294967295,S=v+(E<<9&4294967295|E>>>23),E=A+(v^I&(S^v))+T[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=I+(S^v&(A^S))+T[4]+3889429448&4294967295,I=A+(E<<20&4294967295|E>>>12),E=v+(A^S&(I^A))+T[9]+568446438&4294967295,v=I+(E<<5&4294967295|E>>>27),E=S+(I^A&(v^I))+T[14]+3275163606&4294967295,S=v+(E<<9&4294967295|E>>>23),E=A+(v^I&(S^v))+T[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=I+(S^v&(A^S))+T[8]+1163531501&4294967295,I=A+(E<<20&4294967295|E>>>12),E=v+(A^S&(I^A))+T[13]+2850285829&4294967295,v=I+(E<<5&4294967295|E>>>27),E=S+(I^A&(v^I))+T[2]+4243563512&4294967295,S=v+(E<<9&4294967295|E>>>23),E=A+(v^I&(S^v))+T[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=I+(S^v&(A^S))+T[12]+2368359562&4294967295,I=A+(E<<20&4294967295|E>>>12),E=v+(I^A^S)+T[5]+4294588738&4294967295,v=I+(E<<4&4294967295|E>>>28),E=S+(v^I^A)+T[8]+2272392833&4294967295,S=v+(E<<11&4294967295|E>>>21),E=A+(S^v^I)+T[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=I+(A^S^v)+T[14]+4259657740&4294967295,I=A+(E<<23&4294967295|E>>>9),E=v+(I^A^S)+T[1]+2763975236&4294967295,v=I+(E<<4&4294967295|E>>>28),E=S+(v^I^A)+T[4]+1272893353&4294967295,S=v+(E<<11&4294967295|E>>>21),E=A+(S^v^I)+T[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=I+(A^S^v)+T[10]+3200236656&4294967295,I=A+(E<<23&4294967295|E>>>9),E=v+(I^A^S)+T[13]+681279174&4294967295,v=I+(E<<4&4294967295|E>>>28),E=S+(v^I^A)+T[0]+3936430074&4294967295,S=v+(E<<11&4294967295|E>>>21),E=A+(S^v^I)+T[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=I+(A^S^v)+T[6]+76029189&4294967295,I=A+(E<<23&4294967295|E>>>9),E=v+(I^A^S)+T[9]+3654602809&4294967295,v=I+(E<<4&4294967295|E>>>28),E=S+(v^I^A)+T[12]+3873151461&4294967295,S=v+(E<<11&4294967295|E>>>21),E=A+(S^v^I)+T[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=I+(A^S^v)+T[2]+3299628645&4294967295,I=A+(E<<23&4294967295|E>>>9),E=v+(A^(I|~S))+T[0]+4096336452&4294967295,v=I+(E<<6&4294967295|E>>>26),E=S+(I^(v|~A))+T[7]+1126891415&4294967295,S=v+(E<<10&4294967295|E>>>22),E=A+(v^(S|~I))+T[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=I+(S^(A|~v))+T[5]+4237533241&4294967295,I=A+(E<<21&4294967295|E>>>11),E=v+(A^(I|~S))+T[12]+1700485571&4294967295,v=I+(E<<6&4294967295|E>>>26),E=S+(I^(v|~A))+T[3]+2399980690&4294967295,S=v+(E<<10&4294967295|E>>>22),E=A+(v^(S|~I))+T[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=I+(S^(A|~v))+T[1]+2240044497&4294967295,I=A+(E<<21&4294967295|E>>>11),E=v+(A^(I|~S))+T[8]+1873313359&4294967295,v=I+(E<<6&4294967295|E>>>26),E=S+(I^(v|~A))+T[15]+4264355552&4294967295,S=v+(E<<10&4294967295|E>>>22),E=A+(v^(S|~I))+T[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=I+(S^(A|~v))+T[13]+1309151649&4294967295,I=A+(E<<21&4294967295|E>>>11),E=v+(A^(I|~S))+T[4]+4149444226&4294967295,v=I+(E<<6&4294967295|E>>>26),E=S+(I^(v|~A))+T[11]+3174756917&4294967295,S=v+(E<<10&4294967295|E>>>22),E=A+(v^(S|~I))+T[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=I+(S^(A|~v))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var I=v-this.blockSize,T=this.B,A=this.h,S=0;S<v;){if(A==0)for(;S<=I;)i(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<v;)if(T[A++]=b.charCodeAt(S++),A==this.blockSize){i(this,T),A=0;break}}else for(;S<v;)if(T[A++]=b[S++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var I=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=I&255,I/=256;for(this.u(b),b=Array(16),v=I=0;4>v;++v)for(var T=0;32>T;T+=8)b[I++]=this.g[v]>>>T&255;return b};function o(b,v){var I=h;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=v(b)}function c(b,v){this.h=v;for(var I=[],T=!0,A=b.length-1;0<=A;A--){var S=b[A]|0;T&&S==v||(I[A]=S,T=!1)}this.g=I}var h={};function f(b){return-128<=b&&128>b?o(b,function(v){return new c([v|0],0>v?-1:0)}):new c([b|0],0>b?-1:0)}function g(b){if(isNaN(b)||!isFinite(b))return P;if(0>b)return M(g(-b));for(var v=[],I=1,T=0;b>=I;T++)v[T]=b/I|0,I*=4294967296;return new c(v,0)}function y(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return M(y(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(v,8)),T=P,A=0;A<b.length;A+=8){var S=Math.min(8,b.length-A),E=parseInt(b.substring(A,A+S),v);8>S?(S=g(Math.pow(v,S)),T=T.j(S).add(g(E))):(T=T.j(I),T=T.add(g(E)))}return T}var P=f(0),R=f(1),V=f(16777216);n=c.prototype,n.m=function(){if(j(this))return-M(this).m();for(var b=0,v=1,I=0;I<this.g.length;I++){var T=this.i(I);b+=(0<=T?T:4294967296+T)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(U(this))return"0";if(j(this))return"-"+M(this).toString(b);for(var v=g(Math.pow(b,6)),I=this,T="";;){var A=fe(I,v).g;I=ee(I,A.j(v));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=A,U(I))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function U(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function j(b){return b.h==-1}n.l=function(b){return b=ee(this,b),j(b)?-1:U(b)?0:1};function M(b){for(var v=b.g.length,I=[],T=0;T<v;T++)I[T]=~b.g[T];return new c(I,~b.h).add(R)}n.abs=function(){return j(this)?M(this):this},n.add=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],T=0,A=0;A<=v;A++){var S=T+(this.i(A)&65535)+(b.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);T=E>>>16,S&=65535,E&=65535,I[A]=E<<16|S}return new c(I,I[I.length-1]&-2147483648?-1:0)};function ee(b,v){return b.add(M(v))}n.j=function(b){if(U(this)||U(b))return P;if(j(this))return j(b)?M(this).j(M(b)):M(M(this).j(b));if(j(b))return M(this.j(M(b)));if(0>this.l(V)&&0>b.l(V))return g(this.m()*b.m());for(var v=this.g.length+b.g.length,I=[],T=0;T<2*v;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<b.g.length;A++){var S=this.i(T)>>>16,E=this.i(T)&65535,dt=b.i(A)>>>16,Cn=b.i(A)&65535;I[2*T+2*A]+=E*Cn,J(I,2*T+2*A),I[2*T+2*A+1]+=S*Cn,J(I,2*T+2*A+1),I[2*T+2*A+1]+=E*dt,J(I,2*T+2*A+1),I[2*T+2*A+2]+=S*dt,J(I,2*T+2*A+2)}for(T=0;T<v;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=v;T<2*v;T++)I[T]=0;return new c(I,0)};function J(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function ie(b,v){this.g=b,this.h=v}function fe(b,v){if(U(v))throw Error("division by zero");if(U(b))return new ie(P,P);if(j(b))return v=fe(M(b),v),new ie(M(v.g),M(v.h));if(j(v))return v=fe(b,M(v)),new ie(M(v.g),v.h);if(30<b.g.length){if(j(b)||j(v))throw Error("slowDivide_ only works with positive integers.");for(var I=R,T=v;0>=T.l(b);)I=Je(I),T=Je(T);var A=me(I,1),S=me(T,1);for(T=me(T,2),I=me(I,2);!U(T);){var E=S.add(T);0>=E.l(b)&&(A=A.add(I),S=E),T=me(T,1),I=me(I,1)}return v=ee(b,A.j(v)),new ie(A,v)}for(A=P;0<=b.l(v);){for(I=Math.max(1,Math.floor(b.m()/v.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=g(I),E=S.j(v);j(E)||0<E.l(b);)I-=T,S=g(I),E=S.j(v);U(S)&&(S=R),A=A.add(S),b=ee(b,E)}return new ie(A,b)}n.A=function(b){return fe(this,b).h},n.and=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],T=0;T<v;T++)I[T]=this.i(T)&b.i(T);return new c(I,this.h&b.h)},n.or=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],T=0;T<v;T++)I[T]=this.i(T)|b.i(T);return new c(I,this.h|b.h)},n.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],T=0;T<v;T++)I[T]=this.i(T)^b.i(T);return new c(I,this.h^b.h)};function Je(b){for(var v=b.g.length+1,I=[],T=0;T<v;T++)I[T]=b.i(T)<<1|b.i(T-1)>>>31;return new c(I,b.h)}function me(b,v){var I=v>>5;v%=32;for(var T=b.g.length-I,A=[],S=0;S<T;S++)A[S]=0<v?b.i(S+I)>>>v|b.i(S+I+1)<<32-v:b.i(S+I);return new c(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mh=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Gn=c}).apply(typeof Bl<"u"?Bl:typeof self<"u"?self:typeof window<"u"?window:{});var Fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fh,Uh,Ti,Bh,Ws,Sa,jh,qh,$h;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,p){return s==Array.prototype||s==Object.prototype||(s[u]=p.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fs=="object"&&Fs];for(var u=0;u<s.length;++u){var p=s[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(s,u){if(u)e:{var p=r;s=s.split(".");for(var w=0;w<s.length-1;w++){var C=s[w];if(!(C in p))break e;p=p[C]}s=s[s.length-1],w=p[s],u=u(w),u!=w&&u!=null&&e(p,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var p=0,w=!1,C={next:function(){if(!w&&p<s.length){var k=p++;return{value:u(k,s[k]),done:!1}}return w=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function f(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function g(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function y(s,u,p){return s.call.apply(s.bind,arguments)}function P(s,u,p){if(!s)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,w),s.apply(u,C)}}return function(){return s.apply(u,arguments)}}function R(s,u,p){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:P,R.apply(null,arguments)}function V(s,u){var p=Array.prototype.slice.call(arguments,1);return function(){var w=p.slice();return w.push.apply(w,arguments),s.apply(this,w)}}function U(s,u){function p(){}p.prototype=u.prototype,s.aa=u.prototype,s.prototype=new p,s.prototype.constructor=s,s.Qb=function(w,C,k){for(var L=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)L[oe-2]=arguments[oe];return u.prototype[C].apply(w,L)}}function j(s){const u=s.length;if(0<u){const p=Array(u);for(let w=0;w<u;w++)p[w]=s[w];return p}return[]}function M(s,u){for(let p=1;p<arguments.length;p++){const w=arguments[p];if(f(w)){const C=s.length||0,k=w.length||0;s.length=C+k;for(let L=0;L<k;L++)s[C+L]=w[L]}else s.push(w)}}class ee{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function J(s){return/^[\s\xa0]*$/.test(s)}function ie(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function fe(s){return fe[" "](s),s}fe[" "]=function(){};var Je=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function me(s,u,p){for(const w in s)u.call(p,s[w],w,s)}function b(s,u){for(const p in s)u.call(void 0,s[p],p,s)}function v(s){const u={};for(const p in s)u[p]=s[p];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(s,u){let p,w;for(let C=1;C<arguments.length;C++){w=arguments[C];for(p in w)s[p]=w[p];for(let k=0;k<I.length;k++)p=I[k],Object.prototype.hasOwnProperty.call(w,p)&&(s[p]=w[p])}}function A(s){var u=1;s=s.split(":");const p=[];for(;0<u&&s.length;)p.push(s.shift()),u--;return s.length&&p.push(s.join(":")),p}function S(s){h.setTimeout(()=>{throw s},0)}function E(){var s=G;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,p){const w=Cn.get();w.set(u,p),this.h?this.h.next=w:this.g=w,this.h=w}}var Cn=new ee(()=>new Ie,s=>s.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Nt,Pn=!1,G=new dt,Ji=()=>{const s=h.Promise.resolve(void 0);Nt=()=>{s.then(jo)}};var jo=()=>{for(var s;s=E();){try{s.h.call(s.g)}catch(p){S(p)}var u=Cn;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Pn=!1};function ft(){this.s=this.s,this.C=this.C}ft.prototype.s=!1,ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const p=()=>{};h.addEventListener("test",p,u),h.removeEventListener("test",p,u)}catch{}return s}();function Sn(s,u){if(ke.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var p=this.type=s.type,w=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(Je){e:{try{fe(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else p=="mouseover"?u=s.fromElement:p=="mouseout"&&(u=s.toElement);this.relatedTarget=u,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:lr[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Sn.aa.h.call(this)}}U(Sn,ke);var lr={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),Jr=0;function $e(s,u,p,w,C){this.listener=s,this.proxy=null,this.src=u,this.type=p,this.capture=!!w,this.ha=C,this.key=++Jr,this.da=this.fa=!1}function at(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function kn(s){this.src=s,this.g={},this.h=0}kn.prototype.add=function(s,u,p,w,C){var k=s.toString();s=this.g[k],s||(s=this.g[k]=[],this.h++);var L=ur(s,u,w,C);return-1<L?(u=s[L],p||(u.fa=!1)):(u=new $e(u,this.src,k,!!w,C),u.fa=p,s.push(u)),u};function Zr(s,u){var p=u.type;if(p in s.g){var w=s.g[p],C=Array.prototype.indexOf.call(w,u,void 0),k;(k=0<=C)&&Array.prototype.splice.call(w,C,1),k&&(at(u),s.g[p].length==0&&(delete s.g[p],s.h--))}}function ur(s,u,p,w){for(var C=0;C<s.length;++C){var k=s[C];if(!k.da&&k.listener==u&&k.capture==!!p&&k.ha==w)return C}return-1}var en="closure_lm_"+(1e6*Math.random()|0),Dn={};function tn(s,u,p,w,C){if(Array.isArray(u)){for(var k=0;k<u.length;k++)tn(s,u[k],p,w,C);return null}return p=dr(p),s&&s[Rn]?s.K(u,p,g(w)?!!w.capture:!!w,C):ei(s,u,p,!1,w,C)}function ei(s,u,p,w,C,k){if(!u)throw Error("Invalid event type");var L=g(C)?!!C.capture:!!C,oe=ti(s);if(oe||(s[en]=oe=new kn(s)),p=oe.add(u,p,w,L,k),p.proxy)return p;if(w=He(),p.proxy=w,w.src=s,w.listener=p,s.addEventListener)D||(C=L),C===void 0&&(C=!1),s.addEventListener(u.toString(),w,C);else if(s.attachEvent)s.attachEvent(se(u.toString()),w);else if(s.addListener&&s.removeListener)s.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return p}function He(){function s(p){return u.call(s.src,s.listener,p)}const u=On;return s}function nn(s,u,p,w,C){if(Array.isArray(u))for(var k=0;k<u.length;k++)nn(s,u[k],p,w,C);else w=g(w)?!!w.capture:!!w,p=dr(p),s&&s[Rn]?(s=s.i,u=String(u).toString(),u in s.g&&(k=s.g[u],p=ur(k,p,w,C),-1<p&&(at(k[p]),Array.prototype.splice.call(k,p,1),k.length==0&&(delete s.g[u],s.h--)))):s&&(s=ti(s))&&(u=s.g[u.toString()],s=-1,u&&(s=ur(u,p,w,C)),(p=-1<s?u[s]:null)&&xe(p))}function xe(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Rn])Zr(u.i,s);else{var p=s.type,w=s.proxy;u.removeEventListener?u.removeEventListener(p,w,s.capture):u.detachEvent?u.detachEvent(se(p),w):u.addListener&&u.removeListener&&u.removeListener(w),(p=ti(u))?(Zr(p,s),p.h==0&&(p.src=null,u[en]=null)):at(s)}}}function se(s){return s in Dn?Dn[s]:Dn[s]="on"+s}function On(s,u){if(s.da)s=!0;else{u=new Sn(u,this);var p=s.listener,w=s.ha||s.src;s.fa&&xe(s),s=p.call(w,u)}return s}function ti(s){return s=s[en],s instanceof kn?s:null}var hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function dr(s){return typeof s=="function"?s:(s[hr]||(s[hr]=function(u){return s.handleEvent(u)}),s[hr])}function Te(){ft.call(this),this.i=new kn(this),this.M=this,this.F=null}U(Te,ft),Te.prototype[Rn]=!0,Te.prototype.removeEventListener=function(s,u,p,w){nn(this,s,u,p,w)};function be(s,u){var p,w=s.F;if(w)for(p=[];w;w=w.F)p.push(w);if(s=s.M,w=u.type||u,typeof u=="string")u=new ke(u,s);else if(u instanceof ke)u.target=u.target||s;else{var C=u;u=new ke(w,s),T(u,C)}if(C=!0,p)for(var k=p.length-1;0<=k;k--){var L=u.g=p[k];C=xt(L,w,!0,u)&&C}if(L=u.g=s,C=xt(L,w,!0,u)&&C,C=xt(L,w,!1,u)&&C,p)for(k=0;k<p.length;k++)L=u.g=p[k],C=xt(L,w,!1,u)&&C}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var p=s.g[u],w=0;w<p.length;w++)at(p[w]);delete s.g[u],s.h--}}this.F=null},Te.prototype.K=function(s,u,p,w){return this.i.add(String(s),u,!1,p,w)},Te.prototype.L=function(s,u,p,w){return this.i.add(String(s),u,!0,p,w)};function xt(s,u,p,w){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,k=0;k<u.length;++k){var L=u[k];if(L&&!L.da&&L.capture==p){var oe=L.listener,Ce=L.ha||L.src;L.fa&&Zr(s.i,L),C=oe.call(Ce,w)!==!1&&C}}return C&&!w.defaultPrevented}function tt(s,u,p){if(typeof s=="function")p&&(s=R(s,p));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:h.setTimeout(s,u||0)}function Lt(s){s.g=tt(()=>{s.g=null,s.i&&(s.i=!1,Lt(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class Mt extends ft{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Lt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vn(s){ft.call(this),this.h=s,this.g={}}U(Vn,ft);var Ft=[];function rn(s){me(s.g,function(u,p){this.g.hasOwnProperty(p)&&xe(u)},s),s.g={}}Vn.prototype.N=function(){Vn.aa.N.call(this),rn(this)},Vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fr=h.JSON.stringify,pr=h.JSON.parse,ni=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function ri(){}ri.prototype.h=null;function mr(s){return s.h||(s.h=s.i())}function gr(){}var Et={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ii(){ke.call(this,"d")}U(ii,ke);function Le(){ke.call(this,"c")}U(Le,ke);var Me={},Zi=null;function Fe(){return Zi=Zi||new Te}Me.La="serverreachability";function Nn(s){ke.call(this,Me.La,s)}U(Nn,ke);function sn(s){const u=Fe();be(u,new Nn(u))}Me.STAT_EVENT="statevent";function si(s,u){ke.call(this,Me.STAT_EVENT,s),this.stat=u}U(si,ke);function H(s){const u=Fe();be(u,new si(u,s))}Me.Ma="timingevent";function nt(s,u){ke.call(this,Me.Ma,s),this.size=u}U(nt,ke);function Ze(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},u)}function rt(){this.g=!0}rt.prototype.xa=function(){this.g=!1};function _e(s,u,p,w,C,k){s.info(function(){if(s.g)if(k)for(var L="",oe=k.split("&"),Ce=0;Ce<oe.length;Ce++){var ne=oe[Ce].split("=");if(1<ne.length){var Oe=ne[0];ne=ne[1];var Pe=Oe.split("_");L=2<=Pe.length&&Pe[1]=="type"?L+(Oe+"="+ne+"&"):L+(Oe+"=redacted&")}}else L=null;else L=k;return"XMLHTTP REQ ("+w+") [attempt "+C+"]: "+u+`
`+p+`
`+L})}function De(s,u,p,w,C,k,L){s.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+C+"]: "+u+`
`+p+`
`+k+" "+L})}function It(s,u,p,w){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+xn(s,p)+(w?" "+w:"")})}function es(s,u){s.info(function(){return"TIMEOUT: "+u})}rt.prototype.info=function(){};function xn(s,u){if(!s.g)return u;if(!u)return null;try{var p=JSON.parse(u);if(p){for(s=0;s<p.length;s++)if(Array.isArray(p[s])){var w=p[s];if(!(2>w.length)){var C=w[1];if(Array.isArray(C)&&!(1>C.length)){var k=C[0];if(k!="noop"&&k!="stop"&&k!="close")for(var L=1;L<C.length;L++)C[L]=""}}}}return fr(p)}catch{return u}}var Ae={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ts={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wr;function Ln(){}U(Ln,ri),Ln.prototype.g=function(){return new XMLHttpRequest},Ln.prototype.i=function(){return{}},wr=new Ln;function ct(s,u,p,w){this.j=s,this.i=u,this.l=p,this.R=w||1,this.U=new Vn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ns}function ns(){this.i=null,this.g="",this.h=!1}var oi={},ai={};function ci(s,u,p){s.L=1,s.v=Fn(pt(u)),s.m=p,s.P=!0,Tt(s,null)}function Tt(s,u){s.F=Date.now(),yr(s),s.A=pt(s.v);var p=s.A,w=s.R;Array.isArray(w)||(w=[String(w)]),ps(p.i,"t",w),s.C=0,p=s.j.J,s.h=new ns,s.g=yi(s.j,p?u:null,!s.m),0<s.O&&(s.M=new Mt(R(s.Y,s,s.g),s.O)),u=s.U,p=s.g,w=s.ca;var C="readystatechange";Array.isArray(C)||(C&&(Ft[0]=C.toString()),C=Ft);for(var k=0;k<C.length;k++){var L=tn(p,C[k],w||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=s.H?v(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),sn(),_e(s.i,s.u,s.A,s.l,s.R,s.m)}ct.prototype.ca=function(s){s=s.target;const u=this.M;u&&ze(s)==3?u.j():this.Y(s)},ct.prototype.Y=function(s){try{if(s==this.g)e:{const Pe=ze(this.g);var u=this.g.Ba();const un=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||Is(this.g)))){this.J||Pe!=4||u==7||(u==8||0>=un?sn(3):sn(2)),li(this);var p=this.g.Z();this.X=p;t:if(rs(this)){var w=Is(this.g);s="";var C=w.length,k=ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),Ut(this);var L="";break t}this.h.i=new h.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,s+=this.h.i.decode(w[u],{stream:!(k&&u==C-1)});w.length=0,this.h.g+=s,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=p==200,De(this.i,this.u,this.A,this.l,this.R,Pe,p),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Ce=this.g;if((oe=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(oe)){var ne=oe;break t}}ne=null}if(p=ne)It(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ui(this,p);else{this.o=!1,this.s=3,H(12),Bt(this),Ut(this);break e}}if(this.P){p=!0;let Xe;for(;!this.J&&this.C<L.length;)if(Xe=qo(this,L),Xe==ai){Pe==4&&(this.s=4,H(14),p=!1),It(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==oi){this.s=4,H(15),It(this.i,this.l,L,"[Invalid Chunk]"),p=!1;break}else It(this.i,this.l,Xe,null),ui(this,Xe);if(rs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||L.length!=0||this.h.h||(this.s=1,H(16),p=!1),this.o=this.o&&p,!p)It(this.i,this.l,L,"[Invalid Chunked Response]"),Bt(this),Ut(this);else if(0<L.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),gi(Oe),Oe.M=!0,H(11))}}else It(this.i,this.l,L,null),ui(this,L);Pe==4&&Bt(this),this.o&&!this.J&&(Pe==4?wi(this.j,this):(this.o=!1,yr(this)))}else Ts(this.g),p==400&&0<L.indexOf("Unknown SID")?(this.s=3,H(12)):(this.s=0,H(13)),Bt(this),Ut(this)}}}catch{}finally{}};function rs(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function qo(s,u){var p=s.C,w=u.indexOf(`
`,p);return w==-1?ai:(p=Number(u.substring(p,w)),isNaN(p)?oi:(w+=1,w+p>u.length?ai:(u=u.slice(w,w+p),s.C=w+p,u)))}ct.prototype.cancel=function(){this.J=!0,Bt(this)};function yr(s){s.S=Date.now()+s.I,is(s,s.I)}function is(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ze(R(s.ba,s),u)}function li(s){s.B&&(h.clearTimeout(s.B),s.B=null)}ct.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(es(this.i,this.A),this.L!=2&&(sn(),H(17)),Bt(this),this.s=2,Ut(this)):is(this,this.S-s)};function Ut(s){s.j.G==0||s.J||wi(s.j,s)}function Bt(s){li(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,rn(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function ui(s,u){try{var p=s.j;if(p.G!=0&&(p.g==s||Mn(p.h,s))){if(!s.K&&Mn(p.h,s)&&p.G==3){try{var w=p.Da.g.parse(u)}catch{w=null}if(Array.isArray(w)&&w.length==3){var C=w;if(C[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<s.F)Cr(p),Tr(p);else break e;Ar(p),H(18)}}else p.za=C[1],0<p.za-p.T&&37500>C[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ze(R(p.Za,p),6e3));if(1>=as(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else $t(p,11)}else if((s.K||p.g==s)&&Cr(p),!J(u))for(C=p.Da.g.parse(u),u=0;u<C.length;u++){let ne=C[u];if(p.T=ne[0],ne=ne[1],p.G==2)if(ne[0]=="c"){p.K=ne[1],p.ia=ne[2];const Oe=ne[3];Oe!=null&&(p.la=Oe,p.j.info("VER="+p.la));const Pe=ne[4];Pe!=null&&(p.Aa=Pe,p.j.info("SVER="+p.Aa));const un=ne[5];un!=null&&typeof un=="number"&&0<un&&(w=1.5*un,p.L=w,p.j.info("backChannelRequestTimeoutMs_="+w)),w=p;const Xe=s.g;if(Xe){const $n=Xe.g?Xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($n){var k=w.h;k.g||$n.indexOf("spdy")==-1&&$n.indexOf("quic")==-1&&$n.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(hi(k,k.h),k.h=null))}if(w.D){const Sr=Xe.g?Xe.g.getResponseHeader("X-HTTP-Session-Id"):null;Sr&&(w.ya=Sr,ae(w.I,w.D,Sr))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-s.F,p.j.info("Handshake RTT: "+p.R+"ms")),w=p;var L=s;if(w.qa=ks(w,w.J?w.ia:null,w.W),L.K){cs(w.h,L);var oe=L,Ce=w.L;Ce&&(oe.I=Ce),oe.B&&(li(oe),yr(oe)),w.g=L}else Ss(w);0<p.i.length&&br(p)}else ne[0]!="stop"&&ne[0]!="close"||$t(p,7);else p.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?$t(p,7):mi(p):ne[0]!="noop"&&p.l&&p.l.ta(ne),p.v=0)}}sn(4)}catch{}}var jt=class{constructor(s,u){this.g=s,this.map=u}};function ss(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function os(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function as(s){return s.h?1:s.g?s.g.size:0}function Mn(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function hi(s,u){s.g?s.g.add(u):s.h=u}function cs(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}ss.prototype.cancel=function(){if(this.i=ls(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ls(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const p of s.g.values())u=u.concat(p.D);return u}return j(s.i)}function $o(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(f(s)){for(var u=[],p=s.length,w=0;w<p;w++)u.push(s[w]);return u}u=[],p=0;for(w in s)u[p++]=s[w];return u}function Ho(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(f(s)||typeof s=="string"){var u=[];s=s.length;for(var p=0;p<s;p++)u.push(p);return u}u=[],p=0;for(const w in s)u[p++]=w;return u}}}function le(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(f(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var p=Ho(s),w=$o(s),C=w.length,k=0;k<C;k++)u.call(void 0,w[k],p&&p[k],s)}var us=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zo(s,u){if(s){s=s.split("&");for(var p=0;p<s.length;p++){var w=s[p].indexOf("="),C=null;if(0<=w){var k=s[p].substring(0,w);C=s[p].substring(w+1)}else k=s[p];u(k,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function qt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof qt){this.h=s.h,_r(this,s.j),this.o=s.o,this.g=s.g,vr(this,s.s),this.l=s.l;var u=s.i,p=new Un;p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),Er(this,p),this.m=s.m}else s&&(u=String(s).match(us))?(this.h=!1,_r(this,u[1]||"",!0),this.o=bt(u[2]||""),this.g=bt(u[3]||"",!0),vr(this,u[4]),this.l=bt(u[5]||"",!0),Er(this,u[6]||"",!0),this.m=bt(u[7]||"")):(this.h=!1,this.i=new Un(null,this.h))}qt.prototype.toString=function(){var s=[],u=this.j;u&&s.push(ue(u,hs,!0),":");var p=this.g;return(p||u=="file")&&(s.push("//"),(u=this.o)&&s.push(ue(u,hs,!0),"@"),s.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&s.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&s.push("/"),s.push(ue(p,p.charAt(0)=="/"?ds:Ko,!0))),(p=this.i.toString())&&s.push("?",p),(p=this.m)&&s.push("#",ue(p,Qo)),s.join("")};function pt(s){return new qt(s)}function _r(s,u,p){s.j=p?bt(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function vr(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function Er(s,u,p){u instanceof Un?(s.i=u,Yo(s.i,s.h)):(p||(u=ue(u,Go)),s.i=new Un(u,s.h))}function ae(s,u,p){s.i.set(u,p)}function Fn(s){return ae(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function bt(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ue(s,u,p){return typeof s=="string"?(s=encodeURI(s).replace(u,Wo),p&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Wo(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var hs=/[#\/\?@]/g,Ko=/[#\?:]/g,ds=/[#\?]/g,Go=/[#\?@]/g,Qo=/#/g;function Un(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function mt(s){s.g||(s.g=new Map,s.h=0,s.i&&zo(s.i,function(u,p){s.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=Un.prototype,n.add=function(s,u){mt(this),this.i=null,s=on(this,s);var p=this.g.get(s);return p||this.g.set(s,p=[]),p.push(u),this.h+=1,this};function fs(s,u){mt(s),u=on(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function di(s,u){return mt(s),u=on(s,u),s.g.has(u)}n.forEach=function(s,u){mt(this),this.g.forEach(function(p,w){p.forEach(function(C){s.call(u,C,w,this)},this)},this)},n.na=function(){mt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),p=[];for(let w=0;w<u.length;w++){const C=s[w];for(let k=0;k<C.length;k++)p.push(u[w])}return p},n.V=function(s){mt(this);let u=[];if(typeof s=="string")di(this,s)&&(u=u.concat(this.g.get(on(this,s))));else{s=Array.from(this.g.values());for(let p=0;p<s.length;p++)u=u.concat(s[p])}return u},n.set=function(s,u){return mt(this),this.i=null,s=on(this,s),di(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function ps(s,u,p){fs(s,u),0<p.length&&(s.i=null,s.g.set(on(s,u),j(p)),s.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var p=0;p<u.length;p++){var w=u[p];const k=encodeURIComponent(String(w)),L=this.V(w);for(w=0;w<L.length;w++){var C=k;L[w]!==""&&(C+="="+encodeURIComponent(String(L[w]))),s.push(C)}}return this.i=s.join("&")};function on(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Yo(s,u){u&&!s.j&&(mt(s),s.i=null,s.g.forEach(function(p,w){var C=w.toLowerCase();w!=C&&(fs(this,w),ps(this,C,p))},s)),s.j=u}function Xo(s,u){const p=new rt;if(h.Image){const w=new Image;w.onload=V(At,p,"TestLoadImage: loaded",!0,u,w),w.onerror=V(At,p,"TestLoadImage: error",!1,u,w),w.onabort=V(At,p,"TestLoadImage: abort",!1,u,w),w.ontimeout=V(At,p,"TestLoadImage: timeout",!1,u,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=s}else u(!1)}function Jo(s,u){const p=new rt,w=new AbortController,C=setTimeout(()=>{w.abort(),At(p,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:w.signal}).then(k=>{clearTimeout(C),k.ok?At(p,"TestPingServer: ok",!0,u):At(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),At(p,"TestPingServer: error",!1,u)})}function At(s,u,p,w,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),w(p)}catch{}}function Zo(){this.g=new ni}function ms(s,u,p){const w=p||"";try{le(s,function(C,k){let L=C;g(C)&&(L=fr(C)),u.push(w+k+"="+encodeURIComponent(L))})}catch(C){throw u.push(w+"type="+encodeURIComponent("_badmap")),C}}function Bn(s){this.l=s.Ub||null,this.j=s.eb||!1}U(Bn,ri),Bn.prototype.g=function(){return new jn(this.l,this.j)},Bn.prototype.i=function(s){return function(){return s}}({});function jn(s,u){Te.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(jn,Te),n=jn.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,lt(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||h).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,lt(this)),this.g&&(this.readyState=3,lt(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gs(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function gs(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?qn(this):lt(this),this.readyState==3&&gs(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,qn(this))},n.Qa=function(s){this.g&&(this.response=s,qn(this))},n.ga=function(){this.g&&qn(this)};function qn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,lt(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,s.push(p[0]+": "+p[1]),p=u.next();return s.join(`\r
`)};function lt(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function fi(s){let u="";return me(s,function(p,w){u+=w,u+=":",u+=p,u+=`\r
`}),u}function pi(s,u,p){e:{for(w in p){var w=!1;break e}w=!0}w||(p=fi(p),typeof s=="string"?p!=null&&encodeURIComponent(String(p)):ae(s,u,p))}function he(s){Te.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(he,Te);var ws=/^https?$/i,ea=["POST","PUT"];n=he.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,p,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wr.g(),this.v=this.o?mr(this.o):mr(wr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(k){ys(this,k);return}if(s=p||"",p=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var C in w)p.set(C,w[C]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const k of w.keys())p.set(k,w.get(k));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(p.keys()).find(k=>k.toLowerCase()=="content-type"),C=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(ea,u,void 0))||w||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,L]of p)this.g.setRequestHeader(k,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Es(this),this.u=!0,this.g.send(s),this.u=!1}catch(k){ys(this,k)}};function ys(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,_s(s),Ir(s)}function _s(s){s.A||(s.A=!0,be(s,"complete"),be(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,be(this,"complete"),be(this,"abort"),Ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),he.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?vs(this):this.bb())},n.bb=function(){vs(this)};function vs(s){if(s.h&&typeof c<"u"&&(!s.v[1]||ze(s)!=4||s.Z()!=2)){if(s.u&&ze(s)==4)tt(s.Ea,0,s);else if(be(s,"readystatechange"),ze(s)==4){s.h=!1;try{const L=s.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var w;if(w=L===0){var C=String(s.D).match(us)[1]||null;!C&&h.self&&h.self.location&&(C=h.self.location.protocol.slice(0,-1)),w=!ws.test(C?C.toLowerCase():"")}p=w}if(p)be(s,"complete"),be(s,"success");else{s.m=6;try{var k=2<ze(s)?s.g.statusText:""}catch{k=""}s.l=k+" ["+s.Z()+"]",_s(s)}}finally{Ir(s)}}}}function Ir(s,u){if(s.g){Es(s);const p=s.g,w=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||be(s,"ready");try{p.onreadystatechange=w}catch{}}}function Es(s){s.I&&(h.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function ze(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<ze(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),pr(u)}};function Is(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ts(s){const u={};s=(s.g&&2<=ze(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<s.length;w++){if(J(s[w]))continue;var p=A(s[w]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const k=u[C]||[];u[C]=k,k.push(p)}b(u,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function an(s,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[s]||u}function bs(s){this.Aa=0,this.i=[],this.j=new rt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=an("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=an("baseRetryDelayMs",5e3,s),this.cb=an("retryDelaySeedMs",1e4,s),this.Wa=an("forwardChannelMaxRetries",2,s),this.wa=an("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ss(s&&s.concurrentRequestLimit),this.Da=new Zo,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=bs.prototype,n.la=8,n.G=1,n.connect=function(s,u,p,w){H(0),this.W=s,this.H=u||{},p&&w!==void 0&&(this.H.OSID=p,this.H.OAID=w),this.F=this.X,this.I=ks(this,null,this.W),br(this)};function mi(s){if(As(s),s.G==3){var u=s.U++,p=pt(s.I);if(ae(p,"SID",s.K),ae(p,"RID",u),ae(p,"TYPE","terminate"),ut(s,p),u=new ct(s,s.j,u),u.L=2,u.v=Fn(pt(p)),p=!1,h.navigator&&h.navigator.sendBeacon)try{p=h.navigator.sendBeacon(u.v.toString(),"")}catch{}!p&&h.Image&&(new Image().src=u.v,p=!0),p||(u.g=yi(u.j,null),u.g.ea(u.v)),u.F=Date.now(),yr(u)}Rs(s)}function Tr(s){s.g&&(gi(s),s.g.cancel(),s.g=null)}function As(s){Tr(s),s.u&&(h.clearTimeout(s.u),s.u=null),Cr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function br(s){if(!os(s.h)&&!s.s){s.s=!0;var u=s.Ga;Nt||Ji(),Pn||(Nt(),Pn=!0),G.add(u,s),s.B=0}}function ta(s,u){return as(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ze(R(s.Ga,s,u),cn(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const C=new ct(this,this.j,s);let k=this.o;if(this.S&&(k?(k=v(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(C.H=k,k=null),this.P)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var w=this.i[p];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(u+=w,4096<u){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=Ps(this,C,u),p=pt(this.I),ae(p,"RID",s),ae(p,"CVER",22),this.D&&ae(p,"X-HTTP-Session-Id",this.D),ut(this,p),k&&(this.O?u="headers="+encodeURIComponent(String(fi(k)))+"&"+u:this.m&&pi(p,this.m,k)),hi(this.h,C),this.Ua&&ae(p,"TYPE","init"),this.P?(ae(p,"$req",u),ae(p,"SID","null"),C.T=!0,ci(C,p,null)):ci(C,p,u),this.G=2}}else this.G==3&&(s?Cs(this,s):this.i.length==0||os(this.h)||Cs(this))};function Cs(s,u){var p;u?p=u.l:p=s.U++;const w=pt(s.I);ae(w,"SID",s.K),ae(w,"RID",p),ae(w,"AID",s.T),ut(s,w),s.m&&s.o&&pi(w,s.m,s.o),p=new ct(s,s.j,p,s.B+1),s.m===null&&(p.H=s.o),u&&(s.i=u.D.concat(s.i)),u=Ps(s,p,1e3),p.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),hi(s.h,p),ci(p,w,u)}function ut(s,u){s.H&&me(s.H,function(p,w){ae(u,w,p)}),s.l&&le({},function(p,w){ae(u,w,p)})}function Ps(s,u,p){p=Math.min(s.i.length,p);var w=s.l?R(s.l.Na,s.l,s):null;e:{var C=s.i;let k=-1;for(;;){const L=["count="+p];k==-1?0<p?(k=C[0].g,L.push("ofs="+k)):k=0:L.push("ofs="+k);let oe=!0;for(let Ce=0;Ce<p;Ce++){let ne=C[Ce].g;const Oe=C[Ce].map;if(ne-=k,0>ne)k=Math.max(0,C[Ce].g-100),oe=!1;else try{ms(Oe,L,"req"+ne+"_")}catch{w&&w(Oe)}}if(oe){w=L.join("&");break e}}}return s=s.i.splice(0,p),u.D=s,w}function Ss(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Nt||Ji(),Pn||(Nt(),Pn=!0),G.add(u,s),s.v=0}}function Ar(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ze(R(s.Fa,s),cn(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,gt(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ze(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,H(10),Tr(this),gt(this))};function gi(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function gt(s){s.g=new ct(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=pt(s.qa);ae(u,"RID","rpc"),ae(u,"SID",s.K),ae(u,"AID",s.T),ae(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&ae(u,"TO",s.ja),ae(u,"TYPE","xmlhttp"),ut(s,u),s.m&&s.o&&pi(u,s.m,s.o),s.L&&(s.g.I=s.L);var p=s.g;s=s.ia,p.L=1,p.v=Fn(pt(u)),p.m=null,p.P=!0,Tt(p,s)}n.Za=function(){this.C!=null&&(this.C=null,Tr(this),Ar(this),H(19))};function Cr(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function wi(s,u){var p=null;if(s.g==u){Cr(s),gi(s),s.g=null;var w=2}else if(Mn(s.h,u))p=u.D,cs(s.h,u),w=1;else return;if(s.G!=0){if(u.o)if(w==1){p=u.m?u.m.length:0,u=Date.now()-u.F;var C=s.B;w=Fe(),be(w,new nt(w,p)),br(s)}else Ss(s);else if(C=u.s,C==3||C==0&&0<u.X||!(w==1&&ta(s,u)||w==2&&Ar(s)))switch(p&&0<p.length&&(u=s.h,u.i=u.i.concat(p)),C){case 1:$t(s,5);break;case 4:$t(s,10);break;case 3:$t(s,6);break;default:$t(s,2)}}}function cn(s,u){let p=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(p*=2),p*u}function $t(s,u){if(s.j.info("Error code "+u),u==2){var p=R(s.fb,s),w=s.Xa;const C=!w;w=new qt(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||_r(w,"https"),Fn(w),C?Xo(w.toString(),p):Jo(w.toString(),p)}else H(2);s.G=0,s.l&&s.l.sa(u),Rs(s),As(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),H(2)):(this.j.info("Failed to ping google.com"),H(1))};function Rs(s){if(s.G=0,s.ka=[],s.l){const u=ls(s.h);(u.length!=0||s.i.length!=0)&&(M(s.ka,u),M(s.ka,s.i),s.h.i.length=0,j(s.i),s.i.length=0),s.l.ra()}}function ks(s,u,p){var w=p instanceof qt?pt(p):new qt(p);if(w.g!="")u&&(w.g=u+"."+w.g),vr(w,w.s);else{var C=h.location;w=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var k=new qt(null);w&&_r(k,w),u&&(k.g=u),C&&vr(k,C),p&&(k.l=p),w=k}return p=s.D,u=s.ya,p&&u&&ae(w,p,u),ae(w,"VER",s.la),ut(s,w),w}function yi(s,u,p){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new he(new Bn({eb:p})):new he(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ht(){}n=Ht.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Pr(){}Pr.prototype.g=function(s,u){return new Ye(s,u)};function Ye(s,u){Te.call(this),this.g=new bs(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!J(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!J(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new ln(this)}U(Ye,Te),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){mi(this.g)},Ye.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var p={};p.__data__=s,s=p}else this.u&&(p={},p.__data__=fr(s),s=p);u.i.push(new jt(u.Ya++,s)),u.G==3&&br(u)},Ye.prototype.N=function(){this.g.l=null,delete this.j,mi(this.g),delete this.g,Ye.aa.N.call(this)};function Ds(s){ii.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){e:{for(const p in u){s=p;break e}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}U(Ds,ii);function Os(){Le.call(this),this.status=1}U(Os,Le);function ln(s){this.g=s}U(ln,Ht),ln.prototype.ua=function(){be(this.g,"a")},ln.prototype.ta=function(s){be(this.g,new Ds(s))},ln.prototype.sa=function(s){be(this.g,new Os)},ln.prototype.ra=function(){be(this.g,"b")},Pr.prototype.createWebChannel=Pr.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,$h=function(){return new Pr},qh=function(){return Fe()},jh=Me,Sa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ae.NO_ERROR=0,Ae.TIMEOUT=8,Ae.HTTP_ERROR=6,Ws=Ae,ts.COMPLETE="complete",Bh=ts,gr.EventType=Et,Et.OPEN="a",Et.CLOSE="b",Et.ERROR="c",Et.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Ti=gr,Uh=Bn,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,Fh=he}).apply(typeof Fs<"u"?Fs:typeof self<"u"?self:typeof window<"u"?window:{});const jl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new go("@firebase/firestore");function vi(){return Zn.logLevel}function B(n,...e){if(Zn.logLevel<=te.DEBUG){const t=e.map(rc);Zn.debug(`Firestore (${Qr}): ${n}`,...t)}}function Jt(n,...e){if(Zn.logLevel<=te.ERROR){const t=e.map(rc);Zn.error(`Firestore (${Qr}): ${n}`,...t)}}function Ur(n,...e){if(Zn.logLevel<=te.WARN){const t=e.map(rc);Zn.warn(`Firestore (${Qr}): ${n}`,...t)}}function rc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+n;throw Jt(e),new Error(e)}function de(n,e){n||W()}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class v_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ke.UNAUTHENTICATED))}shutdown(){}}class E_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class I_{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,e.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const f=o;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},h=f=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new Hh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Ke(e)}}class T_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class b_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new T_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.R;return this.R=o.token,B("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(de(typeof t.token=="string"),this.R=t.token,new A_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=P_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function Br(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Re(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new Re(0,0))}static max(){return new K(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),c=t.get(i);if(o<c)return-1;if(o>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pe extends Mi{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const S_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Mi{construct(e,t,r){return new Be(e,t,r)}static isValidIdentifier(e){return S_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new q(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const h=e[i];if(h==="\\"){if(i+1===e.length)throw new q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else h==="`"?(c=!c,i++):h!=="."||c?(r+=h,i++):(o(),i++)}if(o(),c)throw new q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(t)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(pe.fromString(e))}static fromName(e){return new $(pe.fromString(e).popFirst(5))}static empty(){return new $(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new pe(e.slice()))}}function R_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new Re(t+1,0):new Re(t,r));return new In(i,$.empty(),e)}function k_(n){return new In(n.readTime,n.key,-1)}class In{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new In(K.min(),$.empty(),-1)}static max(){return new In(K.max(),$.empty(),-1)}}function D_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==O_)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let i=0,o=0,c=!1;e.forEach(h=>{++i,h.next(()=>{++o,c&&o===i&&t()},f=>r(f))}),c=!0,o===i&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(i=>i?x.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new x((r,i)=>{const o=e.length,c=new Array(o);let h=0;for(let f=0;f<o;f++){const g=f;t(e[g]).next(y=>{c[g]=y,++h,h===o&&r(c)},y=>i(y))}})}static doWhile(e,t){return new x((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function N_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ic.oe=-1;function bo(n){return n==null}function oo(n){return n===0&&1/n==-1/0}function x_(n){return typeof n=="number"&&Number.isInteger(n)&&!oo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function or(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Wh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Ue.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Us(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Us(this.root,e,this.comparator,!1)}getReverseIterator(){return new Us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Us(this.root,e,this.comparator,!0)}}class Us{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=o??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new Ue(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,t,r,i,o){return this}insert(e,t,r){return new Ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $l(this.data.getIterator())}getIteratorFrom(e){return new $l(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class $l{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new wt([])}unionWith(e){let t=new je(Be.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Br(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Kh("Invalid base64 string: "+o):o}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const L_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(n){if(de(!!n),typeof n=="string"){let e=0;const t=L_.exec(n);if(de(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function er(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function oc(n){const e=n.mapValue.fields.__previous_value__;return sc(e)?oc(e):e}function Fi(n){const e=Tn(n.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t,r,i,o,c,h,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=g}}class Ui{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ui&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sc(n)?4:F_(n)?9007199254740991:10:W()}function Ot(n,e){if(n===e)return!0;const t=tr(n);if(t!==tr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fi(n).isEqual(Fi(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=Tn(i.timestampValue),h=Tn(o.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return er(i.bytesValue).isEqual(er(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return Ee(i.geoPointValue.latitude)===Ee(o.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ee(i.integerValue)===Ee(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=Ee(i.doubleValue),h=Ee(o.doubleValue);return c===h?oo(c)===oo(h):isNaN(c)&&isNaN(h)}return!1}(n,e);case 9:return Br(n.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:return function(i,o){const c=i.mapValue.fields||{},h=o.mapValue.fields||{};if(ql(c)!==ql(h))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(h[f]===void 0||!Ot(c[f],h[f])))return!1;return!0}(n,e);default:return W()}}function Bi(n,e){return(n.values||[]).find(t=>Ot(t,e))!==void 0}function jr(n,e){if(n===e)return 0;const t=tr(n),r=tr(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(o,c){const h=Ee(o.integerValue||o.doubleValue),f=Ee(c.integerValue||c.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return Hl(n.timestampValue,e.timestampValue);case 4:return Hl(Fi(n),Fi(e));case 5:return ce(n.stringValue,e.stringValue);case 6:return function(o,c){const h=er(o),f=er(c);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(o,c){const h=o.split("/"),f=c.split("/");for(let g=0;g<h.length&&g<f.length;g++){const y=ce(h[g],f[g]);if(y!==0)return y}return ce(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,c){const h=ce(Ee(o.latitude),Ee(c.latitude));return h!==0?h:ce(Ee(o.longitude),Ee(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(o,c){const h=o.values||[],f=c.values||[];for(let g=0;g<h.length&&g<f.length;++g){const y=jr(h[g],f[g]);if(y)return y}return ce(h.length,f.length)}(n.arrayValue,e.arrayValue);case 10:return function(o,c){if(o===Bs.mapValue&&c===Bs.mapValue)return 0;if(o===Bs.mapValue)return 1;if(c===Bs.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),g=c.fields||{},y=Object.keys(g);f.sort(),y.sort();for(let P=0;P<f.length&&P<y.length;++P){const R=ce(f[P],y[P]);if(R!==0)return R;const V=jr(h[f[P]],g[y[P]]);if(V!==0)return V}return ce(f.length,y.length)}(n.mapValue,e.mapValue);default:throw W()}}function Hl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=Tn(n),r=Tn(e),i=ce(t.seconds,r.seconds);return i!==0?i:ce(t.nanos,r.nanos)}function qr(n){return Ra(n)}function Ra(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Tn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return er(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Ra(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const c of r)o?o=!1:i+=",",i+=`${c}:${Ra(t.fields[c])}`;return i+"}"}(n.mapValue):W()}function ka(n){return!!n&&"integerValue"in n}function ac(n){return!!n&&"arrayValue"in n}function zl(n){return!!n&&"nullValue"in n}function Wl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ks(n){return!!n&&"mapValue"in n}function Ri(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return or(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ri(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ri(n.arrayValue.values[t]);return e}return Object.assign({},n)}function F_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ks(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ri(t)}setAll(e){let t=Be.emptyPath(),r={},i=[];e.forEach((c,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,i),r={},i=[],t=h.popLast()}c?r[h.lastSegment()]=Ri(c):i.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Ks(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ks(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){or(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new it(Ri(this.value))}}function Gh(n){const e=[];return or(n.fields,(t,r)=>{const i=new Be([t]);if(Ks(r)){const o=Gh(r.mapValue).fields;if(o.length===0)e.push(i);else for(const c of o)e.push(i.child(c))}else e.push(i)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,r,i,o,c,h){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=h}static newInvalidDocument(e){return new Ge(e,0,K.min(),K.min(),K.min(),it.empty(),0)}static newFoundDocument(e,t,r,i){return new Ge(e,1,t,K.min(),r,i,0)}static newNoDocument(e,t){return new Ge(e,2,t,K.min(),K.min(),it.empty(),0)}static newUnknownDocument(e,t){return new Ge(e,3,t,K.min(),K.min(),it.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.position=e,this.inclusive=t}}function Kl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],c=n.position[i];if(o.field.isKeyField()?r=$.comparator($.fromName(c.referenceValue),t.key):r=jr(c,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ot(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t="asc"){this.field=e,this.dir=t}}function U_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{}class Se extends Qh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new j_(e,t,r):t==="array-contains"?new H_(e,r):t==="in"?new z_(e,r):t==="not-in"?new W_(e,r):t==="array-contains-any"?new K_(e,r):new Se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new q_(e,r):new $_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jr(t,this.value)):t!==null&&tr(this.value)===tr(t)&&this.matchesComparison(jr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends Qh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Vt(e,t)}matches(e){return Yh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yh(n){return n.op==="and"}function Xh(n){return B_(n)&&Yh(n)}function B_(n){for(const e of n.filters)if(e instanceof Vt)return!1;return!0}function Da(n){if(n instanceof Se)return n.field.canonicalString()+n.op.toString()+qr(n.value);if(Xh(n))return n.filters.map(e=>Da(e)).join(",");{const e=n.filters.map(t=>Da(t)).join(",");return`${n.op}(${e})`}}function Jh(n,e){return n instanceof Se?function(r,i){return i instanceof Se&&r.op===i.op&&r.field.isEqual(i.field)&&Ot(r.value,i.value)}(n,e):n instanceof Vt?function(r,i){return i instanceof Vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,c,h)=>o&&Jh(c,i.filters[h]),!0):!1}(n,e):void W()}function Zh(n){return n instanceof Se?function(t){return`${t.field.canonicalString()} ${t.op} ${qr(t.value)}`}(n):n instanceof Vt?function(t){return t.op.toString()+" {"+t.getFilters().map(Zh).join(" ,")+"}"}(n):"Filter"}class j_ extends Se{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class q_ extends Se{constructor(e,t){super(e,"in",t),this.keys=ed("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $_ extends Se{constructor(e,t){super(e,"not-in",t),this.keys=ed("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ed(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class H_ extends Se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ac(t)&&Bi(t.arrayValue,this.value)}}class z_ extends Se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bi(this.value.arrayValue,t)}}class W_ extends Se{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Bi(this.value.arrayValue,t)}}class K_ extends Se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ac(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Bi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t=null,r=[],i=[],o=null,c=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=h,this.ue=null}}function Ql(n,e=null,t=[],r=[],i=null,o=null,c=null){return new G_(n,e,t,r,i,o,c)}function cc(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Da(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>qr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>qr(r)).join(",")),e.ue=t}return e.ue}function lc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!U_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Gl(n.startAt,e.startAt)&&Gl(n.endAt,e.endAt)}function Oa(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t=null,r=[],i=[],o=null,c="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=h,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Q_(n,e,t,r,i,o,c,h){return new Ao(n,e,t,r,i,o,c,h)}function uc(n){return new Ao(n)}function Yl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Y_(n){return n.collectionGroup!==null}function ki(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new je(Be.comparator);return c.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(h=h.add(g.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new co(o,r))}),t.has(Be.keyField().canonicalString())||e.ce.push(new co(Be.keyField(),r))}return e.ce}function Rt(n){const e=Y(n);return e.le||(e.le=X_(e,ki(n))),e.le}function X_(n,e){if(n.limitType==="F")return Ql(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new co(i.field,o)});const t=n.endAt?new ao(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ao(n.startAt.position,n.startAt.inclusive):null;return Ql(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Va(n,e,t){return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Co(n,e){return lc(Rt(n),Rt(e))&&n.limitType===e.limitType}function td(n){return`${cc(Rt(n))}|lt:${n.limitType}`}function kr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Zh(i)).join(", ")}]`),bo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>qr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>qr(i)).join(",")),`Target(${r})`}(Rt(n))}; limitType=${n.limitType})`}function Po(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of ki(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(c,h,f){const g=Kl(c,h,f);return c.inclusive?g<=0:g<0}(r.startAt,ki(r),i)||r.endAt&&!function(c,h,f){const g=Kl(c,h,f);return c.inclusive?g>=0:g>0}(r.endAt,ki(r),i))}(n,e)}function J_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nd(n){return(e,t)=>{let r=!1;for(const i of ki(n)){const o=Z_(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Z_(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(o,c,h){const f=c.data.field(o),g=h.data.field(o);return f!==null&&g!==null?jr(f,g):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){or(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Wh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new ge($.comparator);function Zt(){return ev}const rd=new ge($.comparator);function bi(...n){let e=rd;for(const t of n)e=e.insert(t.key,t);return e}function id(n){let e=rd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Kn(){return Di()}function sd(){return Di()}function Di(){return new Yr(n=>n.toString(),(n,e)=>n.isEqual(e))}const tv=new ge($.comparator),nv=new je($.comparator);function Z(...n){let e=nv;for(const t of n)e=e.add(t);return e}const rv=new je(ce);function iv(){return rv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oo(e)?"-0":e}}function ad(n){return{integerValue:""+n}}function sv(n,e){return x_(e)?ad(e):od(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this._=void 0}}function ov(n,e,t){return n instanceof lo?function(i,o){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&sc(o)&&(o=oc(o)),o&&(c.fields.__previous_value__=o),{mapValue:c}}(t,e):n instanceof ji?ld(n,e):n instanceof qi?ud(n,e):function(i,o){const c=cd(i,o),h=Xl(c)+Xl(i.Pe);return ka(c)&&ka(i.Pe)?ad(h):od(i.serializer,h)}(n,e)}function av(n,e,t){return n instanceof ji?ld(n,e):n instanceof qi?ud(n,e):t}function cd(n,e){return n instanceof uo?function(r){return ka(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class lo extends So{}class ji extends So{constructor(e){super(),this.elements=e}}function ld(n,e){const t=hd(e);for(const r of n.elements)t.some(i=>Ot(i,r))||t.push(r);return{arrayValue:{values:t}}}class qi extends So{constructor(e){super(),this.elements=e}}function ud(n,e){let t=hd(e);for(const r of n.elements)t=t.filter(i=>!Ot(i,r));return{arrayValue:{values:t}}}class uo extends So{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Xl(n){return Ee(n.integerValue||n.doubleValue)}function hd(n){return ac(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ji&&i instanceof ji||r instanceof qi&&i instanceof qi?Br(r.elements,i.elements,Ot):r instanceof uo&&i instanceof uo?Ot(r.Pe,i.Pe):r instanceof lo&&i instanceof lo}(n.transform,e.transform)}class lv{constructor(e,t){this.version=e,this.transformResults=t}}class Yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ro{}function dd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pd(n.key,Yt.none()):new ko(n.key,n.data,Yt.none());{const t=n.data,r=it.empty();let i=new je(Be.comparator);for(let o of e.fields)if(!i.has(o)){let c=t.field(o);c===null&&o.length>1&&(o=o.popLast(),c=t.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new ar(n.key,r,new wt(i.toArray()),Yt.none())}}function uv(n,e,t){n instanceof ko?function(i,o,c){const h=i.value.clone(),f=Zl(i.fieldTransforms,o,c.transformResults);h.setAll(f),o.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,e,t):n instanceof ar?function(i,o,c){if(!Gs(i.precondition,o))return void o.convertToUnknownDocument(c.version);const h=Zl(i.fieldTransforms,o,c.transformResults),f=o.data;f.setAll(fd(i)),f.setAll(h),o.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(n,e,t):function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Oi(n,e,t,r){return n instanceof ko?function(o,c,h,f){if(!Gs(o.precondition,c))return h;const g=o.value.clone(),y=eu(o.fieldTransforms,f,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,r):n instanceof ar?function(o,c,h,f){if(!Gs(o.precondition,c))return h;const g=eu(o.fieldTransforms,f,c),y=c.data;return y.setAll(fd(o)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(P=>P.field))}(n,e,t,r):function(o,c,h){return Gs(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h}(n,e,t)}function hv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=cd(r.transform,i||null);o!=null&&(t===null&&(t=it.empty()),t.set(r.field,o))}return t||null}function Jl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Br(r,i,(o,c)=>cv(o,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ko extends Ro{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ar extends Ro{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function fd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Zl(n,e,t){const r=new Map;de(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],c=o.transform,h=e.data.field(o.field);r.set(o.field,av(c,h,t[i]))}return r}function eu(n,e,t){const r=new Map;for(const i of n){const o=i.transform,c=t.data.field(i.field);r.set(i.field,ov(o,c,e))}return r}class pd extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dv extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&uv(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Oi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Oi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=sd();return this.mutations.forEach(i=>{const o=e.get(i.key),c=o.overlayedDocument;let h=this.applyToLocalView(c,o.mutatedFields);h=t.has(i.key)?null:h;const f=dd(c,h);f!==null&&r.set(i.key,f),c.isValidDocument()||c.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&Br(this.mutations,e.mutations,(t,r)=>Jl(t,r))&&Br(this.baseMutations,e.baseMutations,(t,r)=>Jl(t,r))}}class hc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){de(e.mutations.length===r.length);let i=function(){return tv}();const o=e.mutations;for(let c=0;c<o.length;c++)i=i.insert(o[c].key,r[c].version);return new hc(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,re;function gv(n){switch(n){default:return W();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function md(n){if(n===void 0)return Jt("GRPC error has no .code"),N.UNKNOWN;switch(n){case ve.OK:return N.OK;case ve.CANCELLED:return N.CANCELLED;case ve.UNKNOWN:return N.UNKNOWN;case ve.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ve.INTERNAL:return N.INTERNAL;case ve.UNAVAILABLE:return N.UNAVAILABLE;case ve.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ve.NOT_FOUND:return N.NOT_FOUND;case ve.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ve.ABORTED:return N.ABORTED;case ve.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ve.DATA_LOSS:return N.DATA_LOSS;default:return W()}}(re=ve||(ve={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new Gn([4294967295,4294967295],0);function tu(n){const e=wv().encode(n),t=new Mh;return t.update(e),new Uint8Array(t.digest())}function nu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Gn([t,r],0),new Gn([i,o],0)]}class dc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ai(`Invalid padding: ${t}`);if(r<0)throw new Ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ai(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ai(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Gn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Gn.fromNumber(r)));return i.compare(yv)===1&&(i=new Gn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=tu(e),[r,i]=nu(t);for(let o=0;o<this.hashCount;o++){const c=this.Ee(r,i,o);if(!this.de(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),c=new dc(o,i,t);return r.forEach(h=>c.insert(h)),c}insert(e){if(this.Ie===0)return;const t=tu(e),[r,i]=nu(t);for(let o=0;o<this.hashCount;o++){const c=this.Ee(r,i,o);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Do(K.min(),i,new ge(ce),Zt(),Z())}}class Qi{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Qi(r,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class gd{constructor(e,t){this.targetId=e,this.me=t}}class wd{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ru{constructor(){this.fe=0,this.ge=su(),this.pe=Qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Z(),t=Z(),r=Z();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Qi(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=su()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _v{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zt(),this.qe=iu(),this.Qe=new ge(ce)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(Oa(o))if(r===0){const c=new $(o.path);this.Ue(t,c,Ge.newNoDocument(c,K.min()))}else de(r===1);else{const c=this.Ye(t);if(c!==r){const h=this.Ze(e),f=h?this.Xe(h,e,c):1;if(f!==0){this.je(t);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,g)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let c,h;try{c=er(r).toUint8Array()}catch(f){if(f instanceof Kh)return Ur("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new dc(c,i,o)}catch(f){return Ur(f instanceof Ai?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.Ie===0?null:h}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const c=this.Le.tt(),h=`projects/${c.projectId}/databases/${c.database}/documents/${o.path.canonicalString()}`;e.mightContain(h)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,c)=>{const h=this.Je(c);if(h){if(o.current&&Oa(h.target)){const f=new $(h.target.path);this.ke.get(f)!==null||this.it(c,f)||this.Ue(c,f,Ge.newNoDocument(f,e))}o.be&&(t.set(c,o.Ce()),o.ve())}});let r=Z();this.qe.forEach((o,c)=>{let h=!0;c.forEachWhile(f=>{const g=this.Je(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(o))}),this.ke.forEach((o,c)=>c.setReadTime(e));const i=new Do(e,t,this.Qe,this.ke,r);return this.ke=Zt(),this.qe=iu(),this.Qe=new ge(ce),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ru,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new je(ce),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ru),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function iu(){return new ge($.comparator)}function su(){return new ge($.comparator)}const vv={asc:"ASCENDING",desc:"DESCENDING"},Ev={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Iv={and:"AND",or:"OR"};class Tv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Na(n,e){return n.useProto3Json||bo(e)?e:{value:e}}function ho(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bv(n,e){return ho(n,e.toTimestamp())}function kt(n){return de(!!n),K.fromTimestamp(function(t){const r=Tn(t);return new Re(r.seconds,r.nanos)}(n))}function fc(n,e){return xa(n,e).canonicalString()}function xa(n,e){const t=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _d(n){const e=pe.fromString(n);return de(bd(e)),e}function La(n,e){return fc(n.databaseId,e.path)}function ma(n,e){const t=_d(e);if(t.get(1)!==n.databaseId.projectId)throw new q(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(Ed(t))}function vd(n,e){return fc(n.databaseId,e)}function Av(n){const e=_d(n);return e.length===4?pe.emptyPath():Ed(e)}function Ma(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ed(n){return de(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ou(n,e,t){return{name:La(n,e),fields:t.value.mapValue.fields}}function Cv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(g,y){return g.useProto3Json?(de(y===void 0||typeof y=="string"),Qe.fromBase64String(y||"")):(de(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Qe.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,h=c&&function(g){const y=g.code===void 0?N.UNKNOWN:md(g.code);return new q(y,g.message||"")}(c);t=new wd(r,i,o,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ma(n,r.document.name),o=kt(r.document.updateTime),c=r.document.createTime?kt(r.document.createTime):K.min(),h=new it({mapValue:{fields:r.document.fields}}),f=Ge.newFoundDocument(i,o,c,h),g=r.targetIds||[],y=r.removedTargetIds||[];t=new Qs(g,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ma(n,r.document),o=r.readTime?kt(r.readTime):K.min(),c=Ge.newNoDocument(i,o),h=r.removedTargetIds||[];t=new Qs([],h,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ma(n,r.document),o=r.removedTargetIds||[];t=new Qs([],o,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,c=new mv(i,o),h=r.targetId;t=new gd(h,c)}}return t}function Pv(n,e){let t;if(e instanceof ko)t={update:ou(n,e.key,e.value)};else if(e instanceof pd)t={delete:La(n,e.key)};else if(e instanceof ar)t={update:ou(n,e.key,e.data),updateMask:Lv(e.fieldMask)};else{if(!(e instanceof dv))return W();t={verify:La(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,c){const h=c.transform;if(h instanceof lo)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof ji)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof qi)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof uo)return{fieldPath:c.field.canonicalString(),increment:h.Pe};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:bv(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:W()}(n,e.precondition)),t}function Sv(n,e){return n&&n.length>0?(de(e!==void 0),n.map(t=>function(i,o){let c=i.updateTime?kt(i.updateTime):kt(o);return c.isEqual(K.min())&&(c=kt(o)),new lv(c,i.transformResults||[])}(t,e))):[]}function Rv(n,e){return{documents:[vd(n,e.path)]}}function kv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vd(n,i);const o=function(g){if(g.length!==0)return Td(Vt.create(g,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const c=function(g){if(g.length!==0)return g.map(y=>function(R){return{field:Dr(R.field),direction:Vv(R.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const h=Na(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{_t:t,parent:i}}function Dv(n){let e=Av(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){de(r===1);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(P){const R=Id(P);return R instanceof Vt&&Xh(R)?R.getFilters():[R]}(t.where));let c=[];t.orderBy&&(c=function(P){return P.map(R=>function(U){return new co(Or(U.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(R))}(t.orderBy));let h=null;t.limit&&(h=function(P){let R;return R=typeof P=="object"?P.value:P,bo(R)?null:R}(t.limit));let f=null;t.startAt&&(f=function(P){const R=!!P.before,V=P.values||[];return new ao(V,R)}(t.startAt));let g=null;return t.endAt&&(g=function(P){const R=!P.before,V=P.values||[];return new ao(V,R)}(t.endAt)),Q_(e,i,c,o,h,"F",f,g)}function Ov(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Id(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Or(t.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Or(t.unaryFilter.field);return Se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Or(t.unaryFilter.field);return Se.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Or(t.unaryFilter.field);return Se.create(c,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(t){return Se.create(Or(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Vt.create(t.compositeFilter.filters.map(r=>Id(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(t.compositeFilter.op))}(n):W()}function Vv(n){return vv[n]}function Nv(n){return Ev[n]}function xv(n){return Iv[n]}function Dr(n){return{fieldPath:n.canonicalString()}}function Or(n){return Be.fromServerFormat(n.fieldPath)}function Td(n){return n instanceof Se?function(t){if(t.op==="=="){if(Wl(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NAN"}};if(zl(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wl(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NAN"}};if(zl(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(t.field),op:Nv(t.op),value:t.value}}}(n):n instanceof Vt?function(t){const r=t.getFilters().map(i=>Td(i));return r.length===1?r[0]:{compositeFilter:{op:xv(t.op),filters:r}}}(n):W()}function Lv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,r,i,o=K.min(),c=K.min(),h=Qe.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.ct=e}}function Fv(n){const e=Dv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Va(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this._n=new Bv}addToCollectionParentIndex(e,t){return this._n.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(In.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(In.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class Bv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new je(pe.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new $r(0)}static Ln(){return new $r(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.changes=new Yr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Oi(r.mutation,i,wt.empty(),Re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const i=Kn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let c=bi();return o.forEach((h,f)=>{c=c.insert(h,f.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=Kn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((c,h)=>{t.set(c,h)})})}computeViews(e,t,r,i){let o=Zt();const c=Di(),h=function(){return Di()}();return t.forEach((f,g)=>{const y=r.get(g.key);i.has(g.key)&&(y===void 0||y.mutation instanceof ar)?o=o.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Oi(y.mutation,g,y.mutation.getFieldMask(),Re.now())):c.set(g.key,wt.empty())}),this.recalculateAndSaveOverlays(e,o).next(f=>(f.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var P;return h.set(g,new qv(y,(P=c.get(g))!==null&&P!==void 0?P:null))}),h))}recalculateAndSaveOverlays(e,t){const r=Di();let i=new ge((c,h)=>c-h),o=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const h of c)h.keys().forEach(f=>{const g=t.get(f);if(g===null)return;let y=r.get(f)||wt.empty();y=h.applyToLocalView(g,y),r.set(f,y);const P=(i.get(h.batchId)||Z()).add(f);i=i.insert(h.batchId,P)})}).next(()=>{const c=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),g=f.key,y=f.value,P=sd();y.forEach(R=>{if(!o.has(R)){const V=dd(t.get(R),r.get(R));V!==null&&P.set(R,V),o=o.add(R)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,P))}return x.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(c){return $.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Y_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):x.resolve(Kn());let h=-1,f=o;return c.next(g=>x.forEach(g,(y,P)=>(h<P.largestBatchId&&(h=P.largestBatchId),o.get(y)?x.resolve():this.remoteDocumentCache.getEntry(e,y).next(R=>{f=f.insert(y,R)}))).next(()=>this.populateOverlays(e,g,o)).next(()=>this.computeViews(e,f,g,Z())).next(y=>({batchId:h,changes:id(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let i=bi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let c=bi();return this.indexManager.getCollectionParents(e,o).next(h=>x.forEach(h,f=>{const g=function(P,R){return new Ao(R,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)}(t,f.child(o));return this.getDocumentsMatchingCollectionQuery(e,g,r,i).next(y=>{y.forEach((P,R)=>{c=c.insert(P,R)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(c=>{o.forEach((f,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,Ge.newInvalidDocument(y)))});let h=bi();return c.forEach((f,g)=>{const y=o.get(f);y!==void 0&&Oi(y.mutation,g,wt.empty(),Re.now()),Po(t,g)&&(h=h.insert(f,g))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return x.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:kt(i.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:Fv(i.bundledQuery),readTime:kt(i.readTime)}}(t)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.overlays=new ge($.comparator),this.hr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Kn();return x.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const i=Kn(),o=t.length+1,c=new $(t.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const f=h.getNext().value,g=f.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new ge((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let y=o.get(g.largestBatchId);y===null&&(y=Kn(),o=o.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const h=Kn(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,y)=>h.set(g,y)),!(h.size()>=i)););return x.resolve(h)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new pv(t,r));let o=this.hr.get(t);o===void 0&&(o=Z(),this.hr.set(t,o)),this.hr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.Pr=new je(Ve.Ir),this.Tr=new je(Ve.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new Ve(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new Ve(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new $(new pe([])),r=new Ve(t,e),i=new Ve(t,e+1),o=[];return this.Tr.forEachInRange([r,i],c=>{this.Ar(c),o.push(c.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new $(new pe([])),r=new Ve(t,e),i=new Ve(t,e+1);let o=Z();return this.Tr.forEachInRange([r,i],c=>{o=o.add(c.key)}),o}containsKey(e){const t=new Ve(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return $.comparator(e.key,t.key)||ce(e.pr,t.pr)}static Er(e,t){return ce(e.pr,t.pr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new je(Ve.Ir)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new fv(o,t,r,i);this.mutationQueue.push(c);for(const h of i)this.wr=this.wr.add(new Ve(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return x.resolve(c)}lookupMutationBatch(e,t){return x.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),o=i<0?0:i;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ve(t,0),i=new Ve(t,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],c=>{const h=this.Sr(c.pr);o.push(h)}),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new je(ce);return t.forEach(i=>{const o=new Ve(i,0),c=new Ve(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,c],h=>{r=r.add(h.pr)})}),x.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const c=new Ve(new $(o),0);let h=new je(ce);return this.wr.forEachWhile(f=>{const g=f.key.path;return!!r.isPrefixOf(g)&&(g.length===i&&(h=h.add(f.pr)),!0)},c),x.resolve(this.Dr(h))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){de(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return x.forEach(t.mutations,i=>{const o=new Ve(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new Ve(t,0),i=this.wr.firstAfterOrEqual(r);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.vr=e,this.docs=function(){return new ge($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,c=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(t))}getEntries(e,t){let r=Zt();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ge.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Zt();const c=t.path,h=new $(c.child("")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:g,value:{document:y}}=f.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||D_(k_(y),r)<=0||(i.has(y.key)||Po(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(e,t,r,i){W()}Fr(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Gv(this)}getSize(e){return x.resolve(this.size)}}class Gv extends jv{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.persistence=e,this.Mr=new Yr(t=>cc(t),lc),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Or=0,this.Nr=new pc,this.targetCount=0,this.Lr=$r.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),x.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new $r(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.qn(t),x.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Mr.forEach((c,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Mr.delete(c),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),i++)}),x.waitFor(o).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(c=>{o.push(i.markPotentiallyOrphaned(e,c))}),x.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.Br={},this.overlays={},this.kr=new ic(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Qv(this),this.indexManager=new Uv,this.remoteDocumentCache=function(i){return new Kv(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Mv(t),this.$r=new Hv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new Wv(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const i=new Xv(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,t){return x.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class Xv extends V_{constructor(e){super(),this.currentSequenceNumber=e}}class mc{constructor(e){this.persistence=e,this.zr=new pc,this.jr=null}static Hr(e){return new mc(e)}get Jr(){if(this.jr)return this.jr;throw W()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),x.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Jr,r=>{const i=$.fromPath(r);return this.Yr(e,i).next(o=>{o||t.removeEntry(i,K.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return x.or([()=>x.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=Z(),i=Z();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new gc(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return bp()?8:N_(qe())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ji(e,t).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.Hi(e,t,i,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new Jv;return this.Ji(e,t,c).next(h=>{if(o.result=h,this.Ui)return this.Yi(e,t,c,h.size)})}).next(()=>o.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(vi()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",kr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),x.resolve()):(vi()<=te.DEBUG&&B("QueryEngine","Query:",kr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(vi()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",kr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rt(t))):x.resolve())}ji(e,t){if(Yl(t))return x.resolve(null);let r=Rt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Va(t,null,"F"),r=Rt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const c=Z(...o);return this.zi.getDocuments(e,c).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const g=this.Zi(t,h);return this.Xi(t,g,c,f.readTime)?this.ji(e,Va(t,null,"F")):this.es(e,g,t,f)}))})))}Hi(e,t,r,i){return Yl(t)||i.isEqual(K.min())?x.resolve(null):this.zi.getDocuments(e,r).next(o=>{const c=this.Zi(t,o);return this.Xi(t,c,r,i)?x.resolve(null):(vi()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kr(t)),this.es(e,c,t,R_(i,-1)).next(h=>h))})}Zi(e,t){let r=new je(nd(e));return t.forEach((i,o)=>{Po(e,o)&&(r=r.add(o))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,t,r){return vi()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",kr(t)),this.zi.getDocumentsMatchingQuery(e,t,In.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new ge(ce),this.rs=new Yr(o=>cc(o),lc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $v(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function tE(n,e,t,r){return new eE(n,e,t,r)}async function Ad(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],h=[];let f=Z();for(const g of i){c.push(g.batchId);for(const y of g.mutations)f=f.add(y.key)}for(const g of o){h.push(g.batchId);for(const y of g.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next(g=>({us:g,removedBatchIds:c,addedBatchIds:h}))})})}function nE(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.os.newChangeBuffer({trackRemovals:!0});return function(h,f,g,y){const P=g.batch,R=P.keys();let V=x.resolve();return R.forEach(U=>{V=V.next(()=>y.getEntry(f,U)).next(j=>{const M=g.docVersions.get(U);de(M!==null),j.version.compareTo(M)<0&&(P.applyToRemoteDocument(j,g),j.isValidDocument()&&(j.setReadTime(g.commitVersion),y.addEntry(j)))})}),V.next(()=>h.mutationQueue.removeMutationBatch(f,P))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=Z();for(let g=0;g<h.mutationResults.length;++g)h.mutationResults[g].transformResults.length>0&&(f=f.add(h.batch.mutations[g].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Cd(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function rE(n,e){const t=Y(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const c=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const h=[];e.targetChanges.forEach((y,P)=>{const R=i.get(P);if(!R)return;h.push(t.Qr.removeMatchingKeys(o,y.removedDocuments,P).next(()=>t.Qr.addMatchingKeys(o,y.addedDocuments,P)));let V=R.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(P)!==null?V=V.withResumeToken(Qe.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):y.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(y.resumeToken,r)),i=i.insert(P,V),function(j,M,ee){return j.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=3e8?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(R,V,y)&&h.push(t.Qr.updateTargetData(o,V))});let f=Zt(),g=Z();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),h.push(iE(o,c,e.documentUpdates).next(y=>{f=y.cs,g=y.ls})),!r.isEqual(K.min())){const y=t.Qr.getLastRemoteSnapshotVersion(o).next(P=>t.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));h.push(y)}return x.waitFor(h).next(()=>c.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,f,g)).next(()=>f)}).then(o=>(t.ns=i,o))}function iE(n,e,t){let r=Z(),i=Z();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let c=Zt();return t.forEach((h,f)=>{const g=o.get(h);f.isFoundDocument()!==g.isFoundDocument()&&(i=i.add(h)),f.isNoDocument()&&f.version.isEqual(K.min())?(e.removeEntry(h,f.readTime),c=c.insert(h,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),c=c.insert(h,f)):B("LocalStore","Ignoring outdated watch update for ",h,". Current version:",g.version," Watch version:",f.version)}),{cs:c,ls:i}})}function sE(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oE(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(o=>o?(i=o,x.resolve(i)):t.Qr.allocateTargetId(r).next(c=>(i=new wn(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function Fa(n,e,t){const r=Y(n),i=r.ns.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,c=>r.persistence.referenceDelegate.removeTarget(c,i))}catch(c){if(!Gi(c))throw c;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function au(n,e,t){const r=Y(n);let i=K.min(),o=Z();return r.persistence.runTransaction("Execute query","readwrite",c=>function(f,g,y){const P=Y(f),R=P.rs.get(y);return R!==void 0?x.resolve(P.ns.get(R)):P.Qr.getTargetData(g,y)}(r,c,Rt(e)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(c,h.targetId).next(f=>{o=f})}).next(()=>r.ts.getDocumentsMatchingQuery(c,e,t?i:K.min(),t?o:Z())).next(h=>(aE(r,J_(e),h),{documents:h,hs:o})))}function aE(n,e,t){let r=n.ss.get(e)||K.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(e,r)}class cu{constructor(){this.activeTargetIds=iv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cE{constructor(){this.no=new cu,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new cu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js=null;function ga(){return js===null?js=function(){return 268435456+Math.round(2147483648*Math.random())}():js++,"0x"+js.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class dE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(t,r,i,o,c){const h=ga(),f=this.vo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(g,o,c),this.Mo(t,f,g,i).then(y=>(B("RestConnection",`Received RPC '${t}' ${h}: `,y),y),y=>{throw Ur("RestConnection",`RPC '${t}' ${h} failed with error: `,y,"url: ",f,"request:",i),y})}xo(t,r,i,o,c,h){return this.Co(t,r,i,o,c)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,c)=>t[c]=o),i&&i.headers.forEach((o,c)=>t[c]=o)}vo(t,r){const i=uE[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){const o=ga();return new Promise((c,h)=>{const f=new Fh;f.setWithCredentials(!0),f.listenOnce(Bh.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Ws.NO_ERROR:const y=f.getResponseJson();B(We,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),c(y);break;case Ws.TIMEOUT:B(We,`RPC '${e}' ${o} timed out`),h(new q(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ws.HTTP_ERROR:const P=f.getStatus();if(B(We,`RPC '${e}' ${o} failed with status:`,P,"response text:",f.getResponseText()),P>0){let R=f.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const U=function(M){const ee=M.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(ee)>=0?ee:N.UNKNOWN}(V.status);h(new q(U,V.message))}else h(new q(N.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new q(N.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{B(We,`RPC '${e}' ${o} completed.`)}});const g=JSON.stringify(i);B(We,`RPC '${e}' ${o} sending request:`,i),f.send(t,"POST",g,r,15)})}Oo(e,t,r){const i=ga(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=$h(),h=qh(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.xmlHttpFactory=new Uh({})),this.Fo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=o.join("");B(We,`Creating RPC '${e}' stream ${i}: ${y}`,f);const P=c.createWebChannel(y,f);let R=!1,V=!1;const U=new hE({lo:M=>{V?B(We,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(R||(B(We,`Opening RPC '${e}' stream ${i} transport.`),P.open(),R=!0),B(We,`RPC '${e}' stream ${i} sending:`,M),P.send(M))},ho:()=>P.close()}),j=(M,ee,J)=>{M.listen(ee,ie=>{try{J(ie)}catch(fe){setTimeout(()=>{throw fe},0)}})};return j(P,Ti.EventType.OPEN,()=>{V||(B(We,`RPC '${e}' stream ${i} transport opened.`),U.mo())}),j(P,Ti.EventType.CLOSE,()=>{V||(V=!0,B(We,`RPC '${e}' stream ${i} transport closed`),U.po())}),j(P,Ti.EventType.ERROR,M=>{V||(V=!0,Ur(We,`RPC '${e}' stream ${i} transport errored:`,M),U.po(new q(N.UNAVAILABLE,"The operation could not be completed")))}),j(P,Ti.EventType.MESSAGE,M=>{var ee;if(!V){const J=M.data[0];de(!!J);const ie=J,fe=ie.error||((ee=ie[0])===null||ee===void 0?void 0:ee.error);if(fe){B(We,`RPC '${e}' stream ${i} received error:`,fe);const Je=fe.status;let me=function(I){const T=ve[I];if(T!==void 0)return md(T)}(Je),b=fe.message;me===void 0&&(me=N.INTERNAL,b="Unknown error status: "+Je+" with message "+fe.message),V=!0,U.po(new q(me,b)),P.close()}else B(We,`RPC '${e}' stream ${i} received:`,J),U.yo(J)}}),j(h,jh.STAT_EVENT,M=>{M.stat===Sa.PROXY?B(We,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Sa.NOPROXY&&B(We,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{U.fo()},0),U}}function wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n){return new Tv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t,r,i,o,c,h,f){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Pd(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Jt(t.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{const i=new q(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fE extends Sd{constructor(e,t,r,i,o,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=o}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=Cv(this.serializer,e),r=function(o){if(!("targetChange"in o))return K.min();const c=o.targetChange;return c.targetIds&&c.targetIds.length?K.min():c.readTime?kt(c.readTime):K.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=Ma(this.serializer),t.addTarget=function(o,c){let h;const f=c.target;if(h=Oa(f)?{documents:Rv(o,f)}:{query:kv(o,f)._t},h.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){h.resumeToken=yd(o,c.resumeToken);const g=Na(o,c.expectedCount);g!==null&&(h.expectedCount=g)}else if(c.snapshotVersion.compareTo(K.min())>0){h.readTime=ho(o,c.snapshotVersion.toTimestamp());const g=Na(o,c.expectedCount);g!==null&&(h.expectedCount=g)}return h}(this.serializer,e);const r=Ov(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=Ma(this.serializer),t.removeTarget=e,this.i_(t)}}class pE extends Sd{constructor(e,t,r,i,o,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Sv(e.writeResults,e.commitTime),r=kt(e.commitTime);return this.listener.A_(r,t)}return de(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Ma(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Pv(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new q(N.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,xa(t,r),i,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(N.UNKNOWN,o.toString())})}xo(e,t,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,h])=>this.connection.xo(e,xa(t,r),i,c,h,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new q(N.UNKNOWN,c.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class gE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Jt(t),this.y_=!1):B("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(c=>{r.enqueueAndForget(async()=>{cr(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(f){const g=Y(f);g.M_.add(4),await Yi(g),g.N_.set("Unknown"),g.M_.delete(4),await Vo(g)}(this))})}),this.N_=new gE(r,i)}}async function Vo(n){if(cr(n))for(const e of n.x_)await e(!0)}async function Yi(n){for(const e of n.x_)await e(!1)}function Rd(n,e){const t=Y(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),vc(t)?_c(t):Xr(t).Xo()&&yc(t,e))}function wc(n,e){const t=Y(n),r=Xr(t);t.F_.delete(e),r.Xo()&&kd(t,e),t.F_.size===0&&(r.Xo()?r.n_():cr(t)&&t.N_.set("Unknown"))}function yc(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xr(n).P_(e)}function kd(n,e){n.L_.xe(e),Xr(n).I_(e)}function _c(n){n.L_=new _v({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Xr(n).start(),n.N_.w_()}function vc(n){return cr(n)&&!Xr(n).Zo()&&n.F_.size>0}function cr(n){return Y(n).M_.size===0}function Dd(n){n.L_=void 0}async function yE(n){n.N_.set("Online")}async function _E(n){n.F_.forEach((e,t)=>{yc(n,e)})}async function vE(n,e){Dd(n),vc(n)?(n.N_.D_(e),_c(n)):n.N_.set("Unknown")}async function EE(n,e,t){if(n.N_.set("Online"),e instanceof wd&&e.state===2&&e.cause)try{await async function(i,o){const c=o.cause;for(const h of o.targetIds)i.F_.has(h)&&(await i.remoteSyncer.rejectListen(h,c),i.F_.delete(h),i.L_.removeTarget(h))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fo(n,r)}else if(e instanceof Qs?n.L_.Ke(e):e instanceof gd?n.L_.He(e):n.L_.We(e),!t.isEqual(K.min()))try{const r=await Cd(n.localStore);t.compareTo(r)>=0&&await function(o,c){const h=o.L_.rt(c);return h.targetChanges.forEach((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const y=o.F_.get(g);y&&o.F_.set(g,y.withResumeToken(f.resumeToken,c))}}),h.targetMismatches.forEach((f,g)=>{const y=o.F_.get(f);if(!y)return;o.F_.set(f,y.withResumeToken(Qe.EMPTY_BYTE_STRING,y.snapshotVersion)),kd(o,f);const P=new wn(y.target,f,g,y.sequenceNumber);yc(o,P)}),o.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await fo(n,r)}}async function fo(n,e,t){if(!Gi(e))throw e;n.M_.add(1),await Yi(n),n.N_.set("Offline"),t||(t=()=>Cd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Vo(n)})}function Od(n,e){return e().catch(t=>fo(n,t,e))}async function No(n){const e=Y(n),t=bn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;IE(e);)try{const i=await sE(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,TE(e,i)}catch(i){await fo(e,i)}Vd(e)&&Nd(e)}function IE(n){return cr(n)&&n.v_.length<10}function TE(n,e){n.v_.push(e);const t=bn(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Vd(n){return cr(n)&&!bn(n).Zo()&&n.v_.length>0}function Nd(n){bn(n).start()}async function bE(n){bn(n).V_()}async function AE(n){const e=bn(n);for(const t of n.v_)e.d_(t.mutations)}async function CE(n,e,t){const r=n.v_.shift(),i=hc.from(r,e,t);await Od(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await No(n)}async function PE(n,e){e&&bn(n).E_&&await async function(r,i){if(function(c){return gv(c)&&c!==N.ABORTED}(i.code)){const o=r.v_.shift();bn(r).t_(),await Od(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await No(r)}}(n,e),Vd(n)&&Nd(n)}async function uu(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=cr(t);t.M_.add(3),await Yi(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Vo(t)}async function SE(n,e){const t=Y(n);e?(t.M_.delete(2),await Vo(t)):e||(t.M_.add(2),await Yi(t),t.N_.set("Unknown"))}function Xr(n){return n.B_||(n.B_=function(t,r,i){const o=Y(t);return o.f_(),new fE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:yE.bind(null,n),To:_E.bind(null,n),Ao:vE.bind(null,n),h_:EE.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),vc(n)?_c(n):n.N_.set("Unknown")):(await n.B_.stop(),Dd(n))})),n.B_}function bn(n){return n.k_||(n.k_=function(t,r,i){const o=Y(t);return o.f_(),new pE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:bE.bind(null,n),Ao:PE.bind(null,n),R_:AE.bind(null,n),A_:CE.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await No(n)):(await n.k_.stop(),n.v_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const c=Date.now()+r,h=new Ec(e,t,c,i,o);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ic(n,e){if(Jt("AsyncQueue",`${e}: ${n}`),Gi(n))return new q(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=bi(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Mr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.q_=new ge($.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):W():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Hr{constructor(e,t,r,i,o,c,h,f,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=c,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,i,o){const c=[];return t.forEach(h=>{c.push({type:0,doc:h})}),new Hr(e,t,Mr.emptySet(t),c,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Co(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class kE{constructor(){this.queries=new Yr(e=>td(e),Co),this.onlineState="Unknown",this.z_=new Set}}async function xd(n,e){const t=Y(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.W_()&&e.G_()&&(r=2):(o=new RE,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await t.onListen(i,!0);break;case 1:o.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const h=Ic(c,`Initialization of query '${kr(e.query)}' failed`);return void e.onError(h)}t.queries.set(i,o),o.U_.push(e),e.j_(t.onlineState),o.K_&&e.H_(o.K_)&&Tc(t)}async function Ld(n,e){const t=Y(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const c=o.U_.indexOf(e);c>=0&&(o.U_.splice(c,1),o.U_.length===0?i=e.G_()?0:1:!o.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function DE(n,e){const t=Y(n);let r=!1;for(const i of e){const o=i.query,c=t.queries.get(o);if(c){for(const h of c.U_)h.H_(i)&&(r=!0);c.K_=i}}r&&Tc(t)}function OE(n,e,t){const r=Y(n),i=r.queries.get(e);if(i)for(const o of i.U_)o.onError(t);r.queries.delete(e)}function Tc(n){n.z_.forEach(e=>{e.next()})}var Ua,du;(du=Ua||(Ua={})).J_="default",du.Cache="cache";class Md{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Ua.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.key=e}}class Ud{constructor(e){this.key=e}}class VE{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Z(),this.mutatedKeys=Z(),this.Ia=nd(e),this.Ta=new Mr(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new hu,i=t?t.Ta:this.Ta;let o=t?t.mutatedKeys:this.mutatedKeys,c=i,h=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,g=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((y,P)=>{const R=i.get(y),V=Po(this.query,P)?P:null,U=!!R&&this.mutatedKeys.has(R.key),j=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let M=!1;R&&V?R.data.isEqual(V.data)?U!==j&&(r.track({type:3,doc:V}),M=!0):this.Ra(R,V)||(r.track({type:2,doc:V}),M=!0,(f&&this.Ia(V,f)>0||g&&this.Ia(V,g)<0)&&(h=!0)):!R&&V?(r.track({type:0,doc:V}),M=!0):R&&!V&&(r.track({type:1,doc:R}),M=!0,(f||g)&&(h=!0)),M&&(V?(c=c.add(V),o=j?o.add(y):o.delete(y)):(c=c.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{Ta:c,Aa:r,Xi:h,mutatedKeys:o}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const c=e.Aa.Q_();c.sort((y,P)=>function(V,U){const j=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return j(V)-j(U)}(y.type,P.type)||this.Ia(y.doc,P.doc)),this.Va(r),i=i!=null&&i;const h=t&&!i?this.ma():[],f=this.Pa.size===0&&this.current&&!i?1:0,g=f!==this.ha;return this.ha=f,c.length!==0||g?{snapshot:new Hr(this.query,e.Ta,o,c,e.mutatedKeys,f===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:h}:{fa:h}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new hu,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Z(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new Ud(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new Fd(r))}),t}pa(e){this.la=e.hs,this.Pa=Z();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Hr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class NE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xE{constructor(e){this.key=e,this.wa=!1}}class LE{constructor(e,t,r,i,o,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Sa={},this.ba=new Yr(h=>td(h),Co),this.Da=new Map,this.Ca=new Set,this.va=new ge($.comparator),this.Fa=new Map,this.Ma=new pc,this.xa={},this.Oa=new Map,this.Na=$r.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function ME(n,e,t=!0){const r=zd(n);let i;const o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Bd(r,e,t,!0),i}async function FE(n,e){const t=zd(n);await Bd(t,e,!0,!1)}async function Bd(n,e,t,r){const i=await oE(n.localStore,Rt(e)),o=i.targetId,c=t?n.sharedClientState.addLocalQueryTarget(o):"not-current";let h;return r&&(h=await UE(n,e,o,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&Rd(n.remoteStore,i),h}async function UE(n,e,t,r,i){n.Ba=(P,R,V)=>async function(j,M,ee,J){let ie=M.view.da(ee);ie.Xi&&(ie=await au(j.localStore,M.query,!1).then(({documents:b})=>M.view.da(b,ie)));const fe=J&&J.targetChanges.get(M.targetId),Je=J&&J.targetMismatches.get(M.targetId)!=null,me=M.view.applyChanges(ie,j.isPrimaryClient,fe,Je);return pu(j,M.targetId,me.fa),me.snapshot}(n,P,R,V);const o=await au(n.localStore,e,!0),c=new VE(e,o.hs),h=c.da(o.documents),f=Qi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),g=c.applyChanges(h,n.isPrimaryClient,f);pu(n,t,g.fa);const y=new NE(e,t,c);return n.ba.set(e,y),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),g.snapshot}async function BE(n,e,t){const r=Y(n),i=r.ba.get(e),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(c=>!Co(c,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fa(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&wc(r.remoteStore,i.targetId),Ba(r,i.targetId)}).catch(Ki)):(Ba(r,i.targetId),await Fa(r.localStore,i.targetId,!0))}async function jE(n,e){const t=Y(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wc(t.remoteStore,r.targetId))}async function qE(n,e,t){const r=QE(n);try{const i=await function(c,h){const f=Y(c),g=Re.now(),y=h.reduce((V,U)=>V.add(U.key),Z());let P,R;return f.persistence.runTransaction("Locally write mutations","readwrite",V=>{let U=Zt(),j=Z();return f.os.getEntries(V,y).next(M=>{U=M,U.forEach((ee,J)=>{J.isValidDocument()||(j=j.add(ee))})}).next(()=>f.localDocuments.getOverlayedDocuments(V,U)).next(M=>{P=M;const ee=[];for(const J of h){const ie=hv(J,P.get(J.key).overlayedDocument);ie!=null&&ee.push(new ar(J.key,ie,Gh(ie.value.mapValue),Yt.exists(!0)))}return f.mutationQueue.addMutationBatch(V,g,ee,h)}).next(M=>{R=M;const ee=M.applyToLocalDocumentSet(P,j);return f.documentOverlayCache.saveOverlays(V,M.batchId,ee)})}).then(()=>({batchId:R.batchId,changes:id(P)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(c,h,f){let g=c.xa[c.currentUser.toKey()];g||(g=new ge(ce)),g=g.insert(h,f),c.xa[c.currentUser.toKey()]=g}(r,i.batchId,t),await Xi(r,i.changes),await No(r.remoteStore)}catch(i){const o=Ic(i,"Failed to persist write");t.reject(o)}}async function jd(n,e){const t=Y(n);try{const r=await rE(t.localStore,e);e.targetChanges.forEach((i,o)=>{const c=t.Fa.get(o);c&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?c.wa=!0:i.modifiedDocuments.size>0?de(c.wa):i.removedDocuments.size>0&&(de(c.wa),c.wa=!1))}),await Xi(t,r,e)}catch(r){await Ki(r)}}function fu(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ba.forEach((o,c)=>{const h=c.view.j_(e);h.snapshot&&i.push(h.snapshot)}),function(c,h){const f=Y(c);f.onlineState=h;let g=!1;f.queries.forEach((y,P)=>{for(const R of P.U_)R.j_(h)&&(g=!0)}),g&&Tc(f)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $E(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Fa.get(e),o=i&&i.key;if(o){let c=new ge($.comparator);c=c.insert(o,Ge.newNoDocument(o,K.min()));const h=Z().add(o),f=new Do(K.min(),new Map,new ge(ce),c,h);await jd(r,f),r.va=r.va.remove(o),r.Fa.delete(e),bc(r)}else await Fa(r.localStore,e,!1).then(()=>Ba(r,e,t)).catch(Ki)}async function HE(n,e){const t=Y(n),r=e.batch.batchId;try{const i=await nE(t.localStore,e);$d(t,r,null),qd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Xi(t,i)}catch(i){await Ki(i)}}async function zE(n,e,t){const r=Y(n);try{const i=await function(c,h){const f=Y(c);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return f.mutationQueue.lookupMutationBatch(g,h).next(P=>(de(P!==null),y=P.keys(),f.mutationQueue.removeMutationBatch(g,P))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,y,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>f.localDocuments.getDocuments(g,y))})}(r.localStore,e);$d(r,e,t),qd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Xi(r,i)}catch(i){await Ki(i)}}function qd(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function $d(n,e,t){const r=Y(n);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Ba(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||Hd(n,r)})}function Hd(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(wc(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),bc(n))}function pu(n,e,t){for(const r of t)r instanceof Fd?(n.Ma.addReference(r.key,e),WE(n,r)):r instanceof Ud?(B("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||Hd(n,r.key)):W()}function WE(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(B("SyncEngine","New document in limbo: "+t),n.Ca.add(r),bc(n))}function bc(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new $(pe.fromString(e)),r=n.Na.next();n.Fa.set(r,new xE(t)),n.va=n.va.insert(t,r),Rd(n.remoteStore,new wn(Rt(uc(t.path)),r,"TargetPurposeLimboResolution",ic.oe))}}async function Xi(n,e,t){const r=Y(n),i=[],o=[],c=[];r.ba.isEmpty()||(r.ba.forEach((h,f)=>{c.push(r.Ba(f,e,t).then(g=>{if((g||t)&&r.isPrimaryClient){const y=g&&!g.fromCache;r.sharedClientState.updateQueryState(f.targetId,y?"current":"not-current")}if(g){i.push(g);const y=gc.Ki(f.targetId,g);o.push(y)}}))}),await Promise.all(c),r.Sa.h_(i),await async function(f,g){const y=Y(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",P=>x.forEach(g,R=>x.forEach(R.qi,V=>y.persistence.referenceDelegate.addReference(P,R.targetId,V)).next(()=>x.forEach(R.Qi,V=>y.persistence.referenceDelegate.removeReference(P,R.targetId,V)))))}catch(P){if(!Gi(P))throw P;B("LocalStore","Failed to update sequence numbers: "+P)}for(const P of g){const R=P.targetId;if(!P.fromCache){const V=y.ns.get(R),U=V.snapshotVersion,j=V.withLastLimboFreeSnapshotVersion(U);y.ns=y.ns.insert(R,j)}}}(r.localStore,o))}async function KE(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Ad(t.localStore,e);t.currentUser=e,function(o,c){o.Oa.forEach(h=>{h.forEach(f=>{f.reject(new q(N.CANCELLED,c))})}),o.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xi(t,r.us)}}function GE(n,e){const t=Y(n),r=t.Fa.get(e);if(r&&r.wa)return Z().add(r.key);{let i=Z();const o=t.Da.get(e);if(!o)return i;for(const c of o){const h=t.ba.get(c);i=i.unionWith(h.view.Ea)}return i}}function zd(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$E.bind(null,e),e.Sa.h_=DE.bind(null,e.eventManager),e.Sa.ka=OE.bind(null,e.eventManager),e}function QE(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zE.bind(null,e),e}class mu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return tE(this.persistence,new Zv,e.initialUser,this.serializer)}createPersistence(e){return new Yv(mc.Hr,this.serializer)}createSharedClientState(e){return new cE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KE.bind(null,this.syncEngine),await SE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kE}()}createDatastore(e){const t=Oo(e.databaseInfo.databaseId),r=function(o){return new dE(o)}(e.databaseInfo);return function(o,c,h,f){return new mE(o,c,h,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,c,h){return new wE(r,i,o,c,h)}(this.localStore,this.datastore,e.asyncQueue,t=>fu(this.syncEngine,t,0),function(){return lu.D()?new lu:new lE}())}createSyncEngine(e,t){return function(i,o,c,h,f,g,y){const P=new LE(i,o,c,h,f,g);return y&&(P.La=!0),P}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=Y(r);B("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Yi(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=zh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{B("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ic(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ya(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ad(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ZE(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>uu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>uu(e.remoteStore,i)),n._onlineComponents=e}function JE(n){return n.name==="FirebaseError"?n.code===N.FAILED_PRECONDITION||n.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ZE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await ya(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!JE(t))throw t;Ur("Error using user provided cache. Falling back to memory cache: "+t),await ya(n,new mu)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await ya(n,new mu);return n._offlineComponents}async function Kd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await gu(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await gu(n,new YE))),n._onlineComponents}function eI(n){return Kd(n).then(e=>e.syncEngine)}async function Gd(n){const e=await Kd(n),t=e.eventManager;return t.onListen=ME.bind(null,e.syncEngine),t.onUnlisten=BE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=FE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jE.bind(null,e.syncEngine),t}function tI(n,e,t={}){const r=new Qt;return n.asyncQueue.enqueueAndForget(async()=>function(o,c,h,f,g){const y=new Wd({next:R=>{c.enqueueAndForget(()=>Ld(o,P));const V=R.docs.has(h);!V&&R.fromCache?g.reject(new q(N.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&R.fromCache&&f&&f.source==="server"?g.reject(new q(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(R)},error:R=>g.reject(R)}),P=new Md(uc(h.path),y,{includeMetadataChanges:!0,ra:!0});return xd(o,P)}(await Gd(n),n.asyncQueue,e,t,r)),r.promise}function nI(n,e,t={}){const r=new Qt;return n.asyncQueue.enqueueAndForget(async()=>function(o,c,h,f,g){const y=new Wd({next:R=>{c.enqueueAndForget(()=>Ld(o,P)),R.fromCache&&f.source==="server"?g.reject(new q(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(R)},error:R=>g.reject(R)}),P=new Md(h,y,{includeMetadataChanges:!0,ra:!0});return xd(o,P)}(await Gd(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n,e,t){if(!t)throw new q(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rI(n,e,t,r){if(e===!0&&r===!0)throw new q(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yu(n){if(!$.isDocumentKey(n))throw new q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _u(n){if($.isDocumentKey(n))throw new q(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ac(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function nr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ac(n);throw new q(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new v_;switch(r.type){case"firstParty":return new b_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=wu.get(t);r&&(B("ComponentProvider","Removing Datastore"),wu.delete(t),r.terminate())}(this),Promise.resolve()}}function iI(n,e,t,r={}){var i;const o=(n=nr(n,xo))._getSettings(),c=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==c&&Ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:c,ssl:!1})),r.mockUserToken){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Ke.MOCK_USER;else{h=_p(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new q(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ke(g)}n._authCredentials=new E_(new Hh(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lo(this.firestore,e,this._query)}}class ot{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class En extends Lo{constructor(e,t,r){super(e,t,uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new $(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function kI(n,e,...t){if(n=Ne(n),Yd("collection","path",e),n instanceof xo){const r=pe.fromString(e,...t);return _u(r),new En(n,null,r)}{if(!(n instanceof ot||n instanceof En))throw new q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return _u(r),new En(n.firestore,null,r)}}function DI(n,e,...t){if(n=Ne(n),arguments.length===1&&(e=zh.newId()),Yd("doc","path",e),n instanceof xo){const r=pe.fromString(e,...t);return yu(r),new ot(n,null,new $(r))}{if(!(n instanceof ot||n instanceof En))throw new q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return yu(r),new ot(n.firestore,n instanceof En?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Pd(this,"async_queue_retry"),this.hu=()=>{const t=wa();t&&B("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=wa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Qt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Gi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(c){let h=c.message||"";return c.stack&&(h=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),h}(r);throw Jt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=Ec.createAndSchedule(this,e,t,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&W()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class Mo extends xo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new sI}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xd(this),this._firestoreClient.terminate()}}function oI(n,e){const t=typeof n=="object"?n:qa(),r=typeof n=="string"?n:"(default)",i=ir(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=wp("firestore");o&&iI(i,...o)}return i}function Cc(n){return n._firestoreClient||Xd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Xd(n){var e,t,r;const i=n._freezeSettings(),o=function(h,f,g,y){return new M_(h,f,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Qd(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new XE(n._authCredentials,n._appCheckCredentials,n._queue,o),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zr(Qe.fromBase64String(e))}catch(t){throw new q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new zr(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=/^__.*__$/;class Jd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ar(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Rc{constructor(e,t,r,i,o,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Rc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return po(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Zd(this.fu)&&aI.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class cI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Oo(e)}Fu(e,t,r,i=!1){return new Rc({fu:e,methodName:t,vu:r,path:Be.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lI(n){const e=n._freezeSettings(),t=Oo(n._databaseId);return new cI(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Uo extends Pc{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uo}}function uI(n,e,t,r){const i=n.Fu(1,e,t);tf("Data must be an object, but it was:",i,r);const o=[],c=it.empty();or(r,(f,g)=>{const y=kc(e,f,t);g=Ne(g);const P=i.Su(y);if(g instanceof Uo)o.push(y);else{const R=Bo(g,P);R!=null&&(o.push(y),c.set(y,R))}});const h=new wt(o);return new Jd(c,h,i.fieldTransforms)}function hI(n,e,t,r,i,o){const c=n.Fu(1,e,t),h=[Eu(e,r,t)],f=[i];if(o.length%2!=0)throw new q(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)h.push(Eu(e,o[R])),f.push(o[R+1]);const g=[],y=it.empty();for(let R=h.length-1;R>=0;--R)if(!pI(g,h[R])){const V=h[R];let U=f[R];U=Ne(U);const j=c.Su(V);if(U instanceof Uo)g.push(V);else{const M=Bo(U,j);M!=null&&(g.push(V),y.set(V,M))}}const P=new wt(g);return new Jd(y,P,c.fieldTransforms)}function Bo(n,e){if(ef(n=Ne(n)))return tf("Unsupported field value:",e,n),dI(n,e);if(n instanceof Pc)return function(r,i){if(!Zd(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const o=[];let c=0;for(const h of r){let f=Bo(h,i.bu(c));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),c++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Re.fromDate(r);return{timestampValue:ho(i.serializer,o)}}if(r instanceof Re){const o=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ho(i.serializer,o)}}if(r instanceof Sc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zr)return{bytesValue:yd(i.serializer,r._byteString)};if(r instanceof ot){const o=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw i.Du(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:fc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ac(r)}`)}(n,e)}function dI(n,e){const t={};return Wh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):or(n,(r,i)=>{const o=Bo(i,e.pu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function ef(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof Sc||n instanceof zr||n instanceof ot||n instanceof Pc)}function tf(n,e,t){if(!ef(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ac(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Eu(n,e,t){if((e=Ne(e))instanceof Fo)return e._internalPath;if(typeof e=="string")return kc(n,e);throw po("Field path arguments must be of type string or ",n,!1,void 0,t)}const fI=new RegExp("[~\\*/\\[\\]]");function kc(n,e,t){if(e.search(fI)>=0)throw po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Fo(...e.split("."))._internalPath}catch{throw po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function po(n,e,t,r,i){const o=r&&!r.isEmpty(),c=i!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||c)&&(f+=" (found",o&&(f+=` in field ${r}`),c&&(f+=` in document ${i}`),f+=")"),new q(N.INVALID_ARGUMENT,h+n+f)}function pI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mI extends nf{data(){return super.data()}}function rf(n,e){return typeof e=="string"?kc(n,e):e instanceof Fo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wI{convertValue(e,t="none"){switch(tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return or(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertGeoPoint(e){return new Sc(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=oc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fi(e));default:return null}}convertTimestamp(e){const t=Tn(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);de(bd(r));const i=new Ui(r.get(1),r.get(3)),o=new $(r.popFirst(5));return i.isEqual(t)||Jt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sf extends nf{constructor(e,t,r,i,o,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ys(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(rf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ys extends sf{data(e={}){return super.data(e)}}class yI{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ci(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ys(this._firestore,this._userDataWriter,r.key,r,new Ci(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(h=>{const f=new Ys(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Ci(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const f=new Ys(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Ci(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let g=-1,y=-1;return h.type!==0&&(g=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),y=c.indexOf(h.doc.key)),{type:_I(h.type),doc:f,oldIndex:g,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function _I(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(n){n=nr(n,ot);const e=nr(n.firestore,Mo);return tI(Cc(e),n._key).then(t=>EI(e,n,t))}class of extends wI{constructor(e){super(),this.firestore=e}convertBytes(e){return new zr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function VI(n){n=nr(n,Lo);const e=nr(n.firestore,Mo),t=Cc(e),r=new of(e);return gI(n._query),nI(t,n._query).then(i=>new yI(e,r,n,i))}function NI(n,e,t,...r){n=nr(n,ot);const i=nr(n.firestore,Mo),o=lI(i);let c;return c=typeof(e=Ne(e))=="string"||e instanceof Fo?hI(o,"updateDoc",n._key,e,t,r):uI(o,"updateDoc",n._key,e),vI(i,[c.toMutation(n._key,Yt.exists(!0))])}function vI(n,e){return function(r,i){const o=new Qt;return r.asyncQueue.enqueueAndForget(async()=>qE(await eI(r),i,o)),o.promise}(Cc(n),e)}function EI(n,e,t){const r=t.docs.get(e._key),i=new of(n);return new sf(n,i,e._key,r,new Ci(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Qr=i})(Wr),Dt(new yt("firestore",(r,{instanceIdentifier:i,options:o})=>{const c=r.getProvider("app").getImmediate(),h=new Mo(new I_(r.getProvider("auth-internal")),new C_(r.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ui(g.options.projectId,y)}(c,i),c);return o=Object.assign({useFetchStreams:t},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),ht(jl,"4.6.3",e),ht(jl,"4.6.3","esm2017")})();const II={apiKey:"AIzaSyB0bcCaxGZEruw8TX24hcAHg0wAesVKOo4",authDomain:"inv78-33c2d.firebaseapp.com",databaseURL:"https://inv78-33c2d-default-rtdb.firebaseio.com",projectId:"inv78-33c2d",storageBucket:"inv78-33c2d.appspot.com",messagingSenderId:"888268994871",appId:"1:888268994871:web:8ff4976ae15615271742b2",measurementId:"G-NXBLSSZ9B0"},af=Nu(II);g_(af);const xI=Xw(),LI=oI(af);var cf={exports:{}};/*!
* sweetalert2 v11.12.0
* Released under the MIT License.
*/(function(n,e){(function(t,r){n.exports=r()})(hn,function(){function t(m,a){(a==null||a>m.length)&&(a=m.length);for(var l=0,d=Array(a);l<a;l++)d[l]=m[l];return d}function r(m){if(Array.isArray(m))return m}function i(m){if(Array.isArray(m))return t(m)}function o(m,a,l){if(typeof m=="function"?m===a:m.has(a))return arguments.length<3?a:l;throw new TypeError("Private element is not present on this object")}function c(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function h(m,a,l){return a=J(a),I(m,fe()?Reflect.construct(a,l||[],J(m).constructor):a.apply(m,l))}function f(m,a){if(a.has(m))throw new TypeError("Cannot initialize the same private elements twice on an object")}function g(m,a){if(!(m instanceof a))throw new TypeError("Cannot call a class as a function")}function y(m,a){return m.get(o(m,a))}function P(m,a,l){f(m,a),a.set(m,l)}function R(m,a,l){return m.set(o(m,a),l),l}function V(m,a,l){if(fe())return Reflect.construct.apply(null,arguments);var d=[null];d.push.apply(d,a);var _=new(m.bind.apply(m,d));return _}function U(m,a){for(var l=0;l<a.length;l++){var d=a[l];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(m,Cn(d.key),d)}}function j(m,a,l){return a&&U(m.prototype,a),Object.defineProperty(m,"prototype",{writable:!1}),m}function M(m,a){var l=typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(!l){if(Array.isArray(m)||(l=Nt(m))||a){l&&(m=l);var d=0,_=function(){};return{s:_,n:function(){return d>=m.length?{done:!0}:{done:!1,value:m[d++]}},e:function(Q){throw Q},f:_}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O,F=!0,X=!1;return{s:function(){l=l.call(m)},n:function(){var Q=l.next();return F=Q.done,Q},e:function(Q){X=!0,O=Q},f:function(){try{F||l.return==null||l.return()}finally{if(X)throw O}}}}function ee(){return ee=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(m,a,l){var d=S(m,a);if(d){var _=Object.getOwnPropertyDescriptor(d,a);return _.get?_.get.call(arguments.length<3?m:l):_.value}},ee.apply(null,arguments)}function J(m){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},J(m)}function ie(m,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(a&&a.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),a&&T(m,a)}function fe(){try{var m=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(fe=function(){return!!m})()}function Je(m){if(typeof Symbol<"u"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function me(m,a){var l=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(l!=null){var d,_,O,F,X=[],Q=!0,we=!1;try{if(O=(l=l.call(m)).next,a!==0)for(;!(Q=(d=O.call(l)).done)&&(X.push(d.value),X.length!==a);Q=!0);}catch(_i){we=!0,_=_i}finally{try{if(!Q&&l.return!=null&&(F=l.return(),Object(F)!==F))return}finally{if(we)throw _}}return X}}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(m,a){if(a&&(typeof a=="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(m)}function T(m,a){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,d){return l.__proto__=d,l},T(m,a)}function A(m,a){return r(m)||me(m,a)||Nt(m,a)||b()}function S(m,a){for(;!{}.hasOwnProperty.call(m,a)&&(m=J(m))!==null;);return m}function E(m){return i(m)||Je(m)||Nt(m)||v()}function dt(m,a){if(typeof m!="object"||!m)return m;var l=m[Symbol.toPrimitive];if(l!==void 0){var d=l.call(m,a);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}function Cn(m){var a=dt(m,"string");return typeof a=="symbol"?a:a+""}function Ie(m){"@babel/helpers - typeof";return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Ie(m)}function Nt(m,a){if(m){if(typeof m=="string")return t(m,a);var l={}.toString.call(m).slice(8,-1);return l==="Object"&&m.constructor&&(l=m.constructor.name),l==="Map"||l==="Set"?Array.from(m):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?t(m,a):void 0}}var Pn=100,G={},Ji=function(){G.previousActiveElement instanceof HTMLElement?(G.previousActiveElement.focus(),G.previousActiveElement=null):document.body&&document.body.focus()},jo=function(a){return new Promise(function(l){if(!a)return l();var d=window.scrollX,_=window.scrollY;G.restoreFocusTimeout=setTimeout(function(){Ji(),l()},Pn),window.scrollTo(d,_)})},ft="swal2-",ke=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],D=ke.reduce(function(m,a){return m[a]=ft+a,m},{}),Sn=["success","warning","info","question","error"],lr=Sn.reduce(function(m,a){return m[a]=ft+a,m},{}),Rn="SweetAlert2:",Jr=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},$e=function(a){console.warn("".concat(Rn," ").concat(Ie(a)==="object"?a.join(" "):a))},at=function(a){console.error("".concat(Rn," ").concat(a))},kn=[],Zr=function(a){kn.includes(a)||(kn.push(a),$e(a))},ur=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zr('"'.concat(a,'" is deprecated and will be removed in the next major release.').concat(l?' Use "'.concat(l,'" instead.'):""))},en=function(a){return typeof a=="function"?a():a},Dn=function(a){return a&&typeof a.toPromise=="function"},tn=function(a){return Dn(a)?a.toPromise():Promise.resolve(a)},ei=function(a){return a&&Promise.resolve(a)===a},He=function(){return document.body.querySelector(".".concat(D.container))},nn=function(a){var l=He();return l?l.querySelector(a):null},xe=function(a){return nn(".".concat(a))},se=function(){return xe(D.popup)},On=function(){return xe(D.icon)},ti=function(){return xe(D["icon-content"])},hr=function(){return xe(D.title)},dr=function(){return xe(D["html-container"])},Te=function(){return xe(D.image)},be=function(){return xe(D["progress-steps"])},xt=function(){return xe(D["validation-message"])},tt=function(){return nn(".".concat(D.actions," .").concat(D.confirm))},Lt=function(){return nn(".".concat(D.actions," .").concat(D.cancel))},Mt=function(){return nn(".".concat(D.actions," .").concat(D.deny))},Vn=function(){return xe(D["input-label"])},Ft=function(){return nn(".".concat(D.loader))},rn=function(){return xe(D.actions)},fr=function(){return xe(D.footer)},pr=function(){return xe(D["timer-progress-bar"])},ni=function(){return xe(D.close)},ri=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,mr=function(){var a=se();if(!a)return[];var l=a.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),d=Array.from(l).sort(function(F,X){var Q=parseInt(F.getAttribute("tabindex")||"0"),we=parseInt(X.getAttribute("tabindex")||"0");return Q>we?1:Q<we?-1:0}),_=a.querySelectorAll(ri),O=Array.from(_).filter(function(F){return F.getAttribute("tabindex")!=="-1"});return E(new Set(d.concat(O))).filter(function(F){return Ae(F)})},gr=function(){return Me(document.body,D.shown)&&!Me(document.body,D["toast-shown"])&&!Me(document.body,D["no-backdrop"])},Et=function(){var a=se();return a?Me(a,D.toast):!1},ii=function(){var a=se();return a?a.hasAttribute("data-loading"):!1},Le=function(a,l){if(a.textContent="",l){var d=new DOMParser,_=d.parseFromString(l,"text/html"),O=_.querySelector("head");O&&Array.from(O.childNodes).forEach(function(X){a.appendChild(X)});var F=_.querySelector("body");F&&Array.from(F.childNodes).forEach(function(X){X instanceof HTMLVideoElement||X instanceof HTMLAudioElement?a.appendChild(X.cloneNode(!0)):a.appendChild(X)})}},Me=function(a,l){if(!l)return!1;for(var d=l.split(/\s+/),_=0;_<d.length;_++)if(!a.classList.contains(d[_]))return!1;return!0},Zi=function(a,l){Array.from(a.classList).forEach(function(d){!Object.values(D).includes(d)&&!Object.values(lr).includes(d)&&!Object.values(l.showClass||{}).includes(d)&&a.classList.remove(d)})},Fe=function(a,l,d){if(Zi(a,l),l.customClass&&l.customClass[d]){if(typeof l.customClass[d]!="string"&&!l.customClass[d].forEach){$e("Invalid type of customClass.".concat(d,'! Expected string or iterable object, got "').concat(Ie(l.customClass[d]),'"'));return}H(a,l.customClass[d])}},Nn=function(a,l){if(!l)return null;switch(l){case"select":case"textarea":case"file":return a.querySelector(".".concat(D.popup," > .").concat(D[l]));case"checkbox":return a.querySelector(".".concat(D.popup," > .").concat(D.checkbox," input"));case"radio":return a.querySelector(".".concat(D.popup," > .").concat(D.radio," input:checked"))||a.querySelector(".".concat(D.popup," > .").concat(D.radio," input:first-child"));case"range":return a.querySelector(".".concat(D.popup," > .").concat(D.range," input"));default:return a.querySelector(".".concat(D.popup," > .").concat(D.input))}},sn=function(a){if(a.focus(),a.type!=="file"){var l=a.value;a.value="",a.value=l}},si=function(a,l,d){!a||!l||(typeof l=="string"&&(l=l.split(/\s+/).filter(Boolean)),l.forEach(function(_){Array.isArray(a)?a.forEach(function(O){d?O.classList.add(_):O.classList.remove(_)}):d?a.classList.add(_):a.classList.remove(_)}))},H=function(a,l){si(a,l,!0)},nt=function(a,l){si(a,l,!1)},Ze=function(a,l){for(var d=Array.from(a.children),_=0;_<d.length;_++){var O=d[_];if(O instanceof HTMLElement&&Me(O,l))return O}},rt=function(a,l,d){d==="".concat(parseInt(d))&&(d=parseInt(d)),d||parseInt(d)===0?a.style.setProperty(l,typeof d=="number"?"".concat(d,"px"):d):a.style.removeProperty(l)},_e=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";a&&(a.style.display=l)},De=function(a){a&&(a.style.display="none")},It=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";a&&new MutationObserver(function(){xn(a,a.innerHTML,l)}).observe(a,{childList:!0,subtree:!0})},es=function(a,l,d,_){var O=a.querySelector(l);O&&O.style.setProperty(d,_)},xn=function(a,l){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";l?_e(a,d):De(a)},Ae=function(a){return!!(a&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length))},ts=function(){return!Ae(tt())&&!Ae(Mt())&&!Ae(Lt())},wr=function(a){return a.scrollHeight>a.clientHeight},Ln=function(a){var l=window.getComputedStyle(a),d=parseFloat(l.getPropertyValue("animation-duration")||"0"),_=parseFloat(l.getPropertyValue("transition-duration")||"0");return d>0||_>0},ct=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=pr();d&&Ae(d)&&(l&&(d.style.transition="none",d.style.width="100%"),setTimeout(function(){d.style.transition="width ".concat(a/1e3,"s linear"),d.style.width="0%"},10))},ns=function(){var a=pr();if(a){var l=parseInt(window.getComputedStyle(a).width);a.style.removeProperty("transition"),a.style.width="100%";var d=parseInt(window.getComputedStyle(a).width),_=l/d*100;a.style.width="".concat(_,"%")}},oi=function(){return typeof window>"u"||typeof document>"u"},ai=`
 <div aria-labelledby="`.concat(D.title,'" aria-describedby="').concat(D["html-container"],'" class="').concat(D.popup,`" tabindex="-1">
   <button type="button" class="`).concat(D.close,`"></button>
   <ul class="`).concat(D["progress-steps"],`"></ul>
   <div class="`).concat(D.icon,`"></div>
   <img class="`).concat(D.image,`" />
   <h2 class="`).concat(D.title,'" id="').concat(D.title,`"></h2>
   <div class="`).concat(D["html-container"],'" id="').concat(D["html-container"],`"></div>
   <input class="`).concat(D.input,'" id="').concat(D.input,`" />
   <input type="file" class="`).concat(D.file,`" />
   <div class="`).concat(D.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(D.select,'" id="').concat(D.select,`"></select>
   <div class="`).concat(D.radio,`"></div>
   <label class="`).concat(D.checkbox,`">
     <input type="checkbox" id="`).concat(D.checkbox,`" />
     <span class="`).concat(D.label,`"></span>
   </label>
   <textarea class="`).concat(D.textarea,'" id="').concat(D.textarea,`"></textarea>
   <div class="`).concat(D["validation-message"],'" id="').concat(D["validation-message"],`"></div>
   <div class="`).concat(D.actions,`">
     <div class="`).concat(D.loader,`"></div>
     <button type="button" class="`).concat(D.confirm,`"></button>
     <button type="button" class="`).concat(D.deny,`"></button>
     <button type="button" class="`).concat(D.cancel,`"></button>
   </div>
   <div class="`).concat(D.footer,`"></div>
   <div class="`).concat(D["timer-progress-bar-container"],`">
     <div class="`).concat(D["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),ci=function(){var a=He();return a?(a.remove(),nt([document.documentElement,document.body],[D["no-backdrop"],D["toast-shown"],D["has-column"]]),!0):!1},Tt=function(){G.currentInstance.resetValidationMessage()},rs=function(){var a=se(),l=Ze(a,D.input),d=Ze(a,D.file),_=a.querySelector(".".concat(D.range," input")),O=a.querySelector(".".concat(D.range," output")),F=Ze(a,D.select),X=a.querySelector(".".concat(D.checkbox," input")),Q=Ze(a,D.textarea);l.oninput=Tt,d.onchange=Tt,F.onchange=Tt,X.onchange=Tt,Q.oninput=Tt,_.oninput=function(){Tt(),O.value=_.value},_.onchange=function(){Tt(),O.value=_.value}},qo=function(a){return typeof a=="string"?document.querySelector(a):a},yr=function(a){var l=se();l.setAttribute("role",a.toast?"alert":"dialog"),l.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||l.setAttribute("aria-modal","true")},is=function(a){window.getComputedStyle(a).direction==="rtl"&&H(He(),D.rtl)},li=function(a){var l=ci();if(oi()){at("SweetAlert2 requires document to initialize");return}var d=document.createElement("div");d.className=D.container,l&&H(d,D["no-transition"]),Le(d,ai);var _=qo(a.target);_.appendChild(d),yr(a),is(_),rs()},Ut=function(a,l){a instanceof HTMLElement?l.appendChild(a):Ie(a)==="object"?Bt(a,l):a&&Le(l,a)},Bt=function(a,l){a.jquery?ui(l,a):Le(l,a.toString())},ui=function(a,l){if(a.textContent="",0 in l)for(var d=0;d in l;d++)a.appendChild(l[d].cloneNode(!0));else a.appendChild(l.cloneNode(!0))},jt=function(){if(oi())return!1;var m=document.createElement("div");return typeof m.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof m.style.animation<"u"?"animationend":!1}(),ss=function(a,l){var d=rn(),_=Ft();!d||!_||(!l.showConfirmButton&&!l.showDenyButton&&!l.showCancelButton?De(d):_e(d),Fe(d,l,"actions"),os(d,_,l),Le(_,l.loaderHtml||""),Fe(_,l,"loader"))};function os(m,a,l){var d=tt(),_=Mt(),O=Lt();!d||!_||!O||(Mn(d,"confirm",l),Mn(_,"deny",l),Mn(O,"cancel",l),as(d,_,O,l),l.reverseButtons&&(l.toast?(m.insertBefore(O,d),m.insertBefore(_,d)):(m.insertBefore(O,a),m.insertBefore(_,a),m.insertBefore(d,a))))}function as(m,a,l,d){if(!d.buttonsStyling){nt([m,a,l],D.styled);return}H([m,a,l],D.styled),d.confirmButtonColor&&(m.style.backgroundColor=d.confirmButtonColor,H(m,D["default-outline"])),d.denyButtonColor&&(a.style.backgroundColor=d.denyButtonColor,H(a,D["default-outline"])),d.cancelButtonColor&&(l.style.backgroundColor=d.cancelButtonColor,H(l,D["default-outline"]))}function Mn(m,a,l){var d=Jr(a);xn(m,l["show".concat(d,"Button")],"inline-block"),Le(m,l["".concat(a,"ButtonText")]||""),m.setAttribute("aria-label",l["".concat(a,"ButtonAriaLabel")]||""),m.className=D[a],Fe(m,l,"".concat(a,"Button"))}var hi=function(a,l){var d=ni();d&&(Le(d,l.closeButtonHtml||""),Fe(d,l,"closeButton"),xn(d,l.showCloseButton),d.setAttribute("aria-label",l.closeButtonAriaLabel||""))},cs=function(a,l){var d=He();d&&(ls(d,l.backdrop),$o(d,l.position),Ho(d,l.grow),Fe(d,l,"container"))};function ls(m,a){typeof a=="string"?m.style.background=a:a||H([document.documentElement,document.body],D["no-backdrop"])}function $o(m,a){a&&(a in D?H(m,D[a]):($e('The "position" parameter is not valid, defaulting to "center"'),H(m,D.center)))}function Ho(m,a){a&&H(m,D["grow-".concat(a)])}var le={innerParams:new WeakMap,domCache:new WeakMap},us=["input","file","range","select","radio","checkbox","textarea"],zo=function(a,l){var d=se();if(d){var _=le.innerParams.get(a),O=!_||l.input!==_.input;us.forEach(function(F){var X=Ze(d,D[F]);X&&(_r(F,l.inputAttributes),X.className=D[F],O&&De(X))}),l.input&&(O&&qt(l),vr(l))}},qt=function(a){if(a.input){if(!ue[a.input]){at("Unexpected type of input! Expected ".concat(Object.keys(ue).join(" | "),', got "').concat(a.input,'"'));return}var l=Fn(a.input),d=ue[a.input](l,a);_e(l),a.inputAutoFocus&&setTimeout(function(){sn(d)})}},pt=function(a){for(var l=0;l<a.attributes.length;l++){var d=a.attributes[l].name;["id","type","value","style"].includes(d)||a.removeAttribute(d)}},_r=function(a,l){var d=Nn(se(),a);if(d){pt(d);for(var _ in l)d.setAttribute(_,l[_])}},vr=function(a){var l=Fn(a.input);Ie(a.customClass)==="object"&&H(l,a.customClass.input)},Er=function(a,l){(!a.placeholder||l.inputPlaceholder)&&(a.placeholder=l.inputPlaceholder)},ae=function(a,l,d){if(d.inputLabel){var _=document.createElement("label"),O=D["input-label"];_.setAttribute("for",a.id),_.className=O,Ie(d.customClass)==="object"&&H(_,d.customClass.inputLabel),_.innerText=d.inputLabel,l.insertAdjacentElement("beforebegin",_)}},Fn=function(a){return Ze(se(),D[a]||D.input)},bt=function(a,l){["string","number"].includes(Ie(l))?a.value="".concat(l):ei(l)||$e('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(Ie(l),'"'))},ue={};ue.text=ue.email=ue.password=ue.number=ue.tel=ue.url=ue.search=ue.date=ue["datetime-local"]=ue.time=ue.week=ue.month=function(m,a){return bt(m,a.inputValue),ae(m,m,a),Er(m,a),m.type=a.input,m},ue.file=function(m,a){return ae(m,m,a),Er(m,a),m},ue.range=function(m,a){var l=m.querySelector("input"),d=m.querySelector("output");return bt(l,a.inputValue),l.type=a.input,bt(d,a.inputValue),ae(l,m,a),m},ue.select=function(m,a){if(m.textContent="",a.inputPlaceholder){var l=document.createElement("option");Le(l,a.inputPlaceholder),l.value="",l.disabled=!0,l.selected=!0,m.appendChild(l)}return ae(m,m,a),m},ue.radio=function(m){return m.textContent="",m},ue.checkbox=function(m,a){var l=Nn(se(),"checkbox");l.value="1",l.checked=!!a.inputValue;var d=m.querySelector("span");return Le(d,a.inputPlaceholder),l},ue.textarea=function(m,a){bt(m,a.inputValue),Er(m,a),ae(m,m,a);var l=function(_){return parseInt(window.getComputedStyle(_).marginLeft)+parseInt(window.getComputedStyle(_).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var d=parseInt(window.getComputedStyle(se()).width),_=function(){if(document.body.contains(m)){var F=m.offsetWidth+l(m);F>d?se().style.width="".concat(F,"px"):rt(se(),"width",a.width)}};new MutationObserver(_).observe(m,{attributes:!0,attributeFilter:["style"]})}}),m};var Wo=function(a,l){var d=dr();d&&(It(d),Fe(d,l,"htmlContainer"),l.html?(Ut(l.html,d),_e(d,"block")):l.text?(d.textContent=l.text,_e(d,"block")):De(d),zo(a,l))},hs=function(a,l){var d=fr();d&&(It(d),xn(d,l.footer,"block"),l.footer&&Ut(l.footer,d),Fe(d,l,"footer"))},Ko=function(a,l){var d=le.innerParams.get(a),_=On();if(_){if(d&&l.icon===d.icon){mt(_,l),ds(_,l);return}if(!l.icon&&!l.iconHtml){De(_);return}if(l.icon&&Object.keys(lr).indexOf(l.icon)===-1){at('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(l.icon,'"')),De(_);return}_e(_),mt(_,l),ds(_,l),H(_,l.showClass&&l.showClass.icon)}},ds=function(a,l){for(var d=0,_=Object.entries(lr);d<_.length;d++){var O=A(_[d],2),F=O[0],X=O[1];l.icon!==F&&nt(a,X)}H(a,l.icon&&lr[l.icon]),fs(a,l),Go(),Fe(a,l,"icon")},Go=function(){var a=se();if(a)for(var l=window.getComputedStyle(a).getPropertyValue("background-color"),d=a.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),_=0;_<d.length;_++)d[_].style.backgroundColor=l},Qo=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Un=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,mt=function(a,l){if(!(!l.icon&&!l.iconHtml)){var d=a.innerHTML,_="";if(l.iconHtml)_=di(l.iconHtml);else if(l.icon==="success")_=Qo,d=d.replace(/ style=".*?"/g,"");else if(l.icon==="error")_=Un;else if(l.icon){var O={question:"?",warning:"!",info:"i"};_=di(O[l.icon])}d.trim()!==_.trim()&&Le(a,_)}},fs=function(a,l){if(l.iconColor){a.style.color=l.iconColor,a.style.borderColor=l.iconColor;for(var d=0,_=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];d<_.length;d++){var O=_[d];es(a,O,"background-color",l.iconColor)}es(a,".swal2-success-ring","border-color",l.iconColor)}},di=function(a){return'<div class="'.concat(D["icon-content"],'">').concat(a,"</div>")},ps=function(a,l){var d=Te();if(d){if(!l.imageUrl){De(d);return}_e(d,""),d.setAttribute("src",l.imageUrl),d.setAttribute("alt",l.imageAlt||""),rt(d,"width",l.imageWidth),rt(d,"height",l.imageHeight),d.className=D.image,Fe(d,l,"image")}},on=function(a,l){var d=He(),_=se();if(!(!d||!_)){if(l.toast){rt(d,"width",l.width),_.style.width="100%";var O=Ft();O&&_.insertBefore(O,On())}else rt(_,"width",l.width);rt(_,"padding",l.padding),l.color&&(_.style.color=l.color),l.background&&(_.style.background=l.background),De(xt()),Yo(_,l)}},Yo=function(a,l){var d=l.showClass||{};a.className="".concat(D.popup," ").concat(Ae(a)?d.popup:""),l.toast?(H([document.documentElement,document.body],D["toast-shown"]),H(a,D.toast)):H(a,D.modal),Fe(a,l,"popup"),typeof l.customClass=="string"&&H(a,l.customClass),l.icon&&H(a,D["icon-".concat(l.icon)])},Xo=function(a,l){var d=be();if(d){var _=l.progressSteps,O=l.currentProgressStep;if(!_||_.length===0||O===void 0){De(d);return}_e(d),d.textContent="",O>=_.length&&$e("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),_.forEach(function(F,X){var Q=Jo(F);if(d.appendChild(Q),X===O&&H(Q,D["active-progress-step"]),X!==_.length-1){var we=At(l);d.appendChild(we)}})}},Jo=function(a){var l=document.createElement("li");return H(l,D["progress-step"]),Le(l,a),l},At=function(a){var l=document.createElement("li");return H(l,D["progress-step-line"]),a.progressStepsDistance&&rt(l,"width",a.progressStepsDistance),l},Zo=function(a,l){var d=hr();d&&(It(d),xn(d,l.title||l.titleText,"block"),l.title&&Ut(l.title,d),l.titleText&&(d.innerText=l.titleText),Fe(d,l,"title"))},ms=function(a,l){on(a,l),cs(a,l),Xo(a,l),Ko(a,l),ps(a,l),Zo(a,l),hi(a,l),Wo(a,l),ss(a,l),hs(a,l);var d=se();typeof l.didRender=="function"&&d&&l.didRender(d)},Bn=function(){return Ae(se())},jn=function(){var a;return(a=tt())===null||a===void 0?void 0:a.click()},gs=function(){var a;return(a=Mt())===null||a===void 0?void 0:a.click()},qn=function(){var a;return(a=Lt())===null||a===void 0?void 0:a.click()},lt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),fi=function(a){a.keydownTarget&&a.keydownHandlerAdded&&(a.keydownTarget.removeEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!1)},pi=function(a,l,d){fi(a),l.toast||(a.keydownHandler=function(_){return ys(l,_,d)},a.keydownTarget=l.keydownListenerCapture?window:se(),a.keydownListenerCapture=l.keydownListenerCapture,a.keydownTarget.addEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!0)},he=function(a,l){var d,_=mr();if(_.length){a=a+l,a===_.length?a=0:a===-1&&(a=_.length-1),_[a].focus();return}(d=se())===null||d===void 0||d.focus()},ws=["ArrowRight","ArrowDown"],ea=["ArrowLeft","ArrowUp"],ys=function(a,l,d){a&&(l.isComposing||l.keyCode===229||(a.stopKeydownPropagation&&l.stopPropagation(),l.key==="Enter"?_s(l,a):l.key==="Tab"?vs(l):[].concat(ws,ea).includes(l.key)?Ir(l.key):l.key==="Escape"&&Es(l,a,d)))},_s=function(a,l){if(en(l.allowEnterKey)){var d=Nn(se(),l.input);if(a.target&&d&&a.target instanceof HTMLElement&&a.target.outerHTML===d.outerHTML){if(["textarea","file"].includes(l.input))return;jn(),a.preventDefault()}}},vs=function(a){for(var l=a.target,d=mr(),_=-1,O=0;O<d.length;O++)if(l===d[O]){_=O;break}a.shiftKey?he(_,-1):he(_,1),a.stopPropagation(),a.preventDefault()},Ir=function(a){var l=rn(),d=tt(),_=Mt(),O=Lt();if(!(!l||!d||!_||!O)){var F=[d,_,O];if(!(document.activeElement instanceof HTMLElement&&!F.includes(document.activeElement))){var X=ws.includes(a)?"nextElementSibling":"previousElementSibling",Q=document.activeElement;if(Q){for(var we=0;we<l.children.length;we++){if(Q=Q[X],!Q)return;if(Q instanceof HTMLButtonElement&&Ae(Q))break}Q instanceof HTMLButtonElement&&Q.focus()}}}},Es=function(a,l,d){en(l.allowEscapeKey)&&(a.preventDefault(),d(lt.esc))},ze={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Is=function(){var a=He(),l=Array.from(document.body.children);l.forEach(function(d){d.contains(a)||(d.hasAttribute("aria-hidden")&&d.setAttribute("data-previous-aria-hidden",d.getAttribute("aria-hidden")||""),d.setAttribute("aria-hidden","true"))})},Ts=function(){var a=Array.from(document.body.children);a.forEach(function(l){l.hasAttribute("data-previous-aria-hidden")?(l.setAttribute("aria-hidden",l.getAttribute("data-previous-aria-hidden")||""),l.removeAttribute("data-previous-aria-hidden")):l.removeAttribute("aria-hidden")})},an=typeof window<"u"&&!!window.GestureEvent,bs=function(){if(an&&!Me(document.body,D.iosfix)){var a=document.body.scrollTop;document.body.style.top="".concat(a*-1,"px"),H(document.body,D.iosfix),mi()}},mi=function(){var a=He();if(a){var l;a.ontouchstart=function(d){l=Tr(d)},a.ontouchmove=function(d){l&&(d.preventDefault(),d.stopPropagation())}}},Tr=function(a){var l=a.target,d=He(),_=dr();return!d||!_||As(a)||br(a)?!1:l===d||!wr(d)&&l instanceof HTMLElement&&l.tagName!=="INPUT"&&l.tagName!=="TEXTAREA"&&!(wr(_)&&_.contains(l))},As=function(a){return a.touches&&a.touches.length&&a.touches[0].touchType==="stylus"},br=function(a){return a.touches&&a.touches.length>1},ta=function(){if(Me(document.body,D.iosfix)){var a=parseInt(document.body.style.top,10);nt(document.body,D.iosfix),document.body.style.top="",document.body.scrollTop=a*-1}},Cs=function(){var a=document.createElement("div");a.className=D["scrollbar-measure"],document.body.appendChild(a);var l=a.getBoundingClientRect().width-a.clientWidth;return document.body.removeChild(a),l},ut=null,Ps=function(a){ut===null&&(document.body.scrollHeight>window.innerHeight||a==="scroll")&&(ut=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(ut+Cs(),"px"))},Ss=function(){ut!==null&&(document.body.style.paddingRight="".concat(ut,"px"),ut=null)};function Ar(m,a,l,d){Et()?yi(m,d):(jo(l).then(function(){return yi(m,d)}),fi(G)),an?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),gr()&&(Ss(),ta(),Ts()),gi()}function gi(){nt([document.documentElement,document.body],[D.shown,D["height-auto"],D["no-backdrop"],D["toast-shown"]])}function gt(m){m=$t(m);var a=ze.swalPromiseResolve.get(this),l=Cr(this);this.isAwaitingPromise?m.isDismissed||(cn(this),a(m)):l&&a(m)}var Cr=function(a){var l=se();if(!l)return!1;var d=le.innerParams.get(a);if(!d||Me(l,d.hideClass.popup))return!1;nt(l,d.showClass.popup),H(l,d.hideClass.popup);var _=He();return nt(_,d.showClass.backdrop),H(_,d.hideClass.backdrop),Rs(a,l,d),!0};function wi(m){var a=ze.swalPromiseReject.get(this);cn(this),a&&a(m)}var cn=function(a){a.isAwaitingPromise&&(delete a.isAwaitingPromise,le.innerParams.get(a)||a._destroy())},$t=function(a){return typeof a>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},a)},Rs=function(a,l,d){var _=He(),O=jt&&Ln(l);typeof d.willClose=="function"&&d.willClose(l),O?ks(a,l,_,d.returnFocus,d.didClose):Ar(a,_,d.returnFocus,d.didClose)},ks=function(a,l,d,_,O){jt&&(G.swalCloseEventFinishedCallback=Ar.bind(null,a,d,_,O),l.addEventListener(jt,function(F){F.target===l&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback)}))},yi=function(a,l){setTimeout(function(){typeof l=="function"&&l.bind(a.params)(),a._destroy&&a._destroy()})},Ht=function(a){var l=se();if(l||new Ls,l=se(),!!l){var d=Ft();Et()?De(On()):Pr(l,a),_e(d),l.setAttribute("data-loading","true"),l.setAttribute("aria-busy","true"),l.focus()}},Pr=function(a,l){var d=rn(),_=Ft();!d||!_||(!l&&Ae(tt())&&(l=tt()),_e(d),l&&(De(l),_.setAttribute("data-button-to-replace",l.className),d.insertBefore(_,l)),H([a,d],D.loading))},Ye=function(a,l){l.input==="select"||l.input==="radio"?u(a,l):["text","email","number","tel","textarea"].some(function(d){return d===l.input})&&(Dn(l.inputValue)||ei(l.inputValue))&&(Ht(tt()),p(a,l))},Ds=function(a,l){var d=a.getInput();if(!d)return null;switch(l.input){case"checkbox":return Os(d);case"radio":return ln(d);case"file":return s(d);default:return l.inputAutoTrim?d.value.trim():d.value}},Os=function(a){return a.checked?1:0},ln=function(a){return a.checked?a.value:null},s=function(a){return a.files&&a.files.length?a.getAttribute("multiple")!==null?a.files:a.files[0]:null},u=function(a,l){var d=se();if(d){var _=function(F){l.input==="select"?w(d,k(F),l):l.input==="radio"&&C(d,k(F),l)};Dn(l.inputOptions)||ei(l.inputOptions)?(Ht(tt()),tn(l.inputOptions).then(function(O){a.hideLoading(),_(O)})):Ie(l.inputOptions)==="object"?_(l.inputOptions):at("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(Ie(l.inputOptions)))}},p=function(a,l){var d=a.getInput();d&&(De(d),tn(l.inputValue).then(function(_){d.value=l.input==="number"?"".concat(parseFloat(_)||0):"".concat(_),_e(d),d.focus(),a.hideLoading()}).catch(function(_){at("Error in inputValue promise: ".concat(_)),d.value="",_e(d),d.focus(),a.hideLoading()}))};function w(m,a,l){var d=Ze(m,D.select);if(d){var _=function(F,X,Q){var we=document.createElement("option");we.value=Q,Le(we,X),we.selected=L(Q,l.inputValue),F.appendChild(we)};a.forEach(function(O){var F=O[0],X=O[1];if(Array.isArray(X)){var Q=document.createElement("optgroup");Q.label=F,Q.disabled=!1,d.appendChild(Q),X.forEach(function(we){return _(Q,we[1],we[0])})}else _(d,X,F)}),d.focus()}}function C(m,a,l){var d=Ze(m,D.radio);if(d){a.forEach(function(O){var F=O[0],X=O[1],Q=document.createElement("input"),we=document.createElement("label");Q.type="radio",Q.name=D.radio,Q.value=F,L(F,l.inputValue)&&(Q.checked=!0);var _i=document.createElement("span");Le(_i,X),_i.className=D.label,we.appendChild(Q),we.appendChild(_i),d.appendChild(we)});var _=d.querySelectorAll("input");_.length&&_[0].focus()}}var k=function m(a){var l=[];return a instanceof Map?a.forEach(function(d,_){var O=d;Ie(O)==="object"&&(O=m(O)),l.push([_,O])}):Object.keys(a).forEach(function(d){var _=a[d];Ie(_)==="object"&&(_=m(_)),l.push([d,_])}),l},L=function(a,l){return!!l&&l.toString()===a.toString()},oe=void 0,Ce=function(a){var l=le.innerParams.get(a);a.disableButtons(),l.input?Pe(a,"confirm"):na(a,!0)},ne=function(a){var l=le.innerParams.get(a);a.disableButtons(),l.returnInputValueOnDeny?Pe(a,"deny"):Xe(a,!1)},Oe=function(a,l){a.disableButtons(),l(lt.cancel)},Pe=function(a,l){var d=le.innerParams.get(a);if(!d.input){at('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Jr(l)));return}var _=a.getInput(),O=Ds(a,d);d.inputValidator?un(a,O,l):_&&!_.checkValidity()?(a.enableButtons(),a.showValidationMessage(d.validationMessage||_.validationMessage)):l==="deny"?Xe(a,O):na(a,O)},un=function(a,l,d){var _=le.innerParams.get(a);a.disableInput();var O=Promise.resolve().then(function(){return tn(_.inputValidator(l,_.validationMessage))});O.then(function(F){a.enableButtons(),a.enableInput(),F?a.showValidationMessage(F):d==="deny"?Xe(a,l):na(a,l)})},Xe=function(a,l){var d=le.innerParams.get(a||oe);if(d.showLoaderOnDeny&&Ht(Mt()),d.preDeny){a.isAwaitingPromise=!0;var _=Promise.resolve().then(function(){return tn(d.preDeny(l,d.validationMessage))});_.then(function(O){O===!1?(a.hideLoading(),cn(a)):a.close({isDenied:!0,value:typeof O>"u"?l:O})}).catch(function(O){return Sr(a||oe,O)})}else a.close({isDenied:!0,value:l})},$n=function(a,l){a.close({isConfirmed:!0,value:l})},Sr=function(a,l){a.rejectPromise(l)},na=function(a,l){var d=le.innerParams.get(a||oe);if(d.showLoaderOnConfirm&&Ht(),d.preConfirm){a.resetValidationMessage(),a.isAwaitingPromise=!0;var _=Promise.resolve().then(function(){return tn(d.preConfirm(l,d.validationMessage))});_.then(function(O){Ae(xt())||O===!1?(a.hideLoading(),cn(a)):$n(a,typeof O>"u"?l:O)}).catch(function(O){return Sr(a||oe,O)})}else $n(a,l)};function Vs(){var m=le.innerParams.get(this);if(m){var a=le.domCache.get(this);De(a.loader),Et()?m.icon&&_e(On()):lf(a),nt([a.popup,a.actions],D.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),a.confirmButton.disabled=!1,a.denyButton.disabled=!1,a.cancelButton.disabled=!1}}var lf=function(a){var l=a.popup.getElementsByClassName(a.loader.getAttribute("data-button-to-replace"));l.length?_e(l[0],"inline-block"):ts()&&De(a.actions)};function Dc(){var m=le.innerParams.get(this),a=le.domCache.get(this);return a?Nn(a.popup,m.input):null}function Oc(m,a,l){var d=le.domCache.get(m);a.forEach(function(_){d[_].disabled=l})}function Vc(m,a){var l=se();if(!(!l||!m))if(m.type==="radio")for(var d=l.querySelectorAll('[name="'.concat(D.radio,'"]')),_=0;_<d.length;_++)d[_].disabled=a;else m.disabled=a}function Nc(){Oc(this,["confirmButton","denyButton","cancelButton"],!1)}function xc(){Oc(this,["confirmButton","denyButton","cancelButton"],!0)}function Lc(){Vc(this.getInput(),!1)}function Mc(){Vc(this.getInput(),!0)}function Fc(m){var a=le.domCache.get(this),l=le.innerParams.get(this);Le(a.validationMessage,m),a.validationMessage.className=D["validation-message"],l.customClass&&l.customClass.validationMessage&&H(a.validationMessage,l.customClass.validationMessage),_e(a.validationMessage);var d=this.getInput();d&&(d.setAttribute("aria-invalid","true"),d.setAttribute("aria-describedby",D["validation-message"]),sn(d),H(d,D.inputerror))}function Uc(){var m=le.domCache.get(this);m.validationMessage&&De(m.validationMessage);var a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),nt(a,D.inputerror))}var Rr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},uf=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],hf={},df=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Bc=function(a){return Object.prototype.hasOwnProperty.call(Rr,a)},jc=function(a){return uf.indexOf(a)!==-1},qc=function(a){return hf[a]},ff=function(a){Bc(a)||$e('Unknown parameter "'.concat(a,'"'))},pf=function(a){df.includes(a)&&$e('The parameter "'.concat(a,'" is incompatible with toasts'))},mf=function(a){var l=qc(a);l&&ur(a,l)},gf=function(a){a.backdrop===!1&&a.allowOutsideClick&&$e('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var l in a)ff(l),a.toast&&pf(l),mf(l)};function $c(m){var a=se(),l=le.innerParams.get(this);if(!a||Me(a,l.hideClass.popup)){$e("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var d=wf(m),_=Object.assign({},l,d);ms(this,_),le.innerParams.set(this,_),Object.defineProperties(this,{params:{value:Object.assign({},this.params,m),writable:!1,enumerable:!0}})}var wf=function(a){var l={};return Object.keys(a).forEach(function(d){jc(d)?l[d]=a[d]:$e("Invalid parameter to update: ".concat(d))}),l};function Hc(){var m=le.domCache.get(this),a=le.innerParams.get(this);if(!a){zc(this);return}m.popup&&G.swalCloseEventFinishedCallback&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback),typeof a.didDestroy=="function"&&a.didDestroy(),yf(this)}var yf=function(a){zc(a),delete a.params,delete G.keydownHandler,delete G.keydownTarget,delete G.currentInstance},zc=function(a){a.isAwaitingPromise?(ra(le,a),a.isAwaitingPromise=!0):(ra(ze,a),ra(le,a),delete a.isAwaitingPromise,delete a.disableButtons,delete a.enableButtons,delete a.getInput,delete a.disableInput,delete a.enableInput,delete a.hideLoading,delete a.disableLoading,delete a.showValidationMessage,delete a.resetValidationMessage,delete a.close,delete a.closePopup,delete a.closeModal,delete a.closeToast,delete a.rejectPromise,delete a.update,delete a._destroy)},ra=function(a,l){for(var d in a)a[d].delete(l)},_f=Object.freeze({__proto__:null,_destroy:Hc,close:gt,closeModal:gt,closePopup:gt,closeToast:gt,disableButtons:xc,disableInput:Mc,disableLoading:Vs,enableButtons:Nc,enableInput:Lc,getInput:Dc,handleAwaitingPromise:cn,hideLoading:Vs,rejectPromise:wi,resetValidationMessage:Uc,showValidationMessage:Fc,update:$c}),vf=function(a,l,d){a.toast?Ef(a,l,d):(Tf(l),bf(l),Af(a,l,d))},Ef=function(a,l,d){l.popup.onclick=function(){a&&(If(a)||a.timer||a.input)||d(lt.close)}},If=function(a){return!!(a.showConfirmButton||a.showDenyButton||a.showCancelButton||a.showCloseButton)},Ns=!1,Tf=function(a){a.popup.onmousedown=function(){a.container.onmouseup=function(l){a.container.onmouseup=function(){},l.target===a.container&&(Ns=!0)}}},bf=function(a){a.container.onmousedown=function(l){l.target===a.container&&l.preventDefault(),a.popup.onmouseup=function(d){a.popup.onmouseup=function(){},(d.target===a.popup||d.target instanceof HTMLElement&&a.popup.contains(d.target))&&(Ns=!0)}}},Af=function(a,l,d){l.container.onclick=function(_){if(Ns){Ns=!1;return}_.target===l.container&&en(a.allowOutsideClick)&&d(lt.backdrop)}},Cf=function(a){return Ie(a)==="object"&&a.jquery},Wc=function(a){return a instanceof Element||Cf(a)},Pf=function(a){var l={};return Ie(a[0])==="object"&&!Wc(a[0])?Object.assign(l,a[0]):["title","html","icon"].forEach(function(d,_){var O=a[_];typeof O=="string"||Wc(O)?l[d]=O:O!==void 0&&at("Unexpected type of ".concat(d,'! Expected "string" or "Element", got ').concat(Ie(O)))}),l};function Sf(){for(var m=this,a=arguments.length,l=new Array(a),d=0;d<a;d++)l[d]=arguments[d];return V(m,l)}function Rf(m){var a=function(l){function d(){return g(this,d),h(this,d,arguments)}return ie(d,l),j(d,[{key:"_main",value:function(O,F){return ee(J(d.prototype),"_main",this).call(this,O,Object.assign({},m,F))}}])}(this);return a}var kf=function(){return G.timeout&&G.timeout.getTimerLeft()},Kc=function(){if(G.timeout)return ns(),G.timeout.stop()},Gc=function(){if(G.timeout){var a=G.timeout.start();return ct(a),a}},Df=function(){var a=G.timeout;return a&&(a.running?Kc():Gc())},Of=function(a){if(G.timeout){var l=G.timeout.increase(a);return ct(l,!0),l}},Vf=function(){return!!(G.timeout&&G.timeout.isRunning())},Qc=!1,ia={};function Nf(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";ia[m]=this,Qc||(document.body.addEventListener("click",xf),Qc=!0)}var xf=function(a){for(var l=a.target;l&&l!==document;l=l.parentNode)for(var d in ia){var _=l.getAttribute(d);if(_){ia[d].fire({template:_});return}}},Lf=Object.freeze({__proto__:null,argsToParams:Pf,bindClickHandler:Nf,clickCancel:qn,clickConfirm:jn,clickDeny:gs,enableLoading:Ht,fire:Sf,getActions:rn,getCancelButton:Lt,getCloseButton:ni,getConfirmButton:tt,getContainer:He,getDenyButton:Mt,getFocusableElements:mr,getFooter:fr,getHtmlContainer:dr,getIcon:On,getIconContent:ti,getImage:Te,getInputLabel:Vn,getLoader:Ft,getPopup:se,getProgressSteps:be,getTimerLeft:kf,getTimerProgressBar:pr,getTitle:hr,getValidationMessage:xt,increaseTimer:Of,isDeprecatedParameter:qc,isLoading:ii,isTimerRunning:Vf,isUpdatableParameter:jc,isValidParameter:Bc,isVisible:Bn,mixin:Rf,resumeTimer:Gc,showLoading:Ht,stopTimer:Kc,toggleTimer:Df}),Mf=function(){function m(a,l){g(this,m),this.callback=a,this.remaining=l,this.running=!1,this.start()}return j(m,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(l){var d=this.running;return d&&this.stop(),this.remaining+=l,d&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),Yc=["swal-title","swal-html","swal-footer"],Ff=function(a){var l=typeof a.template=="string"?document.querySelector(a.template):a.template;if(!l)return{};var d=l.content;Wf(d);var _=Object.assign(Uf(d),Bf(d),jf(d),qf(d),$f(d),Hf(d),zf(d,Yc));return _},Uf=function(a){var l={},d=Array.from(a.querySelectorAll("swal-param"));return d.forEach(function(_){Hn(_,["name","value"]);var O=_.getAttribute("name"),F=_.getAttribute("value");typeof Rr[O]=="boolean"?l[O]=F!=="false":Ie(Rr[O])==="object"?l[O]=JSON.parse(F):l[O]=F}),l},Bf=function(a){var l={},d=Array.from(a.querySelectorAll("swal-function-param"));return d.forEach(function(_){var O=_.getAttribute("name"),F=_.getAttribute("value");l[O]=new Function("return ".concat(F))()}),l},jf=function(a){var l={},d=Array.from(a.querySelectorAll("swal-button"));return d.forEach(function(_){Hn(_,["type","color","aria-label"]);var O=_.getAttribute("type");l["".concat(O,"ButtonText")]=_.innerHTML,l["show".concat(Jr(O),"Button")]=!0,_.hasAttribute("color")&&(l["".concat(O,"ButtonColor")]=_.getAttribute("color")),_.hasAttribute("aria-label")&&(l["".concat(O,"ButtonAriaLabel")]=_.getAttribute("aria-label"))}),l},qf=function(a){var l={},d=a.querySelector("swal-image");return d&&(Hn(d,["src","width","height","alt"]),d.hasAttribute("src")&&(l.imageUrl=d.getAttribute("src")||void 0),d.hasAttribute("width")&&(l.imageWidth=d.getAttribute("width")||void 0),d.hasAttribute("height")&&(l.imageHeight=d.getAttribute("height")||void 0),d.hasAttribute("alt")&&(l.imageAlt=d.getAttribute("alt")||void 0)),l},$f=function(a){var l={},d=a.querySelector("swal-icon");return d&&(Hn(d,["type","color"]),d.hasAttribute("type")&&(l.icon=d.getAttribute("type")),d.hasAttribute("color")&&(l.iconColor=d.getAttribute("color")),l.iconHtml=d.innerHTML),l},Hf=function(a){var l={},d=a.querySelector("swal-input");d&&(Hn(d,["type","label","placeholder","value"]),l.input=d.getAttribute("type")||"text",d.hasAttribute("label")&&(l.inputLabel=d.getAttribute("label")),d.hasAttribute("placeholder")&&(l.inputPlaceholder=d.getAttribute("placeholder")),d.hasAttribute("value")&&(l.inputValue=d.getAttribute("value")));var _=Array.from(a.querySelectorAll("swal-input-option"));return _.length&&(l.inputOptions={},_.forEach(function(O){Hn(O,["value"]);var F=O.getAttribute("value"),X=O.innerHTML;l.inputOptions[F]=X})),l},zf=function(a,l){var d={};for(var _ in l){var O=l[_],F=a.querySelector(O);F&&(Hn(F,[]),d[O.replace(/^swal-/,"")]=F.innerHTML.trim())}return d},Wf=function(a){var l=Yc.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(a.children).forEach(function(d){var _=d.tagName.toLowerCase();l.includes(_)||$e("Unrecognized element <".concat(_,">"))})},Hn=function(a,l){Array.from(a.attributes).forEach(function(d){l.indexOf(d.name)===-1&&$e(['Unrecognized attribute "'.concat(d.name,'" on <').concat(a.tagName.toLowerCase(),">."),"".concat(l.length?"Allowed attributes are: ".concat(l.join(", ")):"To set the value, use HTML within the element.")])})},Xc=10,Kf=function(a){var l=He(),d=se();typeof a.willOpen=="function"&&a.willOpen(d);var _=window.getComputedStyle(document.body),O=_.overflowY;Xf(l,d,a),setTimeout(function(){Qf(l,d)},Xc),gr()&&(Yf(l,a.scrollbarPadding,O),Is()),!Et()&&!G.previousActiveElement&&(G.previousActiveElement=document.activeElement),typeof a.didOpen=="function"&&setTimeout(function(){return a.didOpen(d)}),nt(l,D["no-transition"])},Gf=function m(a){var l=se();if(!(a.target!==l||!jt)){var d=He();l.removeEventListener(jt,m),d.style.overflowY="auto"}},Qf=function(a,l){jt&&Ln(l)?(a.style.overflowY="hidden",l.addEventListener(jt,Gf)):a.style.overflowY="auto"},Yf=function(a,l,d){bs(),l&&d!=="hidden"&&Ps(d),setTimeout(function(){a.scrollTop=0})},Xf=function(a,l,d){H(a,d.showClass.backdrop),d.animation?(l.style.setProperty("opacity","0","important"),_e(l,"grid"),setTimeout(function(){H(l,d.showClass.popup),l.style.removeProperty("opacity")},Xc)):_e(l,"grid"),H([document.documentElement,document.body],D.shown),d.heightAuto&&d.backdrop&&!d.toast&&H([document.documentElement,document.body],D["height-auto"])},Jc={email:function(a,l){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(a)?Promise.resolve():Promise.resolve(l||"Invalid email address")},url:function(a,l){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a)?Promise.resolve():Promise.resolve(l||"Invalid URL")}};function Jf(m){m.inputValidator||(m.input==="email"&&(m.inputValidator=Jc.email),m.input==="url"&&(m.inputValidator=Jc.url))}function Zf(m){(!m.target||typeof m.target=="string"&&!document.querySelector(m.target)||typeof m.target!="string"&&!m.target.appendChild)&&($e('Target parameter is not valid, defaulting to "body"'),m.target="body")}function ep(m){Jf(m),m.showLoaderOnConfirm&&!m.preConfirm&&$e(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Zf(m),typeof m.title=="string"&&(m.title=m.title.split(`
`).join("<br />")),li(m)}var Ct,xs=new WeakMap,ye=function(){function m(){if(g(this,m),P(this,xs,void 0),!(typeof window>"u")){Ct=this;for(var a=arguments.length,l=new Array(a),d=0;d<a;d++)l[d]=arguments[d];var _=Object.freeze(this.constructor.argsToParams(l));this.params=_,this.isAwaitingPromise=!1,R(xs,this,this._main(Ct.params))}}return j(m,[{key:"_main",value:function(l){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(gf(Object.assign({},d,l)),G.currentInstance){var _=ze.swalPromiseResolve.get(G.currentInstance),O=G.currentInstance.isAwaitingPromise;G.currentInstance._destroy(),O||_({isDismissed:!0}),gr()&&Ts()}G.currentInstance=Ct;var F=np(l,d);ep(F),Object.freeze(F),G.timeout&&(G.timeout.stop(),delete G.timeout),clearTimeout(G.restoreFocusTimeout);var X=rp(Ct);return ms(Ct,F),le.innerParams.set(Ct,F),tp(Ct,X,F)}},{key:"then",value:function(l){return y(xs,this).then(l)}},{key:"finally",value:function(l){return y(xs,this).finally(l)}}])}(),tp=function(a,l,d){return new Promise(function(_,O){var F=function(Q){a.close({isDismissed:!0,dismiss:Q})};ze.swalPromiseResolve.set(a,_),ze.swalPromiseReject.set(a,O),l.confirmButton.onclick=function(){Ce(a)},l.denyButton.onclick=function(){ne(a)},l.cancelButton.onclick=function(){Oe(a,F)},l.closeButton.onclick=function(){F(lt.close)},vf(d,l,F),pi(G,d,F),Ye(a,d),Kf(d),ip(G,d,F),sp(l,d),setTimeout(function(){l.container.scrollTop=0})})},np=function(a,l){var d=Ff(a),_=Object.assign({},Rr,l,d,a);return _.showClass=Object.assign({},Rr.showClass,_.showClass),_.hideClass=Object.assign({},Rr.hideClass,_.hideClass),_.animation===!1&&(_.showClass={backdrop:"swal2-noanimation"},_.hideClass={}),_},rp=function(a){var l={popup:se(),container:He(),actions:rn(),confirmButton:tt(),denyButton:Mt(),cancelButton:Lt(),loader:Ft(),closeButton:ni(),validationMessage:xt(),progressSteps:be()};return le.domCache.set(a,l),l},ip=function(a,l,d){var _=pr();De(_),l.timer&&(a.timeout=new Mf(function(){d("timer"),delete a.timeout},l.timer),l.timerProgressBar&&(_e(_),Fe(_,l,"timerProgressBar"),setTimeout(function(){a.timeout&&a.timeout.running&&ct(l.timer)})))},sp=function(a,l){if(!l.toast){if(!en(l.allowEnterKey)){ur("allowEnterKey"),cp();return}op(a)||ap(a,l)||he(-1,1)}},op=function(a){var l=a.popup.querySelectorAll("[autofocus]"),d=M(l),_;try{for(d.s();!(_=d.n()).done;){var O=_.value;if(O instanceof HTMLElement&&Ae(O))return O.focus(),!0}}catch(F){d.e(F)}finally{d.f()}return!1},ap=function(a,l){return l.focusDeny&&Ae(a.denyButton)?(a.denyButton.focus(),!0):l.focusCancel&&Ae(a.cancelButton)?(a.cancelButton.focus(),!0):l.focusConfirm&&Ae(a.confirmButton)?(a.confirmButton.focus(),!0):!1},cp=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var Zc=new Date,el=localStorage.getItem("swal-initiation");el?(Zc.getTime()-Date.parse(el))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var m=document.createElement("audio");m.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",m.loop=!0,document.body.appendChild(m),setTimeout(function(){m.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(Zc))}ye.prototype.disableButtons=xc,ye.prototype.enableButtons=Nc,ye.prototype.getInput=Dc,ye.prototype.disableInput=Mc,ye.prototype.enableInput=Lc,ye.prototype.hideLoading=Vs,ye.prototype.disableLoading=Vs,ye.prototype.showValidationMessage=Fc,ye.prototype.resetValidationMessage=Uc,ye.prototype.close=gt,ye.prototype.closePopup=gt,ye.prototype.closeModal=gt,ye.prototype.closeToast=gt,ye.prototype.rejectPromise=wi,ye.prototype.update=$c,ye.prototype._destroy=Hc,Object.assign(ye,Lf),Object.keys(_f).forEach(function(m){ye[m]=function(){if(Ct&&Ct[m]){var a;return(a=Ct)[m].apply(a,arguments)}return null}}),ye.DismissReason=lt,ye.version="11.12.0";var Ls=ye;return Ls.default=Ls,Ls}),typeof hn<"u"&&hn.Sweetalert2&&(hn.swal=hn.sweetAlert=hn.Swal=hn.SweetAlert=hn.Sweetalert2),typeof document<"u"&&function(t,r){var i=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(cf);var TI=cf.exports;const MI=lp(TI);export{MI as S,xI as a,CI as b,kI as c,LI as d,DI as e,OI as f,VI as g,AI as s,NI as u};
