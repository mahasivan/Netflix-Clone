function Tw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Aw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ov={exports:{}},Hl={},av={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),Sw=Symbol.for("react.portal"),Cw=Symbol.for("react.fragment"),Rw=Symbol.for("react.strict_mode"),Pw=Symbol.for("react.profiler"),kw=Symbol.for("react.provider"),Nw=Symbol.for("react.context"),Ow=Symbol.for("react.forward_ref"),Dw=Symbol.for("react.suspense"),xw=Symbol.for("react.memo"),Lw=Symbol.for("react.lazy"),Pp=Symbol.iterator;function Mw(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uv=Object.assign,cv={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||lv}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hv(){}hv.prototype=Fi.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||lv}var sd=id.prototype=new hv;sd.constructor=id;uv(sd,Fi.prototype);sd.isPureReactComponent=!0;var kp=Array.isArray,dv=Object.prototype.hasOwnProperty,od={current:null},fv={key:!0,ref:!0,__self:!0,__source:!0};function pv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dv.call(e,r)&&!fv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wo,type:t,key:s,ref:o,props:i,_owner:od.current}}function Vw(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function Uw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Np=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Uw(""+t.key):e.toString(36)}function Sa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wo:case Sw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ju(o,0):r,kp(i)?(n="",t!=null&&(n=t.replace(Np,"$&/")+"/"),Sa(i,e,n,"",function(h){return h})):i!=null&&(ad(i)&&(i=Vw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Np,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ju(s,l);o+=Sa(s,e,n,u,i)}else if(u=Mw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ju(s,l++),o+=Sa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zo(t,e,n){if(t==null)return t;var r=[],i=0;return Sa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Ca={transition:null},Fw={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:od};function mv(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Fi;J.Fragment=Cw;J.Profiler=Pw;J.PureComponent=id;J.StrictMode=Rw;J.Suspense=Dw;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fw;J.act=mv;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)dv.call(e,u)&&!fv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:wo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:Nw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kw,_context:t},t.Consumer=t};J.createElement=pv;J.createFactory=function(t){var e=pv.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:Ow,render:t}};J.isValidElement=ad;J.lazy=function(t){return{$$typeof:Lw,_payload:{_status:-1,_result:t},_init:bw}};J.memo=function(t,e){return{$$typeof:xw,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Ca.transition;Ca.transition={};try{t()}finally{Ca.transition=e}};J.unstable_act=mv;J.useCallback=function(t,e){return pt.current.useCallback(t,e)};J.useContext=function(t){return pt.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};J.useEffect=function(t,e){return pt.current.useEffect(t,e)};J.useId=function(){return pt.current.useId()};J.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return pt.current.useMemo(t,e)};J.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};J.useRef=function(t){return pt.current.useRef(t)};J.useState=function(t){return pt.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return pt.current.useTransition()};J.version="18.3.1";av.exports=J;var M=av.exports;const oe=Aw(M),jw=Tw({__proto__:null,default:oe},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bw=M,zw=Symbol.for("react.element"),$w=Symbol.for("react.fragment"),Hw=Object.prototype.hasOwnProperty,Ww=Bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kw={key:!0,ref:!0,__self:!0,__source:!0};function gv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Hw.call(e,r)&&!Kw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zw,type:t,key:s,ref:o,props:i,_owner:Ww.current}}Hl.Fragment=$w;Hl.jsx=gv;Hl.jsxs=gv;ov.exports=Hl;var L=ov.exports,Fc={},vv={exports:{}},kt={},yv={exports:{}},_v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,W){var K=z.length;z.push(W);e:for(;0<K;){var se=K-1>>>1,X=z[se];if(0<i(X,W))z[se]=W,z[K]=X,K=se;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],K=z.pop();if(K!==W){z[0]=K;e:for(var se=0,X=z.length,ee=X>>>1;se<ee;){var Ce=2*(se+1)-1,Pe=z[Ce],ze=Ce+1,lt=z[ze];if(0>i(Pe,K))ze<X&&0>i(lt,Pe)?(z[se]=lt,z[ze]=K,se=ze):(z[se]=Pe,z[Ce]=K,se=Ce);else if(ze<X&&0>i(lt,K))z[se]=lt,z[ze]=K,se=ze;else break e}}return W}function i(z,W){var K=z.sortIndex-W.sortIndex;return K!==0?K:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,_=3,R=!1,C=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=z)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function O(z){if(k=!1,E(z),!C)if(n(u)!==null)C=!0,Qt(V);else{var W=n(h);W!==null&&De(O,W.startTime-z)}}function V(z,W){C=!1,k&&(k=!1,I(p),p=-1),R=!0;var K=_;try{for(E(W),m=n(u);m!==null&&(!(m.expirationTime>W)||z&&!S());){var se=m.callback;if(typeof se=="function"){m.callback=null,_=m.priorityLevel;var X=se(m.expirationTime<=W);W=t.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),E(W)}else r(u);m=n(u)}if(m!==null)var ee=!0;else{var Ce=n(h);Ce!==null&&De(O,Ce.startTime-W),ee=!1}return ee}finally{m=null,_=K,R=!1}}var F=!1,w=null,p=-1,y=5,T=-1;function S(){return!(t.unstable_now()-T<y)}function P(){if(w!==null){var z=t.unstable_now();T=z;var W=!0;try{W=w(!0,z)}finally{W?A():(F=!1,w=null)}}else F=!1}var A;if(typeof v=="function")A=function(){v(P)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,gt=Se.port2;Se.port1.onmessage=P,A=function(){gt.postMessage(null)}}else A=function(){D(P,0)};function Qt(z){w=z,F||(F=!0,A())}function De(z,W){p=D(function(){z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||R||(C=!0,Qt(V))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var K=_;_=W;try{return z()}finally{_=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=_;_=z;try{return W()}finally{_=K}},t.unstable_scheduleCallback=function(z,W,K){var se=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=K+X,z={id:f++,callback:W,priorityLevel:z,startTime:K,expirationTime:X,sortIndex:-1},K>se?(z.sortIndex=K,e(h,z),n(u)===null&&z===n(h)&&(k?(I(p),p=-1):k=!0,De(O,K-se))):(z.sortIndex=X,e(u,z),C||R||(C=!0,Qt(V))),z},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(z){var W=_;return function(){var K=_;_=W;try{return z.apply(this,arguments)}finally{_=K}}}})(_v);yv.exports=_v;var Gw=yv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qw=M,Pt=Gw;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ev=new Set,$s={};function Hr(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for($s[t]=e,t=0;t<e.length;t++)Ev.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=Object.prototype.hasOwnProperty,Qw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Dp={};function Xw(t){return jc.call(Dp,t)?!0:jc.call(Op,t)?!1:Qw.test(t)?Dp[t]=!0:(Op[t]=!0,!1)}function Yw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jw(t,e,n,r){if(e===null||typeof e>"u"||Yw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,ud);Qe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,ud);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,ud);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jw(e,n,i,r)&&(n=null),r||i===null?Xw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),ri=Symbol.for("react.portal"),ii=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),$c=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),Tv=Symbol.for("react.offscreen"),xp=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Zu;function _s(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_s(t):""}function Zw(t){switch(t.tag){case 5:return _s(t.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function Hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ii:return"Fragment";case ri:return"Portal";case Bc:return"Profiler";case hd:return"StrictMode";case zc:return"Suspense";case $c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Iv:return(t.displayName||"Context")+".Consumer";case wv:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:Hc(t.type)||"Memo";case Mn:e=t._payload,t=t._init;try{return Hc(t(e))}catch{}}return null}function eI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hc(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tI(t){var e=Av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=tI(t))}function Sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cv(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function Kc(t,e){Cv(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gc(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gc(t,e,n){(e!=="number"||qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Es=Array.isArray;function gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Es(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Rv(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Up(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,kv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nI=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){nI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function Nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function Ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xc(t,e){if(e){if(rI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,vi=null,yi=null;function bp(t){if(t=Ao(t)){if(typeof Zc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Ql(e),Zc(t.stateNode,t.type,e))}}function Dv(t){vi?yi?yi.push(t):yi=[t]:vi=t}function xv(){if(vi){var t=vi,e=yi;if(yi=vi=null,bp(t),e)for(t=0;t<e.length;t++)bp(e[t])}}function Lv(t,e){return t(e)}function Mv(){}var nc=!1;function Vv(t,e,n){if(nc)return t(e,n);nc=!0;try{return Lv(t,e,n)}finally{nc=!1,(vi!==null||yi!==null)&&(Mv(),xv())}}function Ws(t,e){var n=t.stateNode;if(n===null)return null;var r=Ql(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var eh=!1;if(_n)try{var us={};Object.defineProperty(us,"passive",{get:function(){eh=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{eh=!1}function iI(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ps=!1,Qa=null,Xa=!1,th=null,sI={onError:function(t){Ps=!0,Qa=t}};function oI(t,e,n,r,i,s,o,l,u){Ps=!1,Qa=null,iI.apply(sI,arguments)}function aI(t,e,n,r,i,s,o,l,u){if(oI.apply(this,arguments),Ps){if(Ps){var h=Qa;Ps=!1,Qa=null}else throw Error(b(198));Xa||(Xa=!0,th=h)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(t){if(Wr(t)!==t)throw Error(b(188))}function lI(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fp(i),t;if(s===r)return Fp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function bv(t){return t=lI(t),t!==null?Fv(t):null}function Fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fv(t);if(e!==null)return e;t=t.sibling}return null}var jv=Pt.unstable_scheduleCallback,jp=Pt.unstable_cancelCallback,uI=Pt.unstable_shouldYield,cI=Pt.unstable_requestPaint,Re=Pt.unstable_now,hI=Pt.unstable_getCurrentPriorityLevel,md=Pt.unstable_ImmediatePriority,Bv=Pt.unstable_UserBlockingPriority,Ya=Pt.unstable_NormalPriority,dI=Pt.unstable_LowPriority,zv=Pt.unstable_IdlePriority,Wl=null,Zt=null;function fI(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:gI,pI=Math.log,mI=Math.LN2;function gI(t){return t>>>=0,t===0?32:31-(pI(t)/mI|0)|0}var ra=64,ia=4194304;function ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ws(l):(s&=o,s!==0&&(r=ws(s)))}else o=n&~i,o!==0?r=ws(o):s!==0&&(r=ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function vI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=vI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $v(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function _I(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function Hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wv,vd,Kv,Gv,qv,rh=!1,sa=[],Gn=null,qn=null,Qn=null,Ks=new Map,Gs=new Map,Un=[],EI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bp(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ao(e),e!==null&&vd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wI(t,e,n,r,i){switch(e){case"focusin":return Gn=cs(Gn,t,e,n,r,i),!0;case"dragenter":return qn=cs(qn,t,e,n,r,i),!0;case"mouseover":return Qn=cs(Qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ks.set(s,cs(Ks.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gs.set(s,cs(Gs.get(s)||null,t,e,n,r,i)),!0}return!1}function Qv(t){var e=Ar(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Uv(n),e!==null){t.blockedOn=e,qv(t.priority,function(){Kv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ra(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jc=r,n.target.dispatchEvent(r),Jc=null}else return e=Ao(n),e!==null&&vd(e),t.blockedOn=n,!1;e.shift()}return!0}function zp(t,e,n){Ra(t)&&n.delete(e)}function II(){rh=!1,Gn!==null&&Ra(Gn)&&(Gn=null),qn!==null&&Ra(qn)&&(qn=null),Qn!==null&&Ra(Qn)&&(Qn=null),Ks.forEach(zp),Gs.forEach(zp)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,II)))}function qs(t){function e(i){return hs(i,t)}if(0<sa.length){hs(sa[0],t);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gn!==null&&hs(Gn,t),qn!==null&&hs(qn,t),Qn!==null&&hs(Qn,t),Ks.forEach(e),Gs.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Qv(n),n.blockedOn===null&&Un.shift()}var _i=Rn.ReactCurrentBatchConfig,Za=!0;function TI(t,e,n,r){var i=ae,s=_i.transition;_i.transition=null;try{ae=1,yd(t,e,n,r)}finally{ae=i,_i.transition=s}}function AI(t,e,n,r){var i=ae,s=_i.transition;_i.transition=null;try{ae=4,yd(t,e,n,r)}finally{ae=i,_i.transition=s}}function yd(t,e,n,r){if(Za){var i=ih(t,e,n,r);if(i===null)fc(t,e,r,el,n),Bp(t,r);else if(wI(i,t,e,n,r))r.stopPropagation();else if(Bp(t,r),e&4&&-1<EI.indexOf(t)){for(;i!==null;){var s=Ao(i);if(s!==null&&Wv(s),s=ih(t,e,n,r),s===null&&fc(t,e,r,el,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fc(t,e,r,null,n)}}var el=null;function ih(t,e,n,r){if(el=null,t=pd(r),t=Ar(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function Xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hI()){case md:return 1;case Bv:return 4;case Ya:case dI:return 16;case zv:return 536870912;default:return 16}default:return 16}}var $n=null,_d=null,Pa=null;function Yv(){if(Pa)return Pa;var t,e=_d,n=e.length,r,i="value"in $n?$n.value:$n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pa=i.slice(t,1<r?1-r:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function $p(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:$p,this.isPropagationStopped=$p,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ed=Nt(ji),To=we({},ji,{view:0,detail:0}),SI=Nt(To),ic,sc,ds,Kl=we({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ds&&(ds&&t.type==="mousemove"?(ic=t.screenX-ds.screenX,sc=t.screenY-ds.screenY):sc=ic=0,ds=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),Hp=Nt(Kl),CI=we({},Kl,{dataTransfer:0}),RI=Nt(CI),PI=we({},To,{relatedTarget:0}),oc=Nt(PI),kI=we({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),NI=Nt(kI),OI=we({},ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DI=Nt(OI),xI=we({},ji,{data:0}),Wp=Nt(xI),LI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VI[t])?!!e[t]:!1}function wd(){return UI}var bI=we({},To,{key:function(t){if(t.key){var e=LI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FI=Nt(bI),jI=we({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Nt(jI),BI=we({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),zI=Nt(BI),$I=we({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),HI=Nt($I),WI=we({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KI=Nt(WI),GI=[9,13,27,32],Id=_n&&"CompositionEvent"in window,ks=null;_n&&"documentMode"in document&&(ks=document.documentMode);var qI=_n&&"TextEvent"in window&&!ks,Jv=_n&&(!Id||ks&&8<ks&&11>=ks),Gp=" ",qp=!1;function Zv(t,e){switch(t){case"keyup":return GI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ey(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var si=!1;function QI(t,e){switch(t){case"compositionend":return ey(e);case"keypress":return e.which!==32?null:(qp=!0,Gp);case"textInput":return t=e.data,t===Gp&&qp?null:t;default:return null}}function XI(t,e){if(si)return t==="compositionend"||!Id&&Zv(t,e)?(t=Yv(),Pa=_d=$n=null,si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jv&&e.locale!=="ko"?null:e.data;default:return null}}var YI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YI[t.type]:e==="textarea"}function ty(t,e,n,r){Dv(r),e=tl(e,"onChange"),0<e.length&&(n=new Ed("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ns=null,Qs=null;function JI(t){dy(t,0)}function Gl(t){var e=li(t);if(Sv(e))return t}function ZI(t,e){if(t==="change")return e}var ny=!1;if(_n){var ac;if(_n){var lc="oninput"in document;if(!lc){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),lc=typeof Xp.oninput=="function"}ac=lc}else ac=!1;ny=ac&&(!document.documentMode||9<document.documentMode)}function Yp(){Ns&&(Ns.detachEvent("onpropertychange",ry),Qs=Ns=null)}function ry(t){if(t.propertyName==="value"&&Gl(Qs)){var e=[];ty(e,Qs,t,pd(t)),Vv(JI,e)}}function e1(t,e,n){t==="focusin"?(Yp(),Ns=e,Qs=n,Ns.attachEvent("onpropertychange",ry)):t==="focusout"&&Yp()}function t1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(Qs)}function n1(t,e){if(t==="click")return Gl(e)}function r1(t,e){if(t==="input"||t==="change")return Gl(e)}function i1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:i1;function Xs(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jc.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function Jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,e){var n=Jp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jp(n)}}function iy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?iy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sy(){for(var t=window,e=qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qa(t.document)}return e}function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function s1(t){var e=sy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&iy(n.ownerDocument.documentElement,n)){if(r!==null&&Td(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zp(n,s);var o=Zp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o1=_n&&"documentMode"in document&&11>=document.documentMode,oi=null,sh=null,Os=null,oh=!1;function em(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||oi==null||oi!==qa(r)||(r=oi,"selectionStart"in r&&Td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Xs(Os,r)||(Os=r,r=tl(sh,"onSelect"),0<r.length&&(e=new Ed("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=oi)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ai={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},uc={},oy={};_n&&(oy=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function ql(t){if(uc[t])return uc[t];if(!ai[t])return t;var e=ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in oy)return uc[t]=e[n];return t}var ay=ql("animationend"),ly=ql("animationiteration"),uy=ql("animationstart"),cy=ql("transitionend"),hy=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){hy.set(t,e),Hr(e,[t])}for(var cc=0;cc<tm.length;cc++){var hc=tm[cc],a1=hc.toLowerCase(),l1=hc[0].toUpperCase()+hc.slice(1);dr(a1,"on"+l1)}dr(ay,"onAnimationEnd");dr(ly,"onAnimationIteration");dr(uy,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(cy,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function nm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aI(r,e,void 0,t),t.currentTarget=null}function dy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;nm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;nm(i,l,h),s=u}}}if(Xa)throw t=th,Xa=!1,th=null,t}function pe(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(fy(e,t,2,!1),n.add(r))}function dc(t,e,n){var r=0;e&&(r|=4),fy(n,t,r,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function Ys(t){if(!t[la]){t[la]=!0,Ev.forEach(function(n){n!=="selectionchange"&&(u1.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,dc("selectionchange",!1,e))}}function fy(t,e,n,r){switch(Xv(e)){case 1:var i=TI;break;case 4:i=AI;break;default:i=yd}n=i.bind(null,e,n,t),i=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ar(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Vv(function(){var h=s,f=pd(n),m=[];e:{var _=hy.get(t);if(_!==void 0){var R=Ed,C=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":R=FI;break;case"focusin":C="focus",R=oc;break;case"focusout":C="blur",R=oc;break;case"beforeblur":case"afterblur":R=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=RI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=zI;break;case ay:case ly:case uy:R=NI;break;case cy:R=HI;break;case"scroll":R=SI;break;case"wheel":R=KI;break;case"copy":case"cut":case"paste":R=DI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Kp}var k=(e&4)!==0,D=!k&&t==="scroll",I=k?_!==null?_+"Capture":null:_;k=[];for(var v=h,E;v!==null;){E=v;var O=E.stateNode;if(E.tag===5&&O!==null&&(E=O,I!==null&&(O=Ws(v,I),O!=null&&k.push(Js(v,O,E)))),D)break;v=v.return}0<k.length&&(_=new R(_,C,null,n,f),m.push({event:_,listeners:k}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",_&&n!==Jc&&(C=n.relatedTarget||n.fromElement)&&(Ar(C)||C[En]))break e;if((R||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,R?(C=n.relatedTarget||n.toElement,R=h,C=C?Ar(C):null,C!==null&&(D=Wr(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(R=null,C=h),R!==C)){if(k=Hp,O="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=Kp,O="onPointerLeave",I="onPointerEnter",v="pointer"),D=R==null?_:li(R),E=C==null?_:li(C),_=new k(O,v+"leave",R,n,f),_.target=D,_.relatedTarget=E,O=null,Ar(f)===h&&(k=new k(I,v+"enter",C,n,f),k.target=E,k.relatedTarget=D,O=k),D=O,R&&C)t:{for(k=R,I=C,v=0,E=k;E;E=ti(E))v++;for(E=0,O=I;O;O=ti(O))E++;for(;0<v-E;)k=ti(k),v--;for(;0<E-v;)I=ti(I),E--;for(;v--;){if(k===I||I!==null&&k===I.alternate)break t;k=ti(k),I=ti(I)}k=null}else k=null;R!==null&&rm(m,_,R,k,!1),C!==null&&D!==null&&rm(m,D,C,k,!0)}}e:{if(_=h?li(h):window,R=_.nodeName&&_.nodeName.toLowerCase(),R==="select"||R==="input"&&_.type==="file")var V=ZI;else if(Qp(_))if(ny)V=r1;else{V=t1;var F=e1}else(R=_.nodeName)&&R.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(V=n1);if(V&&(V=V(t,h))){ty(m,V,n,f);break e}F&&F(t,_,h),t==="focusout"&&(F=_._wrapperState)&&F.controlled&&_.type==="number"&&Gc(_,"number",_.value)}switch(F=h?li(h):window,t){case"focusin":(Qp(F)||F.contentEditable==="true")&&(oi=F,sh=h,Os=null);break;case"focusout":Os=sh=oi=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,em(m,n,f);break;case"selectionchange":if(o1)break;case"keydown":case"keyup":em(m,n,f)}var w;if(Id)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else si?Zv(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Jv&&n.locale!=="ko"&&(si||p!=="onCompositionStart"?p==="onCompositionEnd"&&si&&(w=Yv()):($n=f,_d="value"in $n?$n.value:$n.textContent,si=!0)),F=tl(h,p),0<F.length&&(p=new Wp(p,t,null,n,f),m.push({event:p,listeners:F}),w?p.data=w:(w=ey(n),w!==null&&(p.data=w)))),(w=qI?QI(t,n):XI(t,n))&&(h=tl(h,"onBeforeInput"),0<h.length&&(f=new Wp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=w))}dy(m,e)})}function Js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ws(t,n),s!=null&&r.unshift(Js(t,s,i)),s=Ws(t,e),s!=null&&r.push(Js(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Ws(n,s),u!=null&&o.unshift(Js(n,u,l))):i||(u=Ws(n,s),u!=null&&o.push(Js(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var c1=/\r\n?/g,h1=/\u0000|\uFFFD/g;function im(t){return(typeof t=="string"?t:""+t).replace(c1,`
`).replace(h1,"")}function ua(t,e,n){if(e=im(e),im(t)!==e&&n)throw Error(b(425))}function nl(){}var ah=null,lh=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,d1=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,f1=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(t){return sm.resolve(null).then(t).catch(p1)}:ch;function p1(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qs(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Bi,Zs="__reactProps$"+Bi,En="__reactContainer$"+Bi,hh="__reactEvents$"+Bi,m1="__reactListeners$"+Bi,g1="__reactHandles$"+Bi;function Ar(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=om(t);t!==null;){if(n=t[Jt])return n;t=om(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Jt]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Ql(t){return t[Zs]||null}var dh=[],ui=-1;function fr(t){return{current:t}}function me(t){0>ui||(t.current=dh[ui],dh[ui]=null,ui--)}function he(t,e){ui++,dh[ui]=t.current,t.current=e}var ar={},at=fr(ar),_t=fr(!1),Lr=ar;function Pi(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function rl(){me(_t),me(at)}function am(t,e,n){if(at.current!==ar)throw Error(b(168));he(at,e),he(_t,n)}function py(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,eI(t)||"Unknown",i));return we({},n,r)}function il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Lr=at.current,he(at,t),he(_t,_t.current),!0}function lm(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=py(t,e,Lr),r.__reactInternalMemoizedMergedChildContext=t,me(_t),me(at),he(at,t)):me(_t),he(_t,n)}var un=null,Xl=!1,mc=!1;function my(t){un===null?un=[t]:un.push(t)}function v1(t){Xl=!0,my(t)}function pr(){if(!mc&&un!==null){mc=!0;var t=0,e=ae;try{var n=un;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Xl=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),jv(md,pr),i}finally{ae=e,mc=!1}}return null}var ci=[],hi=0,sl=null,ol=0,Ot=[],Dt=0,Mr=null,cn=1,hn="";function wr(t,e){ci[hi++]=ol,ci[hi++]=sl,sl=t,ol=e}function gy(t,e,n){Ot[Dt++]=cn,Ot[Dt++]=hn,Ot[Dt++]=Mr,Mr=t;var r=cn;t=hn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-Kt(e)+i|n<<i|r,hn=s+t}else cn=1<<s|n<<i|r,hn=t}function Ad(t){t.return!==null&&(wr(t,1),gy(t,1,0))}function Sd(t){for(;t===sl;)sl=ci[--hi],ci[hi]=null,ol=ci[--hi],ci[hi]=null;for(;t===Mr;)Mr=Ot[--Dt],Ot[Dt]=null,hn=Ot[--Dt],Ot[Dt]=null,cn=Ot[--Dt],Ot[Dt]=null}var Rt=null,St=null,ve=!1,zt=null;function vy(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,St=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,St=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(ve){var e=St;if(e){var n=e;if(!um(t,e)){if(fh(t))throw Error(b(418));e=Xn(n.nextSibling);var r=Rt;e&&um(t,e)?vy(r,n):(t.flags=t.flags&-4097|2,ve=!1,Rt=t)}}else{if(fh(t))throw Error(b(418));t.flags=t.flags&-4097|2,ve=!1,Rt=t}}}function cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function ca(t){if(t!==Rt)return!1;if(!ve)return cm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=St)){if(fh(t))throw yy(),Error(b(418));for(;e;)vy(t,e),e=Xn(e.nextSibling)}if(cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=Rt?Xn(t.stateNode.nextSibling):null;return!0}function yy(){for(var t=St;t;)t=Xn(t.nextSibling)}function ki(){St=Rt=null,ve=!1}function Cd(t){zt===null?zt=[t]:zt.push(t)}var y1=Rn.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hm(t){var e=t._init;return e(t._payload)}function _y(t){function e(I,v){if(t){var E=I.deletions;E===null?(I.deletions=[v],I.flags|=16):E.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=er(I,v),I.index=0,I.sibling=null,I}function s(I,v,E){return I.index=E,t?(E=I.alternate,E!==null?(E=E.index,E<v?(I.flags|=2,v):E):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,E,O){return v===null||v.tag!==6?(v=Ic(E,I.mode,O),v.return=I,v):(v=i(v,E),v.return=I,v)}function u(I,v,E,O){var V=E.type;return V===ii?f(I,v,E.props.children,O,E.key):v!==null&&(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Mn&&hm(V)===v.type)?(O=i(v,E.props),O.ref=fs(I,v,E),O.return=I,O):(O=Va(E.type,E.key,E.props,null,I.mode,O),O.ref=fs(I,v,E),O.return=I,O)}function h(I,v,E,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Tc(E,I.mode,O),v.return=I,v):(v=i(v,E.children||[]),v.return=I,v)}function f(I,v,E,O,V){return v===null||v.tag!==7?(v=Nr(E,I.mode,O,V),v.return=I,v):(v=i(v,E),v.return=I,v)}function m(I,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ic(""+v,I.mode,E),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ea:return E=Va(v.type,v.key,v.props,null,I.mode,E),E.ref=fs(I,null,v),E.return=I,E;case ri:return v=Tc(v,I.mode,E),v.return=I,v;case Mn:var O=v._init;return m(I,O(v._payload),E)}if(Es(v)||ls(v))return v=Nr(v,I.mode,E,null),v.return=I,v;ha(I,v)}return null}function _(I,v,E,O){var V=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return V!==null?null:l(I,v,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ea:return E.key===V?u(I,v,E,O):null;case ri:return E.key===V?h(I,v,E,O):null;case Mn:return V=E._init,_(I,v,V(E._payload),O)}if(Es(E)||ls(E))return V!==null?null:f(I,v,E,O,null);ha(I,E)}return null}function R(I,v,E,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(E)||null,l(v,I,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ea:return I=I.get(O.key===null?E:O.key)||null,u(v,I,O,V);case ri:return I=I.get(O.key===null?E:O.key)||null,h(v,I,O,V);case Mn:var F=O._init;return R(I,v,E,F(O._payload),V)}if(Es(O)||ls(O))return I=I.get(E)||null,f(v,I,O,V,null);ha(v,O)}return null}function C(I,v,E,O){for(var V=null,F=null,w=v,p=v=0,y=null;w!==null&&p<E.length;p++){w.index>p?(y=w,w=null):y=w.sibling;var T=_(I,w,E[p],O);if(T===null){w===null&&(w=y);break}t&&w&&T.alternate===null&&e(I,w),v=s(T,v,p),F===null?V=T:F.sibling=T,F=T,w=y}if(p===E.length)return n(I,w),ve&&wr(I,p),V;if(w===null){for(;p<E.length;p++)w=m(I,E[p],O),w!==null&&(v=s(w,v,p),F===null?V=w:F.sibling=w,F=w);return ve&&wr(I,p),V}for(w=r(I,w);p<E.length;p++)y=R(w,I,p,E[p],O),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?p:y.key),v=s(y,v,p),F===null?V=y:F.sibling=y,F=y);return t&&w.forEach(function(S){return e(I,S)}),ve&&wr(I,p),V}function k(I,v,E,O){var V=ls(E);if(typeof V!="function")throw Error(b(150));if(E=V.call(E),E==null)throw Error(b(151));for(var F=V=null,w=v,p=v=0,y=null,T=E.next();w!==null&&!T.done;p++,T=E.next()){w.index>p?(y=w,w=null):y=w.sibling;var S=_(I,w,T.value,O);if(S===null){w===null&&(w=y);break}t&&w&&S.alternate===null&&e(I,w),v=s(S,v,p),F===null?V=S:F.sibling=S,F=S,w=y}if(T.done)return n(I,w),ve&&wr(I,p),V;if(w===null){for(;!T.done;p++,T=E.next())T=m(I,T.value,O),T!==null&&(v=s(T,v,p),F===null?V=T:F.sibling=T,F=T);return ve&&wr(I,p),V}for(w=r(I,w);!T.done;p++,T=E.next())T=R(w,I,p,T.value,O),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?p:T.key),v=s(T,v,p),F===null?V=T:F.sibling=T,F=T);return t&&w.forEach(function(P){return e(I,P)}),ve&&wr(I,p),V}function D(I,v,E,O){if(typeof E=="object"&&E!==null&&E.type===ii&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ea:e:{for(var V=E.key,F=v;F!==null;){if(F.key===V){if(V=E.type,V===ii){if(F.tag===7){n(I,F.sibling),v=i(F,E.props.children),v.return=I,I=v;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Mn&&hm(V)===F.type){n(I,F.sibling),v=i(F,E.props),v.ref=fs(I,F,E),v.return=I,I=v;break e}n(I,F);break}else e(I,F);F=F.sibling}E.type===ii?(v=Nr(E.props.children,I.mode,O,E.key),v.return=I,I=v):(O=Va(E.type,E.key,E.props,null,I.mode,O),O.ref=fs(I,v,E),O.return=I,I=O)}return o(I);case ri:e:{for(F=E.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(I,v.sibling),v=i(v,E.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=Tc(E,I.mode,O),v.return=I,I=v}return o(I);case Mn:return F=E._init,D(I,v,F(E._payload),O)}if(Es(E))return C(I,v,E,O);if(ls(E))return k(I,v,E,O);ha(I,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,E),v.return=I,I=v):(n(I,v),v=Ic(E,I.mode,O),v.return=I,I=v),o(I)):n(I,v)}return D}var Ni=_y(!0),Ey=_y(!1),al=fr(null),ll=null,di=null,Rd=null;function Pd(){Rd=di=ll=null}function kd(t){var e=al.current;me(al),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){ll=t,Rd=di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(Rd!==t)if(t={context:t,memoizedValue:e,next:null},di===null){if(ll===null)throw Error(b(308));di=t,ll.dependencies={lanes:0,firstContext:t}}else di=di.next=t;return e}var Sr=null;function Nd(t){Sr===null?Sr=[t]:Sr.push(t)}function wy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nd(e)):(n.next=i.next,i.next=n),e.interleaved=n,wn(t,r)}function wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vn=!1;function Od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wn(t,n)}return i=r.interleaved,i===null?(e.next=e,Nd(r)):(e.next=i.next,i.next=e),r.interleaved=e,wn(t,n)}function Na(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}function dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,r){var i=t.updateQueue;Vn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var _=l.lane,R=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,k=l;switch(_=e,R=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){m=C.call(R,m,_);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,_=typeof C=="function"?C.call(R,m,_):C,_==null)break e;m=we({},m,_);break e;case 2:Vn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else R={eventTime:R,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=m):f=f.next=R,o|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=m}}function fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var So={},en=fr(So),eo=fr(So),to=fr(So);function Cr(t){if(t===So)throw Error(b(174));return t}function Dd(t,e){switch(he(to,e),he(eo,t),he(en,So),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qc(e,t)}me(en),he(en,e)}function Oi(){me(en),me(eo),me(to)}function Ty(t){Cr(to.current);var e=Cr(en.current),n=Qc(e,t.type);e!==n&&(he(eo,t),he(en,n))}function xd(t){eo.current===t&&(me(en),me(eo))}var _e=fr(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function Ld(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var Oa=Rn.ReactCurrentDispatcher,vc=Rn.ReactCurrentBatchConfig,Vr=0,Ee=null,xe=null,Ve=null,hl=!1,Ds=!1,no=0,_1=0;function Ze(){throw Error(b(321))}function Md(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function Vd(t,e,n,r,i,s){if(Vr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oa.current=t===null||t.memoizedState===null?T1:A1,t=n(r,i),Ds){s=0;do{if(Ds=!1,no=0,25<=s)throw Error(b(301));s+=1,Ve=xe=null,e.updateQueue=null,Oa.current=S1,t=n(r,i)}while(Ds)}if(Oa.current=dl,e=xe!==null&&xe.next!==null,Vr=0,Ve=xe=Ee=null,hl=!1,e)throw Error(b(300));return t}function Ud(){var t=no!==0;return no=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ee.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Vt(){if(xe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Ve===null?Ee.memoizedState:Ve.next;if(e!==null)Ve=e,xe=t;else{if(t===null)throw Error(b(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ve===null?Ee.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function ro(t,e){return typeof e=="function"?e(t):e}function yc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Vr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ee.lanes|=f,Ur|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _c(t){var e=Vt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ay(){}function Sy(t,e){var n=Ee,r=Vt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,bd(Py.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,io(9,Ry.bind(null,n,r,i,e),void 0,null),be===null)throw Error(b(349));Vr&30||Cy(n,e,i)}return i}function Cy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ry(t,e,n,r){e.value=n,e.getSnapshot=r,ky(e)&&Ny(t)}function Py(t,e,n){return n(function(){ky(e)&&Ny(t)})}function ky(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function Ny(t){var e=wn(t,1);e!==null&&Gt(e,t,1,-1)}function pm(t){var e=Yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:t},e.queue=t,t=t.dispatch=I1.bind(null,Ee,t),[e.memoizedState,t]}function io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Oy(){return Vt().memoizedState}function Da(t,e,n,r){var i=Yt();Ee.flags|=t,i.memoizedState=io(1|e,n,void 0,r===void 0?null:r)}function Yl(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Md(r,o.deps)){i.memoizedState=io(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=io(1|e,n,s,r)}function mm(t,e){return Da(8390656,8,t,e)}function bd(t,e){return Yl(2048,8,t,e)}function Dy(t,e){return Yl(4,2,t,e)}function xy(t,e){return Yl(4,4,t,e)}function Ly(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function My(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,Ly.bind(null,e,t),n)}function Fd(){}function Vy(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Md(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Uy(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Md(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function by(t,e,n){return Vr&21?(qt(n,e)||(n=$v(),Ee.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function E1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=vc.transition;vc.transition={};try{t(!1),e()}finally{ae=n,vc.transition=r}}function Fy(){return Vt().memoizedState}function w1(t,e,n){var r=Zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jy(t))By(e,n);else if(n=wy(t,e,n,r),n!==null){var i=ft();Gt(n,t,r,i),zy(n,e,r)}}function I1(t,e,n){var r=Zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jy(t))By(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(i.next=i,Nd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=wy(t,e,i,r),n!==null&&(i=ft(),Gt(n,t,r,i),zy(n,e,r))}}function jy(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function By(t,e){Ds=hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}var dl={readContext:Mt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},T1={readContext:Mt,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:mm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Da(4194308,4,Ly.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Da(4194308,4,t,e)},useInsertionEffect:function(t,e){return Da(4,2,t,e)},useMemo:function(t,e){var n=Yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=w1.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:pm,useDebugValue:Fd,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=pm(!1),e=t[0];return t=E1.bind(null,t[1]),Yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Yt();if(ve){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),be===null)throw Error(b(349));Vr&30||Cy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,mm(Py.bind(null,r,s,t),[t]),r.flags|=2048,io(9,Ry.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yt(),e=be.identifierPrefix;if(ve){var n=hn,r=cn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=no++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},A1={readContext:Mt,useCallback:Vy,useContext:Mt,useEffect:bd,useImperativeHandle:My,useInsertionEffect:Dy,useLayoutEffect:xy,useMemo:Uy,useReducer:yc,useRef:Oy,useState:function(){return yc(ro)},useDebugValue:Fd,useDeferredValue:function(t){var e=Vt();return by(e,xe.memoizedState,t)},useTransition:function(){var t=yc(ro)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Ay,useSyncExternalStore:Sy,useId:Fy,unstable_isNewReconciler:!1},S1={readContext:Mt,useCallback:Vy,useContext:Mt,useEffect:bd,useImperativeHandle:My,useInsertionEffect:Dy,useLayoutEffect:xy,useMemo:Uy,useReducer:_c,useRef:Oy,useState:function(){return _c(ro)},useDebugValue:Fd,useDeferredValue:function(t){var e=Vt();return xe===null?e.memoizedState=t:by(e,xe.memoizedState,t)},useTransition:function(){var t=_c(ro)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Ay,useSyncExternalStore:Sy,useId:Fy,unstable_isNewReconciler:!1};function jt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Zn(t),s=gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Gt(e,t,i,r),Na(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Zn(t),s=gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Gt(e,t,i,r),Na(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=Zn(t),i=gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yn(t,i,r),e!==null&&(Gt(e,t,r,n),Na(e,t,r))}};function gm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,s):!0}function $y(t,e,n){var r=!1,i=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=Et(e)?Lr:at.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function vm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Od(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=Et(e)?Lr:at.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jl.enqueueReplaceState(i,i.state,null),ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Di(t,e){try{var n="",r=e;do n+=Zw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C1=typeof WeakMap=="function"?WeakMap:Map;function Hy(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pl||(pl=!0,Ph=r),yh(t,e)},n}function Wy(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new C1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=j1.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Em(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Yn(n,e,1))),n.lanes|=1),t)}var R1=Rn.ReactCurrentOwner,yt=!1;function ht(t,e,n,r){e.child=t===null?Ey(e,null,n,r):Ni(e,t.child,n,r)}function wm(t,e,n,r,i){n=n.render;var s=e.ref;return Ei(e,i),r=Vd(t,e,n,r,s,i),n=Ud(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(ve&&n&&Ad(e),e.flags|=1,ht(t,e,r,i),e.child)}function Im(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ky(t,e,s,r,i)):(t=Va(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=er(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ky(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xs(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,In(t,e,i)}return _h(t,e,n,r,i)}function Gy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(pi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(pi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(pi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(pi,At),At|=r;return ht(t,e,i,n),e.child}function qy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _h(t,e,n,r,i){var s=Et(n)?Lr:at.current;return s=Pi(e,s),Ei(e,i),n=Vd(t,e,n,r,s,i),r=Ud(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(ve&&r&&Ad(e),e.flags|=1,ht(t,e,n,i),e.child)}function Tm(t,e,n,r,i){if(Et(n)){var s=!0;il(e)}else s=!1;if(Ei(e,i),e.stateNode===null)xa(t,e),$y(e,n,r),vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Mt(h):(h=Et(n)?Lr:at.current,h=Pi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&vm(e,o,r,h),Vn=!1;var _=e.memoizedState;o.state=_,ul(e,r,o,i),u=e.memoizedState,l!==r||_!==u||_t.current||Vn?(typeof f=="function"&&(gh(e,n,f,r),u=e.memoizedState),(l=Vn||gm(e,n,l,r,_,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iy(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:jt(e.type,l),o.props=h,m=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=Et(n)?Lr:at.current,u=Pi(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||_!==u)&&vm(e,o,r,u),Vn=!1,_=e.memoizedState,o.state=_,ul(e,r,o,i);var C=e.memoizedState;l!==m||_!==C||_t.current||Vn?(typeof R=="function"&&(gh(e,n,R,r),C=e.memoizedState),(h=Vn||gm(e,n,h,r,_,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Eh(t,e,n,r,s,i)}function Eh(t,e,n,r,i,s){qy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&lm(e,n,!1),In(t,e,s);r=e.stateNode,R1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,s),e.child=Ni(e,null,l,s)):ht(t,e,l,s),e.memoizedState=r.state,i&&lm(e,n,!0),e.child}function Qy(t){var e=t.stateNode;e.pendingContext?am(t,e.pendingContext,e.pendingContext!==e.context):e.context&&am(t,e.context,!1),Dd(t,e.containerInfo)}function Am(t,e,n,r,i){return ki(),Cd(i),e.flags|=256,ht(t,e,n,r),e.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xy(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(_e,i&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tu(o,r,0,null),t=Nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ih(n),e.memoizedState=wh,t):jd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return P1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=er(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=er(l,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ih(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wh,r}return s=t.child,t=s.sibling,r=er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jd(t,e){return e=tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,r){return r!==null&&Cd(r),Ni(e,t.child,null,n),t=jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function P1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ec(Error(b(422))),da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=tu({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=Ih(o),e.memoizedState=wh,s);if(!(e.mode&1))return da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=Ec(s,r,void 0),da(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(t,i),Gt(r,t,i,-1))}return Kd(),r=Ec(Error(b(421))),da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=B1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=Xn(i.nextSibling),Rt=e,ve=!0,zt=null,t!==null&&(Ot[Dt++]=cn,Ot[Dt++]=hn,Ot[Dt++]=Mr,cn=t.id,hn=t.overflow,Mr=e),e=jd(e,r.children),e.flags|=4096,e)}function Sm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,n,e);else if(t.tag===19)Sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function k1(t,e,n){switch(e.tag){case 3:Qy(e),ki();break;case 5:Ty(e);break;case 1:Et(e.type)&&il(e);break;case 4:Dd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(al,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Xy(t,e,n):(he(_e,_e.current&1),t=In(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Yy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Gy(t,e,n)}return In(t,e,n)}var Jy,Th,Zy,e_;Jy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Th=function(){};Zy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Cr(en.current);var s=null;switch(n){case"input":i=Wc(t,i),r=Wc(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=qc(t,i),r=qc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nl)}Xc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&($s.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&($s.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};e_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function N1(t,e,n){var r=e.pendingProps;switch(Sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return Et(e.type)&&rl(),et(e),null;case 3:return r=e.stateNode,Oi(),me(_t),me(at),Ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(Oh(zt),zt=null))),Th(t,e),et(e),null;case 5:xd(e);var i=Cr(to.current);if(n=e.type,t!==null&&e.stateNode!=null)Zy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return et(e),null}if(t=Cr(en.current),ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[Zs]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Is.length;i++)pe(Is[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Lp(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Vp(r,s),pe("invalid",r)}Xc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",""+l]):$s.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":ta(r),Mp(r,s,!0);break;case"textarea":ta(r),Up(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[Zs]=r,Jy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yc(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Is.length;i++)pe(Is[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Lp(t,r),i=Wc(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Vp(t,r),i=qc(t,r),pe("invalid",t);break;default:i=r}Xc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ov(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hs(t,u):typeof u=="number"&&Hs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($s.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&cd(t,s,u,o))}switch(n){case"input":ta(t),Mp(t,r,!1);break;case"textarea":ta(t),Up(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)e_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Cr(to.current),Cr(en.current),ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return et(e),null;case 13:if(me(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&St!==null&&e.mode&1&&!(e.flags&128))yy(),ki(),e.flags|=98560,s=!1;else if(s=ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Jt]=e}else ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else zt!==null&&(Oh(zt),zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Le===0&&(Le=3):Kd())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Oi(),Th(t,e),t===null&&Ys(e.stateNode.containerInfo),et(e),null;case 10:return kd(e.type._context),et(e),null;case 17:return Et(e.type)&&rl(),et(e),null;case 19:if(me(_e),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cl(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>xi&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=cl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return et(e),null}else 2*Re()-s.renderingStartTime>xi&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=_e.current,he(_e,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Wd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function O1(t,e){switch(Sd(e),e.tag){case 1:return Et(e.type)&&rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oi(),me(_t),me(at),Ld(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return Oi(),null;case 10:return kd(e.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var fa=!1,rt=!1,D1=typeof WeakSet=="function"?WeakSet:Set,$=null;function fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Ah(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Cm=!1;function x1(t,e){if(ah=Za,t=sy(),Td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,_=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)_=m,m=R;for(;;){if(m===t)break t;if(_===n&&++h===i&&(l=o),_===s&&++f===r&&(u=o),(R=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},Za=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,D=C.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:jt(e.type,k),D);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(O){Te(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return C=Cm,Cm=!1,C}function xs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ah(e,n,s)}i=i.next}while(i!==r)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t_(t){var e=t.alternate;e!==null&&(t.alternate=null,t_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[Zs],delete e[hh],delete e[m1],delete e[g1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n_(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var He=null,Bt=!1;function Dn(t,e,n){for(n=n.child;n!==null;)r_(t,e,n),n=n.sibling}function r_(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:rt||fi(n,e);case 6:var r=He,i=Bt;He=null,Dn(t,e,n),He=r,Bt=i,He!==null&&(Bt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Bt?(t=He,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),qs(t)):pc(He,n.stateNode));break;case 4:r=He,i=Bt,He=n.stateNode.containerInfo,Bt=!0,Dn(t,e,n),He=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ah(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!rt&&(fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Dn(t,e,n),rt=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new D1),e.forEach(function(r){var i=z1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Bt=!1;break e;case 3:He=l.stateNode.containerInfo,Bt=!0;break e;case 4:He=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(He===null)throw Error(b(160));r_(s,o,i),He=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)i_(e,t),e=e.sibling}function i_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Xt(t),r&4){try{xs(3,t,t.return),Zl(3,t)}catch(k){Te(t,t.return,k)}try{xs(5,t,t.return)}catch(k){Te(t,t.return,k)}}break;case 1:Ft(e,t),Xt(t),r&512&&n!==null&&fi(n,n.return);break;case 5:if(Ft(e,t),Xt(t),r&512&&n!==null&&fi(n,n.return),t.flags&32){var i=t.stateNode;try{Hs(i,"")}catch(k){Te(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Cv(i,s),Yc(l,o);var h=Yc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Ov(i,m):f==="dangerouslySetInnerHTML"?kv(i,m):f==="children"?Hs(i,m):cd(i,f,m,h)}switch(l){case"input":Kc(i,s);break;case"textarea":Rv(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?gi(i,!!s.multiple,R,!1):_!==!!s.multiple&&(s.defaultValue!=null?gi(i,!!s.multiple,s.defaultValue,!0):gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zs]=s}catch(k){Te(t,t.return,k)}}break;case 6:if(Ft(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Te(t,t.return,k)}}break;case 3:if(Ft(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qs(e.containerInfo)}catch(k){Te(t,t.return,k)}break;case 4:Ft(e,t),Xt(t);break;case 13:Ft(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($d=Re())),r&4&&Pm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(h=rt)||f,Ft(e,t),rt=h):Ft(e,t),Xt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(_=$,R=_.child,_.tag){case 0:case 11:case 14:case 15:xs(4,_,_.return);break;case 1:fi(_,_.return);var C=_.stateNode;if(typeof C.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){Te(r,n,k)}}break;case 5:fi(_,_.return);break;case 22:if(_.memoizedState!==null){Nm(m);continue}}R!==null?(R.return=_,$=R):Nm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Nv("display",o))}catch(k){Te(t,t.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(k){Te(t,t.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ft(e,t),Xt(t),r&4&&Pm(t);break;case 21:break;default:Ft(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n_(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hs(i,""),r.flags&=-33);var s=Rm(t);Rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rm(t);Ch(t,l,o);break;default:throw Error(b(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function L1(t,e,n){$=t,s_(t)}function s_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=fa;var h=rt;if(fa=o,(rt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Om(i):u!==null?(u.return=o,$=u):Om(i);for(;s!==null;)$=s,s_(s),s=s.sibling;$=i,fa=l,rt=h}km(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):km(t)}}function km(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&qs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}rt||e.flags&512&&Sh(e)}catch(_){Te(e,e.return,_)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Nm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Om(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Sh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Sh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var M1=Math.ceil,fl=Rn.ReactCurrentDispatcher,Bd=Rn.ReactCurrentOwner,Lt=Rn.ReactCurrentBatchConfig,re=0,be=null,Ne=null,qe=0,At=0,pi=fr(0),Le=0,so=null,Ur=0,eu=0,zd=0,Ls=null,vt=null,$d=0,xi=1/0,ln=null,pl=!1,Ph=null,Jn=null,pa=!1,Hn=null,ml=0,Ms=0,kh=null,La=-1,Ma=0;function ft(){return re&6?Re():La!==-1?La:La=Re()}function Zn(t){return t.mode&1?re&2&&qe!==0?qe&-qe:y1.transition!==null?(Ma===0&&(Ma=$v()),Ma):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Xv(t.type)),t):1}function Gt(t,e,n,r){if(50<Ms)throw Ms=0,kh=null,Error(b(185));Io(t,n,r),(!(re&2)||t!==be)&&(t===be&&(!(re&2)&&(eu|=n),Le===4&&bn(t,qe)),wt(t,r),n===1&&re===0&&!(e.mode&1)&&(xi=Re()+500,Xl&&pr()))}function wt(t,e){var n=t.callbackNode;yI(t,e);var r=Ja(t,t===be?qe:0);if(r===0)n!==null&&jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jp(n),e===1)t.tag===0?v1(Dm.bind(null,t)):my(Dm.bind(null,t)),f1(function(){!(re&6)&&pr()}),n=null;else{switch(Hv(r)){case 1:n=md;break;case 4:n=Bv;break;case 16:n=Ya;break;case 536870912:n=zv;break;default:n=Ya}n=f_(n,o_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function o_(t,e){if(La=-1,Ma=0,re&6)throw Error(b(327));var n=t.callbackNode;if(wi()&&t.callbackNode!==n)return null;var r=Ja(t,t===be?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gl(t,r);else{e=r;var i=re;re|=2;var s=l_();(be!==t||qe!==e)&&(ln=null,xi=Re()+500,kr(t,e));do try{b1();break}catch(l){a_(t,l)}while(!0);Pd(),fl.current=s,re=i,Ne!==null?e=0:(be=null,qe=0,e=Le)}if(e!==0){if(e===2&&(i=nh(t),i!==0&&(r=i,e=Nh(t,i))),e===1)throw n=so,kr(t,0),bn(t,r),wt(t,Re()),n;if(e===6)bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!V1(i)&&(e=gl(t,r),e===2&&(s=nh(t),s!==0&&(r=s,e=Nh(t,s))),e===1))throw n=so,kr(t,0),bn(t,r),wt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Ir(t,vt,ln);break;case 3:if(bn(t,r),(r&130023424)===r&&(e=$d+500-Re(),10<e)){if(Ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ch(Ir.bind(null,t,vt,ln),e);break}Ir(t,vt,ln);break;case 4:if(bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M1(r/1960))-r,10<r){t.timeoutHandle=ch(Ir.bind(null,t,vt,ln),r);break}Ir(t,vt,ln);break;case 5:Ir(t,vt,ln);break;default:throw Error(b(329))}}}return wt(t,Re()),t.callbackNode===n?o_.bind(null,t):null}function Nh(t,e){var n=Ls;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=vt,vt=n,e!==null&&Oh(e)),t}function Oh(t){vt===null?vt=t:vt.push.apply(vt,t)}function V1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(t,e){for(e&=~zd,e&=~eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function Dm(t){if(re&6)throw Error(b(327));wi();var e=Ja(t,0);if(!(e&1))return wt(t,Re()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=Nh(t,r))}if(n===1)throw n=so,kr(t,0),bn(t,e),wt(t,Re()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,vt,ln),wt(t,Re()),null}function Hd(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(xi=Re()+500,Xl&&pr())}}function br(t){Hn!==null&&Hn.tag===0&&!(re&6)&&wi();var e=re;re|=1;var n=Lt.transition,r=ae;try{if(Lt.transition=null,ae=1,t)return t()}finally{ae=r,Lt.transition=n,re=e,!(re&6)&&pr()}}function Wd(){At=pi.current,me(pi)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,d1(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Sd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:Oi(),me(_t),me(at),Ld();break;case 5:xd(r);break;case 4:Oi();break;case 13:me(_e);break;case 19:me(_e);break;case 10:kd(r.type._context);break;case 22:case 23:Wd()}n=n.return}if(be=t,Ne=t=er(t.current,null),qe=At=e,Le=0,so=null,zd=eu=Ur=0,vt=Ls=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sr=null}return t}function a_(t,e){do{var n=Ne;try{if(Pd(),Oa.current=dl,hl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hl=!1}if(Vr=0,Ve=xe=Ee=null,Ds=!1,no=0,Bd.current=null,n===null||n.return===null){Le=1,so=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=_m(o);if(R!==null){R.flags&=-257,Em(R,o,l,s,e),R.mode&1&&ym(s,h,e),e=R,u=h;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){ym(s,h,e),Kd();break e}u=Error(b(426))}}else if(ve&&l.mode&1){var D=_m(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Em(D,o,l,s,e),Cd(Di(u,l));break e}}s=u=Di(u,l),Le!==4&&(Le=2),Ls===null?Ls=[s]:Ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Hy(s,u,e);dm(s,I);break e;case 1:l=u;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Jn===null||!Jn.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Wy(s,l,e);dm(s,O);break e}}s=s.return}while(s!==null)}c_(n)}catch(V){e=V,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function l_(){var t=fl.current;return fl.current=dl,t===null?dl:t}function Kd(){(Le===0||Le===3||Le===2)&&(Le=4),be===null||!(Ur&268435455)&&!(eu&268435455)||bn(be,qe)}function gl(t,e){var n=re;re|=2;var r=l_();(be!==t||qe!==e)&&(ln=null,kr(t,e));do try{U1();break}catch(i){a_(t,i)}while(!0);if(Pd(),re=n,fl.current=r,Ne!==null)throw Error(b(261));return be=null,qe=0,Le}function U1(){for(;Ne!==null;)u_(Ne)}function b1(){for(;Ne!==null&&!uI();)u_(Ne)}function u_(t){var e=d_(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?c_(t):Ne=e,Bd.current=null}function c_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=O1(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ne=null;return}}else if(n=N1(n,e,At),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Le===0&&(Le=5)}function Ir(t,e,n){var r=ae,i=Lt.transition;try{Lt.transition=null,ae=1,F1(t,e,n,r)}finally{Lt.transition=i,ae=r}return null}function F1(t,e,n,r){do wi();while(Hn!==null);if(re&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_I(t,s),t===be&&(Ne=be=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,f_(Ya,function(){return wi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=ae;ae=1;var l=re;re|=4,Bd.current=null,x1(t,n),i_(n,t),s1(lh),Za=!!ah,lh=ah=null,t.current=n,L1(n),cI(),re=l,ae=o,Lt.transition=s}else t.current=n;if(pa&&(pa=!1,Hn=t,ml=i),s=t.pendingLanes,s===0&&(Jn=null),fI(n.stateNode),wt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pl)throw pl=!1,t=Ph,Ph=null,t;return ml&1&&t.tag!==0&&wi(),s=t.pendingLanes,s&1?t===kh?Ms++:(Ms=0,kh=t):Ms=0,pr(),null}function wi(){if(Hn!==null){var t=Hv(ml),e=Lt.transition,n=ae;try{if(Lt.transition=null,ae=16>t?16:t,Hn===null)var r=!1;else{if(t=Hn,Hn=null,ml=0,re&6)throw Error(b(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:xs(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var _=f.sibling,R=f.return;if(t_(f),f===h){$=null;break}if(_!==null){_.return=R,$=_;break}$=R}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var v=t.current;for($=v;$!==null;){o=$;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,$=E;else e:for(o=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Zl(9,l)}}catch(V){Te(l,l.return,V)}if(l===o){$=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,$=O;break e}$=l.return}}if(re=i,pr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Wl,t)}catch{}r=!0}return r}finally{ae=n,Lt.transition=e}}return!1}function xm(t,e,n){e=Di(n,e),e=Hy(t,e,1),t=Yn(t,e,1),e=ft(),t!==null&&(Io(t,1,e),wt(t,e))}function Te(t,e,n){if(t.tag===3)xm(t,t,n);else for(;e!==null;){if(e.tag===3){xm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=Di(n,t),t=Wy(e,t,1),e=Yn(e,t,1),t=ft(),e!==null&&(Io(e,1,t),wt(e,t));break}}e=e.return}}function j1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Re()-$d?kr(t,0):zd|=n),wt(t,e)}function h_(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=ft();t=wn(t,e),t!==null&&(Io(t,e,n),wt(t,n))}function B1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h_(t,n)}function z1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),h_(t,n)}var d_;d_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,k1(t,e,n);yt=!!(t.flags&131072)}else yt=!1,ve&&e.flags&1048576&&gy(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xa(t,e),t=e.pendingProps;var i=Pi(e,at.current);Ei(e,n),i=Vd(null,e,r,t,i,n);var s=Ud();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Od(e),i.updater=Jl,e.stateNode=i,i._reactInternals=e,vh(e,r,t,n),e=Eh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Ad(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=H1(r),t=jt(r,t),i){case 0:e=_h(null,e,r,t,n);break e;case 1:e=Tm(null,e,r,t,n);break e;case 11:e=wm(null,e,r,t,n);break e;case 14:e=Im(null,e,r,jt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),_h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Tm(t,e,r,i,n);case 3:e:{if(Qy(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Iy(t,e),ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Di(Error(b(423)),e),e=Am(t,e,r,n,i);break e}else if(r!==i){i=Di(Error(b(424)),e),e=Am(t,e,r,n,i);break e}else for(St=Xn(e.stateNode.containerInfo.firstChild),Rt=e,ve=!0,zt=null,n=Ey(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===i){e=In(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return Ty(e),t===null&&ph(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uh(r,i)?o=null:s!==null&&uh(r,s)&&(e.flags|=32),qy(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return Xy(t,e,n);case 4:return Dd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),wm(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(al,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!_t.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=gn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),mh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ei(e,n),i=Mt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),Im(t,e,r,i,n);case 15:return Ky(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),xa(t,e),e.tag=1,Et(r)?(t=!0,il(e)):t=!1,Ei(e,n),$y(e,r,i),vh(e,r,i,n),Eh(null,e,r,!0,t,n);case 19:return Yy(t,e,n);case 22:return Gy(t,e,n)}throw Error(b(156,e.tag))};function f_(t,e){return jv(t,e)}function $1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new $1(t,e,n,r)}function Gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function H1(t){if(typeof t=="function")return Gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===fd)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ii:return Nr(n.children,i,s,e);case hd:o=8,i|=8;break;case Bc:return t=xt(12,n,e,i|2),t.elementType=Bc,t.lanes=s,t;case zc:return t=xt(13,n,e,i),t.elementType=zc,t.lanes=s,t;case $c:return t=xt(19,n,e,i),t.elementType=$c,t.lanes=s,t;case Tv:return tu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wv:o=10;break e;case Iv:o=9;break e;case dd:o=11;break e;case fd:o=14;break e;case Mn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Nr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function tu(t,e,n,r){return t=xt(22,t,r,e),t.elementType=Tv,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function W1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qd(t,e,n,r,i,s,o,l,u){return t=new W1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Od(s),t}function K1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function p_(t){if(!t)return ar;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Et(n))return py(t,n,e)}return e}function m_(t,e,n,r,i,s,o,l,u){return t=qd(n,r,!0,t,i,s,o,l,u),t.context=p_(null),n=t.current,r=ft(),i=Zn(n),s=gn(r,i),s.callback=e??null,Yn(n,s,i),t.current.lanes=i,Io(t,i,r),wt(t,r),t}function nu(t,e,n,r){var i=e.current,s=ft(),o=Zn(i);return n=p_(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yn(i,e,o),t!==null&&(Gt(t,i,o,s),Na(t,i,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qd(t,e){Lm(t,e),(t=t.alternate)&&Lm(t,e)}function G1(){return null}var g_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xd(t){this._internalRoot=t}ru.prototype.render=Xd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));nu(t,e,null,null)};ru.prototype.unmount=Xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){nu(null,t,null,null)}),e[En]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&Qv(t)}};function Yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function q1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=vl(o);s.call(h)}}var o=m_(e,r,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[En]=o.current,Ys(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=vl(u);l.call(h)}}var u=qd(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=u,t[En]=u.current,Ys(t.nodeType===8?t.parentNode:t),br(function(){nu(e,u,n,r)}),u}function su(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=vl(o);l.call(u)}}nu(e,o,t,i)}else o=q1(n,e,t,i,r);return vl(o)}Wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ws(e.pendingLanes);n!==0&&(gd(e,n|1),wt(e,Re()),!(re&6)&&(xi=Re()+500,pr()))}break;case 13:br(function(){var r=wn(t,1);if(r!==null){var i=ft();Gt(r,t,1,i)}}),Qd(t,1)}};vd=function(t){if(t.tag===13){var e=wn(t,134217728);if(e!==null){var n=ft();Gt(e,t,134217728,n)}Qd(t,134217728)}};Kv=function(t){if(t.tag===13){var e=Zn(t),n=wn(t,e);if(n!==null){var r=ft();Gt(n,t,e,r)}Qd(t,e)}};Gv=function(){return ae};qv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Zc=function(t,e,n){switch(e){case"input":if(Kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ql(r);if(!i)throw Error(b(90));Sv(r),Kc(r,i)}}}break;case"textarea":Rv(t,n);break;case"select":e=n.value,e!=null&&gi(t,!!n.multiple,e,!1)}};Lv=Hd;Mv=br;var Q1={usingClientEntryPoint:!1,Events:[Ao,li,Ql,Dv,xv,Hd]},ms={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X1={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bv(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||G1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Wl=ma.inject(X1),Zt=ma}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q1;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(e))throw Error(b(200));return K1(t,e,null,n)};kt.createRoot=function(t,e){if(!Yd(t))throw Error(b(299));var n=!1,r="",i=g_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qd(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,Ys(t.nodeType===8?t.parentNode:t),new Xd(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=bv(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return br(t)};kt.hydrate=function(t,e,n){if(!iu(e))throw Error(b(200));return su(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!Yd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=g_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=m_(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,Ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ru(e)};kt.render=function(t,e,n){if(!iu(e))throw Error(b(200));return su(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!iu(t))throw Error(b(40));return t._reactRootContainer?(br(function(){su(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};kt.unstable_batchedUpdates=Hd;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!iu(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return su(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function v_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v_)}catch(t){console.error(t)}}v_(),vv.exports=kt;var Y1=vv.exports,Vm=Y1;Fc.createRoot=Vm.createRoot,Fc.hydrateRoot=Vm.hydrateRoot;const y_="/Netflix-Clone/assets/logo-COGC8jhl.png",J1="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='16'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M416%20208c0%2045.9-14.9%2088.3-40%20122.7L502.6%20457.4c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L330.7%20376c-34.4%2025.2-76.8%2040-122.7%2040C93.1%20416%200%20322.9%200%20208S93.1%200%20208%200S416%2093.1%20416%20208zM208%20352a144%20144%200%201%200%200-288%20144%20144%200%201%200%200%20288z'/%3e%3c/svg%3e",Z1="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M224%200c-17.7%200-32%2014.3-32%2032V51.2C119%2066%2064%20130.6%2064%20208v25.4c0%2045.4-15.5%2089.5-43.8%20124.9L5.3%20377c-5.8%207.2-6.9%2017.1-2.9%2025.4S14.8%20416%2024%20416H424c9.2%200%2017.6-5.3%2021.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5%20322.9%20384%20278.8%20384%20233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0%2096c61.9%200%20112%2050.1%20112%20112v25.4c0%2047.9%2013.9%2094.6%2039.7%20134.6H72.3C98.1%20328%20112%20281.3%20112%20233.4V208c0-61.9%2050.1-112%20112-112zm64%20352H224%20160c0%2017%206.7%2033.3%2018.7%2045.3s28.3%2018.7%2045.3%2018.7s33.3-6.7%2045.3-18.7s18.7-28.3%2018.7-45.3z'/%3e%3c/svg%3e",eT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE+UlEQVRYw42X32scVRTHP+fMZDebbNJuEmza2jbBVtKKBQXBVsXigw99EKSI7yLFxwoiiNCXKgiCIvgi6pPaf8AnEXyqlhZBa9HSktbWQmvS/HCTdLOT3Znjw8xs7t6dbXphmHvn3vM953zPj5mRyqk7Rj4ku5sz90e+597xzvt7RZjZftijuGiNJ+gAFCruZ5j7PLtrl7A/94V9r+gFxDxDKMBy8PSBNG7FRj8ji2SK8Cw3wPXOt5wtAP2R0H8UyGihQBHNW7HjJ+aDktRxuisHBIgNtgewO4SKQGKObL/K8IGzWwKUFXYHUFNIxIHohCBXLtAEJgO4G8HsghEZbFPY8HUXhcljrQWMCIjB7KJxpwmTmuoQhxXNgVoGOwP4Z8U4/ojywUtl2gbzEYxpykwPrX7GZ2sDtissbMByDGeOlXl1l3KrbuxSaDnnwxxgUuB2w3jzYMinb01QrSivH4s48MkSkcGQQNN6Pe1JYKDsxPbPUzUOTQ+yHiW89/Uin11usa+qzMcpkGoAKlArCfxnvHZkiGpFaUYJ+/eUOX24RH3FGAvTcyqgmirorLNY5s9qCnNrxqmDIYemB4k2jEpZOXF0CJaNbWF2VtMLFWgkBiPChWsRAINlZXk15qebLRgVGlagXJ27Qu7MOkBV+OF2zL3lNuVSSs3FqxGMCk3bND4MJN2cj2GqJpw+v0Fsizyzv8R355ucWzSmqsJSGwL1qHfneXgU1g32hXBlzTj5xRJvPF/h8q0W75+L2FtT5mIINC0JGX/3bieqLWBC4caKwZrBuDJVhqUYBoqakxXMs3XL0lDcioDFBKrC9KiwFEPovE9C16sAWDWYGVMqE1BvGSsJVAIwJ8kkm5trjNeUQoH7BtODsH1fQGywEBulIDuaV0Eg0lPT9SS9EGEg6C33mqYNpmmw2k4bTGdTN+eqmSKFa1Fa82MBtG3TiDD0FPQbubcBcKVusGFQFWaGheFAMCBODMuaS5B10d82DP5NmNmhDAXC35ExomA5A2FupRUrFWdvRIU/VhJ+PjnKcFn5/Mc1vrrRhkaSpXSGlVjHzWd3BrzzcpUTL47w/S9rvHJ2lf2TAQttywwIpEtjJ9QFfT9QoCTcqyccfW6ILw8M8vFqzPU7LW7OtZirJ2y0jWpZ2D0e8vieAR7bVQLg99kmZ39tMj4R0DAIJe1WcvDMXL8Xaw8zRtrlLi0lPDGuvP10mSMzg+zdMUC1ol2icQIL9TaXrkd8e2Gdb2bbMKocLkGUEYaAPPnhvJFRbZ4p7rM8FAkwGsBiC66uJBADw8LxmrKnqgworLWMv+oJF5ey/RHhhYrQSFLl4uDLUx/Nm9vKzXVXCkscIy2zIU3X92O414abcRrDYYW9oTAepv1jPVPsh1WAMFTpm4RFYXDXjQxUFXaW4VGRzndAbOlrPMr7QlCM3b8M/a8c3xj1zpGynT8TgaCAWj/UYagF1DsKuvIg33bB+uRMB0sLnHBGGoIidlywHORhxlafbZ6OtBFtAVZUIQ/KDX+Y9fYWM8eADq1OT8/p7eAWvP1EN5kWn6ncaPdcwS9fGKik1jiHpIAVcwzr53GP7EOEI8w7Uq6k06FwaC/6D6RbrsNA9qDDntNPigwPVbspdylUcQC0F9iVEccY99+gp7qkWy4MJH015q3W/G7lrEW91symkXmiqpew4si6SZUb+j+Y7wjzSYgAMAAAAABJRU5ErkJggg==",tT="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M137.4%20374.6c12.5%2012.5%2032.8%2012.5%2045.3%200l128-128c9.2-9.2%2011.9-22.9%206.9-34.9s-16.6-19.8-29.6-19.8L32%20192c-12.9%200-24.6%207.8-29.6%2019.8s-2.2%2025.7%206.9%2034.9l128%20128z'/%3e%3c/svg%3e";var Um={};/**
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
 */const __=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let _=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(_=64)),r.push(n[f],n[m],n[_],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(__(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new rT;const _=s<<2|l>>4;if(r.push(_),h!==64){const R=l<<4&240|h>>2;if(r.push(R),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iT=function(t){const e=__(t);return E_.encodeByteArray(e,!0)},yl=function(t){return iT(t).replace(/\./g,"")},Jd=function(t){try{return E_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oT=()=>sT().__FIREBASE_DEFAULTS__,aT=()=>{if(typeof process>"u"||typeof Um>"u")return;const t=Um.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jd(t[1]);return e&&JSON.parse(e)},ou=()=>{try{return oT()||aT()||lT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w_=t=>{var e,n;return(n=(e=ou())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uT=t=>{const e=w_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},I_=()=>{var t;return(t=ou())===null||t===void 0?void 0:t.config},T_=t=>{var e;return(e=ou())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yl(JSON.stringify(n)),yl(JSON.stringify(o)),""].join(".")}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function dT(){var t;const e=(t=ou())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function S_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function C_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fT(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pT(){return!dT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mT(){try{return typeof indexedDB=="object"}catch{return!1}}function gT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const vT="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vT,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mr.prototype.create)}}class mr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yT(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ut(i,l,r)}}function yT(t,e){return t.replace(_T,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _T=/\{\$([^}]+)}/g;function ET(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bm(s)&&bm(o)){if(!_l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bm(t){return t!==null&&typeof t=="object"}/**
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
 */function Kr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function As(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function R_(t,e){const n=new wT(t,e);return n.subscribe.bind(n)}class wT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ac),i.error===void 0&&(i.error=Ac),i.complete===void 0&&(i.complete=Ac);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ac(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tr="[DEFAULT]";/**
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
 */class TT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ST(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AT(t){return t===Tr?void 0:t}function ST(t){return t.instantiationMode==="EAGER"}/**
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
 */class CT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const RT={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},PT=Y.INFO,kT={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},NT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=PT,this._logHandler=NT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const OT=(t,e)=>e.some(n=>t instanceof n);let Fm,jm;function DT(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xT(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P_=new WeakMap,Dh=new WeakMap,k_=new WeakMap,Sc=new WeakMap,Zd=new WeakMap;function LT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&P_.set(n,t)}).catch(()=>{}),Zd.set(e,t),e}function MT(t){if(Dh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dh.set(t,e)}let xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||k_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VT(t){xh=t(xh)}function UT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return k_.set(r,e.sort?e.sort():[e]),tr(r)}:xT().includes(t)?function(...e){return t.apply(Cc(this),e),tr(P_.get(this))}:function(...e){return tr(t.apply(Cc(this),e))}}function bT(t){return typeof t=="function"?UT(t):(t instanceof IDBTransaction&&MT(t),OT(t,DT())?new Proxy(t,xh):t)}function tr(t){if(t instanceof IDBRequest)return LT(t);if(Sc.has(t))return Sc.get(t);const e=bT(t);return e!==t&&(Sc.set(t,e),Zd.set(e,t)),e}const Cc=t=>Zd.get(t);function FT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(tr(o.result),u.oldVersion,u.newVersion,tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const jT=["get","getKey","getAll","getAllKeys","count"],BT=["put","add","delete","clear"],Rc=new Map;function Bm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jT.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Rc.set(e,s),s}VT(t=>({...t,get:(e,n,r)=>Bm(e,n)||t.get(e,n,r),has:(e,n)=>!!Bm(e,n)||t.has(e,n)}));/**
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
 */class zT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($T(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $T(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lh="@firebase/app",zm="0.10.5";/**
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
 */const Fr=new au("@firebase/app"),HT="@firebase/app-compat",WT="@firebase/analytics-compat",KT="@firebase/analytics",GT="@firebase/app-check-compat",qT="@firebase/app-check",QT="@firebase/auth",XT="@firebase/auth-compat",YT="@firebase/database",JT="@firebase/database-compat",ZT="@firebase/functions",eA="@firebase/functions-compat",tA="@firebase/installations",nA="@firebase/installations-compat",rA="@firebase/messaging",iA="@firebase/messaging-compat",sA="@firebase/performance",oA="@firebase/performance-compat",aA="@firebase/remote-config",lA="@firebase/remote-config-compat",uA="@firebase/storage",cA="@firebase/storage-compat",hA="@firebase/firestore",dA="@firebase/vertexai-preview",fA="@firebase/firestore-compat",pA="firebase",mA="10.12.2";/**
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
 */const Mh="[DEFAULT]",gA={[Lh]:"fire-core",[HT]:"fire-core-compat",[KT]:"fire-analytics",[WT]:"fire-analytics-compat",[qT]:"fire-app-check",[GT]:"fire-app-check-compat",[QT]:"fire-auth",[XT]:"fire-auth-compat",[YT]:"fire-rtdb",[JT]:"fire-rtdb-compat",[ZT]:"fire-fn",[eA]:"fire-fn-compat",[tA]:"fire-iid",[nA]:"fire-iid-compat",[rA]:"fire-fcm",[iA]:"fire-fcm-compat",[sA]:"fire-perf",[oA]:"fire-perf-compat",[aA]:"fire-rc",[lA]:"fire-rc-compat",[uA]:"fire-gcs",[cA]:"fire-gcs-compat",[hA]:"fire-fst",[fA]:"fire-fst-compat",[dA]:"fire-vertex","fire-js":"fire-js",[pA]:"fire-js-all"};/**
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
 */const El=new Map,vA=new Map,Vh=new Map;function $m(t,e){try{t.container.addComponent(e)}catch(n){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lr(t){const e=t.name;if(Vh.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;Vh.set(e,t);for(const n of El.values())$m(n,t);for(const n of vA.values())$m(n,t);return!0}function ef(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function st(t){return t.settings!==void 0}/**
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
 */const yA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new mr("app","Firebase",yA);/**
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
 */class _A{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Pn=mA;function N_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nr.create("bad-app-name",{appName:String(i)});if(n||(n=I_()),!n)throw nr.create("no-options");const s=El.get(i);if(s){if(_l(n,s.options)&&_l(r,s.config))return s;throw nr.create("duplicate-app",{appName:i})}const o=new CT(i);for(const u of Vh.values())o.addComponent(u);const l=new _A(n,r,o);return El.set(i,l),l}function O_(t=Mh){const e=El.get(t);if(!e&&t===Mh&&I_())return N_();if(!e)throw nr.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let i=(r=gA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(l.join(" "));return}lr(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const EA="firebase-heartbeat-database",wA=1,oo="firebase-heartbeat-store";let Pc=null;function D_(){return Pc||(Pc=FT(EA,wA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function IA(t){try{const n=(await D_()).transaction(oo),r=await n.objectStore(oo).get(x_(t));return await n.done,r}catch(e){if(e instanceof Ut)Fr.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(n.message)}}}async function Hm(t,e){try{const r=(await D_()).transaction(oo,"readwrite");await r.objectStore(oo).put(e,x_(t)),await r.done}catch(n){if(n instanceof Ut)Fr.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fr.warn(r.message)}}}function x_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TA=1024,AA=30*24*60*60*1e3;class SA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=AA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:r,unsentEntries:i}=CA(this._heartbeatsCache.heartbeats),s=yl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wm(){return new Date().toISOString().substring(0,10)}function CA(t,e=TA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Km(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Km(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mT()?gT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await IA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Km(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function PA(t){lr(new Tn("platform-logger",e=>new zT(e),"PRIVATE")),lr(new Tn("heartbeat",e=>new SA(e),"PRIVATE")),tn(Lh,zm,t),tn(Lh,zm,"esm2017"),tn("fire-js","")}PA("");var kA="firebase",NA="10.12.2";/**
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
 */tn(kA,NA,"app");function Co(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function L_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OA=L_,M_=new mr("auth","Firebase",L_());/**
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
 */const wl=new au("@firebase/auth");function DA(t,...e){wl.logLevel<=Y.WARN&&wl.warn(`Auth (${Pn}): ${t}`,...e)}function Ua(t,...e){wl.logLevel<=Y.ERROR&&wl.error(`Auth (${Pn}): ${t}`,...e)}/**
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
 */function An(t,...e){throw tf(t,...e)}function nn(t,...e){return tf(t,...e)}function V_(t,e,n){const r=Object.assign(Object.assign({},OA()),{[e]:n});return new mr("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return V_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M_.create(t,...e)}function q(t,e,...n){if(!t)throw tf(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function Sn(t,e){t||dn(e)}/**
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
 */function Uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xA(){return Gm()==="http:"||Gm()==="https:"}function Gm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function LA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xA()||S_()||"connection"in navigator)?navigator.onLine:!0}function MA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */let Ro=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=A_()||C_()}get(){return LA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function nf(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */let U_=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const VA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UA=new Ro(3e4,6e4);function Po(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,r,i={}){return b_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Kr(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),U_.fetch()(j_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function b_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VA),e);try{const i=new FA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ga(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw V_(t,f,h);An(t,f)}}catch(i){if(i instanceof Ut)throw i;An(t,"network-request-failed",{message:String(i)})}}async function F_(t,e,n,r,i={}){const s=await Gr(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function j_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nf(t.config,i):`${t.config.apiScheme}://${i}`}function bA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let FA=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),UA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function qm(t){return t!==void 0&&t.enterprise!==void 0}let jA=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function BA(t,e){return Gr(t,"GET","/v2/recaptchaConfig",Po(t,e))}/**
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
 */async function zA(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function B_(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $A(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=rf(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vs(kc(i.auth_time)),issuedAtTime:Vs(kc(i.iat)),expirationTime:Vs(kc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jd(n);return i?JSON.parse(i):(Ua("Failed to decode base64 JWT payload"),null)}catch(i){return Ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qm(t){const e=rf(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&HA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */let WA=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let bh=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function Il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ao(t,B_(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?z_(s.providerUserInfo):[],l=GA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new bh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function KA(t){const e=je(t);await Il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function z_(t){return t.map(e=>{var{providerId:n}=e,r=Co(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qA(t,e){const n=await b_(t,{},async()=>{const r=Kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=j_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",U_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QA(t,e){return Gr(t,"POST","/v2/accounts:revokeToken",Po(t,e))}/**
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
 */let Nc=class Fh{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Qm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fh;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fh,this.toJSON())}_performRefresh(){return dn("not implemented")}};/**
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
 */function xn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let Tl=class Ss{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $A(this,e)}reload(){return KA(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await ao(this,zA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:O,isAnonymous:V,providerData:F,stsTokenManager:w}=n;q(E&&w,e,"internal-error");const p=Nc.fromJSON(this.name,w);q(typeof E=="string",e,"internal-error"),xn(m,e.name),xn(_,e.name),q(typeof O=="boolean",e,"internal-error"),q(typeof V=="boolean",e,"internal-error"),xn(R,e.name),xn(C,e.name),xn(k,e.name),xn(D,e.name),xn(I,e.name),xn(v,e.name);const y=new Ss({uid:E,auth:e,email:_,emailVerified:O,displayName:m,isAnonymous:V,photoURL:C,phoneNumber:R,tenantId:k,stsTokenManager:p,createdAt:I,lastLoginAt:v});return F&&Array.isArray(F)&&(y.providerData=F.map(T=>Object.assign({},T))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Nc;i.updateFromServerResponse(n);const s=new Ss({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Il(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?z_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Nc;l.updateFromIdToken(r);const u=new Ss({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}};/**
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
 */const Xm=new Map;function fn(t){Sn(t instanceof Function,"Expected a class definition");let e=Xm.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xm.set(t,e),e)}/**
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
 */let $_=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};$_.type="NONE";const Ym=$_;/**
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
 */function ba(t,e,n){return`firebase:${t}:${e}:${n}`}let Jm=class Fa{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ba(this.userKey,i.apiKey,s),this.fullPersistenceKey=ba("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tl._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fa(fn(Ym),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||fn(Ym);const o=ba(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=Tl._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Fa(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Fa(s,e,r))}};/**
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
 */function Zm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q_(e))return"Blackberry";if(Q_(e))return"Webos";if(sf(e))return"Safari";if((e.includes("chrome/")||W_(e))&&!e.includes("edge/"))return"Chrome";if(G_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function H_(t=de()){return/firefox\//i.test(t)}function sf(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W_(t=de()){return/crios\//i.test(t)}function K_(t=de()){return/iemobile/i.test(t)}function G_(t=de()){return/android/i.test(t)}function q_(t=de()){return/blackberry/i.test(t)}function Q_(t=de()){return/webos/i.test(t)}function lu(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XA(t=de()){var e;return lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YA(){return fT()&&document.documentMode===10}function X_(t=de()){return lu(t)||G_(t)||Q_(t)||q_(t)||/windows phone/i.test(t)||K_(t)}function JA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Y_(t,e=[]){let n;switch(t){case"Browser":n=Zm(de());break;case"Worker":n=`${Zm(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pn}/${r}`}/**
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
 */let ZA=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function eS(t,e={}){return Gr(t,"GET","/v2/passwordPolicy",Po(t,e))}/**
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
 */const tS=6;let nS=class{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
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
 */let rS=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new ZA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Jm.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await B_(this,{idToken:e}),r=await Tl._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(st(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(rr(this));const n=e?je(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eS(this),n=new nS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Jm.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}};function zi(t){return je(t)}let eg=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=R_(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let uu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iS(t){uu=t}function J_(t){return uu.loadJS(t)}function sS(){return uu.recaptchaEnterpriseScript}function oS(){return uu.gapiScript}function aS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lS="recaptcha-enterprise",uS="NO_RECAPTCHA";let cS=class{constructor(e){this.type=lS,this.auth=zi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{BA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new jA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;qm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(uS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&qm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sS();u.length!==0&&(u+=l),J_(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}};async function tg(t,e,n,r=!1){const i=new cS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hS(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await tg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await tg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function dS(t,e){const n=ef(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_l(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function fS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pS(t,e,n){const r=zi(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Z_(e),{host:o,port:l}=mS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),gS()}function Z_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mS(t){const e=Z_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ng(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ng(o)}}}function ng(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */let e0=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}};/**
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
 */async function Ii(t,e){return F_(t,"POST","/v1/accounts:signInWithIdp",Po(t,e))}/**
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
 */const vS="http://localhost";class jr extends e0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Co(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:vS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kr(n)}return e}}/**
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
 */class t0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ko extends t0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends ko{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class jn extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
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
 */class Bn extends ko{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
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
 */class zn extends ko{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */async function yS(t,e){return F_(t,"POST","/v1/accounts:signUp",Po(t,e))}/**
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
 */let cu=class jh{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tl._fromIdTokenResponse(e,r,i),o=rg(r);return new jh({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rg(r);return new jh({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function rg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */let _S=class Bh extends Ut{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bh(e,n,r,i)}};function n0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_S._fromErrorAndOperation(t,s,e,r):s})}async function ES(t,e,n=!1){const r=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cu._forOperation(t,"link",r)}/**
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
 */async function wS(t,e,n=!1){const{auth:r}=t;if(st(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await ao(t,n0(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=rf(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),cu._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
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
 */async function IS(t,e,n=!1){if(st(t.app))return Promise.reject(rr(t));const r="signIn",i=await n0(t,r,e),s=await cu._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */async function TS(t){const e=zi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AS(t,e,n){if(st(t.app))return Promise.reject(rr(t));const r=zi(t),o=await hS(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yS).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&TS(t),u}),l=await cu._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function SS(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function CS(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function RS(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}const Al="__sak";/**
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
 */class r0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Al,"1"),this.storage.removeItem(Al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function PS(){const t=de();return sf(t)||lu(t)}const kS=1e3,NS=10;class i0 extends r0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=PS()&&JA(),this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}i0.type="LOCAL";const OS=i0;/**
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
 */class s0 extends r0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}s0.type="SESSION";const o0=s0;/**
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
 */function DS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await DS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hu.receivers=[];/**
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
 */function of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=of("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function LS(t){rn().location.href=t}/**
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
 */function a0(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function MS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function US(){return a0()?self:null}/**
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
 */const l0="firebaseLocalStorageDb",bS=1,Sl="firebaseLocalStorage",u0="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function du(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function FS(){const t=indexedDB.deleteDatabase(l0);return new No(t).toPromise()}function zh(){const t=indexedDB.open(l0,bS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:u0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await FS(),e(await zh()))})})}async function ig(t,e,n){const r=du(t,!0).put({[u0]:e,value:n});return new No(r).toPromise()}async function jS(t,e){const n=du(t,!1).get(e),r=await new No(n).toPromise();return r===void 0?null:r.value}function sg(t,e){const n=du(t,!0).delete(e);return new No(n).toPromise()}const BS=800,zS=3;class c0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hu._getInstance(US()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MS(),!this.activeServiceWorker)return;this.sender=new xS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zh();return await ig(e,Al,"1"),await sg(e,Al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ig(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=du(i,!1).getAll();return new No(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c0.type="LOCAL";const $S=c0;new Ro(3e4,6e4);/**
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
 */function HS(t,e){return e?fn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class af extends e0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WS(t){return IS(t.auth,new af(t),t.bypassAuthState)}function KS(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),wS(n,new af(t),t.bypassAuthState)}async function GS(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),ES(n,new af(t),t.bypassAuthState)}/**
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
 */class h0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WS;case"linkViaPopup":case"linkViaRedirect":return GS;case"reauthViaPopup":case"reauthViaRedirect":return KS;default:An(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qS=new Ro(2e3,1e4);class mi extends h0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qS.get())};e()}}mi.currentPopupAction=null;/**
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
 */const QS="pendingRedirect",ja=new Map;class XS extends h0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ja.get(this.auth._key());if(!e){try{const r=await YS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ja.set(this.auth._key(),e)}return this.bypassAuthState||ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YS(t,e){const n=eC(e),r=ZS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function JS(t,e){ja.set(t._key(),e)}function ZS(t){return fn(t._redirectPersistence)}function eC(t){return ba(QS,t.config.apiKey,t.name)}async function tC(t,e,n=!1){if(st(t.app))return Promise.reject(rr(t));const r=zi(t),i=HS(r,e),o=await new XS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nC=10*60*1e3;class rC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!d0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nC&&this.cachedEventUids.clear(),this.cachedEventUids.has(og(e))}saveEventToCache(e){this.cachedEventUids.add(og(e)),this.lastProcessedEventTime=Date.now()}}function og(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d0(t);default:return!1}}/**
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
 */async function sC(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
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
 */const oC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aC=/^https?/;async function lC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sC(t);for(const n of e)try{if(uC(n))return}catch{}An(t,"unauthorized-domain")}function uC(t){const e=Uh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aC.test(n))return!1;if(oC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const cC=new Ro(3e4,6e4);function ag(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hC(t){return new Promise((e,n)=>{var r,i,s;function o(){ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ag(),n(nn(t,"network-request-failed"))},timeout:cC.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const l=aS("iframefcb");return rn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},J_(`${oS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function dC(t){return Ba=Ba||hC(t),Ba}/**
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
 */const fC=new Ro(5e3,15e3),pC="__/auth/iframe",mC="emulator/auth/iframe",gC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yC(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nf(e,mC):`https://${t.config.authDomain}/${pC}`,r={apiKey:e.apiKey,appName:t.name,v:Pn},i=vC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Kr(r).slice(1)}`}async function _C(t){const e=await dC(t),n=rn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:yC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=rn().setTimeout(()=>{s(o)},fC.get());function u(){rn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const EC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wC=500,IC=600,TC="_blank",AC="http://localhost";class lg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SC(t,e,n,r=wC,i=IC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},EC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=de().toLowerCase();n&&(l=W_(h)?TC:n),H_(h)&&(e=e||AC,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[R,C])=>`${_}${R}=${C},`,"");if(XA(h)&&l!=="_self")return CC(e||"",l),new lg(null);const m=window.open(e||"",l,f);q(m,t,"popup-blocked");try{m.focus()}catch{}return new lg(m)}function CC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const RC="__/auth/handler",PC="emulator/auth/handler",kC=encodeURIComponent("fac");async function ug(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pn,eventId:i};if(e instanceof t0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ET(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ko){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${kC}=${encodeURIComponent(u)}`:"";return`${NC(t)}?${Kr(l).slice(1)}${h}`}function NC({config:t}){return t.emulator?nf(t,PC):`https://${t.authDomain}/${RC}`}/**
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
 */const Oc="webStorageSupport";class OC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o0,this._completeRedirectFn=tC,this._overrideRedirectResult=JS}async _openPopup(e,n,r,i){var s;Sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ug(e,n,r,Uh(),i);return SC(e,o,of())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ug(e,n,r,Uh(),i);return LS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _C(e),r=new rC(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Oc];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||sf()||lu()}}const DC=OC;var cg="@firebase/auth",hg="1.7.4";/**
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
 */let xC=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function LC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MC(t){lr(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y_(t)},h=new rS(r,i,s,u);return fS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),lr(new Tn("auth-internal",e=>{const n=zi(e.getProvider("auth").getImmediate());return(r=>new xC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(cg,hg,LC(t)),tn(cg,hg,"esm2017")}/**
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
 */const VC=5*60,UC=T_("authIdTokenMaxAge")||VC;let dg=null;const bC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UC)return;const i=n==null?void 0:n.token;dg!==i&&(dg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FC(t=O_()){const e=ef(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dS(t,{popupRedirectResolver:DC,persistence:[$S,OS,o0]}),r=T_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=bC(s.toString());CS(n,o,()=>o(n.currentUser)),SS(n,l=>o(l))}}const i=w_("auth");return i&&pS(n,`http://${i}`),n}function jC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MC("Browser");function f0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BC=f0,p0=new mr("auth","Firebase",f0());/**
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
 */const Cl=new au("@firebase/auth");function zC(t,...e){Cl.logLevel<=Y.WARN&&Cl.warn(`Auth (${Pn}): ${t}`,...e)}function za(t,...e){Cl.logLevel<=Y.ERROR&&Cl.error(`Auth (${Pn}): ${t}`,...e)}/**
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
 */function lo(t,...e){throw lf(t,...e)}function m0(t,...e){return lf(t,...e)}function g0(t,e,n){const r=Object.assign(Object.assign({},BC()),{[e]:n});return new mr("auth","Firebase",r).create(e,{appName:t.name})}function Ti(t){return g0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return p0.create(t,...e)}function ne(t,e,...n){if(!t)throw lf(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw za(e),new Error(e)}function Rl(t,e){t||pn(e)}function $C(){return fg()==="http:"||fg()==="https:"}function fg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($C()||S_()||"connection"in navigator)?navigator.onLine:!0}function WC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class KC{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rl(n>e,"Short delay should be less than long delay!"),this.isMobile=A_()||C_()}get(){return HC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function GC(t,e){Rl(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class v0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QC=new KC(3e4,6e4);function $i(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,r,i={}){return y0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Kr(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),v0.fetch()(_0(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function y0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qC),e);try{const i=new YC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw va(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw g0(t,f,h);lo(t,f)}}catch(i){if(i instanceof Ut)throw i;lo(t,"network-request-failed",{message:String(i)})}}async function uf(t,e,n,r,i={}){const s=await qr(t,e,n,r,i);return"mfaPendingCredential"in s&&lo(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?GC(t.config,i):`${t.config.apiScheme}://${i}`}function XC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(m0(this.auth,"network-request-failed")),QC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m0(t,e,r);return i.customData._tokenResponse=n,i}function pg(t){return t!==void 0&&t.enterprise!==void 0}class JC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZC(t,e){return qr(t,"GET","/v2/recaptchaConfig",$i(t,e))}/**
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
 */async function eR(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function E0(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tR(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=w0(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Us(Dc(i.auth_time)),issuedAtTime:Us(Dc(i.iat)),expirationTime:Us(Dc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dc(t){return Number(t)*1e3}function w0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return za("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jd(n);return i?JSON.parse(i):(za("Failed to decode base64 JWT payload"),null)}catch(i){return za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mg(t){const e=w0(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $h(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&nR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $h(t,E0(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?I0(s.providerUserInfo):[],l=sR(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Hh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function iR(t){const e=je(t);await Pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function I0(t){return t.map(e=>{var{providerId:n}=e,r=Co(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function oR(t,e){const n=await y0(t,{},async()=>{const r=Kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",v0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aR(t,e){return qr(t,"POST","/v2/accounts:revokeToken",$i(t,e))}/**
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
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=mg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await oR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ai;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
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
 */function Ln(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $h(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tR(this,e)}reload(){return iR(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await $h(this,eR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:O,isAnonymous:V,providerData:F,stsTokenManager:w}=n;ne(E&&w,e,"internal-error");const p=Ai.fromJSON(this.name,w);ne(typeof E=="string",e,"internal-error"),Ln(m,e.name),Ln(_,e.name),ne(typeof O=="boolean",e,"internal-error"),ne(typeof V=="boolean",e,"internal-error"),Ln(R,e.name),Ln(C,e.name),Ln(k,e.name),Ln(D,e.name),Ln(I,e.name),Ln(v,e.name);const y=new mn({uid:E,auth:e,email:_,emailVerified:O,displayName:m,isAnonymous:V,photoURL:C,phoneNumber:R,tenantId:k,stsTokenManager:p,createdAt:I,lastLoginAt:v});return F&&Array.isArray(F)&&(y.providerData=F.map(T=>Object.assign({},T))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ai;i.updateFromServerResponse(n);const s=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?I0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ai;l.updateFromIdToken(r);const u=new mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const gg=new Map;function Rr(t){Rl(t instanceof Function,"Expected a class definition");let e=gg.get(t);return e?(Rl(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gg.set(t,e),e)}/**
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
 */class T0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}T0.type="NONE";const vg=T0;/**
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
 */function xc(t,e,n){return`firebase:${t}:${e}:${n}`}class Si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xc(this.userKey,i.apiKey,s),this.fullPersistenceKey=xc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Si(Rr(vg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Rr(vg);const o=xc(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=mn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Si(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Si(s,e,r))}}/**
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
 */function yg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fR(e))return"Blackberry";if(pR(e))return"Webos";if(uR(e))return"Safari";if((e.includes("chrome/")||cR(e))&&!e.includes("edge/"))return"Chrome";if(dR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lR(t=de()){return/firefox\//i.test(t)}function uR(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cR(t=de()){return/crios\//i.test(t)}function hR(t=de()){return/iemobile/i.test(t)}function dR(t=de()){return/android/i.test(t)}function fR(t=de()){return/blackberry/i.test(t)}function pR(t=de()){return/webos/i.test(t)}/**
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
 */function A0(t,e=[]){let n;switch(t){case"Browser":n=yg(de());break;case"Worker":n=`${yg(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pn}/${r}`}/**
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
 */class mR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gR(t,e={}){return qr(t,"GET","/v2/passwordPolicy",$i(t,e))}/**
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
 */const vR=6;class yR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class _R{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _g(this),this.idTokenSubscription=new _g(this),this.beforeStateQueue=new mR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await E0(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(st(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(Ti(this));const n=e?je(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gR(this),n=new yR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rr(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[Rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fu(t){return je(t)}class _g{constructor(e){this.auth=e,this.observer=null,this.addObserver=R_(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let S0={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ER(t){return S0.loadJS(t)}function wR(){return S0.recaptchaEnterpriseScript}const IR="recaptcha-enterprise",TR="NO_RECAPTCHA";class AR{constructor(e){this.type=IR,this.auth=fu(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{ZC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new JC(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;pg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(TR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&pg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=wR();u.length!==0&&(u+=l),ER(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Eg(t,e,n,r=!1){const i=new AR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Eg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Eg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function SR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class CR{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function RR(t,e){return qr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function PR(t,e){return uf(t,"POST","/v1/accounts:signInWithPassword",$i(t,e))}/**
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
 */async function kR(t,e){return uf(t,"POST","/v1/accounts:signInWithEmailLink",$i(t,e))}async function NR(t,e){return uf(t,"POST","/v1/accounts:signInWithEmailLink",$i(t,e))}/**
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
 */class uo extends CR{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wg(e,n,"signInWithPassword",PR);case"emailLink":return kR(e,{email:this._email,oobCode:this._password});default:lo(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wg(e,r,"signUpPassword",RR);case"emailLink":return NR(e,{idToken:n,email:this._email,oobCode:this._password});default:lo(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */function OR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DR(t){const e=Ts(As(t)).link,n=e?Ts(As(e)).deep_link_id:null,r=Ts(As(t)).deep_link_id;return(r?Ts(As(r)).link:null)||r||n||e||t}class cf{constructor(e){var n,r,i,s,o,l;const u=Ts(As(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=OR((i=u.mode)!==null&&i!==void 0?i:null);ne(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=DR(e);try{return new cf(n)}catch{return null}}}/**
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
 */class Hi{constructor(){this.providerId=Hi.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cf.parseLink(n);return ne(r,"argument-error"),uo._fromEmailAndCode(e,r.code,r.tenantId)}}Hi.PROVIDER_ID="password";Hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mn._fromIdTokenResponse(e,r,i),o=Ig(r);return new kl({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ig(r);return new kl({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ig(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Nl extends Ut{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nl(e,n,r,i)}}function xR(t,e,n,r){return n._getIdTokenResponse(t).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */async function LR(t,e,n=!1){if(st(t.app))return Promise.reject(Ti(t));const r="signIn",i=await xR(t,r,e),s=await kl._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function MR(t,e){return LR(fu(t),e)}/**
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
 */async function VR(t){const e=fu(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function UR(t,e,n){return st(t.app)?Promise.reject(Ti(t)):MR(je(t),Hi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&VR(t),r})}function bR(t){return je(t).signOut()}var Tg="@firebase/auth",Ag="1.7.4";/**
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
 */class FR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BR(t){lr(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A0(t)},h=new _R(r,i,s,u);return SR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),lr(new Tn("auth-internal",e=>{const n=fu(e.getProvider("auth").getImmediate());return(r=>new FR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Tg,Ag,jR(t)),tn(Tg,Ag,"esm2017")}BR("WebExtension");var Sg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var C0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,p){function y(){}y.prototype=p.prototype,w.D=p.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(T,S,P){for(var A=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)A[Se-2]=arguments[Se];return p.prototype[S].apply(T,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,p,y){y||(y=0);var T=Array(16);if(typeof p=="string")for(var S=0;16>S;++S)T[S]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(S=0;16>S;++S)T[S]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=w.g[0],y=w.g[1],S=w.g[2];var P=w.g[3],A=p+(P^y&(S^P))+T[0]+3614090360&4294967295;p=y+(A<<7&4294967295|A>>>25),A=P+(S^p&(y^S))+T[1]+3905402710&4294967295,P=p+(A<<12&4294967295|A>>>20),A=S+(y^P&(p^y))+T[2]+606105819&4294967295,S=P+(A<<17&4294967295|A>>>15),A=y+(p^S&(P^p))+T[3]+3250441966&4294967295,y=S+(A<<22&4294967295|A>>>10),A=p+(P^y&(S^P))+T[4]+4118548399&4294967295,p=y+(A<<7&4294967295|A>>>25),A=P+(S^p&(y^S))+T[5]+1200080426&4294967295,P=p+(A<<12&4294967295|A>>>20),A=S+(y^P&(p^y))+T[6]+2821735955&4294967295,S=P+(A<<17&4294967295|A>>>15),A=y+(p^S&(P^p))+T[7]+4249261313&4294967295,y=S+(A<<22&4294967295|A>>>10),A=p+(P^y&(S^P))+T[8]+1770035416&4294967295,p=y+(A<<7&4294967295|A>>>25),A=P+(S^p&(y^S))+T[9]+2336552879&4294967295,P=p+(A<<12&4294967295|A>>>20),A=S+(y^P&(p^y))+T[10]+4294925233&4294967295,S=P+(A<<17&4294967295|A>>>15),A=y+(p^S&(P^p))+T[11]+2304563134&4294967295,y=S+(A<<22&4294967295|A>>>10),A=p+(P^y&(S^P))+T[12]+1804603682&4294967295,p=y+(A<<7&4294967295|A>>>25),A=P+(S^p&(y^S))+T[13]+4254626195&4294967295,P=p+(A<<12&4294967295|A>>>20),A=S+(y^P&(p^y))+T[14]+2792965006&4294967295,S=P+(A<<17&4294967295|A>>>15),A=y+(p^S&(P^p))+T[15]+1236535329&4294967295,y=S+(A<<22&4294967295|A>>>10),A=p+(S^P&(y^S))+T[1]+4129170786&4294967295,p=y+(A<<5&4294967295|A>>>27),A=P+(y^S&(p^y))+T[6]+3225465664&4294967295,P=p+(A<<9&4294967295|A>>>23),A=S+(p^y&(P^p))+T[11]+643717713&4294967295,S=P+(A<<14&4294967295|A>>>18),A=y+(P^p&(S^P))+T[0]+3921069994&4294967295,y=S+(A<<20&4294967295|A>>>12),A=p+(S^P&(y^S))+T[5]+3593408605&4294967295,p=y+(A<<5&4294967295|A>>>27),A=P+(y^S&(p^y))+T[10]+38016083&4294967295,P=p+(A<<9&4294967295|A>>>23),A=S+(p^y&(P^p))+T[15]+3634488961&4294967295,S=P+(A<<14&4294967295|A>>>18),A=y+(P^p&(S^P))+T[4]+3889429448&4294967295,y=S+(A<<20&4294967295|A>>>12),A=p+(S^P&(y^S))+T[9]+568446438&4294967295,p=y+(A<<5&4294967295|A>>>27),A=P+(y^S&(p^y))+T[14]+3275163606&4294967295,P=p+(A<<9&4294967295|A>>>23),A=S+(p^y&(P^p))+T[3]+4107603335&4294967295,S=P+(A<<14&4294967295|A>>>18),A=y+(P^p&(S^P))+T[8]+1163531501&4294967295,y=S+(A<<20&4294967295|A>>>12),A=p+(S^P&(y^S))+T[13]+2850285829&4294967295,p=y+(A<<5&4294967295|A>>>27),A=P+(y^S&(p^y))+T[2]+4243563512&4294967295,P=p+(A<<9&4294967295|A>>>23),A=S+(p^y&(P^p))+T[7]+1735328473&4294967295,S=P+(A<<14&4294967295|A>>>18),A=y+(P^p&(S^P))+T[12]+2368359562&4294967295,y=S+(A<<20&4294967295|A>>>12),A=p+(y^S^P)+T[5]+4294588738&4294967295,p=y+(A<<4&4294967295|A>>>28),A=P+(p^y^S)+T[8]+2272392833&4294967295,P=p+(A<<11&4294967295|A>>>21),A=S+(P^p^y)+T[11]+1839030562&4294967295,S=P+(A<<16&4294967295|A>>>16),A=y+(S^P^p)+T[14]+4259657740&4294967295,y=S+(A<<23&4294967295|A>>>9),A=p+(y^S^P)+T[1]+2763975236&4294967295,p=y+(A<<4&4294967295|A>>>28),A=P+(p^y^S)+T[4]+1272893353&4294967295,P=p+(A<<11&4294967295|A>>>21),A=S+(P^p^y)+T[7]+4139469664&4294967295,S=P+(A<<16&4294967295|A>>>16),A=y+(S^P^p)+T[10]+3200236656&4294967295,y=S+(A<<23&4294967295|A>>>9),A=p+(y^S^P)+T[13]+681279174&4294967295,p=y+(A<<4&4294967295|A>>>28),A=P+(p^y^S)+T[0]+3936430074&4294967295,P=p+(A<<11&4294967295|A>>>21),A=S+(P^p^y)+T[3]+3572445317&4294967295,S=P+(A<<16&4294967295|A>>>16),A=y+(S^P^p)+T[6]+76029189&4294967295,y=S+(A<<23&4294967295|A>>>9),A=p+(y^S^P)+T[9]+3654602809&4294967295,p=y+(A<<4&4294967295|A>>>28),A=P+(p^y^S)+T[12]+3873151461&4294967295,P=p+(A<<11&4294967295|A>>>21),A=S+(P^p^y)+T[15]+530742520&4294967295,S=P+(A<<16&4294967295|A>>>16),A=y+(S^P^p)+T[2]+3299628645&4294967295,y=S+(A<<23&4294967295|A>>>9),A=p+(S^(y|~P))+T[0]+4096336452&4294967295,p=y+(A<<6&4294967295|A>>>26),A=P+(y^(p|~S))+T[7]+1126891415&4294967295,P=p+(A<<10&4294967295|A>>>22),A=S+(p^(P|~y))+T[14]+2878612391&4294967295,S=P+(A<<15&4294967295|A>>>17),A=y+(P^(S|~p))+T[5]+4237533241&4294967295,y=S+(A<<21&4294967295|A>>>11),A=p+(S^(y|~P))+T[12]+1700485571&4294967295,p=y+(A<<6&4294967295|A>>>26),A=P+(y^(p|~S))+T[3]+2399980690&4294967295,P=p+(A<<10&4294967295|A>>>22),A=S+(p^(P|~y))+T[10]+4293915773&4294967295,S=P+(A<<15&4294967295|A>>>17),A=y+(P^(S|~p))+T[1]+2240044497&4294967295,y=S+(A<<21&4294967295|A>>>11),A=p+(S^(y|~P))+T[8]+1873313359&4294967295,p=y+(A<<6&4294967295|A>>>26),A=P+(y^(p|~S))+T[15]+4264355552&4294967295,P=p+(A<<10&4294967295|A>>>22),A=S+(p^(P|~y))+T[6]+2734768916&4294967295,S=P+(A<<15&4294967295|A>>>17),A=y+(P^(S|~p))+T[13]+1309151649&4294967295,y=S+(A<<21&4294967295|A>>>11),A=p+(S^(y|~P))+T[4]+4149444226&4294967295,p=y+(A<<6&4294967295|A>>>26),A=P+(y^(p|~S))+T[11]+3174756917&4294967295,P=p+(A<<10&4294967295|A>>>22),A=S+(p^(P|~y))+T[2]+718787259&4294967295,S=P+(A<<15&4294967295|A>>>17),A=y+(P^(S|~p))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(S+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,p){p===void 0&&(p=w.length);for(var y=p-this.blockSize,T=this.B,S=this.h,P=0;P<p;){if(S==0)for(;P<=y;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<p;)if(T[S++]=w.charCodeAt(P++),S==this.blockSize){i(this,T),S=0;break}}else for(;P<p;)if(T[S++]=w[P++],S==this.blockSize){i(this,T),S=0;break}}this.h=S,this.o+=p},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;var y=8*this.o;for(p=w.length-8;p<w.length;++p)w[p]=y&255,y/=256;for(this.u(w),w=Array(16),p=y=0;4>p;++p)for(var T=0;32>T;T+=8)w[y++]=this.g[p]>>>T&255;return w};function s(w,p){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=p(w)}function o(w,p){this.h=p;for(var y=[],T=!0,S=w.length-1;0<=S;S--){var P=w[S]|0;T&&P==p||(y[S]=P,T=!1)}this.g=y}var l={};function u(w){return-128<=w&&128>w?s(w,function(p){return new o([p|0],0>p?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return D(h(-w));for(var p=[],y=1,T=0;w>=y;T++)p[T]=w/y|0,y*=4294967296;return new o(p,0)}function f(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return D(f(w.substring(1),p));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(p,8)),T=m,S=0;S<w.length;S+=8){var P=Math.min(8,w.length-S),A=parseInt(w.substring(S,S+P),p);8>P?(P=h(Math.pow(p,P)),T=T.j(P).add(h(A))):(T=T.j(y),T=T.add(h(A)))}return T}var m=u(0),_=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var w=0,p=1,y=0;y<this.g.length;y++){var T=this.i(y);w+=(0<=T?T:4294967296+T)*p,p*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(k(this))return"-"+D(this).toString(w);for(var p=h(Math.pow(w,6)),y=this,T="";;){var S=O(y,p).g;y=I(y,S.j(p));var P=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=S,C(y))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=I(this,w),k(w)?-1:C(w)?0:1};function D(w){for(var p=w.g.length,y=[],T=0;T<p;T++)y[T]=~w.g[T];return new o(y,~w.h).add(_)}t.abs=function(){return k(this)?D(this):this},t.add=function(w){for(var p=Math.max(this.g.length,w.g.length),y=[],T=0,S=0;S<=p;S++){var P=T+(this.i(S)&65535)+(w.i(S)&65535),A=(P>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);T=A>>>16,P&=65535,A&=65535,y[S]=A<<16|P}return new o(y,y[y.length-1]&-2147483648?-1:0)};function I(w,p){return w.add(D(p))}t.j=function(w){if(C(this)||C(w))return m;if(k(this))return k(w)?D(this).j(D(w)):D(D(this).j(w));if(k(w))return D(this.j(D(w)));if(0>this.l(R)&&0>w.l(R))return h(this.m()*w.m());for(var p=this.g.length+w.g.length,y=[],T=0;T<2*p;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<w.g.length;S++){var P=this.i(T)>>>16,A=this.i(T)&65535,Se=w.i(S)>>>16,gt=w.i(S)&65535;y[2*T+2*S]+=A*gt,v(y,2*T+2*S),y[2*T+2*S+1]+=P*gt,v(y,2*T+2*S+1),y[2*T+2*S+1]+=A*Se,v(y,2*T+2*S+1),y[2*T+2*S+2]+=P*Se,v(y,2*T+2*S+2)}for(T=0;T<p;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=p;T<2*p;T++)y[T]=0;return new o(y,0)};function v(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function E(w,p){this.g=w,this.h=p}function O(w,p){if(C(p))throw Error("division by zero");if(C(w))return new E(m,m);if(k(w))return p=O(D(w),p),new E(D(p.g),D(p.h));if(k(p))return p=O(w,D(p)),new E(D(p.g),p.h);if(30<w.g.length){if(k(w)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=p;0>=T.l(w);)y=V(y),T=V(T);var S=F(y,1),P=F(T,1);for(T=F(T,2),y=F(y,2);!C(T);){var A=P.add(T);0>=A.l(w)&&(S=S.add(y),P=A),T=F(T,1),y=F(y,1)}return p=I(w,S.j(p)),new E(S,p)}for(S=m;0<=w.l(p);){for(y=Math.max(1,Math.floor(w.m()/p.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(y),A=P.j(p);k(A)||0<A.l(w);)y-=T,P=h(y),A=P.j(p);C(P)&&(P=_),S=S.add(P),w=I(w,A)}return new E(S,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var p=Math.max(this.g.length,w.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)&w.i(T);return new o(y,this.h&w.h)},t.or=function(w){for(var p=Math.max(this.g.length,w.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)|w.i(T);return new o(y,this.h|w.h)},t.xor=function(w){for(var p=Math.max(this.g.length,w.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)^w.i(T);return new o(y,this.h^w.h)};function V(w){for(var p=w.g.length+1,y=[],T=0;T<p;T++)y[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(y,w.h)}function F(w,p){var y=p>>5;p%=32;for(var T=w.g.length-y,S=[],P=0;P<T;P++)S[P]=0<p?w.i(P+y)>>>p|w.i(P+y+1)<<32-p:w.i(P+y);return new o(S,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,C0=o}).apply(typeof Sg<"u"?Sg:typeof self<"u"?self:typeof window<"u"?window:{});var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var R0,P0,Cs,k0,$a,Wh,N0,O0,D0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ya=="object"&&ya];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,N={next:function(){if(!g&&d<a.length){var x=d++;return{value:c(x,a[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function _(a,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,N,x){for(var B=Array(arguments.length-2),le=2;le<arguments.length;le++)B[le-2]=arguments[le];return c.prototype[N].apply(g,B)}}function k(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function D(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const N=a.length||0,x=g.length||0;a.length=N+x;for(let B=0;B<x;B++)a[N+B]=g[B]}else a.push(g)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var V=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function F(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function p(a){const c={};for(const d in a)c[d]=a[d];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let x=0;x<y.length;x++)d=y[x],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function S(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function A(){var a=W;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Se{constructor(){this.h=this.g=null}add(c,d){const g=gt.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var gt=new I(()=>new Qt,a=>a.reset());class Qt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let De,z=!1,W=new Se,K=()=>{const a=l.Promise.resolve(void 0);De=()=>{a.then(se)}};var se=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){P(d)}var c=gt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var Ce=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Pe(a,c){if(ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(V){e:{try{O(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ze[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pe.aa.h.call(this)}}C(Pe,ee);var ze={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),Pu=0;function GE(a,c,d,g,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=N,this.key=++Pu,this.da=this.fa=!1}function Vo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Uo(a){this.src=a,this.g={},this.h=0}Uo.prototype.add=function(a,c,d,g,N){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var B=Nu(a,c,g,N);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new GE(c,this.src,x,!!g,N),c.fa=d,a.push(c)),c};function ku(a,c){var d=c.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,c,void 0),x;(x=0<=N)&&Array.prototype.splice.call(g,N,1),x&&(Vo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Nu(a,c,d,g){for(var N=0;N<a.length;++N){var x=a[N];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==g)return N}return-1}var Ou="closure_lm_"+(1e6*Math.random()|0),Du={};function kf(a,c,d,g,N){if(Array.isArray(c)){for(var x=0;x<c.length;x++)kf(a,c[x],d,g,N);return null}return d=Df(d),a&&a[lt]?a.K(c,d,h(g)?!!g.capture:!!g,N):qE(a,c,d,!1,g,N)}function qE(a,c,d,g,N,x){if(!c)throw Error("Invalid event type");var B=h(N)?!!N.capture:!!N,le=Lu(a);if(le||(a[Ou]=le=new Uo(a)),d=le.add(c,d,g,B,x),d.proxy)return d;if(g=QE(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Ce||(N=B),N===void 0&&(N=!1),a.addEventListener(c.toString(),g,N);else if(a.attachEvent)a.attachEvent(Of(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function QE(){function a(d){return c.call(a.src,a.listener,d)}const c=XE;return a}function Nf(a,c,d,g,N){if(Array.isArray(c))for(var x=0;x<c.length;x++)Nf(a,c[x],d,g,N);else g=h(g)?!!g.capture:!!g,d=Df(d),a&&a[lt]?(a=a.i,c=String(c).toString(),c in a.g&&(x=a.g[c],d=Nu(x,d,g,N),-1<d&&(Vo(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[c],a.h--)))):a&&(a=Lu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Nu(c,d,g,N)),(d=-1<a?c[a]:null)&&xu(d))}function xu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[lt])ku(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Of(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Lu(c))?(ku(d,a),d.h==0&&(d.src=null,c[Ou]=null)):Vo(a)}}}function Of(a){return a in Du?Du[a]:Du[a]="on"+a}function XE(a,c){if(a.da)a=!0;else{c=new Pe(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&xu(a),a=d.call(g,c)}return a}function Lu(a){return a=a[Ou],a instanceof Uo?a:null}var Mu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Df(a){return typeof a=="function"?a:(a[Mu]||(a[Mu]=function(c){return a.handleEvent(c)}),a[Mu])}function Xe(){X.call(this),this.i=new Uo(this),this.M=this,this.F=null}C(Xe,X),Xe.prototype[lt]=!0,Xe.prototype.removeEventListener=function(a,c,d,g){Nf(this,a,c,d,g)};function ut(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new ee(c,a);else if(c instanceof ee)c.target=c.target||a;else{var N=c;c=new ee(g,a),T(c,N)}if(N=!0,d)for(var x=d.length-1;0<=x;x--){var B=c.g=d[x];N=bo(B,g,!0,c)&&N}if(B=c.g=a,N=bo(B,g,!0,c)&&N,N=bo(B,g,!1,c)&&N,d)for(x=0;x<d.length;x++)B=c.g=d[x],N=bo(B,g,!1,c)&&N}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)Vo(d[g]);delete a.g[c],a.h--}}this.F=null},Xe.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Xe.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function bo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,x=0;x<c.length;++x){var B=c[x];if(B&&!B.da&&B.capture==d){var le=B.listener,$e=B.ha||B.src;B.fa&&ku(a.i,B),N=le.call($e,g)!==!1&&N}}return N&&!g.defaultPrevented}function xf(a,c,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Lf(a){a.g=xf(()=>{a.g=null,a.i&&(a.i=!1,Lf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class YE extends X{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Lf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(a){X.call(this),this.h=a,this.g={}}C(qi,X);var Mf=[];function Vf(a){F(a.g,function(c,d){this.g.hasOwnProperty(d)&&xu(c)},a),a.g={}}qi.prototype.N=function(){qi.aa.N.call(this),Vf(this)},qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vu=l.JSON.stringify,JE=l.JSON.parse,ZE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Uu(){}Uu.prototype.h=null;function Uf(a){return a.h||(a.h=a.i())}function bf(){}var Qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bu(){ee.call(this,"d")}C(bu,ee);function Fu(){ee.call(this,"c")}C(Fu,ee);var vr={},Ff=null;function Fo(){return Ff=Ff||new Xe}vr.La="serverreachability";function jf(a){ee.call(this,vr.La,a)}C(jf,ee);function Xi(a){const c=Fo();ut(c,new jf(c))}vr.STAT_EVENT="statevent";function Bf(a,c){ee.call(this,vr.STAT_EVENT,a),this.stat=c}C(Bf,ee);function ct(a){const c=Fo();ut(c,new Bf(c,a))}vr.Ma="timingevent";function zf(a,c){ee.call(this,vr.Ma,a),this.size=c}C(zf,ee);function Yi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ji(){this.g=!0}Ji.prototype.xa=function(){this.g=!1};function ew(a,c,d,g,N,x){a.info(function(){if(a.g)if(x)for(var B="",le=x.split("&"),$e=0;$e<le.length;$e++){var ie=le[$e].split("=");if(1<ie.length){var Ye=ie[0];ie=ie[1];var Je=Ye.split("_");B=2<=Je.length&&Je[1]=="type"?B+(Ye+"="+ie+"&"):B+(Ye+"=redacted&")}}else B=null;else B=x;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+d+`
`+B})}function tw(a,c,d,g,N,x,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+d+`
`+x+" "+B})}function Yr(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+rw(a,d)+(g?" "+g:"")})}function nw(a,c){a.info(function(){return"TIMEOUT: "+c})}Ji.prototype.info=function(){};function rw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var x=N[0];if(x!="noop"&&x!="stop"&&x!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return Vu(d)}catch{return c}}var jo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$f={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ju;function Bo(){}C(Bo,Uu),Bo.prototype.g=function(){return new XMLHttpRequest},Bo.prototype.i=function(){return{}},ju=new Bo;function kn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hf}function Hf(){this.i=null,this.g="",this.h=!1}var Wf={},Bu={};function zu(a,c,d){a.L=1,a.v=Wo(on(c)),a.m=d,a.P=!0,Kf(a,null)}function Kf(a,c){a.F=Date.now(),zo(a),a.A=on(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),op(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Hf,a.g=Ap(a.j,d?c:null,!a.m),0<a.O&&(a.M=new YE(_(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Mf[0]=N.toString()),N=Mf);for(var x=0;x<N.length;x++){var B=kf(d,N[x],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?p(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Xi(),ew(a.i,a.u,a.A,a.l,a.R,a.m)}kn.prototype.ca=function(a){a=a.target;const c=this.M;c&&an(a)==3?c.j():this.Y(a)},kn.prototype.Y=function(a){try{if(a==this.g)e:{const Je=an(this.g);var c=this.g.Ba();const ei=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||fp(this.g)))){this.J||Je!=4||c==7||(c==8||0>=ei?Xi(3):Xi(2)),$u(this);var d=this.g.Z();this.X=d;t:if(Gf(this)){var g=fp(this.g);a="";var N=g.length,x=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),Zi(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(x&&c==N-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,tw(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,$e=this.g;if((le=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(le)){var ie=le;break t}}ie=null}if(d=ie)Yr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hu(this,d);else{this.o=!1,this.s=3,ct(12),yr(this),Zi(this);break e}}if(this.P){d=!0;let bt;for(;!this.J&&this.C<B.length;)if(bt=iw(this,B),bt==Bu){Je==4&&(this.s=4,ct(14),d=!1),Yr(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Wf){this.s=4,ct(15),Yr(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Yr(this.i,this.l,bt,null),Hu(this,bt);if(Gf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||B.length!=0||this.h.h||(this.s=1,ct(16),d=!1),this.o=this.o&&d,!d)Yr(this.i,this.l,B,"[Invalid Chunked Response]"),yr(this),Zi(this);else if(0<B.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Xu(Ye),Ye.M=!0,ct(11))}}else Yr(this.i,this.l,B,null),Hu(this,B);Je==4&&yr(this),this.o&&!this.J&&(Je==4?Ep(this.j,this):(this.o=!1,zo(this)))}else ww(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),yr(this),Zi(this)}}}catch{}finally{}};function Gf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function iw(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Bu:(d=Number(c.substring(d,g)),isNaN(d)?Wf:(g+=1,g+d>c.length?Bu:(c=c.slice(g,g+d),a.C=g+d,c)))}kn.prototype.cancel=function(){this.J=!0,yr(this)};function zo(a){a.S=Date.now()+a.I,qf(a,a.I)}function qf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Yi(_(a.ba,a),c)}function $u(a){a.B&&(l.clearTimeout(a.B),a.B=null)}kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(nw(this.i,this.A),this.L!=2&&(Xi(),ct(17)),yr(this),this.s=2,Zi(this)):qf(this,this.S-a)};function Zi(a){a.j.G==0||a.J||Ep(a.j,a)}function yr(a){$u(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Vf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Hu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Wu(d.h,a))){if(!a.K&&Wu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Xo(d),qo(d);else break e;Qu(d),ct(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=Yi(_(d.Za,d),6e3));if(1>=Yf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Er(d,11)}else if((a.K||d.g==a)&&Xo(d),!v(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let ie=N[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Ye=ie[3];Ye!=null&&(d.la=Ye,d.j.info("VER="+d.la));const Je=ie[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const ei=ie[5];ei!=null&&typeof ei=="number"&&0<ei&&(g=1.5*ei,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const bt=a.g;if(bt){const Jo=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jo){var x=g.h;x.g||Jo.indexOf("spdy")==-1&&Jo.indexOf("quic")==-1&&Jo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ku(x,x.h),x.h=null))}if(g.D){const Yu=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Yu&&(g.ya=Yu,fe(g.I,g.D,Yu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=a;if(g.qa=Tp(g,g.J?g.ia:null,g.W),B.K){Jf(g.h,B);var le=B,$e=g.L;$e&&(le.I=$e),le.B&&($u(le),zo(le)),g.g=B}else yp(g);0<d.i.length&&Qo(d)}else ie[0]!="stop"&&ie[0]!="close"||Er(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Er(d,7):qu(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}Xi(4)}catch{}}var sw=class{constructor(a,c){this.g=a,this.map=c}};function Qf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yf(a){return a.h?1:a.g?a.g.size:0}function Wu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ku(a,c){a.g?a.g.add(c):a.h=c}function Jf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Qf.prototype.cancel=function(){if(this.i=Zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return k(a.i)}function ow(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function aw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function ep(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=aw(a),g=ow(a),N=g.length,x=0;x<N;x++)c.call(void 0,g[x],d&&d[x],a)}var tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),N=null;if(0<=g){var x=a[d].substring(0,g);N=a[d].substring(g+1)}else x=a[d];c(x,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function _r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _r){this.h=a.h,$o(this,a.j),this.o=a.o,this.g=a.g,Ho(this,a.s),this.l=a.l;var c=a.i,d=new ns;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),np(this,d),this.m=a.m}else a&&(c=String(a).match(tp))?(this.h=!1,$o(this,c[1]||"",!0),this.o=es(c[2]||""),this.g=es(c[3]||"",!0),Ho(this,c[4]),this.l=es(c[5]||"",!0),np(this,c[6]||"",!0),this.m=es(c[7]||"")):(this.h=!1,this.i=new ns(null,this.h))}_r.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ts(c,rp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ts(c,rp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ts(d,d.charAt(0)=="/"?hw:cw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ts(d,fw)),a.join("")};function on(a){return new _r(a)}function $o(a,c,d){a.j=d?es(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ho(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function np(a,c,d){c instanceof ns?(a.i=c,pw(a.i,a.h)):(d||(c=ts(c,dw)),a.i=new ns(c,a.h))}function fe(a,c,d){a.i.set(c,d)}function Wo(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function es(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ts(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,uw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rp=/[#\/\?@]/g,cw=/[#\?:]/g,hw=/[#\?]/g,dw=/[#\?@]/g,fw=/#/g;function ns(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Nn(a){a.g||(a.g=new Map,a.h=0,a.i&&lw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ns.prototype,t.add=function(a,c){Nn(this),this.i=null,a=Jr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function ip(a,c){Nn(a),c=Jr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function sp(a,c){return Nn(a),c=Jr(a,c),a.g.has(c)}t.forEach=function(a,c){Nn(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(c,N,g,this)},this)},this)},t.na=function(){Nn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const N=a[g];for(let x=0;x<N.length;x++)d.push(c[g])}return d},t.V=function(a){Nn(this);let c=[];if(typeof a=="string")sp(this,a)&&(c=c.concat(this.g.get(Jr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Nn(this),this.i=null,a=Jr(this,a),sp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function op(a,c,d){ip(a,c),0<d.length&&(a.i=null,a.g.set(Jr(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const x=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var N=x;B[g]!==""&&(N+="="+encodeURIComponent(String(B[g]))),a.push(N)}}return this.i=a.join("&")};function Jr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function pw(a,c){c&&!a.j&&(Nn(a),a.i=null,a.g.forEach(function(d,g){var N=g.toLowerCase();g!=N&&(ip(this,g),op(this,N,d))},a)),a.j=c}function mw(a,c){const d=new Ji;if(l.Image){const g=new Image;g.onload=R(On,d,"TestLoadImage: loaded",!0,c,g),g.onerror=R(On,d,"TestLoadImage: error",!1,c,g),g.onabort=R(On,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=R(On,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function gw(a,c){const d=new Ji,g=new AbortController,N=setTimeout(()=>{g.abort(),On(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(N),x.ok?On(d,"TestPingServer: ok",!0,c):On(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),On(d,"TestPingServer: error",!1,c)})}function On(a,c,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function vw(){this.g=new ZE}function yw(a,c,d){const g=d||"";try{ep(a,function(N,x){let B=N;h(N)&&(B=Vu(N)),c.push(g+x+"="+encodeURIComponent(B))})}catch(N){throw c.push(g+"type="+encodeURIComponent("_badmap")),N}}function rs(a){this.l=a.Ub||null,this.j=a.eb||!1}C(rs,Uu),rs.prototype.g=function(){return new Ko(this.l,this.j)},rs.prototype.i=function(a){return function(){return a}}({});function Ko(a,c){Xe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ko,Xe),t=Ko.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ss(this)),this.g&&(this.readyState=3,ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ap(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ap(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?is(this):ss(this),this.readyState==3&&ap(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,is(this))},t.Qa=function(a){this.g&&(this.response=a,is(this))},t.ga=function(){this.g&&is(this)};function is(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ss(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lp(a){let c="";return F(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Gu(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=lp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):fe(a,c,d))}function Ie(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ie,Xe);var _w=/^https?$/i,Ew=["POST","PUT"];t=Ie.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ju.g(),this.v=this.o?Uf(this.o):Uf(ju),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(x){up(this,x);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())d.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ew,c,void 0))||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,B]of d)this.g.setRequestHeader(x,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dp(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){up(this,x)}};function up(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,cp(a),Go(a)}function cp(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ut(this,"complete"),ut(this,"abort"),Go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Go(this,!0)),Ie.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hp(this):this.bb())},t.bb=function(){hp(this)};function hp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)xf(a.Ea,0,a);else if(ut(a,"readystatechange"),an(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=B===0){var N=String(a.D).match(tp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!_w.test(N?N.toLowerCase():"")}d=g}if(d)ut(a,"complete"),ut(a,"success");else{a.m=6;try{var x=2<an(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",cp(a)}}finally{Go(a)}}}}function Go(a,c){if(a.g){dp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ut(a,"ready");try{d.onreadystatechange=g}catch{}}}function dp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),JE(c)}};function fp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ww(a){const c={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=S(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[N]||[];c[N]=x,x.push(d)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function pp(a){this.Aa=0,this.i=[],this.j=new Ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=os("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=os("baseRetryDelayMs",5e3,a),this.cb=os("retryDelaySeedMs",1e4,a),this.Wa=os("forwardChannelMaxRetries",2,a),this.wa=os("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qf(a&&a.concurrentRequestLimit),this.Da=new vw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){ct(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Tp(this,null,this.W),Qo(this)};function qu(a){if(mp(a),a.G==3){var c=a.U++,d=on(a.I);if(fe(d,"SID",a.K),fe(d,"RID",c),fe(d,"TYPE","terminate"),as(a,d),c=new kn(a,a.j,c),c.L=2,c.v=Wo(on(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ap(c.j,null),c.g.ea(c.v)),c.F=Date.now(),zo(c)}Ip(a)}function qo(a){a.g&&(Xu(a),a.g.cancel(),a.g=null)}function mp(a){qo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Xo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Qo(a){if(!Xf(a.h)&&!a.s){a.s=!0;var c=a.Ga;De||K(),z||(De(),z=!0),W.add(c,a),a.B=0}}function Iw(a,c){return Yf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Yi(_(a.Ga,a,c),wp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new kn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=p(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(N.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=vp(this,N,c),d=on(this.I),fe(d,"RID",a),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),as(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(lp(x)))+"&"+c:this.m&&Gu(d,this.m,x)),Ku(this.h,N),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",c),fe(d,"SID","null"),N.T=!0,zu(N,d,null)):zu(N,d,c),this.G=2}}else this.G==3&&(a?gp(this,a):this.i.length==0||Xf(this.h)||gp(this))};function gp(a,c){var d;c?d=c.l:d=a.U++;const g=on(a.I);fe(g,"SID",a.K),fe(g,"RID",d),fe(g,"AID",a.T),as(a,g),a.m&&a.o&&Gu(g,a.m,a.o),d=new kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=vp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ku(a.h,d),zu(d,g,c)}function as(a,c){a.H&&F(a.H,function(d,g){fe(c,g,d)}),a.l&&ep({},function(d,g){fe(c,g,d)})}function vp(a,c,d){d=Math.min(a.i.length,d);var g=a.l?_(a.l.Na,a.l,a):null;e:{var N=a.i;let x=-1;for(;;){const B=["count="+d];x==-1?0<d?(x=N[0].g,B.push("ofs="+x)):x=0:B.push("ofs="+x);let le=!0;for(let $e=0;$e<d;$e++){let ie=N[$e].g;const Ye=N[$e].map;if(ie-=x,0>ie)x=Math.max(0,N[$e].g-100),le=!1;else try{yw(Ye,B,"req"+ie+"_")}catch{g&&g(Ye)}}if(le){g=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function yp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;De||K(),z||(De(),z=!0),W.add(c,a),a.v=0}}function Qu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Yi(_(a.Fa,a),wp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_p(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Yi(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),qo(this),_p(this))};function Xu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function _p(a){a.g=new kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=on(a.qa);fe(c,"RID","rpc"),fe(c,"SID",a.K),fe(c,"AID",a.T),fe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(c,"TO",a.ja),fe(c,"TYPE","xmlhttp"),as(a,c),a.m&&a.o&&Gu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Wo(on(c)),d.m=null,d.P=!0,Kf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,qo(this),Qu(this),ct(19))};function Xo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ep(a,c){var d=null;if(a.g==c){Xo(a),Xu(a),a.g=null;var g=2}else if(Wu(a.h,c))d=c.D,Jf(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;g=Fo(),ut(g,new zf(g,d)),Qo(a)}else yp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(g==1&&Iw(a,c)||g==2&&Qu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function wp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Er(a,c){if(a.j.info("Error code "+c),c==2){var d=_(a.fb,a),g=a.Xa;const N=!g;g=new _r(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||$o(g,"https"),Wo(g),N?mw(g.toString(),d):gw(g.toString(),d)}else ct(2);a.G=0,a.l&&a.l.sa(c),Ip(a),mp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Ip(a){if(a.G=0,a.ka=[],a.l){const c=Zf(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Tp(a,c,d){var g=d instanceof _r?on(d):new _r(d);if(g.g!="")c&&(g.g=c+"."+g.g),Ho(g,g.s);else{var N=l.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var x=new _r(null);g&&$o(x,g),c&&(x.g=c),N&&Ho(x,N),d&&(x.l=d),g=x}return d=a.D,c=a.ya,d&&c&&fe(g,d,c),fe(g,"VER",a.la),as(a,g),g}function Ap(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ie(new rs({eb:d})):new Ie(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sp(){}t=Sp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yo(){}Yo.prototype.g=function(a,c){return new Tt(a,c)};function Tt(a,c){Xe.call(this),this.g=new pp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Zr(this)}C(Tt,Xe),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){qu(this.g)},Tt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Vu(a),a=d);c.i.push(new sw(c.Ya++,a)),c.G==3&&Qo(c)},Tt.prototype.N=function(){this.g.l=null,delete this.j,qu(this.g),delete this.g,Tt.aa.N.call(this)};function Cp(a){bu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Cp,bu);function Rp(){Fu.call(this),this.status=1}C(Rp,Fu);function Zr(a){this.g=a}C(Zr,Sp),Zr.prototype.ua=function(){ut(this.g,"a")},Zr.prototype.ta=function(a){ut(this.g,new Cp(a))},Zr.prototype.sa=function(a){ut(this.g,new Rp)},Zr.prototype.ra=function(){ut(this.g,"b")},Yo.prototype.createWebChannel=Yo.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,D0=function(){return new Yo},O0=function(){return Fo()},N0=vr,Wh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jo.NO_ERROR=0,jo.TIMEOUT=8,jo.HTTP_ERROR=6,$a=jo,$f.COMPLETE="complete",k0=$f,bf.EventType=Qi,Qi.OPEN="a",Qi.CLOSE="b",Qi.ERROR="c",Qi.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,Cs=bf,P0=rs,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,R0=Ie}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});const Cg="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let Wi="10.12.1";/**
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
 */const Br=new au("@firebase/firestore");function gs(){return Br.logLevel}function H(t,...e){if(Br.logLevel<=Y.DEBUG){const n=e.map(hf);Br.debug(`Firestore (${Wi}): ${t}`,...n)}}function zr(t,...e){if(Br.logLevel<=Y.ERROR){const n=e.map(hf);Br.error(`Firestore (${Wi}): ${t}`,...n)}}function Ol(t,...e){if(Br.logLevel<=Y.WARN){const n=e.map(hf);Br.warn(`Firestore (${Wi}): ${t}`,...n)}}function hf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+t;throw zr(e),new Error(e)}function Be(t,e){t||Z()}function ge(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class x0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class $R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HR{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new x0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new nt(e)}}class WR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new GR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function QR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class L0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=QR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Li(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Fe(0,0))}static max(){return new ye(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class co{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends co{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const XR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends co{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return XR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ae.fromString(e))}static fromName(e){return new Q(Ae.fromString(e).popFirst(5))}static empty(){return new Q(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ae(e.slice()))}}function YR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ye.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new ur(i,Q.empty(),e)}function JR(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(ye.min(),Q.empty(),-1)}static max(){return new ur(ye.max(),Q.empty(),-1)}}function ZR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const eP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function M0(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==eP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class V0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}V0.oe=-1;function df(t){return t==null}function Dl(t){return t===0&&1/t==-1/0}function rP(t){return typeof t=="number"&&Number.isInteger(t)&&!Dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Rg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class It{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new It(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new It(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new It(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pg(this.data.getIterator())}getIteratorFrom(e){return new Pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ot(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class iP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Cn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iP("Invalid base64 string: "+s):s}}(e);return new Cn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Cn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Cn.EMPTY_BYTE_STRING=new Cn("");const sP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $r(t){if(Be(!!t),typeof t=="string"){let e=0;const n=sP.exec(t);if(Be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ho(t){return typeof t=="string"?Cn.fromBase64String(t):Cn.fromUint8Array(t)}/**
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
 */function ff(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function b0(t){const e=t.mapValue.fields.__previous_value__;return ff(e)?b0(e):e}function xl(t){const e=$r(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class oP{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Ll{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ll("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ll&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ff(t)?4:aP(t)?9007199254740991:10:Z()}function sn(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xl(t).isEqual(xl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=$r(i.timestampValue),l=$r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ho(i.bytesValue).isEqual(ho(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ke(i.geoPointValue.latitude)===Ke(s.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ke(i.integerValue)===Ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ke(i.doubleValue),l=Ke(s.doubleValue);return o===l?Dl(o)===Dl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Li(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Rg(o)!==Rg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!sn(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function fo(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function Vi(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ke(s.integerValue||s.doubleValue),u=Ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return kg(t.timestampValue,e.timestampValue);case 4:return kg(xl(t),xl(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ho(s),u=ho(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ce(l[h],u[h]);if(f!==0)return f}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ce(Ke(s.latitude),Ke(o.latitude));return l!==0?l:ce(Ke(s.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let h=0;h<l.length&&h<u.length;++h){const f=Vi(l[h],u[h]);if(f)return f}return ce(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ea.mapValue&&o===Ea.mapValue)return 0;if(s===Ea.mapValue)return 1;if(o===Ea.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=ce(u[m],f[m]);if(_!==0)return _;const R=Vi(l[u[m]],h[f[m]]);if(R!==0)return R}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z()}}function kg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=$r(t),r=$r(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Ui(t){return Kh(t)}function Kh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ho(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Kh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Kh(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Gh(t){return!!t&&"integerValue"in t}function pf(t){return!!t&&"arrayValue"in t}function Ha(t){return!!t&&"mapValue"in t}function bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ha(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bs(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=bs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ha(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ha(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Oo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht(bs(this.value))}}function F0(t){const e=[];return Oo(t.fields,(n,r)=>{const i=new Ge([n]);if(Ha(r)){const s=F0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
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
 */class $t{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new $t(e,0,ye.min(),ye.min(),ye.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new $t(e,1,n,ye.min(),r,i,0)}static newNoDocument(e,n){return new $t(e,2,n,ye.min(),ye.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,ye.min(),ye.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ml{constructor(e,n){this.position=e,this.inclusive=n}}function Ng(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Vi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Og(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vl{constructor(e,n="asc"){this.field=e,this.dir=n}}function lP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class j0{}class Ue extends j0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cP(e,n,r):n==="array-contains"?new fP(e,r):n==="in"?new pP(e,r):n==="not-in"?new mP(e,r):n==="array-contains-any"?new gP(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hP(e,r):new dP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vi(n,this.value)):n!==null&&Mi(this.value)===Mi(n)&&this.matchesComparison(Vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends j0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cr(e,n)}matches(e){return B0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function B0(t){return t.op==="and"}function z0(t){return uP(t)&&B0(t)}function uP(t){for(const e of t.filters)if(e instanceof cr)return!1;return!0}function qh(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Ui(t.value);if(z0(t))return t.filters.map(e=>qh(e)).join(",");{const e=t.filters.map(n=>qh(n)).join(",");return`${t.op}(${e})`}}function $0(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)}(t,e):t instanceof cr?function(r,i){return i instanceof cr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&$0(o,i.filters[l]),!0):!1}(t,e):void Z()}function H0(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Ui(n.value)}`}(t):t instanceof cr?function(n){return n.op.toString()+" {"+n.getFilters().map(H0).join(" ,")+"}"}(t):"Filter"}class cP extends Ue{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class hP extends Ue{constructor(e,n){super(e,"in",n),this.keys=W0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dP extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=W0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function W0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class fP extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pf(n)&&fo(n.arrayValue,this.value)}}class pP extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fo(this.value.arrayValue,n)}}class mP extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fo(this.value.arrayValue,n)}}class gP extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fo(this.value.arrayValue,r))}}/**
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
 */class vP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Dg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vP(t,e,n,r,i,s,o)}function mf(t){const e=ge(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),df(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.ue=n}return e.ue}function gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Og(t.startAt,e.startAt)&&Og(t.endAt,e.endAt)}/**
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
 */class mu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yP(t,e,n,r,i,s,o,l){return new mu(t,e,n,r,i,s,o,l)}function _P(t){return new mu(t)}function xg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function EP(t){return t.collectionGroup!==null}function Fs(t){const e=ge(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Vl(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new Vl(Ge.keyField(),r))}return e.ce}function Dr(t){const e=ge(t);return e.le||(e.le=wP(e,Fs(t))),e.le}function wP(t,e){if(t.limitType==="F")return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vl(i.field,s)});const n=t.endAt?new Ml(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ml(t.startAt.position,t.startAt.inclusive):null;return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qh(t,e,n){return new mu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function K0(t,e){return gf(Dr(t),Dr(e))&&t.limitType===e.limitType}function G0(t){return`${mf(Dr(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>H0(i)).join(", ")}]`),df(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ui(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ui(i)).join(",")),`Target(${r})`}(Dr(t))}; limitType=${t.limitType})`}function vf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Fs(r),i)||r.endAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Fs(r),i))}(t,e)}function IP(t){return(e,n)=>{let r=!1;for(const i of Fs(t)){const s=TP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TP(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Vi(u,h):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Oo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return U0(this.inner)}size(){return this.innerSize}}/**
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
 */const AP=new It(Q.comparator);function Ul(){return AP}const q0=new It(Q.comparator);function wa(...t){let e=q0;for(const n of t)e=e.insert(n.key,n);return e}function Q0(t){let e=q0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return js()}function X0(){return js()}function js(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const SP=new It(Q.comparator),CP=new ot(Q.comparator);function it(...t){let e=CP;for(const n of t)e=e.add(n);return e}const RP=new ot(ce);function PP(){return RP}/**
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
 */function Y0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dl(e)?"-0":e}}function J0(t){return{integerValue:""+t}}function kP(t,e){return rP(e)?J0(e):Y0(t,e)}/**
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
 */class gu{constructor(){this._=void 0}}function NP(t,e,n){return t instanceof bl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ff(s)&&(s=b0(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof po?eE(t,e):t instanceof mo?tE(t,e):function(i,s){const o=Z0(i,s),l=Lg(o)+Lg(i.Pe);return Gh(o)&&Gh(i.Pe)?J0(l):Y0(i.serializer,l)}(t,e)}function OP(t,e,n){return t instanceof po?eE(t,e):t instanceof mo?tE(t,e):n}function Z0(t,e){return t instanceof Fl?function(r){return Gh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class bl extends gu{}class po extends gu{constructor(e){super(),this.elements=e}}function eE(t,e){const n=nE(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class mo extends gu{constructor(e){super(),this.elements=e}}function tE(t,e){let n=nE(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class Fl extends gu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Lg(t){return Ke(t.integerValue||t.doubleValue)}function nE(t){return pf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof po&&i instanceof po||r instanceof mo&&i instanceof mo?Li(r.elements,i.elements,sn):r instanceof Fl&&i instanceof Fl?sn(r.Pe,i.Pe):r instanceof bl&&i instanceof bl}(t.transform,e.transform)}class xP{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vu{}function rE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sE(t.key,vn.none()):new Do(t.key,t.data,vn.none());{const n=t.data,r=Ht.empty();let i=new ot(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qr(t.key,r,new Wt(i.toArray()),vn.none())}}function LP(t,e,n){t instanceof Do?function(i,s,o){const l=i.value.clone(),u=Vg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(i,s,o){if(!Wa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Vg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(iE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof Do?function(s,o,l,u){if(!Wa(s.precondition,o))return l;const h=s.value.clone(),f=Ug(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(s,o,l,u){if(!Wa(s.precondition,o))return l;const h=Ug(s.fieldTransforms,u,o),f=o.data;return f.setAll(iE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Wa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function MP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Z0(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Li(r,i,(s,o)=>DP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Do extends vu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qr extends vu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vg(t,e,n){const r=new Map;Be(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,OP(o,l,n[i]))}return r}function Ug(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,NP(s,o,e))}return r}class sE extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VP extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&LP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=X0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=rE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),it())}isEqual(e){return this.batchId===e.batchId&&Li(this.mutations,e.mutations,(n,r)=>Mg(n,r))&&Li(this.baseMutations,e.baseMutations,(n,r)=>Mg(n,r))}}class yf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Be(e.mutations.length===r.length);let i=function(){return SP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yf(e,n,r,i)}}/**
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
 */class bP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ke,te;function FP(t){switch(t){default:return Z();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function jP(t){if(t===void 0)return zr("GRPC error has no .code"),j.UNKNOWN;switch(t){case ke.OK:return j.OK;case ke.CANCELLED:return j.CANCELLED;case ke.UNKNOWN:return j.UNKNOWN;case ke.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case ke.INTERNAL:return j.INTERNAL;case ke.UNAVAILABLE:return j.UNAVAILABLE;case ke.UNAUTHENTICATED:return j.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case ke.NOT_FOUND:return j.NOT_FOUND;case ke.ALREADY_EXISTS:return j.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return j.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case ke.ABORTED:return j.ABORTED;case ke.OUT_OF_RANGE:return j.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return j.UNIMPLEMENTED;case ke.DATA_LOSS:return j.DATA_LOSS;default:return Z()}}(te=ke||(ke={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new C0([4294967295,4294967295],0);class BP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $P(t,e){return Xh(t,e.toTimestamp())}function Ci(t){return Be(!!t),ye.fromTimestamp(function(n){const r=$r(n);return new Fe(r.seconds,r.nanos)}(t))}function oE(t,e){return Yh(t,e).canonicalString()}function Yh(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HP(t){const e=Ae.fromString(t);return Be(JP(e)),e}function Jh(t,e){return oE(t.databaseId,e.path)}function WP(t){const e=HP(t);return e.length===4?Ae.emptyPath():GP(e)}function KP(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function GP(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bg(t,e,n){return{name:Jh(t,e),fields:n.value.mapValue.fields}}function qP(t,e){let n;if(e instanceof Do)n={update:bg(t,e.key,e.value)};else if(e instanceof sE)n={delete:Jh(t,e.key)};else if(e instanceof Qr)n={update:bg(t,e.key,e.data),updateMask:YP(e.fieldMask)};else{if(!(e instanceof VP))return Z();n={verify:Jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof bl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$P(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function QP(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ci(i.updateTime):Ci(s);return o.isEqual(ye.min())&&(o=Ci(s)),new xP(o,i.transformResults||[])}(n,e))):[]}function XP(t){let e=WP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Be(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const _=aE(m);return _ instanceof cr&&z0(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(_=>function(C){return new Vl(ni(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,df(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(m){const _=!!m.before,R=m.values||[];return new Ml(R,_)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const _=!m.before,R=m.values||[];return new Ml(R,_)}(n.endAt)),yP(e,i,o,s,l,"F",u,h)}function aE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ni(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ni(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ni(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ni(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cr.create(n.compositeFilter.filters.map(r=>aE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function ni(t){return Ge.fromServerFormat(t.fieldPath)}function YP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ZP{constructor(e){this.ct=e}}function ek(t){const e=XP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qh(e,e.limit,"L"):e}/**
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
 */class tk{constructor(){this._n=new nk}addToCollectionParentIndex(e,n){return this._n.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(ur.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class nk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ot(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ot(Ae.comparator)).toArray()}}/**
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
 */class bi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new bi(0)}static Ln(){return new bi(-1)}}/**
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
 */class rk{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ik{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class sk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,Wt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,it()).next(()=>r))}getLocalViewOfDocuments(e,n,r=it()){const i=Pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,it()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ul();const o=js(),l=function(){return js()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Qr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Bs(f.mutation,h,f.mutation.getFieldMask(),Fe.now())):o.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new ik(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=js();let i=new It((o,l)=>o-l),s=it();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Wt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||it()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=X0();f.forEach(_=>{if(!s.has(_)){const R=rE(n.get(_),r.get(_));R!==null&&m.set(_,R),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):EP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Pr());let l=-1,u=s;return o.next(h=>U.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,it())).next(f=>({batchId:l,changes:Q0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=wa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=wa();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const h=function(m,_){return new mu(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,$t.newInvalidDocument(f)))});let l=wa();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Bs(f.mutation,h,Wt.empty(),Fe.now()),vf(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class ok{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return U.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ci(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:ek(i.bundledQuery),readTime:Ci(i.readTime)}}(n)),U.resolve()}}/**
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
 */class ak{constructor(){this.overlays=new It(Q.comparator),this.hr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Pr(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new It((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Pr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Pr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bP(n,r));let s=this.hr.get(n);s===void 0&&(s=it(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class _f{constructor(){this.Pr=new ot(Me.Ir),this.Tr=new ot(Me.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Me(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Q(new Ae([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Q(new Ae([])),r=new Me(n,e),i=new Me(n,e+1);let s=it();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Q.comparator(e.key,n.key)||ce(e.pr,n.pr)}static Er(e,n){return ce(e.pr,n.pr)||Q.comparator(e.key,n.key)}}/**
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
 */class lk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ot(Me.Ir)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(ce);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),U.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Me(new Q(s),0);let l=new ot(ce);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.pr)),!0)},o),U.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Be(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return U.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Me(n,0),i=this.wr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class uk{constructor(e){this.vr=e,this.docs=function(){return new It(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let r=Ul();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$t.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ul();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ZR(JR(f),r)<=0||(i.has(f.key)||vf(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Fr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ck(this)}getSize(e){return U.resolve(this.size)}}class ck extends rk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class hk{constructor(e){this.persistence=e,this.Mr=new Ki(n=>mf(n),gf),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Or=0,this.Nr=new _f,this.targetCount=0,this.Lr=bi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),U.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.qn(n),U.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Nr.containsKey(n))}}/**
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
 */class dk{constructor(e,n){this.Br={},this.overlays={},this.kr=new V0(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new hk(this),this.indexManager=new tk,this.remoteDocumentCache=function(i){return new uk(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ZP(n),this.$r=new ok(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ak,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new lk(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new fk(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return U.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class fk extends tP{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.zr=new _f,this.jr=null}static Hr(e){return new Ef(e)}get Jr(){if(this.jr)return this.jr;throw Z()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),U.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Jr,r=>{const i=Q.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ye.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return U.or([()=>U.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class wf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=it(),i=it();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wf(e,n.fromCache,r,i)}}/**
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
 */class pk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mk{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return pT()?8:nP(de())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pk;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(gs()<=Y.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),U.resolve()):(gs()<=Y.DEBUG&&H("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(gs()<=Y.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(n))):U.resolve())}ji(e,n){if(xg(n))return U.resolve(null);let r=Dr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qh(n,null,"F"),r=Dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=it(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Zi(n,l);return this.Xi(n,h,o,u.readTime)?this.ji(e,Qh(n,null,"F")):this.es(e,h,n,u)}))})))}Hi(e,n,r,i){return xg(n)||i.isEqual(ye.min())?U.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?U.resolve(null):(gs()<=Y.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vs(n)),this.es(e,o,n,YR(i,-1)).next(l=>l))})}Zi(e,n){let r=new ot(IP(e));return n.forEach((i,s)=>{vf(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return gs()<=Y.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",vs(n)),this.zi.getDocumentsMatchingQuery(e,n,ur.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class gk{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new It(ce),this.rs=new Ki(s=>mf(s),gf),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function vk(t,e,n,r){return new gk(t,e,n,r)}async function lE(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=it();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:o,addedBatchIds:l}))})})}function yk(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,_=m.keys();let R=U.resolve();return _.forEach(C=>{R=R.next(()=>f.getEntry(u,C)).next(k=>{const D=h.docVersions.get(C);Be(D!==null),k.version.compareTo(D)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=it();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _k(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Ek(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Fg{constructor(){this.activeTargetIds=PP()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wk{constructor(){this.no=new Fg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ik{io(e){}shutdown(){}}/**
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
 */class jg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ia=null;function Lc(){return Ia===null?Ia=function(){return 268435456+Math.round(2147483648*Math.random())}():Ia++,"0x"+Ia.toString(16)}/**
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
 */const Tk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ak{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const tt="WebChannelConnection";class Sk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=Lc(),u=this.vo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,o),this.Mo(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ol("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=Tk[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Lc();return new Promise((o,l)=>{const u=new R0;u.setWithCredentials(!0),u.listenOnce(k0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $a.NO_ERROR:const f=u.getResponseJson();H(tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case $a.TIMEOUT:H(tt,`RPC '${e}' ${s} timed out`),l(new G(j.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const m=u.getStatus();if(H(tt,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const C=function(D){const I=D.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(I)>=0?I:j.UNKNOWN}(R.status);l(new G(C,R.message))}else l(new G(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(j.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(tt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Oo(e,n,r){const i=Lc(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=D0(),l=O0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new P0({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let _=!1,R=!1;const C=new Ak({lo:D=>{R?H(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(_||(H(tt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),H(tt,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},ho:()=>m.close()}),k=(D,I,v)=>{D.listen(I,E=>{try{v(E)}catch(O){setTimeout(()=>{throw O},0)}})};return k(m,Cs.EventType.OPEN,()=>{R||(H(tt,`RPC '${e}' stream ${i} transport opened.`),C.mo())}),k(m,Cs.EventType.CLOSE,()=>{R||(R=!0,H(tt,`RPC '${e}' stream ${i} transport closed`),C.po())}),k(m,Cs.EventType.ERROR,D=>{R||(R=!0,Ol(tt,`RPC '${e}' stream ${i} transport errored:`,D),C.po(new G(j.UNAVAILABLE,"The operation could not be completed")))}),k(m,Cs.EventType.MESSAGE,D=>{var I;if(!R){const v=D.data[0];Be(!!v);const E=v,O=E.error||((I=E[0])===null||I===void 0?void 0:I.error);if(O){H(tt,`RPC '${e}' stream ${i} received error:`,O);const V=O.status;let F=function(y){const T=ke[y];if(T!==void 0)return jP(T)}(V),w=O.message;F===void 0&&(F=j.INTERNAL,w="Unknown error status: "+V+" with message "+O.message),R=!0,C.po(new G(F,w)),m.close()}else H(tt,`RPC '${e}' stream ${i} received:`,v),C.yo(v)}}),k(l,N0.STAT_EVENT,D=>{D.stat===Wh.PROXY?H(tt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Wh.NOPROXY&&H(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function Mc(){return typeof document<"u"?document:null}/**
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
 */function yu(t){return new BP(t,!0)}/**
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
 */class uE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Ck{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new uE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(zr(n.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new G(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rk extends Ck{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=QP(e.writeResults,e.commitTime),r=Ci(e.commitTime);return this.listener.A_(r,n)}return Be(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=KP(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qP(this.serializer,r))};this.i_(n)}}/**
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
 */class Pk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Yh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(j.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Yh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(j.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class kk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(zr(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Nk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Lo(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ge(u);h.M_.add(4),await xo(h),h.N_.set("Unknown"),h.M_.delete(4),await _u(h)}(this))})}),this.N_=new kk(r,i)}}async function _u(t){if(Lo(t))for(const e of t.x_)await e(!0)}async function xo(t){for(const e of t.x_)await e(!1)}function Lo(t){return ge(t).M_.size===0}async function cE(t,e,n){if(!pu(e))throw e;t.M_.add(1),await xo(t),t.N_.set("Offline"),n||(n=()=>_k(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await _u(t)})}function hE(t,e){return e().catch(n=>cE(t,n,e))}async function Eu(t){const e=ge(t),n=hr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Ok(e);)try{const i=await Ek(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,Dk(e,i)}catch(i){await cE(e,i)}dE(e)&&fE(e)}function Ok(t){return Lo(t)&&t.v_.length<10}function Dk(t,e){t.v_.push(e);const n=hr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function dE(t){return Lo(t)&&!hr(t).Zo()&&t.v_.length>0}function fE(t){hr(t).start()}async function xk(t){hr(t).V_()}async function Lk(t){const e=hr(t);for(const n of t.v_)e.d_(n.mutations)}async function Mk(t,e,n){const r=t.v_.shift(),i=yf.from(r,e,n);await hE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Eu(t)}async function Vk(t,e){e&&hr(t).E_&&await async function(r,i){if(function(o){return FP(o)&&o!==j.ABORTED}(i.code)){const s=r.v_.shift();hr(r).t_(),await hE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Eu(r)}}(t,e),dE(t)&&fE(t)}async function Bg(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Lo(n);n.M_.add(3),await xo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await _u(n)}async function Uk(t,e){const n=ge(t);e?(n.M_.delete(2),await _u(n)):e||(n.M_.add(2),await xo(n),n.N_.set("Unknown"))}function hr(t){return t.k_||(t.k_=function(n,r,i){const s=ge(n);return s.f_(),new Rk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:xk.bind(null,t),Ao:Vk.bind(null,t),R_:Lk.bind(null,t),A_:Mk.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Eu(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class If{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new If(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pE(t,e){if(zr("AsyncQueue",`${e}: ${t}`),pu(t))return new G(j.UNAVAILABLE,`${e}: ${t}`);throw t}class bk{constructor(){this.queries=new Ki(e=>G0(e),K0),this.onlineState="Unknown",this.z_=new Set}}function Fk(t){t.z_.forEach(e=>{e.next()})}var zg,$g;($g=zg||(zg={})).J_="default",$g.Cache="cache";class jk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ki(l=>G0(l),K0),this.Da=new Map,this.Ca=new Set,this.va=new It(Q.comparator),this.Fa=new Map,this.Ma=new _f,this.xa={},this.Oa=new Map,this.Na=bi.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Bk(t,e,n){const r=Wk(t);try{const i=await function(o,l){const u=ge(o),h=Fe.now(),f=l.reduce((R,C)=>R.add(C.key),it());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Ul(),k=it();return u.os.getEntries(R,f).next(D=>{C=D,C.forEach((I,v)=>{v.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,C)).next(D=>{m=D;const I=[];for(const v of l){const E=MP(v,m.get(v.key).overlayedDocument);E!=null&&I.push(new Qr(v.key,E,F0(E.value.mapValue),vn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,I,l)}).next(D=>{_=D;const I=D.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(R,D.batchId,I)})}).then(()=>({batchId:_.batchId,changes:Q0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.xa[o.currentUser.toKey()];h||(h=new It(ce)),h=h.insert(l,u),o.xa[o.currentUser.toKey()]=h}(r,i.batchId,n),await wu(r,i.changes),await Eu(r.remoteStore)}catch(i){const s=pE(i,"Failed to persist write");n.reject(s)}}function Hg(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ge(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const _ of m.U_)_.j_(l)&&(h=!0)}),h&&Fk(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zk(t,e){const n=ge(t),r=e.batch.batchId;try{const i=await yk(n.localStore,e);gE(n,r,null),mE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wu(n,i)}catch(i){await M0(i)}}async function $k(t,e,n){const r=ge(t);try{const i=await function(o,l){const u=ge(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(Be(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);gE(r,e,n),mE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wu(r,i)}catch(i){await M0(i)}}function mE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function gE(t,e,n){const r=ge(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}async function wu(t,e,n){const r=ge(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const f=h&&!h.fromCache;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){i.push(h);const f=wf.Ki(u.targetId,h);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,h){const f=ge(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(h,_=>U.forEach(_.qi,R=>f.persistence.referenceDelegate.addReference(m,_.targetId,R)).next(()=>U.forEach(_.Qi,R=>f.persistence.referenceDelegate.removeReference(m,_.targetId,R)))))}catch(m){if(!pu(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const R=f.ns.get(_),C=R.snapshotVersion,k=R.withLastLimboFreeSnapshotVersion(C);f.ns=f.ns.insert(_,k)}}}(r.localStore,s))}async function Hk(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await lE(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new G(j.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wu(n,r.us)}}function Wk(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$k.bind(null,e),e}class Wg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vk(this.persistence,new mk,e.initialUser,this.serializer)}createPersistence(e){return new dk(Ef.Hr,this.serializer)}createSharedClientState(e){return new wk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hk.bind(null,this.syncEngine),await Uk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bk}()}createDatastore(e){const n=yu(e.databaseInfo.databaseId),r=function(s){return new Sk(s)}(e.databaseInfo);return function(s,o,l,u){return new Pk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Nk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Hg(this.syncEngine,n,0),function(){return jg.D()?new jg:new Ik}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new jk(i,s,o,l,u,h);return f&&(m.La=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ge(r);H("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await xo(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class Gk{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=L0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qk(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Bg(e.remoteStore,i)),t._onlineComponents=e}function qk(t){return t.name==="FirebaseError"?t.code===j.FAILED_PRECONDITION||t.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Qk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qk(n))throw n;Ol("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new Wg)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Vc(t,new Wg);return t._offlineComponents}async function Xk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Kg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Kg(t,new Kk))),t._onlineComponents}function Yk(t){return Xk(t).then(e=>e.syncEngine)}/**
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
 */function vE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Gg=new Map;/**
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
 */function yE(t,e,n){if(!n)throw new G(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jk(t,e,n,r){if(e===!0&&r===!0)throw new G(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qg(t){if(!Q.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qg(t){if(Q.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function _E(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(t);throw new G(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zR;switch(r.type){case"firstParty":return new KR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gg.get(n);r&&(H("ComponentProvider","Removing Datastore"),Gg.delete(n),r.terminate())}(this),Promise.resolve()}}function Zk(t,e,n,r={}){var i;const s=(t=_E(t,Iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ol("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=nt.MOCK_USER;else{l=hT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new G(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(h)}t._authCredentials=new $R(new x0(l,u))}}/**
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
 */class Af{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Af(this.firestore,e,this._query)}}class yn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yn(this.firestore,e,this._key)}}class ir extends Af{constructor(e,n,r){super(e,n,_P(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yn(this.firestore,null,new Q(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function e2(t,e,...n){if(t=je(t),yE("collection","path",e),t instanceof Iu){const r=Ae.fromString(e,...n);return Qg(r),new ir(t,null,r)}{if(!(t instanceof yn||t instanceof ir))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Qg(r),new ir(t.firestore,null,r)}}function t2(t,e,...n){if(t=je(t),arguments.length===1&&(e=L0.newId()),yE("doc","path",e),t instanceof Iu){const r=Ae.fromString(e,...n);return qg(r),new yn(t,null,new Q(r))}{if(!(t instanceof yn||t instanceof ir))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return qg(r),new yn(t.firestore,t instanceof ir?t.converter:null,new Q(r))}}/**
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
 */class n2{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new uE(this,"async_queue_retry"),this.hu=()=>{const n=Mc();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Mc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Or;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!pu(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw zr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=If.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Z()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class EE extends Iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new n2}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wE(this),this._firestoreClient.terminate()}}function r2(t,e){const n=typeof t=="object"?t:O_(),r=typeof t=="string"?t:"(default)",i=ef(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uT("firestore");s&&Zk(i,...s)}return i}function i2(t){return t._firestoreClient||wE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wE(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new oP(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,vE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Gk(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(Cn.fromBase64String(e))}catch(n){throw new G(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new go(Cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class IE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class TE{constructor(e){this._methodName=e}}/**
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
 */class AE{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const s2=/^__.*__$/;class o2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Do(e,this.data,n,this.fieldTransforms)}}function SE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Sf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Sf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return jl(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(SE(this.fu)&&s2.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class a2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yu(e)}Fu(e,n,r,i=!1){return new Sf({fu:e,methodName:n,vu:r,path:Ge.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function l2(t){const e=t._freezeSettings(),n=yu(t._databaseId);return new a2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function u2(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);kE("Data must be an object, but it was:",o,r);const l=RE(r,o);let u,h;if(s.merge)u=new Wt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=c2(e,m,n);if(!o.contains(_))throw new G(j.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);f2(f,_)||f.push(_)}u=new Wt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new o2(new Ht(l),u,h)}function CE(t,e){if(PE(t=je(t)))return kE("Unsupported field value:",e,t),RE(t,e);if(t instanceof TE)return function(r,i){if(!SE(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=CE(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:Xh(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xh(i.serializer,s)}}if(r instanceof AE)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof go)return{bytesValue:zP(i.serializer,r._byteString)};if(r instanceof yn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:oE(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Tf(r)}`)}(t,e)}function RE(t,e){const n={};return U0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oo(t,(r,i)=>{const s=CE(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof AE||t instanceof go||t instanceof yn||t instanceof TE)}function kE(t,e,n){if(!PE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Tf(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function c2(t,e,n){if((e=je(e))instanceof IE)return e._internalPath;if(typeof e=="string")return d2(t,e);throw jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const h2=new RegExp("[~\\*/\\[\\]]");function d2(t,e,n){if(e.search(h2)>=0)throw jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new IE(...e.split("."))._internalPath}catch{throw jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(j.INVALID_ARGUMENT,l+t+u)}function f2(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function p2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function m2(t,e){const n=_E(t.firestore,EE),r=t2(t),i=p2(t.converter,e);return g2(n,[u2(l2(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function g2(t,e){return function(r,i){const s=new Or;return r.asyncQueue.enqueueAndForget(async()=>Bk(await Yk(r),i,s)),s.promise}(i2(t),e)}(function(e,n=!0){(function(i){Wi=i})(Pn),lr(new Tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new EE(new HR(r.getProvider("auth-internal")),new qR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ll(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),tn(Cg,"4.6.3",e),tn(Cg,"4.6.3","esm2017")})();function NE(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=NE(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Wn(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=NE(t))&&(r&&(r+=" "),r+=e);return r}const vo=t=>typeof t=="number"&&!isNaN(t),xr=t=>typeof t=="string",Ct=t=>typeof t=="function",Ka=t=>xr(t)||Ct(t)?t:null,Zh=t=>M.isValidElement(t)||xr(t)||Ct(t)||vo(t);function v2(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Tu(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:h,done:f,nodeRef:m,isIn:_,playToast:R}=o;const C=r?`${e}--${u}`:e,k=r?`${n}--${u}`:n,D=M.useRef(0);return M.useLayoutEffect(()=>{const I=m.current,v=C.split(" "),E=O=>{O.target===m.current&&(R(),I.removeEventListener("animationend",E),I.removeEventListener("animationcancel",E),D.current===0&&O.type!=="animationcancel"&&I.classList.remove(...v))};I.classList.add(...v),I.addEventListener("animationend",E),I.addEventListener("animationcancel",E)},[]),M.useEffect(()=>{const I=m.current,v=()=>{I.removeEventListener("animationend",v),i?v2(I,f,s):f()};_||(h?v():(D.current=1,I.className+=` ${k}`,I.addEventListener("animationend",v)))},[_]),oe.createElement(oe.Fragment,null,l)}}function Yg(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const dt=new Map;let yo=[];const ed=new Set,y2=t=>ed.forEach(e=>e(t)),OE=()=>dt.size>0;function DE(t,e){var n;if(e)return!((n=dt.get(e))==null||!n.isToastActive(t));let r=!1;return dt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function xE(t,e){Zh(t)&&(OE()||yo.push({content:t,options:e}),dt.forEach(n=>{n.buildToast(t,e)}))}function Jg(t,e){dt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function _2(t){const{subscribe:e,getSnapshot:n,setProps:r}=M.useRef(function(s){const o=s.containerId||1;return{subscribe(l){const u=function(f,m,_){let R=1,C=0,k=[],D=[],I=[],v=m;const E=new Map,O=new Set,V=()=>{I=Array.from(E.values()),O.forEach(p=>p())},F=p=>{D=p==null?[]:D.filter(y=>y!==p),V()},w=p=>{const{toastId:y,onOpen:T,updateId:S,children:P}=p.props,A=S==null;p.staleId&&E.delete(p.staleId),E.set(y,p),D=[...D,p.props.toastId].filter(Se=>Se!==p.staleId),V(),_(Yg(p,A?"added":"updated")),A&&Ct(T)&&T(M.isValidElement(P)&&P.props)};return{id:f,props:v,observe:p=>(O.add(p),()=>O.delete(p)),toggle:(p,y)=>{E.forEach(T=>{y!=null&&y!==T.props.toastId||Ct(T.toggle)&&T.toggle(p)})},removeToast:F,toasts:E,clearQueue:()=>{C-=k.length,k=[]},buildToast:(p,y)=>{if((X=>{let{containerId:ee,toastId:Ce,updateId:Pe}=X;const ze=ee?ee!==f:f!==1,lt=E.has(Ce)&&Pe==null;return ze||lt})(y))return;const{toastId:T,updateId:S,data:P,staleId:A,delay:Se}=y,gt=()=>{F(T)},Qt=S==null;Qt&&C++;const De={...v,style:v.toastStyle,key:R++,...Object.fromEntries(Object.entries(y).filter(X=>{let[ee,Ce]=X;return Ce!=null})),toastId:T,updateId:S,data:P,closeToast:gt,isIn:!1,className:Ka(y.className||v.toastClassName),bodyClassName:Ka(y.bodyClassName||v.bodyClassName),progressClassName:Ka(y.progressClassName||v.progressClassName),autoClose:!y.isLoading&&(z=y.autoClose,W=v.autoClose,z===!1||vo(z)&&z>0?z:W),deleteToast(){const X=E.get(T),{onClose:ee,children:Ce}=X.props;Ct(ee)&&ee(M.isValidElement(Ce)&&Ce.props),_(Yg(X,"removed")),E.delete(T),C--,C<0&&(C=0),k.length>0?w(k.shift()):V()}};var z,W;De.closeButton=v.closeButton,y.closeButton===!1||Zh(y.closeButton)?De.closeButton=y.closeButton:y.closeButton===!0&&(De.closeButton=!Zh(v.closeButton)||v.closeButton);let K=p;M.isValidElement(p)&&!xr(p.type)?K=M.cloneElement(p,{closeToast:gt,toastProps:De,data:P}):Ct(p)&&(K=p({closeToast:gt,toastProps:De,data:P}));const se={content:K,props:De,staleId:A};v.limit&&v.limit>0&&C>v.limit&&Qt?k.push(se):vo(Se)?setTimeout(()=>{w(se)},Se):w(se)},setProps(p){v=p},setToggle:(p,y)=>{E.get(p).toggle=y},isToastActive:p=>D.some(y=>y===p),getSnapshot:()=>v.newestOnTop?I.reverse():I}}(o,s,y2);dt.set(o,u);const h=u.observe(l);return yo.forEach(f=>xE(f.content,f.options)),yo=[],()=>{h(),dt.delete(o)}},setProps(l){var u;(u=dt.get(o))==null||u.setProps(l)},getSnapshot(){var l;return(l=dt.get(o))==null?void 0:l.getSnapshot()}}}(t)).current;r(t);const i=M.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(l=>{const{position:u}=l.props;o.has(u)||o.set(u,[]),o.get(u).push(l)}),Array.from(o,l=>s(l[0],l[1]))},isToastActive:DE,count:i==null?void 0:i.length}}function E2(t){const[e,n]=M.useState(!1),[r,i]=M.useState(!1),s=M.useRef(null),o=M.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:h,onClick:f,closeOnClick:m}=t;var _,R;function C(){n(!0)}function k(){n(!1)}function D(E){const O=s.current;o.canDrag&&O&&(o.didMove=!0,e&&k(),o.delta=t.draggableDirection==="x"?E.clientX-o.start:E.clientY-o.start,o.start!==E.clientX&&(o.canCloseOnClick=!1),O.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,O.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function I(){document.removeEventListener("pointermove",D),document.removeEventListener("pointerup",I);const E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}(R=dt.get((_={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||R.setToggle(_.id,_.fn),M.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||k(),window.addEventListener("focus",C),window.addEventListener("blur",k),()=>{window.removeEventListener("focus",C),window.removeEventListener("blur",k)}},[t.pauseOnFocusLoss]);const v={onPointerDown:function(E){if(t.draggable===!0||t.draggable===E.pointerType){o.didMove=!1,document.addEventListener("pointermove",D),document.addEventListener("pointerup",I);const O=s.current;o.canCloseOnClick=!0,o.canDrag=!0,O.style.transition="none",t.draggableDirection==="x"?(o.start=E.clientX,o.removalDistance=O.offsetWidth*(t.draggablePercent/100)):(o.start=E.clientY,o.removalDistance=O.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(E){const{top:O,bottom:V,left:F,right:w}=s.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&t.pauseOnHover&&E.clientX>=F&&E.clientX<=w&&E.clientY>=O&&E.clientY<=V?k():C()}};return l&&u&&(v.onMouseEnter=k,t.stacked||(v.onMouseLeave=C)),m&&(v.onClick=E=>{f&&f(E),o.canCloseOnClick&&h()}),{playToast:C,pauseToast:k,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:v}}function w2(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:h,rtl:f,isIn:m,theme:_}=t;const R=s||u&&h===0,C={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(C.transform=`scaleX(${h})`);const k=Wn("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${_}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),D=Ct(o)?o({rtl:f,type:i,defaultClassName:k}):Wn(k,o),I={[u&&h>=1?"onTransitionEnd":"onAnimationEnd"]:u&&h<1?null:()=>{m&&r()}};return oe.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":R},oe.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${_} Toastify__progress-bar--${i}`}),oe.createElement("div",{role:"progressbar","aria-hidden":R?"true":"false","aria-label":"notification timer",className:D,style:C,...I}))}let I2=1;const LE=()=>""+I2++;function T2(t){return t&&(xr(t.toastId)||vo(t.toastId))?t.toastId:LE()}function zs(t,e){return xE(t,e),e.toastId}function Bl(t,e){return{...e,type:e&&e.type||t,toastId:T2(e)}}function Ta(t){return(e,n)=>zs(e,Bl(t,n))}function ue(t,e){return zs(t,Bl("default",e))}ue.loading=(t,e)=>zs(t,Bl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),ue.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=xr(i)?ue.loading(i,n):ue.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(f,m,_)=>{if(m==null)return void ue.dismiss(r);const R={type:f,...l,...n,data:_},C=xr(m)?{render:m}:m;return r?ue.update(r,{...R,...C}):ue(C.render,{...R,...C}),_},h=Ct(t)?t():t;return h.then(f=>u("success",o,f)).catch(f=>u("error",s,f)),h},ue.success=Ta("success"),ue.info=Ta("info"),ue.error=Ta("error"),ue.warning=Ta("warning"),ue.warn=ue.warning,ue.dark=(t,e)=>zs(t,Bl("default",{theme:"dark",...e})),ue.dismiss=function(t){(function(e){var n;if(OE()){if(e==null||xr(n=e)||vo(n))dt.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=dt.get(e.containerId);r?r.removeToast(e.id):dt.forEach(i=>{i.removeToast(e.id)})}}else yo=yo.filter(r=>e!=null&&r.options.toastId!==e)})(t)},ue.clearWaitingQueue=function(t){t===void 0&&(t={}),dt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},ue.isActive=DE,ue.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=dt.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:LE()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,zs(o,s)}},ue.done=t=>{ue.update(t,{progress:1})},ue.onChange=function(t){return ed.add(t),()=>{ed.delete(t)}},ue.play=t=>Jg(!0,t),ue.pause=t=>Jg(!1,t);const A2=typeof window<"u"?M.useLayoutEffect:M.useEffect,Aa=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return oe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Uc={info:function(t){return oe.createElement(Aa,{...t},oe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return oe.createElement(Aa,{...t},oe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return oe.createElement(Aa,{...t},oe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return oe.createElement(Aa,{...t},oe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return oe.createElement("div",{className:"Toastify__spinner"})}},S2=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=E2(t),{closeButton:o,children:l,autoClose:u,onClick:h,type:f,hideProgressBar:m,closeToast:_,transition:R,position:C,className:k,style:D,bodyClassName:I,bodyStyle:v,progressClassName:E,progressStyle:O,updateId:V,role:F,progress:w,rtl:p,toastId:y,deleteToast:T,isIn:S,isLoading:P,closeOnClick:A,theme:Se}=t,gt=Wn("Toastify__toast",`Toastify__toast-theme--${Se}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":p},{"Toastify__toast--close-on-click":A}),Qt=Ct(k)?k({rtl:p,position:C,type:f,defaultClassName:gt}):Wn(gt,k),De=function(se){let{theme:X,type:ee,isLoading:Ce,icon:Pe}=se,ze=null;const lt={theme:X,type:ee};return Pe===!1||(Ct(Pe)?ze=Pe({...lt,isLoading:Ce}):M.isValidElement(Pe)?ze=M.cloneElement(Pe,lt):Ce?ze=Uc.spinner():(Pu=>Pu in Uc)(ee)&&(ze=Uc[ee](lt))),ze}(t),z=!!w||!u,W={closeToast:_,type:f,theme:Se};let K=null;return o===!1||(K=Ct(o)?o(W):M.isValidElement(o)?M.cloneElement(o,W):function(se){let{closeToast:X,theme:ee,ariaLabel:Ce="close"}=se;return oe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ee}`,type:"button",onClick:Pe=>{Pe.stopPropagation(),X(Pe)},"aria-label":Ce},oe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},oe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(W)),oe.createElement(R,{isIn:S,done:T,position:C,preventExitTransition:n,nodeRef:r,playToast:s},oe.createElement("div",{id:y,onClick:h,"data-in":S,className:Qt,...i,style:D,ref:r},oe.createElement("div",{...S&&{role:F},className:Ct(I)?I({type:f}):Wn("Toastify__toast-body",I),style:v},De!=null&&oe.createElement("div",{className:Wn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},De),oe.createElement("div",null,l)),K,oe.createElement(w2,{...V&&!z?{key:`pb-${V}`}:{},rtl:p,theme:Se,delay:u,isRunning:e,isIn:S,closeToast:_,hide:m,type:f,style:O,className:E,controlledProgress:z,progress:w||0})))},Au=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},C2=Tu(Au("bounce",!0));Tu(Au("slide",!0));Tu(Au("zoom"));Tu(Au("flip"));const R2={position:"top-right",transition:C2,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function P2(t){let e={...R2,...t};const n=t.stacked,[r,i]=M.useState(!0),s=M.useRef(null),{getToastToRender:o,isToastActive:l,count:u}=_2(e),{className:h,style:f,rtl:m,containerId:_}=e;function R(k){const D=Wn("Toastify__toast-container",`Toastify__toast-container--${k}`,{"Toastify__toast-container--rtl":m});return Ct(h)?h({position:k,rtl:m,defaultClassName:D}):Wn(D,Ka(h))}function C(){n&&(i(!0),ue.play())}return A2(()=>{if(n){var k;const D=s.current.querySelectorAll('[data-in="true"]'),I=12,v=(k=e.position)==null?void 0:k.includes("top");let E=0,O=0;Array.from(D).reverse().forEach((V,F)=>{const w=V;w.classList.add("Toastify__toast--stacked"),F>0&&(w.dataset.collapsed=`${r}`),w.dataset.pos||(w.dataset.pos=v?"top":"bot");const p=E*(r?.2:1)+(r?0:I*F);w.style.setProperty("--y",`${v?p:-1*p}px`),w.style.setProperty("--g",`${I}`),w.style.setProperty("--s",""+(1-(r?O:0))),E+=w.offsetHeight,O+=.025})}},[r,u,n]),oe.createElement("div",{ref:s,className:"Toastify",id:_,onMouseEnter:()=>{n&&(i(!1),ue.pause())},onMouseLeave:C},o((k,D)=>{const I=D.length?{...f}:{...f,pointerEvents:"none"};return oe.createElement("div",{className:R(k),style:I,key:`container-${k}`},D.map(v=>{let{content:E,props:O}=v;return oe.createElement(S2,{...O,stacked:n,collapseAll:C,isIn:l(O.toastId,O.containerId),style:O.style,key:`toast-${O.key}`},E)}))}))}const k2={apiKey:"AIzaSyBX1NC8dMATMzF9x_0v50aqR5vvfCMlrPs",authDomain:"netflix-clone-27311.firebaseapp.com",projectId:"netflix-clone-27311",storageBucket:"netflix-clone-27311.appspot.com",messagingSenderId:"424014107299",appId:"1:424014107299:web:effb1cc8c72b1c9a4ce516"},ME=N_(k2),Su=FC(ME),N2=r2(ME),O2=async(t,e,n)=>{try{const i=(await AS(Su,e,n)).user;await m2(e2(N2,"user"),{uid:i.uid,name:t,authProvider:"local",email:e})}catch(r){console.log(r),alert(r),ue.error(r.code.split("/")[1].split("-").join(" "))}},D2=async(t,e)=>{try{await UR(Su,t,e)}catch(n){console.log(n),alert(n),ue.error(n.code.split("/")[1].split("-").join(" "))}},x2=()=>{bR(Su)},L2=()=>{const t=M.useRef();return M.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>=80?t.current.classList.add("nav-dark"):t.current.classList.remove("nav-dark")})},[]),L.jsxs("div",{ref:t,className:"navbar",children:[L.jsxs("div",{className:"navbar-left",children:[L.jsx("img",{src:y_,alt:""}),L.jsxs("ul",{children:[L.jsx("li",{children:"Home"}),L.jsx("li",{children:"TV Shows"}),L.jsx("li",{children:"Movies"}),L.jsx("li",{children:"New & Popular"}),L.jsx("li",{children:"My List"}),L.jsx("li",{children:"Browse by Languages"})]})]}),L.jsxs("div",{className:"navbar-right",children:[L.jsx("img",{src:J1,alt:"",className:"icons"}),L.jsx("p",{children:"Children"}),L.jsx("img",{src:Z1,alt:"",className:"icons"}),L.jsxs("div",{className:"navbar-profile",children:[L.jsx("img",{src:eT,alt:"",className:"profile"}),L.jsx("img",{src:tT,alt:""}),L.jsx("div",{className:"dropdown",children:L.jsx("p",{onClick:()=>{x2()},children:"Sign Out of Netfilx"})})]})]})]})},M2="/Netflix-Clone/assets/hero_banner-DUZNtQhX.jpg",V2="/Netflix-Clone/assets/hero_title-CeCXMd-8.png",U2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO2dQWoUQRSGPxEjgoIb0aWudRMPEE+RrUuvIN5AUYwuvYJXmLlAsk+vJzBmofRCyKZHnCeBEkREEq3qV/Xq/+DfV30UM/13v5kGIYQQQgghhAjKDvAKOAW+AAfAHe9FReQlYL/lK/ACuOG9uEic/kH0z6yBZ8BV70VGwC6QAdj3XmgPoi1lAex6L7gH0QZsgY/AA++FRxdtKRPwHrjtvYHooi1lBJ4D1703El20payAp8AV7w1FF20ph8Ce96Z6EG2/XKE88t5cD6IN2AAfgLvem4wu2lLOUtW/RcfYjFn3XOnNIUOPld4cs+yp0ptztr1UeqskU/RKb5VljFrprdKsolV6qzxHUSq9NZJF65XeGsq3VOnv0SDWYM5arPTWcNYtVXoLkKGFSm+BsgQeUykWLNtaK70FzVRbpbfgGWup9NZJTrwrvXWWI+CJRBO30lvH2QDv0jC+RFNe+BuJZpaTff6TEp1oJJooea0TTfEvw7fANYmmmGRd3lH2FKuwUFawKjhlBeumEmUF6zYpZQXrxj+dT6dagAx6OEtRwRo3oKxgDdBQVrBGwij/OawhR8oKDvNLXKs0K++n1rmxyjLWMoeRG6skU22TRbnxFrytdVYuN56SlzVX5tx4CB5aqMy5mVPwuqUJ/dzMWZlv0jElBW/0xyjlRS+Ah44HqDpyCz6MUplzk0vwKlplzs3/Ch6jVubc/KvgKXplzs1lBX9Plfm+98Jb47JXErveC26Viwg+7rEy5+bTXwR3XZlzo5cpzMROkn1+sj/r9SBCCCGEEEIIQXv8AGMxL6IG0qwhAAAAAElFTkSuQmCC",b2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsUlEQVR4nO2dTYwVRRCAO5AsRuRH2HAQFMJK/DuLnBSX6M0Y4wG9CETZ6E0kIfGEeoAlxkREBSGagAQwGi+KR1CPLgLBg5IVFBA8KFzdhbCfqWxtJGa6Z95u95ue2fqSl5DZ96Zqunq6q6uqG+cMwzAMwzAMwzAMwzAMwzAMwwDuBp4H3gI+A04B54BrwKh+rum1k8AR/e5z8ltrwQ4BZgJPAnuBYaaO3OMj4AlghhnE3/D3ADuAP0iH3HtQZJkh/mv45cBOYITucR04ANw/bQ0BzNbeeIP6uKHGn+umE8CzwGXyQYamZ1zbAW4DdnfYODeB09pTB4DVOmzdCfToR/7dp38b0O/Kb8Y6lPU+MMu1EWCpupBVG/0YsB5YOAWZvcAG4LjeswonW+e+Ag9V9G5G9A1ZnkAHeUP2VJzsLwIPujYAPAJcLXngMWA/cFcX9FkMfFpheBKdV7oW9Pyyxj8LPFqDbqsrLPT+buybACwBLpQ84BfA/Bp1nAMcKtFRhs6lroHeTmjCldd/s8sEYEvJkHSiUd5Riaspi58XXGYA60oWhbtcgxZZoZ6fXeP/zwihN+FplzOypC9Z4WYz7JQMRz4uAXe4XAHeDSh/KLKsVcAm/ayKfG/JO/h42+UIcF9gDBVXc04kOfOBbwpkHAXmRXyThwOR1D6XG8AnHoXHYvr5FDf+BF9HlPN4YD7Y6zJMpkjPKGJ/5GGnjGirV+CgR8ZoVvEizWQV8U/M8AKwubT54bXIi0lf7Gi7yyiH6wu07Y4sa3MFA2yKLFNy076AXf05Zk2gF3EzdlSTLg9BKvPewFywJqas2D3kWCJ5RwON/1Uimd924w2frHK/epRbn0jePPF2iho/lhtaIPNFzzOeTSGvU+/HN/wsTCx7pS7CXgUeTixrUWAYWpJSdpliUrFWxCnXMoAznmddW6dSUgJYxE7XMoBdnmd9o06lfDGTja5lAC93I8bVqVJSQVDEY65lMB6aKOJEnUr95lFqWWK5Pbr6vqLhb6mw60ksU2qRijifUm6ZUpK0LiK1BzRYIHMwsUypMSrir5Ryy5SSoFQRqXvjlQKZfyaWOcvzrCMp5eZqgEKmowF8NT8LWmiA3hyHoLom4UKm4yT8o0ep1S00QL9H7FBKuZNdiA200ACv5LgQe7OOUAT1GMAXitiaUu5kg3GnW2iAMzkG42QPbxESuu1tiwEIh6MXp5JbVTlf/cyGFhlgo0fkz6lkdqKcbIIu4niLDPCdR+SHqWR2opzsQPdlxfqabgDCSfn+FDI7VXCGFq0WsacFBtjnESelODNdDniik2hR0+KmGoDxnLcv3rXN5YJ6Qz5FDzTYAIc9oq5nd94E8LGvYWKPlXTBAJLVC4z9SYbWKQGsCJSnD8c8j4HiTSCXI9cenQv0/uj7mKMAvBN4C44knnO2R7z/54Hn2OFyRbd9hnbEb4mYEx7UNyFqThh4PaC/FOTOdjkjp44EHkDG1HUuUxg/V8I37sv1p1wTAD4IGOFGjkZgvPFD21SbU2ym+VNfsmaiN21xmaDDTmh76g+p89ypDsX4nTBf1nxUwdyArz/Bpex8/qrIQRcVDusYlqqzGnTrD7iaE0jd0wOuyWgZeZXjag52o9RbwwtlvX6i8ZOWvXf7TRAXroxR3XHTlyiquS8QMrmVC43v+Z54kZw6UoUxjcHLzpRFU8xkvQR838H5cUO1brrognfkS277GNN87HtaIt6vvXnBLYf2LdRr/fodkfFTh4f2jelhf83ydiaDnDoSyCHUwcXGLLJiAdwuu0sqjsmpuK69Pso5Fo0EWKaNILvqu8WoHl28ou7nz22S3l7RW5oscu9trZ1kI+aY1+ixZ3LMzVT5RaoXdIKu/2iBpsF4SGOtzheH1U08p4u7if/A4apeG9LvbNXfJD+H1DAMwzAMwzAMwzAMwzAMwzBc/vwL4LImOvpUNA4AAAAASUVORK5CYII=";/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_o.apply(this,arguments)}var Kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kn||(Kn={}));const Zg="popstate";function F2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return td("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zl(i)}return B2(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function VE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function j2(){return Math.random().toString(36).substr(2,8)}function ev(t,e){return{usr:t.state,key:t.key,idx:e}}function td(t,e,n,r){return n===void 0&&(n=null),_o({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gi(e):e,{state:n,key:e&&e.key||r||j2()})}function zl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function B2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Kn.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(_o({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=Kn.Pop;let D=f(),I=D==null?null:D-h;h=D,u&&u({action:l,location:k.location,delta:I})}function _(D,I){l=Kn.Push;let v=td(k.location,D,I);h=f()+1;let E=ev(v,h),O=k.createHref(v);try{o.pushState(E,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(O)}s&&u&&u({action:l,location:k.location,delta:1})}function R(D,I){l=Kn.Replace;let v=td(k.location,D,I);h=f();let E=ev(v,h),O=k.createHref(v);o.replaceState(E,"",O),s&&u&&u({action:l,location:k.location,delta:0})}function C(D){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof D=="string"?D:zl(D);return v=v.replace(/ $/,"%20"),Oe(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let k={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Zg,m),u=D,()=>{i.removeEventListener(Zg,m),u=null}},createHref(D){return e(i,D)},createURL:C,encodeLocation(D){let I=C(D);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:_,replace:R,go(D){return o.go(D)}};return k}var tv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(tv||(tv={}));function z2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gi(e):e,i=Cf(r.pathname||"/",n);if(i==null)return null;let s=UE(t);$2(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let u=tN(i);o=J2(s[l],u)}return o}function UE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=sr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),UE(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:X2(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of bE(s.path))i(s,o,u)}),e}function bE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function $2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Y2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const H2=/^:[\w-]+$/,W2=3,K2=2,G2=1,q2=10,Q2=-2,nv=t=>t==="*";function X2(t,e){let n=t.split("/"),r=n.length;return n.some(nv)&&(r+=Q2),e&&(r+=K2),n.filter(i=>!nv(i)).reduce((i,s)=>i+(H2.test(s)?W2:s===""?G2:q2),r)}function Y2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function J2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],u=o===n.length-1,h=i==="/"?e:e.slice(i.length)||"/",f=Z2({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h);if(!f)return null;Object.assign(r,f.params);let m=l.route;s.push({params:r,pathname:sr([i,f.pathname]),pathnameBase:sN(sr([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=sr([i,f.pathnameBase]))}return s}function Z2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=eN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,m)=>{let{paramName:_,isOptional:R}=f;if(_==="*"){let k=l[m]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const C=l[m];return R&&!C?h[_]=void 0:h[_]=(C||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function eN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),VE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function tN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return VE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function nN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gi(t):t;return{pathname:n?n.startsWith("/")?n:rN(n,e):e,search:oN(r),hash:aN(i)}}function rN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function FE(t,e){let n=iN(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gi(t):(i=_o({},t),Oe(!i.pathname||!i.pathname.includes("?"),bc("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),bc("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),bc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let _=o.split("/");for(;_[0]==="..";)_.shift(),m-=1;i.pathname=_.join("/")}l=m>=0?e[m]:"/"}let u=nN(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const sr=t=>t.join("/").replace(/\/\/+/g,"/"),sN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const BE=["post","put","patch","delete"];new Set(BE);const uN=["get",...BE];new Set(uN);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eo.apply(this,arguments)}const Rf=M.createContext(null),cN=M.createContext(null),Xr=M.createContext(null),Cu=M.createContext(null),gr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),zE=M.createContext(null);function hN(t,e){let{relative:n}=e===void 0?{}:e;Mo()||Oe(!1);let{basename:r,navigator:i}=M.useContext(Xr),{hash:s,pathname:o,search:l}=HE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:sr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Mo(){return M.useContext(Cu)!=null}function Ru(){return Mo()||Oe(!1),M.useContext(Cu).location}function $E(t){M.useContext(Xr).static||M.useLayoutEffect(t)}function Pf(){let{isDataRoute:t}=M.useContext(gr);return t?SN():dN()}function dN(){Mo()||Oe(!1);let t=M.useContext(Rf),{basename:e,future:n,navigator:r}=M.useContext(Xr),{matches:i}=M.useContext(gr),{pathname:s}=Ru(),o=JSON.stringify(FE(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return $E(()=>{l.current=!0}),M.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let m=jE(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:sr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function fN(){let{matches:t}=M.useContext(gr),e=t[t.length-1];return e?e.params:{}}function HE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Xr),{matches:i}=M.useContext(gr),{pathname:s}=Ru(),o=JSON.stringify(FE(i,r.v7_relativeSplatPath));return M.useMemo(()=>jE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function pN(t,e){return mN(t,e)}function mN(t,e,n,r){Mo()||Oe(!1);let{navigator:i}=M.useContext(Xr),{matches:s}=M.useContext(gr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Ru(),f;if(e){var m;let D=typeof e=="string"?Gi(e):e;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||Oe(!1),f=D}else f=h;let _=f.pathname||"/",R=_;if(u!=="/"){let D=u.replace(/^\//,"").split("/");R="/"+_.replace(/^\//,"").split("/").slice(D.length).join("/")}let C=z2(t,{pathname:R}),k=EN(C&&C.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:sr([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:sr([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&k?M.createElement(Cu.Provider,{value:{location:Eo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Kn.Pop}},k):k}function gN(){let t=AN(),e=lN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const vN=M.createElement(gN,null);class yN extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(gr.Provider,{value:this.props.routeContext},M.createElement(zE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _N(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Rf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(gr.Provider,{value:e},r)}function EN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Oe(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:_,errors:R}=n,C=m.route.loader&&_[m.route.id]===void 0&&(!R||R[m.route.id]===void 0);if(m.route.lazy||C){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,m,_)=>{let R,C=!1,k=null,D=null;n&&(R=l&&m.route.id?l[m.route.id]:void 0,k=m.route.errorElement||vN,u&&(h<0&&_===0?(C=!0,D=null):h===_&&(C=!0,D=m.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,_+1)),v=()=>{let E;return R?E=k:C?E=D:m.route.Component?E=M.createElement(m.route.Component,null):m.route.element?E=m.route.element:E=f,M.createElement(_N,{match:m,routeContext:{outlet:f,matches:I,isDataRoute:n!=null},children:E})};return n&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?M.createElement(yN,{location:n.location,revalidation:n.revalidation,component:k,error:R,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var WE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(WE||{}),$l=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($l||{});function wN(t){let e=M.useContext(Rf);return e||Oe(!1),e}function IN(t){let e=M.useContext(cN);return e||Oe(!1),e}function TN(t){let e=M.useContext(gr);return e||Oe(!1),e}function KE(t){let e=TN(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function AN(){var t;let e=M.useContext(zE),n=IN($l.UseRouteError),r=KE($l.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function SN(){let{router:t}=wN(WE.UseNavigateStable),e=KE($l.UseNavigateStable),n=M.useRef(!1);return $E(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Eo({fromRouteId:e},s)))},[t,e])}function Ga(t){Oe(!1)}function CN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kn.Pop,navigator:s,static:o=!1,future:l}=t;Mo()&&Oe(!1);let u=e.replace(/^\/*/,"/"),h=M.useMemo(()=>({basename:u,navigator:s,static:o,future:Eo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Gi(r));let{pathname:f="/",search:m="",hash:_="",state:R=null,key:C="default"}=r,k=M.useMemo(()=>{let D=Cf(f,u);return D==null?null:{location:{pathname:D,search:m,hash:_,state:R,key:C},navigationType:i}},[u,f,m,_,R,C,i]);return k==null?null:M.createElement(Xr.Provider,{value:h},M.createElement(Cu.Provider,{children:n,value:k}))}function RN(t){let{children:e,location:n}=t;return pN(nd(e),n)}new Promise(()=>{});function nd(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,nd(r.props.children,s));return}r.type!==Ga&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rd(){return rd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rd.apply(this,arguments)}function PN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function NN(t,e){return t.button===0&&(!e||e==="_self")&&!kN(t)}const ON=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],DN="6";try{window.__reactRouterVersion=DN}catch{}const xN="startTransition",rv=jw[xN];function LN(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=F2({window:i,v5Compat:!0}));let o=s.current,[l,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=M.useCallback(m=>{h&&rv?rv(()=>u(m)):u(m)},[u,h]);return M.useLayoutEffect(()=>o.listen(f),[o,f]),M.createElement(CN,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const MN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,UN=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:f,unstable_viewTransition:m}=e,_=PN(e,ON),{basename:R}=M.useContext(Xr),C,k=!1;if(typeof h=="string"&&VN.test(h)&&(C=h,MN))try{let E=new URL(window.location.href),O=h.startsWith("//")?new URL(E.protocol+h):new URL(h),V=Cf(O.pathname,R);O.origin===E.origin&&V!=null?h=V+O.search+O.hash:k=!0}catch{}let D=hN(h,{relative:i}),I=bN(h,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:m});function v(E){r&&r(E),E.defaultPrevented||I(E)}return M.createElement("a",rd({},_,{href:C||D,onClick:k||s?r:v,ref:n,target:u}))});var iv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(iv||(iv={}));var sv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sv||(sv={}));function bN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Pf(),h=Ru(),f=HE(t,{relative:o});return M.useCallback(m=>{if(NN(m,n)){m.preventDefault();let _=r!==void 0?r:zl(h)===zl(f);u(t,{replace:_,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[h,u,f,r,i,n,t,s,o,l])}const ys=({title:t,category:e})=>{const[n,r]=M.useState([]),i=M.useRef(),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDg5NDFhODNlZjRkMWEwZDEzMDcxNjVjZWQ2NTI0OCIsInN1YiI6IjY2NjllZDY3NDE5YjI4ZWMxYTFjNzc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E4YnSoNCIwEQP8VIyzU_mGNHk5hu8d8kYvyapeg0S-g"}},o=l=>{l.preventDefault(),i.current.scrollLeft+=l.deltaY};return M.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${e||"now_playing"}?language=en-US&page=1`,s).then(l=>l.json()).then(l=>r(l.results)).catch(l=>console.error(l)),i.current.addEventListener("wheel",o)},[]),L.jsxs("div",{className:"title-cards",children:[L.jsx("h2",{children:t||"Popular on Netflix"}),L.jsx("div",{className:"card-list",ref:i,children:n.map((l,u)=>L.jsxs(UN,{to:`/player/${l.id}`,className:"card",children:[L.jsx("img",{src:"https://image.tmdb.org/t/p/w500"+l.backdrop_path,alt:""}),L.jsx("p",{children:l.original_title})]},u))})]})},FN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQklEQVR4nO3dW4hVVRzH8WVqaEIPWUGWD13oRnSDbhQSkYGB+RCEBWFBl4fKXsqiiw/1UgZRdAGLCqGbWG81EkF0wcpoDOyGpT2oUFN0cSLKbPrGwr+0Z+agM3utPf+91/l94DwNM/P/n9+eWfvstfbaIYiIiIiIiIiIiIiIiIiITAngUOAU4GLgKuAm4E7gQeAx4HngNeBt4BNgM7Ct8hoCfrHXr4y2u/K1+Npe+b6twKfAB8CbwCvAauAh4F7gNmAZsBg4B5gHzOj8YQEcBlxkb/SjwFp7E74F/qBbRoDvgU3AG8CzwF3AFcDxwPTQJsDBwCI7st+xo7ef/Al8BrwE3Agc5RXEHOB+O3rkf38DLwMnTmUYlwA7K0XIeH/ZuDSt6TBuAPb0KEB6iycnM5sK40ob5GRyXmwijHl2Gin1LMsdyJM1C5G9fgBm5wpjdgc/P5T7VwIs9O6kEK/mCuRu704KsT1XIM95d1KQuTkCed+7i4IsyBGILo/kc2uOM6x/MxbU755ODeQE7w4K81ZqIAu8OyjMttRArnZu4FLgc8rxT5xDSgnkDs/qw94aZtjs44+Uof5cCbDKs/Iwfmr48QIu/1+WEsgznpWH3jWdZIsUuuq6lEDWeVYe9l9bHF++oHvuSQkkLsVxEw5c30zg9h7LgdrsiZRA4jomN2Hide4bX+JZTNu9nhLIN56Vh8nXe4YtR2qzD1MCiSv/3IT6dS+2lYpttCUlkDj16CYkqIwvu2iXoZSmfu5qIPsAh7dsfNkd6gKGPSsPGQFnAe/RDnPqNhFX4BURyJjx5TvPvoCjQx3eC+NCs4vEPceX0+oWXnogw06tnV63cP3LasZxdQMpaVA/u0WD+pF1m9BpbzMO6eSKk1DmB8OR2veN6NJJI4ZTjrItOAplXlzcmRLIx56Vh4nXObdll0f2ZzAlkPWelYeJjxO/0R3rUwKJt/u6CQeewv2S7lnT2TunQu+aTu74IodHUgJ5wLPyMH6ceKqAZUArUgK5xbPyMHqh3E+UYWnqpWpPi4CvKcu5KYGc6V19gerfRWXLaySfXbXDqITye8aC+t2mHIEMendRkHU5Alnj3UVBHs4RyArvLgpyc45ALvfuoiALcwQSPyFrW6Z08T08IjkQC+WjDAX1u41ZwrBAlnp3U4BrcwYy3bZ6lXoGs2/1Bxzbh9vA5hAnz07NGsaYa1uutyh0TLzV7sJGwqiEcgzwrnenHbAx7n7daBiVUKYB19i+7DLaV8D1wEFTEkaPcM6zmcUB2/S+nz6zjFjPA/YenN/45smTBcyy9VHxyQcrgRes4M0dPSkYstoHrJeV1lvscVboOrsVYD5wAbAk7mwALAfus608VtsTFeISpA12a/bWymMndox5JEV1jn3PmK/t6PG4ig32s9fa71plv3u51bLEapuftFGMiIiIiIiIiIiIiIiIiEio4z+YVM1nFEiF0QAAAABJRU5ErkJggg==",jN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF80lEQVR4nO2de6gVRRzHp0x7aGX20rKnZQ8LLchSxArtCRVUF4zwUQiZkUrRg9KCNLkZlEViEUloVlREUT7KCiLIIvMWvSy1IssemmlY5jX7xI9+wuncPffs2Z2zO7M7Hzj/3MPuzu987+zMb37z+40xgUAgEAgEAoFAIBAIBAKBQEeA3YFBwATgQeB5YJl+XgUWANOAK4CDI24RsAEwDHgc2Eh8dgIfAlNsigPsBvQwZQS4GHiP9GwDZgN9UrbnPGA5cIgpE8CRwCvYZwtwg7z6GuwRFwBv6D1ejHvhtcClxnOAy4BNNJelQK867eipY9XnVdeeGceIrsA3wFbgdOMpwE3AP2TDWqBf1fMPAMZo7/wr4pqX4xoyuuKiH6of5APAVLLne2As8BDQphOBWvwJHBPXmCVVF0tv6Ws8AbgO95kQ15iDgB0RN1gFHGYcBxgMbMdtFjRi0OWd3GhN7G6WA8De2kaXkdlVtxrt7zhbA2bWueE6YIBxEGA6brNY/mki2t0HuANojTJKLqrHZnFqjEMAvXWgdBUZ6LtW+UaTgLeAv4Gvgf2jDFsR8wEyzkw0jgC04iY/AeN1uUb8kPn641fSXtMf0fl0I8gCXPfMFejoN/2Cm8gyS2eInzTG1AJYn+ChnwIDTU4Al+AvU+sZ92XCG4snehvQJTMlFOAR/GSuqQfwfsqHyPWnmQzhvx7qGw/LQmMc456x8LAdGvDpmYEY3Wo4si4zsxEDb7X44I0a0OnWREFOwB9kNnVjowae04SGyFrY9cBeTRBkKH4g09/hSQzco8HQZiPIDO52WS+zKMj5uM+mVIuzwLwM5uZPqrNUf2DLvkfb5jtjYcU0K+R1NkMCYSQQR2Z0uM+PqQRRQ9/MoeHrZG4OXAkc2sAaVikEGVon4pUFX+jaz83ACODwqF4EbMBtVqcWRA19FPfYpkJJXOFpdbCSLPdkSZstQXp6EPDxgXesCKKinKj7jwLJWZxmr2vUO/rCGMvIgdosTCqIbHD4BLhKHMSq70YCf3Ty0EBt7kmzSWAXPwNzVIh99fuBwFedPDgQzdhEguiPHjVe7NQlbtmB95wukgXiMyyNILLjLmCX3mkEecJyY8rO5lTrdcA1eVtQMF5LLEadraSBZExLJYiKIvl1ATuMsCHI2ZYaU3Z2WMsfBN7N25oC8IEVMSpCo1llHxWVu6wJoqJIsCiQnJNsC7JPip2MZWeVVTEqRBmUQRZrEZnRFEFUlDPU4wzEZ1DTBFFRhoSeksPsqo4oRwBvx29XaRmdiSAqShfgbg8yXfNC4kh7ZiZIhTD9NHsqxEb+z/TMxagSpi9wJ/BRVcPKSLvsHcvyxx+iPaN7RWWbXsDxUqhG93G5nAnbbOZkJoYKcH/TTfKXrakigwkF6efA9tJi7SyxIMqivC13kA2RSf8ZCXJymFl1YEouYlSIMqtjm0rLyupNhXkI0gP4LO9fwgHEOT7FuABwtHqlZWaqcQnJKi2x39FWWd3HGTTTqllZuy77HKcaVwH6S9oW5WGUcR3dOd+qxbiKzCzjExpdlGL2RWRZHtWOrCDvWN24/RvFYA1woPEdDWgN1iKPz0oCpBrnUxzlW+AoU0R0yX6yRxHHdT5W9o6FJv7nUSEiKZL/3t8UDa0wNNmz9Or11nceugBwrofh3ZU+1bqPhZZe8nH6uwjYzxQB3Qs8To/x8ZHWRk7LcRLZg6RH+Mz12OfYAlxtPBbgLB2kXwB+x2+WA8caV9Cq0HIASoueYjZSa5u0aEbuJC35+pIOzr74D/WQMiG35B7tq+FJTwR+pTwscd7Z03ToOQXqAVFI2Pki4xN6rsVjBRNmtR7W5dbrKUHMfLbniTor9MQ5f4WoRvbx6qD/Mf4M1k9JaNkUHa2Xda+D4drtetrmuF21vUqHFjCWsuGv51Rpbq0GwFoKs9Rh2VkcrvV15+vrrd3yCZpLdWljlKTW5W2zd+i5Hsdp3ZTR2pvu0xncPK1Mt+uzUP/+gEYWx6vDOiDqmLlAIBAIBAKBQCBgfOZflDTp+yKPSRgAAAAASUVORK5CYII=",BN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHb0lEQVR4nO2dS48VRRSAiwUPAWME3UniIA+NoDAqD1lokAGjBGIAhWBCiKD+AQO6kLjARMAoCaiJKzEoD41oeAwSN4AxIMpO5CVEF6I4CsigPMJnTu4Z01SqZ6b7Vvft29Vfcjcw95zTdW53dZ1z6pQxFRUVFRUVFRUVTQowGngBeBf4CjgB/AlcoXhcUdtOqK3vqO2jTDMD3Ae8CfxCefgZWCPXZpoBoA/wJPA15Wc/8IRcsykiwAPAAcLjG6DVFAVgAPA2cK0boy8AO4BlwEydU24F+pqCAfRV20arrWLzTuDvbq5Prv0toH+jjR8BfB9j5HVgOzCn4Yb6++HN1R+WXJuL74C7GmXgZKAjxhGbgDGmpABjgS0xTvkDmJi3QdOBiw5jfgQeNYEATAWOOsZBxqYtLyMmxDhjAzDYBAZwE/C+Yzw6gYfzmDM6HI+ol0zgAMsdc8tZYHiWk5o9gYsBSzJR2IQASx1O+TaTlxp9tbUJ/s6w0ddkmzUmg0Wfvc74yKuSEkFtPo0iYzfeZzjkgONtapAXBSUEGAwcs8Zsvy/hEpuymepFeIkBHnHMJzN8CLYDhZu8WBwAwFZr7PbWK/B+S6B4/F4TCMAw4BONxcnnM4lxJUxB2HdJ+giG5jOibDdhOaPD8biW5NWwBHIkMBllVT1G2cmluSYQqN0ZcWxJIOcZ67un0xok4ecoF8oQte0ter1xnE8YWrFDTSN6bUhE0IuWkB0mIOjeIecSymq3vv98GoMkuR9lmQkIahN4HJsTynrZ+v66NAZJxUWUmabBAIOAx4HXgS90gdpVvdJVLXJE/0/+ZkbaBaw+skWeK99xR0JZsywZe9IYdMoS0pAyGGqRghma9PqH5Mh3PlYZfVK8aUki6rx+Nid1hsq527LppEkhRH4JUYaanAGeAg7jD4lWz27Addxm2XE2jZDLlpB+mVjr1j3cMRH6ZBfQkuP19Lf0/5tGyA1kYqlb79P6eIhDgnbrgPkSQQWGaKWIfIbqvy0A1gPHu5FzDpiX43XVN56NcAjwWszgXdWQduLiAWAS8KHKcLEim6tpcocAa2MGbLuP0hpgpCOM0cVaP1dREofE3BkXgUUZ6FqsBQi53ilN4xCdM2x+BcZlqFPmmTMOvXODdoi+TZ13OGNkFvocj7Azjom+JWSHtDseU+Oy0BWjv9Xx+NoZpEN00WezyLeeXtjxnMOOWSE6RAqTo+zyrSOBLVJAHeWw730fhXaIxpWiXG1Y1bj5P5BolzlND8khEqSL8oFP+WkANmZZd1ZYh2jNkh21zbd834EURls2XQIGmgAcIvmMKMdMAaAW5j+Z1WOryA6RxFF92bOM0G3bUVaG4BDJ5kVZYAoCsNCy7fMQHCJp1yi5LQR7uVCMcsQE4JCGZyLjAG6vO7PXhA5pWCYyl8xevOzKIUkJ1SHVI4tiT+p+dhb52ykW5YcQ7pAiv/Y+a9m2LcSF4XpTEID3QlwY2pHe46Y4oZNTlm1tIThkkAbuokzyJT8twBTLps4ggosqW+p0o2zwKT8NEm63bNroWX7TJahG+tSRohjaTlC1BeMQlX/IUtHuW0cCW3Y6irLDSeGq/Nm2DmCxbz297E9C1nthCu8Q1SFV6PZEOj4LXTH6H3S8YGSy07hZHNKixWlRzuRUKDcK+M3S/RdwZ7AOUT3zbF3UnNKa8Z1hO0OYk6HO5nCI6lrhGJxLUsSW0ZxhP6aEV33ralqH9LAdoT1JO4seXm2/jNFRbUdIcKega4SNWqrTJ2E4ZIou+uL6Cmd6Z0RsuYH8BaSEWm9ce6KP8pNWhyzUHLhsY+unn6EaQl+ogUI7NmVP4HNyvK66HdLITZ8t3ex28sH2rN6mstz02fDMHrUN93ZRdj0cakQDBF/bouXRUJTGAdN1HnC9HfVEp84/+TQ27l3jgBNlaa0xUJ2zUrJ5kmLVnlaX9dOh/7ZN/6bNZwi9Dru9tNYIuvmMT3w1n5FjfjLf6hUCwG5rLJemjfVEkfMzBmRicYmh1sCss+4GZipMzlwKssWfL7y1+FNhcgBWkE0wM0wxvFGPsDGWMGl5OtabtSWHWptdu01sfeOnp5Gl6sgZOsCnXhspq1A5Gs6majXeA8A0x7hN97VSlqPhohwN8TSd3gLc7OjVtc+nglZH+LrqAR+D9ueKcs37TjE9p89muVclJQB4xTFOq7MKIdu1VNdTNQUuKdSiG/Zb1cHMUhfS/sIRlhcDgo9zUbszbGf8nnmzTeChmGNIpXn9LSbMCXyjYzwkXDI5LyPaYs4ylI6hj5lAoDYOrs6n8oOdlrcxE/WcPhdbm+bM8fQrcHvRF31MTTCNQFv0yTl9Lq5rXlyCazeZckRt52tsKu5w4oN5Nmju7u1rTTd9cdHHW7smaiR7do82QC7MHvUutHpliNo4W23eHdPJtAu59tWFuh5Z+DjiXiGwTx5hpqjoZpy9lJ+9vrvOZYqG7ldJQobycFryGU1/VryeMr1UG+Tv0VfFrmqRonFZbTumtorNS1KnXSsqKioqKioqKkzj+Q9SwHTQdqZCRAAAAABJRU5ErkJggg==",zN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVR4nO3YP2rUQRzG4RFJYyeIuhewtdAbaLedvXgDCzurxcIDiK3gAWIRFnICG0ELe7FQ2EIEEQQj/nss3EKCkMBvs5OZeZ8TzO/74Q1JSomIiIiIhuEc5niAPbzGB3zx1w98wke8xRu8wkvs4yke4m7tb2kKbmIXX21I7W9qAq7h+aaOngDHhDO4j+9OyHHfMhycxZOTOnwCHAGPbMFR7xgSbm/j+AnwH7i8/hUyAWrA420dPws4BBdxkACV4N42j58FHLL+V0EC1IAL+JUAleDWto+fH0H/WP9nMwFqwbMNXP9g/Rf0DVzCTrUPag1eTDz+O1yp/R3NwvsJx/+J67W/oWn4PCHAXu33Nw/fJgS4U/v9zcPvCQGu1n5/80xzvvb7Rw+wU/v9zTNB7bd3QQIkwNBkAQkwNFlAAgxNFpAAQ5MF1D1iJavSE+1Zlp5oz6L0RHvmpSfaMys90ZZV6Y22LEtvtGVReqMt89IbbZmV3mjHqvRIO5alR9qxKD3SjnnpkXbMat/q1DFB7bd3QQIkwNBkAQkwNFlAAgxNFpAAQ5MFJMDQZAEJMDRZQAIMTRaQAEOTBSTA0GQBCTA0WUACDE0WkABDkwUkwNBkAQkwNFlAAgxNFpAAQ5MFJMDQZAERERERpU9/AMcmPt/3CYM3AAAAAElFTkSuQmCC",$N=()=>L.jsxs("div",{className:"footer",children:[L.jsxs("div",{className:"footer-icons",children:[L.jsx("img",{src:zN,alt:""}),L.jsx("img",{src:BN,alt:""}),L.jsx("img",{src:jN,alt:""}),L.jsx("img",{src:FN,alt:""})]}),L.jsxs("ul",{children:[L.jsx("li",{children:"Audio Description"}),L.jsx("li",{children:"Help Center"}),L.jsx("li",{children:"Gift Center"}),L.jsx("li",{children:"Media Center"}),L.jsx("li",{children:"Investor Relations"}),L.jsx("li",{children:"Jops"}),L.jsx("li",{children:"Terms of Use"}),L.jsx("li",{children:"Privacy"}),L.jsx("li",{children:"Legal Notices"}),L.jsx("li",{children:"Cookie Preferences"}),L.jsx("li",{children:"Corporate Information"}),L.jsx("li",{children:"Contact Us"})]}),L.jsx("p",{className:"copyright-text",children:"© 1997-2024 Netflix, Inc."})]}),HN=()=>L.jsxs("div",{className:"home",children:[L.jsx(L2,{}),L.jsxs("div",{className:"hero",children:[L.jsx("img",{src:M2,alt:"",className:"banner-img"}),L.jsxs("div",{className:"hero-caption",children:[L.jsx("img",{src:V2,alt:"",className:"caption-img"}),L.jsx("p",{children:"Discovering his ties to a secret ancient orderb, a young man living in morden Istanbul embarks on a quest to save the city from an immortal enemy."}),L.jsxs("div",{className:"hero-btns",children:[L.jsxs("button",{className:"btn",children:[L.jsx("img",{src:U2,alt:""}),"Play"]}),L.jsxs("button",{className:"btn dark-btn",children:[L.jsx("img",{src:b2,alt:""}),"More Info"]})]}),L.jsx(ys,{})]})]}),L.jsxs("div",{className:"more-cords",children:[L.jsx(ys,{title:"Blockbuster Movie",category:"top_rated"}),L.jsx(ys,{title:"Only on Netflix",category:"popular"}),L.jsx(ys,{title:"Upcoming",category:"upcoming"}),L.jsx(ys,{title:"Top Pics for You",category:"now_playing"})]}),L.jsx($N,{})]}),WN="/Netflix-Clone/assets/netflix_spinner-OMdCkKTM.gif",KN=()=>{const[t,e]=M.useState("Sign In"),[n,r]=M.useState(""),[i,s]=M.useState(""),[o,l]=M.useState(""),[u,h]=M.useState(!1),f=async m=>{m.preventDefault(),h(!0),t==="Sign In"?await D2(i,o):await O2(n,i,o),h(!1)};return u?L.jsx("div",{className:"login-spinner",children:L.jsx("img",{src:WN,alt:""})}):L.jsxs("div",{className:"login",children:[L.jsx("img",{src:y_,className:"login-logo",alt:""}),L.jsxs("div",{className:"login-form",children:[L.jsx("h1",{children:t}),L.jsxs("form",{children:[t==="Sign Up"?L.jsx("input",{value:n,onChange:m=>{r(m.target.value)},type:"text",placeholder:`Your \r
          name`}):L.jsx(L.Fragment,{}),L.jsx("input",{value:i,onChange:m=>{s(m.target.value)},type:"email",placeholder:"Email"}),L.jsx("input",{value:o,onChange:m=>{l(m.target.value)},type:"password",placeholder:"Password"}),L.jsx("button",{onClick:f,type:"submit",children:t}),L.jsxs("div",{className:"form-help",children:[L.jsxs("div",{className:"remember",children:[L.jsx("input",{type:"checkbox"}),L.jsx("label",{htmlFor:"",children:"Remember Me"})]}),L.jsx("p",{children:"Need Help?"})]})]}),L.jsx("div",{className:"form-switch",children:t==="Sign In"?L.jsxs("p",{children:["New to Netflix? ",L.jsx("span",{onClick:()=>{e("Sign Up")},children:"Sign Up Now"})]}):L.jsxs("p",{children:["Already have account? ",L.jsx("span",{onClick:()=>{e("Sign In")},children:"Sign In Now"})]})})]})]})},GN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF20lEQVR4nO2d3W9URRTAx4hdDSqCPkjwQW18F9Bg+TTEJ5Ang9GCGPzAaFVEYnz1hW41YrCJfwNJE/ErgcYGiD4aIwIvvqgv7ZZaW0Uh1Ij9mUlPkw25M3tvd2bu3N35JZs02917zj137rlnzjkzq1QikUgkEolEIpFIJPIB3Aw8CrwIfAB8DlwAfgZmgX/kNSvvXZDPvC/feUQfI6e47gK4D3gL+Aq4TPv8CXwJHATWqG4GuA14DhgD/sMf14Gvgb3ArapbAG6XkTZBeH4D3gNWqE4FuAV4B5ihfLQOh7VOqpMAtgAXiY+fgCdU1dE+EfgEmC9ogCvAKeAIsA/YADwIrAR65LVS3tP/ex4YBEblu0XQug0DNVVFgIeAHwqccAM4Cmxq55YWF7UZ+AiYLCD/e6BXVQl9OxYI084AO3zEvhKT7wTOFggLt6sqADwtE4pWjAEbA+ql75TTOfSaA3armAEO5IiJx/XFKFHHZ8VN2dDn8LKKeCS3MvJx4M4IdF0BjOQw9u4YfbLNXVwDXlGRAbwmrsLEXDQ+W6KLyy0eMI+rSNGGzKF/bwxxsi2EmwIeVpEDrBVdbaFfeXG2TEZsIyF6I99gbNvIHlZlAGyzzPiuxewuWrgRk8/W57pZhQRYBpy3XP0DqqIAA5bzuhg0ESVZOBPHVcXBHvodCqXEHZZU53gMcbKjONs0qZnWOfUQSrxrudqlzfhcA/RbzvNwiPLTJYPwMQ/yasCQZOEm5e8e13Is8k3JqIbXspjU+Ez0eTDyyQw5dZdychQsTOzxKVhn3LI441hOj1Sxs7jkUlYOXb4x6HHKZ0uAKWm0I8BIXqThSlZOfXZhrq6v9iFQ912Y/NWyQEbWDLqQVXDOYJqev+5DoG5uyeLDgEY+WUbOAThm0OczH1dV5y6y2NTJRtYAWw06zTotwUkvXBZ/tzslJXIjN+l41aDbepeCdPNgFqOdbuRFpK0si/3KFdLVmcURTyHcIqOx9MvJZAmvcT3whUHIvm4wskaPXIOeJ5QrLCnRDZ3sLprRM1+DrueUK4BfDULu92Bk3zSkab1QzgR4wHC8Xwob1CLkd4OQux35uTIYKqj7PYbjTBc2qEWIqZWg6KiYJB4ml3A3ZjFX2KBdZujxGA3tynXUiYd6jK6jkx6GE0spIIR6GJrCu8e6KLzbGCK8SxMWwkxY0hScMFPwlFTCWMbbHyJNeqXdqjTVT5Ouc70WxJT4b7sfjciNLX2G/hP/IsyUbTvq6Pi1WI0NfOz9QdgkTC8rzmIycHG27kJWweV0puLsgA+Ba6TEnsXOLmw3+Be4N3Q556xjOT0WVzXhUlYOXb4N2kAjQvVWDPiqhucc2YMRVL81/b6bHE0ZuNMe5NUkEdWQVz1UkyNwk6UdbMJ7ma1FE/ozqkPA3tD5dtmN6I1O2HQEuMty5+pG9OWhFNGbipgYURUH+NRyfgdDKqJbxH60KPOqqijAm9EsFmpq0p6Pfmmvu6XW864jqyKK6Z1bTOjFkWtVRQDWA39ZzudYmcrVZPmuiakqGJsFI9uWKH8Xcu2MScleS2ZvcWRvV3G7C9tI/kPXC1UFlvYi/3OfgGkT4I0c21/EtdRabyKSY2OUkRjibImTbSEckkB7SsWI3h4nh7EbXvMErafVe3M08mgjv6RiRka2zY0sohdLbgmcIDLlLpqZi3YkG3y27QHZjD75J10VDzImVrssqc6sB19cPjlnNGIL/W5kSlY/bW2nXCUh5zYpP9lCtqwQLo7oYoknPbyELTOvSpGhLo0rfbI95qqmLTNXyXt98pm6fMdUrTYxLxe43DjZBSxsYWnbSKUszpc2rfYFC/7ykKQZy2Zais3OnwvRACyXk9SbqIRmSjbqrvzmLUW3ctsjq69M1XUXXJctkvtjWuVVCsBqvYBdr62W7p92mZVjDXhrCag6LLSfrQNekA7OE7oHWX4KZKbp50Fm5L1z8pkhiT70d9PPgyQSiUQikUgkEomEysn//LHzY2FxebUAAAAASUVORK5CYII=",qN=()=>{const{id:t}=fN(),e=Pf(),[n,r]=M.useState({name:"",key:"",published_at:"",typeof:""}),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDg5NDFhODNlZjRkMWEwZDEzMDcxNjVjZWQ2NTI0OCIsInN1YiI6IjY2NjllZDY3NDE5YjI4ZWMxYTFjNzc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E4YnSoNCIwEQP8VIyzU_mGNHk5hu8d8kYvyapeg0S-g"}};return M.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${t}/videos?language=en-US`,i).then(s=>s.json()).then(s=>r(s.results[0])).catch(s=>console.error(s))},[]),L.jsxs("div",{className:"player",children:[L.jsx("img",{src:GN,alt:"",onClick:()=>{e(-2)}}),L.jsx("iframe",{width:"90%",height:"90%",src:`http://www.youtube.com/embed/${n.key}`,title:"trailer",frameBorder:"0",allowFullScreen:!0}),L.jsxs("div",{className:"player-info",children:[L.jsx("p",{children:n.published_at.slice(0,10)}),L.jsx("p",{children:n.name}),L.jsx("p",{children:n.type})]})]})},QN=()=>{const t=Pf();return M.useEffect(()=>{RS(Su,async e=>{e?(console.log("Logged In"),t("/")):(console.log("Logeed Out"),t("/login"))})},[]),L.jsxs("div",{children:[L.jsx(P2,{theme:"dark"}),L.jsxs(RN,{children:[L.jsx(Ga,{path:"/",element:L.jsx(HN,{})}),L.jsx(Ga,{path:"/login",element:L.jsx(KN,{})}),L.jsx(Ga,{path:"/player/:id",element:L.jsx(qN,{})})]})]})};Fc.createRoot(document.getElementById("root")).render(L.jsx(oe.StrictMode,{children:L.jsx(LN,{children:L.jsx(QN,{})})}));
