(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const S of j.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&p(S)}).observe(document,{childList:!0,subtree:!0});function l(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(m){if(m.ep)return;m.ep=!0;const j=l(m);fetch(m.href,j)}})();function cx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Do={exports:{}},is={},Po={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function dx(){if(tp)return se;tp=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),S=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),B=Symbol.iterator;function J(f){return f===null||typeof f!="object"?null:(f=B&&f[B]||f["@@iterator"],typeof f=="function"?f:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,W={};function V(f,b,Z){this.props=f,this.context=b,this.refs=W,this.updater=Z||le}V.prototype.isReactComponent={},V.prototype.setState=function(f,b){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,b,"setState")},V.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function fe(){}fe.prototype=V.prototype;function de(f,b,Z){this.props=f,this.context=b,this.refs=W,this.updater=Z||le}var ne=de.prototype=new fe;ne.constructor=de,K(ne,V.prototype),ne.isPureReactComponent=!0;var L=Array.isArray,X=Object.prototype.hasOwnProperty,U={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function A(f,b,Z){var re,oe={},ae=null,pe=null;if(b!=null)for(re in b.ref!==void 0&&(pe=b.ref),b.key!==void 0&&(ae=""+b.key),b)X.call(b,re)&&!I.hasOwnProperty(re)&&(oe[re]=b[re]);var ce=arguments.length-2;if(ce===1)oe.children=Z;else if(1<ce){for(var ge=Array(ce),Ce=0;Ce<ce;Ce++)ge[Ce]=arguments[Ce+2];oe.children=ge}if(f&&f.defaultProps)for(re in ce=f.defaultProps,ce)oe[re]===void 0&&(oe[re]=ce[re]);return{$$typeof:i,type:f,key:ae,ref:pe,props:oe,_owner:U.current}}function ye(f,b){return{$$typeof:i,type:f.type,key:b,ref:f.ref,props:f.props,_owner:f._owner}}function Me(f){return typeof f=="object"&&f!==null&&f.$$typeof===i}function ie(f){var b={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(Z){return b[Z]})}var Le=/\/+/g;function Ee(f,b){return typeof f=="object"&&f!==null&&f.key!=null?ie(""+f.key):b.toString(36)}function Ge(f,b,Z,re,oe){var ae=typeof f;(ae==="undefined"||ae==="boolean")&&(f=null);var pe=!1;if(f===null)pe=!0;else switch(ae){case"string":case"number":pe=!0;break;case"object":switch(f.$$typeof){case i:case c:pe=!0}}if(pe)return pe=f,oe=oe(pe),f=re===""?"."+Ee(pe,0):re,L(oe)?(Z="",f!=null&&(Z=f.replace(Le,"$&/")+"/"),Ge(oe,b,Z,"",function(Ce){return Ce})):oe!=null&&(Me(oe)&&(oe=ye(oe,Z+(!oe.key||pe&&pe.key===oe.key?"":(""+oe.key).replace(Le,"$&/")+"/")+f)),b.push(oe)),1;if(pe=0,re=re===""?".":re+":",L(f))for(var ce=0;ce<f.length;ce++){ae=f[ce];var ge=re+Ee(ae,ce);pe+=Ge(ae,b,Z,ge,oe)}else if(ge=J(f),typeof ge=="function")for(f=ge.call(f),ce=0;!(ae=f.next()).done;)ae=ae.value,ge=re+Ee(ae,ce++),pe+=Ge(ae,b,Z,ge,oe);else if(ae==="object")throw b=String(f),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return pe}function Ze(f,b,Z){if(f==null)return f;var re=[],oe=0;return Ge(f,re,"","",function(ae){return b.call(Z,ae,oe++)}),re}function Ye(f){if(f._status===-1){var b=f._result;b=b(),b.then(function(Z){(f._status===0||f._status===-1)&&(f._status=1,f._result=Z)},function(Z){(f._status===0||f._status===-1)&&(f._status=2,f._result=Z)}),f._status===-1&&(f._status=0,f._result=b)}if(f._status===1)return f._result.default;throw f._result}var je={current:null},C={transition:null},F={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:C,ReactCurrentOwner:U};function R(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:Ze,forEach:function(f,b,Z){Ze(f,function(){b.apply(this,arguments)},Z)},count:function(f){var b=0;return Ze(f,function(){b++}),b},toArray:function(f){return Ze(f,function(b){return b})||[]},only:function(f){if(!Me(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},se.Component=V,se.Fragment=l,se.Profiler=m,se.PureComponent=de,se.StrictMode=p,se.Suspense=T,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,se.act=R,se.cloneElement=function(f,b,Z){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var re=K({},f.props),oe=f.key,ae=f.ref,pe=f._owner;if(b!=null){if(b.ref!==void 0&&(ae=b.ref,pe=U.current),b.key!==void 0&&(oe=""+b.key),f.type&&f.type.defaultProps)var ce=f.type.defaultProps;for(ge in b)X.call(b,ge)&&!I.hasOwnProperty(ge)&&(re[ge]=b[ge]===void 0&&ce!==void 0?ce[ge]:b[ge])}var ge=arguments.length-2;if(ge===1)re.children=Z;else if(1<ge){ce=Array(ge);for(var Ce=0;Ce<ge;Ce++)ce[Ce]=arguments[Ce+2];re.children=ce}return{$$typeof:i,type:f.type,key:oe,ref:ae,props:re,_owner:pe}},se.createContext=function(f){return f={$$typeof:S,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:j,_context:f},f.Consumer=f},se.createElement=A,se.createFactory=function(f){var b=A.bind(null,f);return b.type=f,b},se.createRef=function(){return{current:null}},se.forwardRef=function(f){return{$$typeof:z,render:f}},se.isValidElement=Me,se.lazy=function(f){return{$$typeof:Q,_payload:{_status:-1,_result:f},_init:Ye}},se.memo=function(f,b){return{$$typeof:Y,type:f,compare:b===void 0?null:b}},se.startTransition=function(f){var b=C.transition;C.transition={};try{f()}finally{C.transition=b}},se.unstable_act=R,se.useCallback=function(f,b){return je.current.useCallback(f,b)},se.useContext=function(f){return je.current.useContext(f)},se.useDebugValue=function(){},se.useDeferredValue=function(f){return je.current.useDeferredValue(f)},se.useEffect=function(f,b){return je.current.useEffect(f,b)},se.useId=function(){return je.current.useId()},se.useImperativeHandle=function(f,b,Z){return je.current.useImperativeHandle(f,b,Z)},se.useInsertionEffect=function(f,b){return je.current.useInsertionEffect(f,b)},se.useLayoutEffect=function(f,b){return je.current.useLayoutEffect(f,b)},se.useMemo=function(f,b){return je.current.useMemo(f,b)},se.useReducer=function(f,b,Z){return je.current.useReducer(f,b,Z)},se.useRef=function(f){return je.current.useRef(f)},se.useState=function(f){return je.current.useState(f)},se.useSyncExternalStore=function(f,b,Z){return je.current.useSyncExternalStore(f,b,Z)},se.useTransition=function(){return je.current.useTransition()},se.version="18.3.1",se}var np;function el(){return np||(np=1,Po.exports=dx()),Po.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function px(){if(sp)return is;sp=1;var i=el(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,m=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function S(z,T,Y){var Q,B={},J=null,le=null;Y!==void 0&&(J=""+Y),T.key!==void 0&&(J=""+T.key),T.ref!==void 0&&(le=T.ref);for(Q in T)p.call(T,Q)&&!j.hasOwnProperty(Q)&&(B[Q]=T[Q]);if(z&&z.defaultProps)for(Q in T=z.defaultProps,T)B[Q]===void 0&&(B[Q]=T[Q]);return{$$typeof:c,type:z,key:J,ref:le,props:B,_owner:m.current}}return is.Fragment=l,is.jsx=S,is.jsxs=S,is}var ap;function ux(){return ap||(ap=1,Do.exports=px()),Do.exports}var r=ux(),wa={},Ao={exports:{}},or={},_o={exports:{}},Fo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function hx(){return ip||(ip=1,(function(i){function c(C,F){var R=C.length;C.push(F);e:for(;0<R;){var f=R-1>>>1,b=C[f];if(0<m(b,F))C[f]=F,C[R]=b,R=f;else break e}}function l(C){return C.length===0?null:C[0]}function p(C){if(C.length===0)return null;var F=C[0],R=C.pop();if(R!==F){C[0]=R;e:for(var f=0,b=C.length,Z=b>>>1;f<Z;){var re=2*(f+1)-1,oe=C[re],ae=re+1,pe=C[ae];if(0>m(oe,R))ae<b&&0>m(pe,oe)?(C[f]=pe,C[ae]=R,f=ae):(C[f]=oe,C[re]=R,f=re);else if(ae<b&&0>m(pe,R))C[f]=pe,C[ae]=R,f=ae;else break e}}return F}function m(C,F){var R=C.sortIndex-F.sortIndex;return R!==0?R:C.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;i.unstable_now=function(){return j.now()}}else{var S=Date,z=S.now();i.unstable_now=function(){return S.now()-z}}var T=[],Y=[],Q=1,B=null,J=3,le=!1,K=!1,W=!1,V=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(C){for(var F=l(Y);F!==null;){if(F.callback===null)p(Y);else if(F.startTime<=C)p(Y),F.sortIndex=F.expirationTime,c(T,F);else break;F=l(Y)}}function L(C){if(W=!1,ne(C),!K)if(l(T)!==null)K=!0,Ye(X);else{var F=l(Y);F!==null&&je(L,F.startTime-C)}}function X(C,F){K=!1,W&&(W=!1,fe(A),A=-1),le=!0;var R=J;try{for(ne(F),B=l(T);B!==null&&(!(B.expirationTime>F)||C&&!ie());){var f=B.callback;if(typeof f=="function"){B.callback=null,J=B.priorityLevel;var b=f(B.expirationTime<=F);F=i.unstable_now(),typeof b=="function"?B.callback=b:B===l(T)&&p(T),ne(F)}else p(T);B=l(T)}if(B!==null)var Z=!0;else{var re=l(Y);re!==null&&je(L,re.startTime-F),Z=!1}return Z}finally{B=null,J=R,le=!1}}var U=!1,I=null,A=-1,ye=5,Me=-1;function ie(){return!(i.unstable_now()-Me<ye)}function Le(){if(I!==null){var C=i.unstable_now();Me=C;var F=!0;try{F=I(!0,C)}finally{F?Ee():(U=!1,I=null)}}else U=!1}var Ee;if(typeof de=="function")Ee=function(){de(Le)};else if(typeof MessageChannel!="undefined"){var Ge=new MessageChannel,Ze=Ge.port2;Ge.port1.onmessage=Le,Ee=function(){Ze.postMessage(null)}}else Ee=function(){V(Le,0)};function Ye(C){I=C,U||(U=!0,Ee())}function je(C,F){A=V(function(){C(i.unstable_now())},F)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(C){C.callback=null},i.unstable_continueExecution=function(){K||le||(K=!0,Ye(X))},i.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<C?Math.floor(1e3/C):5},i.unstable_getCurrentPriorityLevel=function(){return J},i.unstable_getFirstCallbackNode=function(){return l(T)},i.unstable_next=function(C){switch(J){case 1:case 2:case 3:var F=3;break;default:F=J}var R=J;J=F;try{return C()}finally{J=R}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(C,F){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=J;J=C;try{return F()}finally{J=R}},i.unstable_scheduleCallback=function(C,F,R){var f=i.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?f+R:f):R=f,C){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=R+b,C={id:Q++,callback:F,priorityLevel:C,startTime:R,expirationTime:b,sortIndex:-1},R>f?(C.sortIndex=R,c(Y,C),l(T)===null&&C===l(Y)&&(W?(fe(A),A=-1):W=!0,je(L,R-f))):(C.sortIndex=b,c(T,C),K||le||(K=!0,Ye(X))),C},i.unstable_shouldYield=ie,i.unstable_wrapCallback=function(C){var F=J;return function(){var R=J;J=F;try{return C.apply(this,arguments)}finally{J=R}}}})(Fo)),Fo}var op;function xx(){return op||(op=1,_o.exports=hx()),_o.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function mx(){if(lp)return or;lp=1;var i=el(),c=xx();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,m={};function j(e,t){S(e,t),S(e+"Capture",t)}function S(e,t){for(m[e]=t,e=0;e<t.length;e++)p.add(t[e])}var z=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},B={};function J(e){return T.call(B,e)?!0:T.call(Q,e)?!1:Y.test(e)?B[e]=!0:(Q[e]=!0,!1)}function le(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,t,n,s){if(t===null||typeof t=="undefined"||le(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,n,s,a,o,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=d}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fe,de);V[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fe,de);V[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fe,de);V[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,s){var a=V.hasOwnProperty(t)?V[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K(t,n,a,s)&&(n=null),s||a===null?J(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,s=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var L=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),U=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),ie=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),C=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,f;function b(e){if(f===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);f=t&&t[1]||""}return`
`+f+e}var Z=!1;function re(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var s=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){s=y}e.call(t.prototype)}else{try{throw Error()}catch(y){s=y}e()}}catch(y){if(y&&s&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),o=s.stack.split(`
`),d=a.length-1,u=o.length-1;1<=d&&0<=u&&a[d]!==o[u];)u--;for(;1<=d&&0<=u;d--,u--)if(a[d]!==o[u]){if(d!==1||u!==1)do if(d--,u--,0>u||a[d]!==o[u]){var h=`
`+a[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=u);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?b(e):""}function oe(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case U:return"Portal";case ye:return"Profiler";case A:return"StrictMode";case Ee:return"Suspense";case Ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ie:return(e.displayName||"Context")+".Consumer";case Me:return(e._context.displayName||"Context")+".Provider";case Le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ce(e){var t=ge(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){s=""+d,o.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=Ce(e))}function bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=ge(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function cl(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dl(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Ua(e,t){dl(e,t);var n=ce(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$a(e,t.type,n):t.hasOwnProperty("defaultValue")&&$a(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $a(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function Bt(e,t,n,s){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ul(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(bn(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ce(n)}}function hl(e,t){var n=ce(t.value),s=ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function xl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ml(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ml(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ms,fl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ms=ms||document.createElement("div"),ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hu=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){hu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function gl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function vl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,a=gl(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,a):e[n]=a}}var xu=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(xu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=null;function qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Wt=null,Ut=null;function yl(e){if(e=Qn(e)){if(typeof Ka!="function")throw Error(l(280));var t=e.stateNode;t&&(t=_s(t),Ka(e.stateNode,e.type,t))}}function jl(e){Wt?Ut?Ut.push(e):Ut=[e]:Wt=e}function bl(){if(Wt){var e=Wt,t=Ut;if(Ut=Wt=null,yl(e),t)for(e=0;e<t.length;e++)yl(t[e])}}function Nl(e,t){return e(t)}function wl(){}var Xa=!1;function kl(e,t,n){if(Xa)return e(t,n);Xa=!0;try{return Nl(e,t,n)}finally{Xa=!1,(Wt!==null||Ut!==null)&&(wl(),bl())}}function kn(e,t){var n=e.stateNode;if(n===null)return null;var s=_s(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Ja=!1;if(z)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Ja=!1}function mu(e,t,n,s,a,o,d,u,h){var y=Array.prototype.slice.call(arguments,3);try{t.apply(n,y)}catch(w){this.onError(w)}}var En=!1,fs=null,gs=!1,Za=null,fu={onError:function(e){En=!0,fs=e}};function gu(e,t,n,s,a,o,d,u,h){En=!1,fs=null,mu.apply(fu,arguments)}function vu(e,t,n,s,a,o,d,u,h){if(gu.apply(this,arguments),En){if(En){var y=fs;En=!1,fs=null}else throw Error(l(198));gs||(gs=!0,Za=y)}}function Nt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function El(e){if(Nt(e)!==e)throw Error(l(188))}function yu(e){var t=e.alternate;if(!t){if(t=Nt(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,s=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return El(a),e;if(o===s)return El(a),t;o=o.sibling}throw Error(l(188))}if(n.return!==s.return)n=a,s=o;else{for(var d=!1,u=a.child;u;){if(u===n){d=!0,n=a,s=o;break}if(u===s){d=!0,s=a,n=o;break}u=u.sibling}if(!d){for(u=o.child;u;){if(u===n){d=!0,n=o,s=a;break}if(u===s){d=!0,s=o,n=a;break}u=u.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==s)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Tl(e){return e=yu(e),e!==null?Cl(e):null}function Cl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cl(e);if(t!==null)return t;e=e.sibling}return null}var Il=c.unstable_scheduleCallback,zl=c.unstable_cancelCallback,ju=c.unstable_shouldYield,bu=c.unstable_requestPaint,Oe=c.unstable_now,Nu=c.unstable_getCurrentPriorityLevel,ei=c.unstable_ImmediatePriority,Ll=c.unstable_UserBlockingPriority,vs=c.unstable_NormalPriority,wu=c.unstable_LowPriority,Rl=c.unstable_IdlePriority,ys=null,Dr=null;function ku(e){if(Dr&&typeof Dr.onCommitFiberRoot=="function")try{Dr.onCommitFiberRoot(ys,e,void 0,(e.current.flags&128)===128)}catch{}}var Er=Math.clz32?Math.clz32:Tu,Su=Math.log,Eu=Math.LN2;function Tu(e){return e>>>=0,e===0?32:31-(Su(e)/Eu|0)|0}var js=64,bs=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ns(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,d=n&268435455;if(d!==0){var u=d&~a;u!==0?s=Tn(u):(o&=d,o!==0&&(s=Tn(o)))}else d=n&~a,d!==0?s=Tn(d):o!==0&&(s=Tn(o));if(s===0)return 0;if(t!==0&&t!==s&&(t&a)===0&&(a=s&-s,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((s&4)!==0&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-Er(t),a=1<<n,s|=e[n],t&=~a;return s}function Cu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iu(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var d=31-Er(o),u=1<<d,h=a[d];h===-1?((u&n)===0||(u&s)!==0)&&(a[d]=Cu(u,t)):h<=t&&(e.expiredLanes|=u),o&=~u}}function ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ml(){var e=js;return js<<=1,(js&4194240)===0&&(js=64),e}function ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Er(t),e[t]=n}function zu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Er(n),o=1<<a;t[a]=0,s[a]=-1,e[a]=-1,n&=~o}}function ni(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Er(n),a=1<<s;a&t|e[s]&t&&(e[s]|=t),n&=~a}}var ve=0;function Ol(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Dl,si,Pl,Al,_l,ai=!1,ws=[],Zr=null,et=null,rt=null,In=new Map,zn=new Map,tt=[],Lu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fl(e,t){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":et=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(t.pointerId)}}function Ln(e,t,n,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Qn(t),t!==null&&si(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ru(e,t,n,s,a){switch(t){case"focusin":return Zr=Ln(Zr,e,t,n,s,a),!0;case"dragenter":return et=Ln(et,e,t,n,s,a),!0;case"mouseover":return rt=Ln(rt,e,t,n,s,a),!0;case"pointerover":var o=a.pointerId;return In.set(o,Ln(In.get(o)||null,e,t,n,s,a)),!0;case"gotpointercapture":return o=a.pointerId,zn.set(o,Ln(zn.get(o)||null,e,t,n,s,a)),!0}return!1}function Bl(e){var t=wt(e.target);if(t!==null){var n=Nt(t);if(n!==null){if(t=n.tag,t===13){if(t=Sl(n),t!==null){e.blockedOn=t,_l(e.priority,function(){Pl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Ya=s,n.target.dispatchEvent(s),Ya=null}else return t=Qn(n),t!==null&&si(t),e.blockedOn=n,!1;t.shift()}return!0}function Wl(e,t,n){ks(e)&&n.delete(t)}function Mu(){ai=!1,Zr!==null&&ks(Zr)&&(Zr=null),et!==null&&ks(et)&&(et=null),rt!==null&&ks(rt)&&(rt=null),In.forEach(Wl),zn.forEach(Wl)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,ai||(ai=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Mu)))}function Mn(e){function t(a){return Rn(a,e)}if(0<ws.length){Rn(ws[0],e);for(var n=1;n<ws.length;n++){var s=ws[n];s.blockedOn===e&&(s.blockedOn=null)}}for(Zr!==null&&Rn(Zr,e),et!==null&&Rn(et,e),rt!==null&&Rn(rt,e),In.forEach(t),zn.forEach(t),n=0;n<tt.length;n++)s=tt[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Bl(n),n.blockedOn===null&&tt.shift()}var $t=L.ReactCurrentBatchConfig,Ss=!0;function Ou(e,t,n,s){var a=ve,o=$t.transition;$t.transition=null;try{ve=1,ii(e,t,n,s)}finally{ve=a,$t.transition=o}}function Du(e,t,n,s){var a=ve,o=$t.transition;$t.transition=null;try{ve=4,ii(e,t,n,s)}finally{ve=a,$t.transition=o}}function ii(e,t,n,s){if(Ss){var a=oi(e,t,n,s);if(a===null)ki(e,t,s,Es,n),Fl(e,s);else if(Ru(a,e,t,n,s))s.stopPropagation();else if(Fl(e,s),t&4&&-1<Lu.indexOf(e)){for(;a!==null;){var o=Qn(a);if(o!==null&&Dl(o),o=oi(e,t,n,s),o===null&&ki(e,t,s,Es,n),o===a)break;a=o}a!==null&&s.stopPropagation()}else ki(e,t,s,null,n)}}var Es=null;function oi(e,t,n,s){if(Es=null,e=qa(s),e=wt(e),e!==null)if(t=Nt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Es=e,null}function Ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nu()){case ei:return 1;case Ll:return 4;case vs:case wu:return 16;case Rl:return 536870912;default:return 16}default:return 16}}var nt=null,li=null,Ts=null;function $l(){if(Ts)return Ts;var e,t=li,n=t.length,s,a="value"in nt?nt.value:nt.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var d=n-e;for(s=1;s<=d&&t[n-s]===a[o-s];s++);return Ts=a.slice(e,1<s?1-s:void 0)}function Cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Is(){return!0}function Hl(){return!1}function cr(e){function t(n,s,a,o,d){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Is:Hl,this.isPropagationStopped=Hl,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),t}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=cr(Ht),On=R({},Ht,{view:0,detail:0}),Pu=cr(On),di,pi,Dn,zs=R({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dn&&(Dn&&e.type==="mousemove"?(di=e.screenX-Dn.screenX,pi=e.screenY-Dn.screenY):pi=di=0,Dn=e),di)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),Ql=cr(zs),Au=R({},zs,{dataTransfer:0}),_u=cr(Au),Fu=R({},On,{relatedTarget:0}),ui=cr(Fu),Bu=R({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),Wu=cr(Bu),Uu=R({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$u=cr(Uu),Hu=R({},Ht,{data:0}),Vl=cr(Hu),Qu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gu[e])?!!t[e]:!1}function hi(){return Yu}var qu=R({},On,{key:function(e){if(e.key){var t=Qu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(e){return e.type==="keypress"?Cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ku=cr(qu),Xu=R({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gl=cr(Xu),Ju=R({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),Zu=cr(Ju),eh=R({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),rh=cr(eh),th=R({},zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nh=cr(th),sh=[9,13,27,32],xi=z&&"CompositionEvent"in window,Pn=null;z&&"documentMode"in document&&(Pn=document.documentMode);var ah=z&&"TextEvent"in window&&!Pn,Yl=z&&(!xi||Pn&&8<Pn&&11>=Pn),ql=" ",Kl=!1;function Xl(e,t){switch(e){case"keyup":return sh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function ih(e,t){switch(e){case"compositionend":return Jl(t);case"keypress":return t.which!==32?null:(Kl=!0,ql);case"textInput":return e=t.data,e===ql&&Kl?null:e;default:return null}}function oh(e,t){if(Qt)return e==="compositionend"||!xi&&Xl(e,t)?(e=$l(),Ts=li=nt=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yl&&t.locale!=="ko"?null:t.data;default:return null}}var lh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lh[e.type]:t==="textarea"}function ec(e,t,n,s){jl(s),t=Ds(t,"onChange"),0<t.length&&(n=new ci("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var An=null,_n=null;function ch(e){vc(e,0)}function Ls(e){var t=Kt(e);if(bt(t))return e}function dh(e,t){if(e==="change")return t}var rc=!1;if(z){var mi;if(z){var fi="oninput"in document;if(!fi){var tc=document.createElement("div");tc.setAttribute("oninput","return;"),fi=typeof tc.oninput=="function"}mi=fi}else mi=!1;rc=mi&&(!document.documentMode||9<document.documentMode)}function nc(){An&&(An.detachEvent("onpropertychange",sc),_n=An=null)}function sc(e){if(e.propertyName==="value"&&Ls(_n)){var t=[];ec(t,_n,e,qa(e)),kl(ch,t)}}function ph(e,t,n){e==="focusin"?(nc(),An=t,_n=n,An.attachEvent("onpropertychange",sc)):e==="focusout"&&nc()}function uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ls(_n)}function hh(e,t){if(e==="click")return Ls(t)}function xh(e,t){if(e==="input"||e==="change")return Ls(t)}function mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tr=typeof Object.is=="function"?Object.is:mh;function Fn(e,t){if(Tr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!T.call(t,a)||!Tr(e[a],t[a]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ic(e,t){var n=ac(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ac(n)}}function oc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lc(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function gi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fh(e){var t=lc(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&oc(n.ownerDocument.documentElement,n)){if(s!==null&&gi(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=ic(n,o);var d=ic(n,s);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gh=z&&"documentMode"in document&&11>=document.documentMode,Vt=null,vi=null,Bn=null,yi=!1;function cc(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yi||Vt==null||Vt!==Sr(s)||(s=Vt,"selectionStart"in s&&gi(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Bn&&Fn(Bn,s)||(Bn=s,s=Ds(vi,"onSelect"),0<s.length&&(t=new ci("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Vt)))}function Rs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionend:Rs("Transition","TransitionEnd")},ji={},dc={};z&&(dc=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Ms(e){if(ji[e])return ji[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dc)return ji[e]=t[n];return e}var pc=Ms("animationend"),uc=Ms("animationiteration"),hc=Ms("animationstart"),xc=Ms("transitionend"),mc=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function st(e,t){mc.set(e,t),j(t,[e])}for(var bi=0;bi<fc.length;bi++){var Ni=fc[bi],vh=Ni.toLowerCase(),yh=Ni[0].toUpperCase()+Ni.slice(1);st(vh,"on"+yh)}st(pc,"onAnimationEnd"),st(uc,"onAnimationIteration"),st(hc,"onAnimationStart"),st("dblclick","onDoubleClick"),st("focusin","onFocus"),st("focusout","onBlur"),st(xc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function gc(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,vu(s,t,void 0,e),e.currentTarget=null}function vc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var d=s.length-1;0<=d;d--){var u=s[d],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==o&&a.isPropagationStopped())break e;gc(a,u,y),o=h}else for(d=0;d<s.length;d++){if(u=s[d],h=u.instance,y=u.currentTarget,u=u.listener,h!==o&&a.isPropagationStopped())break e;gc(a,u,y),o=h}}}if(gs)throw e=Za,gs=!1,Za=null,e}function Ne(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var s=e+"__bubble";n.has(s)||(yc(t,e,2,!1),n.add(s))}function wi(e,t,n){var s=0;t&&(s|=4),yc(n,e,s,t)}var Os="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[Os]){e[Os]=!0,p.forEach(function(n){n!=="selectionchange"&&(jh.has(n)||wi(n,!1,e),wi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Os]||(t[Os]=!0,wi("selectionchange",!1,t))}}function yc(e,t,n,s){switch(Ul(t)){case 1:var a=Ou;break;case 4:a=Du;break;default:a=ii}n=a.bind(null,t,n,e),a=void 0,!Ja||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ki(e,t,n,s,a){var o=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var u=s.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(d===4)for(d=s.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;d=d.return}for(;u!==null;){if(d=wt(u),d===null)return;if(h=d.tag,h===5||h===6){s=o=d;continue e}u=u.parentNode}}s=s.return}kl(function(){var y=o,w=qa(n),k=[];e:{var N=mc.get(e);if(N!==void 0){var M=ci,D=e;switch(e){case"keypress":if(Cs(n)===0)break e;case"keydown":case"keyup":M=Ku;break;case"focusin":D="focus",M=ui;break;case"focusout":D="blur",M=ui;break;case"beforeblur":case"afterblur":M=ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=_u;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Zu;break;case pc:case uc:case hc:M=Wu;break;case xc:M=rh;break;case"scroll":M=Pu;break;case"wheel":M=nh;break;case"copy":case"cut":case"paste":M=$u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Gl}var P=(t&4)!==0,De=!P&&e==="scroll",g=P?N!==null?N+"Capture":null:N;P=[];for(var x=y,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=kn(x,g),E!=null&&P.push($n(x,E,v)))),De)break;x=x.return}0<P.length&&(N=new M(N,D,null,n,w),k.push({event:N,listeners:P}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",N&&n!==Ya&&(D=n.relatedTarget||n.fromElement)&&(wt(D)||D[Wr]))break e;if((M||N)&&(N=w.window===w?w:(N=w.ownerDocument)?N.defaultView||N.parentWindow:window,M?(D=n.relatedTarget||n.toElement,M=y,D=D?wt(D):null,D!==null&&(De=Nt(D),D!==De||D.tag!==5&&D.tag!==6)&&(D=null)):(M=null,D=y),M!==D)){if(P=Ql,E="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(P=Gl,E="onPointerLeave",g="onPointerEnter",x="pointer"),De=M==null?N:Kt(M),v=D==null?N:Kt(D),N=new P(E,x+"leave",M,n,w),N.target=De,N.relatedTarget=v,E=null,wt(w)===y&&(P=new P(g,x+"enter",D,n,w),P.target=v,P.relatedTarget=De,E=P),De=E,M&&D)r:{for(P=M,g=D,x=0,v=P;v;v=Yt(v))x++;for(v=0,E=g;E;E=Yt(E))v++;for(;0<x-v;)P=Yt(P),x--;for(;0<v-x;)g=Yt(g),v--;for(;x--;){if(P===g||g!==null&&P===g.alternate)break r;P=Yt(P),g=Yt(g)}P=null}else P=null;M!==null&&jc(k,N,M,P,!1),D!==null&&De!==null&&jc(k,De,D,P,!0)}}e:{if(N=y?Kt(y):window,M=N.nodeName&&N.nodeName.toLowerCase(),M==="select"||M==="input"&&N.type==="file")var _=dh;else if(Zl(N))if(rc)_=xh;else{_=uh;var $=ph}else(M=N.nodeName)&&M.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(_=hh);if(_&&(_=_(e,y))){ec(k,_,n,w);break e}$&&$(e,N,y),e==="focusout"&&($=N._wrapperState)&&$.controlled&&N.type==="number"&&$a(N,"number",N.value)}switch($=y?Kt(y):window,e){case"focusin":(Zl($)||$.contentEditable==="true")&&(Vt=$,vi=y,Bn=null);break;case"focusout":Bn=vi=Vt=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,cc(k,n,w);break;case"selectionchange":if(gh)break;case"keydown":case"keyup":cc(k,n,w)}var H;if(xi)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Qt?Xl(e,n)&&(G="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(Yl&&n.locale!=="ko"&&(Qt||G!=="onCompositionStart"?G==="onCompositionEnd"&&Qt&&(H=$l()):(nt=w,li="value"in nt?nt.value:nt.textContent,Qt=!0)),$=Ds(y,G),0<$.length&&(G=new Vl(G,e,null,n,w),k.push({event:G,listeners:$}),H?G.data=H:(H=Jl(n),H!==null&&(G.data=H)))),(H=ah?ih(e,n):oh(e,n))&&(y=Ds(y,"onBeforeInput"),0<y.length&&(w=new Vl("onBeforeInput","beforeinput",null,n,w),k.push({event:w,listeners:y}),w.data=H))}vc(k,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ds(e,t){for(var n=t+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=kn(e,n),o!=null&&s.unshift($n(e,o,a)),o=kn(e,t),o!=null&&s.push($n(e,o,a))),e=e.return}return s}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,t,n,s,a){for(var o=t._reactName,d=[];n!==null&&n!==s;){var u=n,h=u.alternate,y=u.stateNode;if(h!==null&&h===s)break;u.tag===5&&y!==null&&(u=y,a?(h=kn(n,o),h!=null&&d.unshift($n(n,h,u))):a||(h=kn(n,o),h!=null&&d.push($n(n,h,u)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var bh=/\r\n?/g,Nh=/\u0000|\uFFFD/g;function bc(e){return(typeof e=="string"?e:""+e).replace(bh,`
`).replace(Nh,"")}function Ps(e,t,n){if(t=bc(t),bc(e)!==t&&n)throw Error(l(425))}function As(){}var Si=null,Ei=null;function Ti(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,kh=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc!="undefined"?function(e){return Nc.resolve(null).then(e).catch(Sh)}:Ci;function Sh(e){setTimeout(function(){throw e})}function Ii(e,t){var n=t,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(s===0){e.removeChild(a),Mn(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=a}while(n);Mn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qt=Math.random().toString(36).slice(2),Pr="__reactFiber$"+qt,Hn="__reactProps$"+qt,Wr="__reactContainer$"+qt,zi="__reactEvents$"+qt,Eh="__reactListeners$"+qt,Th="__reactHandles$"+qt;function wt(e){var t=e[Pr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wr]||n[Pr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wc(e);e!==null;){if(n=e[Pr])return n;e=wc(e)}return t}e=n,n=e.parentNode}return null}function Qn(e){return e=e[Pr]||e[Wr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function _s(e){return e[Hn]||null}var Li=[],Xt=-1;function it(e){return{current:e}}function we(e){0>Xt||(e.current=Li[Xt],Li[Xt]=null,Xt--)}function be(e,t){Xt++,Li[Xt]=e.current,e.current=t}var ot={},qe=it(ot),tr=it(!1),kt=ot;function Jt(e,t){var n=e.type.contextTypes;if(!n)return ot;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function nr(e){return e=e.childContextTypes,e!=null}function Fs(){we(tr),we(qe)}function kc(e,t,n){if(qe.current!==ot)throw Error(l(168));be(qe,t),be(tr,n)}function Sc(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(l(108,pe(e)||"Unknown",a));return R({},n,s)}function Bs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,kt=qe.current,be(qe,e),be(tr,tr.current),!0}function Ec(e,t,n){var s=e.stateNode;if(!s)throw Error(l(169));n?(e=Sc(e,t,kt),s.__reactInternalMemoizedMergedChildContext=e,we(tr),we(qe),be(qe,e)):we(tr),be(tr,n)}var Ur=null,Ws=!1,Ri=!1;function Tc(e){Ur===null?Ur=[e]:Ur.push(e)}function Ch(e){Ws=!0,Tc(e)}function lt(){if(!Ri&&Ur!==null){Ri=!0;var e=0,t=ve;try{var n=Ur;for(ve=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Ur=null,Ws=!1}catch(a){throw Ur!==null&&(Ur=Ur.slice(e+1)),Il(ei,lt),a}finally{ve=t,Ri=!1}}return null}var Zt=[],en=0,Us=null,$s=0,gr=[],vr=0,St=null,$r=1,Hr="";function Et(e,t){Zt[en++]=$s,Zt[en++]=Us,Us=e,$s=t}function Cc(e,t,n){gr[vr++]=$r,gr[vr++]=Hr,gr[vr++]=St,St=e;var s=$r;e=Hr;var a=32-Er(s)-1;s&=~(1<<a),n+=1;var o=32-Er(t)+a;if(30<o){var d=a-a%5;o=(s&(1<<d)-1).toString(32),s>>=d,a-=d,$r=1<<32-Er(t)+a|n<<a|s,Hr=o+e}else $r=1<<o|n<<a|s,Hr=e}function Mi(e){e.return!==null&&(Et(e,1),Cc(e,1,0))}function Oi(e){for(;e===Us;)Us=Zt[--en],Zt[en]=null,$s=Zt[--en],Zt[en]=null;for(;e===St;)St=gr[--vr],gr[vr]=null,Hr=gr[--vr],gr[vr]=null,$r=gr[--vr],gr[vr]=null}var dr=null,pr=null,Te=!1,Cr=null;function Ic(e,t){var n=Nr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dr=e,pr=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dr=e,pr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=St!==null?{id:$r,overflow:Hr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Nr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dr=e,pr=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(Te){var t=pr;if(t){var n=t;if(!zc(e,t)){if(Di(e))throw Error(l(418));t=at(n.nextSibling);var s=dr;t&&zc(e,t)?Ic(s,n):(e.flags=e.flags&-4097|2,Te=!1,dr=e)}}else{if(Di(e))throw Error(l(418));e.flags=e.flags&-4097|2,Te=!1,dr=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dr=e}function Hs(e){if(e!==dr)return!1;if(!Te)return Lc(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ti(e.type,e.memoizedProps)),t&&(t=pr)){if(Di(e))throw Rc(),Error(l(418));for(;t;)Ic(e,t),t=at(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pr=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pr=null}}else pr=dr?at(e.stateNode.nextSibling):null;return!0}function Rc(){for(var e=pr;e;)e=at(e.nextSibling)}function rn(){pr=dr=null,Te=!1}function Ai(e){Cr===null?Cr=[e]:Cr.push(e)}var Ih=L.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var s=n.stateNode}if(!s)throw Error(l(147,e));var a=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(d){var u=a.refs;d===null?delete u[o]:u[o]=d},t._stringRef=o,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function Qs(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mc(e){var t=e._init;return t(e._payload)}function Oc(e){function t(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function s(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function a(g,x){return g=ft(g,x),g.index=0,g.sibling=null,g}function o(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,x,v,E){return x===null||x.tag!==6?(x=Io(v,g.mode,E),x.return=g,x):(x=a(x,v),x.return=g,x)}function h(g,x,v,E){var _=v.type;return _===I?w(g,x,v.props.children,E,v.key):x!==null&&(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ye&&Mc(_)===x.type)?(E=a(x,v.props),E.ref=Vn(g,x,v),E.return=g,E):(E=ma(v.type,v.key,v.props,null,g.mode,E),E.ref=Vn(g,x,v),E.return=g,E)}function y(g,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=zo(v,g.mode,E),x.return=g,x):(x=a(x,v.children||[]),x.return=g,x)}function w(g,x,v,E,_){return x===null||x.tag!==7?(x=Ot(v,g.mode,E,_),x.return=g,x):(x=a(x,v),x.return=g,x)}function k(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Io(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return v=ma(x.type,x.key,x.props,null,g.mode,v),v.ref=Vn(g,null,x),v.return=g,v;case U:return x=zo(x,g.mode,v),x.return=g,x;case Ye:var E=x._init;return k(g,E(x._payload),v)}if(bn(x)||F(x))return x=Ot(x,g.mode,v,null),x.return=g,x;Qs(g,x)}return null}function N(g,x,v,E){var _=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:u(g,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case X:return v.key===_?h(g,x,v,E):null;case U:return v.key===_?y(g,x,v,E):null;case Ye:return _=v._init,N(g,x,_(v._payload),E)}if(bn(v)||F(v))return _!==null?null:w(g,x,v,E,null);Qs(g,v)}return null}function M(g,x,v,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,u(x,g,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case X:return g=g.get(E.key===null?v:E.key)||null,h(x,g,E,_);case U:return g=g.get(E.key===null?v:E.key)||null,y(x,g,E,_);case Ye:var $=E._init;return M(g,x,v,$(E._payload),_)}if(bn(E)||F(E))return g=g.get(v)||null,w(x,g,E,_,null);Qs(x,E)}return null}function D(g,x,v,E){for(var _=null,$=null,H=x,G=x=0,$e=null;H!==null&&G<v.length;G++){H.index>G?($e=H,H=null):$e=H.sibling;var he=N(g,H,v[G],E);if(he===null){H===null&&(H=$e);break}e&&H&&he.alternate===null&&t(g,H),x=o(he,x,G),$===null?_=he:$.sibling=he,$=he,H=$e}if(G===v.length)return n(g,H),Te&&Et(g,G),_;if(H===null){for(;G<v.length;G++)H=k(g,v[G],E),H!==null&&(x=o(H,x,G),$===null?_=H:$.sibling=H,$=H);return Te&&Et(g,G),_}for(H=s(g,H);G<v.length;G++)$e=M(H,g,G,v[G],E),$e!==null&&(e&&$e.alternate!==null&&H.delete($e.key===null?G:$e.key),x=o($e,x,G),$===null?_=$e:$.sibling=$e,$=$e);return e&&H.forEach(function(gt){return t(g,gt)}),Te&&Et(g,G),_}function P(g,x,v,E){var _=F(v);if(typeof _!="function")throw Error(l(150));if(v=_.call(v),v==null)throw Error(l(151));for(var $=_=null,H=x,G=x=0,$e=null,he=v.next();H!==null&&!he.done;G++,he=v.next()){H.index>G?($e=H,H=null):$e=H.sibling;var gt=N(g,H,he.value,E);if(gt===null){H===null&&(H=$e);break}e&&H&&gt.alternate===null&&t(g,H),x=o(gt,x,G),$===null?_=gt:$.sibling=gt,$=gt,H=$e}if(he.done)return n(g,H),Te&&Et(g,G),_;if(H===null){for(;!he.done;G++,he=v.next())he=k(g,he.value,E),he!==null&&(x=o(he,x,G),$===null?_=he:$.sibling=he,$=he);return Te&&Et(g,G),_}for(H=s(g,H);!he.done;G++,he=v.next())he=M(H,g,G,he.value,E),he!==null&&(e&&he.alternate!==null&&H.delete(he.key===null?G:he.key),x=o(he,x,G),$===null?_=he:$.sibling=he,$=he);return e&&H.forEach(function(lx){return t(g,lx)}),Te&&Et(g,G),_}function De(g,x,v,E){if(typeof v=="object"&&v!==null&&v.type===I&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case X:e:{for(var _=v.key,$=x;$!==null;){if($.key===_){if(_=v.type,_===I){if($.tag===7){n(g,$.sibling),x=a($,v.props.children),x.return=g,g=x;break e}}else if($.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ye&&Mc(_)===$.type){n(g,$.sibling),x=a($,v.props),x.ref=Vn(g,$,v),x.return=g,g=x;break e}n(g,$);break}else t(g,$);$=$.sibling}v.type===I?(x=Ot(v.props.children,g.mode,E,v.key),x.return=g,g=x):(E=ma(v.type,v.key,v.props,null,g.mode,E),E.ref=Vn(g,x,v),E.return=g,g=E)}return d(g);case U:e:{for($=v.key;x!==null;){if(x.key===$)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(g,x.sibling),x=a(x,v.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=zo(v,g.mode,E),x.return=g,g=x}return d(g);case Ye:return $=v._init,De(g,x,$(v._payload),E)}if(bn(v))return D(g,x,v,E);if(F(v))return P(g,x,v,E);Qs(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(g,x.sibling),x=a(x,v),x.return=g,g=x):(n(g,x),x=Io(v,g.mode,E),x.return=g,g=x),d(g)):n(g,x)}return De}var tn=Oc(!0),Dc=Oc(!1),Vs=it(null),Gs=null,nn=null,_i=null;function Fi(){_i=nn=Gs=null}function Bi(e){var t=Vs.current;we(Vs),e._currentValue=t}function Wi(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){Gs=e,_i=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(sr=!0),e.firstContext=null)}function yr(e){var t=e._currentValue;if(_i!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(Gs===null)throw Error(l(308));nn=e,Gs.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Tt=null;function Ui(e){Tt===null?Tt=[e]:Tt.push(e)}function Pc(e,t,n,s){var a=t.interleaved;return a===null?(n.next=n,Ui(t)):(n.next=a.next,a.next=n),t.interleaved=n,Qr(e,s)}function Qr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ue&2)!==0){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Qr(e,n)}return a=s.interleaved,a===null?(t.next=t,Ui(s)):(t.next=a.next,a.next=t),s.interleaved=t,Qr(e,n)}function Ys(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,ni(e,n)}}function _c(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=d:o=o.next=d,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qs(e,t,n,s){var a=e.updateQueue;ct=!1;var o=a.firstBaseUpdate,d=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var h=u,y=h.next;h.next=null,d===null?o=y:d.next=y,d=h;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==d&&(u===null?w.firstBaseUpdate=y:u.next=y,w.lastBaseUpdate=h))}if(o!==null){var k=a.baseState;d=0,w=y=h=null,u=o;do{var N=u.lane,M=u.eventTime;if((s&N)===N){w!==null&&(w=w.next={eventTime:M,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var D=e,P=u;switch(N=t,M=n,P.tag){case 1:if(D=P.payload,typeof D=="function"){k=D.call(M,k,N);break e}k=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=P.payload,N=typeof D=="function"?D.call(M,k,N):D,N==null)break e;k=R({},k,N);break e;case 2:ct=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,N=a.effects,N===null?a.effects=[u]:N.push(u))}else M={eventTime:M,lane:N,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(y=w=M,h=k):w=w.next=M,d|=N;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;N=u,u=N.next,N.next=null,a.lastBaseUpdate=N,a.shared.pending=null}}while(!0);if(w===null&&(h=k),a.baseState=h,a.firstBaseUpdate=y,a.lastBaseUpdate=w,t=a.shared.interleaved,t!==null){a=t;do d|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);zt|=d,e.lanes=d,e.memoizedState=k}}function Fc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=n,typeof a!="function")throw Error(l(191,a));a.call(s)}}}var Gn={},Ar=it(Gn),Yn=it(Gn),qn=it(Gn);function Ct(e){if(e===Gn)throw Error(l(174));return e}function Hi(e,t){switch(be(qn,t),be(Yn,e),be(Ar,Gn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qa(t,e)}we(Ar),be(Ar,t)}function an(){we(Ar),we(Yn),we(qn)}function Bc(e){Ct(qn.current);var t=Ct(Ar.current),n=Qa(t,e.type);t!==n&&(be(Yn,e),be(Ar,n))}function Qi(e){Yn.current===e&&(we(Ar),we(Yn))}var Ie=it(0);function Ks(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vi=[];function Gi(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var Xs=L.ReactCurrentDispatcher,Yi=L.ReactCurrentBatchConfig,It=0,ze=null,_e=null,We=null,Js=!1,Kn=!1,Xn=0,zh=0;function Ke(){throw Error(l(321))}function qi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function Ki(e,t,n,s,a,o){if(It=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xs.current=e===null||e.memoizedState===null?Oh:Dh,e=n(s,a),Kn){o=0;do{if(Kn=!1,Xn=0,25<=o)throw Error(l(301));o+=1,We=_e=null,t.updateQueue=null,Xs.current=Ph,e=n(s,a)}while(Kn)}if(Xs.current=ra,t=_e!==null&&_e.next!==null,It=0,We=_e=ze=null,Js=!1,t)throw Error(l(300));return e}function Xi(){var e=Xn!==0;return Xn=0,e}function _r(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ze.memoizedState=We=e:We=We.next=e,We}function jr(){if(_e===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=We===null?ze.memoizedState:We.next;if(t!==null)We=t,_e=e;else{if(e===null)throw Error(l(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},We===null?ze.memoizedState=We=e:We=We.next=e}return We}function Jn(e,t){return typeof t=="function"?t(e):t}function Ji(e){var t=jr(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var s=_e,a=s.baseQueue,o=n.pending;if(o!==null){if(a!==null){var d=a.next;a.next=o.next,o.next=d}s.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,s=s.baseState;var u=d=null,h=null,y=o;do{var w=y.lane;if((It&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),s=y.hasEagerState?y.eagerState:e(s,y.action);else{var k={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=k,d=s):h=h.next=k,ze.lanes|=w,zt|=w}y=y.next}while(y!==null&&y!==o);h===null?d=s:h.next=u,Tr(s,t.memoizedState)||(sr=!0),t.memoizedState=s,t.baseState=d,t.baseQueue=h,n.lastRenderedState=s}if(e=n.interleaved,e!==null){a=e;do o=a.lane,ze.lanes|=o,zt|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zi(e){var t=jr(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do o=e(o,d.action),d=d.next;while(d!==a);Tr(o,t.memoizedState)||(sr=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,s]}function Wc(){}function Uc(e,t){var n=ze,s=jr(),a=t(),o=!Tr(s.memoizedState,a);if(o&&(s.memoizedState=a,sr=!0),s=s.queue,eo(Qc.bind(null,n,s,e),[e]),s.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Zn(9,Hc.bind(null,n,s,a,t),void 0,null),Ue===null)throw Error(l(349));(It&30)!==0||$c(n,t,a)}return a}function $c(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hc(e,t,n,s){t.value=n,t.getSnapshot=s,Vc(t)&&Gc(e)}function Qc(e,t,n){return n(function(){Vc(t)&&Gc(e)})}function Vc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Gc(e){var t=Qr(e,1);t!==null&&Rr(t,e,1,-1)}function Yc(e){var t=_r();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=Mh.bind(null,ze,e),[t.memoizedState,e]}function Zn(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function qc(){return jr().memoizedState}function Zs(e,t,n,s){var a=_r();ze.flags|=e,a.memoizedState=Zn(1|t,n,void 0,s===void 0?null:s)}function ea(e,t,n,s){var a=jr();s=s===void 0?null:s;var o=void 0;if(_e!==null){var d=_e.memoizedState;if(o=d.destroy,s!==null&&qi(s,d.deps)){a.memoizedState=Zn(t,n,o,s);return}}ze.flags|=e,a.memoizedState=Zn(1|t,n,o,s)}function Kc(e,t){return Zs(8390656,8,e,t)}function eo(e,t){return ea(2048,8,e,t)}function Xc(e,t){return ea(4,2,e,t)}function Jc(e,t){return ea(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,n){return n=n!=null?n.concat([e]):null,ea(4,4,Zc.bind(null,t,e),n)}function ro(){}function rd(e,t){var n=jr();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&qi(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function td(e,t){var n=jr();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&qi(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function nd(e,t,n){return(It&21)===0?(e.baseState&&(e.baseState=!1,sr=!0),e.memoizedState=n):(Tr(n,t)||(n=Ml(),ze.lanes|=n,zt|=n,e.baseState=!0),t)}function Lh(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var s=Yi.transition;Yi.transition={};try{e(!1),t()}finally{ve=n,Yi.transition=s}}function sd(){return jr().memoizedState}function Rh(e,t,n){var s=xt(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},ad(e))id(t,n);else if(n=Pc(e,t,n,s),n!==null){var a=rr();Rr(n,e,s,a),od(n,t,s)}}function Mh(e,t,n){var s=xt(e),a={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(ad(e))id(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var d=t.lastRenderedState,u=o(d,n);if(a.hasEagerState=!0,a.eagerState=u,Tr(u,d)){var h=t.interleaved;h===null?(a.next=a,Ui(t)):(a.next=h.next,h.next=a),t.interleaved=a;return}}catch{}finally{}n=Pc(e,t,a,s),n!==null&&(a=rr(),Rr(n,e,s,a),od(n,t,s))}}function ad(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function id(e,t){Kn=Js=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function od(e,t,n){if((n&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,ni(e,n)}}var ra={readContext:yr,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Oh={readContext:yr,useCallback:function(e,t){return _r().memoizedState=[e,t===void 0?null:t],e},useContext:yr,useEffect:Kc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4194308,4,Zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zs(4,2,e,t)},useMemo:function(e,t){var n=_r();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=_r();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Rh.bind(null,ze,e),[s.memoizedState,e]},useRef:function(e){var t=_r();return e={current:e},t.memoizedState=e},useState:Yc,useDebugValue:ro,useDeferredValue:function(e){return _r().memoizedState=e},useTransition:function(){var e=Yc(!1),t=e[0];return e=Lh.bind(null,e[1]),_r().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=ze,a=_r();if(Te){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ue===null)throw Error(l(349));(It&30)!==0||$c(s,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Kc(Qc.bind(null,s,o,e),[e]),s.flags|=2048,Zn(9,Hc.bind(null,s,o,n,t),void 0,null),n},useId:function(){var e=_r(),t=Ue.identifierPrefix;if(Te){var n=Hr,s=$r;n=(s&~(1<<32-Er(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dh={readContext:yr,useCallback:rd,useContext:yr,useEffect:eo,useImperativeHandle:ed,useInsertionEffect:Xc,useLayoutEffect:Jc,useMemo:td,useReducer:Ji,useRef:qc,useState:function(){return Ji(Jn)},useDebugValue:ro,useDeferredValue:function(e){var t=jr();return nd(t,_e.memoizedState,e)},useTransition:function(){var e=Ji(Jn)[0],t=jr().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Uc,useId:sd,unstable_isNewReconciler:!1},Ph={readContext:yr,useCallback:rd,useContext:yr,useEffect:eo,useImperativeHandle:ed,useInsertionEffect:Xc,useLayoutEffect:Jc,useMemo:td,useReducer:Zi,useRef:qc,useState:function(){return Zi(Jn)},useDebugValue:ro,useDeferredValue:function(e){var t=jr();return _e===null?t.memoizedState=e:nd(t,_e.memoizedState,e)},useTransition:function(){var e=Zi(Jn)[0],t=jr().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Uc,useId:sd,unstable_isNewReconciler:!1};function Ir(e,t){if(e&&e.defaultProps){t=R({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function to(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ta={isMounted:function(e){return(e=e._reactInternals)?Nt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=rr(),a=xt(e),o=Vr(s,a);o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,a),t!==null&&(Rr(t,e,a,s),Ys(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=rr(),a=xt(e),o=Vr(s,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,a),t!==null&&(Rr(t,e,a,s),Ys(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rr(),s=xt(e),a=Vr(n,s);a.tag=2,t!=null&&(a.callback=t),t=dt(e,a,s),t!==null&&(Rr(t,e,s,n),Ys(t,e,s))}};function ld(e,t,n,s,a,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,d):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,s)||!Fn(a,o):!0}function cd(e,t,n){var s=!1,a=ot,o=t.contextType;return typeof o=="object"&&o!==null?o=yr(o):(a=nr(t)?kt:qe.current,s=t.contextTypes,o=(s=s!=null)?Jt(e,a):ot),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ta,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function dd(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&ta.enqueueReplaceState(t,t.state,null)}function no(e,t,n,s){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},$i(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=yr(o):(o=nr(t)?kt:qe.current,a.context=Jt(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(to(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ta.enqueueReplaceState(a,a.state,null),qs(e,n,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",s=t;do n+=oe(s),s=s.return;while(s);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function so(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ao(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ah=typeof WeakMap=="function"?WeakMap:Map;function pd(e,t,n){n=Vr(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){ca||(ca=!0,bo=s),ao(e,t)},n}function ud(e,t,n){n=Vr(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;n.payload=function(){return s(a)},n.callback=function(){ao(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ao(e,t),typeof s!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function hd(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Ah;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(n)||(a.add(n),e=Xh.bind(null,e,t,n),t.then(e,e))}function xd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function md(e,t,n,s,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vr(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var _h=L.ReactCurrentOwner,sr=!1;function er(e,t,n,s){t.child=e===null?Dc(t,null,n,s):tn(t,e.child,n,s)}function fd(e,t,n,s,a){n=n.render;var o=t.ref;return sn(t,a),s=Ki(e,t,n,s,o,a),n=Xi(),e!==null&&!sr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gr(e,t,a)):(Te&&n&&Mi(t),t.flags|=1,er(e,t,s,a),t.child)}function gd(e,t,n,s,a){if(e===null){var o=n.type;return typeof o=="function"&&!Co(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vd(e,t,o,s,a)):(e=ma(n.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var d=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(d,s)&&e.ref===t.ref)return Gr(e,t,a)}return t.flags|=1,e=ft(o,s),e.ref=t.ref,e.return=t,t.child=e}function vd(e,t,n,s,a){if(e!==null){var o=e.memoizedProps;if(Fn(o,s)&&e.ref===t.ref)if(sr=!1,t.pendingProps=s=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(sr=!0);else return t.lanes=e.lanes,Gr(e,t,a)}return io(e,t,n,s,a)}function yd(e,t,n){var s=t.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(cn,ur),ur|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(cn,ur),ur|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:n,be(cn,ur),ur|=s}else o!==null?(s=o.baseLanes|n,t.memoizedState=null):s=n,be(cn,ur),ur|=s;return er(e,t,a,n),t.child}function jd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function io(e,t,n,s,a){var o=nr(n)?kt:qe.current;return o=Jt(t,o),sn(t,a),n=Ki(e,t,n,s,o,a),s=Xi(),e!==null&&!sr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gr(e,t,a)):(Te&&s&&Mi(t),t.flags|=1,er(e,t,n,a),t.child)}function bd(e,t,n,s,a){if(nr(n)){var o=!0;Bs(t)}else o=!1;if(sn(t,a),t.stateNode===null)sa(e,t),cd(t,n,s),no(t,n,s,a),s=!0;else if(e===null){var d=t.stateNode,u=t.memoizedProps;d.props=u;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=yr(y):(y=nr(n)?kt:qe.current,y=Jt(t,y));var w=n.getDerivedStateFromProps,k=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==s||h!==y)&&dd(t,d,s,y),ct=!1;var N=t.memoizedState;d.state=N,qs(t,s,d,a),h=t.memoizedState,u!==s||N!==h||tr.current||ct?(typeof w=="function"&&(to(t,n,w,s),h=t.memoizedState),(u=ct||ld(t,n,u,s,N,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=h),d.props=s,d.state=h,d.context=y,s=u):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{d=t.stateNode,Ac(e,t),u=t.memoizedProps,y=t.type===t.elementType?u:Ir(t.type,u),d.props=y,k=t.pendingProps,N=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=yr(h):(h=nr(n)?kt:qe.current,h=Jt(t,h));var M=n.getDerivedStateFromProps;(w=typeof M=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==k||N!==h)&&dd(t,d,s,h),ct=!1,N=t.memoizedState,d.state=N,qs(t,s,d,a);var D=t.memoizedState;u!==k||N!==D||tr.current||ct?(typeof M=="function"&&(to(t,n,M,s),D=t.memoizedState),(y=ct||ld(t,n,y,s,N,D,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,D,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,D,h)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=D),d.props=s,d.state=D,d.context=h,s=y):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),s=!1)}return oo(e,t,n,s,o,a)}function oo(e,t,n,s,a,o){jd(e,t);var d=(t.flags&128)!==0;if(!s&&!d)return a&&Ec(t,n,!1),Gr(e,t,o);s=t.stateNode,_h.current=t;var u=d&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&d?(t.child=tn(t,e.child,null,o),t.child=tn(t,null,u,o)):er(e,t,u,o),t.memoizedState=s.state,a&&Ec(t,n,!0),t.child}function Nd(e){var t=e.stateNode;t.pendingContext?kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kc(e,t.context,!1),Hi(e,t.containerInfo)}function wd(e,t,n,s,a){return rn(),Ai(a),t.flags|=256,er(e,t,n,s),t.child}var lo={dehydrated:null,treeContext:null,retryLane:0};function co(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,n){var s=t.pendingProps,a=Ie.current,o=!1,d=(t.flags&128)!==0,u;if((u=d)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),be(Ie,a&1),e===null)return Pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=s.children,e=s.fallback,o?(s=t.mode,o=t.child,d={mode:"hidden",children:d},(s&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=d):o=fa(d,s,0,null),e=Ot(e,s,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=co(n),t.memoizedState=lo,e):po(t,d));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Fh(e,t,d,s,u,a,n);if(o){o=s.fallback,d=t.mode,a=e.child,u=a.sibling;var h={mode:"hidden",children:s.children};return(d&1)===0&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=h,t.deletions=null):(s=ft(a,h),s.subtreeFlags=a.subtreeFlags&14680064),u!==null?o=ft(u,o):(o=Ot(o,d,n,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,d=e.child.memoizedState,d=d===null?co(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},o.memoizedState=d,o.childLanes=e.childLanes&~n,t.memoizedState=lo,s}return o=e.child,e=o.sibling,s=ft(o,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function po(e,t){return t=fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function na(e,t,n,s){return s!==null&&Ai(s),tn(t,e.child,null,n),e=po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fh(e,t,n,s,a,o,d){if(n)return t.flags&256?(t.flags&=-257,s=so(Error(l(422))),na(e,t,d,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,a=t.mode,s=fa({mode:"visible",children:s.children},a,0,null),o=Ot(o,a,d,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,(t.mode&1)!==0&&tn(t,e.child,null,d),t.child.memoizedState=co(d),t.memoizedState=lo,o);if((t.mode&1)===0)return na(e,t,d,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var u=s.dgst;return s=u,o=Error(l(419)),s=so(o,s,void 0),na(e,t,d,s)}if(u=(d&e.childLanes)!==0,sr||u){if(s=Ue,s!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(s.suspendedLanes|d))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Qr(e,a),Rr(s,e,a,-1))}return To(),s=so(Error(l(421))),na(e,t,d,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Jh.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,pr=at(a.nextSibling),dr=t,Te=!0,Cr=null,e!==null&&(gr[vr++]=$r,gr[vr++]=Hr,gr[vr++]=St,$r=e.id,Hr=e.overflow,St=t),t=po(t,s.children),t.flags|=4096,t)}function Sd(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Wi(e.return,t,n)}function uo(e,t,n,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=n,o.tailMode=a)}function Ed(e,t,n){var s=t.pendingProps,a=s.revealOrder,o=s.tail;if(er(e,t,s.children,n),s=Ie.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,n,t);else if(e.tag===19)Sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(be(Ie,s),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ks(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),uo(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ks(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}uo(t,!0,n,null,o);break;case"together":uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sa(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bh(e,t,n){switch(t.tag){case 3:Nd(t),rn();break;case 5:Bc(t);break;case 1:nr(t.type)&&Bs(t);break;case 4:Hi(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;be(Vs,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(be(Ie,Ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?kd(e,t,n):(be(Ie,Ie.current&1),e=Gr(e,t,n),e!==null?e.sibling:null);be(Ie,Ie.current&1);break;case 19:if(s=(n&t.childLanes)!==0,(e.flags&128)!==0){if(s)return Ed(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Ie,Ie.current),s)break;return null;case 22:case 23:return t.lanes=0,yd(e,t,n)}return Gr(e,t,n)}var Td,ho,Cd,Id;Td=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ho=function(){},Cd=function(e,t,n,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,Ct(Ar.current);var o=null;switch(n){case"input":a=Wa(e,a),s=Wa(e,s),o=[];break;case"select":a=R({},a,{value:void 0}),s=R({},s,{value:void 0}),o=[];break;case"textarea":a=Ha(e,a),s=Ha(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=As)}Va(n,s);var d;n=null;for(y in a)if(!s.hasOwnProperty(y)&&a.hasOwnProperty(y)&&a[y]!=null)if(y==="style"){var u=a[y];for(d in u)u.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?o||(o=[]):(o=o||[]).push(y,null));for(y in s){var h=s[y];if(u=a!=null?a[y]:void 0,s.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(o||(o=[]),o.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(o=o||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&Ne("scroll",e),o||u===h||(o=[])):(o=o||[]).push(y,h))}n&&(o=o||[]).push("style",n);var y=o;(t.updateQueue=y)&&(t.flags|=4)}},Id=function(e,t,n,s){n!==s&&(t.flags|=4)};function es(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Wh(e,t,n){var s=t.pendingProps;switch(Oi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return nr(t.type)&&Fs(),Xe(t),null;case 3:return s=t.stateNode,an(),we(tr),we(qe),Gi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Hs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cr!==null&&(ko(Cr),Cr=null))),ho(e,t),Xe(t),null;case 5:Qi(t);var a=Ct(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Cd(e,t,n,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Xe(t),null}if(e=Ct(Ar.current),Hs(t)){s=t.stateNode,n=t.type;var o=t.memoizedProps;switch(s[Pr]=t,s[Hn]=o,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",s),Ne("close",s);break;case"iframe":case"object":case"embed":Ne("load",s);break;case"video":case"audio":for(a=0;a<Wn.length;a++)Ne(Wn[a],s);break;case"source":Ne("error",s);break;case"img":case"image":case"link":Ne("error",s),Ne("load",s);break;case"details":Ne("toggle",s);break;case"input":cl(s,o),Ne("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",s);break;case"textarea":ul(s,o),Ne("invalid",s)}Va(n,o),a=null;for(var d in o)if(o.hasOwnProperty(d)){var u=o[d];d==="children"?typeof u=="string"?s.textContent!==u&&(o.suppressHydrationWarning!==!0&&Ps(s.textContent,u,e),a=["children",u]):typeof u=="number"&&s.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Ps(s.textContent,u,e),a=["children",""+u]):m.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&Ne("scroll",s)}switch(n){case"input":Jr(s),pl(s,o,!0);break;case"textarea":Jr(s),xl(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=As)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ml(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=d.createElement(n,{is:s.is}):(e=d.createElement(n),n==="select"&&(d=e,s.multiple?d.multiple=!0:s.size&&(d.size=s.size))):e=d.createElementNS(e,n),e[Pr]=t,e[Hn]=s,Td(e,t,!1,!1),t.stateNode=e;e:{switch(d=Ga(n,s),n){case"dialog":Ne("cancel",e),Ne("close",e),a=s;break;case"iframe":case"object":case"embed":Ne("load",e),a=s;break;case"video":case"audio":for(a=0;a<Wn.length;a++)Ne(Wn[a],e);a=s;break;case"source":Ne("error",e),a=s;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),a=s;break;case"details":Ne("toggle",e),a=s;break;case"input":cl(e,s),a=Wa(e,s),Ne("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=R({},s,{value:void 0}),Ne("invalid",e);break;case"textarea":ul(e,s),a=Ha(e,s),Ne("invalid",e);break;default:a=s}Va(n,a),u=a;for(o in u)if(u.hasOwnProperty(o)){var h=u[o];o==="style"?vl(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&fl(e,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Nn(e,h):typeof h=="number"&&Nn(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(m.hasOwnProperty(o)?h!=null&&o==="onScroll"&&Ne("scroll",e):h!=null&&ne(e,o,h,d))}switch(n){case"input":Jr(e),pl(e,s,!1);break;case"textarea":Jr(e),xl(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ce(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?Bt(e,!!s.multiple,o,!1):s.defaultValue!=null&&Bt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=As)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)Id(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(n=Ct(qn.current),Ct(Ar.current),Hs(t)){if(s=t.stateNode,n=t.memoizedProps,s[Pr]=t,(o=s.nodeValue!==n)&&(e=dr,e!==null))switch(e.tag){case 3:Ps(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ps(s.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[Pr]=t,t.stateNode=s}return Xe(t),null;case 13:if(we(Ie),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&pr!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Rc(),rn(),t.flags|=98560,o=!1;else if(o=Hs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[Pr]=t}else rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),o=!1}else Cr!==null&&(ko(Cr),Cr=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?Fe===0&&(Fe=3):To())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return an(),ho(e,t),e===null&&Un(t.stateNode.containerInfo),Xe(t),null;case 10:return Bi(t.type._context),Xe(t),null;case 17:return nr(t.type)&&Fs(),Xe(t),null;case 19:if(we(Ie),o=t.memoizedState,o===null)return Xe(t),null;if(s=(t.flags&128)!==0,d=o.rendering,d===null)if(s)es(o,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ks(e),d!==null){for(t.flags|=128,es(o,!1),s=d.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)o=n,e=s,o.flags&=14680066,d=o.alternate,d===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=d.childLanes,o.lanes=d.lanes,o.child=d.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=d.memoizedProps,o.memoizedState=d.memoizedState,o.updateQueue=d.updateQueue,o.type=d.type,e=d.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Ie,Ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>dn&&(t.flags|=128,s=!0,es(o,!1),t.lanes=4194304)}else{if(!s)if(e=Ks(d),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),es(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Te)return Xe(t),null}else 2*Oe()-o.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,s=!0,es(o,!1),t.lanes=4194304);o.isBackwards?(d.sibling=t.child,t.child=d):(n=o.last,n!==null?n.sibling=d:t.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Ie.current,be(Ie,s?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return Eo(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(ur&1073741824)!==0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Uh(e,t){switch(Oi(t),t.tag){case 1:return nr(t.type)&&Fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(),we(tr),we(qe),Gi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Qi(t),null;case 13:if(we(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ie),null;case 4:return an(),null;case 10:return Bi(t.type._context),null;case 22:case 23:return Eo(),null;case 24:return null;default:return null}}var aa=!1,Je=!1,$h=typeof WeakSet=="function"?WeakSet:Set,O=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){Re(e,t,s)}else n.current=null}function xo(e,t,n){try{n()}catch(s){Re(e,t,s)}}var zd=!1;function Hh(e,t){if(Si=Ss,e=lc(),gi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var d=0,u=-1,h=-1,y=0,w=0,k=e,N=null;r:for(;;){for(var M;k!==n||a!==0&&k.nodeType!==3||(u=d+a),k!==o||s!==0&&k.nodeType!==3||(h=d+s),k.nodeType===3&&(d+=k.nodeValue.length),(M=k.firstChild)!==null;)N=k,k=M;for(;;){if(k===e)break r;if(N===n&&++y===a&&(u=d),N===o&&++w===s&&(h=d),(M=k.nextSibling)!==null)break;k=N,N=k.parentNode}k=M}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},Ss=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var D=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var P=D.memoizedProps,De=D.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?P:Ir(t.type,P),De);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(E){Re(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return D=zd,zd=!1,D}function rs(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&xo(t,n,o)}a=a.next}while(a!==s)}}function ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function mo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ld(e){var t=e.alternate;t!==null&&(e.alternate=null,Ld(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pr],delete t[Hn],delete t[zi],delete t[Eh],delete t[Th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rd(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fo(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=As));else if(s!==4&&(e=e.child,e!==null))for(fo(e,t,n),e=e.sibling;e!==null;)fo(e,t,n),e=e.sibling}function go(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(go(e,t,n),e=e.sibling;e!==null;)go(e,t,n),e=e.sibling}var He=null,zr=!1;function pt(e,t,n){for(n=n.child;n!==null;)Od(e,t,n),n=n.sibling}function Od(e,t,n){if(Dr&&typeof Dr.onCommitFiberUnmount=="function")try{Dr.onCommitFiberUnmount(ys,n)}catch{}switch(n.tag){case 5:Je||ln(n,t);case 6:var s=He,a=zr;He=null,pt(e,t,n),He=s,zr=a,He!==null&&(zr?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(zr?(e=He,n=n.stateNode,e.nodeType===8?Ii(e.parentNode,n):e.nodeType===1&&Ii(e,n),Mn(e)):Ii(He,n.stateNode));break;case 4:s=He,a=zr,He=n.stateNode.containerInfo,zr=!0,pt(e,t,n),He=s,zr=a;break;case 0:case 11:case 14:case 15:if(!Je&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,d=o.destroy;o=o.tag,d!==void 0&&((o&2)!==0||(o&4)!==0)&&xo(n,t,d),a=a.next}while(a!==s)}pt(e,t,n);break;case 1:if(!Je&&(ln(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(u){Re(n,t,u)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(Je=(s=Je)||n.memoizedState!==null,pt(e,t,n),Je=s):pt(e,t,n);break;default:pt(e,t,n)}}function Dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $h),t.forEach(function(s){var a=Zh.bind(null,e,s);n.has(s)||(n.add(s),s.then(a,a))})}}function Lr(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s];try{var o=e,d=t,u=d;e:for(;u!==null;){switch(u.tag){case 5:He=u.stateNode,zr=!1;break e;case 3:He=u.stateNode.containerInfo,zr=!0;break e;case 4:He=u.stateNode.containerInfo,zr=!0;break e}u=u.return}if(He===null)throw Error(l(160));Od(o,d,a),He=null,zr=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(y){Re(a,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lr(t,e),Fr(e),s&4){try{rs(3,e,e.return),ia(3,e)}catch(P){Re(e,e.return,P)}try{rs(5,e,e.return)}catch(P){Re(e,e.return,P)}}break;case 1:Lr(t,e),Fr(e),s&512&&n!==null&&ln(n,n.return);break;case 5:if(Lr(t,e),Fr(e),s&512&&n!==null&&ln(n,n.return),e.flags&32){var a=e.stateNode;try{Nn(a,"")}catch(P){Re(e,e.return,P)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,d=n!==null?n.memoizedProps:o,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&dl(a,o),Ga(u,d);var y=Ga(u,o);for(d=0;d<h.length;d+=2){var w=h[d],k=h[d+1];w==="style"?vl(a,k):w==="dangerouslySetInnerHTML"?fl(a,k):w==="children"?Nn(a,k):ne(a,w,k,y)}switch(u){case"input":Ua(a,o);break;case"textarea":hl(a,o);break;case"select":var N=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var M=o.value;M!=null?Bt(a,!!o.multiple,M,!1):N!==!!o.multiple&&(o.defaultValue!=null?Bt(a,!!o.multiple,o.defaultValue,!0):Bt(a,!!o.multiple,o.multiple?[]:"",!1))}a[Hn]=o}catch(P){Re(e,e.return,P)}}break;case 6:if(Lr(t,e),Fr(e),s&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(P){Re(e,e.return,P)}}break;case 3:if(Lr(t,e),Fr(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(P){Re(e,e.return,P)}break;case 4:Lr(t,e),Fr(e);break;case 13:Lr(t,e),Fr(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(jo=Oe())),s&4&&Dd(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(y=Je)||w,Lr(t,e),Je=y):Lr(t,e),Fr(e),s&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(O=e,w=e.child;w!==null;){for(k=O=w;O!==null;){switch(N=O,M=N.child,N.tag){case 0:case 11:case 14:case 15:rs(4,N,N.return);break;case 1:ln(N,N.return);var D=N.stateNode;if(typeof D.componentWillUnmount=="function"){s=N,n=N.return;try{t=s,D.props=t.memoizedProps,D.state=t.memoizedState,D.componentWillUnmount()}catch(P){Re(s,n,P)}}break;case 5:ln(N,N.return);break;case 22:if(N.memoizedState!==null){Fd(k);continue}}M!==null?(M.return=N,O=M):Fd(k)}w=w.sibling}e:for(w=null,k=e;;){if(k.tag===5){if(w===null){w=k;try{a=k.stateNode,y?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=gl("display",d))}catch(P){Re(e,e.return,P)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(P){Re(e,e.return,P)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Lr(t,e),Fr(e),s&4&&Dd(e);break;case 21:break;default:Lr(t,e),Fr(e)}}function Fr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rd(n)){var s=n;break e}n=n.return}throw Error(l(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Nn(a,""),s.flags&=-33);var o=Md(e);go(e,o,a);break;case 3:case 4:var d=s.stateNode.containerInfo,u=Md(e);fo(e,u,d);break;default:throw Error(l(161))}}catch(h){Re(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qh(e,t,n){O=e,Ad(e)}function Ad(e,t,n){for(var s=(e.mode&1)!==0;O!==null;){var a=O,o=a.child;if(a.tag===22&&s){var d=a.memoizedState!==null||aa;if(!d){var u=a.alternate,h=u!==null&&u.memoizedState!==null||Je;u=aa;var y=Je;if(aa=d,(Je=h)&&!y)for(O=a;O!==null;)d=O,h=d.child,d.tag===22&&d.memoizedState!==null?Bd(a):h!==null?(h.return=d,O=h):Bd(a);for(;o!==null;)O=o,Ad(o),o=o.sibling;O=a,aa=u,Je=y}_d(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,O=o):_d(e)}}function _d(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||ia(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Je)if(n===null)s.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ir(t.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fc(t,o,s);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fc(t,d,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&Mn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Je||t.flags&512&&mo(t)}catch(N){Re(t,t.return,N)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Fd(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Bd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ia(4,t)}catch(h){Re(t,n,h)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(h){Re(t,a,h)}}var o=t.return;try{mo(t)}catch(h){Re(t,o,h)}break;case 5:var d=t.return;try{mo(t)}catch(h){Re(t,d,h)}}}catch(h){Re(t,t.return,h)}if(t===e){O=null;break}var u=t.sibling;if(u!==null){u.return=t.return,O=u;break}O=t.return}}var Vh=Math.ceil,oa=L.ReactCurrentDispatcher,vo=L.ReactCurrentOwner,br=L.ReactCurrentBatchConfig,ue=0,Ue=null,Pe=null,Qe=0,ur=0,cn=it(0),Fe=0,ts=null,zt=0,la=0,yo=0,ns=null,ar=null,jo=0,dn=1/0,Yr=null,ca=!1,bo=null,ut=null,da=!1,ht=null,pa=0,ss=0,No=null,ua=-1,ha=0;function rr(){return(ue&6)!==0?Oe():ua!==-1?ua:ua=Oe()}function xt(e){return(e.mode&1)===0?1:(ue&2)!==0&&Qe!==0?Qe&-Qe:Ih.transition!==null?(ha===0&&(ha=Ml()),ha):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Ul(e.type)),e)}function Rr(e,t,n,s){if(50<ss)throw ss=0,No=null,Error(l(185));Cn(e,n,s),((ue&2)===0||e!==Ue)&&(e===Ue&&((ue&2)===0&&(la|=n),Fe===4&&mt(e,Qe)),ir(e,s),n===1&&ue===0&&(t.mode&1)===0&&(dn=Oe()+500,Ws&&lt()))}function ir(e,t){var n=e.callbackNode;Iu(e,t);var s=Ns(e,e===Ue?Qe:0);if(s===0)n!==null&&zl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&zl(n),t===1)e.tag===0?Ch(Ud.bind(null,e)):Tc(Ud.bind(null,e)),kh(function(){(ue&6)===0&&lt()}),n=null;else{switch(Ol(s)){case 1:n=ei;break;case 4:n=Ll;break;case 16:n=vs;break;case 536870912:n=Rl;break;default:n=vs}n=Kd(n,Wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wd(e,t){if(ua=-1,ha=0,(ue&6)!==0)throw Error(l(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var s=Ns(e,e===Ue?Qe:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=xa(e,s);else{t=s;var a=ue;ue|=2;var o=Hd();(Ue!==e||Qe!==t)&&(Yr=null,dn=Oe()+500,Rt(e,t));do try{qh();break}catch(u){$d(e,u)}while(!0);Fi(),oa.current=o,ue=a,Pe!==null?t=0:(Ue=null,Qe=0,t=Fe)}if(t!==0){if(t===2&&(a=ri(e),a!==0&&(s=a,t=wo(e,a))),t===1)throw n=ts,Rt(e,0),mt(e,s),ir(e,Oe()),n;if(t===6)mt(e,s);else{if(a=e.current.alternate,(s&30)===0&&!Gh(a)&&(t=xa(e,s),t===2&&(o=ri(e),o!==0&&(s=o,t=wo(e,o))),t===1))throw n=ts,Rt(e,0),mt(e,s),ir(e,Oe()),n;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(l(345));case 2:Mt(e,ar,Yr);break;case 3:if(mt(e,s),(s&130023424)===s&&(t=jo+500-Oe(),10<t)){if(Ns(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){rr(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ci(Mt.bind(null,e,ar,Yr),t);break}Mt(e,ar,Yr);break;case 4:if(mt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var d=31-Er(s);o=1<<d,d=t[d],d>a&&(a=d),s&=~o}if(s=a,s=Oe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Vh(s/1960))-s,10<s){e.timeoutHandle=Ci(Mt.bind(null,e,ar,Yr),s);break}Mt(e,ar,Yr);break;case 5:Mt(e,ar,Yr);break;default:throw Error(l(329))}}}return ir(e,Oe()),e.callbackNode===n?Wd.bind(null,e):null}function wo(e,t){var n=ns;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=xa(e,t),e!==2&&(t=ar,ar=n,t!==null&&ko(t)),e}function ko(e){ar===null?ar=e:ar.push.apply(ar,e)}function Gh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var a=n[s],o=a.getSnapshot;a=a.value;try{if(!Tr(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~yo,t&=~la,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Er(t),s=1<<n;e[n]=-1,t&=~s}}function Ud(e){if((ue&6)!==0)throw Error(l(327));pn();var t=Ns(e,0);if((t&1)===0)return ir(e,Oe()),null;var n=xa(e,t);if(e.tag!==0&&n===2){var s=ri(e);s!==0&&(t=s,n=wo(e,s))}if(n===1)throw n=ts,Rt(e,0),mt(e,t),ir(e,Oe()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,ar,Yr),ir(e,Oe()),null}function So(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(dn=Oe()+500,Ws&&lt())}}function Lt(e){ht!==null&&ht.tag===0&&(ue&6)===0&&pn();var t=ue;ue|=1;var n=br.transition,s=ve;try{if(br.transition=null,ve=1,e)return e()}finally{ve=s,br.transition=n,ue=t,(ue&6)===0&&lt()}}function Eo(){ur=cn.current,we(cn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wh(n)),Pe!==null)for(n=Pe.return;n!==null;){var s=n;switch(Oi(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Fs();break;case 3:an(),we(tr),we(qe),Gi();break;case 5:Qi(s);break;case 4:an();break;case 13:we(Ie);break;case 19:we(Ie);break;case 10:Bi(s.type._context);break;case 22:case 23:Eo()}n=n.return}if(Ue=e,Pe=e=ft(e.current,null),Qe=ur=t,Fe=0,ts=null,yo=la=zt=0,ar=ns=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],s=n.interleaved,s!==null){n.interleaved=null;var a=s.next,o=n.pending;if(o!==null){var d=o.next;o.next=a,s.next=d}n.pending=s}Tt=null}return e}function $d(e,t){do{var n=Pe;try{if(Fi(),Xs.current=ra,Js){for(var s=ze.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Js=!1}if(It=0,We=_e=ze=null,Kn=!1,Xn=0,vo.current=null,n===null||n.return===null){Fe=1,ts=t,Pe=null;break}e:{var o=e,d=n.return,u=n,h=t;if(t=Qe,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=u,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var N=w.alternate;N?(w.updateQueue=N.updateQueue,w.memoizedState=N.memoizedState,w.lanes=N.lanes):(w.updateQueue=null,w.memoizedState=null)}var M=xd(d);if(M!==null){M.flags&=-257,md(M,d,u,o,t),M.mode&1&&hd(o,y,t),t=M,h=y;var D=t.updateQueue;if(D===null){var P=new Set;P.add(h),t.updateQueue=P}else D.add(h);break e}else{if((t&1)===0){hd(o,y,t),To();break e}h=Error(l(426))}}else if(Te&&u.mode&1){var De=xd(d);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),md(De,d,u,o,t),Ai(on(h,u));break e}}o=h=on(h,u),Fe!==4&&(Fe=2),ns===null?ns=[o]:ns.push(o),o=d;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=pd(o,h,t);_c(o,g);break e;case 1:u=h;var x=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ut===null||!ut.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=ud(o,u,t);_c(o,E);break e}}o=o.return}while(o!==null)}Vd(n)}catch(_){t=_,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Hd(){var e=oa.current;return oa.current=ra,e===null?ra:e}function To(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ue===null||(zt&268435455)===0&&(la&268435455)===0||mt(Ue,Qe)}function xa(e,t){var n=ue;ue|=2;var s=Hd();(Ue!==e||Qe!==t)&&(Yr=null,Rt(e,t));do try{Yh();break}catch(a){$d(e,a)}while(!0);if(Fi(),ue=n,oa.current=s,Pe!==null)throw Error(l(261));return Ue=null,Qe=0,Fe}function Yh(){for(;Pe!==null;)Qd(Pe)}function qh(){for(;Pe!==null&&!ju();)Qd(Pe)}function Qd(e){var t=qd(e.alternate,e,ur);e.memoizedProps=e.pendingProps,t===null?Vd(e):Pe=t,vo.current=null}function Vd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Wh(n,t,ur),n!==null){Pe=n;return}}else{if(n=Uh(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Fe===0&&(Fe=5)}function Mt(e,t,n){var s=ve,a=br.transition;try{br.transition=null,ve=1,Kh(e,t,n,s)}finally{br.transition=a,ve=s}return null}function Kh(e,t,n,s){do pn();while(ht!==null);if((ue&6)!==0)throw Error(l(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zu(e,o),e===Ue&&(Pe=Ue=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||da||(da=!0,Kd(vs,function(){return pn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=br.transition,br.transition=null;var d=ve;ve=1;var u=ue;ue|=4,vo.current=null,Hh(e,n),Pd(n,e),fh(Ei),Ss=!!Si,Ei=Si=null,e.current=n,Qh(n),bu(),ue=u,ve=d,br.transition=o}else e.current=n;if(da&&(da=!1,ht=e,pa=a),o=e.pendingLanes,o===0&&(ut=null),ku(n.stateNode),ir(e,Oe()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],s(a.value,{componentStack:a.stack,digest:a.digest});if(ca)throw ca=!1,e=bo,bo=null,e;return(pa&1)!==0&&e.tag!==0&&pn(),o=e.pendingLanes,(o&1)!==0?e===No?ss++:(ss=0,No=e):ss=0,lt(),null}function pn(){if(ht!==null){var e=Ol(pa),t=br.transition,n=ve;try{if(br.transition=null,ve=16>e?16:e,ht===null)var s=!1;else{if(e=ht,ht=null,pa=0,(ue&6)!==0)throw Error(l(331));var a=ue;for(ue|=4,O=e.current;O!==null;){var o=O,d=o.child;if((O.flags&16)!==0){var u=o.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(O=y;O!==null;){var w=O;switch(w.tag){case 0:case 11:case 15:rs(8,w,o)}var k=w.child;if(k!==null)k.return=w,O=k;else for(;O!==null;){w=O;var N=w.sibling,M=w.return;if(Ld(w),w===y){O=null;break}if(N!==null){N.return=M,O=N;break}O=M}}}var D=o.alternate;if(D!==null){var P=D.child;if(P!==null){D.child=null;do{var De=P.sibling;P.sibling=null,P=De}while(P!==null)}}O=o}}if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,O=d;else e:for(;O!==null;){if(o=O,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:rs(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,O=g;break e}O=o.return}}var x=e.current;for(O=x;O!==null;){d=O;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,O=v;else e:for(d=x;O!==null;){if(u=O,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:ia(9,u)}}catch(_){Re(u,u.return,_)}if(u===d){O=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,O=E;break e}O=u.return}}if(ue=a,lt(),Dr&&typeof Dr.onPostCommitFiberRoot=="function")try{Dr.onPostCommitFiberRoot(ys,e)}catch{}s=!0}return s}finally{ve=n,br.transition=t}}return!1}function Gd(e,t,n){t=on(n,t),t=pd(e,t,1),e=dt(e,t,1),t=rr(),e!==null&&(Cn(e,1,t),ir(e,t))}function Re(e,t,n){if(e.tag===3)Gd(e,e,n);else for(;t!==null;){if(t.tag===3){Gd(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ut===null||!ut.has(s))){e=on(n,e),e=ud(t,e,1),t=dt(t,e,1),e=rr(),t!==null&&(Cn(t,1,e),ir(t,e));break}}t=t.return}}function Xh(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=rr(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(Qe&n)===n&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>Oe()-jo?Rt(e,0):yo|=n),ir(e,t)}function Yd(e,t){t===0&&((e.mode&1)===0?t=1:(t=bs,bs<<=1,(bs&130023424)===0&&(bs=4194304)));var n=rr();e=Qr(e,t),e!==null&&(Cn(e,t,n),ir(e,n))}function Jh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yd(e,n)}function Zh(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(l(314))}s!==null&&s.delete(t),Yd(e,n)}var qd;qd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tr.current)sr=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return sr=!1,Bh(e,t,n);sr=(e.flags&131072)!==0}else sr=!1,Te&&(t.flags&1048576)!==0&&Cc(t,$s,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;sa(e,t),e=t.pendingProps;var a=Jt(t,qe.current);sn(t,n),a=Ki(null,t,s,e,a,n);var o=Xi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nr(s)?(o=!0,Bs(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,$i(t),a.updater=ta,t.stateNode=a,a._reactInternals=t,no(t,s,e,n),t=oo(null,t,s,!0,o,n)):(t.tag=0,Te&&o&&Mi(t),er(null,t,a,n),t=t.child),t;case 16:s=t.elementType;e:{switch(sa(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=rx(s),e=Ir(s,e),a){case 0:t=io(null,t,s,e,n);break e;case 1:t=bd(null,t,s,e,n);break e;case 11:t=fd(null,t,s,e,n);break e;case 14:t=gd(null,t,s,Ir(s.type,e),n);break e}throw Error(l(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ir(s,a),io(e,t,s,a,n);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ir(s,a),bd(e,t,s,a,n);case 3:e:{if(Nd(t),e===null)throw Error(l(387));s=t.pendingProps,o=t.memoizedState,a=o.element,Ac(e,t),qs(t,s,null,n);var d=t.memoizedState;if(s=d.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=on(Error(l(423)),t),t=wd(e,t,s,n,a);break e}else if(s!==a){a=on(Error(l(424)),t),t=wd(e,t,s,n,a);break e}else for(pr=at(t.stateNode.containerInfo.firstChild),dr=t,Te=!0,Cr=null,n=Dc(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),s===a){t=Gr(e,t,n);break e}er(e,t,s,n)}t=t.child}return t;case 5:return Bc(t),e===null&&Pi(t),s=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,d=a.children,Ti(s,a)?d=null:o!==null&&Ti(s,o)&&(t.flags|=32),jd(e,t),er(e,t,d,n),t.child;case 6:return e===null&&Pi(t),null;case 13:return kd(e,t,n);case 4:return Hi(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=tn(t,null,s,n):er(e,t,s,n),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ir(s,a),fd(e,t,s,a,n);case 7:return er(e,t,t.pendingProps,n),t.child;case 8:return er(e,t,t.pendingProps.children,n),t.child;case 12:return er(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,o=t.memoizedProps,d=a.value,be(Vs,s._currentValue),s._currentValue=d,o!==null)if(Tr(o.value,d)){if(o.children===a.children&&!tr.current){t=Gr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){d=o.child;for(var h=u.firstContext;h!==null;){if(h.context===s){if(o.tag===1){h=Vr(-1,n&-n),h.tag=2;var y=o.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),Wi(o.return,n,t),u.lanes|=n;break}h=h.next}}else if(o.tag===10)d=o.type===t.type?null:o.child;else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),Wi(d,n,t),d=o.sibling}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===t){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}er(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,sn(t,n),a=yr(a),s=s(a),t.flags|=1,er(e,t,s,n),t.child;case 14:return s=t.type,a=Ir(s,t.pendingProps),a=Ir(s.type,a),gd(e,t,s,a,n);case 15:return vd(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ir(s,a),sa(e,t),t.tag=1,nr(s)?(e=!0,Bs(t)):e=!1,sn(t,n),cd(t,s,a),no(t,s,a,n),oo(null,t,s,!0,e,n);case 19:return Ed(e,t,n);case 22:return yd(e,t,n)}throw Error(l(156,t.tag))};function Kd(e,t){return Il(e,t)}function ex(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,t,n,s){return new ex(e,t,n,s)}function Co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rx(e){if(typeof e=="function")return Co(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Le)return 11;if(e===Ze)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Nr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ma(e,t,n,s,a,o){var d=2;if(s=e,typeof e=="function")Co(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case I:return Ot(n.children,a,o,t);case A:d=8,a|=8;break;case ye:return e=Nr(12,n,t,a|2),e.elementType=ye,e.lanes=o,e;case Ee:return e=Nr(13,n,t,a),e.elementType=Ee,e.lanes=o,e;case Ge:return e=Nr(19,n,t,a),e.elementType=Ge,e.lanes=o,e;case je:return fa(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:d=10;break e;case ie:d=9;break e;case Le:d=11;break e;case Ze:d=14;break e;case Ye:d=16,s=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Nr(d,n,t,a),t.elementType=e,t.type=s,t.lanes=o,t}function Ot(e,t,n,s){return e=Nr(7,e,s,t),e.lanes=n,e}function fa(e,t,n,s){return e=Nr(22,e,s,t),e.elementType=je,e.lanes=n,e.stateNode={isHidden:!1},e}function Io(e,t,n){return e=Nr(6,e,null,t),e.lanes=n,e}function zo(e,t,n){return t=Nr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tx(e,t,n,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Lo(e,t,n,s,a,o,d,u,h){return e=new tx(e,t,n,u,h),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Nr(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(o),e}function nx(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function Xd(e){if(!e)return ot;e=e._reactInternals;e:{if(Nt(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(nr(n))return Sc(e,n,t)}return t}function Jd(e,t,n,s,a,o,d,u,h){return e=Lo(n,s,!0,e,a,o,d,u,h),e.context=Xd(null),n=e.current,s=rr(),a=xt(n),o=Vr(s,a),o.callback=t!=null?t:null,dt(n,o,a),e.current.lanes=a,Cn(e,a,s),ir(e,s),e}function ga(e,t,n,s){var a=t.current,o=rr(),d=xt(a);return n=Xd(n),t.context===null?t.context=n:t.pendingContext=n,t=Vr(o,d),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=dt(a,t,d),e!==null&&(Rr(e,a,d,o),Ys(e,a,d)),d}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function sx(){return null}var ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}ya.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));ga(e,t,null,null)},ya.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){ga(null,e,null,null)}),t[Wr]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=Al();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Bl(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rp(){}function ax(e,t,n,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var y=va(d);o.call(y)}}var d=Jd(t,s,e,0,null,!1,!1,"",rp);return e._reactRootContainer=d,e[Wr]=d.current,Un(e.nodeType===8?e.parentNode:e),Lt(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var u=s;s=function(){var y=va(h);u.call(y)}}var h=Lo(e,0,!1,null,null,!1,!1,"",rp);return e._reactRootContainer=h,e[Wr]=h.current,Un(e.nodeType===8?e.parentNode:e),Lt(function(){ga(t,h,n,s)}),h}function ba(e,t,n,s,a){var o=n._reactRootContainer;if(o){var d=o;if(typeof a=="function"){var u=a;a=function(){var h=va(d);u.call(h)}}ga(t,d,e,a)}else d=ax(n,t,e,a,s);return va(d)}Dl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(ni(t,n|1),ir(t,Oe()),(ue&6)===0&&(dn=Oe()+500,lt()))}break;case 13:Lt(function(){var s=Qr(e,1);if(s!==null){var a=rr();Rr(s,e,1,a)}}),Ro(e,1)}},si=function(e){if(e.tag===13){var t=Qr(e,134217728);if(t!==null){var n=rr();Rr(t,e,134217728,n)}Ro(e,134217728)}},Pl=function(e){if(e.tag===13){var t=xt(e),n=Qr(e,t);if(n!==null){var s=rr();Rr(n,e,t,s)}Ro(e,t)}},Al=function(){return ve},_l=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}},Ka=function(e,t,n){switch(t){case"input":if(Ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var a=_s(s);if(!a)throw Error(l(90));bt(s),Ua(s,a)}}}break;case"textarea":hl(e,n);break;case"select":t=n.value,t!=null&&Bt(e,!!n.multiple,t,!1)}},Nl=So,wl=Lt;var ix={usingClientEntryPoint:!1,Events:[Qn,Kt,_s,jl,bl,So]},as={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ox={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tl(e),e===null?null:e.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{ys=Na.inject(ox),Dr=Na}catch{}}return or.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix,or.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(t))throw Error(l(200));return nx(e,t,null,n)},or.createRoot=function(e,t){if(!Oo(e))throw Error(l(299));var n=!1,s="",a=ep;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Lo(e,1,!1,null,null,n,!1,s,a),e[Wr]=t.current,Un(e.nodeType===8?e.parentNode:e),new Mo(t)},or.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Tl(t),e=e===null?null:e.stateNode,e},or.flushSync=function(e){return Lt(e)},or.hydrate=function(e,t,n){if(!ja(t))throw Error(l(200));return ba(null,e,t,!0,n)},or.hydrateRoot=function(e,t,n){if(!Oo(e))throw Error(l(405));var s=n!=null&&n.hydratedSources||null,a=!1,o="",d=ep;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Jd(t,null,e,1,n!=null?n:null,a,!1,o,d),e[Wr]=t.current,Un(e),s)for(e=0;e<s.length;e++)n=s[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ya(t)},or.render=function(e,t,n){if(!ja(t))throw Error(l(200));return ba(null,e,t,!1,n)},or.unmountComponentAtNode=function(e){if(!ja(e))throw Error(l(40));return e._reactRootContainer?(Lt(function(){ba(null,null,e,!1,function(){e._reactRootContainer=null,e[Wr]=null})}),!0):!1},or.unstable_batchedUpdates=So,or.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!ja(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ba(e,t,n,!1,s)},or.version="18.3.1-next-f1338f8080-20240426",or}var cp;function fx(){if(cp)return Ao.exports;cp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Ao.exports=mx(),Ao.exports}var dp;function gx(){if(dp)return wa;dp=1;var i=fx();return wa.createRoot=i.createRoot,wa.hydrateRoot=i.hydrateRoot,wa}var vx=gx(),ee=el();const mr=cx(ee);var lr=function(){return lr=Object.assign||function(c){for(var l,p=1,m=arguments.length;p<m;p++){l=arguments[p];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},lr.apply(this,arguments)};function za(i,c,l){if(l||arguments.length===2)for(var p=0,m=c.length,j;p<m;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return i.concat(j||Array.prototype.slice.call(c))}var ke="-ms-",cs="-moz-",xe="-webkit-",Pp="comm",Da="rule",rl="decl",yx="@import",jx="@namespace",Ap="@keyframes",bx="@layer",_p=Math.abs,tl=String.fromCharCode,Go=Object.assign;function Nx(i,c){return Be(i,0)^45?(((c<<2^Be(i,0))<<2^Be(i,1))<<2^Be(i,2))<<2^Be(i,3):0}function Fp(i){return i.trim()}function qr(i,c){return(i=c.exec(i))?i[0]:i}function te(i,c,l){return i.replace(c,l)}function ka(i,c,l){return i.indexOf(c,l)}function Be(i,c){return i.charCodeAt(c)|0}function Ft(i,c,l){return i.slice(c,l)}function Mr(i){return i.length}function Bp(i){return i.length}function os(i,c){return c.push(i),i}function wx(i,c){return i.map(c).join("")}function pp(i,c){return i.filter(function(l){return!qr(l,c)})}var Pa=1,xn=1,Wp=0,kr=0,Ae=0,yn="";function Aa(i,c,l,p,m,j,S,z){return{value:i,root:c,parent:l,type:p,props:m,children:j,line:Pa,column:xn,length:S,return:"",siblings:z}}function vt(i,c){return Go(Aa("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function un(i){for(;i.root;)i=vt(i.root,{children:[i]});os(i,i.siblings)}function kx(){return Ae}function Sx(){return Ae=kr>0?Be(yn,--kr):0,xn--,Ae===10&&(xn=1,Pa--),Ae}function Or(){return Ae=kr<Wp?Be(yn,kr++):0,xn++,Ae===10&&(xn=1,Pa++),Ae}function jt(){return Be(yn,kr)}function Sa(){return kr}function _a(i,c){return Ft(yn,i,c)}function us(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ex(i){return Pa=xn=1,Wp=Mr(yn=i),kr=0,[]}function Tx(i){return yn="",i}function Bo(i){return Fp(_a(kr-1,Yo(i===91?i+2:i===40?i+1:i)))}function Cx(i){for(;(Ae=jt())&&Ae<33;)Or();return us(i)>2||us(Ae)>3?"":" "}function Ix(i,c){for(;--c&&Or()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return _a(i,Sa()+(c<6&&jt()==32&&Or()==32))}function Yo(i){for(;Or();)switch(Ae){case i:return kr;case 34:case 39:i!==34&&i!==39&&Yo(Ae);break;case 40:i===41&&Yo(i);break;case 92:Or();break}return kr}function zx(i,c){for(;Or()&&i+Ae!==57;)if(i+Ae===84&&jt()===47)break;return"/*"+_a(c,kr-1)+"*"+tl(i===47?i:Or())}function Lx(i){for(;!us(jt());)Or();return _a(i,kr)}function Rx(i){return Tx(Ea("",null,null,null,[""],i=Ex(i),0,[0],i))}function Ea(i,c,l,p,m,j,S,z,T){for(var Y=0,Q=0,B=S,J=0,le=0,K=0,W=1,V=1,fe=1,de=0,ne="",L=m,X=j,U=p,I=ne;V;)switch(K=de,de=Or()){case 40:if(K!=108&&Be(I,B-1)==58){ka(I+=te(Bo(de),"&","&\f"),"&\f",_p(Y?z[Y-1]:0))!=-1&&(fe=-1);break}case 34:case 39:case 91:I+=Bo(de);break;case 9:case 10:case 13:case 32:I+=Cx(K);break;case 92:I+=Ix(Sa()-1,7);continue;case 47:switch(jt()){case 42:case 47:os(Mx(zx(Or(),Sa()),c,l,T),T),(us(K||1)==5||us(jt()||1)==5)&&Mr(I)&&Ft(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*W:z[Y++]=Mr(I)*fe;case 125*W:case 59:case 0:switch(de){case 0:case 125:V=0;case 59+Q:fe==-1&&(I=te(I,/\f/g,"")),le>0&&(Mr(I)-B||W===0&&K===47)&&os(le>32?hp(I+";",p,l,B-1,T):hp(te(I," ","")+";",p,l,B-2,T),T);break;case 59:I+=";";default:if(os(U=up(I,c,l,Y,Q,m,z,ne,L=[],X=[],B,j),j),de===123)if(Q===0)Ea(I,c,U,U,L,j,B,z,X);else{switch(J){case 99:if(Be(I,3)===110)break;case 108:if(Be(I,2)===97)break;default:Q=0;case 100:case 109:case 115:}Q?Ea(i,U,U,p&&os(up(i,U,U,0,0,m,z,ne,m,L=[],B,X),X),m,X,B,z,p?L:X):Ea(I,U,U,U,[""],X,0,z,X)}}Y=Q=le=0,W=fe=1,ne=I="",B=S;break;case 58:B=1+Mr(I),le=K;default:if(W<1){if(de==123)--W;else if(de==125&&W++==0&&Sx()==125)continue}switch(I+=tl(de),de*W){case 38:fe=Q>0?1:(I+="\f",-1);break;case 44:z[Y++]=(Mr(I)-1)*fe,fe=1;break;case 64:jt()===45&&(I+=Bo(Or())),J=jt(),Q=B=Mr(ne=I+=Lx(Sa())),de++;break;case 45:K===45&&Mr(I)==2&&(W=0)}}return j}function up(i,c,l,p,m,j,S,z,T,Y,Q,B){for(var J=m-1,le=m===0?j:[""],K=Bp(le),W=0,V=0,fe=0;W<p;++W)for(var de=0,ne=Ft(i,J+1,J=_p(V=S[W])),L=i;de<K;++de)(L=Fp(V>0?le[de]+" "+ne:te(ne,/&\f/g,le[de])))&&(T[fe++]=L);return Aa(i,c,l,m===0?Da:z,T,Y,Q,B)}function Mx(i,c,l,p){return Aa(i,c,l,Pp,tl(kx()),Ft(i,2,-2),0,p)}function hp(i,c,l,p,m){return Aa(i,c,l,rl,Ft(i,0,p),Ft(i,p+1,-1),p,m)}function Up(i,c,l){switch(Nx(i,c)){case 5103:return xe+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return xe+i+i;case 4855:return xe+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return cs+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+i+cs+i+ke+i+i;case 5936:switch(Be(i,c+11)){case 114:return xe+i+ke+te(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return xe+i+ke+te(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return xe+i+ke+te(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return xe+i+ke+i+i;case 6165:return xe+i+ke+"flex-"+i+i;case 5187:return xe+i+te(i,/(\w+).+(:[^]+)/,xe+"box-$1$2"+ke+"flex-$1$2")+i;case 5443:return xe+i+ke+"flex-item-"+te(i,/flex-|-self/g,"")+(qr(i,/flex-|baseline/)?"":ke+"grid-row-"+te(i,/flex-|-self/g,""))+i;case 4675:return xe+i+ke+"flex-line-pack"+te(i,/align-content|flex-|-self/g,"")+i;case 5548:return xe+i+ke+te(i,"shrink","negative")+i;case 5292:return xe+i+ke+te(i,"basis","preferred-size")+i;case 6060:return xe+"box-"+te(i,"-grow","")+xe+i+ke+te(i,"grow","positive")+i;case 4554:return xe+te(i,/([^-])(transform)/g,"$1"+xe+"$2")+i;case 6187:return te(te(te(i,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),i,"")+i;case 5495:case 3959:return te(i,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return te(te(i,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+xe+i+i;case 4200:if(!qr(i,/flex-|baseline/))return ke+"grid-column-align"+Ft(i,c)+i;break;case 2592:case 3360:return ke+te(i,"template-","")+i;case 4384:case 3616:return l&&l.some(function(p,m){return c=m,qr(p.props,/grid-\w+-end/)})?~ka(i+(l=l[c].value),"span",0)?i:ke+te(i,"-start","")+i+ke+"grid-row-span:"+(~ka(l,"span",0)?qr(l,/\d+/):+qr(l,/\d+/)-+qr(i,/\d+/))+";":ke+te(i,"-start","")+i;case 4896:case 4128:return l&&l.some(function(p){return qr(p.props,/grid-\w+-start/)})?i:ke+te(te(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return te(i,/(.+)-inline(.+)/,xe+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mr(i)-1-c>6)switch(Be(i,c+1)){case 109:if(Be(i,c+4)!==45)break;case 102:return te(i,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+cs+(Be(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~ka(i,"stretch",0)?Up(te(i,"stretch","fill-available"),c,l)+i:i}break;case 5152:case 5920:return te(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,m,j,S,z,T,Y){return ke+m+":"+j+Y+(S?ke+m+"-span:"+(z?T:+T-+j)+Y:"")+i});case 4949:if(Be(i,c+6)===121)return te(i,":",":"+xe)+i;break;case 6444:switch(Be(i,Be(i,14)===45?18:11)){case 120:return te(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(Be(i,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+ke+"$2box$3")+i;case 100:return te(i,":",":"+ke)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(i,"scroll-","scroll-snap-")+i}return i}function La(i,c){for(var l="",p=0;p<i.length;p++)l+=c(i[p],p,i,c)||"";return l}function Ox(i,c,l,p){switch(i.type){case bx:if(i.children.length)break;case yx:case jx:case rl:return i.return=i.return||i.value;case Pp:return"";case Ap:return i.return=i.value+"{"+La(i.children,p)+"}";case Da:if(!Mr(i.value=i.props.join(",")))return""}return Mr(l=La(i.children,p))?i.return=i.value+"{"+l+"}":""}function Dx(i){var c=Bp(i);return function(l,p,m,j){for(var S="",z=0;z<c;z++)S+=i[z](l,p,m,j)||"";return S}}function Px(i){return function(c){c.root||(c=c.return)&&i(c)}}function Ax(i,c,l,p){if(i.length>-1&&!i.return)switch(i.type){case rl:i.return=Up(i.value,i.length,l);return;case Ap:return La([vt(i,{value:te(i.value,"@","@"+xe)})],p);case Da:if(i.length)return wx(l=i.props,function(m){switch(qr(m,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(vt(i,{props:[te(m,/:(read-\w+)/,":"+cs+"$1")]})),un(vt(i,{props:[m]})),Go(i,{props:pp(l,p)});break;case"::placeholder":un(vt(i,{props:[te(m,/:(plac\w+)/,":"+xe+"input-$1")]})),un(vt(i,{props:[te(m,/:(plac\w+)/,":"+cs+"$1")]})),un(vt(i,{props:[te(m,/:(plac\w+)/,ke+"input-$1")]})),un(vt(i,{props:[m]})),Go(i,{props:pp(l,p)});break}return""})}}var _x={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr={},mn=typeof process!="undefined"&&hr!==void 0&&(hr.REACT_APP_SC_ATTR||hr.SC_ATTR)||"data-styled",$p="active",Hp="data-styled-version",Fa="6.3.10",nl=`/*!sc*/
`,ds=typeof window!="undefined"&&typeof document!="undefined",Fx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==""?hr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.SC_DISABLE_SPEEDY!==void 0&&hr.SC_DISABLE_SPEEDY!==""&&hr.SC_DISABLE_SPEEDY!=="false"&&hr.SC_DISABLE_SPEEDY);function xs(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Ta=new Map,Ra=new Map,Ca=1,ls=function(i){if(Ta.has(i))return Ta.get(i);for(;Ra.has(Ca);)Ca++;var c=Ca++;return Ta.set(i,c),Ra.set(c,i),c},Bx=function(i,c){Ca=c+1,Ta.set(i,c),Ra.set(c,i)},sl=Object.freeze([]),fn=Object.freeze({});function Wx(i,c,l){return l===void 0&&(l=fn),i.theme!==l.theme&&i.theme||c||l.theme}var Qp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Ux=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$x=/(^-|-$)/g;function xp(i){return i.replace(Ux,"-").replace($x,"")}var Hx=/(a)(d)/gi,mp=function(i){return String.fromCharCode(i+(i>25?39:97))};function qo(i){var c,l="";for(c=Math.abs(i);c>52;c=c/52|0)l=mp(c%52)+l;return(mp(c%52)+l).replace(Hx,"$1-$2")}var Wo,Dt=function(i,c){for(var l=c.length;l;)i=33*i^c.charCodeAt(--l);return i},Vp=function(i){return Dt(5381,i)};function Qx(i){return qo(Vp(i)>>>0)}function Vx(i){return i.displayName||i.name||"Component"}function Uo(i){return typeof i=="string"&&!0}var Gp=typeof Symbol=="function"&&Symbol.for,Yp=Gp?Symbol.for("react.memo"):60115,Gx=Gp?Symbol.for("react.forward_ref"):60112,Yx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kx=((Wo={})[Gx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wo[Yp]=qp,Wo);function fp(i){return("type"in(c=i)&&c.type.$$typeof)===Yp?qp:"$$typeof"in i?Kx[i.$$typeof]:Yx;var c}var Xx=Object.defineProperty,Jx=Object.getOwnPropertyNames,gp=Object.getOwnPropertySymbols,Zx=Object.getOwnPropertyDescriptor,em=Object.getPrototypeOf,vp=Object.prototype;function Kp(i,c,l){if(typeof c!="string"){if(vp){var p=em(c);p&&p!==vp&&Kp(i,p,l)}var m=Jx(c);gp&&(m=m.concat(gp(c)));for(var j=fp(i),S=fp(c),z=0;z<m.length;++z){var T=m[z];if(!(T in qx||l&&l[T]||S&&T in S||j&&T in j)){var Y=Zx(c,T);try{Xx(i,T,Y)}catch{}}}}return i}function gn(i){return typeof i=="function"}function al(i){return typeof i=="object"&&"styledComponentId"in i}function At(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function yp(i,c){return i.join("")}function hs(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ko(i,c,l){if(l===void 0&&(l=!1),!l&&!hs(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)i[p]=Ko(i[p],c[p]);else if(hs(c))for(var p in c)i[p]=Ko(i[p],c[p]);return i}function il(i,c){Object.defineProperty(i,"toString",{value:c})}var rm=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return i.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)l+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)l-=this.groupSizes[p];return this._cGroup=c,this._cIndex=l,l},i.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,m=p.length,j=m;c>=j;)if((j<<=1)<0)throw xs(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var S=m;S<j;S++)this.groupSizes[S]=0}for(var z=this.indexOfGroup(c+1),T=0,Y=(S=0,l.length);S<Y;S++)this.tag.insertRule(z,l[S])&&(this.groupSizes[c]++,z++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},i.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),m=p+l;this.groupSizes[c]=0;for(var j=p;j<m;j++)this.tag.deleteRule(p);l>0&&this._cGroup>c&&(this._cIndex-=l)}},i.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],m=this.indexOfGroup(c),j=m+p,S=m;S<j;S++)l+=this.tag.getRule(S)+nl;return l},i})(),tm="style[".concat(mn,"][").concat(Hp,'="').concat(Fa,'"]'),nm=new RegExp("^".concat(mn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jp=function(i){return typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11},Xo=function(i){if(!i)return document;if(jp(i))return i;if("getRootNode"in i){var c=i.getRootNode();if(jp(c))return c}return document},sm=function(i,c,l){for(var p,m=l.split(","),j=0,S=m.length;j<S;j++)(p=m[j])&&i.registerName(c,p)},am=function(i,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(nl),m=[],j=0,S=p.length;j<S;j++){var z=p[j].trim();if(z){var T=z.match(nm);if(T){var Y=0|parseInt(T[1],10),Q=T[2];Y!==0&&(Bx(Q,Y),sm(i,Q,T[3]),i.getTag().insertRules(Y,m)),m.length=0}else m.push(z)}}},$o=function(i){for(var c=Xo(i.options.target).querySelectorAll(tm),l=0,p=c.length;l<p;l++){var m=c[l];m&&m.getAttribute(mn)!==$p&&(am(i,m),m.parentNode&&m.parentNode.removeChild(m))}};function im(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Xp=function(i){var c=document.head,l=i||c,p=document.createElement("style"),m=(function(z){var T=Array.from(z.querySelectorAll("style[".concat(mn,"]")));return T[T.length-1]})(l),j=m!==void 0?m.nextSibling:null;p.setAttribute(mn,$p),p.setAttribute(Hp,Fa);var S=im();return S&&p.setAttribute("nonce",S),l.insertBefore(p,j),p},om=(function(){function i(c){this.element=Xp(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var p;if(l.sheet)return l.sheet;for(var m=(p=l.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,j=0,S=m.length;j<S;j++){var z=m[j];if(z.ownerNode===l)return z}throw xs(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},i})(),lm=(function(){function i(c){this.element=Xp(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),cm=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),bp=ds,dm={isServer:!ds,useCSSOMInjection:!Fx},Jp=(function(){function i(c,l,p){c===void 0&&(c=fn),l===void 0&&(l={});var m=this;this.options=lr(lr({},dm),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&ds&&bp&&(bp=!1,$o(this)),il(this,function(){return(function(j){for(var S=j.getTag(),z=S.length,T="",Y=function(B){var J=(function(fe){return Ra.get(fe)})(B);if(J===void 0)return"continue";var le=j.names.get(J);if(le===void 0||!le.size)return"continue";var K=S.getGroup(B);if(K.length===0)return"continue";var W=mn+".g"+B+'[id="'+J+'"]',V="";le.forEach(function(fe){fe.length>0&&(V+=fe+",")}),T+=K+W+'{content:"'+V+'"}'+nl},Q=0;Q<z;Q++)Y(Q);return T})(m)})}return i.registerId=function(c){return ls(c)},i.prototype.rehydrate=function(){!this.server&&ds&&$o(this)},i.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var p=new i(lr(lr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&ds&&c.target!==this.options.target&&Xo(this.options.target)!==Xo(c.target)&&$o(p),p},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,m=l.target;return l.isServer?new cm(m):p?new om(m):new lm(m)})(this.options),new rm(c)));var c},i.prototype.hasNameForId=function(c,l){var p,m;return(m=(p=this.names.get(c))===null||p===void 0?void 0:p.has(l))!==null&&m!==void 0&&m},i.prototype.registerName=function(c,l){ls(c);var p=this.names.get(c);p?p.add(l):this.names.set(c,new Set([l]))},i.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(ls(c),p)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(ls(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),pm=/&/g,Kr=47,Pt=42;function Np(i){if(i.indexOf("}")===-1)return!1;for(var c=i.length,l=0,p=0,m=!1,j=0;j<c;j++){var S=i.charCodeAt(j);if(p!==0||m||S!==Kr||i.charCodeAt(j+1)!==Pt)if(m)S===Pt&&i.charCodeAt(j+1)===Kr&&(m=!1,j++);else if(S!==34&&S!==39||j!==0&&i.charCodeAt(j-1)===92){if(p===0){if(S===123)l++;else if(S===125&&--l<0)return!0}}else p===0?p=S:p===S&&(p=0);else m=!0,j++}return l!==0||p!==0}function Zp(i,c){return i.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Zp(l.children,c)),l})}function um(i){var c,l,p,m=fn,j=m.options,S=j===void 0?fn:j,z=m.plugins,T=z===void 0?sl:z,Y=function(K,W,V){return V.startsWith(l)&&V.endsWith(l)&&V.replaceAll(l,"").length>0?".".concat(c):K},Q=T.slice();Q.push(function(K){K.type===Da&&K.value.includes("&")&&(p||(p=new RegExp("\\".concat(l,"\\b"),"g")),K.props[0]=K.props[0].replace(pm,l).replace(p,Y))}),S.prefix&&Q.push(Ax),Q.push(Ox);var B=[],J=Dx(Q.concat(Px(function(K){return B.push(K)}))),le=function(K,W,V,fe){W===void 0&&(W=""),V===void 0&&(V=""),fe===void 0&&(fe="&"),c=fe,l=W,p=void 0;var de=(function(L){if(!Np(L))return L;for(var X=L.length,U="",I=0,A=0,ye=0,Me=!1,ie=0;ie<X;ie++){var Le=L.charCodeAt(ie);if(ye!==0||Me||Le!==Kr||L.charCodeAt(ie+1)!==Pt)if(Me)Le===Pt&&L.charCodeAt(ie+1)===Kr&&(Me=!1,ie++);else if(Le!==34&&Le!==39||ie!==0&&L.charCodeAt(ie-1)===92){if(ye===0)if(Le===123)A++;else if(Le===125){if(--A<0){for(var Ee=ie+1;Ee<X;){var Ge=L.charCodeAt(Ee);if(Ge===59||Ge===10)break;Ee++}Ee<X&&L.charCodeAt(Ee)===59&&Ee++,A=0,ie=Ee-1,I=Ee;continue}A===0&&(U+=L.substring(I,ie+1),I=ie+1)}else Le===59&&A===0&&(U+=L.substring(I,ie+1),I=ie+1)}else ye===0?ye=Le:ye===Le&&(ye=0);else Me=!0,ie++}if(I<X){var Ze=L.substring(I);Np(Ze)||(U+=Ze)}return U})((function(L){if(L.indexOf("//")===-1)return L;for(var X=L.length,U=[],I=0,A=0,ye=0,Me=0;A<X;){var ie=L.charCodeAt(A);if(ie!==34&&ie!==39||A!==0&&L.charCodeAt(A-1)===92)if(ye===0)if(ie===Kr&&A+1<X&&L.charCodeAt(A+1)===Pt){for(A+=2;A+1<X&&(L.charCodeAt(A)!==Pt||L.charCodeAt(A+1)!==Kr);)A++;A+=2}else if(ie===40&&A>=3&&(32|L.charCodeAt(A-1))==108&&(32|L.charCodeAt(A-2))==114&&(32|L.charCodeAt(A-3))==117)Me=1,A++;else if(Me>0)ie===41?Me--:ie===40&&Me++,A++;else if(ie===Pt&&A+1<X&&L.charCodeAt(A+1)===Kr)A>I&&U.push(L.substring(I,A)),I=A+=2;else if(ie===Kr&&A+1<X&&L.charCodeAt(A+1)===Kr){for(A>I&&U.push(L.substring(I,A));A<X&&L.charCodeAt(A)!==10;)A++;I=A}else A++;else A++;else ye===0?ye=ie:ye===ie&&(ye=0),A++}return I===0?L:(I<X&&U.push(L.substring(I)),U.join(""))})(K)),ne=Rx(V||W?"".concat(V," ").concat(W," { ").concat(de," }"):de);return S.namespace&&(ne=Zp(ne,S.namespace)),B=[],La(ne,J),B};return le.hash=T.length?T.reduce(function(K,W){return W.name||xs(15),Dt(K,W.name)},5381).toString():"",le}var hm=new Jp,Jo=um(),eu=mr.createContext({shouldForwardProp:void 0,styleSheet:hm,stylis:Jo});eu.Consumer;mr.createContext(void 0);function wp(){return mr.useContext(eu)}var xm=(function(){function i(c,l){var p=this;this.inject=function(m,j){j===void 0&&(j=Jo);var S=p.name+j.hash;m.hasNameForId(p.id,S)||m.insertRules(p.id,S,j(p.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,il(this,function(){throw xs(12,String(p.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=Jo),this.name+c.hash},i})();function mm(i,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||i in _x||i.startsWith("--")?String(c).trim():"".concat(c,"px")}var fm=function(i){return i>="A"&&i<="Z"};function kp(i){for(var c="",l=0;l<i.length;l++){var p=i[l];if(l===1&&p==="-"&&i[0]==="-")return i;fm(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var ru=function(i){return i==null||i===!1||i===""},tu=function(i){var c=[];for(var l in i){var p=i[l];i.hasOwnProperty(l)&&!ru(p)&&(Array.isArray(p)&&p.isCss||gn(p)?c.push("".concat(kp(l),":"),p,";"):hs(p)?c.push.apply(c,za(za(["".concat(l," {")],tu(p),!1),["}"],!1)):c.push("".concat(kp(l),": ").concat(mm(l,p),";")))}return c};function _t(i,c,l,p,m){if(m===void 0&&(m=[]),typeof i=="string")return i&&m.push(i),m;if(ru(i))return m;if(al(i))return m.push(".".concat(i.styledComponentId)),m;if(gn(i)){if(!gn(S=i)||S.prototype&&S.prototype.isReactComponent||!c)return m.push(i),m;var j=i(c);return _t(j,c,l,p,m)}var S;if(i instanceof xm)return l?(i.inject(l,p),m.push(i.getName(p))):m.push(i),m;if(hs(i)){for(var z=tu(i),T=0;T<z.length;T++)m.push(z[T]);return m}if(!Array.isArray(i))return m.push(i.toString()),m;for(T=0;T<i.length;T++)_t(i[T],c,l,p,m);return m}function gm(i){for(var c=0;c<i.length;c+=1){var l=i[c];if(gn(l)&&!al(l))return!1}return!0}var vm=Vp(Fa),ym=(function(){function i(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&gm(c),this.componentId=l,this.baseHash=Dt(vm,l),this.baseStyle=p,Jp.registerId(l)}return i.prototype.generateAndInjectStyles=function(c,l,p){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))m=At(m,this.staticRulesId);else{var j=yp(_t(this.rules,c,l,p)),S=qo(Dt(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,S)){var z=p(j,".".concat(S),void 0,this.componentId);l.insertRules(this.componentId,S,z)}m=At(m,S),this.staticRulesId=S}else{for(var T=Dt(this.baseHash,p.hash),Y="",Q=0;Q<this.rules.length;Q++){var B=this.rules[Q];if(typeof B=="string")Y+=B;else if(B){var J=yp(_t(B,c,l,p));T=Dt(Dt(T,String(Q)),J),Y+=J}}if(Y){var le=qo(T>>>0);if(!l.hasNameForId(this.componentId,le)){var K=p(Y,".".concat(le),void 0,this.componentId);l.insertRules(this.componentId,le,K)}m=At(m,le)}}return{className:m,css:typeof window=="undefined"?l.getTag().getGroup(ls(this.componentId)):""}},i})(),nu=mr.createContext(void 0);nu.Consumer;var Ho={};function jm(i,c,l){var p=al(i),m=i,j=!Uo(i),S=c.attrs,z=S===void 0?sl:S,T=c.componentId,Y=T===void 0?(function(L,X){var U=typeof L!="string"?"sc":xp(L);Ho[U]=(Ho[U]||0)+1;var I="".concat(U,"-").concat(Qx(Fa+U+Ho[U]));return X?"".concat(X,"-").concat(I):I})(c.displayName,c.parentComponentId):T,Q=c.displayName,B=Q===void 0?(function(L){return Uo(L)?"styled.".concat(L):"Styled(".concat(Vx(L),")")})(i):Q,J=c.displayName&&c.componentId?"".concat(xp(c.displayName),"-").concat(c.componentId):c.componentId||Y,le=p&&m.attrs?m.attrs.concat(z).filter(Boolean):z,K=c.shouldForwardProp;if(p&&m.shouldForwardProp){var W=m.shouldForwardProp;if(c.shouldForwardProp){var V=c.shouldForwardProp;K=function(L,X){return W(L,X)&&V(L,X)}}else K=W}var fe=new ym(l,J,p?m.componentStyle:void 0);function de(L,X){return(function(U,I,A){var ye=U.attrs,Me=U.componentStyle,ie=U.defaultProps,Le=U.foldedComponentIds,Ee=U.styledComponentId,Ge=U.target,Ze=mr.useContext(nu),Ye=wp(),je=U.shouldForwardProp||Ye.shouldForwardProp,C=Wx(I,Ze,ie)||fn,F=(function(ae,pe,ce){for(var ge,Ce=lr(lr({},pe),{className:void 0,theme:ce}),Jr=0;Jr<ae.length;Jr+=1){var bt=gn(ge=ae[Jr])?ge(Ce):ge;for(var Sr in bt)Sr==="className"?Ce.className=At(Ce.className,bt[Sr]):Sr==="style"?Ce.style=lr(lr({},Ce.style),bt[Sr]):Ce[Sr]=bt[Sr]}return"className"in pe&&typeof pe.className=="string"&&(Ce.className=At(Ce.className,pe.className)),Ce})(ye,I,C),R=F.as||Ge,f={};for(var b in F)F[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&F.theme===C||(b==="forwardedAs"?f.as=F.forwardedAs:je&&!je(b,R)||(f[b]=F[b]));var Z=(function(ae,pe){var ce=wp(),ge=ae.generateAndInjectStyles(pe,ce.styleSheet,ce.stylis);return ge})(Me,F),re=Z.className,oe=At(Le,Ee);return re&&(oe+=" "+re),F.className&&(oe+=" "+F.className),f[Uo(R)&&!Qp.has(R)?"class":"className"]=oe,A&&(f.ref=A),ee.createElement(R,f)})(ne,L,X)}de.displayName=B;var ne=mr.forwardRef(de);return ne.attrs=le,ne.componentStyle=fe,ne.displayName=B,ne.shouldForwardProp=K,ne.foldedComponentIds=p?At(m.foldedComponentIds,m.styledComponentId):"",ne.styledComponentId=J,ne.target=p?m.target:i,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=p?(function(X){for(var U=[],I=1;I<arguments.length;I++)U[I-1]=arguments[I];for(var A=0,ye=U;A<ye.length;A++)Ko(X,ye[A],!0);return X})({},m.defaultProps,L):L}}),il(ne,function(){return".".concat(ne.styledComponentId)}),j&&Kp(ne,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function Sp(i,c){for(var l=[i[0]],p=0,m=c.length;p<m;p+=1)l.push(c[p],i[p+1]);return l}var Ep=function(i){return Object.assign(i,{isCss:!0})};function bm(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(gn(i)||hs(i))return Ep(_t(Sp(sl,za([i],c,!0))));var p=i;return c.length===0&&p.length===1&&typeof p[0]=="string"?_t(p):Ep(_t(Sp(p,c)))}function Zo(i,c,l){if(l===void 0&&(l=fn),!c)throw xs(1,c);var p=function(m){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];return i(c,l,bm.apply(void 0,za([m],j,!1)))};return p.attrs=function(m){return Zo(i,c,lr(lr({},l),{attrs:Array.prototype.concat(l.attrs,m).filter(Boolean)}))},p.withConfig=function(m){return Zo(i,c,lr(lr({},l),m))},p}var su=function(i){return Zo(jm,i)},Se=su;Qp.forEach(function(i){Se[i]=su(i)});const Qo={Wrapper:Se.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:Se.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:Se.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Tp={Wrapper:Se.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-bg) 88%,
            var(--color-surface)
        );

        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;

        box-shadow: 0 10px 30px var(--color-shadow);

        /* DB vibe: query glow strip */
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle "table grid" texture */
        &::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 45%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 45%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.85),
                rgba(0, 0, 0, 0)
            );
        }
    `,Main:Se.div`
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
            position: relative;
            z-index: 1;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background-color: #000;

            border: 1px solid var(--color-border);

            /* DB ring + subtle glow */
            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                0 14px 30px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.05) contrast(1.02);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 22%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 18%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;

                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: linear-gradient(
                    180deg,
                    color-mix(in srgb, var(--color-surface) 92%, transparent),
                    color-mix(in srgb, var(--color-surface-2) 78%, #000)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Nm="/dbms-core-notes/images/transparentLogo.png";var au={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cp=mr.createContext&&mr.createContext(au),wm=["attr","size","title"];function km(i,c){if(i==null)return{};var l=Sm(i,c),p,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(i);for(m=0;m<j.length;m++)p=j[m],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(i,p)&&(l[p]=i[p])}return l}function Sm(i,c){if(i==null)return{};var l={};for(var p in i)if(Object.prototype.hasOwnProperty.call(i,p)){if(c.indexOf(p)>=0)continue;l[p]=i[p]}return l}function Ma(){return Ma=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},Ma.apply(this,arguments)}function Ip(i,c){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);c&&(p=p.filter(function(m){return Object.getOwnPropertyDescriptor(i,m).enumerable})),l.push.apply(l,p)}return l}function Oa(i){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Ip(Object(l),!0).forEach(function(p){Em(i,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):Ip(Object(l)).forEach(function(p){Object.defineProperty(i,p,Object.getOwnPropertyDescriptor(l,p))})}return i}function Em(i,c,l){return c=Tm(c),c in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,i}function Tm(i){var c=Cm(i,"string");return typeof c=="symbol"?c:c+""}function Cm(i,c){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var p=l.call(i,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function iu(i){return i&&i.map((c,l)=>mr.createElement(c.tag,Oa({key:l},c.attr),iu(c.child)))}function q(i){return c=>mr.createElement(Im,Ma({attr:Oa({},i.attr)},c),iu(i.child))}function Im(i){var c=l=>{var{attr:p,size:m,title:j}=i,S=km(i,wm),z=m||l.size||"1em",T;return l.className&&(T=l.className),i.className&&(T=(T?T+" ":"")+i.className),mr.createElement("svg",Ma({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,S,{className:T,style:Oa(Oa({color:i.color||l.color},l.style),i.style),height:z,width:z,xmlns:"http://www.w3.org/2000/svg"}),j&&mr.createElement("title",null,j),i.children)};return Cp!==void 0?mr.createElement(Cp.Consumer,null,l=>c(l)):c(au)}function jn(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function zm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"polyline",attr:{points:"19 12 12 19 5 12"},child:[]}]})(i)}function zp(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(i)}function Lp(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(i)}function Lm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function ol(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(i)}function Ve(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function Rp(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"},child:[]}]})(i)}function Rm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(i)}function Ia(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(i)}function ou(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(i)}function Br(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function Mm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(i)}function Om(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(i)}function vn(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(i)}function Mp(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(i)}function Dm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(i)}function yt(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(i)}function Vo(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function fr(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function ps(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(i)}function ll(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(i)}function Pm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function Am(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 16 12 14 15 10 15 8 12 2 12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]}]})(i)}function _m(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(i)}function Xr(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(i)}function me(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function Ba(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function hn(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function Fm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(i)}function Bm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function Wm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(i)}function lu(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(i)}function Op(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function wr(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(i)}function Um(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(i)}function cu(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(i)}function xr(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function $m(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function Dp(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(i)}function Hm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function du(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(i)}function Qm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(i)}function pu(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(i)}function Vm(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(i)}function uu(i){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}const Gm=()=>{const[i,c]=ee.useState(!1),[l,p]=ee.useState("dark");ee.useEffect(()=>{const z=localStorage.getItem("app-theme")||"dark";p(z),z==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ee.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const m=ee.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{p(m)};return r.jsx(Tp.Wrapper,{children:r.jsx(Tp.Main,{children:r.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsxs("div",{className:"logoWrapper",children:[!i&&r.jsx("div",{className:"logoSkeleton"}),r.jsx("img",{src:Nm,alt:"dbms-core-notes",onLoad:()=>c(!0),style:{opacity:i?1:0}})]}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"dbms-core-notes"}),r.jsx("div",{className:"subTitle",children:"At-a-glance DBMS revision"})]})]}),r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[r.jsx("span",{className:"icon",children:l==="light"?r.jsx(Bm,{}):r.jsx(Hm,{})}),r.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},Ym={Wrapper:Se.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},qm=()=>r.jsxs(Ym.Wrapper,{children:[r.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),r.jsxs("div",{className:"right",children:["By ",r.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Km={Wrapper:Se.section`
        width: 100%;
        padding: 18px 0 6px;

        .top {
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            letter-spacing: 0.2px;
            margin-bottom: 6px;
        }

        .sub {
            max-width: 980px;
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            margin-bottom: 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 4;
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
        }

        .icon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 15px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .note {
            margin-top: 4px;
            font-size: 12.5px;
            color: var(--color-text-muted);
            position: relative;
            z-index: 1;
            line-height: 1.6;
        }

        .list {
            display: grid;
            gap: 8px;
            position: relative;
            z-index: 1;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `},Xm=()=>r.jsxs(Km.Wrapper,{id:"aboutDbms",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"DBMS"}),r.jsx("p",{className:"sub",children:"A DBMS is a Database Management System. It is the software layer that stores data in an organized way and helps you read and update it safely. Instead of scattered files, you get tables, constraints, indexes, and queries that behave predictably under real load."}),r.jsx("p",{className:"sub",children:"The main value is control. A DBMS manages data integrity using keys and constraints, reduces duplication using normalization, and supports powerful searching using SQL. When many users work at the same time, transactions and locks make sure updates remain correct."}),r.jsx("p",{className:"sub",children:"This page is built for revision. You will scan core ideas like ER model, SQL, joins, normalization, ACID, concurrency, indexing, recovery, and basic distributed concepts, with a clear mental model of what happens inside a database engine."})]}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(Br,{})}),r.jsx("h3",{className:"h3",children:"Think in data"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Tables"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Keys"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Constraints"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Indexes"})]}),r.jsx("p",{className:"note",children:"Tables store rows. Keys define identity. Constraints keep data valid. Indexes make queries fast."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Think in queries"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"SELECT"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"JOIN"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"GROUP BY"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"HAVING"})]}),r.jsx("p",{className:"note",children:"Query order: filter, join, group, aggregate, sort, limit. Learn this to debug SQL quickly."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(xr,{})}),r.jsx("h3",{className:"h3",children:"Think in safety"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"ACID keeps transactions correct under failures and concurrency"}),r.jsx("li",{children:"Isolation levels control dirty reads and phantom reads"}),r.jsx("li",{children:"Logs and checkpoints help crash recovery"}),r.jsx("li",{children:"Backups protect from human mistakes and data loss"})]})]})]})]}),Jm={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .exList {
            display: grid;
            gap: 6px;
        }

        .exList li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.45;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .compare {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .row.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .row.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .row div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .schema {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .sRow {
            display: grid;
            grid-template-columns: 1fr 1.2fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .sRow:first-child {
            border-top: 0;
        }

        .sRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .sRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .sRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 1fr;
            }

            .sRow {
                grid-template-columns: 1fr;
            }
        }
    `},Zm=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"databaseFundamentals",title:"Database Fundamentals",sub:"Data, database, DBMS, why we use it, file system vs DBMS, data independence, and 3 schema architecture."}),[]);return r.jsxs(Jm.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Br,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Basics"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(_m,{})}),r.jsx("h3",{className:"h3",children:"What is data"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Data"})," is raw facts and values that can be stored and processed. It can be numbers, text, dates, images, clicks, sensor readings, or any measurable information."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:'"Ashish"'}),r.jsx("li",{children:"98"}),r.jsx("li",{children:'"2026-03-01"'}),r.jsx("li",{children:'"Order placed"'})]})]}),r.jsx("p",{className:"note",children:"Data becomes useful when it is organized and connected to meaning, then it becomes information."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"What is database"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"database"})," is an organized collection of related data stored so it can be searched, updated, and managed efficiently."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"Student records for a school"}),r.jsx("li",{children:"Orders and customers for an eCommerce app"}),r.jsx("li",{children:"Transactions for a banking system"})]})]}),r.jsx("p",{className:"note",children:"A database is the data. DBMS is the software that manages it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Br,{})}),r.jsx("h3",{className:"h3",children:"DBMS full form"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"DBMS"})," stands for"," ",r.jsx("b",{children:"Database Management System"}),". It is software that helps you create, store, retrieve, update, and secure data in a database."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Store"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Query"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Update"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Secure"})]}),r.jsx("p",{className:"note",children:"Popular DBMS examples: MySQL, PostgreSQL, Oracle, SQL Server."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Um,{})}),r.jsx("h3",{className:"h3",children:"Why DBMS is needed"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Store large data reliably and access it fast"}),r.jsx("li",{children:"Handle multiple users at the same time safely"}),r.jsx("li",{children:"Reduce duplication and keep data consistent"}),r.jsx("li",{children:"Provide security and access control"}),r.jsx("li",{children:"Provide backup and recovery"})]}),r.jsx("p",{className:"note",children:"Without a DBMS, apps become fragile when data grows and multiple users start writing together."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vn,{})}),r.jsx("h3",{className:"h3",children:"File system vs DBMS"})]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"File system"}),r.jsx("div",{children:"DBMS"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Data stored in separate files like CSV, text, or custom formats"}),r.jsx("div",{children:"Data stored with structure like tables, relationships, indexes"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Searching and updates become manual or slow when data grows"}),r.jsx("div",{children:"SQL and query engine makes searching and updates efficient"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Concurrency is hard, risk of overwriting changes"}),r.jsx("div",{children:"Transactions and locking handle concurrent users safely"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Weak security model, hard to control access properly"}),r.jsx("div",{children:"Roles and permissions control who can read or write"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Backup and recovery is manual and error-prone"}),r.jsx("div",{children:"Built-in logging, recovery, and backup strategies"})]})]}),r.jsx("p",{className:"note",children:"File system works for small simple apps. DBMS is needed for real multi-user applications."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xr,{})}),r.jsx("h3",{className:"h3",children:"Advantages of DBMS"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Reduced redundancy using good design"}),r.jsx("li",{children:"Improved consistency using constraints"}),r.jsx("li",{children:"Security using authentication and authorization"}),r.jsx("li",{children:"Concurrency support using transactions"}),r.jsx("li",{children:"Backup and recovery support"}),r.jsx("li",{children:"Better data sharing across applications"})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Data independence"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Data independence"})," means changing the database structure at one level without breaking the level above it. This is a big reason DBMS is preferred."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Physical data independence"}),r.jsxs("div",{className:"v",children:["Change storage details without changing logical structure.",r.jsx("span",{className:"small",children:"Example: move data from HDD to SSD, change indexing method, file layout changes."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Logical data independence"}),r.jsxs("div",{className:"v",children:["Change logical design without changing user views.",r.jsx("span",{className:"small",children:"Example: split one table into two tables, add new attributes, create a view to keep old output."})]})]})]}),r.jsx("p",{className:"note",children:"Logical data independence is harder to achieve than physical."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Three schema architecture"})]}),r.jsx("p",{className:"p",children:"Three schema architecture separates how data is stored, how it is logically designed, and how users see it. This supports data independence."}),r.jsxs("div",{className:"schema",children:[r.jsxs("div",{className:"sRow head",children:[r.jsx("div",{className:"c1",children:"Schema"}),r.jsx("div",{className:"c2",children:"What it means"}),r.jsx("div",{className:"c3",children:"Example"})]}),r.jsxs("div",{className:"sRow",children:[r.jsx("div",{className:"c1",children:"Internal schema"}),r.jsx("div",{className:"c2",children:"Physical storage details and access paths"}),r.jsx("div",{className:"c3",children:"File layout, indexes, page structure"})]}),r.jsxs("div",{className:"sRow",children:[r.jsx("div",{className:"c1",children:"Conceptual schema"}),r.jsx("div",{className:"c2",children:"Logical structure of the entire database"}),r.jsx("div",{className:"c3",children:"Tables, relations, constraints"})]}),r.jsxs("div",{className:"sRow",children:[r.jsx("div",{className:"c1",children:"External schema"}),r.jsx("div",{className:"c2",children:"User-specific views of data"}),r.jsx("div",{className:"c3",children:'Views like "studentSummary", "billingView"'})]})]}),r.jsx("p",{className:"note",children:"Memory trick: external is what users see, conceptual is the full logical design, internal is how it is stored."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Br,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Database is data. DBMS is the manager. Three schemas separate storage, design, and views."})]})]})]})})]})},ef={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.8px;
            color: var(--color-text-secondary);
            line-height: 1.5;
            word-break: break-word;
        }

        .exList {
            display: grid;
            gap: 6px;
        }

        .exList li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.45;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},rf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"dataModels",title:"Data Models",sub:"Meaning of data model and the major types - hierarchical, network, relational, object-oriented, and ER model."}),[]);return r.jsxs(ef.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(me,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Models"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Data model meaning"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"data model"})," is a structured way to describe how data is organized, related, stored, and accessed. It defines the rules for data structure and relationships so systems and humans can understand the same data design."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Structure"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Relationships"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Constraints"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Operations"})]}),r.jsx("p",{className:"note",children:"Example: In a shopping app, customers place orders. Orders contain items. A data model decides how these are represented and linked."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Hierarchical model"})]}),r.jsxs("p",{className:"p",children:["Data is organized like a ",r.jsx("b",{children:"tree"}),". One parent can have many children, but each child has only one parent."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Mental model"}),r.jsx("div",{className:"mono",children:"Company - Department - Employee"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Good for strict 1-to-many relationships"}),r.jsx("li",{children:"Hard when you need many-to-many relationships"})]}),r.jsx("p",{className:"note",children:'Think "folder structure" style data.'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(cu,{})}),r.jsx("h3",{className:"h3",children:"Network model"})]}),r.jsxs("p",{className:"p",children:["Data is organized as a ",r.jsx("b",{children:"graph"}),". A record can have multiple parents and multiple children. This supports many-to-many naturally."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Mental model"}),r.jsx("div",{className:"mono",children:"Student - EnrolledIn - Course"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Handles complex relationships well"}),r.jsx("li",{children:"More complex to design and query than relational"})]}),r.jsx("p",{className:"note",children:'Think "connected nodes" style data.'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"Relational model"})]}),r.jsxs("p",{className:"p",children:["Data is stored in ",r.jsx("b",{children:"tables"})," (relations). Rows are tuples and columns are attributes. Relationships are formed using keys."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example tables"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"customers(customerId, name)"}),r.jsx("li",{children:"orders(orderId, customerId, total)"})]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Most popular model used in real systems"}),r.jsx("li",{children:"SQL makes queries powerful and standard"})]}),r.jsx("p",{className:"note",children:"Relationships are typically built using foreign keys."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Lm,{})}),r.jsx("h3",{className:"h3",children:"Object-oriented model"})]}),r.jsxs("p",{className:"p",children:["Data is stored as ",r.jsx("b",{children:"objects"})," similar to OOP. Objects contain both data and behavior. It fits naturally with languages that use classes."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsxs("div",{className:"mono",children:["class Order ","{"," items, total, place()"," ","}"]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Useful for complex data like CAD, multimedia, simulations"}),r.jsx("li",{children:"Less common than relational in typical business apps"})]}),r.jsx("p",{className:"note",children:"Object relational mapping tries to bridge OOP and relational DBs."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(yt,{})}),r.jsx("h3",{className:"h3",children:"Entity-Relationship model - ER model basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"ER model"})," is a conceptual model used to design a database before writing tables. It uses",r.jsx("b",{children:"entities"}),", ",r.jsx("b",{children:"attributes"}),", and",r.jsx("b",{children:"relationships"})," to represent real-world data."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Entity"}),r.jsxs("div",{className:"v",children:["A real-world object or concept.",r.jsx("span",{className:"small",children:"Example: Student, Customer, Product"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Attribute"}),r.jsxs("div",{className:"v",children:["Properties of an entity.",r.jsx("span",{className:"small",children:"Example: Student has name, rollNo"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Relationship"}),r.jsxs("div",{className:"v",children:["How entities are connected.",r.jsx("span",{className:"small",children:"Example: Customer places Order"})]})]})]}),r.jsx("p",{className:"note",children:"ER model helps you get the logic correct first, then you convert it into tables."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(me,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Hierarchical is tree, network is graph, relational is tables, object-oriented is objects, ER is design blueprint."})]})]})]})})]})},tf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .exList {
            display: grid;
            gap: 6px;
        }

        .exList li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.45;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .mapRules {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .mRow {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .mRow:first-child {
            border-top: 0;
        }

        .mRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .mRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .mRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .mRow {
                grid-template-columns: 1fr;
            }
        }
    `},nf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"erModel",title:"ER Model",sub:"Entity, attributes, keys, weak entities, relationships, cardinality, participation, and ER to relational mapping rules."}),[]);return r.jsxs(tf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(fr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Design"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Entity"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"entity"})," is a real-world object or concept that you want to store data about."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"Student"}),r.jsx("li",{children:"Customer"}),r.jsx("li",{children:"Order"}),r.jsx("li",{children:"Employee"})]})]}),r.jsx("p",{className:"note",children:"In relational DBs, entities usually become tables."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(du,{})}),r.jsx("h3",{className:"h3",children:"Attribute"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"attribute"})," is a property that describes an entity. Attributes become columns in a table."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("ul",{className:"exList",children:r.jsx("li",{children:"Student has name, rollNo, dob, phone"})})]}),r.jsx("p",{className:"note",children:"Attribute types matter because they change how we map to tables."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Lp,{})}),r.jsx("h3",{className:"h3",children:"Attribute types"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Simple"}),r.jsxs("div",{className:"v",children:["Cannot be broken into smaller parts.",r.jsx("span",{className:"small",children:"Example: age, salary, rollNo"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Composite"}),r.jsxs("div",{className:"v",children:["Can be broken into sub-parts.",r.jsx("span",{className:"small",children:"Example: name -> firstName, lastName. address -> city, state, pincode"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Multivalued"}),r.jsxs("div",{className:"v",children:["Can have multiple values for a single entity.",r.jsx("span",{className:"small",children:"Example: phoneNumbers, skills, emailAddresses"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Derived"}),r.jsxs("div",{className:"v",children:["Computed from other attributes.",r.jsx("span",{className:"small",children:"Example: age derived from dateOfBirth. totalAmount derived from orderItems"})]})]})]}),r.jsx("p",{className:"note",children:"Composite attributes often become multiple columns. Multivalued attributes usually become a separate table."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xr,{})}),r.jsx("h3",{className:"h3",children:"Primary key"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"primary key"})," is an attribute or set of attributes that uniquely identifies an entity instance."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"studentId uniquely identifies a student"}),r.jsx("li",{children:"orderId uniquely identifies an order"})]})]}),r.jsx("p",{className:"note",children:"Primary key must be unique and not null."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ou,{})}),r.jsx("h3",{className:"h3",children:"Weak entity"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"weak entity"})," cannot be uniquely identified by its own attributes alone. It depends on an owner (strong entity) for identification."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("ul",{className:"exList",children:r.jsx("li",{children:"Dependent depends on Employee. Dependent is identified by (employeeId, dependentName)."})})]}),r.jsx("p",{className:"note",children:"Weak entity typically uses a composite primary key including owner key."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ba,{})}),r.jsx("h3",{className:"h3",children:"Relationship"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"relationship"})," describes how two or more entities are connected. It can also have its own attributes."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"Student enrolls in Course"}),r.jsx("li",{children:"Customer places Order"}),r.jsx("li",{children:"Employee works in Department"})]})]}),r.jsx("p",{className:"note",children:"Many-to-many relationships usually become a separate table."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Cardinality"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Cardinality"})," defines how many instances of one entity can be associated with instances of another entity."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"1:1"}),r.jsxs("div",{className:"v",children:["One to one",r.jsx("span",{className:"small",children:"Example: Person - Passport (one person has one passport)"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"1:N"}),r.jsxs("div",{className:"v",children:["One to many",r.jsx("span",{className:"small",children:"Example: Department - Employees (one department has many employees)"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"M:N"}),r.jsxs("div",{className:"v",children:["Many to many",r.jsx("span",{className:"small",children:"Example: Students - Courses (many students take many courses)"})]})]})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Participation"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Participation"})," tells whether an entity must be part of a relationship or not."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Total participation"}),r.jsxs("div",{className:"v",children:["Every entity instance must participate.",r.jsx("span",{className:"small",children:"Example: Every Order must be placed by a Customer."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Partial participation"}),r.jsxs("div",{className:"v",children:["Participation is optional for some instances.",r.jsx("span",{className:"small",children:"Example: A Customer may have zero Orders."})]})]})]}),r.jsx("p",{className:"note",children:"Total means mandatory. Partial means optional."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Lp,{})}),r.jsx("h3",{className:"h3",children:"ER to relational mapping rules"})]}),r.jsxs("div",{className:"mapRules",children:[r.jsxs("div",{className:"mRow head",children:[r.jsx("div",{className:"c1",children:"ER concept"}),r.jsx("div",{className:"c2",children:"Relational mapping"})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Strong entity"}),r.jsx("div",{className:"c2",children:"Create a table with columns for attributes. Choose primary key."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Composite attribute"}),r.jsx("div",{className:"c2",children:"Break into multiple columns (address -> city, state, pincode)."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Multivalued attribute"}),r.jsx("div",{className:"c2",children:"Create a separate table with (ownerPK, attributeValue)."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Derived attribute"}),r.jsx("div",{className:"c2",children:"Usually not stored, computed when needed (age from dob)."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"1:1 relationship"}),r.jsx("div",{className:"c2",children:"Put a foreign key in one table. Prefer FK on total participation side. Add unique constraint."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"1:N relationship"}),r.jsx("div",{className:"c2",children:'Put foreign key of "1 side" into "N side" table.'})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"M:N relationship"}),r.jsx("div",{className:"c2",children:"Create a new table with both primary keys as foreign keys, plus relationship attributes."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Weak entity"}),r.jsx("div",{className:"c2",children:"Create a table with owner PK as FK. Primary key is (ownerPK + partialKey)."})]})]}),r.jsx("p",{className:"note",children:"Shortcut memory: 1:N -> FK on N side. M:N -> new table. Multivalued -> new table. Composite -> split columns."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(fr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"ER model is your blueprint. Entities become tables. Relationships decide where foreign keys go."})]})]})]})})]})},sf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .code {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: var(--color-text-primary);
            line-height: 1.6;
            white-space: pre-wrap;
            word-break: break-word;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .keysGrid {
            margin-top: 10px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 10px;
        }

        .kCard {
            grid-column: span 6;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 12px;
        }

        .kTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
            font-size: 13px;
        }

        .kIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .kIcon svg {
            width: 16px;
            height: 16px;
        }

        .kBody {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .kEx {
            margin-top: 6px;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.3px;
            color: var(--color-text-muted);
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .kCard {
                grid-column: span 12;
            }
        }
    `},af=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"relationalModel",title:"Relational Model",sub:"Relation, tuple, attribute, domain, degree, cardinality, and the full key family used in RDBMS."}),[]);return r.jsxs(sf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(fr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Tables and Keys"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"Relation"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"relation"})," is a table in the relational model. It stores data as rows and columns."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"code",children:"STUDENT(studentId, name, email)"})]}),r.jsx("p",{className:"note",children:"Relation name is like the table name, and attributes are the column names."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Tuple"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"tuple"})," is a single row in a relation. It represents one record."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example row"}),r.jsx("div",{className:"code",children:'(101, "Ashish", "ash@example.com")'})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(du,{})}),r.jsx("h3",{className:"h3",children:"Attribute"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"attribute"})," is a column in a table. It describes a property of the entity."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"studentId"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"name"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"email"})]}),r.jsx("p",{className:"note",children:"Attribute values come from a defined domain."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ll,{})}),r.jsx("h3",{className:"h3",children:"Domain"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"domain"})," is the allowed set of values for an attribute. It defines type and constraints."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Example"}),r.jsxs("div",{className:"v",children:["age domain could be 0 to 120",r.jsx("span",{className:"small",children:"integer values only"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Example"}),r.jsxs("div",{className:"v",children:["email domain could be valid email strings",r.jsx("span",{className:"small",children:'must contain "@"'})]})]})]}),r.jsx("p",{className:"note",children:"Domain helps ensure data correctness at the attribute level."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"Degree"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Degree"})," is the number of attributes (columns) in a relation."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"code",children:"STUDENT(studentId, name, email) - degree is 3"})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Cardinality"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Cardinality"})," is the number of tuples (rows) in a relation."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"code",children:"STUDENT has 500 rows - cardinality is 500"})]}),r.jsx("p",{className:"note",children:"Do not confuse this with ER diagram cardinality like 1:N. Here it means row count."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xr,{})}),r.jsx("h3",{className:"h3",children:"Keys in DBMS"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"key"})," is a set of attributes that identifies a tuple uniquely or helps connect tables correctly. Different keys serve different purposes."]}),r.jsxs("div",{className:"keysGrid",children:[r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Xr,{})}),"Super key"]}),r.jsxs("div",{className:"kBody",children:["Any attribute set that uniquely identifies a row. It can include extra attributes.",r.jsx("div",{className:"kEx",children:"Example: (studentId) or (studentId, email)"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Xr,{})}),"Candidate key"]}),r.jsxs("div",{className:"kBody",children:["Minimal super key. No extra attributes. There can be multiple candidate keys.",r.jsx("div",{className:"kEx",children:"Example: (studentId) and (email) if both are unique"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Xr,{})}),"Primary key"]}),r.jsxs("div",{className:"kBody",children:["One selected candidate key used as main identifier. It cannot be NULL and should be stable.",r.jsx("div",{className:"kEx",children:"Example: studentId"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Xr,{})}),"Alternate key"]}),r.jsxs("div",{className:"kBody",children:["Candidate keys not chosen as primary key. Still unique.",r.jsx("div",{className:"kEx",children:"Example: email"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Ba,{})}),"Foreign key"]}),r.jsxs("div",{className:"kBody",children:["Attribute in one table that references primary key of another table. It builds relationships.",r.jsx("div",{className:"kEx",children:"Example: ENROLLMENT.studentId references STUDENT.studentId"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(me,{})}),"Composite key"]}),r.jsxs("div",{className:"kBody",children:["Key made of 2 or more attributes. Used when one attribute is not enough.",r.jsx("div",{className:"kEx",children:"Example: (studentId, courseId) in ENROLLMENT"})]})]})]}),r.jsx("p",{className:"note",children:"Memory: super key identifies, candidate key is minimal, primary key is chosen, alternate key is remaining, foreign key links, composite key is multi-column."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Xr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Degree is columns, cardinality is rows. Candidate keys are minimal unique sets, and one becomes primary key."})]})]})]})})]})},of={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},lf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"sqlBasics",title:"SQL Basics",sub:"SQL meaning and the 5 command groups - DDL, DML, DQL, TCL, DCL, with common commands and examples."}),[]);return r.jsxs(of.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Ia,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"SQL"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ia,{})}),r.jsx("h3",{className:"h3",children:"What is SQL - Structured Query Language"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"SQL"})," means"," ",r.jsx("b",{children:"Structured Query Language"}),". It is the standard language used to talk to relational databases. With SQL, you can define tables, insert and update rows, query data, and control access."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Define"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Insert"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Query"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Control"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Commit"})]}),r.jsx("p",{className:"note",children:"SQL is declarative. You tell what you want, the database figures out how to do it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Qm,{})}),r.jsx("h3",{className:"h3",children:"DDL - Data Definition Language"})]}),r.jsx("p",{className:"p",children:"DDL is used to create and modify database structure like tables and columns."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"CREATE"}),r.jsxs("div",{className:"v",children:["Creates objects like tables, indexes, views.",r.jsx("span",{className:"small",children:"Example: create table users (...)"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"ALTER"}),r.jsxs("div",{className:"v",children:["Modifies structure of existing objects.",r.jsx("span",{className:"small",children:"Example: add a column, change datatype"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"DROP"}),r.jsxs("div",{className:"v",children:["Deletes objects permanently.",r.jsx("span",{className:"small",children:"Example: drop table users"})]})]})]}),r.jsx("p",{className:"note",children:"DDL changes schema. Many DBs auto-commit DDL."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Om,{})}),r.jsx("h3",{className:"h3",children:"DML - Data Manipulation Language"})]}),r.jsx("p",{className:"p",children:"DML is used to change actual data inside tables. It works on rows."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"INSERT"}),r.jsxs("div",{className:"v",children:["Adds new rows to a table.",r.jsx("span",{className:"small",children:"Example: insert into users values (...)"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"UPDATE"}),r.jsxs("div",{className:"v",children:["Modifies existing rows.",r.jsx("span",{className:"small",children:"Example: update users set name='A' where id=1"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"DELETE"}),r.jsxs("div",{className:"v",children:["Removes rows from a table.",r.jsx("span",{className:"small",children:"Example: delete from users where id=1"})]})]})]}),r.jsx("p",{className:"note",children:"DML is usually controlled by transactions. You can rollback if not committed."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(wr,{})}),r.jsx("h3",{className:"h3",children:"DQL - Data Query Language"})]}),r.jsx("p",{className:"p",children:"DQL is used to read data from tables. The core command is SELECT."}),r.jsx("div",{className:"kvs",children:r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"SELECT"}),r.jsxs("div",{className:"v",children:["Fetches rows and columns from one or more tables.",r.jsx("span",{className:"small",children:"Example: select name from users where city='Bhopal'"})]})]})}),r.jsx("p",{className:"note",children:"Best habit: always start with a WHERE clause in mind to avoid full table scans."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(lu,{})}),r.jsx("h3",{className:"h3",children:"TCL - Transaction Control Language"})]}),r.jsx("p",{className:"p",children:"TCL manages transactions. It decides when your changes become permanent or when to undo them."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"COMMIT"}),r.jsx("div",{className:"v",children:"Makes changes permanent in the database."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"ROLLBACK"}),r.jsx("div",{className:"v",children:"Undoes changes since last commit or savepoint."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"SAVEPOINT"}),r.jsx("div",{className:"v",children:"Creates a named point inside a transaction to rollback partially."})]})]}),r.jsx("p",{className:"note",children:"Think of SAVEPOINT like a checkpoint inside one transaction."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xr,{})}),r.jsx("h3",{className:"h3",children:"DCL - Data Control Language"})]}),r.jsx("p",{className:"p",children:"DCL controls permissions. It decides who can read, write, or manage database objects."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"GRANT"}),r.jsxs("div",{className:"v",children:["Gives permissions to a user or role.",r.jsx("span",{className:"small",children:"Example: grant select on users to analystRole"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"REVOKE"}),r.jsxs("div",{className:"v",children:["Removes previously granted permissions.",r.jsx("span",{className:"small",children:"Example: revoke insert on users from tempUser"})]})]})]}),r.jsx("p",{className:"note",children:"DCL is critical in production to prevent accidental data damage."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Ia,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"DDL defines structure, DML changes rows, DQL reads, TCL controls commit and rollback, DCL controls permissions."})]})]})]})})]})},cf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .flow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin-top: 10px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .code {
            border-radius: 14px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            padding: 10px;
            margin-top: 10px;
            overflow: auto;
        }

        .pre {
            margin: 0;
            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.55;
            white-space: pre;
        }

        .aggGrid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .agg {
            grid-column: span 4;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .aggTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .aggSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.45;
            margin-bottom: 8px;
        }

        .miniPre {
            font-size: 12px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .agg {
                grid-column: span 12;
            }
        }
    `},df=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"sqlQueryingEssentials",title:"SQL Querying Essentials",sub:"WHERE, logical operators, BETWEEN, IN, LIKE, ORDER BY, GROUP BY, HAVING, and aggregate functions with examples."}),[]);return r.jsxs(cf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(wr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"SQL"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"Mental model - query flow"})]}),r.jsx("p",{className:"p",children:"A simple way to remember query behavior is the typical pipeline below. This helps you debug GROUP BY and HAVING fast."}),r.jsxs("div",{className:"flow",children:[r.jsx("span",{className:"pill",children:"FROM"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"WHERE"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"GROUP BY"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"HAVING"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"SELECT"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"ORDER BY"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"LIMIT"})]}),r.jsx("p",{className:"note",children:"WHERE filters rows before grouping. HAVING filters groups after GROUP BY."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mp,{})}),r.jsx("h3",{className:"h3",children:"WHERE clause"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"WHERE"})," filters rows based on a condition. It runs before GROUP BY."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM users
WHERE city = 'Bangalore';`})}),r.jsx("p",{className:"note",children:"If there is no WHERE, SQL uses all rows."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ll,{})}),r.jsx("h3",{className:"h3",children:"AND, OR, NOT"})]}),r.jsx("p",{className:"p",children:"Combine conditions using logical operators."}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM orders
WHERE status = 'PAID'
  AND amount >= 500;

SELECT * 
FROM users
WHERE city = 'Bhopal'
   OR city = 'Bangalore';

SELECT * 
FROM users
WHERE NOT isBlocked = true;`})}),r.jsx("p",{className:"note",children:"Use parentheses when mixing AND and OR to avoid surprises."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(zp,{})}),r.jsx("h3",{className:"h3",children:"BETWEEN"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"BETWEEN"})," checks a range, usually inclusive on both ends."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM payments
WHERE amount BETWEEN 100 AND 500;

SELECT * 
FROM logs
WHERE createdAt BETWEEN '2026-03-01' AND '2026-03-31';`})}),r.jsx("p",{className:"note",children:"If you need strict exclusive range, use < and >."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"IN"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"IN"})," matches any value from a list. It is cleaner than writing many OR conditions."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM users
WHERE role IN ('ADMIN', 'EMPLOYEE', 'REPORTS_ONLY');`})}),r.jsx("p",{className:"note",children:"IN also works with subqueries that return a list."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(wr,{})}),r.jsx("h3",{className:"h3",children:"LIKE"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"LIKE"})," matches patterns in text. Wildcards are % for many chars and _ for one char."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM users
WHERE name LIKE 'Ash%';

SELECT * 
FROM users
WHERE email LIKE '%@gmail.com';

SELECT * 
FROM products
WHERE sku LIKE 'A_12%';`})}),r.jsx("p",{className:"note",children:"LIKE can be slow on large tables without proper indexing strategy."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(zm,{})}),r.jsx("h3",{className:"h3",children:"ORDER BY"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"ORDER BY"})," sorts the output. Default is ascending (ASC). Use DESC for descending."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM orders
ORDER BY createdAt DESC;

SELECT * 
FROM users
ORDER BY lastName ASC, firstName ASC;`})}),r.jsx("p",{className:"note",children:"Sorting large results can be expensive, indexes can help."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"GROUP BY"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"GROUP BY"})," groups rows that share the same value so you can compute aggregates like COUNT or SUM."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT city, COUNT(*) AS usersCount
FROM users
GROUP BY city;`})}),r.jsx("p",{className:"note",children:"Every selected column must be either grouped or aggregated."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mp,{})}),r.jsx("h3",{className:"h3",children:"HAVING"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"HAVING"})," filters groups after GROUP BY. Use it when the condition depends on an aggregate."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT city, COUNT(*) AS usersCount
FROM users
GROUP BY city
HAVING COUNT(*) >= 10;`})}),r.jsx("p",{className:"note",children:"WHERE cannot use aggregate results, HAVING can."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(zp,{})}),r.jsx("h3",{className:"h3",children:"Aggregate functions"})]}),r.jsx("p",{className:"p",children:"Aggregates compute one result from many rows. They are most often used with GROUP BY."}),r.jsxs("div",{className:"aggGrid",children:[r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"COUNT"}),r.jsx("div",{className:"aggSub",children:"Counts rows or non-null values"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT COUNT(*) FROM users;"})]}),r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"SUM"}),r.jsx("div",{className:"aggSub",children:"Adds numeric values"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT SUM(amount) FROM payments;"})]}),r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"AVG"}),r.jsx("div",{className:"aggSub",children:"Average of numeric values"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT AVG(amount) FROM payments;"})]}),r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"MIN"}),r.jsx("div",{className:"aggSub",children:"Smallest value"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT MIN(amount) FROM payments;"})]}),r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"MAX"}),r.jsx("div",{className:"aggSub",children:"Largest value"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT MAX(amount) FROM payments;"})]})]}),r.jsx("p",{className:"note",children:"COUNT(column) ignores NULL. COUNT(*) counts rows."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(wr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"WHERE filters rows, GROUP BY makes groups, HAVING filters groups, ORDER BY sorts output."})]})]})]})})]})},pf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .hero {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 12px;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .heroTop {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 10px;
        }

        .heroIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .heroIcon svg {
            width: 18px;
            height: 18px;
        }

        .heroTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .heroSub {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 900;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .grid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 10px;
            overflow: auto;
            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.55;
            margin-top: 10px;
            white-space: pre;
        }

        .twoCol {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            padding: 10px;
        }

        .boxTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 8px;
        }

        .small {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }
        }
    `},uf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"joinsAndSubqueries",title:"Joins and Subqueries",sub:"INNER, LEFT, RIGHT, FULL, self join, cross join, subquery, correlated subquery, EXISTS, and nested queries."}),[]);return r.jsxs(pf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(yt,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"SQL"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"hero",children:[r.jsxs("div",{className:"heroTop",children:[r.jsx("span",{className:"heroIcon",children:r.jsx(me,{})}),r.jsxs("div",{children:[r.jsx("div",{className:"heroTitle",children:"Core idea"}),r.jsx("div",{className:"heroSub",children:"A join combines rows from two tables using a matching condition. A subquery is a query inside another query, used to filter or compute results."})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"JOIN - combine rows"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"SUBQUERY - query inside query"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"EXISTS - checks presence"})]})]}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ba,{})}),r.jsx("h3",{className:"h3",children:"INNER JOIN"})]}),r.jsx("p",{className:"p",children:'Returns only rows that match in both tables based on the join condition. Think "intersection".'}),r.jsx("pre",{className:"code",children:`SELECT e.id, e.name, d.deptName
FROM employees e
INNER JOIN departments d
ON e.deptId = d.id;`}),r.jsx("p",{className:"note",children:"If an employee has no matching department, that employee is not returned."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(yt,{})}),r.jsx("h3",{className:"h3",children:"LEFT JOIN"})]}),r.jsx("p",{className:"p",children:"Returns all rows from the left table, plus matching rows from the right table. If no match, right side columns become NULL."}),r.jsx("pre",{className:"code",children:`SELECT c.id, c.name, o.orderId
FROM customers c
LEFT JOIN orders o
ON o.customerId = c.id;`}),r.jsx("p",{className:"note",children:'Useful to find "items with no match" using WHERE rightTableColumn IS NULL.'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(yt,{})}),r.jsx("h3",{className:"h3",children:"RIGHT JOIN"})]}),r.jsx("p",{className:"p",children:"Returns all rows from the right table, plus matching rows from the left table. If no match, left side columns become NULL."}),r.jsx("pre",{className:"code",children:`SELECT e.id, e.name, d.deptName
FROM employees e
RIGHT JOIN departments d
ON e.deptId = d.id;`}),r.jsx("p",{className:"note",children:"Many teams avoid RIGHT JOIN and use LEFT JOIN by swapping tables for readability."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(yt,{})}),r.jsx("h3",{className:"h3",children:"FULL JOIN"})]}),r.jsx("p",{className:"p",children:"Returns all rows from both tables. Matching rows are merged. Non-matching rows appear with NULLs for missing side."}),r.jsx("pre",{className:"code",children:`SELECT a.id, a.name, b.info
FROM tableA a
FULL OUTER JOIN tableB b
ON a.id = b.aId;`}),r.jsx("p",{className:"note",children:"Some DBs do not support FULL OUTER JOIN directly. Workaround is UNION of LEFT and RIGHT joins."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Self join"})]}),r.jsx("p",{className:"p",children:"Joining a table with itself. Used when a table has relationships inside itself, like employees and their managers."}),r.jsx("pre",{className:"code",children:`SELECT e.name AS employeeName, m.name AS managerName
FROM employees e
LEFT JOIN employees m
ON e.managerId = m.id;`}),r.jsx("p",{className:"note",children:"Aliases are required to distinguish the same table as two roles."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"CROSS JOIN"})]}),r.jsx("p",{className:"p",children:"Produces a Cartesian product. Every row of left table combines with every row of right table. Use carefully."}),r.jsx("pre",{className:"code",children:`SELECT s.size, c.color
FROM sizes s
CROSS JOIN colors c;`}),r.jsx("p",{className:"note",children:"Useful for generating combinations, but can explode row count quickly."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(wr,{})}),r.jsx("h3",{className:"h3",children:"Subquery"})]}),r.jsx("p",{className:"p",children:"A subquery is a query inside another query. It can be used in WHERE, SELECT, FROM, and even in HAVING. It helps when one query needs result from another."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Subquery in WHERE"}),r.jsx("pre",{className:"code",children:`SELECT name
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees
);`}),r.jsx("div",{className:"small",children:"Find employees whose salary is above average."})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Subquery in FROM"}),r.jsx("pre",{className:"code",children:`SELECT deptId, avgSalary
FROM (
    SELECT deptId, AVG(salary) AS avgSalary
    FROM employees
    GROUP BY deptId
) t
WHERE avgSalary > 50000;`}),r.jsx("div",{className:"small",children:"Make a derived table and filter on it."})]})]})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ia,{})}),r.jsx("h3",{className:"h3",children:"Correlated subquery"})]}),r.jsx("p",{className:"p",children:"A correlated subquery depends on the outer query row. It runs once per row of the outer query. It can be slower than joins, but is sometimes the clearest way to express logic."}),r.jsx("pre",{className:"code",children:`SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.deptId = e.deptId
);`}),r.jsx("p",{className:"note",children:"This finds employees earning above their own department average."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(wr,{})}),r.jsx("h3",{className:"h3",children:"EXISTS"})]}),r.jsx("p",{className:"p",children:"EXISTS checks whether the subquery returns at least one row. It returns true or false. It does not care about values, only presence."}),r.jsx("pre",{className:"code",children:`SELECT c.id, c.name
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customerId = c.id
);`}),r.jsx("p",{className:"note",children:"Often faster than IN for large datasets because it can stop at first match."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Nested queries"})]}),r.jsx("p",{className:"p",children:"Nested queries are multiple levels of subqueries. Useful but can reduce readability. Use with care."}),r.jsx("pre",{className:"code",children:`SELECT name
FROM employees
WHERE deptId IN (
    SELECT id
    FROM departments
    WHERE locationId IN (
        SELECT id FROM locations WHERE city = 'Bangalore'
    )
);`}),r.jsx("p",{className:"note",children:"If it gets too nested, consider rewriting using joins for clarity and performance."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(yt,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"INNER gives matches, LEFT keeps left, RIGHT keeps right, FULL keeps all. Subquery is query inside query. Correlated runs per row. EXISTS checks presence."})]})]})]})})]})},hf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .code {
            width: 100%;
            overflow: auto;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px;
            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.6;
        }

        .exText {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        .table {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .tRow {
            display: grid;
            grid-template-columns: 160px 1.2fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .tRow:first-child {
            border-top: 0;
        }

        .tRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .tRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .tRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .tRow {
                grid-template-columns: 1fr;
            }
        }
    `},xf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"constraints",title:"Constraints",sub:"Rules that protect data quality - NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT."}),[]);return r.jsxs(hf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(xr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Data rules"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xr,{})}),r.jsx("h3",{className:"h3",children:"What is a constraint"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"constraint"})," is a rule enforced by the database to keep data valid. It prevents wrong inserts and updates, so your tables do not become messy over time."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Integrity"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Consistency"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Safety"})]}),r.jsx("p",{className:"note",children:"Constraints are checked automatically on INSERT and UPDATE."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dp,{})}),r.jsx("h3",{className:"h3",children:"NOT NULL"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"NOT NULL"})," means this column must always have a value. It cannot be NULL."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"name VARCHAR(100) NOT NULL"}),r.jsx("div",{className:"exText",children:'A user must have a name. Blank string "" is allowed, but NULL is not.'})]}),r.jsx("p",{className:"note",children:'NULL means "unknown or missing", it is not the same as 0 or "".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ll,{})}),r.jsx("h3",{className:"h3",children:"UNIQUE"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"UNIQUE"})," means all values in this column must be different. No duplicates allowed."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"email VARCHAR(255) UNIQUE"}),r.jsx("div",{className:"exText",children:"Two users cannot have the same email."})]}),r.jsx("p",{className:"note",children:'Many databases allow multiple NULLs in a UNIQUE column, because NULL is treated as "no value".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xr,{})}),r.jsx("h3",{className:"h3",children:"PRIMARY KEY"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"PRIMARY KEY"})," uniquely identifies each row. It is basically ",r.jsx("b",{children:"UNIQUE + NOT NULL"})," ","together."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"id INT PRIMARY KEY"}),r.jsx("div",{className:"exText",children:"Each row must have a unique id and it cannot be NULL."})]}),r.jsx("p",{className:"note",children:"One table has only one primary key, but it can be a composite key."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ba,{})}),r.jsx("h3",{className:"h3",children:"FOREIGN KEY"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"FOREIGN KEY"})," links one table to another. It ensures the referenced value exists in the parent table. This keeps"," ",r.jsx("b",{children:"referential integrity"}),"."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"orders.user_id REFERENCES users(id)"}),r.jsx("div",{className:"exText",children:"An order must belong to a valid user. You cannot set user_id to a non-existing user."})]}),r.jsx("p",{className:"note",children:"Deleting parent rows can affect child rows, often controlled by ON DELETE rules like CASCADE or SET NULL."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ol,{})}),r.jsx("h3",{className:"h3",children:"CHECK"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"CHECK"})," enforces a condition on values. If the condition fails, the insert or update is rejected."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"age INT CHECK (age >= 0 AND age <= 120)"}),r.jsx("div",{className:"exText",children:"Age must stay in a valid range."})]}),r.jsx("p",{className:"note",children:`CHECK is great for domain rules like "price >= 0" or "status in ('pending','paid')".`})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dp,{})}),r.jsx("h3",{className:"h3",children:"DEFAULT"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"DEFAULT"})," sets a value automatically when no value is provided. It avoids NULLs and makes inserts easier."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"status VARCHAR(20) DEFAULT 'active'"}),r.jsx("div",{className:"exText",children:'If status is not given, it becomes "active".'})]}),r.jsx("p",{className:"note",children:"DEFAULT is used for timestamps, boolean flags, and common initial states."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xr,{})}),r.jsx("h3",{className:"h3",children:"Quick comparison"})]}),r.jsxs("div",{className:"table",children:[r.jsxs("div",{className:"tRow head",children:[r.jsx("div",{children:"Constraint"}),r.jsx("div",{children:"What it prevents"}),r.jsx("div",{children:"Simple use case"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"NOT NULL"}),r.jsx("div",{children:"Missing values"}),r.jsx("div",{children:"name, created_at"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"UNIQUE"}),r.jsx("div",{children:"Duplicate values"}),r.jsx("div",{children:"email, phone"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"PRIMARY KEY"}),r.jsx("div",{children:"Duplicate or NULL identity"}),r.jsx("div",{children:"id"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"FOREIGN KEY"}),r.jsx("div",{children:"Invalid references"}),r.jsx("div",{children:"orders.user_id"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"CHECK"}),r.jsx("div",{children:"Invalid domain values"}),r.jsx("div",{children:"price >= 0"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"DEFAULT"}),r.jsx("div",{children:"Empty initial state"}),r.jsx("div",{children:"status = 'active'"})]})]}),r.jsx("p",{className:"note",children:"Interview line: constraints are the database side validation layer, they protect data even if app code has bugs."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(xr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"PRIMARY KEY identifies, FOREIGN KEY connects, UNIQUE avoids duplicates, NOT NULL avoids missing, CHECK enforces rules, DEFAULT fills missing values."})]})]})]})})]})},mf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .monoBox {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .tri {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .triCard {
            grid-column: span 4;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .triTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            margin-bottom: 6px;
            font-size: 13px;
        }

        .triText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .nfGrid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .nfCard {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .nfTop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 8px;
            flex-wrap: wrap;
        }

        .nfTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            line-height: 1.35;
        }

        .nfTag {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 82%,
                transparent
            );
        }

        .exSmall {
            margin-top: 8px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 82%,
                transparent
            );
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .triCard {
                grid-column: span 12;
            }

            .nfCard {
                grid-column: span 12;
            }
        }
    `},ff=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"normalization",title:"Normalization",sub:"Redundancy, anomalies, functional dependency, 1NF to BCNF, and when denormalization makes sense."}),[]);return r.jsxs(mf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(me,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Design"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"Normalization"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Normalization"})," is a database design process that organizes tables to reduce duplication and avoid update bugs. It uses rules called ",r.jsx("b",{children:"normal forms"}),"."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Less redundancy"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"More consistency"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Cleaner schema"})]}),r.jsx("p",{className:"note",children:"Normalization helps data correctness. Performance can be handled later using indexes and careful queries."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Op,{})}),r.jsx("h3",{className:"h3",children:"Redundancy"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Redundancy"})," means storing the same information multiple times in different rows. This increases storage and creates mismatch risk."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"monoBox",children:"In an Orders table, repeating customerAddress in every order row."})]}),r.jsx("p",{className:"note",children:"Redundancy is not always evil, but uncontrolled redundancy causes anomalies."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(jn,{})}),r.jsx("h3",{className:"h3",children:"Anomalies"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Anomalies"})," are update problems caused by redundancy. These are common in poorly designed tables."]}),r.jsxs("div",{className:"tri",children:[r.jsxs("div",{className:"triCard",children:[r.jsx("div",{className:"triTitle",children:"Insertion anomaly"}),r.jsxs("div",{className:"triText",children:["You cannot add a fact because another fact is missing.",r.jsx("span",{className:"small",children:"Example: cannot add a new customer until they place an order."})]})]}),r.jsxs("div",{className:"triCard",children:[r.jsx("div",{className:"triTitle",children:"Update anomaly"}),r.jsxs("div",{className:"triText",children:["Same value exists in multiple rows, you must update all or data becomes inconsistent.",r.jsx("span",{className:"small",children:"Example: customer phone stored in many rows, one row updated but others not."})]})]}),r.jsxs("div",{className:"triCard",children:[r.jsx("div",{className:"triTitle",children:"Deletion anomaly"}),r.jsxs("div",{className:"triText",children:["Deleting one row removes more information than intended.",r.jsx("span",{className:"small",children:"Example: delete last order of a customer and you lose customer details too."})]})]})]}),r.jsx("p",{className:"note",children:"Normal forms exist mainly to prevent these anomalies."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dm,{})}),r.jsx("h3",{className:"h3",children:"Functional dependency"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Functional dependency (FD)"})," is written as"," ",r.jsx("b",{children:"X -> Y"}),". It means if you know X, you can uniquely determine Y."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Meaning"}),r.jsx("div",{className:"v",children:"For any two rows, if X values match, Y values must also match."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Example"}),r.jsxs("div",{className:"v",children:["studentId -> studentName",r.jsx("span",{className:"small",children:"If studentId is same, name should be same."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why important"}),r.jsx("div",{className:"v",children:"Normalization rules are based on identifying FDs."})]})]}),r.jsx("p",{className:"note",children:"Key idea: a key determines all non-key attributes."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"1NF to BCNF"})]}),r.jsxs("div",{className:"nfGrid",children:[r.jsxs("div",{className:"nfCard",children:[r.jsxs("div",{className:"nfTop",children:[r.jsx("div",{className:"nfTitle",children:"1NF - First Normal Form"}),r.jsx("div",{className:"nfTag",children:"Atomic values"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"No repeating groups"}),r.jsx("li",{children:"Each column holds single value"}),r.jsx("li",{children:"Rows are unique"})]}),r.jsx("div",{className:"exSmall",children:'Example: phoneNumbers should not be "999,888,777" in one cell. Make separate rows or a new table.'})]}),r.jsxs("div",{className:"nfCard",children:[r.jsxs("div",{className:"nfTop",children:[r.jsx("div",{className:"nfTitle",children:"2NF - Second Normal Form"}),r.jsx("div",{className:"nfTag",children:"No partial dependency"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Must be in 1NF"}),r.jsx("li",{children:"Every non-key attribute depends on full primary key"})]}),r.jsx("div",{className:"exSmall",children:"Example: If primary key is (studentId, courseId), then studentName should not depend only on studentId."})]}),r.jsxs("div",{className:"nfCard",children:[r.jsxs("div",{className:"nfTop",children:[r.jsx("div",{className:"nfTitle",children:"3NF - Third Normal Form"}),r.jsx("div",{className:"nfTag",children:"No transitive dependency"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Must be in 2NF"}),r.jsx("li",{children:"Non-key attributes should not depend on other non-key attributes"})]}),r.jsx("div",{className:"exSmall",children:"Example: employeeId -> deptId and deptId -> deptName, then deptName should not be in employee table."})]}),r.jsxs("div",{className:"nfCard",children:[r.jsxs("div",{className:"nfTop",children:[r.jsx("div",{className:"nfTitle",children:"BCNF - Boyce Codd Normal Form"}),r.jsx("div",{className:"nfTag",children:"Stronger 3NF"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"For every FD X -> Y, X must be a super key"}),r.jsx("li",{children:"Fixes some tricky 3NF cases"})]}),r.jsx("div",{className:"exSmall",children:"Example: If instructor -> room exists, instructor must be a key, otherwise split tables."})]})]}),r.jsx("p",{className:"note",children:"Memory line: 1NF atomic, 2NF full key, 3NF no non-key chain, BCNF every determinant is a key."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Op,{})}),r.jsx("h3",{className:"h3",children:"Denormalization"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Denormalization"})," means intentionally adding some redundancy to improve read performance. It is done after you understand the workload."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"When used"}),r.jsx("div",{className:"v",children:"Heavy read systems, dashboards, reporting, caching pre-joined data."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Trade-off"}),r.jsx("div",{className:"v",children:"Faster reads but harder updates and higher risk of inconsistency."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Safe approach"}),r.jsx("div",{className:"v",children:"Keep source of truth normalized, use derived tables or materialized views for speed."})]})]}),r.jsx("p",{className:"note",children:"Rule: normalize for correctness first, then denormalize only if performance demands it."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(me,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Normalization removes redundancy to avoid anomalies. 1NF atomic, 2NF full key, 3NF no transitive, BCNF determinant is a key."})]})]})]})})]})},gf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .exText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .problems {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .prob {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .probTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 6px;
        }

        .probText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .probMini {
            margin-top: 8px;
            padding: 8px 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .isoTable {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .iRow {
            display: grid;
            grid-template-columns: 1.1fr 1fr 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .iRow:first-child {
            border-top: 0;
        }

        .iRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .iRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .iRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .lvl {
            color: var(--color-text-primary) !important;
            font-weight: 900;
        }

        .good {
            color: color-mix(
                in srgb,
                var(--color-success) 85%,
                #ffffff
            ) !important;
            font-weight: 900;
        }

        .bad {
            color: color-mix(
                in srgb,
                var(--color-warning) 85%,
                #ffffff
            ) !important;
            font-weight: 900;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .problems .prob {
                grid-column: span 12;
            }

            .iRow {
                grid-template-columns: 1fr;
            }
        }
    `},vf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"transactionsAndConcurrency",title:"Transactions and Concurrency",sub:"Transaction meaning, ACID, concurrency problems, isolation levels, locks, and 2PL in one block."}),[]);return r.jsxs(gf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(hn,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"ACID + Locks"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(yt,{})}),r.jsx("h3",{className:"h3",children:"Transaction"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"transaction"})," is a group of database operations that must be treated as one logical unit of work. It either ",r.jsx("b",{children:"fully happens"})," or",r.jsx("b",{children:" does not happen"}),"."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"BEGIN"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"READ"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"WRITE"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"COMMIT"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"ROLLBACK"})]}),r.jsx("p",{className:"note",children:"Example: transfer money - debit one account and credit another. Both must succeed together."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ol,{})}),r.jsx("h3",{className:"h3",children:"ACID properties"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"ACID"})," describes guarantees that make transactions reliable in real systems."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Atomicity"})," - all or nothing"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Consistency"})," - rules stay true"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Isolation"})," - concurrent work does not break correctness"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Durability"})," - committed changes survive crashes"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Atomicity"})]}),r.jsx("p",{className:"p",children:"Atomicity means a transaction is indivisible. If any step fails, the DBMS rolls back all changes."}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"exText",children:'Order placed but payment failed - do not keep partial order state saved as "paid".'})]}),r.jsx("p",{className:"note",children:"Rollback is the practical tool that supports atomicity."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Consistency"})]}),r.jsx("p",{className:"p",children:"Consistency means the database moves from one valid state to another valid state. Constraints, triggers, and rules must remain satisfied."}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"exText",children:"Balance cannot go below 0 if business rule says no overdraft."})]}),r.jsx("p",{className:"note",children:'Consistency is about correctness rules, not about "same data everywhere".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Isolation"})]}),r.jsx("p",{className:"p",children:"Isolation means multiple transactions can run at the same time without interfering in a way that produces wrong results."}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Mental model"}),r.jsx("div",{className:"exText",children:"Each transaction should behave like it ran alone, even though it did not."})]}),r.jsx("p",{className:"note",children:"Isolation is controlled using locks, MVCC, and isolation levels."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Durability"})]}),r.jsx("p",{className:"p",children:"Durability means once a transaction commits, its changes will not be lost even if the system crashes immediately after."}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"How it is achieved"}),r.jsx("div",{className:"exText",children:"Logging and disk writes, often using WAL - write-ahead logging."})]}),r.jsx("p",{className:"note",children:"Commit is considered successful only after the DBMS ensures recovery is possible."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx($m,{})}),r.jsx("h3",{className:"h3",children:"Concurrency control"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Concurrency control"})," is how DBMS keeps correct results when many users read and write together. Goal is correctness with good performance."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common approaches"}),r.jsx("div",{className:"v",children:"Locks, timestamps, optimistic control, MVCC - Multi Version Concurrency Control."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Key idea"}),r.jsx("div",{className:"v",children:"Ensure schedules are equivalent to a correct serial order (serializability)."})]})]}),r.jsx("p",{className:"note",children:"Most modern databases use MVCC for reads and locks for writes in some form."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(jn,{})}),r.jsx("h3",{className:"h3",children:"Concurrency problems - lost update and read anomalies"})]}),r.jsxs("div",{className:"problems",children:[r.jsxs("div",{className:"prob",children:[r.jsx("div",{className:"probTitle",children:"Lost update"}),r.jsx("div",{className:"probText",children:"Two transactions read the same value and both write back. The later write overwrites the earlier update."}),r.jsx("div",{className:"probMini",children:"T1 reads 100 - T2 reads 100 - T1 writes 120 - T2 writes 110"})]}),r.jsxs("div",{className:"prob",children:[r.jsx("div",{className:"probTitle",children:"Dirty read"}),r.jsx("div",{className:"probText",children:"A transaction reads data written by another transaction that has not committed yet. If the writer rolls back, the reader used invalid data."}),r.jsx("div",{className:"probMini",children:"T1 writes new value - T2 reads it - T1 rollback"})]}),r.jsxs("div",{className:"prob",children:[r.jsx("div",{className:"probTitle",children:"Non-repeatable read"}),r.jsx("div",{className:"probText",children:"A transaction reads the same row twice and gets different values because another transaction updated and committed between the reads."}),r.jsx("div",{className:"probMini",children:"T1 reads row - T2 updates and commit - T1 reads again"})]}),r.jsxs("div",{className:"prob",children:[r.jsx("div",{className:"probTitle",children:"Phantom read"}),r.jsx("div",{className:"probText",children:"A transaction repeats a range query and finds new rows because another transaction inserted rows that match the condition."}),r.jsx("div",{className:"probMini",children:"T1 selects where salary > 50k - T2 inserts new matching row - T1 selects again"})]})]}),r.jsx("p",{className:"note",children:"Dirty read is about uncommitted data. Non-repeatable is row changed. Phantom is new rows in a range."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Isolation levels"})]}),r.jsx("p",{className:"p",children:"Isolation levels define which anomalies are allowed for better performance. Higher isolation means fewer anomalies but more blocking and lower concurrency."}),r.jsxs("div",{className:"isoTable",children:[r.jsxs("div",{className:"iRow head",children:[r.jsx("div",{children:"Level"}),r.jsx("div",{children:"Dirty read"}),r.jsx("div",{children:"Non-repeatable"}),r.jsx("div",{children:"Phantom"})]}),r.jsxs("div",{className:"iRow",children:[r.jsx("div",{className:"lvl",children:"Read uncommitted"}),r.jsx("div",{className:"bad",children:"Allowed"}),r.jsx("div",{className:"bad",children:"Allowed"}),r.jsx("div",{className:"bad",children:"Allowed"})]}),r.jsxs("div",{className:"iRow",children:[r.jsx("div",{className:"lvl",children:"Read committed"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"bad",children:"Allowed"}),r.jsx("div",{className:"bad",children:"Allowed"})]}),r.jsxs("div",{className:"iRow",children:[r.jsx("div",{className:"lvl",children:"Repeatable read"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"bad",children:"Sometimes allowed"})]}),r.jsxs("div",{className:"iRow",children:[r.jsx("div",{className:"lvl",children:"Serializable"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"good",children:"Blocked"})]})]}),r.jsx("p",{className:"note",children:"Exact behavior can differ by database engine, but the table is the standard interview model."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(hn,{})}),r.jsx("h3",{className:"h3",children:"Locks"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"lock"})," is a control mechanism that limits access to data while a transaction is working. It prevents conflicting operations."]}),r.jsx("p",{className:"note",children:"Locks can be on row, page, table, or even range, depending on DBMS."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(hn,{})}),r.jsx("h3",{className:"h3",children:"Shared lock"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Shared lock"})," is used for reading. Many transactions can hold shared locks on the same data at the same time."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Read"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Many allowed"})]}),r.jsx("p",{className:"note",children:"Shared lock blocks writers but not other readers."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(hn,{})}),r.jsx("h3",{className:"h3",children:"Exclusive lock"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Exclusive lock"})," is used for writing. Only one transaction can hold it. It blocks other reads and writes on the same data."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Write"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Only one allowed"})]}),r.jsx("p",{className:"note",children:"Exclusive lock ensures no one reads half-updated data."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(yt,{})}),r.jsx("h3",{className:"h3",children:"Two-phase locking - 2PL"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"2PL"})," means ",r.jsx("b",{children:"Two-Phase Locking"}),". It is a locking protocol to ensure serializability. A transaction has two phases for locks."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Growing phase"}),r.jsx("div",{className:"v",children:"Transaction can acquire locks but cannot release any lock."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Shrinking phase"}),r.jsx("div",{className:"v",children:"Transaction releases locks but cannot acquire new locks."})]})]}),r.jsx("p",{className:"note",children:"2PL avoids many anomalies, but it can cause deadlocks when transactions wait on each other."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(hn,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"ACID makes transactions reliable. Isolation controls anomalies. Locks and 2PL keep concurrency correct."})]})]})]})})]})},yf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .tree {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            overflow: hidden;
        }

        .tRow {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .tRow:first-child {
            border-top: 0;
        }

        .tLabel {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 13px;
        }

        .tVal {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .tRow {
                grid-template-columns: 1fr;
            }
        }
    `},jf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"indexing",title:"Indexing",sub:"What indexes are, clustered vs non-clustered, B-Tree, hash index, when to use, and trade-offs."}),[]);return r.jsxs(yf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(wr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Performance"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Br,{})}),r.jsx("h3",{className:"h3",children:"What is index"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"index"})," is an extra data structure that helps the database find rows faster without scanning the entire table."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Table"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Full scan"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Slow"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Index"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Jump to rows"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Fast"})]}),r.jsx("p",{className:"note",children:"Index is like a book index. You jump to the page instead of reading every page."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pu,{})}),r.jsx("h3",{className:"h3",children:"When to use index"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["Columns used often in ",r.jsx("b",{children:"WHERE"})]}),r.jsxs("li",{children:["Columns used in ",r.jsx("b",{children:"JOIN"})," conditions"]}),r.jsxs("li",{children:["Columns used in ",r.jsx("b",{children:"ORDER BY"})]}),r.jsxs("li",{children:["Columns used in ",r.jsx("b",{children:"GROUP BY"})," (sometimes)"]}),r.jsx("li",{children:"Columns with high selectivity (many unique values)"})]}),r.jsx("p",{className:"note",children:"Index helps when it reduces scanned rows a lot. Index is less useful when most rows match."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Clustered index"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"clustered index"})," decides the physical order of rows on disk based on the indexed column. The table data is stored in the same order as the clustered key."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How many"}),r.jsxs("div",{className:"v",children:["Usually ",r.jsx("b",{children:"one"})," per table, because rows can be stored physically in one order only."]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsxs("div",{className:"v",children:["Range queries like",r.jsx("span",{className:"small",children:'"WHERE createdAt BETWEEN A AND B"'})]})]})]}),r.jsx("p",{className:"note",children:"Many databases make primary key clustered by default, but not always."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Non-clustered index"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"non-clustered index"})," is a separate structure that stores index keys and pointers to the actual table rows. Table rows are not stored in index order."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How many"}),r.jsx("div",{className:"v",children:"Multiple can exist on the same table."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsx("div",{className:"v",children:"Fast lookups on frequently filtered columns."})]})]}),r.jsx("p",{className:"note",children:"It is like having multiple indexes in a book for different topics."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Br,{})}),r.jsx("h3",{className:"h3",children:"B-Tree"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"B-Tree"})," is the most common index structure in relational databases. It stays balanced so searching is fast. It supports both equality and range queries efficiently."]}),r.jsxs("div",{className:"tree",children:[r.jsxs("div",{className:"tRow",children:[r.jsx("span",{className:"tLabel",children:"Good for"}),r.jsx("span",{className:"tVal",children:'"=", "<", ">", BETWEEN, ORDER BY'})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("span",{className:"tLabel",children:"Why"}),r.jsx("span",{className:"tVal",children:"Balanced tree means fewer disk reads while searching"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("span",{className:"tLabel",children:"Common use"}),r.jsx("span",{className:"tVal",children:"Primary keys, createdAt sorting, range filters"})]})]}),r.jsx("p",{className:"note",children:"In interviews, just remember this: B-Tree is default because it handles many query types well."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(wr,{})}),r.jsx("h3",{className:"h3",children:"Hash index"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"hash index"})," uses a hash function to map a key to a bucket. It is very fast for equality lookups."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Great for"}),r.jsx("div",{className:"v",children:'Equality - "WHERE id = 10"'})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Bad for"}),r.jsxs("div",{className:"v",children:["Range queries and sorting",r.jsx("span",{className:"small",children:"Example: BETWEEN, ORDER BY"})]})]})]}),r.jsx("p",{className:"note",children:"Hash indexes are not always available in all engines for all table types."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(jn,{})}),r.jsx("h3",{className:"h3",children:"Trade-offs"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Faster reads"})," but ",r.jsx("b",{children:"slower writes"})," ","because index must be updated on INSERT, UPDATE, DELETE"]}),r.jsxs("li",{children:["Uses extra ",r.jsx("b",{children:"storage"})]}),r.jsx("li",{children:"Too many indexes can slow down write-heavy systems"}),r.jsx("li",{children:"Wrong indexes do nothing but still cost space and update time"}),r.jsx("li",{children:"Index maintenance can increase complexity"})]}),r.jsx("p",{className:"note",children:"Rule: index what you search and join on often. Avoid indexing everything blindly."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(wr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"B-Tree is general purpose. Hash is equality only. Index speeds reads but adds write and storage cost."})]})]})]})})]})},bf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .compare {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .row.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .row.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .row div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .steps {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .step {
            display: grid;
            grid-template-columns: 36px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .n {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            font-weight: 900;
        }

        .t {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 1fr;
            }

            .step {
                grid-template-columns: 1fr;
            }
        }
    `},Nf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"storageAndArchitecture",title:"Storage and Architecture",sub:"Disk basics, pages and blocks, buffer pool, record storage, files, logs, and WAL."}),[]);return r.jsxs(bf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(ps,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Engine basics"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ps,{})}),r.jsx("h3",{className:"h3",children:"Disk storage basics"})]}),r.jsxs("p",{className:"p",children:["Databases store data on"," ",r.jsx("b",{children:"persistent storage"}),"like SSD or HDD so it survives restarts. Disk is much slower than RAM, so databases try to do fewer disk reads and writes."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"RAM"})," - very fast, but data is lost on power off"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Disk"})," - slower, but data stays safe after restart"]}),r.jsx("li",{children:"DB engines batch writes and use caching to reduce disk access"})]}),r.jsx("p",{className:"note",children:"Simple mental model: disk is safe but slow, memory is fast but temporary."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Pages and blocks"})]}),r.jsxs("p",{className:"p",children:["Databases do not read single rows directly from disk. They read fixed-size chunks called"," ",r.jsx("b",{children:"pages"}),". On disk, these chunks are often called ",r.jsx("b",{children:"blocks"}),"."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Page"}),r.jsxs("div",{className:"v",children:["Fixed-size unit of storage used by the DB engine.",r.jsx("span",{className:"small",children:"Example sizes: 4KB, 8KB, 16KB depending on DB"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Block"}),r.jsx("div",{className:"v",children:"Disk level term for a chunk of data. Often maps closely to a page."})]})]}),r.jsx("p",{className:"note",children:"If one row is needed, the whole page containing that row is loaded into memory."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Am,{})}),r.jsx("h3",{className:"h3",children:"Buffer pool"})]}),r.jsxs("p",{className:"p",children:["The ",r.jsx("b",{children:"buffer pool"})," is a memory area where the DB keeps recently used pages. It is basically the database cache."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["If a needed page is in buffer pool, it is a"," ",r.jsx("b",{children:"cache hit"})]}),r.jsxs("li",{children:["If not, it is a ",r.jsx("b",{children:"cache miss"})," and DB reads from disk"]}),r.jsx("li",{children:"When buffer pool is full, DB evicts old pages using a policy like LRU style"})]}),r.jsx("p",{className:"note",children:"Bigger buffer pool usually means fewer disk reads and faster queries."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vn,{})}),r.jsx("h3",{className:"h3",children:"Record storage"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"record"})," is a stored row of a table. Inside a page, records are stored with metadata so the DB can find them quickly."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Rows may have fixed-length and variable-length fields"}),r.jsx("li",{children:"Pages often maintain a slot directory to locate records"}),r.jsx("li",{children:"Updates can create fragmentation, DB may reorganize pages"})]}),r.jsx("p",{className:"note",children:"You do not need page internals for interviews, just know records live inside pages."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Rp,{})}),r.jsx("h3",{className:"h3",children:"Heap file"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"heap file"})," stores records in no specific order. New records are placed wherever space is available."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Fast inserts"}),r.jsx("li",{children:"Search can be slow without an index"}),r.jsx("li",{children:"Common base storage method for tables"})]}),r.jsx("p",{className:"note",children:"Heap does not mean heap memory. It just means unordered file storage."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Rp,{})}),r.jsx("h3",{className:"h3",children:"Sequential file"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"sequential file"})," stores records in a sorted order based on a key like an id or timestamp."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Good for range queries and ordered scanning"}),r.jsx("li",{children:"Insert and delete can be slower because order must be maintained"}),r.jsx("li",{children:"Often used for logs or data files designed for sequential reads"})]}),r.jsx("p",{className:"note",children:"Think: sequential is scan-friendly, heap is insert-friendly."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vn,{})}),r.jsx("h3",{className:"h3",children:"Log file"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"log file"})," records changes made by transactions. It is used for crash recovery to restore a consistent state. Logs are usually written sequentially, which is fast on disk."]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"Data file"}),r.jsx("div",{children:"Log file"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Stores actual table data pages and index pages"}),r.jsx("div",{children:"Stores change history and transaction actions"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Random reads and writes based on queries"}),r.jsx("div",{children:"Mostly sequential writes"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Used for normal query reads"}),r.jsx("div",{children:"Used mainly for recovery and durability"})]})]}),r.jsx("p",{className:"note",children:"Logging is a key reason databases can recover after a crash without losing committed transactions."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xr,{})}),r.jsx("h3",{className:"h3",children:"Write-ahead logging - WAL"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"WAL"})," means ",r.jsx("b",{children:"Write-Ahead Logging"}),". Rule: write the log record to disk before writing the data page to disk. This ensures durability and correct recovery."]}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"1"}),r.jsx("div",{className:"t",children:"Transaction updates a row in memory"})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"2"}),r.jsx("div",{className:"t",children:"DB writes the change into the log file on disk"})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"3"}),r.jsx("div",{className:"t",children:"Later, DB writes the actual data page to disk"})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"4"}),r.jsx("div",{className:"t",children:"On crash, DB replays logs to redo committed changes and undo incomplete ones"})]})]}),r.jsx("p",{className:"note",children:"WAL makes commits reliable even if data pages are flushed later."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(ps,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Disk stores pages. Buffer pool caches pages. Logs record changes. WAL means log first, data later."})]})]})]})})]})},wf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .steps {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .step {
            display: grid;
            grid-template-columns: 28px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .n {
            width: 26px;
            height: 26px;
            border-radius: 999px;
            display: grid;
            place-items: center;
            font-weight: 900;
            font-size: 12px;
            color: var(--color-text-primary);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 18%,
                transparent
            );
        }

        .t {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .t b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .exList {
            display: grid;
            gap: 6px;
        }

        .exList li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.45;
        }

        .compare {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .row.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .row.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .row div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .warn {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
            padding: 10px;
        }

        .wTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .wList {
            display: grid;
            gap: 6px;
        }

        .wList li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.45;
            padding-left: 14px;
            position: relative;
        }

        .wList li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-accent);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 1fr;
            }
        }
    `},kf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"queryProcessingOptimization",title:"Query Processing and Optimization",sub:"How SQL becomes an execution plan, how the optimizer chooses paths, and why indexes change performance."}),[]);return r.jsxs(wf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(wr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Optimizer"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(wr,{})}),r.jsx("h3",{className:"h3",children:"Query parsing"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Query parsing"})," is the first step where the DBMS reads your SQL, checks syntax, checks that tables and columns exist, and builds an internal representation of the query."]}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"1"}),r.jsxs("div",{className:"t",children:[r.jsx("b",{children:"Lexing"})," - breaks SQL into tokens like SELECT, FROM, column names"]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"2"}),r.jsxs("div",{className:"t",children:[r.jsx("b",{children:"Parsing"})," - creates a parse tree (structure of the query)"]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"3"}),r.jsxs("div",{className:"t",children:[r.jsx("b",{children:"Validation"})," - checks schema, types, permissions"]})]})]}),r.jsx("p",{className:"note",children:'Output of parsing is not yet "how to run" it, it is "what you asked".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fm,{})}),r.jsx("h3",{className:"h3",children:"Query plan"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"query plan"})," is the DBMS decision of how to execute the query. It is a tree of operations like scans, filters, joins, sorts, and aggregations."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Scan"}),r.jsxs("div",{className:"v",children:["Read rows from a table or index",r.jsx("span",{className:"small",children:"Table scan or index scan"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Join"}),r.jsxs("div",{className:"v",children:["Combine rows from multiple tables",r.jsx("span",{className:"small",children:"Hash join, nested loop join, merge join"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Sort"}),r.jsx("div",{className:"v",children:"Order results, often needed for ORDER BY or merge join"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Aggregate"}),r.jsx("div",{className:"v",children:"GROUP BY calculations like COUNT, SUM"})]})]}),r.jsx("p",{className:"note",children:"Same SQL can have many possible plans. Optimizer picks one."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mm,{})}),r.jsx("h3",{className:"h3",children:"Cost-based optimization"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Cost-based optimization"})," means the DBMS estimates the cost of different plans and picks the cheapest one. Cost is not money, it means expected work like CPU, disk reads, memory, and time."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["Uses ",r.jsx("b",{children:"statistics"})," like row counts, distinct values, distribution"]}),r.jsx("li",{children:"Estimates selectivity of filters like WHERE conditions"}),r.jsx("li",{children:"Tries join orders and join algorithms"}),r.jsx("li",{children:"Prefers plans with fewer reads and smaller intermediate results"})]}),r.jsx("p",{className:"note",children:"If stats are outdated, optimizer can choose a bad plan. This is why ANALYZE or stats refresh matters."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Wm,{})}),r.jsx("h3",{className:"h3",children:"Execution plan basics"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"execution plan"})," is the final plan that the DBMS actually runs. Most databases let you view it using EXPLAIN or EXPLAIN ANALYZE."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"What you usually see"}),r.jsxs("ul",{className:"exList",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Node types"})," like Seq Scan, Index Scan, Hash Join"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Estimated rows"})," vs actual rows"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Costs"})," like startup cost and total cost"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Time"})," and buffers in real run (ANALYZE)"]})]})]}),r.jsx("p",{className:"note",children:"Reading plans is a skill. Always check which step produces the biggest row explosion."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pu,{})}),r.jsx("h3",{className:"h3",children:"Why indexes change performance"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"index"})," is like a book index. Instead of scanning every row, the DBMS can jump to matching rows faster. This can reduce disk reads massively, especially for large tables."]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"Without index"}),r.jsx("div",{children:"With index"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"DBMS may do a full table scan and check every row"}),r.jsx("div",{children:"DBMS can do an index scan and fetch only matching rows"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Faster only for small tables, but becomes slow as table grows"}),r.jsx("div",{children:"Big speedup when filter selects few rows out of many"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Sorting may be needed for ORDER BY"}),r.jsx("div",{children:"Index order can remove sorting in some cases"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Joins may scan many rows first"}),r.jsx("div",{children:"Index can speed up joins on keys (like foreign key joins)"})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("div",{className:"wTitle",children:"Index trade-offs"}),r.jsxs("ul",{className:"wList",children:[r.jsx("li",{children:"Indexes make reads faster but writes slower (INSERT, UPDATE, DELETE must update index too)"}),r.jsx("li",{children:"Too many indexes increase storage and maintenance cost"}),r.jsx("li",{children:"Index helps only if it matches the query pattern (columns and order matter)"})]})]}),r.jsx("p",{className:"note",children:"Simple memory: index helps when you search small part of a big table."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(wr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"SQL becomes a plan. Optimizer picks cheapest path using stats. Indexes reduce scanning but add write cost."})]})]})]})})]})},Sf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .compare {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .row.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .row.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .row div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .pre {
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-secondary);
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .row {
                grid-template-columns: 1fr;
            }
        }
    `},Ef=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"nosqlBasics",title:"NoSQL Basics",sub:"What NoSQL is, main types, SQL vs NoSQL, and when to choose NoSQL for real systems."}),[]);return r.jsxs(Sf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Br,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"NoSQL"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Pm,{})}),r.jsx("h3",{className:"h3",children:"What is NoSQL"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"NoSQL"})," means ",r.jsx("b",{children:"Not Only SQL"}),". It is a category of databases designed for flexibility, high scale, and fast performance for certain workloads. NoSQL systems often store data in formats other than rows and tables."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Flexible schema - fields can vary between records"}),r.jsx("li",{children:"Scales horizontally - add more machines to handle load"}),r.jsx("li",{children:"Optimized for specific access patterns"})]}),r.jsx("p",{className:"note",children:'NoSQL is not "no structure". It is structure that fits the use case.'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"Types"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Key-value"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Document"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Column family"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Graph"})]}),r.jsx("p",{className:"p",children:"Each type is built around a different way of storing and querying data. Pick based on how your app reads and writes data."}),r.jsx("p",{className:"note",children:"Most real systems use a mix of SQL and NoSQL."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(uu,{})}),r.jsx("h3",{className:"h3",children:"Key-value"})]}),r.jsxs("p",{className:"p",children:["Stores data as ",r.jsx("b",{children:"key - value"})," pairs. You give a key, it returns a value. Very fast for simple lookups."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example shape"}),r.jsx("pre",{className:"pre",children:`"user:42" -> "{ name: 'Ash', plan: 'pro' }"`})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Best for caching, sessions, counters, feature flags"}),r.jsx("li",{children:"Weak for complex joins or ad-hoc analytics"})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vn,{})}),r.jsx("h3",{className:"h3",children:"Document"})]}),r.jsxs("p",{className:"p",children:["Stores records as ",r.jsx("b",{children:"documents"}),", commonly JSON-like. Each document can have nested objects and arrays."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example document"}),r.jsx("pre",{className:"pre",children:`{
  "_id": "order_1001",
  "userId": "u42",
  "items": [
    { "sku": "p10", "qty": 2 },
    { "sku": "p21", "qty": 1 }
  ],
  "total": 1299
}`})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Great for user profiles, product catalogs, logs, content apps"}),r.jsx("li",{children:"Joins are limited, denormalization is common"})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"Column family"})]}),r.jsxs("p",{className:"p",children:["Stores data in ",r.jsx("b",{children:"column families"})," ","(wide-column). It is optimized for large-scale reads and writes across many nodes. Rows can have many columns and columns can vary."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Good for time-series, telemetry, large event data"}),r.jsx("li",{children:"Designed for high throughput and scale"}),r.jsx("li",{children:"Query patterns must be planned in advance"})]}),r.jsx("p",{className:"note",children:"Think of it like a giant sparse table tuned for scale."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(cu,{})}),r.jsx("h3",{className:"h3",children:"Graph"})]}),r.jsxs("p",{className:"p",children:["Stores data as ",r.jsx("b",{children:"nodes"})," and ",r.jsx("b",{children:"edges"}),". The focus is on relationships and traversals."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example idea"}),r.jsx("pre",{className:"pre",children:`(Ash) -[FRIEND]-> (Neha)
(Ash) -[LIKES]-> (Robotics)
(Robotics) -[RELATED]-> (AI)`})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Best for social networks, recommendations, fraud detection"}),r.jsx("li",{children:"Strong for relationship-heavy queries"})]})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(me,{})}),r.jsx("h3",{className:"h3",children:"SQL vs NoSQL comparison"})]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"SQL (Relational)"}),r.jsx("div",{children:"NoSQL"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Fixed schema, tables and rows"}),r.jsx("div",{children:"Flexible schema, multiple data models"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Strong joins and complex queries"}),r.jsx("div",{children:"Optimized for specific access patterns"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"ACID transactions are common"}),r.jsx("div",{children:"Consistency model can vary, often eventual consistency"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Vertical scaling is common (bigger machine)"}),r.jsx("div",{children:"Horizontal scaling is common (more machines)"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Great for financial, inventory, strong integrity apps"}),r.jsx("div",{children:"Great for logs, content, high traffic, flexible data apps"})]})]}),r.jsx("p",{className:"note",children:"Rule of thumb: if relationships and correctness are core, SQL wins. If scale and flexible structure are core, NoSQL helps."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Br,{})}),r.jsx("h3",{className:"h3",children:"When to use NoSQL"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"When schema changes frequently and you want flexibility"}),r.jsx("li",{children:"When you need massive scale and horizontal scaling is the plan"}),r.jsx("li",{children:"When data is unstructured or semi-structured (logs, events, content)"}),r.jsx("li",{children:"When you need very fast key-based reads (cache, sessions)"}),r.jsx("li",{children:"When relationships are best represented as graphs (recommendations)"}),r.jsx("li",{children:"When your queries are predictable and designed around the storage model"})]}),r.jsx("p",{className:"note",children:"In many products: SQL for core data, NoSQL for logs, cache, search, and high-scale side workloads."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Br,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"NoSQL is about choosing the right data model - key-value for speed, document for flexible JSON, column family for scale, graph for relationships."})]})]})]})})]})},Tf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .capGrid {
            margin-top: 10px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .capCard {
            grid-column: span 4;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 12px;
        }

        .capTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .capIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
        }

        .capIcon svg {
            width: 18px;
            height: 18px;
        }

        .capTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
        }

        .capText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .capEx {
            margin-top: 10px;
            border-top: 1px solid var(--color-border);
            padding-top: 10px;
        }

        .capExTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
            margin-bottom: 4px;
        }

        .capExText {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        .capNote {
            margin-top: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 12px;
        }

        .capNoteTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .capNoteText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .compare {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .row.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .row.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .row div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .capCard {
                grid-column: span 12;
            }

            .row {
                grid-template-columns: 1fr;
            }
        }
    `},Cf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"distributedDatabases",title:"Distributed Databases",sub:"Replication, sharding, CAP theorem, and why consistency vs availability becomes a trade-off during partitions."}),[]);return r.jsxs(Tf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Vo,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Scaling"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ou,{})}),r.jsx("h3",{className:"h3",children:"Replication"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Replication"})," means keeping copies of the same data on multiple machines called"," ",r.jsx("b",{children:"nodes"}),". This improves availability and read performance."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why"}),r.jsx("div",{className:"v",children:"Higher availability, disaster recovery, faster reads near users"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common patterns"}),r.jsxs("div",{className:"v",children:["Primary replica - one leader handles writes, followers copy",r.jsx("span",{className:"small",children:"Also called leader follower, primary secondary, master replica"})]})]})]}),r.jsx("p",{className:"note",children:"Replication is about copying the same dataset to more places."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"Sharding"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Sharding"})," means splitting data into parts called ",r.jsx("b",{children:"shards"})," and storing each shard on different nodes. This improves write scaling and total storage."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Shard key"}),r.jsxs("div",{className:"v",children:["A field used to decide which shard stores a row",r.jsx("span",{className:"small",children:"Example: userId, region, tenantId"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Goal"}),r.jsx("div",{className:"v",children:"Scale out - more machines = more capacity"})]})]}),r.jsx("p",{className:"note",children:"Replication copies the same data. Sharding splits data across nodes."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xr,{})}),r.jsx("h3",{className:"h3",children:"CAP theorem"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"CAP theorem"})," says that in a distributed system, when a ",r.jsx("b",{children:"network partition"})," happens, you must choose between ",r.jsx("b",{children:"Consistency"})," and"," ",r.jsx("b",{children:"Availability"}),". Partition tolerance is not optional in real distributed networks."]}),r.jsxs("div",{className:"capGrid",children:[r.jsxs("div",{className:"capCard",children:[r.jsxs("div",{className:"capTop",children:[r.jsx("span",{className:"capIcon",children:r.jsx(uu,{})}),r.jsx("div",{className:"capTitle",children:"Consistency - C"})]}),r.jsx("p",{className:"capText",children:"Every read returns the latest write or an error. All nodes behave like one correct system."}),r.jsxs("div",{className:"capEx",children:[r.jsx("div",{className:"capExTitle",children:"Example"}),r.jsx("div",{className:"capExText",children:"Bank balance should not show old values after a transfer."})]})]}),r.jsxs("div",{className:"capCard",children:[r.jsxs("div",{className:"capTop",children:[r.jsx("span",{className:"capIcon",children:r.jsx(xr,{})}),r.jsx("div",{className:"capTitle",children:"Availability - A"})]}),r.jsx("p",{className:"capText",children:"Every request gets a response, even if it might be stale. System prefers to stay online."}),r.jsxs("div",{className:"capEx",children:[r.jsx("div",{className:"capExTitle",children:"Example"}),r.jsx("div",{className:"capExText",children:"Product catalog can show slightly old data but must respond fast."})]})]}),r.jsxs("div",{className:"capCard",children:[r.jsxs("div",{className:"capTop",children:[r.jsx("span",{className:"capIcon",children:r.jsx(jn,{})}),r.jsx("div",{className:"capTitle",children:"Partition tolerance - P"})]}),r.jsx("p",{className:"capText",children:"System continues working even if nodes cannot communicate due to network split."}),r.jsxs("div",{className:"capEx",children:[r.jsx("div",{className:"capExTitle",children:"Example"}),r.jsx("div",{className:"capExText",children:"Data center A cannot reach data center B for some time."})]})]})]}),r.jsxs("div",{className:"capNote",children:[r.jsx("div",{className:"capNoteTitle",children:"Key rule"}),r.jsx("div",{className:"capNoteText",children:"During a partition, you cannot fully guarantee both consistency and availability. You either reject requests to stay consistent, or respond with possible stale data to stay available."})]})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Vo,{})}),r.jsx("h3",{className:"h3",children:"Eventual consistency"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Eventual consistency"})," means the system does not guarantee that every read is the latest immediately, but if no new writes happen, all replicas will become consistent after some time."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why it exists"}),r.jsx("div",{className:"v",children:"It helps availability and performance in distributed systems."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"What you may see"}),r.jsxs("div",{className:"v",children:["Stale reads for a short time, then everything matches later.",r.jsx("span",{className:"small",children:"Example: you update your profile photo and some devices show old one for a while."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How systems reduce pain"}),r.jsx("div",{className:"v",children:"Read your writes, versioning, conflict resolution, leader based replication, quorums"})]})]}),r.jsx("p",{className:"note",children:"Eventual consistency is common in many NoSQL systems and geo-distributed setups."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fr,{})}),r.jsx("h3",{className:"h3",children:"Quick compare"})]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"Concept"}),r.jsx("div",{children:"One line meaning"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Replication"}),r.jsx("div",{children:"Copy the same data to multiple nodes"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Sharding"}),r.jsx("div",{children:"Split data into pieces across nodes"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Consistency"}),r.jsx("div",{children:"Reads always reflect latest write or error"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Availability"}),r.jsx("div",{children:"Always respond to requests, even if stale"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Partition tolerance"}),r.jsx("div",{children:"System survives network splits"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Eventual consistency"}),r.jsx("div",{children:"All replicas match after some time"})]})]}),r.jsx("p",{className:"note",children:"Memory trick: replication duplicates, sharding divides, CAP is the partition trade-off story."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Vo,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Distributed databases scale using replication and sharding. During partitions, choose consistency or availability."})]})]})]})})]})},If={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon.warn {
            color: var(--color-warning);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-warning) 10%, transparent);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .badGood {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin: 10px 0 10px;
        }

        .bgCard {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .bgCard.bad {
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-error) 10%, transparent);
        }

        .bgCard.good {
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-success) 10%, transparent);
        }

        .bgTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .bgText {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
            margin-bottom: 8px;
        }

        .bgMono {
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            padding: 10px;
            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.45;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            overflow-x: auto;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .badGood {
                grid-template-columns: 1fr;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},zf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"securityInDbms",title:"Security in DBMS",sub:"Authentication, authorization, roles, encryption at rest and in transit, and SQL injection basics."}),[]);return r.jsxs(If.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(xr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Must know"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xr,{})}),r.jsx("h3",{className:"h3",children:"Authentication"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Authentication"}),' means verifying identity. DBMS checks "who you are" before allowing access.']}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Common methods - password, certificate, token, SSO (Single Sign-On)"}),r.jsx("li",{children:"Good practice - strong passwords, rotate credentials, use MFA (Multi-Factor Authentication)"})]}),r.jsx("p",{className:"note",children:"Memory: authentication is identity proof."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(hn,{})}),r.jsx("h3",{className:"h3",children:"Authorization"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Authorization"}),' means permissions. DBMS decides "what you can do" after you are authenticated.']}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"READ"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"WRITE"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"ADMIN"})]}),r.jsx("p",{className:"note",children:"Memory: authorization is allowed actions."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Vm,{})}),r.jsx("h3",{className:"h3",children:"Roles"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"role"})," is a named set of permissions. Instead of giving permissions to each user one by one, assign a role to a user."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why roles"}),r.jsx("div",{className:"v",children:"Easier management, less mistakes, consistent access control."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Examples"}),r.jsxs("div",{className:"v",children:["reader role - only SELECT",r.jsx("span",{className:"small",children:"writer role - SELECT + INSERT + UPDATE"}),r.jsx("span",{className:"small",children:"admin role - schema changes + user management"})]})]})]}),r.jsx("p",{className:"note",children:"Follow least privilege: give only the permissions needed for the job."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Br,{})}),r.jsx("h3",{className:"h3",children:"Encryption at rest"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Encryption at rest"})," means encrypting data stored on disk. If someone steals the database files or disk snapshot, they cannot read it without the key."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Applies to - data files, backups, snapshots"}),r.jsx("li",{children:"Common approach - TDE (Transparent Data Encryption)"}),r.jsx("li",{children:"Key management matters - keep keys separate from data"})]}),r.jsx("p",{className:"note",children:"At rest protects storage. It does not protect data while travelling on the network."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xr,{})}),r.jsx("h3",{className:"h3",children:"Encryption in transit"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Encryption in transit"})," means encrypting data while it moves between client and DB server, or between DB nodes. This prevents sniffing and man-in-the-middle attacks."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"TLS"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"SSL"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Certificates"})]}),r.jsx("p",{className:"note",children:"Use TLS. SSL term is still used, but modern setups are TLS based."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon warn",children:r.jsx(jn,{})}),r.jsx("h3",{className:"h3",children:"SQL injection basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"SQL injection"})," is an attack where an attacker tricks your app into running unintended SQL by injecting input into a query string. This can leak data, bypass login, or even delete tables."]}),r.jsxs("div",{className:"badGood",children:[r.jsxs("div",{className:"bgCard bad",children:[r.jsx("div",{className:"bgTitle",children:"Bad pattern"}),r.jsx("div",{className:"bgText",children:"Building SQL by string concatenation with user input."}),r.jsx("div",{className:"bgMono",children:'SELECT * FROM users WHERE email = " + userEmail'})]}),r.jsxs("div",{className:"bgCard good",children:[r.jsx("div",{className:"bgTitle",children:"Good pattern"}),r.jsx("div",{className:"bgText",children:"Use parameterized queries or prepared statements."}),r.jsx("div",{className:"bgMono",children:"SELECT * FROM users WHERE email = ?"})]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Always use prepared statements and parameterized queries"}),r.jsx("li",{children:"Validate input types and lengths"}),r.jsx("li",{children:"Use least privilege DB users for apps"}),r.jsx("li",{children:"Avoid showing raw SQL errors to users"})]}),r.jsx("p",{className:"note",children:"Most SQL injection happens at application layer, not inside the DBMS itself."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(xr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Authentication - who you are. Authorization - what you can do. Encrypt disk and network. Prevent SQL injection with parameters."})]})]})]})})]})},Lf={Wrapper:Se.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .compare {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .row.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .row.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .row div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .scenario {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .step {
            display: grid;
            grid-template-columns: 34px 1fr;
            gap: 10px;
            align-items: center;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .num {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            font-weight: 900;
            font-size: 12px;
        }

        .txt {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .txt b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 1fr;
            }

            .step {
                grid-template-columns: 1fr;
            }
        }
    `},Rf=()=>{const[i,c]=ee.useState(!1),l=ee.useMemo(()=>({id:"backupAndRecovery",title:"Backup and Recovery",sub:"Full, incremental, differential backups, crash recovery, logs, and checkpoints."}),[]);return r.jsxs(Lf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":i,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(ps,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Safety"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${i?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(jn,{})}),r.jsx("h3",{className:"h3",children:"Why backup and recovery matter"})]}),r.jsxs("p",{className:"p",children:["Backups protect you from ",r.jsx("b",{children:"human mistakes"})," ","(accidental delete),",r.jsx("b",{children:"hardware failures"}),", ",r.jsx("b",{children:"software bugs"}),", and ",r.jsx("b",{children:"crashes"}),". Recovery is the process of bringing the database back to a correct state."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Backup"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Restore"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Replay logs"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Consistent state"})]}),r.jsx("p",{className:"note",children:"Backups give you a base copy. Logs help you recover the latest committed changes."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vn,{})}),r.jsx("h3",{className:"h3",children:"Backup types"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Full backup"}),r.jsxs("div",{className:"v",children:["Takes a complete copy of the database at a point in time.",r.jsx("span",{className:"small",children:"Pros: simplest restore - Cons: slower and larger size"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Incremental backup"}),r.jsxs("div",{className:"v",children:["Backs up only the data changed since the"," ",r.jsx("b",{children:"last backup"})," (full or incremental).",r.jsx("span",{className:"small",children:"Pros: fast and small - Cons: restore needs full + all incrementals"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Differential backup"}),r.jsxs("div",{className:"v",children:["Backs up only the data changed since the"," ",r.jsx("b",{children:"last full backup"}),".",r.jsx("span",{className:"small",children:"Pros: restore needs full + latest differential - Cons: grows bigger over time"})]})]})]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"Type"}),r.jsx("div",{children:"Restore requirement"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Full"}),r.jsx("div",{children:"Restore the full backup"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Incremental"}),r.jsx("div",{children:"Full + every incremental in order"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Differential"}),r.jsx("div",{children:"Full + latest differential"})]})]}),r.jsx("p",{className:"note",children:"Simple interview line: Incremental is smaller but restore is longer. Differential is larger but restore is simpler."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(lu,{})}),r.jsx("h3",{className:"h3",children:"Crash recovery"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Crash recovery"})," means restoring the database to a correct state after a crash like power loss or server restart."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["Ensure ",r.jsx("b",{children:"committed"})," transactions are not lost"]}),r.jsxs("li",{children:["Undo ",r.jsx("b",{children:"uncommitted"})," transactions to avoid partial updates"]}),r.jsx("li",{children:"Bring database back to a consistent state"})]}),r.jsx("p",{className:"note",children:"Recovery is mainly about redo committed work and undo incomplete work."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vn,{})}),r.jsx("h3",{className:"h3",children:"Log-based recovery"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Log-based recovery"})," uses a log file that records changes made by transactions. The log is used to ",r.jsx("b",{children:"redo"})," or ",r.jsx("b",{children:"undo"})," operations during recovery."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Redo"}),r.jsx("div",{className:"v",children:"Re-apply changes of committed transactions if they were not written to disk."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Undo"}),r.jsx("div",{className:"v",children:"Roll back changes of uncommitted transactions to remove partial updates."})]})]}),r.jsx("p",{className:"note",children:"Logs are usually written before data pages. That rule is called WAL."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ol,{})}),r.jsx("h3",{className:"h3",children:"Checkpoints"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"checkpoint"}),' is a marker that says "up to this point, the database has flushed enough info to make recovery faster". It reduces how far back the DBMS must scan the log after a crash.']}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Log grows"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Checkpoint"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Less redo work"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Faster restart"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Checkpoints write a safe recovery point into the log"}),r.jsx("li",{children:"DBMS flushes some dirty pages to disk"}),r.jsx("li",{children:"Recovery scans logs mainly after the last checkpoint"})]}),r.jsx("p",{className:"note",children:"Without checkpoints, recovery may need to scan a huge log, slowing restart."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Rm,{})}),r.jsx("h3",{className:"h3",children:"Quick scenario you can say in interviews"})]}),r.jsxs("div",{className:"scenario",children:[r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"num",children:"1"}),r.jsxs("div",{className:"txt",children:["Restore latest ",r.jsx("b",{children:"full backup"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"num",children:"2"}),r.jsxs("div",{className:"txt",children:["Apply ",r.jsx("b",{children:"latest differential"})," or all"," ",r.jsx("b",{children:"incrementals"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"num",children:"3"}),r.jsxs("div",{className:"txt",children:["Use ",r.jsx("b",{children:"logs"})," to redo committed and undo uncommitted work"]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"num",children:"4"}),r.jsx("div",{className:"txt",children:"Checkpoint helps by cutting log scan time"})]})]})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(ps,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Full is base copy. Incremental is since last backup. Differential is since last full. Logs do redo and undo. Checkpoints speed recovery."})]})]})]})})]})},Mf=()=>r.jsxs(Qo.Wrapper,{children:[r.jsx(Qo.Header,{children:r.jsx(Gm,{})}),r.jsxs(Qo.Main,{children:[r.jsxs("div",{className:"contentWrapper",children:[r.jsx(Xm,{}),r.jsx(Zm,{}),r.jsx(rf,{}),r.jsx(nf,{}),r.jsx(af,{}),r.jsx(lf,{}),r.jsx(df,{}),r.jsx(uf,{}),r.jsx(xf,{}),r.jsx(ff,{}),r.jsx(vf,{}),r.jsx(jf,{}),r.jsx(Nf,{}),r.jsx(kf,{}),r.jsx(Ef,{}),r.jsx(Cf,{}),r.jsx(zf,{}),r.jsx(Rf,{})]}),r.jsx("div",{className:"footerWrapper",children:r.jsx(qm,{})})]})]});vx.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(Mf,{})}));
