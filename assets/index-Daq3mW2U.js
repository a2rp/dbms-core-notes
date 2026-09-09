(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const k of j.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&p(k)}).observe(document,{childList:!0,subtree:!0});function l(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(m){if(m.ep)return;m.ep=!0;const j=l(m);fetch(m.href,j)}})();function dx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ao={exports:{}},an={},_o={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function px(){if(ap)return ne;ap=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),k=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),B=Symbol.iterator;function J(f){return f===null||typeof f!="object"?null:(f=B&&f[B]||f["@@iterator"],typeof f=="function"?f:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,W={};function V(f,b,ee){this.props=f,this.context=b,this.refs=W,this.updater=ee||le}V.prototype.isReactComponent={},V.prototype.setState=function(f,b){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,b,"setState")},V.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function fe(){}fe.prototype=V.prototype;function pe(f,b,ee){this.props=f,this.context=b,this.refs=W,this.updater=ee||le}var se=pe.prototype=new fe;se.constructor=pe,K(se,V.prototype),se.isPureReactComponent=!0;var L=Array.isArray,X=Object.prototype.hasOwnProperty,U={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function A(f,b,ee){var re,oe={},ae=null,ue=null;if(b!=null)for(re in b.ref!==void 0&&(ue=b.ref),b.key!==void 0&&(ae=""+b.key),b)X.call(b,re)&&!z.hasOwnProperty(re)&&(oe[re]=b[re]);var ce=arguments.length-2;if(ce===1)oe.children=ee;else if(1<ce){for(var ge=Array(ce),Ce=0;Ce<ce;Ce++)ge[Ce]=arguments[Ce+2];oe.children=ge}if(f&&f.defaultProps)for(re in ce=f.defaultProps,ce)oe[re]===void 0&&(oe[re]=ce[re]);return{$$typeof:a,type:f,key:ae,ref:ue,props:oe,_owner:U.current}}function ye(f,b){return{$$typeof:a,type:f.type,key:b,ref:f.ref,props:f.props,_owner:f._owner}}function Me(f){return typeof f=="object"&&f!==null&&f.$$typeof===a}function ie(f){var b={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(ee){return b[ee]})}var Le=/\/+/g;function Ee(f,b){return typeof f=="object"&&f!==null&&f.key!=null?ie(""+f.key):b.toString(36)}function Ge(f,b,ee,re,oe){var ae=typeof f;(ae==="undefined"||ae==="boolean")&&(f=null);var ue=!1;if(f===null)ue=!0;else switch(ae){case"string":case"number":ue=!0;break;case"object":switch(f.$$typeof){case a:case c:ue=!0}}if(ue)return ue=f,oe=oe(ue),f=re===""?"."+Ee(ue,0):re,L(oe)?(ee="",f!=null&&(ee=f.replace(Le,"$&/")+"/"),Ge(oe,b,ee,"",function(Ce){return Ce})):oe!=null&&(Me(oe)&&(oe=ye(oe,ee+(!oe.key||ue&&ue.key===oe.key?"":(""+oe.key).replace(Le,"$&/")+"/")+f)),b.push(oe)),1;if(ue=0,re=re===""?".":re+":",L(f))for(var ce=0;ce<f.length;ce++){ae=f[ce];var ge=re+Ee(ae,ce);ue+=Ge(ae,b,ee,ge,oe)}else if(ge=J(f),typeof ge=="function")for(f=ge.call(f),ce=0;!(ae=f.next()).done;)ae=ae.value,ge=re+Ee(ae,ce++),ue+=Ge(ae,b,ee,ge,oe);else if(ae==="object")throw b=String(f),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ue}function Ze(f,b,ee){if(f==null)return f;var re=[],oe=0;return Ge(f,re,"","",function(ae){return b.call(ee,ae,oe++)}),re}function Ye(f){if(f._status===-1){var b=f._result;b=b(),b.then(function(ee){(f._status===0||f._status===-1)&&(f._status=1,f._result=ee)},function(ee){(f._status===0||f._status===-1)&&(f._status=2,f._result=ee)}),f._status===-1&&(f._status=0,f._result=b)}if(f._status===1)return f._result.default;throw f._result}var je={current:null},C={transition:null},F={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:C,ReactCurrentOwner:U};function R(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Ze,forEach:function(f,b,ee){Ze(f,function(){b.apply(this,arguments)},ee)},count:function(f){var b=0;return Ze(f,function(){b++}),b},toArray:function(f){return Ze(f,function(b){return b})||[]},only:function(f){if(!Me(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},ne.Component=V,ne.Fragment=l,ne.Profiler=m,ne.PureComponent=pe,ne.StrictMode=p,ne.Suspense=T,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,ne.act=R,ne.cloneElement=function(f,b,ee){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var re=K({},f.props),oe=f.key,ae=f.ref,ue=f._owner;if(b!=null){if(b.ref!==void 0&&(ae=b.ref,ue=U.current),b.key!==void 0&&(oe=""+b.key),f.type&&f.type.defaultProps)var ce=f.type.defaultProps;for(ge in b)X.call(b,ge)&&!z.hasOwnProperty(ge)&&(re[ge]=b[ge]===void 0&&ce!==void 0?ce[ge]:b[ge])}var ge=arguments.length-2;if(ge===1)re.children=ee;else if(1<ge){ce=Array(ge);for(var Ce=0;Ce<ge;Ce++)ce[Ce]=arguments[Ce+2];re.children=ce}return{$$typeof:a,type:f.type,key:oe,ref:ae,props:re,_owner:ue}},ne.createContext=function(f){return f={$$typeof:k,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:j,_context:f},f.Consumer=f},ne.createElement=A,ne.createFactory=function(f){var b=A.bind(null,f);return b.type=f,b},ne.createRef=function(){return{current:null}},ne.forwardRef=function(f){return{$$typeof:I,render:f}},ne.isValidElement=Me,ne.lazy=function(f){return{$$typeof:Q,_payload:{_status:-1,_result:f},_init:Ye}},ne.memo=function(f,b){return{$$typeof:q,type:f,compare:b===void 0?null:b}},ne.startTransition=function(f){var b=C.transition;C.transition={};try{f()}finally{C.transition=b}},ne.unstable_act=R,ne.useCallback=function(f,b){return je.current.useCallback(f,b)},ne.useContext=function(f){return je.current.useContext(f)},ne.useDebugValue=function(){},ne.useDeferredValue=function(f){return je.current.useDeferredValue(f)},ne.useEffect=function(f,b){return je.current.useEffect(f,b)},ne.useId=function(){return je.current.useId()},ne.useImperativeHandle=function(f,b,ee){return je.current.useImperativeHandle(f,b,ee)},ne.useInsertionEffect=function(f,b){return je.current.useInsertionEffect(f,b)},ne.useLayoutEffect=function(f,b){return je.current.useLayoutEffect(f,b)},ne.useMemo=function(f,b){return je.current.useMemo(f,b)},ne.useReducer=function(f,b,ee){return je.current.useReducer(f,b,ee)},ne.useRef=function(f){return je.current.useRef(f)},ne.useState=function(f){return je.current.useState(f)},ne.useSyncExternalStore=function(f,b,ee){return je.current.useSyncExternalStore(f,b,ee)},ne.useTransition=function(){return je.current.useTransition()},ne.version="18.3.1",ne}var ip;function sl(){return ip||(ip=1,_o.exports=px()),_o.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function ux(){if(op)return an;op=1;var a=sl(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,m=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function k(I,T,q){var Q,B={},J=null,le=null;q!==void 0&&(J=""+q),T.key!==void 0&&(J=""+T.key),T.ref!==void 0&&(le=T.ref);for(Q in T)p.call(T,Q)&&!j.hasOwnProperty(Q)&&(B[Q]=T[Q]);if(I&&I.defaultProps)for(Q in T=I.defaultProps,T)B[Q]===void 0&&(B[Q]=T[Q]);return{$$typeof:c,type:I,key:J,ref:le,props:B,_owner:m.current}}return an.Fragment=l,an.jsx=k,an.jsxs=k,an}var lp;function hx(){return lp||(lp=1,Ao.exports=ux()),Ao.exports}var r=hx(),wa={},Fo={exports:{}},lr={},Bo={exports:{}},Wo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function xx(){return cp||(cp=1,(function(a){function c(C,F){var R=C.length;C.push(F);e:for(;0<R;){var f=R-1>>>1,b=C[f];if(0<m(b,F))C[f]=F,C[R]=b,R=f;else break e}}function l(C){return C.length===0?null:C[0]}function p(C){if(C.length===0)return null;var F=C[0],R=C.pop();if(R!==F){C[0]=R;e:for(var f=0,b=C.length,ee=b>>>1;f<ee;){var re=2*(f+1)-1,oe=C[re],ae=re+1,ue=C[ae];if(0>m(oe,R))ae<b&&0>m(ue,oe)?(C[f]=ue,C[ae]=R,f=ae):(C[f]=oe,C[re]=R,f=re);else if(ae<b&&0>m(ue,R))C[f]=ue,C[ae]=R,f=ae;else break e}}return F}function m(C,F){var R=C.sortIndex-F.sortIndex;return R!==0?R:C.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;a.unstable_now=function(){return j.now()}}else{var k=Date,I=k.now();a.unstable_now=function(){return k.now()-I}}var T=[],q=[],Q=1,B=null,J=3,le=!1,K=!1,W=!1,V=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(C){for(var F=l(q);F!==null;){if(F.callback===null)p(q);else if(F.startTime<=C)p(q),F.sortIndex=F.expirationTime,c(T,F);else break;F=l(q)}}function L(C){if(W=!1,se(C),!K)if(l(T)!==null)K=!0,Ye(X);else{var F=l(q);F!==null&&je(L,F.startTime-C)}}function X(C,F){K=!1,W&&(W=!1,fe(A),A=-1),le=!0;var R=J;try{for(se(F),B=l(T);B!==null&&(!(B.expirationTime>F)||C&&!ie());){var f=B.callback;if(typeof f=="function"){B.callback=null,J=B.priorityLevel;var b=f(B.expirationTime<=F);F=a.unstable_now(),typeof b=="function"?B.callback=b:B===l(T)&&p(T),se(F)}else p(T);B=l(T)}if(B!==null)var ee=!0;else{var re=l(q);re!==null&&je(L,re.startTime-F),ee=!1}return ee}finally{B=null,J=R,le=!1}}var U=!1,z=null,A=-1,ye=5,Me=-1;function ie(){return!(a.unstable_now()-Me<ye)}function Le(){if(z!==null){var C=a.unstable_now();Me=C;var F=!0;try{F=z(!0,C)}finally{F?Ee():(U=!1,z=null)}}else U=!1}var Ee;if(typeof pe=="function")Ee=function(){pe(Le)};else if(typeof MessageChannel!="undefined"){var Ge=new MessageChannel,Ze=Ge.port2;Ge.port1.onmessage=Le,Ee=function(){Ze.postMessage(null)}}else Ee=function(){V(Le,0)};function Ye(C){z=C,U||(U=!0,Ee())}function je(C,F){A=V(function(){C(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(C){C.callback=null},a.unstable_continueExecution=function(){K||le||(K=!0,Ye(X))},a.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<C?Math.floor(1e3/C):5},a.unstable_getCurrentPriorityLevel=function(){return J},a.unstable_getFirstCallbackNode=function(){return l(T)},a.unstable_next=function(C){switch(J){case 1:case 2:case 3:var F=3;break;default:F=J}var R=J;J=F;try{return C()}finally{J=R}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(C,F){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=J;J=C;try{return F()}finally{J=R}},a.unstable_scheduleCallback=function(C,F,R){var f=a.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?f+R:f):R=f,C){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=R+b,C={id:Q++,callback:F,priorityLevel:C,startTime:R,expirationTime:b,sortIndex:-1},R>f?(C.sortIndex=R,c(q,C),l(T)===null&&C===l(q)&&(W?(fe(A),A=-1):W=!0,je(L,R-f))):(C.sortIndex=b,c(T,C),K||le||(K=!0,Ye(X))),C},a.unstable_shouldYield=ie,a.unstable_wrapCallback=function(C){var F=J;return function(){var R=J;J=F;try{return C.apply(this,arguments)}finally{J=R}}}})(Wo)),Wo}var dp;function mx(){return dp||(dp=1,Bo.exports=xx()),Bo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function fx(){if(pp)return lr;pp=1;var a=sl(),c=mx();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,m={};function j(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(m[e]=t,e=0;e<t.length;e++)p.add(t[e])}var I=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},B={};function J(e){return T.call(B,e)?!0:T.call(Q,e)?!1:q.test(e)?B[e]=!0:(Q[e]=!0,!1)}function le(e,t,s,n){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,t,s,n){if(t===null||typeof t=="undefined"||le(e,t,s,n))return!0;if(n)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,s,n,i,o,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=d}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function pe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fe,pe);V[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fe,pe);V[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fe,pe);V[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function se(e,t,s,n){var i=V.hasOwnProperty(t)?V[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K(t,s,i,n)&&(s=null),n||i===null?J(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):i.mustUseProperty?e[i.propertyName]=s===null?i.type===3?!1:"":s:(t=i.attributeName,n=i.attributeNamespace,s===null?e.removeAttribute(t):(i=i.type,s=i===3||i===4&&s===!0?"":""+s,n?e.setAttributeNS(n,t,s):e.setAttribute(t,s))))}var L=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),U=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),ie=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),C=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,f;function b(e){if(f===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);f=t&&t[1]||""}return`
`+f+e}var ee=!1;function re(e,t){if(!e||ee)return"";ee=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var n=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){n=y}e.call(t.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),o=n.stack.split(`
`),d=i.length-1,u=o.length-1;1<=d&&0<=u&&i[d]!==o[u];)u--;for(;1<=d&&0<=u;d--,u--)if(i[d]!==o[u]){if(d!==1||u!==1)do if(d--,u--,0>u||i[d]!==o[u]){var h=`
`+i[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=u);break}}}finally{ee=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?b(e):""}function oe(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case U:return"Portal";case ye:return"Profiler";case A:return"StrictMode";case Ee:return"Suspense";case Ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ie:return(e.displayName||"Context")+".Consumer";case Me:return(e._context.displayName||"Context")+".Provider";case Le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ce(e){var t=ge(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof s!="undefined"&&typeof s.get=="function"&&typeof s.set=="function"){var i=s.get,o=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,o.call(this,d)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=Ce(e))}function bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),n="";return e&&(n=ge(e)?e.checked?"true":"false":e.value),e=n,e!==s?(t.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function $a(e,t){var s=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s!=null?s:e._wrapperState.initialChecked})}function ul(e,t){var s=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;s=ce(t.value!=null?t.value:s),e._wrapperState={initialChecked:n,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hl(e,t){t=t.checked,t!=null&&se(e,"checked",t,!1)}function Ha(e,t){hl(e,t);var s=ce(t.value),n=t.type;if(s!=null)n==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qa(e,t.type,s):t.hasOwnProperty("defaultValue")&&Qa(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xl(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function Qa(e,t,s){(t!=="number"||Er(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var js=Array.isArray;function Wt(e,t,s,n){if(e=e.options,t){t={};for(var i=0;i<s.length;i++)t["$"+s[i]]=!0;for(s=0;s<e.length;s++)i=t.hasOwnProperty("$"+e[s].value),e[s].selected!==i&&(e[s].selected=i),i&&n&&(e[s].defaultSelected=!0)}else{for(s=""+ce(s),t=null,i=0;i<e.length;i++){if(e[i].value===s){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ml(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(l(92));if(js(s)){if(1<s.length)throw Error(l(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:ce(s)}}function fl(e,t){var s=ce(t.value),n=ce(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),n!=null&&(e.defaultValue=""+n)}function gl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mn,yl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,s,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,s,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mn=mn||document.createElement("div"),mn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bs(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xu=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(e){xu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ns[t]=Ns[e]})});function jl(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||Ns.hasOwnProperty(e)&&Ns[e]?(""+t).trim():t+"px"}function bl(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var n=s.indexOf("--")===0,i=jl(s,t[s],n);s==="float"&&(s="cssFloat"),n?e.setProperty(s,i):e[s]=i}}var mu=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ya(e,t){if(t){if(mu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function qa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function Xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Ut=null,$t=null;function Nl(e){if(e=Hs(e)){if(typeof Ja!="function")throw Error(l(280));var t=e.stateNode;t&&(t=_n(t),Ja(e.stateNode,e.type,t))}}function wl(e){Ut?$t?$t.push(e):$t=[e]:Ut=e}function kl(){if(Ut){var e=Ut,t=$t;if($t=Ut=null,Nl(e),t)for(e=0;e<t.length;e++)Nl(t[e])}}function Sl(e,t){return e(t)}function El(){}var Za=!1;function Tl(e,t,s){if(Za)return e(t,s);Za=!0;try{return Sl(e,t,s)}finally{Za=!1,(Ut!==null||$t!==null)&&(El(),kl())}}function ws(e,t){var s=e.stateNode;if(s===null)return null;var n=_n(s);if(n===null)return null;s=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(l(231,t,typeof s));return s}var ei=!1;if(I)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){ei=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{ei=!1}function fu(e,t,s,n,i,o,d,u,h){var y=Array.prototype.slice.call(arguments,3);try{t.apply(s,y)}catch(w){this.onError(w)}}var Ss=!1,fn=null,gn=!1,ri=null,gu={onError:function(e){Ss=!0,fn=e}};function vu(e,t,s,n,i,o,d,u,h){Ss=!1,fn=null,fu.apply(gu,arguments)}function yu(e,t,s,n,i,o,d,u,h){if(vu.apply(this,arguments),Ss){if(Ss){var y=fn;Ss=!1,fn=null}else throw Error(l(198));gn||(gn=!0,ri=y)}}function Nt(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function Cl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Il(e){if(Nt(e)!==e)throw Error(l(188))}function ju(e){var t=e.alternate;if(!t){if(t=Nt(e),t===null)throw Error(l(188));return t!==e?null:e}for(var s=e,n=t;;){var i=s.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){s=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===s)return Il(i),e;if(o===n)return Il(i),t;o=o.sibling}throw Error(l(188))}if(s.return!==n.return)s=i,n=o;else{for(var d=!1,u=i.child;u;){if(u===s){d=!0,s=i,n=o;break}if(u===n){d=!0,n=i,s=o;break}u=u.sibling}if(!d){for(u=o.child;u;){if(u===s){d=!0,s=o,n=i;break}if(u===n){d=!0,n=o,s=i;break}u=u.sibling}if(!d)throw Error(l(189))}}if(s.alternate!==n)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?e:t}function zl(e){return e=ju(e),e!==null?Ll(e):null}function Ll(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ll(e);if(t!==null)return t;e=e.sibling}return null}var Rl=c.unstable_scheduleCallback,Ml=c.unstable_cancelCallback,bu=c.unstable_shouldYield,Nu=c.unstable_requestPaint,Oe=c.unstable_now,wu=c.unstable_getCurrentPriorityLevel,ti=c.unstable_ImmediatePriority,Ol=c.unstable_UserBlockingPriority,vn=c.unstable_NormalPriority,ku=c.unstable_LowPriority,Dl=c.unstable_IdlePriority,yn=null,Pr=null;function Su(e){if(Pr&&typeof Pr.onCommitFiberRoot=="function")try{Pr.onCommitFiberRoot(yn,e,void 0,(e.current.flags&128)===128)}catch{}}var Tr=Math.clz32?Math.clz32:Cu,Eu=Math.log,Tu=Math.LN2;function Cu(e){return e>>>=0,e===0?32:31-(Eu(e)/Tu|0)|0}var jn=64,bn=4194304;function Es(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nn(e,t){var s=e.pendingLanes;if(s===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,d=s&268435455;if(d!==0){var u=d&~i;u!==0?n=Es(u):(o&=d,o!==0&&(n=Es(o)))}else d=s&~i,d!==0?n=Es(d):o!==0&&(n=Es(o));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((n&4)!==0&&(n|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)s=31-Tr(t),i=1<<s,n|=e[s],t&=~i;return n}function Iu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(e,t){for(var s=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var d=31-Tr(o),u=1<<d,h=i[d];h===-1?((u&s)===0||(u&n)!==0)&&(i[d]=Iu(u,t)):h<=t&&(e.expiredLanes|=u),o&=~u}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pl(){var e=jn;return jn<<=1,(jn&4194240)===0&&(jn=64),e}function ni(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Ts(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tr(t),e[t]=s}function Lu(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<s;){var i=31-Tr(s),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,s&=~o}}function ai(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var n=31-Tr(s),i=1<<n;i&t|e[n]&t&&(e[n]|=t),s&=~i}}var ve=0;function Al(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var _l,ii,Fl,Bl,Wl,oi=!1,wn=[],Zr=null,et=null,rt=null,Cs=new Map,Is=new Map,tt=[],Ru="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ul(e,t){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":et=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":Cs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Is.delete(t.pointerId)}}function zs(e,t,s,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:s,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hs(t),t!==null&&ii(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mu(e,t,s,n,i){switch(t){case"focusin":return Zr=zs(Zr,e,t,s,n,i),!0;case"dragenter":return et=zs(et,e,t,s,n,i),!0;case"mouseover":return rt=zs(rt,e,t,s,n,i),!0;case"pointerover":var o=i.pointerId;return Cs.set(o,zs(Cs.get(o)||null,e,t,s,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Is.set(o,zs(Is.get(o)||null,e,t,s,n,i)),!0}return!1}function $l(e){var t=wt(e.target);if(t!==null){var s=Nt(t);if(s!==null){if(t=s.tag,t===13){if(t=Cl(s),t!==null){e.blockedOn=t,Wl(e.priority,function(){Fl(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var n=new s.constructor(s.type,s);Ka=n,s.target.dispatchEvent(n),Ka=null}else return t=Hs(s),t!==null&&ii(t),e.blockedOn=s,!1;t.shift()}return!0}function Hl(e,t,s){kn(e)&&s.delete(t)}function Ou(){oi=!1,Zr!==null&&kn(Zr)&&(Zr=null),et!==null&&kn(et)&&(et=null),rt!==null&&kn(rt)&&(rt=null),Cs.forEach(Hl),Is.forEach(Hl)}function Ls(e,t){e.blockedOn===t&&(e.blockedOn=null,oi||(oi=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Ou)))}function Rs(e){function t(i){return Ls(i,e)}if(0<wn.length){Ls(wn[0],e);for(var s=1;s<wn.length;s++){var n=wn[s];n.blockedOn===e&&(n.blockedOn=null)}}for(Zr!==null&&Ls(Zr,e),et!==null&&Ls(et,e),rt!==null&&Ls(rt,e),Cs.forEach(t),Is.forEach(t),s=0;s<tt.length;s++)n=tt[s],n.blockedOn===e&&(n.blockedOn=null);for(;0<tt.length&&(s=tt[0],s.blockedOn===null);)$l(s),s.blockedOn===null&&tt.shift()}var Ht=L.ReactCurrentBatchConfig,Sn=!0;function Du(e,t,s,n){var i=ve,o=Ht.transition;Ht.transition=null;try{ve=1,li(e,t,s,n)}finally{ve=i,Ht.transition=o}}function Pu(e,t,s,n){var i=ve,o=Ht.transition;Ht.transition=null;try{ve=4,li(e,t,s,n)}finally{ve=i,Ht.transition=o}}function li(e,t,s,n){if(Sn){var i=ci(e,t,s,n);if(i===null)Ei(e,t,n,En,s),Ul(e,n);else if(Mu(i,e,t,s,n))n.stopPropagation();else if(Ul(e,n),t&4&&-1<Ru.indexOf(e)){for(;i!==null;){var o=Hs(i);if(o!==null&&_l(o),o=ci(e,t,s,n),o===null&&Ei(e,t,n,En,s),o===i)break;i=o}i!==null&&n.stopPropagation()}else Ei(e,t,n,null,s)}}var En=null;function ci(e,t,s,n){if(En=null,e=Xa(n),e=wt(e),e!==null)if(t=Nt(e),t===null)e=null;else if(s=t.tag,s===13){if(e=Cl(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return En=e,null}function Ql(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wu()){case ti:return 1;case Ol:return 4;case vn:case ku:return 16;case Dl:return 536870912;default:return 16}default:return 16}}var st=null,di=null,Tn=null;function Vl(){if(Tn)return Tn;var e,t=di,s=t.length,n,i="value"in st?st.value:st.textContent,o=i.length;for(e=0;e<s&&t[e]===i[e];e++);var d=s-e;for(n=1;n<=d&&t[s-n]===i[o-n];n++);return Tn=i.slice(e,1<n?1-n:void 0)}function Cn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function Gl(){return!1}function ur(e){function t(s,n,i,o,d){this._reactName=s,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(s=e[u],this[u]=s?s(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?In:Gl,this.isPropagationStopped=Gl,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var Qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pi=ur(Qt),Ms=R({},Qt,{view:0,detail:0}),Au=ur(Ms),ui,hi,Os,zn=R({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Os&&(Os&&e.type==="mousemove"?(ui=e.screenX-Os.screenX,hi=e.screenY-Os.screenY):hi=ui=0,Os=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:hi}}),Yl=ur(zn),_u=R({},zn,{dataTransfer:0}),Fu=ur(_u),Bu=R({},Ms,{relatedTarget:0}),xi=ur(Bu),Wu=R({},Qt,{animationName:0,elapsedTime:0,pseudoElement:0}),Uu=ur(Wu),$u=R({},Qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hu=ur($u),Qu=R({},Qt,{data:0}),ql=ur(Qu),Vu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yu[e])?!!t[e]:!1}function mi(){return qu}var Ku=R({},Ms,{key:function(e){if(e.key){var t=Vu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){return e.type==="keypress"?Cn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xu=ur(Ku),Ju=R({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kl=ur(Ju),Zu=R({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),eh=ur(Zu),rh=R({},Qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=ur(rh),sh=R({},zn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nh=ur(sh),ah=[9,13,27,32],fi=I&&"CompositionEvent"in window,Ds=null;I&&"documentMode"in document&&(Ds=document.documentMode);var ih=I&&"TextEvent"in window&&!Ds,Xl=I&&(!fi||Ds&&8<Ds&&11>=Ds),Jl=" ",Zl=!1;function ec(e,t){switch(e){case"keyup":return ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function oh(e,t){switch(e){case"compositionend":return rc(t);case"keypress":return t.which!==32?null:(Zl=!0,Jl);case"textInput":return e=t.data,e===Jl&&Zl?null:e;default:return null}}function lh(e,t){if(Vt)return e==="compositionend"||!fi&&ec(e,t)?(e=Vl(),Tn=di=st=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xl&&t.locale!=="ko"?null:t.data;default:return null}}var ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ch[e.type]:t==="textarea"}function sc(e,t,s,n){wl(n),t=Dn(t,"onChange"),0<t.length&&(s=new pi("onChange","change",null,s,n),e.push({event:s,listeners:t}))}var Ps=null,As=null;function dh(e){bc(e,0)}function Ln(e){var t=Xt(e);if(bt(t))return e}function ph(e,t){if(e==="change")return t}var nc=!1;if(I){var gi;if(I){var vi="oninput"in document;if(!vi){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),vi=typeof ac.oninput=="function"}gi=vi}else gi=!1;nc=gi&&(!document.documentMode||9<document.documentMode)}function ic(){Ps&&(Ps.detachEvent("onpropertychange",oc),As=Ps=null)}function oc(e){if(e.propertyName==="value"&&Ln(As)){var t=[];sc(t,As,e,Xa(e)),Tl(dh,t)}}function uh(e,t,s){e==="focusin"?(ic(),Ps=t,As=s,Ps.attachEvent("onpropertychange",oc)):e==="focusout"&&ic()}function hh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ln(As)}function xh(e,t){if(e==="click")return Ln(t)}function mh(e,t){if(e==="input"||e==="change")return Ln(t)}function fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Cr=typeof Object.is=="function"?Object.is:fh;function _s(e,t){if(Cr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),n=Object.keys(t);if(s.length!==n.length)return!1;for(n=0;n<s.length;n++){var i=s[n];if(!T.call(t,i)||!Cr(e[i],t[i]))return!1}return!0}function lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,t){var s=lc(e);e=0;for(var n;s;){if(s.nodeType===3){if(n=e+s.textContent.length,e<=t&&n>=t)return{node:s,offset:t-e};e=n}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=lc(s)}}function dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pc(){for(var e=window,t=Er();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Er(e.document)}return t}function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gh(e){var t=pc(),s=e.focusedElem,n=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&dc(s.ownerDocument.documentElement,s)){if(n!==null&&yi(s)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=s.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=cc(s,o);var d=cc(s,n);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vh=I&&"documentMode"in document&&11>=document.documentMode,Gt=null,ji=null,Fs=null,bi=!1;function uc(e,t,s){var n=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;bi||Gt==null||Gt!==Er(n)||(n=Gt,"selectionStart"in n&&yi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Fs&&_s(Fs,n)||(Fs=n,n=Dn(ji,"onSelect"),0<n.length&&(t=new pi("onSelect","select",null,t,s),e.push({event:t,listeners:n}),t.target=Gt)))}function Rn(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var Yt={animationend:Rn("Animation","AnimationEnd"),animationiteration:Rn("Animation","AnimationIteration"),animationstart:Rn("Animation","AnimationStart"),transitionend:Rn("Transition","TransitionEnd")},Ni={},hc={};I&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function Mn(e){if(Ni[e])return Ni[e];if(!Yt[e])return e;var t=Yt[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in hc)return Ni[e]=t[s];return e}var xc=Mn("animationend"),mc=Mn("animationiteration"),fc=Mn("animationstart"),gc=Mn("transitionend"),vc=new Map,yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nt(e,t){vc.set(e,t),j(t,[e])}for(var wi=0;wi<yc.length;wi++){var ki=yc[wi],yh=ki.toLowerCase(),jh=ki[0].toUpperCase()+ki.slice(1);nt(yh,"on"+jh)}nt(xc,"onAnimationEnd"),nt(mc,"onAnimationIteration"),nt(fc,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(gc,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function jc(e,t,s){var n=e.type||"unknown-event";e.currentTarget=s,yu(n,t,void 0,e),e.currentTarget=null}function bc(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var n=e[s],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var d=n.length-1;0<=d;d--){var u=n[d],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==o&&i.isPropagationStopped())break e;jc(i,u,y),o=h}else for(d=0;d<n.length;d++){if(u=n[d],h=u.instance,y=u.currentTarget,u=u.listener,h!==o&&i.isPropagationStopped())break e;jc(i,u,y),o=h}}}if(gn)throw e=ri,gn=!1,ri=null,e}function Ne(e,t){var s=t[Ri];s===void 0&&(s=t[Ri]=new Set);var n=e+"__bubble";s.has(n)||(Nc(t,e,2,!1),s.add(n))}function Si(e,t,s){var n=0;t&&(n|=4),Nc(s,e,n,t)}var On="_reactListening"+Math.random().toString(36).slice(2);function Ws(e){if(!e[On]){e[On]=!0,p.forEach(function(s){s!=="selectionchange"&&(bh.has(s)||Si(s,!1,e),Si(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[On]||(t[On]=!0,Si("selectionchange",!1,t))}}function Nc(e,t,s,n){switch(Ql(t)){case 1:var i=Du;break;case 4:i=Pu;break;default:i=li}s=i.bind(null,t,s,e),i=void 0,!ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,s,{capture:!0,passive:i}):e.addEventListener(t,s,!0):i!==void 0?e.addEventListener(t,s,{passive:i}):e.addEventListener(t,s,!1)}function Ei(e,t,s,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var u=n.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(d===4)for(d=n.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;u!==null;){if(d=wt(u),d===null)return;if(h=d.tag,h===5||h===6){n=o=d;continue e}u=u.parentNode}}n=n.return}Tl(function(){var y=o,w=Xa(s),S=[];e:{var N=vc.get(e);if(N!==void 0){var M=pi,D=e;switch(e){case"keypress":if(Cn(s)===0)break e;case"keydown":case"keyup":M=Xu;break;case"focusin":D="focus",M=xi;break;case"focusout":D="blur",M=xi;break;case"beforeblur":case"afterblur":M=xi;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Yl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Fu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=eh;break;case xc:case mc:case fc:M=Uu;break;case gc:M=th;break;case"scroll":M=Au;break;case"wheel":M=nh;break;case"copy":case"cut":case"paste":M=Hu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Kl}var P=(t&4)!==0,De=!P&&e==="scroll",g=P?N!==null?N+"Capture":null:N;P=[];for(var x=y,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=ws(x,g),E!=null&&P.push(Us(x,E,v)))),De)break;x=x.return}0<P.length&&(N=new M(N,D,null,s,w),S.push({event:N,listeners:P}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",N&&s!==Ka&&(D=s.relatedTarget||s.fromElement)&&(wt(D)||D[Wr]))break e;if((M||N)&&(N=w.window===w?w:(N=w.ownerDocument)?N.defaultView||N.parentWindow:window,M?(D=s.relatedTarget||s.toElement,M=y,D=D?wt(D):null,D!==null&&(De=Nt(D),D!==De||D.tag!==5&&D.tag!==6)&&(D=null)):(M=null,D=y),M!==D)){if(P=Yl,E="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(P=Kl,E="onPointerLeave",g="onPointerEnter",x="pointer"),De=M==null?N:Xt(M),v=D==null?N:Xt(D),N=new P(E,x+"leave",M,s,w),N.target=De,N.relatedTarget=v,E=null,wt(w)===y&&(P=new P(g,x+"enter",D,s,w),P.target=v,P.relatedTarget=De,E=P),De=E,M&&D)r:{for(P=M,g=D,x=0,v=P;v;v=qt(v))x++;for(v=0,E=g;E;E=qt(E))v++;for(;0<x-v;)P=qt(P),x--;for(;0<v-x;)g=qt(g),v--;for(;x--;){if(P===g||g!==null&&P===g.alternate)break r;P=qt(P),g=qt(g)}P=null}else P=null;M!==null&&wc(S,N,M,P,!1),D!==null&&De!==null&&wc(S,De,D,P,!0)}}e:{if(N=y?Xt(y):window,M=N.nodeName&&N.nodeName.toLowerCase(),M==="select"||M==="input"&&N.type==="file")var _=ph;else if(tc(N))if(nc)_=mh;else{_=hh;var $=uh}else(M=N.nodeName)&&M.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(_=xh);if(_&&(_=_(e,y))){sc(S,_,s,w);break e}$&&$(e,N,y),e==="focusout"&&($=N._wrapperState)&&$.controlled&&N.type==="number"&&Qa(N,"number",N.value)}switch($=y?Xt(y):window,e){case"focusin":(tc($)||$.contentEditable==="true")&&(Gt=$,ji=y,Fs=null);break;case"focusout":Fs=ji=Gt=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,uc(S,s,w);break;case"selectionchange":if(vh)break;case"keydown":case"keyup":uc(S,s,w)}var H;if(fi)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Vt?ec(e,s)&&(G="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(G="onCompositionStart");G&&(Xl&&s.locale!=="ko"&&(Vt||G!=="onCompositionStart"?G==="onCompositionEnd"&&Vt&&(H=Vl()):(st=w,di="value"in st?st.value:st.textContent,Vt=!0)),$=Dn(y,G),0<$.length&&(G=new ql(G,e,null,s,w),S.push({event:G,listeners:$}),H?G.data=H:(H=rc(s),H!==null&&(G.data=H)))),(H=ih?oh(e,s):lh(e,s))&&(y=Dn(y,"onBeforeInput"),0<y.length&&(w=new ql("onBeforeInput","beforeinput",null,s,w),S.push({event:w,listeners:y}),w.data=H))}bc(S,t)})}function Us(e,t,s){return{instance:e,listener:t,currentTarget:s}}function Dn(e,t){for(var s=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ws(e,s),o!=null&&n.unshift(Us(e,o,i)),o=ws(e,t),o!=null&&n.push(Us(e,o,i))),e=e.return}return n}function qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wc(e,t,s,n,i){for(var o=t._reactName,d=[];s!==null&&s!==n;){var u=s,h=u.alternate,y=u.stateNode;if(h!==null&&h===n)break;u.tag===5&&y!==null&&(u=y,i?(h=ws(s,o),h!=null&&d.unshift(Us(s,h,u))):i||(h=ws(s,o),h!=null&&d.push(Us(s,h,u)))),s=s.return}d.length!==0&&e.push({event:t,listeners:d})}var Nh=/\r\n?/g,wh=/\u0000|\uFFFD/g;function kc(e){return(typeof e=="string"?e:""+e).replace(Nh,`
`).replace(wh,"")}function Pn(e,t,s){if(t=kc(t),kc(e)!==t&&s)throw Error(l(425))}function An(){}var Ti=null,Ci=null;function Ii(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,kh=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc!="undefined"?function(e){return Sc.resolve(null).then(e).catch(Eh)}:zi;function Eh(e){setTimeout(function(){throw e})}function Li(e,t){var s=t,n=0;do{var i=s.nextSibling;if(e.removeChild(s),i&&i.nodeType===8)if(s=i.data,s==="/$"){if(n===0){e.removeChild(i),Rs(t);return}n--}else s!=="$"&&s!=="$?"&&s!=="$!"||n++;s=i}while(s);Rs(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var Kt=Math.random().toString(36).slice(2),Ar="__reactFiber$"+Kt,$s="__reactProps$"+Kt,Wr="__reactContainer$"+Kt,Ri="__reactEvents$"+Kt,Th="__reactListeners$"+Kt,Ch="__reactHandles$"+Kt;function wt(e){var t=e[Ar];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Wr]||s[Ar]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Ec(e);e!==null;){if(s=e[Ar])return s;e=Ec(e)}return t}e=s,s=e.parentNode}return null}function Hs(e){return e=e[Ar]||e[Wr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function _n(e){return e[$s]||null}var Mi=[],Jt=-1;function it(e){return{current:e}}function we(e){0>Jt||(e.current=Mi[Jt],Mi[Jt]=null,Jt--)}function be(e,t){Jt++,Mi[Jt]=e.current,e.current=t}var ot={},qe=it(ot),sr=it(!1),kt=ot;function Zt(e,t){var s=e.type.contextTypes;if(!s)return ot;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in s)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nr(e){return e=e.childContextTypes,e!=null}function Fn(){we(sr),we(qe)}function Tc(e,t,s){if(qe.current!==ot)throw Error(l(168));be(qe,t),be(sr,s)}function Cc(e,t,s){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return s;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(l(108,ue(e)||"Unknown",i));return R({},s,n)}function Bn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,kt=qe.current,be(qe,e),be(sr,sr.current),!0}function Ic(e,t,s){var n=e.stateNode;if(!n)throw Error(l(169));s?(e=Cc(e,t,kt),n.__reactInternalMemoizedMergedChildContext=e,we(sr),we(qe),be(qe,e)):we(sr),be(sr,s)}var Ur=null,Wn=!1,Oi=!1;function zc(e){Ur===null?Ur=[e]:Ur.push(e)}function Ih(e){Wn=!0,zc(e)}function lt(){if(!Oi&&Ur!==null){Oi=!0;var e=0,t=ve;try{var s=Ur;for(ve=1;e<s.length;e++){var n=s[e];do n=n(!0);while(n!==null)}Ur=null,Wn=!1}catch(i){throw Ur!==null&&(Ur=Ur.slice(e+1)),Rl(ti,lt),i}finally{ve=t,Oi=!1}}return null}var es=[],rs=0,Un=null,$n=0,yr=[],jr=0,St=null,$r=1,Hr="";function Et(e,t){es[rs++]=$n,es[rs++]=Un,Un=e,$n=t}function Lc(e,t,s){yr[jr++]=$r,yr[jr++]=Hr,yr[jr++]=St,St=e;var n=$r;e=Hr;var i=32-Tr(n)-1;n&=~(1<<i),s+=1;var o=32-Tr(t)+i;if(30<o){var d=i-i%5;o=(n&(1<<d)-1).toString(32),n>>=d,i-=d,$r=1<<32-Tr(t)+i|s<<i|n,Hr=o+e}else $r=1<<o|s<<i|n,Hr=e}function Di(e){e.return!==null&&(Et(e,1),Lc(e,1,0))}function Pi(e){for(;e===Un;)Un=es[--rs],es[rs]=null,$n=es[--rs],es[rs]=null;for(;e===St;)St=yr[--jr],yr[jr]=null,Hr=yr[--jr],yr[jr]=null,$r=yr[--jr],yr[jr]=null}var hr=null,xr=null,Te=!1,Ir=null;function Rc(e,t){var s=kr(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Mc(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,hr=e,xr=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,hr=e,xr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=St!==null?{id:$r,overflow:Hr}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=kr(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,hr=e,xr=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(Te){var t=xr;if(t){var s=t;if(!Mc(e,t)){if(Ai(e))throw Error(l(418));t=at(s.nextSibling);var n=hr;t&&Mc(e,t)?Rc(n,s):(e.flags=e.flags&-4097|2,Te=!1,hr=e)}}else{if(Ai(e))throw Error(l(418));e.flags=e.flags&-4097|2,Te=!1,hr=e}}}function Oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;hr=e}function Hn(e){if(e!==hr)return!1;if(!Te)return Oc(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ii(e.type,e.memoizedProps)),t&&(t=xr)){if(Ai(e))throw Dc(),Error(l(418));for(;t;)Rc(e,t),t=at(t.nextSibling)}if(Oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){xr=at(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}xr=null}}else xr=hr?at(e.stateNode.nextSibling):null;return!0}function Dc(){for(var e=xr;e;)e=at(e.nextSibling)}function ts(){xr=hr=null,Te=!1}function Fi(e){Ir===null?Ir=[e]:Ir.push(e)}var zh=L.ReactCurrentBatchConfig;function Qs(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(l(309));var n=s.stateNode}if(!n)throw Error(l(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(d){var u=i.refs;d===null?delete u[o]:u[o]=d},t._stringRef=o,t)}if(typeof e!="string")throw Error(l(284));if(!s._owner)throw Error(l(290,e))}return e}function Qn(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pc(e){var t=e._init;return t(e._payload)}function Ac(e){function t(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function s(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function n(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=ft(g,x),g.index=0,g.sibling=null,g}function o(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,x,v,E){return x===null||x.tag!==6?(x=Lo(v,g.mode,E),x.return=g,x):(x=i(x,v),x.return=g,x)}function h(g,x,v,E){var _=v.type;return _===z?w(g,x,v.props.children,E,v.key):x!==null&&(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ye&&Pc(_)===x.type)?(E=i(x,v.props),E.ref=Qs(g,x,v),E.return=g,E):(E=ma(v.type,v.key,v.props,null,g.mode,E),E.ref=Qs(g,x,v),E.return=g,E)}function y(g,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Ro(v,g.mode,E),x.return=g,x):(x=i(x,v.children||[]),x.return=g,x)}function w(g,x,v,E,_){return x===null||x.tag!==7?(x=Ot(v,g.mode,E,_),x.return=g,x):(x=i(x,v),x.return=g,x)}function S(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Lo(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return v=ma(x.type,x.key,x.props,null,g.mode,v),v.ref=Qs(g,null,x),v.return=g,v;case U:return x=Ro(x,g.mode,v),x.return=g,x;case Ye:var E=x._init;return S(g,E(x._payload),v)}if(js(x)||F(x))return x=Ot(x,g.mode,v,null),x.return=g,x;Qn(g,x)}return null}function N(g,x,v,E){var _=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:u(g,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case X:return v.key===_?h(g,x,v,E):null;case U:return v.key===_?y(g,x,v,E):null;case Ye:return _=v._init,N(g,x,_(v._payload),E)}if(js(v)||F(v))return _!==null?null:w(g,x,v,E,null);Qn(g,v)}return null}function M(g,x,v,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,u(x,g,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case X:return g=g.get(E.key===null?v:E.key)||null,h(x,g,E,_);case U:return g=g.get(E.key===null?v:E.key)||null,y(x,g,E,_);case Ye:var $=E._init;return M(g,x,v,$(E._payload),_)}if(js(E)||F(E))return g=g.get(v)||null,w(x,g,E,_,null);Qn(x,E)}return null}function D(g,x,v,E){for(var _=null,$=null,H=x,G=x=0,$e=null;H!==null&&G<v.length;G++){H.index>G?($e=H,H=null):$e=H.sibling;var xe=N(g,H,v[G],E);if(xe===null){H===null&&(H=$e);break}e&&H&&xe.alternate===null&&t(g,H),x=o(xe,x,G),$===null?_=xe:$.sibling=xe,$=xe,H=$e}if(G===v.length)return s(g,H),Te&&Et(g,G),_;if(H===null){for(;G<v.length;G++)H=S(g,v[G],E),H!==null&&(x=o(H,x,G),$===null?_=H:$.sibling=H,$=H);return Te&&Et(g,G),_}for(H=n(g,H);G<v.length;G++)$e=M(H,g,G,v[G],E),$e!==null&&(e&&$e.alternate!==null&&H.delete($e.key===null?G:$e.key),x=o($e,x,G),$===null?_=$e:$.sibling=$e,$=$e);return e&&H.forEach(function(gt){return t(g,gt)}),Te&&Et(g,G),_}function P(g,x,v,E){var _=F(v);if(typeof _!="function")throw Error(l(150));if(v=_.call(v),v==null)throw Error(l(151));for(var $=_=null,H=x,G=x=0,$e=null,xe=v.next();H!==null&&!xe.done;G++,xe=v.next()){H.index>G?($e=H,H=null):$e=H.sibling;var gt=N(g,H,xe.value,E);if(gt===null){H===null&&(H=$e);break}e&&H&&gt.alternate===null&&t(g,H),x=o(gt,x,G),$===null?_=gt:$.sibling=gt,$=gt,H=$e}if(xe.done)return s(g,H),Te&&Et(g,G),_;if(H===null){for(;!xe.done;G++,xe=v.next())xe=S(g,xe.value,E),xe!==null&&(x=o(xe,x,G),$===null?_=xe:$.sibling=xe,$=xe);return Te&&Et(g,G),_}for(H=n(g,H);!xe.done;G++,xe=v.next())xe=M(H,g,G,xe.value,E),xe!==null&&(e&&xe.alternate!==null&&H.delete(xe.key===null?G:xe.key),x=o(xe,x,G),$===null?_=xe:$.sibling=xe,$=xe);return e&&H.forEach(function(cx){return t(g,cx)}),Te&&Et(g,G),_}function De(g,x,v,E){if(typeof v=="object"&&v!==null&&v.type===z&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case X:e:{for(var _=v.key,$=x;$!==null;){if($.key===_){if(_=v.type,_===z){if($.tag===7){s(g,$.sibling),x=i($,v.props.children),x.return=g,g=x;break e}}else if($.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ye&&Pc(_)===$.type){s(g,$.sibling),x=i($,v.props),x.ref=Qs(g,$,v),x.return=g,g=x;break e}s(g,$);break}else t(g,$);$=$.sibling}v.type===z?(x=Ot(v.props.children,g.mode,E,v.key),x.return=g,g=x):(E=ma(v.type,v.key,v.props,null,g.mode,E),E.ref=Qs(g,x,v),E.return=g,g=E)}return d(g);case U:e:{for($=v.key;x!==null;){if(x.key===$)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){s(g,x.sibling),x=i(x,v.children||[]),x.return=g,g=x;break e}else{s(g,x);break}else t(g,x);x=x.sibling}x=Ro(v,g.mode,E),x.return=g,g=x}return d(g);case Ye:return $=v._init,De(g,x,$(v._payload),E)}if(js(v))return D(g,x,v,E);if(F(v))return P(g,x,v,E);Qn(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(s(g,x.sibling),x=i(x,v),x.return=g,g=x):(s(g,x),x=Lo(v,g.mode,E),x.return=g,g=x),d(g)):s(g,x)}return De}var ss=Ac(!0),_c=Ac(!1),Vn=it(null),Gn=null,ns=null,Bi=null;function Wi(){Bi=ns=Gn=null}function Ui(e){var t=Vn.current;we(Vn),e._currentValue=t}function $i(e,t,s){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===s)break;e=e.return}}function as(e,t){Gn=e,Bi=ns=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ar=!0),e.firstContext=null)}function br(e){var t=e._currentValue;if(Bi!==e)if(e={context:e,memoizedValue:t,next:null},ns===null){if(Gn===null)throw Error(l(308));ns=e,Gn.dependencies={lanes:0,firstContext:e}}else ns=ns.next=e;return t}var Tt=null;function Hi(e){Tt===null?Tt=[e]:Tt.push(e)}function Fc(e,t,s,n){var i=t.interleaved;return i===null?(s.next=s,Hi(t)):(s.next=i.next,i.next=s),t.interleaved=s,Qr(e,n)}function Qr(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var ct=!1;function Qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,s){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(he&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Qr(e,s)}return i=n.interleaved,i===null?(t.next=t,Hi(n)):(t.next=i.next,i.next=t),n.interleaved=t,Qr(e,s)}function Yn(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,s|=n,t.lanes=s,ai(e,s)}}function Wc(e,t){var s=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,s===n)){var i=null,o=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};o===null?i=o=d:o=o.next=d,s=s.next}while(s!==null);o===null?i=o=t:o=o.next=t}else i=o=t;s={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function qn(e,t,s,n){var i=e.updateQueue;ct=!1;var o=i.firstBaseUpdate,d=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,y=h.next;h.next=null,d===null?o=y:d.next=y,d=h;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==d&&(u===null?w.firstBaseUpdate=y:u.next=y,w.lastBaseUpdate=h))}if(o!==null){var S=i.baseState;d=0,w=y=h=null,u=o;do{var N=u.lane,M=u.eventTime;if((n&N)===N){w!==null&&(w=w.next={eventTime:M,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var D=e,P=u;switch(N=t,M=s,P.tag){case 1:if(D=P.payload,typeof D=="function"){S=D.call(M,S,N);break e}S=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=P.payload,N=typeof D=="function"?D.call(M,S,N):D,N==null)break e;S=R({},S,N);break e;case 2:ct=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,N=i.effects,N===null?i.effects=[u]:N.push(u))}else M={eventTime:M,lane:N,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(y=w=M,h=S):w=w.next=M,d|=N;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;N=u,u=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);if(w===null&&(h=S),i.baseState=h,i.firstBaseUpdate=y,i.lastBaseUpdate=w,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zt|=d,e.lanes=d,e.memoizedState=S}}function Uc(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=s,typeof i!="function")throw Error(l(191,i));i.call(n)}}}var Vs={},_r=it(Vs),Gs=it(Vs),Ys=it(Vs);function Ct(e){if(e===Vs)throw Error(l(174));return e}function Vi(e,t){switch(be(Ys,t),be(Gs,e),be(_r,Vs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ga(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ga(t,e)}we(_r),be(_r,t)}function is(){we(_r),we(Gs),we(Ys)}function $c(e){Ct(Ys.current);var t=Ct(_r.current),s=Ga(t,e.type);t!==s&&(be(Gs,e),be(_r,s))}function Gi(e){Gs.current===e&&(we(_r),we(Gs))}var Ie=it(0);function Kn(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yi=[];function qi(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var Xn=L.ReactCurrentDispatcher,Ki=L.ReactCurrentBatchConfig,It=0,ze=null,_e=null,We=null,Jn=!1,qs=!1,Ks=0,Lh=0;function Ke(){throw Error(l(321))}function Xi(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Cr(e[s],t[s]))return!1;return!0}function Ji(e,t,s,n,i,o){if(It=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xn.current=e===null||e.memoizedState===null?Dh:Ph,e=s(n,i),qs){o=0;do{if(qs=!1,Ks=0,25<=o)throw Error(l(301));o+=1,We=_e=null,t.updateQueue=null,Xn.current=Ah,e=s(n,i)}while(qs)}if(Xn.current=ra,t=_e!==null&&_e.next!==null,It=0,We=_e=ze=null,Jn=!1,t)throw Error(l(300));return e}function Zi(){var e=Ks!==0;return Ks=0,e}function Fr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ze.memoizedState=We=e:We=We.next=e,We}function Nr(){if(_e===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=We===null?ze.memoizedState:We.next;if(t!==null)We=t,_e=e;else{if(e===null)throw Error(l(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},We===null?ze.memoizedState=We=e:We=We.next=e}return We}function Xs(e,t){return typeof t=="function"?t(e):t}function eo(e){var t=Nr(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var n=_e,i=n.baseQueue,o=s.pending;if(o!==null){if(i!==null){var d=i.next;i.next=o.next,o.next=d}n.baseQueue=i=o,s.pending=null}if(i!==null){o=i.next,n=n.baseState;var u=d=null,h=null,y=o;do{var w=y.lane;if((It&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var S={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=S,d=n):h=h.next=S,ze.lanes|=w,zt|=w}y=y.next}while(y!==null&&y!==o);h===null?d=n:h.next=u,Cr(n,t.memoizedState)||(ar=!0),t.memoizedState=n,t.baseState=d,t.baseQueue=h,s.lastRenderedState=n}if(e=s.interleaved,e!==null){i=e;do o=i.lane,ze.lanes|=o,zt|=o,i=i.next;while(i!==e)}else i===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function ro(e){var t=Nr(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var n=s.dispatch,i=s.pending,o=t.memoizedState;if(i!==null){s.pending=null;var d=i=i.next;do o=e(o,d.action),d=d.next;while(d!==i);Cr(o,t.memoizedState)||(ar=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),s.lastRenderedState=o}return[o,n]}function Hc(){}function Qc(e,t){var s=ze,n=Nr(),i=t(),o=!Cr(n.memoizedState,i);if(o&&(n.memoizedState=i,ar=!0),n=n.queue,to(Yc.bind(null,s,n,e),[e]),n.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(s.flags|=2048,Js(9,Gc.bind(null,s,n,i,t),void 0,null),Ue===null)throw Error(l(349));(It&30)!==0||Vc(s,t,i)}return i}function Vc(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Gc(e,t,s,n){t.value=s,t.getSnapshot=n,qc(t)&&Kc(e)}function Yc(e,t,s){return s(function(){qc(t)&&Kc(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Cr(e,s)}catch{return!0}}function Kc(e){var t=Qr(e,1);t!==null&&Mr(t,e,1,-1)}function Xc(e){var t=Fr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:e},t.queue=e,e=e.dispatch=Oh.bind(null,ze,e),[t.memoizedState,e]}function Js(e,t,s,n){return e={tag:e,create:t,destroy:s,deps:n,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(n=s.next,s.next=e,e.next=n,t.lastEffect=e)),e}function Jc(){return Nr().memoizedState}function Zn(e,t,s,n){var i=Fr();ze.flags|=e,i.memoizedState=Js(1|t,s,void 0,n===void 0?null:n)}function ea(e,t,s,n){var i=Nr();n=n===void 0?null:n;var o=void 0;if(_e!==null){var d=_e.memoizedState;if(o=d.destroy,n!==null&&Xi(n,d.deps)){i.memoizedState=Js(t,s,o,n);return}}ze.flags|=e,i.memoizedState=Js(1|t,s,o,n)}function Zc(e,t){return Zn(8390656,8,e,t)}function to(e,t){return ea(2048,8,e,t)}function ed(e,t){return ea(4,2,e,t)}function rd(e,t){return ea(4,4,e,t)}function td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sd(e,t,s){return s=s!=null?s.concat([e]):null,ea(4,4,td.bind(null,t,e),s)}function so(){}function nd(e,t){var s=Nr();t=t===void 0?null:t;var n=s.memoizedState;return n!==null&&t!==null&&Xi(t,n[1])?n[0]:(s.memoizedState=[e,t],e)}function ad(e,t){var s=Nr();t=t===void 0?null:t;var n=s.memoizedState;return n!==null&&t!==null&&Xi(t,n[1])?n[0]:(e=e(),s.memoizedState=[e,t],e)}function id(e,t,s){return(It&21)===0?(e.baseState&&(e.baseState=!1,ar=!0),e.memoizedState=s):(Cr(s,t)||(s=Pl(),ze.lanes|=s,zt|=s,e.baseState=!0),t)}function Rh(e,t){var s=ve;ve=s!==0&&4>s?s:4,e(!0);var n=Ki.transition;Ki.transition={};try{e(!1),t()}finally{ve=s,Ki.transition=n}}function od(){return Nr().memoizedState}function Mh(e,t,s){var n=xt(e);if(s={lane:n,action:s,hasEagerState:!1,eagerState:null,next:null},ld(e))cd(t,s);else if(s=Fc(e,t,s,n),s!==null){var i=rr();Mr(s,e,n,i),dd(s,t,n)}}function Oh(e,t,s){var n=xt(e),i={lane:n,action:s,hasEagerState:!1,eagerState:null,next:null};if(ld(e))cd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var d=t.lastRenderedState,u=o(d,s);if(i.hasEagerState=!0,i.eagerState=u,Cr(u,d)){var h=t.interleaved;h===null?(i.next=i,Hi(t)):(i.next=h.next,h.next=i),t.interleaved=i;return}}catch{}finally{}s=Fc(e,t,i,n),s!==null&&(i=rr(),Mr(s,e,n,i),dd(s,t,n))}}function ld(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function cd(e,t){qs=Jn=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function dd(e,t,s){if((s&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,s|=n,t.lanes=s,ai(e,s)}}var ra={readContext:br,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Dh={readContext:br,useCallback:function(e,t){return Fr().memoizedState=[e,t===void 0?null:t],e},useContext:br,useEffect:Zc,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Zn(4194308,4,td.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Zn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zn(4,2,e,t)},useMemo:function(e,t){var s=Fr();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var n=Fr();return t=s!==void 0?s(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Mh.bind(null,ze,e),[n.memoizedState,e]},useRef:function(e){var t=Fr();return e={current:e},t.memoizedState=e},useState:Xc,useDebugValue:so,useDeferredValue:function(e){return Fr().memoizedState=e},useTransition:function(){var e=Xc(!1),t=e[0];return e=Rh.bind(null,e[1]),Fr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var n=ze,i=Fr();if(Te){if(s===void 0)throw Error(l(407));s=s()}else{if(s=t(),Ue===null)throw Error(l(349));(It&30)!==0||Vc(n,t,s)}i.memoizedState=s;var o={value:s,getSnapshot:t};return i.queue=o,Zc(Yc.bind(null,n,o,e),[e]),n.flags|=2048,Js(9,Gc.bind(null,n,o,s,t),void 0,null),s},useId:function(){var e=Fr(),t=Ue.identifierPrefix;if(Te){var s=Hr,n=$r;s=(n&~(1<<32-Tr(n)-1)).toString(32)+s,t=":"+t+"R"+s,s=Ks++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=Lh++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ph={readContext:br,useCallback:nd,useContext:br,useEffect:to,useImperativeHandle:sd,useInsertionEffect:ed,useLayoutEffect:rd,useMemo:ad,useReducer:eo,useRef:Jc,useState:function(){return eo(Xs)},useDebugValue:so,useDeferredValue:function(e){var t=Nr();return id(t,_e.memoizedState,e)},useTransition:function(){var e=eo(Xs)[0],t=Nr().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Qc,useId:od,unstable_isNewReconciler:!1},Ah={readContext:br,useCallback:nd,useContext:br,useEffect:to,useImperativeHandle:sd,useInsertionEffect:ed,useLayoutEffect:rd,useMemo:ad,useReducer:ro,useRef:Jc,useState:function(){return ro(Xs)},useDebugValue:so,useDeferredValue:function(e){var t=Nr();return _e===null?t.memoizedState=e:id(t,_e.memoizedState,e)},useTransition:function(){var e=ro(Xs)[0],t=Nr().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Qc,useId:od,unstable_isNewReconciler:!1};function zr(e,t){if(e&&e.defaultProps){t=R({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function no(e,t,s,n){t=e.memoizedState,s=s(n,t),s=s==null?t:R({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var ta={isMounted:function(e){return(e=e._reactInternals)?Nt(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var n=rr(),i=xt(e),o=Vr(n,i);o.payload=t,s!=null&&(o.callback=s),t=dt(e,o,i),t!==null&&(Mr(t,e,i,n),Yn(t,e,i))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var n=rr(),i=xt(e),o=Vr(n,i);o.tag=1,o.payload=t,s!=null&&(o.callback=s),t=dt(e,o,i),t!==null&&(Mr(t,e,i,n),Yn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=rr(),n=xt(e),i=Vr(s,n);i.tag=2,t!=null&&(i.callback=t),t=dt(e,i,n),t!==null&&(Mr(t,e,n,s),Yn(t,e,n))}};function pd(e,t,s,n,i,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,d):t.prototype&&t.prototype.isPureReactComponent?!_s(s,n)||!_s(i,o):!0}function ud(e,t,s){var n=!1,i=ot,o=t.contextType;return typeof o=="object"&&o!==null?o=br(o):(i=nr(t)?kt:qe.current,n=t.contextTypes,o=(n=n!=null)?Zt(e,i):ot),t=new t(s,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ta,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function hd(e,t,s,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,n),t.state!==e&&ta.enqueueReplaceState(t,t.state,null)}function ao(e,t,s,n){var i=e.stateNode;i.props=s,i.state=e.memoizedState,i.refs={},Qi(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=br(o):(o=nr(t)?kt:qe.current,i.context=Zt(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(no(e,t,o,s),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ta.enqueueReplaceState(i,i.state,null),qn(e,s,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function os(e,t){try{var s="",n=t;do s+=oe(n),n=n.return;while(n);var i=s}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function io(e,t,s){return{value:e,source:null,stack:s!=null?s:null,digest:t!=null?t:null}}function oo(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var _h=typeof WeakMap=="function"?WeakMap:Map;function xd(e,t,s){s=Vr(-1,s),s.tag=3,s.payload={element:null};var n=t.value;return s.callback=function(){ca||(ca=!0,wo=n),oo(e,t)},s}function md(e,t,s){s=Vr(-1,s),s.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;s.payload=function(){return n(i)},s.callback=function(){oo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(s.callback=function(){oo(e,t),typeof n!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),s}function fd(e,t,s){var n=e.pingCache;if(n===null){n=e.pingCache=new _h;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(s)||(i.add(s),e=Jh.bind(null,e,t,s),t.then(e,e))}function gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vd(e,t,s,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Vr(-1,1),t.tag=2,dt(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Fh=L.ReactCurrentOwner,ar=!1;function er(e,t,s,n){t.child=e===null?_c(t,null,s,n):ss(t,e.child,s,n)}function yd(e,t,s,n,i){s=s.render;var o=t.ref;return as(t,i),n=Ji(e,t,s,n,o,i),s=Zi(),e!==null&&!ar?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gr(e,t,i)):(Te&&s&&Di(t),t.flags|=1,er(e,t,n,i),t.child)}function jd(e,t,s,n,i){if(e===null){var o=s.type;return typeof o=="function"&&!zo(o)&&o.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=o,bd(e,t,o,n,i)):(e=ma(s.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var d=o.memoizedProps;if(s=s.compare,s=s!==null?s:_s,s(d,n)&&e.ref===t.ref)return Gr(e,t,i)}return t.flags|=1,e=ft(o,n),e.ref=t.ref,e.return=t,t.child=e}function bd(e,t,s,n,i){if(e!==null){var o=e.memoizedProps;if(_s(o,n)&&e.ref===t.ref)if(ar=!1,t.pendingProps=n=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ar=!0);else return t.lanes=e.lanes,Gr(e,t,i)}return lo(e,t,s,n,i)}function Nd(e,t,s){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(cs,mr),mr|=s;else{if((s&1073741824)===0)return e=o!==null?o.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(cs,mr),mr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:s,be(cs,mr),mr|=n}else o!==null?(n=o.baseLanes|s,t.memoizedState=null):n=s,be(cs,mr),mr|=n;return er(e,t,i,s),t.child}function wd(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function lo(e,t,s,n,i){var o=nr(s)?kt:qe.current;return o=Zt(t,o),as(t,i),s=Ji(e,t,s,n,o,i),n=Zi(),e!==null&&!ar?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gr(e,t,i)):(Te&&n&&Di(t),t.flags|=1,er(e,t,s,i),t.child)}function kd(e,t,s,n,i){if(nr(s)){var o=!0;Bn(t)}else o=!1;if(as(t,i),t.stateNode===null)na(e,t),ud(t,s,n),ao(t,s,n,i),n=!0;else if(e===null){var d=t.stateNode,u=t.memoizedProps;d.props=u;var h=d.context,y=s.contextType;typeof y=="object"&&y!==null?y=br(y):(y=nr(s)?kt:qe.current,y=Zt(t,y));var w=s.getDerivedStateFromProps,S=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==n||h!==y)&&hd(t,d,n,y),ct=!1;var N=t.memoizedState;d.state=N,qn(t,n,d,i),h=t.memoizedState,u!==n||N!==h||sr.current||ct?(typeof w=="function"&&(no(t,s,w,n),h=t.memoizedState),(u=ct||pd(t,s,u,n,N,h,y))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=h),d.props=n,d.state=h,d.context=y,n=u):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{d=t.stateNode,Bc(e,t),u=t.memoizedProps,y=t.type===t.elementType?u:zr(t.type,u),d.props=y,S=t.pendingProps,N=d.context,h=s.contextType,typeof h=="object"&&h!==null?h=br(h):(h=nr(s)?kt:qe.current,h=Zt(t,h));var M=s.getDerivedStateFromProps;(w=typeof M=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==S||N!==h)&&hd(t,d,n,h),ct=!1,N=t.memoizedState,d.state=N,qn(t,n,d,i);var D=t.memoizedState;u!==S||N!==D||sr.current||ct?(typeof M=="function"&&(no(t,s,M,n),D=t.memoizedState),(y=ct||pd(t,s,y,n,N,D,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,D,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,D,h)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=D),d.props=n,d.state=D,d.context=h,n=y):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),n=!1)}return co(e,t,s,n,o,i)}function co(e,t,s,n,i,o){wd(e,t);var d=(t.flags&128)!==0;if(!n&&!d)return i&&Ic(t,s,!1),Gr(e,t,o);n=t.stateNode,Fh.current=t;var u=d&&typeof s.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&d?(t.child=ss(t,e.child,null,o),t.child=ss(t,null,u,o)):er(e,t,u,o),t.memoizedState=n.state,i&&Ic(t,s,!0),t.child}function Sd(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),Vi(e,t.containerInfo)}function Ed(e,t,s,n,i){return ts(),Fi(i),t.flags|=256,er(e,t,s,n),t.child}var po={dehydrated:null,treeContext:null,retryLane:0};function uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Td(e,t,s){var n=t.pendingProps,i=Ie.current,o=!1,d=(t.flags&128)!==0,u;if((u=d)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Ie,i&1),e===null)return _i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=n.children,e=n.fallback,o?(n=t.mode,o=t.child,d={mode:"hidden",children:d},(n&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=d):o=fa(d,n,0,null),e=Ot(e,n,s,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=uo(s),t.memoizedState=po,e):ho(t,d));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Bh(e,t,d,n,u,i,s);if(o){o=n.fallback,d=t.mode,i=e.child,u=i.sibling;var h={mode:"hidden",children:n.children};return(d&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=h,t.deletions=null):(n=ft(i,h),n.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=ft(u,o):(o=Ot(o,d,s,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,d=e.child.memoizedState,d=d===null?uo(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},o.memoizedState=d,o.childLanes=e.childLanes&~s,t.memoizedState=po,n}return o=e.child,e=o.sibling,n=ft(o,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=s),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n}function ho(e,t){return t=fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sa(e,t,s,n){return n!==null&&Fi(n),ss(t,e.child,null,s),e=ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bh(e,t,s,n,i,o,d){if(s)return t.flags&256?(t.flags&=-257,n=io(Error(l(422))),sa(e,t,d,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=fa({mode:"visible",children:n.children},i,0,null),o=Ot(o,i,d,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,(t.mode&1)!==0&&ss(t,e.child,null,d),t.child.memoizedState=uo(d),t.memoizedState=po,o);if((t.mode&1)===0)return sa(e,t,d,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var u=n.dgst;return n=u,o=Error(l(419)),n=io(o,n,void 0),sa(e,t,d,n)}if(u=(d&e.childLanes)!==0,ar||u){if(n=Ue,n!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|d))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qr(e,i),Mr(n,e,i,-1))}return Io(),n=io(Error(l(421))),sa(e,t,d,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Zh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,xr=at(i.nextSibling),hr=t,Te=!0,Ir=null,e!==null&&(yr[jr++]=$r,yr[jr++]=Hr,yr[jr++]=St,$r=e.id,Hr=e.overflow,St=t),t=ho(t,n.children),t.flags|=4096,t)}function Cd(e,t,s){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),$i(e.return,t,s)}function xo(e,t,s,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:s,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=s,o.tailMode=i)}function Id(e,t,s){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(er(e,t,n.children,s),n=Ie.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,s,t);else if(e.tag===19)Cd(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(be(Ie,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(s=t.child,i=null;s!==null;)e=s.alternate,e!==null&&Kn(e)===null&&(i=s),s=s.sibling;s=i,s===null?(i=t.child,t.child=null):(i=s.sibling,s.sibling=null),xo(t,!1,i,s,o);break;case"backwards":for(s=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Kn(e)===null){t.child=i;break}e=i.sibling,i.sibling=s,s=i,i=e}xo(t,!0,s,null,o);break;case"together":xo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function na(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gr(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,s=ft(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=ft(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Wh(e,t,s){switch(t.tag){case 3:Sd(t),ts();break;case 5:$c(t);break;case 1:nr(t.type)&&Bn(t);break;case 4:Vi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;be(Vn,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(be(Ie,Ie.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Td(e,t,s):(be(Ie,Ie.current&1),e=Gr(e,t,s),e!==null?e.sibling:null);be(Ie,Ie.current&1);break;case 19:if(n=(s&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Id(e,t,s);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ie,Ie.current),n)break;return null;case 22:case 23:return t.lanes=0,Nd(e,t,s)}return Gr(e,t,s)}var zd,mo,Ld,Rd;zd=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},mo=function(){},Ld=function(e,t,s,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ct(_r.current);var o=null;switch(s){case"input":i=$a(e,i),n=$a(e,n),o=[];break;case"select":i=R({},i,{value:void 0}),n=R({},n,{value:void 0}),o=[];break;case"textarea":i=Va(e,i),n=Va(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=An)}Ya(s,n);var d;s=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var u=i[y];for(d in u)u.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?o||(o=[]):(o=o||[]).push(y,null));for(y in n){var h=n[y];if(u=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(s||(s={}),s[d]=h[d])}else s||(o||(o=[]),o.push(y,s)),s=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(o=o||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&Ne("scroll",e),o||u===h||(o=[])):(o=o||[]).push(y,h))}s&&(o=o||[]).push("style",s);var y=o;(t.updateQueue=y)&&(t.flags|=4)}},Rd=function(e,t,s,n){s!==n&&(t.flags|=4)};function Zs(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,n=0;if(t)for(var i=e.child;i!==null;)s|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)s|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=s,t}function Uh(e,t,s){var n=t.pendingProps;switch(Pi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return nr(t.type)&&Fn(),Xe(t),null;case 3:return n=t.stateNode,is(),we(sr),we(qe),qi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ir!==null&&(Eo(Ir),Ir=null))),mo(e,t),Xe(t),null;case 5:Gi(t);var i=Ct(Ys.current);if(s=t.type,e!==null&&t.stateNode!=null)Ld(e,t,s,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(l(166));return Xe(t),null}if(e=Ct(_r.current),Hn(t)){n=t.stateNode,s=t.type;var o=t.memoizedProps;switch(n[Ar]=t,n[$s]=o,e=(t.mode&1)!==0,s){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(i=0;i<Bs.length;i++)Ne(Bs[i],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":ul(n,o),Ne("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",n);break;case"textarea":ml(n,o),Ne("invalid",n)}Ya(s,o),i=null;for(var d in o)if(o.hasOwnProperty(d)){var u=o[d];d==="children"?typeof u=="string"?n.textContent!==u&&(o.suppressHydrationWarning!==!0&&Pn(n.textContent,u,e),i=["children",u]):typeof u=="number"&&n.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Pn(n.textContent,u,e),i=["children",""+u]):m.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&Ne("scroll",n)}switch(s){case"input":Jr(n),xl(n,o,!0);break;case"textarea":Jr(n),gl(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=An)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vl(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(s,{is:n.is}):(e=d.createElement(s),s==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,s),e[Ar]=t,e[$s]=n,zd(e,t,!1,!1),t.stateNode=e;e:{switch(d=qa(s,n),s){case"dialog":Ne("cancel",e),Ne("close",e),i=n;break;case"iframe":case"object":case"embed":Ne("load",e),i=n;break;case"video":case"audio":for(i=0;i<Bs.length;i++)Ne(Bs[i],e);i=n;break;case"source":Ne("error",e),i=n;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),i=n;break;case"details":Ne("toggle",e),i=n;break;case"input":ul(e,n),i=$a(e,n),Ne("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=R({},n,{value:void 0}),Ne("invalid",e);break;case"textarea":ml(e,n),i=Va(e,n),Ne("invalid",e);break;default:i=n}Ya(s,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var h=u[o];o==="style"?bl(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&yl(e,h)):o==="children"?typeof h=="string"?(s!=="textarea"||h!=="")&&bs(e,h):typeof h=="number"&&bs(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(m.hasOwnProperty(o)?h!=null&&o==="onScroll"&&Ne("scroll",e):h!=null&&se(e,o,h,d))}switch(s){case"input":Jr(e),xl(e,n,!1);break;case"textarea":Jr(e),gl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ce(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Wt(e,!!n.multiple,o,!1):n.defaultValue!=null&&Wt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=An)}switch(s){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)Rd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(l(166));if(s=Ct(Ys.current),Ct(_r.current),Hn(t)){if(n=t.stateNode,s=t.memoizedProps,n[Ar]=t,(o=n.nodeValue!==s)&&(e=hr,e!==null))switch(e.tag){case 3:Pn(n.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pn(n.nodeValue,s,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(s.nodeType===9?s:s.ownerDocument).createTextNode(n),n[Ar]=t,t.stateNode=n}return Xe(t),null;case 13:if(we(Ie),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&xr!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Dc(),ts(),t.flags|=98560,o=!1;else if(o=Hn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[Ar]=t}else ts(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),o=!1}else Ir!==null&&(Eo(Ir),Ir=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?Fe===0&&(Fe=3):Io())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return is(),mo(e,t),e===null&&Ws(t.stateNode.containerInfo),Xe(t),null;case 10:return Ui(t.type._context),Xe(t),null;case 17:return nr(t.type)&&Fn(),Xe(t),null;case 19:if(we(Ie),o=t.memoizedState,o===null)return Xe(t),null;if(n=(t.flags&128)!==0,d=o.rendering,d===null)if(n)Zs(o,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Kn(e),d!==null){for(t.flags|=128,Zs(o,!1),n=d.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=s,s=t.child;s!==null;)o=s,e=n,o.flags&=14680066,d=o.alternate,d===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=d.childLanes,o.lanes=d.lanes,o.child=d.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=d.memoizedProps,o.memoizedState=d.memoizedState,o.updateQueue=d.updateQueue,o.type=d.type,e=d.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return be(Ie,Ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>ds&&(t.flags|=128,n=!0,Zs(o,!1),t.lanes=4194304)}else{if(!n)if(e=Kn(d),e!==null){if(t.flags|=128,n=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),Zs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Te)return Xe(t),null}else 2*Oe()-o.renderingStartTime>ds&&s!==1073741824&&(t.flags|=128,n=!0,Zs(o,!1),t.lanes=4194304);o.isBackwards?(d.sibling=t.child,t.child=d):(s=o.last,s!==null?s.sibling=d:t.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,s=Ie.current,be(Ie,n?s&1|2:s&1),t):(Xe(t),null);case 22:case 23:return Co(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(mr&1073741824)!==0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function $h(e,t){switch(Pi(t),t.tag){case 1:return nr(t.type)&&Fn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return is(),we(sr),we(qe),qi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Gi(t),null;case 13:if(we(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ts()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ie),null;case 4:return is(),null;case 10:return Ui(t.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var aa=!1,Je=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,O=null;function ls(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(n){Re(e,t,n)}else s.current=null}function fo(e,t,s){try{s()}catch(n){Re(e,t,n)}}var Md=!1;function Qh(e,t){if(Ti=Sn,e=pc(),yi(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var n=s.getSelection&&s.getSelection();if(n&&n.rangeCount!==0){s=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{s.nodeType,o.nodeType}catch{s=null;break e}var d=0,u=-1,h=-1,y=0,w=0,S=e,N=null;r:for(;;){for(var M;S!==s||i!==0&&S.nodeType!==3||(u=d+i),S!==o||n!==0&&S.nodeType!==3||(h=d+n),S.nodeType===3&&(d+=S.nodeValue.length),(M=S.firstChild)!==null;)N=S,S=M;for(;;){if(S===e)break r;if(N===s&&++y===i&&(u=d),N===o&&++w===n&&(h=d),(M=S.nextSibling)!==null)break;S=N,N=S.parentNode}S=M}s=u===-1||h===-1?null:{start:u,end:h}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ci={focusedElem:e,selectionRange:s},Sn=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var D=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var P=D.memoizedProps,De=D.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?P:zr(t.type,P),De);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(E){Re(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return D=Md,Md=!1,D}function en(e,t,s){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fo(t,s,o)}i=i.next}while(i!==n)}}function ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var n=s.create;s.destroy=n()}s=s.next}while(s!==t)}}function go(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ar],delete t[$s],delete t[Ri],delete t[Th],delete t[Ch])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dd(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,t,s){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=An));else if(n!==4&&(e=e.child,e!==null))for(vo(e,t,s),e=e.sibling;e!==null;)vo(e,t,s),e=e.sibling}function yo(e,t,s){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(yo(e,t,s),e=e.sibling;e!==null;)yo(e,t,s),e=e.sibling}var He=null,Lr=!1;function pt(e,t,s){for(s=s.child;s!==null;)Ad(e,t,s),s=s.sibling}function Ad(e,t,s){if(Pr&&typeof Pr.onCommitFiberUnmount=="function")try{Pr.onCommitFiberUnmount(yn,s)}catch{}switch(s.tag){case 5:Je||ls(s,t);case 6:var n=He,i=Lr;He=null,pt(e,t,s),He=n,Lr=i,He!==null&&(Lr?(e=He,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):He.removeChild(s.stateNode));break;case 18:He!==null&&(Lr?(e=He,s=s.stateNode,e.nodeType===8?Li(e.parentNode,s):e.nodeType===1&&Li(e,s),Rs(e)):Li(He,s.stateNode));break;case 4:n=He,i=Lr,He=s.stateNode.containerInfo,Lr=!0,pt(e,t,s),He=n,Lr=i;break;case 0:case 11:case 14:case 15:if(!Je&&(n=s.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,d=o.destroy;o=o.tag,d!==void 0&&((o&2)!==0||(o&4)!==0)&&fo(s,t,d),i=i.next}while(i!==n)}pt(e,t,s);break;case 1:if(!Je&&(ls(s,t),n=s.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=s.memoizedProps,n.state=s.memoizedState,n.componentWillUnmount()}catch(u){Re(s,t,u)}pt(e,t,s);break;case 21:pt(e,t,s);break;case 22:s.mode&1?(Je=(n=Je)||s.memoizedState!==null,pt(e,t,s),Je=n):pt(e,t,s);break;default:pt(e,t,s)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Hh),t.forEach(function(n){var i=ex.bind(null,e,n);s.has(n)||(s.add(n),n.then(i,i))})}}function Rr(e,t){var s=t.deletions;if(s!==null)for(var n=0;n<s.length;n++){var i=s[n];try{var o=e,d=t,u=d;e:for(;u!==null;){switch(u.tag){case 5:He=u.stateNode,Lr=!1;break e;case 3:He=u.stateNode.containerInfo,Lr=!0;break e;case 4:He=u.stateNode.containerInfo,Lr=!0;break e}u=u.return}if(He===null)throw Error(l(160));Ad(o,d,i),He=null,Lr=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(y){Re(i,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fd(t,e),t=t.sibling}function Fd(e,t){var s=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rr(t,e),Br(e),n&4){try{en(3,e,e.return),ia(3,e)}catch(P){Re(e,e.return,P)}try{en(5,e,e.return)}catch(P){Re(e,e.return,P)}}break;case 1:Rr(t,e),Br(e),n&512&&s!==null&&ls(s,s.return);break;case 5:if(Rr(t,e),Br(e),n&512&&s!==null&&ls(s,s.return),e.flags&32){var i=e.stateNode;try{bs(i,"")}catch(P){Re(e,e.return,P)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,d=s!==null?s.memoizedProps:o,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&hl(i,o),qa(u,d);var y=qa(u,o);for(d=0;d<h.length;d+=2){var w=h[d],S=h[d+1];w==="style"?bl(i,S):w==="dangerouslySetInnerHTML"?yl(i,S):w==="children"?bs(i,S):se(i,w,S,y)}switch(u){case"input":Ha(i,o);break;case"textarea":fl(i,o);break;case"select":var N=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var M=o.value;M!=null?Wt(i,!!o.multiple,M,!1):N!==!!o.multiple&&(o.defaultValue!=null?Wt(i,!!o.multiple,o.defaultValue,!0):Wt(i,!!o.multiple,o.multiple?[]:"",!1))}i[$s]=o}catch(P){Re(e,e.return,P)}}break;case 6:if(Rr(t,e),Br(e),n&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(P){Re(e,e.return,P)}}break;case 3:if(Rr(t,e),Br(e),n&4&&s!==null&&s.memoizedState.isDehydrated)try{Rs(t.containerInfo)}catch(P){Re(e,e.return,P)}break;case 4:Rr(t,e),Br(e);break;case 13:Rr(t,e),Br(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(No=Oe())),n&4&&_d(e);break;case 22:if(w=s!==null&&s.memoizedState!==null,e.mode&1?(Je=(y=Je)||w,Rr(t,e),Je=y):Rr(t,e),Br(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(O=e,w=e.child;w!==null;){for(S=O=w;O!==null;){switch(N=O,M=N.child,N.tag){case 0:case 11:case 14:case 15:en(4,N,N.return);break;case 1:ls(N,N.return);var D=N.stateNode;if(typeof D.componentWillUnmount=="function"){n=N,s=N.return;try{t=n,D.props=t.memoizedProps,D.state=t.memoizedState,D.componentWillUnmount()}catch(P){Re(n,s,P)}}break;case 5:ls(N,N.return);break;case 22:if(N.memoizedState!==null){Ud(S);continue}}M!==null?(M.return=N,O=M):Ud(S)}w=w.sibling}e:for(w=null,S=e;;){if(S.tag===5){if(w===null){w=S;try{i=S.stateNode,y?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=jl("display",d))}catch(P){Re(e,e.return,P)}}}else if(S.tag===6){if(w===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(P){Re(e,e.return,P)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;w===S&&(w=null),S=S.return}w===S&&(w=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Rr(t,e),Br(e),n&4&&_d(e);break;case 21:break;default:Rr(t,e),Br(e)}}function Br(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(Dd(s)){var n=s;break e}s=s.return}throw Error(l(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(bs(i,""),n.flags&=-33);var o=Pd(e);yo(e,o,i);break;case 3:case 4:var d=n.stateNode.containerInfo,u=Pd(e);vo(e,u,d);break;default:throw Error(l(161))}}catch(h){Re(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vh(e,t,s){O=e,Bd(e)}function Bd(e,t,s){for(var n=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&n){var d=i.memoizedState!==null||aa;if(!d){var u=i.alternate,h=u!==null&&u.memoizedState!==null||Je;u=aa;var y=Je;if(aa=d,(Je=h)&&!y)for(O=i;O!==null;)d=O,h=d.child,d.tag===22&&d.memoizedState!==null?$d(i):h!==null?(h.return=d,O=h):$d(i);for(;o!==null;)O=o,Bd(o),o=o.sibling;O=i,aa=u,Je=y}Wd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,O=o):Wd(e)}}function Wd(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||ia(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Je)if(s===null)n.componentDidMount();else{var i=t.elementType===t.type?s.memoizedProps:zr(t.type,s.memoizedProps);n.componentDidUpdate(i,s.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Uc(t,o,n);break;case 3:var d=t.updateQueue;if(d!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}Uc(t,d,s)}break;case 5:var u=t.stateNode;if(s===null&&t.flags&4){s=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&s.focus();break;case"img":h.src&&(s.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var S=w.dehydrated;S!==null&&Rs(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Je||t.flags&512&&go(t)}catch(N){Re(t,t.return,N)}}if(t===e){O=null;break}if(s=t.sibling,s!==null){s.return=t.return,O=s;break}O=t.return}}function Ud(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}function $d(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{ia(4,t)}catch(h){Re(t,s,h)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(h){Re(t,i,h)}}var o=t.return;try{go(t)}catch(h){Re(t,o,h)}break;case 5:var d=t.return;try{go(t)}catch(h){Re(t,d,h)}}}catch(h){Re(t,t.return,h)}if(t===e){O=null;break}var u=t.sibling;if(u!==null){u.return=t.return,O=u;break}O=t.return}}var Gh=Math.ceil,oa=L.ReactCurrentDispatcher,jo=L.ReactCurrentOwner,wr=L.ReactCurrentBatchConfig,he=0,Ue=null,Pe=null,Qe=0,mr=0,cs=it(0),Fe=0,rn=null,zt=0,la=0,bo=0,tn=null,ir=null,No=0,ds=1/0,Yr=null,ca=!1,wo=null,ut=null,da=!1,ht=null,pa=0,sn=0,ko=null,ua=-1,ha=0;function rr(){return(he&6)!==0?Oe():ua!==-1?ua:ua=Oe()}function xt(e){return(e.mode&1)===0?1:(he&2)!==0&&Qe!==0?Qe&-Qe:zh.transition!==null?(ha===0&&(ha=Pl()),ha):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Ql(e.type)),e)}function Mr(e,t,s,n){if(50<sn)throw sn=0,ko=null,Error(l(185));Ts(e,s,n),((he&2)===0||e!==Ue)&&(e===Ue&&((he&2)===0&&(la|=s),Fe===4&&mt(e,Qe)),or(e,n),s===1&&he===0&&(t.mode&1)===0&&(ds=Oe()+500,Wn&&lt()))}function or(e,t){var s=e.callbackNode;zu(e,t);var n=Nn(e,e===Ue?Qe:0);if(n===0)s!==null&&Ml(s),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(s!=null&&Ml(s),t===1)e.tag===0?Ih(Qd.bind(null,e)):zc(Qd.bind(null,e)),Sh(function(){(he&6)===0&&lt()}),s=null;else{switch(Al(n)){case 1:s=ti;break;case 4:s=Ol;break;case 16:s=vn;break;case 536870912:s=Dl;break;default:s=vn}s=Zd(s,Hd.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function Hd(e,t){if(ua=-1,ha=0,(he&6)!==0)throw Error(l(327));var s=e.callbackNode;if(ps()&&e.callbackNode!==s)return null;var n=Nn(e,e===Ue?Qe:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=xa(e,n);else{t=n;var i=he;he|=2;var o=Gd();(Ue!==e||Qe!==t)&&(Yr=null,ds=Oe()+500,Rt(e,t));do try{Kh();break}catch(u){Vd(e,u)}while(!0);Wi(),oa.current=o,he=i,Pe!==null?t=0:(Ue=null,Qe=0,t=Fe)}if(t!==0){if(t===2&&(i=si(e),i!==0&&(n=i,t=So(e,i))),t===1)throw s=rn,Rt(e,0),mt(e,n),or(e,Oe()),s;if(t===6)mt(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Yh(i)&&(t=xa(e,n),t===2&&(o=si(e),o!==0&&(n=o,t=So(e,o))),t===1))throw s=rn,Rt(e,0),mt(e,n),or(e,Oe()),s;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(l(345));case 2:Mt(e,ir,Yr);break;case 3:if(mt(e,n),(n&130023424)===n&&(t=No+500-Oe(),10<t)){if(Nn(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){rr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zi(Mt.bind(null,e,ir,Yr),t);break}Mt(e,ir,Yr);break;case 4:if(mt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var d=31-Tr(n);o=1<<d,d=t[d],d>i&&(i=d),n&=~o}if(n=i,n=Oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Gh(n/1960))-n,10<n){e.timeoutHandle=zi(Mt.bind(null,e,ir,Yr),n);break}Mt(e,ir,Yr);break;case 5:Mt(e,ir,Yr);break;default:throw Error(l(329))}}}return or(e,Oe()),e.callbackNode===s?Hd.bind(null,e):null}function So(e,t){var s=tn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=xa(e,t),e!==2&&(t=ir,ir=s,t!==null&&Eo(t)),e}function Eo(e){ir===null?ir=e:ir.push.apply(ir,e)}function Yh(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var n=0;n<s.length;n++){var i=s[n],o=i.getSnapshot;i=i.value;try{if(!Cr(o(),i))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~bo,t&=~la,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Tr(t),n=1<<s;e[s]=-1,t&=~n}}function Qd(e){if((he&6)!==0)throw Error(l(327));ps();var t=Nn(e,0);if((t&1)===0)return or(e,Oe()),null;var s=xa(e,t);if(e.tag!==0&&s===2){var n=si(e);n!==0&&(t=n,s=So(e,n))}if(s===1)throw s=rn,Rt(e,0),mt(e,t),or(e,Oe()),s;if(s===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,ir,Yr),or(e,Oe()),null}function To(e,t){var s=he;he|=1;try{return e(t)}finally{he=s,he===0&&(ds=Oe()+500,Wn&&lt())}}function Lt(e){ht!==null&&ht.tag===0&&(he&6)===0&&ps();var t=he;he|=1;var s=wr.transition,n=ve;try{if(wr.transition=null,ve=1,e)return e()}finally{ve=n,wr.transition=s,he=t,(he&6)===0&&lt()}}function Co(){mr=cs.current,we(cs)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,kh(s)),Pe!==null)for(s=Pe.return;s!==null;){var n=s;switch(Pi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fn();break;case 3:is(),we(sr),we(qe),qi();break;case 5:Gi(n);break;case 4:is();break;case 13:we(Ie);break;case 19:we(Ie);break;case 10:Ui(n.type._context);break;case 22:case 23:Co()}s=s.return}if(Ue=e,Pe=e=ft(e.current,null),Qe=mr=t,Fe=0,rn=null,bo=la=zt=0,ir=tn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(s=Tt[t],n=s.interleaved,n!==null){s.interleaved=null;var i=n.next,o=s.pending;if(o!==null){var d=o.next;o.next=i,n.next=d}s.pending=n}Tt=null}return e}function Vd(e,t){do{var s=Pe;try{if(Wi(),Xn.current=ra,Jn){for(var n=ze.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Jn=!1}if(It=0,We=_e=ze=null,qs=!1,Ks=0,jo.current=null,s===null||s.return===null){Fe=1,rn=t,Pe=null;break}e:{var o=e,d=s.return,u=s,h=t;if(t=Qe,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=u,S=w.tag;if((w.mode&1)===0&&(S===0||S===11||S===15)){var N=w.alternate;N?(w.updateQueue=N.updateQueue,w.memoizedState=N.memoizedState,w.lanes=N.lanes):(w.updateQueue=null,w.memoizedState=null)}var M=gd(d);if(M!==null){M.flags&=-257,vd(M,d,u,o,t),M.mode&1&&fd(o,y,t),t=M,h=y;var D=t.updateQueue;if(D===null){var P=new Set;P.add(h),t.updateQueue=P}else D.add(h);break e}else{if((t&1)===0){fd(o,y,t),Io();break e}h=Error(l(426))}}else if(Te&&u.mode&1){var De=gd(d);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),vd(De,d,u,o,t),Fi(os(h,u));break e}}o=h=os(h,u),Fe!==4&&(Fe=2),tn===null?tn=[o]:tn.push(o),o=d;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=xd(o,h,t);Wc(o,g);break e;case 1:u=h;var x=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ut===null||!ut.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=md(o,u,t);Wc(o,E);break e}}o=o.return}while(o!==null)}qd(s)}catch(_){t=_,Pe===s&&s!==null&&(Pe=s=s.return);continue}break}while(!0)}function Gd(){var e=oa.current;return oa.current=ra,e===null?ra:e}function Io(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ue===null||(zt&268435455)===0&&(la&268435455)===0||mt(Ue,Qe)}function xa(e,t){var s=he;he|=2;var n=Gd();(Ue!==e||Qe!==t)&&(Yr=null,Rt(e,t));do try{qh();break}catch(i){Vd(e,i)}while(!0);if(Wi(),he=s,oa.current=n,Pe!==null)throw Error(l(261));return Ue=null,Qe=0,Fe}function qh(){for(;Pe!==null;)Yd(Pe)}function Kh(){for(;Pe!==null&&!bu();)Yd(Pe)}function Yd(e){var t=Jd(e.alternate,e,mr);e.memoizedProps=e.pendingProps,t===null?qd(e):Pe=t,jo.current=null}function qd(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=Uh(s,t,mr),s!==null){Pe=s;return}}else{if(s=$h(s,t),s!==null){s.flags&=32767,Pe=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Fe===0&&(Fe=5)}function Mt(e,t,s){var n=ve,i=wr.transition;try{wr.transition=null,ve=1,Xh(e,t,s,n)}finally{wr.transition=i,ve=n}return null}function Xh(e,t,s,n){do ps();while(ht!==null);if((he&6)!==0)throw Error(l(327));s=e.finishedWork;var i=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=s.lanes|s.childLanes;if(Lu(e,o),e===Ue&&(Pe=Ue=null,Qe=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||da||(da=!0,Zd(vn,function(){return ps(),null})),o=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||o){o=wr.transition,wr.transition=null;var d=ve;ve=1;var u=he;he|=4,jo.current=null,Qh(e,s),Fd(s,e),gh(Ci),Sn=!!Ti,Ci=Ti=null,e.current=s,Vh(s),Nu(),he=u,ve=d,wr.transition=o}else e.current=s;if(da&&(da=!1,ht=e,pa=i),o=e.pendingLanes,o===0&&(ut=null),Su(s.stateNode),or(e,Oe()),t!==null)for(n=e.onRecoverableError,s=0;s<t.length;s++)i=t[s],n(i.value,{componentStack:i.stack,digest:i.digest});if(ca)throw ca=!1,e=wo,wo=null,e;return(pa&1)!==0&&e.tag!==0&&ps(),o=e.pendingLanes,(o&1)!==0?e===ko?sn++:(sn=0,ko=e):sn=0,lt(),null}function ps(){if(ht!==null){var e=Al(pa),t=wr.transition,s=ve;try{if(wr.transition=null,ve=16>e?16:e,ht===null)var n=!1;else{if(e=ht,ht=null,pa=0,(he&6)!==0)throw Error(l(331));var i=he;for(he|=4,O=e.current;O!==null;){var o=O,d=o.child;if((O.flags&16)!==0){var u=o.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(O=y;O!==null;){var w=O;switch(w.tag){case 0:case 11:case 15:en(8,w,o)}var S=w.child;if(S!==null)S.return=w,O=S;else for(;O!==null;){w=O;var N=w.sibling,M=w.return;if(Od(w),w===y){O=null;break}if(N!==null){N.return=M,O=N;break}O=M}}}var D=o.alternate;if(D!==null){var P=D.child;if(P!==null){D.child=null;do{var De=P.sibling;P.sibling=null,P=De}while(P!==null)}}O=o}}if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,O=d;else e:for(;O!==null;){if(o=O,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:en(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,O=g;break e}O=o.return}}var x=e.current;for(O=x;O!==null;){d=O;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,O=v;else e:for(d=x;O!==null;){if(u=O,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:ia(9,u)}}catch(_){Re(u,u.return,_)}if(u===d){O=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,O=E;break e}O=u.return}}if(he=i,lt(),Pr&&typeof Pr.onPostCommitFiberRoot=="function")try{Pr.onPostCommitFiberRoot(yn,e)}catch{}n=!0}return n}finally{ve=s,wr.transition=t}}return!1}function Kd(e,t,s){t=os(s,t),t=xd(e,t,1),e=dt(e,t,1),t=rr(),e!==null&&(Ts(e,1,t),or(e,t))}function Re(e,t,s){if(e.tag===3)Kd(e,e,s);else for(;t!==null;){if(t.tag===3){Kd(t,e,s);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ut===null||!ut.has(n))){e=os(s,e),e=md(t,e,1),t=dt(t,e,1),e=rr(),t!==null&&(Ts(t,1,e),or(t,e));break}}t=t.return}}function Jh(e,t,s){var n=e.pingCache;n!==null&&n.delete(t),t=rr(),e.pingedLanes|=e.suspendedLanes&s,Ue===e&&(Qe&s)===s&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>Oe()-No?Rt(e,0):bo|=s),or(e,t)}function Xd(e,t){t===0&&((e.mode&1)===0?t=1:(t=bn,bn<<=1,(bn&130023424)===0&&(bn=4194304)));var s=rr();e=Qr(e,t),e!==null&&(Ts(e,t,s),or(e,s))}function Zh(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Xd(e,s)}function ex(e,t){var s=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(s=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(l(314))}n!==null&&n.delete(t),Xd(e,s)}var Jd;Jd=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||sr.current)ar=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return ar=!1,Wh(e,t,s);ar=(e.flags&131072)!==0}else ar=!1,Te&&(t.flags&1048576)!==0&&Lc(t,$n,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;na(e,t),e=t.pendingProps;var i=Zt(t,qe.current);as(t,s),i=Ji(null,t,n,e,i,s);var o=Zi();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nr(n)?(o=!0,Bn(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qi(t),i.updater=ta,t.stateNode=i,i._reactInternals=t,ao(t,n,e,s),t=co(null,t,n,!0,o,s)):(t.tag=0,Te&&o&&Di(t),er(null,t,i,s),t=t.child),t;case 16:n=t.elementType;e:{switch(na(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=tx(n),e=zr(n,e),i){case 0:t=lo(null,t,n,e,s);break e;case 1:t=kd(null,t,n,e,s);break e;case 11:t=yd(null,t,n,e,s);break e;case 14:t=jd(null,t,n,zr(n.type,e),s);break e}throw Error(l(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zr(n,i),lo(e,t,n,i,s);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zr(n,i),kd(e,t,n,i,s);case 3:e:{if(Sd(t),e===null)throw Error(l(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Bc(e,t),qn(t,n,null,s);var d=t.memoizedState;if(n=d.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=os(Error(l(423)),t),t=Ed(e,t,n,s,i);break e}else if(n!==i){i=os(Error(l(424)),t),t=Ed(e,t,n,s,i);break e}else for(xr=at(t.stateNode.containerInfo.firstChild),hr=t,Te=!0,Ir=null,s=_c(t,null,n,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ts(),n===i){t=Gr(e,t,s);break e}er(e,t,n,s)}t=t.child}return t;case 5:return $c(t),e===null&&_i(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,d=i.children,Ii(n,i)?d=null:o!==null&&Ii(n,o)&&(t.flags|=32),wd(e,t),er(e,t,d,s),t.child;case 6:return e===null&&_i(t),null;case 13:return Td(e,t,s);case 4:return Vi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ss(t,null,n,s):er(e,t,n,s),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zr(n,i),yd(e,t,n,i,s);case 7:return er(e,t,t.pendingProps,s),t.child;case 8:return er(e,t,t.pendingProps.children,s),t.child;case 12:return er(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,d=i.value,be(Vn,n._currentValue),n._currentValue=d,o!==null)if(Cr(o.value,d)){if(o.children===i.children&&!sr.current){t=Gr(e,t,s);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){d=o.child;for(var h=u.firstContext;h!==null;){if(h.context===n){if(o.tag===1){h=Vr(-1,s&-s),h.tag=2;var y=o.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}o.lanes|=s,h=o.alternate,h!==null&&(h.lanes|=s),$i(o.return,s,t),u.lanes|=s;break}h=h.next}}else if(o.tag===10)d=o.type===t.type?null:o.child;else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=s,u=d.alternate,u!==null&&(u.lanes|=s),$i(d,s,t),d=o.sibling}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===t){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}er(e,t,i.children,s),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,as(t,s),i=br(i),n=n(i),t.flags|=1,er(e,t,n,s),t.child;case 14:return n=t.type,i=zr(n,t.pendingProps),i=zr(n.type,i),jd(e,t,n,i,s);case 15:return bd(e,t,t.type,t.pendingProps,s);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zr(n,i),na(e,t),t.tag=1,nr(n)?(e=!0,Bn(t)):e=!1,as(t,s),ud(t,n,i),ao(t,n,i,s),co(null,t,n,!0,e,s);case 19:return Id(e,t,s);case 22:return Nd(e,t,s)}throw Error(l(156,t.tag))};function Zd(e,t){return Rl(e,t)}function rx(e,t,s,n){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kr(e,t,s,n){return new rx(e,t,s,n)}function zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tx(e){if(typeof e=="function")return zo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Le)return 11;if(e===Ze)return 14}return 2}function ft(e,t){var s=e.alternate;return s===null?(s=kr(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function ma(e,t,s,n,i,o){var d=2;if(n=e,typeof e=="function")zo(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case z:return Ot(s.children,i,o,t);case A:d=8,i|=8;break;case ye:return e=kr(12,s,t,i|2),e.elementType=ye,e.lanes=o,e;case Ee:return e=kr(13,s,t,i),e.elementType=Ee,e.lanes=o,e;case Ge:return e=kr(19,s,t,i),e.elementType=Ge,e.lanes=o,e;case je:return fa(s,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:d=10;break e;case ie:d=9;break e;case Le:d=11;break e;case Ze:d=14;break e;case Ye:d=16,n=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=kr(d,s,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Ot(e,t,s,n){return e=kr(7,e,n,t),e.lanes=s,e}function fa(e,t,s,n){return e=kr(22,e,n,t),e.elementType=je,e.lanes=s,e.stateNode={isHidden:!1},e}function Lo(e,t,s){return e=kr(6,e,null,t),e.lanes=s,e}function Ro(e,t,s){return t=kr(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sx(e,t,s,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mo(e,t,s,n,i,o,d,u,h){return e=new sx(e,t,s,u,h),t===1?(t=1,o===!0&&(t|=8)):t=0,o=kr(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qi(o),e}function nx(e,t,s){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:n==null?null:""+n,children:e,containerInfo:t,implementation:s}}function ep(e){if(!e)return ot;e=e._reactInternals;e:{if(Nt(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var s=e.type;if(nr(s))return Cc(e,s,t)}return t}function rp(e,t,s,n,i,o,d,u,h){return e=Mo(s,n,!0,e,i,o,d,u,h),e.context=ep(null),s=e.current,n=rr(),i=xt(s),o=Vr(n,i),o.callback=t!=null?t:null,dt(s,o,i),e.current.lanes=i,Ts(e,i,n),or(e,n),e}function ga(e,t,s,n){var i=t.current,o=rr(),d=xt(i);return s=ep(s),t.context===null?t.context=s:t.pendingContext=s,t=Vr(o,d),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=dt(i,t,d),e!==null&&(Mr(e,i,d,o),Yn(e,i,d)),d}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Oo(e,t){tp(e,t),(e=e.alternate)&&tp(e,t)}function ax(){return null}var sp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Do(e){this._internalRoot=e}ya.prototype.render=Do.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));ga(e,t,null,null)},ya.prototype.unmount=Do.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){ga(null,e,null,null)}),t[Wr]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bl();e={blockedOn:null,target:e,priority:t};for(var s=0;s<tt.length&&t!==0&&t<tt[s].priority;s++);tt.splice(s,0,e),s===0&&$l(e)}};function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function np(){}function ix(e,t,s,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var y=va(d);o.call(y)}}var d=rp(t,n,e,0,null,!1,!1,"",np);return e._reactRootContainer=d,e[Wr]=d.current,Ws(e.nodeType===8?e.parentNode:e),Lt(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var u=n;n=function(){var y=va(h);u.call(y)}}var h=Mo(e,0,!1,null,null,!1,!1,"",np);return e._reactRootContainer=h,e[Wr]=h.current,Ws(e.nodeType===8?e.parentNode:e),Lt(function(){ga(t,h,s,n)}),h}function ba(e,t,s,n,i){var o=s._reactRootContainer;if(o){var d=o;if(typeof i=="function"){var u=i;i=function(){var h=va(d);u.call(h)}}ga(t,d,e,i)}else d=ix(s,t,e,i,n);return va(d)}_l=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Es(t.pendingLanes);s!==0&&(ai(t,s|1),or(t,Oe()),(he&6)===0&&(ds=Oe()+500,lt()))}break;case 13:Lt(function(){var n=Qr(e,1);if(n!==null){var i=rr();Mr(n,e,1,i)}}),Oo(e,1)}},ii=function(e){if(e.tag===13){var t=Qr(e,134217728);if(t!==null){var s=rr();Mr(t,e,134217728,s)}Oo(e,134217728)}},Fl=function(e){if(e.tag===13){var t=xt(e),s=Qr(e,t);if(s!==null){var n=rr();Mr(s,e,t,n)}Oo(e,t)}},Bl=function(){return ve},Wl=function(e,t){var s=ve;try{return ve=e,t()}finally{ve=s}},Ja=function(e,t,s){switch(t){case"input":if(Ha(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var n=s[t];if(n!==e&&n.form===e.form){var i=_n(n);if(!i)throw Error(l(90));bt(n),Ha(n,i)}}}break;case"textarea":fl(e,s);break;case"select":t=s.value,t!=null&&Wt(e,!!s.multiple,t,!1)}},Sl=To,El=Lt;var ox={usingClientEntryPoint:!1,Events:[Hs,Xt,_n,wl,kl,To]},nn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lx={bundleType:nn.bundleType,version:nn.version,rendererPackageName:nn.rendererPackageName,rendererConfig:nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zl(e),e===null?null:e.stateNode},findFiberByHostInstance:nn.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{yn=Na.inject(lx),Pr=Na}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox,lr.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Po(t))throw Error(l(200));return nx(e,t,null,s)},lr.createRoot=function(e,t){if(!Po(e))throw Error(l(299));var s=!1,n="",i=sp;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mo(e,1,!1,null,null,s,!1,n,i),e[Wr]=t.current,Ws(e.nodeType===8?e.parentNode:e),new Do(t)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=zl(t),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return Lt(e)},lr.hydrate=function(e,t,s){if(!ja(t))throw Error(l(200));return ba(null,e,t,!0,s)},lr.hydrateRoot=function(e,t,s){if(!Po(e))throw Error(l(405));var n=s!=null&&s.hydratedSources||null,i=!1,o="",d=sp;if(s!=null&&(s.unstable_strictMode===!0&&(i=!0),s.identifierPrefix!==void 0&&(o=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),t=rp(t,null,e,1,s!=null?s:null,i,!1,o,d),e[Wr]=t.current,Ws(e),n)for(e=0;e<n.length;e++)s=n[e],i=s._getVersion,i=i(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,i]:t.mutableSourceEagerHydrationData.push(s,i);return new ya(t)},lr.render=function(e,t,s){if(!ja(t))throw Error(l(200));return ba(null,e,t,!1,s)},lr.unmountComponentAtNode=function(e){if(!ja(e))throw Error(l(40));return e._reactRootContainer?(Lt(function(){ba(null,null,e,!1,function(){e._reactRootContainer=null,e[Wr]=null})}),!0):!1},lr.unstable_batchedUpdates=To,lr.unstable_renderSubtreeIntoContainer=function(e,t,s,n){if(!ja(s))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ba(e,t,s,!1,n)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var up;function gx(){if(up)return Fo.exports;up=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Fo.exports=fx(),Fo.exports}var hp;function vx(){if(hp)return wa;hp=1;var a=gx();return wa.createRoot=a.createRoot,wa.hydrateRoot=a.hydrateRoot,wa}var yx=vx(),Z=sl();const dr=dx(Z);var cr=function(){return cr=Object.assign||function(c){for(var l,p=1,m=arguments.length;p<m;p++){l=arguments[p];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},cr.apply(this,arguments)};function za(a,c,l){if(l||arguments.length===2)for(var p=0,m=c.length,j;p<m;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return a.concat(j||Array.prototype.slice.call(c))}var ke="-ms-",cn="-moz-",me="-webkit-",Fp="comm",Aa="rule",nl="decl",jx="@import",bx="@namespace",Bp="@keyframes",Nx="@layer",Wp=Math.abs,al=String.fromCharCode,qo=Object.assign;function wx(a,c){return Be(a,0)^45?(((c<<2^Be(a,0))<<2^Be(a,1))<<2^Be(a,2))<<2^Be(a,3):0}function Up(a){return a.trim()}function qr(a,c){return(a=c.exec(a))?a[0]:a}function te(a,c,l){return a.replace(c,l)}function ka(a,c,l){return a.indexOf(c,l)}function Be(a,c){return a.charCodeAt(c)|0}function Bt(a,c,l){return a.slice(c,l)}function Or(a){return a.length}function $p(a){return a.length}function on(a,c){return c.push(a),a}function kx(a,c){return a.map(c).join("")}function xp(a,c){return a.filter(function(l){return!qr(l,c)})}var _a=1,hs=1,Hp=0,Sr=0,Ae=0,vs="";function Fa(a,c,l,p,m,j,k,I){return{value:a,root:c,parent:l,type:p,props:m,children:j,line:_a,column:hs,length:k,return:"",siblings:I}}function vt(a,c){return qo(Fa("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function us(a){for(;a.root;)a=vt(a.root,{children:[a]});on(a,a.siblings)}function Sx(){return Ae}function Ex(){return Ae=Sr>0?Be(vs,--Sr):0,hs--,Ae===10&&(hs=1,_a--),Ae}function Dr(){return Ae=Sr<Hp?Be(vs,Sr++):0,hs++,Ae===10&&(hs=1,_a++),Ae}function jt(){return Be(vs,Sr)}function Sa(){return Sr}function Ba(a,c){return Bt(vs,a,c)}function un(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tx(a){return _a=hs=1,Hp=Or(vs=a),Sr=0,[]}function Cx(a){return vs="",a}function Uo(a){return Up(Ba(Sr-1,Ko(a===91?a+2:a===40?a+1:a)))}function Ix(a){for(;(Ae=jt())&&Ae<33;)Dr();return un(a)>2||un(Ae)>3?"":" "}function zx(a,c){for(;--c&&Dr()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return Ba(a,Sa()+(c<6&&jt()==32&&Dr()==32))}function Ko(a){for(;Dr();)switch(Ae){case a:return Sr;case 34:case 39:a!==34&&a!==39&&Ko(Ae);break;case 40:a===41&&Ko(a);break;case 92:Dr();break}return Sr}function Lx(a,c){for(;Dr()&&a+Ae!==57;)if(a+Ae===84&&jt()===47)break;return"/*"+Ba(c,Sr-1)+"*"+al(a===47?a:Dr())}function Rx(a){for(;!un(jt());)Dr();return Ba(a,Sr)}function Mx(a){return Cx(Ea("",null,null,null,[""],a=Tx(a),0,[0],a))}function Ea(a,c,l,p,m,j,k,I,T){for(var q=0,Q=0,B=k,J=0,le=0,K=0,W=1,V=1,fe=1,pe=0,se="",L=m,X=j,U=p,z=se;V;)switch(K=pe,pe=Dr()){case 40:if(K!=108&&Be(z,B-1)==58){ka(z+=te(Uo(pe),"&","&\f"),"&\f",Wp(q?I[q-1]:0))!=-1&&(fe=-1);break}case 34:case 39:case 91:z+=Uo(pe);break;case 9:case 10:case 13:case 32:z+=Ix(K);break;case 92:z+=zx(Sa()-1,7);continue;case 47:switch(jt()){case 42:case 47:on(Ox(Lx(Dr(),Sa()),c,l,T),T),(un(K||1)==5||un(jt()||1)==5)&&Or(z)&&Bt(z,-1,void 0)!==" "&&(z+=" ");break;default:z+="/"}break;case 123*W:I[q++]=Or(z)*fe;case 125*W:case 59:case 0:switch(pe){case 0:case 125:V=0;case 59+Q:fe==-1&&(z=te(z,/\f/g,"")),le>0&&(Or(z)-B||W===0&&K===47)&&on(le>32?fp(z+";",p,l,B-1,T):fp(te(z," ","")+";",p,l,B-2,T),T);break;case 59:z+=";";default:if(on(U=mp(z,c,l,q,Q,m,I,se,L=[],X=[],B,j),j),pe===123)if(Q===0)Ea(z,c,U,U,L,j,B,I,X);else{switch(J){case 99:if(Be(z,3)===110)break;case 108:if(Be(z,2)===97)break;default:Q=0;case 100:case 109:case 115:}Q?Ea(a,U,U,p&&on(mp(a,U,U,0,0,m,I,se,m,L=[],B,X),X),m,X,B,I,p?L:X):Ea(z,U,U,U,[""],X,0,I,X)}}q=Q=le=0,W=fe=1,se=z="",B=k;break;case 58:B=1+Or(z),le=K;default:if(W<1){if(pe==123)--W;else if(pe==125&&W++==0&&Ex()==125)continue}switch(z+=al(pe),pe*W){case 38:fe=Q>0?1:(z+="\f",-1);break;case 44:I[q++]=(Or(z)-1)*fe,fe=1;break;case 64:jt()===45&&(z+=Uo(Dr())),J=jt(),Q=B=Or(se=z+=Rx(Sa())),pe++;break;case 45:K===45&&Or(z)==2&&(W=0)}}return j}function mp(a,c,l,p,m,j,k,I,T,q,Q,B){for(var J=m-1,le=m===0?j:[""],K=$p(le),W=0,V=0,fe=0;W<p;++W)for(var pe=0,se=Bt(a,J+1,J=Wp(V=k[W])),L=a;pe<K;++pe)(L=Up(V>0?le[pe]+" "+se:te(se,/&\f/g,le[pe])))&&(T[fe++]=L);return Fa(a,c,l,m===0?Aa:I,T,q,Q,B)}function Ox(a,c,l,p){return Fa(a,c,l,Fp,al(Sx()),Bt(a,2,-2),0,p)}function fp(a,c,l,p,m){return Fa(a,c,l,nl,Bt(a,0,p),Bt(a,p+1,-1),p,m)}function Qp(a,c,l){switch(wx(a,c)){case 5103:return me+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+a+a;case 4855:return me+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return cn+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return me+a+cn+a+ke+a+a;case 5936:switch(Be(a,c+11)){case 114:return me+a+ke+te(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return me+a+ke+te(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return me+a+ke+te(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return me+a+ke+a+a;case 6165:return me+a+ke+"flex-"+a+a;case 5187:return me+a+te(a,/(\w+).+(:[^]+)/,me+"box-$1$2"+ke+"flex-$1$2")+a;case 5443:return me+a+ke+"flex-item-"+te(a,/flex-|-self/g,"")+(qr(a,/flex-|baseline/)?"":ke+"grid-row-"+te(a,/flex-|-self/g,""))+a;case 4675:return me+a+ke+"flex-line-pack"+te(a,/align-content|flex-|-self/g,"")+a;case 5548:return me+a+ke+te(a,"shrink","negative")+a;case 5292:return me+a+ke+te(a,"basis","preferred-size")+a;case 6060:return me+"box-"+te(a,"-grow","")+me+a+ke+te(a,"grow","positive")+a;case 4554:return me+te(a,/([^-])(transform)/g,"$1"+me+"$2")+a;case 6187:return te(te(te(a,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),a,"")+a;case 5495:case 3959:return te(a,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return te(te(a,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+me+a+a;case 4200:if(!qr(a,/flex-|baseline/))return ke+"grid-column-align"+Bt(a,c)+a;break;case 2592:case 3360:return ke+te(a,"template-","")+a;case 4384:case 3616:return l&&l.some(function(p,m){return c=m,qr(p.props,/grid-\w+-end/)})?~ka(a+(l=l[c].value),"span",0)?a:ke+te(a,"-start","")+a+ke+"grid-row-span:"+(~ka(l,"span",0)?qr(l,/\d+/):+qr(l,/\d+/)-+qr(a,/\d+/))+";":ke+te(a,"-start","")+a;case 4896:case 4128:return l&&l.some(function(p){return qr(p.props,/grid-\w+-start/)})?a:ke+te(te(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return te(a,/(.+)-inline(.+)/,me+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Or(a)-1-c>6)switch(Be(a,c+1)){case 109:if(Be(a,c+4)!==45)break;case 102:return te(a,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+cn+(Be(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~ka(a,"stretch",0)?Qp(te(a,"stretch","fill-available"),c,l)+a:a}break;case 5152:case 5920:return te(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,m,j,k,I,T,q){return ke+m+":"+j+q+(k?ke+m+"-span:"+(I?T:+T-+j)+q:"")+a});case 4949:if(Be(a,c+6)===121)return te(a,":",":"+me)+a;break;case 6444:switch(Be(a,Be(a,14)===45?18:11)){case 120:return te(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Be(a,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+ke+"$2box$3")+a;case 100:return te(a,":",":"+ke)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(a,"scroll-","scroll-snap-")+a}return a}function La(a,c){for(var l="",p=0;p<a.length;p++)l+=c(a[p],p,a,c)||"";return l}function Dx(a,c,l,p){switch(a.type){case Nx:if(a.children.length)break;case jx:case bx:case nl:return a.return=a.return||a.value;case Fp:return"";case Bp:return a.return=a.value+"{"+La(a.children,p)+"}";case Aa:if(!Or(a.value=a.props.join(",")))return""}return Or(l=La(a.children,p))?a.return=a.value+"{"+l+"}":""}function Px(a){var c=$p(a);return function(l,p,m,j){for(var k="",I=0;I<c;I++)k+=a[I](l,p,m,j)||"";return k}}function Ax(a){return function(c){c.root||(c=c.return)&&a(c)}}function _x(a,c,l,p){if(a.length>-1&&!a.return)switch(a.type){case nl:a.return=Qp(a.value,a.length,l);return;case Bp:return La([vt(a,{value:te(a.value,"@","@"+me)})],p);case Aa:if(a.length)return kx(l=a.props,function(m){switch(qr(m,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":us(vt(a,{props:[te(m,/:(read-\w+)/,":"+cn+"$1")]})),us(vt(a,{props:[m]})),qo(a,{props:xp(l,p)});break;case"::placeholder":us(vt(a,{props:[te(m,/:(plac\w+)/,":"+me+"input-$1")]})),us(vt(a,{props:[te(m,/:(plac\w+)/,":"+cn+"$1")]})),us(vt(a,{props:[te(m,/:(plac\w+)/,ke+"input-$1")]})),us(vt(a,{props:[m]})),qo(a,{props:xp(l,p)});break}return""})}}var Fx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fr={},xs=typeof process!="undefined"&&fr!==void 0&&(fr.REACT_APP_SC_ATTR||fr.SC_ATTR)||"data-styled",Vp="active",Gp="data-styled-version",Wa="6.3.10",il=`/*!sc*/
`,dn=typeof window!="undefined"&&typeof document!="undefined",Bx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&fr!==void 0&&fr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&fr.REACT_APP_SC_DISABLE_SPEEDY!==""?fr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&fr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&fr!==void 0&&fr.SC_DISABLE_SPEEDY!==void 0&&fr.SC_DISABLE_SPEEDY!==""&&fr.SC_DISABLE_SPEEDY!=="false"&&fr.SC_DISABLE_SPEEDY);function xn(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Ta=new Map,Ra=new Map,Ca=1,ln=function(a){if(Ta.has(a))return Ta.get(a);for(;Ra.has(Ca);)Ca++;var c=Ca++;return Ta.set(a,c),Ra.set(c,a),c},Wx=function(a,c){Ca=c+1,Ta.set(a,c),Ra.set(c,a)},ol=Object.freeze([]),ms=Object.freeze({});function Ux(a,c,l){return l===void 0&&(l=ms),a.theme!==l.theme&&a.theme||c||l.theme}var Yp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),$x=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hx=/(^-|-$)/g;function gp(a){return a.replace($x,"-").replace(Hx,"")}var Qx=/(a)(d)/gi,vp=function(a){return String.fromCharCode(a+(a>25?39:97))};function Xo(a){var c,l="";for(c=Math.abs(a);c>52;c=c/52|0)l=vp(c%52)+l;return(vp(c%52)+l).replace(Qx,"$1-$2")}var $o,Dt=function(a,c){for(var l=c.length;l;)a=33*a^c.charCodeAt(--l);return a},qp=function(a){return Dt(5381,a)};function Vx(a){return Xo(qp(a)>>>0)}function Gx(a){return a.displayName||a.name||"Component"}function Ho(a){return typeof a=="string"&&!0}var Kp=typeof Symbol=="function"&&Symbol.for,Xp=Kp?Symbol.for("react.memo"):60115,Yx=Kp?Symbol.for("react.forward_ref"):60112,qx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xx=(($o={})[Yx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$o[Xp]=Jp,$o);function yp(a){return("type"in(c=a)&&c.type.$$typeof)===Xp?Jp:"$$typeof"in a?Xx[a.$$typeof]:qx;var c}var Jx=Object.defineProperty,Zx=Object.getOwnPropertyNames,jp=Object.getOwnPropertySymbols,em=Object.getOwnPropertyDescriptor,rm=Object.getPrototypeOf,bp=Object.prototype;function Zp(a,c,l){if(typeof c!="string"){if(bp){var p=rm(c);p&&p!==bp&&Zp(a,p,l)}var m=Zx(c);jp&&(m=m.concat(jp(c)));for(var j=yp(a),k=yp(c),I=0;I<m.length;++I){var T=m[I];if(!(T in Kx||l&&l[T]||k&&T in k||j&&T in j)){var q=em(c,T);try{Jx(a,T,q)}catch{}}}}return a}function fs(a){return typeof a=="function"}function ll(a){return typeof a=="object"&&"styledComponentId"in a}function _t(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function Np(a,c){return a.join("")}function hn(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Jo(a,c,l){if(l===void 0&&(l=!1),!l&&!hn(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)a[p]=Jo(a[p],c[p]);else if(hn(c))for(var p in c)a[p]=Jo(a[p],c[p]);return a}function cl(a,c){Object.defineProperty(a,"toString",{value:c})}var tm=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return a.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)l+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)l-=this.groupSizes[p];return this._cGroup=c,this._cIndex=l,l},a.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,m=p.length,j=m;c>=j;)if((j<<=1)<0)throw xn(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var k=m;k<j;k++)this.groupSizes[k]=0}for(var I=this.indexOfGroup(c+1),T=0,q=(k=0,l.length);k<q;k++)this.tag.insertRule(I,l[k])&&(this.groupSizes[c]++,I++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},a.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),m=p+l;this.groupSizes[c]=0;for(var j=p;j<m;j++)this.tag.deleteRule(p);l>0&&this._cGroup>c&&(this._cIndex-=l)}},a.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],m=this.indexOfGroup(c),j=m+p,k=m;k<j;k++)l+=this.tag.getRule(k)+il;return l},a})(),sm="style[".concat(xs,"][").concat(Gp,'="').concat(Wa,'"]'),nm=new RegExp("^".concat(xs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wp=function(a){return typeof ShadowRoot!="undefined"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11},Zo=function(a){if(!a)return document;if(wp(a))return a;if("getRootNode"in a){var c=a.getRootNode();if(wp(c))return c}return document},am=function(a,c,l){for(var p,m=l.split(","),j=0,k=m.length;j<k;j++)(p=m[j])&&a.registerName(c,p)},im=function(a,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(il),m=[],j=0,k=p.length;j<k;j++){var I=p[j].trim();if(I){var T=I.match(nm);if(T){var q=0|parseInt(T[1],10),Q=T[2];q!==0&&(Wx(Q,q),am(a,Q,T[3]),a.getTag().insertRules(q,m)),m.length=0}else m.push(I)}}},Qo=function(a){for(var c=Zo(a.options.target).querySelectorAll(sm),l=0,p=c.length;l<p;l++){var m=c[l];m&&m.getAttribute(xs)!==Vp&&(im(a,m),m.parentNode&&m.parentNode.removeChild(m))}};function om(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var eu=function(a){var c=document.head,l=a||c,p=document.createElement("style"),m=(function(I){var T=Array.from(I.querySelectorAll("style[".concat(xs,"]")));return T[T.length-1]})(l),j=m!==void 0?m.nextSibling:null;p.setAttribute(xs,Vp),p.setAttribute(Gp,Wa);var k=om();return k&&p.setAttribute("nonce",k),l.insertBefore(p,j),p},lm=(function(){function a(c){this.element=eu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var p;if(l.sheet)return l.sheet;for(var m=(p=l.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,j=0,k=m.length;j<k;j++){var I=m[j];if(I.ownerNode===l)return I}throw xn(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},a})(),cm=(function(){function a(c){this.element=eu(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),dm=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),kp=dn,pm={isServer:!dn,useCSSOMInjection:!Bx},ru=(function(){function a(c,l,p){c===void 0&&(c=ms),l===void 0&&(l={});var m=this;this.options=cr(cr({},pm),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&dn&&kp&&(kp=!1,Qo(this)),cl(this,function(){return(function(j){for(var k=j.getTag(),I=k.length,T="",q=function(B){var J=(function(fe){return Ra.get(fe)})(B);if(J===void 0)return"continue";var le=j.names.get(J);if(le===void 0||!le.size)return"continue";var K=k.getGroup(B);if(K.length===0)return"continue";var W=xs+".g"+B+'[id="'+J+'"]',V="";le.forEach(function(fe){fe.length>0&&(V+=fe+",")}),T+=K+W+'{content:"'+V+'"}'+il},Q=0;Q<I;Q++)q(Q);return T})(m)})}return a.registerId=function(c){return ln(c)},a.prototype.rehydrate=function(){!this.server&&dn&&Qo(this)},a.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var p=new a(cr(cr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&dn&&c.target!==this.options.target&&Zo(this.options.target)!==Zo(c.target)&&Qo(p),p},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,m=l.target;return l.isServer?new dm(m):p?new lm(m):new cm(m)})(this.options),new tm(c)));var c},a.prototype.hasNameForId=function(c,l){var p,m;return(m=(p=this.names.get(c))===null||p===void 0?void 0:p.has(l))!==null&&m!==void 0&&m},a.prototype.registerName=function(c,l){ln(c);var p=this.names.get(c);p?p.add(l):this.names.set(c,new Set([l]))},a.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(ln(c),p)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(ln(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),um=/&/g,Kr=47,Pt=42;function Sp(a){if(a.indexOf("}")===-1)return!1;for(var c=a.length,l=0,p=0,m=!1,j=0;j<c;j++){var k=a.charCodeAt(j);if(p!==0||m||k!==Kr||a.charCodeAt(j+1)!==Pt)if(m)k===Pt&&a.charCodeAt(j+1)===Kr&&(m=!1,j++);else if(k!==34&&k!==39||j!==0&&a.charCodeAt(j-1)===92){if(p===0){if(k===123)l++;else if(k===125&&--l<0)return!0}}else p===0?p=k:p===k&&(p=0);else m=!0,j++}return l!==0||p!==0}function tu(a,c){return a.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=tu(l.children,c)),l})}function hm(a){var c,l,p,m=ms,j=m.options,k=j===void 0?ms:j,I=m.plugins,T=I===void 0?ol:I,q=function(K,W,V){return V.startsWith(l)&&V.endsWith(l)&&V.replaceAll(l,"").length>0?".".concat(c):K},Q=T.slice();Q.push(function(K){K.type===Aa&&K.value.includes("&")&&(p||(p=new RegExp("\\".concat(l,"\\b"),"g")),K.props[0]=K.props[0].replace(um,l).replace(p,q))}),k.prefix&&Q.push(_x),Q.push(Dx);var B=[],J=Px(Q.concat(Ax(function(K){return B.push(K)}))),le=function(K,W,V,fe){W===void 0&&(W=""),V===void 0&&(V=""),fe===void 0&&(fe="&"),c=fe,l=W,p=void 0;var pe=(function(L){if(!Sp(L))return L;for(var X=L.length,U="",z=0,A=0,ye=0,Me=!1,ie=0;ie<X;ie++){var Le=L.charCodeAt(ie);if(ye!==0||Me||Le!==Kr||L.charCodeAt(ie+1)!==Pt)if(Me)Le===Pt&&L.charCodeAt(ie+1)===Kr&&(Me=!1,ie++);else if(Le!==34&&Le!==39||ie!==0&&L.charCodeAt(ie-1)===92){if(ye===0)if(Le===123)A++;else if(Le===125){if(--A<0){for(var Ee=ie+1;Ee<X;){var Ge=L.charCodeAt(Ee);if(Ge===59||Ge===10)break;Ee++}Ee<X&&L.charCodeAt(Ee)===59&&Ee++,A=0,ie=Ee-1,z=Ee;continue}A===0&&(U+=L.substring(z,ie+1),z=ie+1)}else Le===59&&A===0&&(U+=L.substring(z,ie+1),z=ie+1)}else ye===0?ye=Le:ye===Le&&(ye=0);else Me=!0,ie++}if(z<X){var Ze=L.substring(z);Sp(Ze)||(U+=Ze)}return U})((function(L){if(L.indexOf("//")===-1)return L;for(var X=L.length,U=[],z=0,A=0,ye=0,Me=0;A<X;){var ie=L.charCodeAt(A);if(ie!==34&&ie!==39||A!==0&&L.charCodeAt(A-1)===92)if(ye===0)if(ie===Kr&&A+1<X&&L.charCodeAt(A+1)===Pt){for(A+=2;A+1<X&&(L.charCodeAt(A)!==Pt||L.charCodeAt(A+1)!==Kr);)A++;A+=2}else if(ie===40&&A>=3&&(32|L.charCodeAt(A-1))==108&&(32|L.charCodeAt(A-2))==114&&(32|L.charCodeAt(A-3))==117)Me=1,A++;else if(Me>0)ie===41?Me--:ie===40&&Me++,A++;else if(ie===Pt&&A+1<X&&L.charCodeAt(A+1)===Kr)A>z&&U.push(L.substring(z,A)),z=A+=2;else if(ie===Kr&&A+1<X&&L.charCodeAt(A+1)===Kr){for(A>z&&U.push(L.substring(z,A));A<X&&L.charCodeAt(A)!==10;)A++;z=A}else A++;else A++;else ye===0?ye=ie:ye===ie&&(ye=0),A++}return z===0?L:(z<X&&U.push(L.substring(z)),U.join(""))})(K)),se=Mx(V||W?"".concat(V," ").concat(W," { ").concat(pe," }"):pe);return k.namespace&&(se=tu(se,k.namespace)),B=[],La(se,J),B};return le.hash=T.length?T.reduce(function(K,W){return W.name||xn(15),Dt(K,W.name)},5381).toString():"",le}var xm=new ru,el=hm(),su=dr.createContext({shouldForwardProp:void 0,styleSheet:xm,stylis:el});su.Consumer;dr.createContext(void 0);function Ep(){return dr.useContext(su)}var mm=(function(){function a(c,l){var p=this;this.inject=function(m,j){j===void 0&&(j=el);var k=p.name+j.hash;m.hasNameForId(p.id,k)||m.insertRules(p.id,k,j(p.rules,k,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,cl(this,function(){throw xn(12,String(p.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=el),this.name+c.hash},a})();function fm(a,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||a in Fx||a.startsWith("--")?String(c).trim():"".concat(c,"px")}var gm=function(a){return a>="A"&&a<="Z"};function Tp(a){for(var c="",l=0;l<a.length;l++){var p=a[l];if(l===1&&p==="-"&&a[0]==="-")return a;gm(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var nu=function(a){return a==null||a===!1||a===""},au=function(a){var c=[];for(var l in a){var p=a[l];a.hasOwnProperty(l)&&!nu(p)&&(Array.isArray(p)&&p.isCss||fs(p)?c.push("".concat(Tp(l),":"),p,";"):hn(p)?c.push.apply(c,za(za(["".concat(l," {")],au(p),!1),["}"],!1)):c.push("".concat(Tp(l),": ").concat(fm(l,p),";")))}return c};function Ft(a,c,l,p,m){if(m===void 0&&(m=[]),typeof a=="string")return a&&m.push(a),m;if(nu(a))return m;if(ll(a))return m.push(".".concat(a.styledComponentId)),m;if(fs(a)){if(!fs(k=a)||k.prototype&&k.prototype.isReactComponent||!c)return m.push(a),m;var j=a(c);return Ft(j,c,l,p,m)}var k;if(a instanceof mm)return l?(a.inject(l,p),m.push(a.getName(p))):m.push(a),m;if(hn(a)){for(var I=au(a),T=0;T<I.length;T++)m.push(I[T]);return m}if(!Array.isArray(a))return m.push(a.toString()),m;for(T=0;T<a.length;T++)Ft(a[T],c,l,p,m);return m}function vm(a){for(var c=0;c<a.length;c+=1){var l=a[c];if(fs(l)&&!ll(l))return!1}return!0}var ym=qp(Wa),jm=(function(){function a(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&vm(c),this.componentId=l,this.baseHash=Dt(ym,l),this.baseStyle=p,ru.registerId(l)}return a.prototype.generateAndInjectStyles=function(c,l,p){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))m=_t(m,this.staticRulesId);else{var j=Np(Ft(this.rules,c,l,p)),k=Xo(Dt(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,k)){var I=p(j,".".concat(k),void 0,this.componentId);l.insertRules(this.componentId,k,I)}m=_t(m,k),this.staticRulesId=k}else{for(var T=Dt(this.baseHash,p.hash),q="",Q=0;Q<this.rules.length;Q++){var B=this.rules[Q];if(typeof B=="string")q+=B;else if(B){var J=Np(Ft(B,c,l,p));T=Dt(Dt(T,String(Q)),J),q+=J}}if(q){var le=Xo(T>>>0);if(!l.hasNameForId(this.componentId,le)){var K=p(q,".".concat(le),void 0,this.componentId);l.insertRules(this.componentId,le,K)}m=_t(m,le)}}return{className:m,css:typeof window=="undefined"?l.getTag().getGroup(ln(this.componentId)):""}},a})(),iu=dr.createContext(void 0);iu.Consumer;var Vo={};function bm(a,c,l){var p=ll(a),m=a,j=!Ho(a),k=c.attrs,I=k===void 0?ol:k,T=c.componentId,q=T===void 0?(function(L,X){var U=typeof L!="string"?"sc":gp(L);Vo[U]=(Vo[U]||0)+1;var z="".concat(U,"-").concat(Vx(Wa+U+Vo[U]));return X?"".concat(X,"-").concat(z):z})(c.displayName,c.parentComponentId):T,Q=c.displayName,B=Q===void 0?(function(L){return Ho(L)?"styled.".concat(L):"Styled(".concat(Gx(L),")")})(a):Q,J=c.displayName&&c.componentId?"".concat(gp(c.displayName),"-").concat(c.componentId):c.componentId||q,le=p&&m.attrs?m.attrs.concat(I).filter(Boolean):I,K=c.shouldForwardProp;if(p&&m.shouldForwardProp){var W=m.shouldForwardProp;if(c.shouldForwardProp){var V=c.shouldForwardProp;K=function(L,X){return W(L,X)&&V(L,X)}}else K=W}var fe=new jm(l,J,p?m.componentStyle:void 0);function pe(L,X){return(function(U,z,A){var ye=U.attrs,Me=U.componentStyle,ie=U.defaultProps,Le=U.foldedComponentIds,Ee=U.styledComponentId,Ge=U.target,Ze=dr.useContext(iu),Ye=Ep(),je=U.shouldForwardProp||Ye.shouldForwardProp,C=Ux(z,Ze,ie)||ms,F=(function(ae,ue,ce){for(var ge,Ce=cr(cr({},ue),{className:void 0,theme:ce}),Jr=0;Jr<ae.length;Jr+=1){var bt=fs(ge=ae[Jr])?ge(Ce):ge;for(var Er in bt)Er==="className"?Ce.className=_t(Ce.className,bt[Er]):Er==="style"?Ce.style=cr(cr({},Ce.style),bt[Er]):Ce[Er]=bt[Er]}return"className"in ue&&typeof ue.className=="string"&&(Ce.className=_t(Ce.className,ue.className)),Ce})(ye,z,C),R=F.as||Ge,f={};for(var b in F)F[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&F.theme===C||(b==="forwardedAs"?f.as=F.forwardedAs:je&&!je(b,R)||(f[b]=F[b]));var ee=(function(ae,ue){var ce=Ep(),ge=ae.generateAndInjectStyles(ue,ce.styleSheet,ce.stylis);return ge})(Me,F),re=ee.className,oe=_t(Le,Ee);return re&&(oe+=" "+re),F.className&&(oe+=" "+F.className),f[Ho(R)&&!Yp.has(R)?"class":"className"]=oe,A&&(f.ref=A),Z.createElement(R,f)})(se,L,X)}pe.displayName=B;var se=dr.forwardRef(pe);return se.attrs=le,se.componentStyle=fe,se.displayName=B,se.shouldForwardProp=K,se.foldedComponentIds=p?_t(m.foldedComponentIds,m.styledComponentId):"",se.styledComponentId=J,se.target=p?m.target:a,Object.defineProperty(se,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=p?(function(X){for(var U=[],z=1;z<arguments.length;z++)U[z-1]=arguments[z];for(var A=0,ye=U;A<ye.length;A++)Jo(X,ye[A],!0);return X})({},m.defaultProps,L):L}}),cl(se,function(){return".".concat(se.styledComponentId)}),j&&Zp(se,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),se}function Cp(a,c){for(var l=[a[0]],p=0,m=c.length;p<m;p+=1)l.push(c[p],a[p+1]);return l}var Ip=function(a){return Object.assign(a,{isCss:!0})};function Nm(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(fs(a)||hn(a))return Ip(Ft(Cp(ol,za([a],c,!0))));var p=a;return c.length===0&&p.length===1&&typeof p[0]=="string"?Ft(p):Ip(Ft(Cp(p,c)))}function rl(a,c,l){if(l===void 0&&(l=ms),!c)throw xn(1,c);var p=function(m){for(var j=[],k=1;k<arguments.length;k++)j[k-1]=arguments[k];return a(c,l,Nm.apply(void 0,za([m],j,!1)))};return p.attrs=function(m){return rl(a,c,cr(cr({},l),{attrs:Array.prototype.concat(l.attrs,m).filter(Boolean)}))},p.withConfig=function(m){return rl(a,c,cr(cr({},l),m))},p}var ou=function(a){return rl(bm,a)},Se=ou;Yp.forEach(function(a){Se[a]=ou(a)});const Go={Wrapper:Se.div`height: 100vh; overflow: hidden; display: flex; flex-direction: column;`,Header:Se.header`height: 60px; flex-shrink: 0;`,Main:Se.main`
   flex: 1; overflow-y: auto; position: relative;
   .studyNav { position: fixed; top: 60px; bottom: 0; left: 0; width: 248px; padding: 22px 14px; overflow-y: auto; background: var(--color-surface-2); border-right: 1px solid var(--color-border); z-index: 4; }
   .studyNavLabel { padding: 0 10px 10px; color: var(--color-text-muted); font-size: 11px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
   .studyNav nav { display: grid; gap: 4px; }
   .studyNav button { display: flex; align-items: center; gap: 10px; width: 100%; padding: 10px; border-radius: 10px; color: var(--color-text-secondary); text-align: left; font-size: 13px; font-weight: 800; }
   .studyNav button:hover, .studyNav button.active { background: var(--color-primary); color: #fff; }
   .studyNav p { margin: 18px 10px 0; color: var(--color-text-muted); font-size: 12px; }
   .contentWrapper { min-height: 100%; max-width: 1440px; margin: 0 0 0 248px; display: flex; flex-direction: column; padding: 15px; }
   .topicWrapper { display: none; }
   .topicWrapper.activeTopic { display: block; }
   .footerWrapper { flex-shrink: 0; }
   @media (max-width: 800px) { .studyNav { position: static; width: auto; margin: 12px; border: 1px solid var(--color-border); border-radius: 16px; max-height: 220px; } .studyNav nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .contentWrapper { margin-left: 0; } }
 `},zp={Wrapper:Se.header`
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
    `},wm="/dbms-core-notes/images/transparentLogo.png";var lu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lp=dr.createContext&&dr.createContext(lu),km=["attr","size","title"];function Sm(a,c){if(a==null)return{};var l=Em(a,c),p,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(a);for(m=0;m<j.length;m++)p=j[m],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(a,p)&&(l[p]=a[p])}return l}function Em(a,c){if(a==null)return{};var l={};for(var p in a)if(Object.prototype.hasOwnProperty.call(a,p)){if(c.indexOf(p)>=0)continue;l[p]=a[p]}return l}function Ma(){return Ma=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(a[p]=l[p])}return a},Ma.apply(this,arguments)}function Rp(a,c){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);c&&(p=p.filter(function(m){return Object.getOwnPropertyDescriptor(a,m).enumerable})),l.push.apply(l,p)}return l}function Oa(a){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Rp(Object(l),!0).forEach(function(p){Tm(a,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):Rp(Object(l)).forEach(function(p){Object.defineProperty(a,p,Object.getOwnPropertyDescriptor(l,p))})}return a}function Tm(a,c,l){return c=Cm(c),c in a?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,a}function Cm(a){var c=Im(a,"string");return typeof c=="symbol"?c:c+""}function Im(a,c){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var p=l.call(a,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function cu(a){return a&&a.map((c,l)=>dr.createElement(c.tag,Oa({key:l},c.attr),cu(c.child)))}function Y(a){return c=>dr.createElement(zm,Ma({attr:Oa({},a.attr)},c),cu(a.child))}function zm(a){var c=l=>{var{attr:p,size:m,title:j}=a,k=Sm(a,km),I=m||l.size||"1em",T;return l.className&&(T=l.className),a.className&&(T=(T?T+" ":"")+a.className),dr.createElement("svg",Ma({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,k,{className:T,style:Oa(Oa({color:a.color||l.color},l.style),a.style),height:I,width:I,xmlns:"http://www.w3.org/2000/svg"}),j&&dr.createElement("title",null,j),a.children)};return Lp!==void 0?dr.createElement(Lp.Consumer,null,l=>c(l)):c(lu)}function ys(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Lm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"polyline",attr:{points:"19 12 12 19 5 12"},child:[]}]})(a)}function Mp(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(a)}function tl(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function Rm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function dl(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function Ve(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(a)}function Op(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"},child:[]}]})(a)}function Mm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function Ia(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(a)}function du(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(a)}function gr(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(a)}function Om(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(a)}function Dm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(a)}function gs(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(a)}function Dp(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(a)}function Pm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(a)}function yt(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(a)}function Yo(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(a)}function vr(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(a)}function pn(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(a)}function pl(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(a)}function Am(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function _m(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 16 12 14 15 10 15 8 12 2 12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]}]})(a)}function Fm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(a)}function Xr(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(a)}function de(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function Ua(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(a)}function At(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function Bm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(a)}function Wm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function Um(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(a)}function pu(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(a)}function Pp(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(a)}function pr(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(a)}function Ap(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(a)}function $m(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(a)}function Da(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(a)}function tr(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function Hm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(a)}function _p(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function Qm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function uu(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(a)}function Vm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(a)}function hu(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function Gm(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(a)}function Pa(a){return Y({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const Ym=()=>{const[a,c]=Z.useState(!1),[l,p]=Z.useState("dark");Z.useEffect(()=>{const I=localStorage.getItem("app-theme")||"dark";p(I),I==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),Z.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const m=Z.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{p(m)};return r.jsx(zp.Wrapper,{children:r.jsx(zp.Main,{children:r.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsxs("div",{className:"logoWrapper",children:[!a&&r.jsx("div",{className:"logoSkeleton"}),r.jsx("img",{src:wm,alt:"dbms-core-notes",onLoad:()=>c(!0),style:{opacity:a?1:0}})]}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"dbms-core-notes"}),r.jsx("div",{className:"subTitle",children:"At-a-glance DBMS revision"})]})]}),r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[r.jsx("span",{className:"icon",children:l==="light"?r.jsx(Wm,{}):r.jsx(Qm,{})}),r.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},qm={Wrapper:Se.footer`
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
    `},Km=()=>r.jsxs(qm.Wrapper,{children:[r.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),r.jsxs("div",{className:"right",children:["By ",r.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Xm={Wrapper:Se.section`
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
    `},Jm=()=>r.jsxs(Xm.Wrapper,{id:"aboutDbms",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"DBMS"}),r.jsx("p",{className:"sub",children:"A DBMS is a Database Management System. It is the software layer that stores data in an organized way and helps you read and update it safely. Instead of scattered files, you get tables, constraints, indexes, and queries that behave predictably under real load."}),r.jsx("p",{className:"sub",children:"The main value is control. A DBMS manages data integrity using keys and constraints, reduces duplication using normalization, and supports powerful searching using SQL. When many users work at the same time, transactions and locks make sure updates remain correct."}),r.jsx("p",{className:"sub",children:"This page is built for revision. You will scan core ideas like ER model, SQL, joins, normalization, ACID, concurrency, indexing, recovery, and basic distributed concepts, with a clear mental model of what happens inside a database engine."})]}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(gr,{})}),r.jsx("h3",{className:"h3",children:"Think in data"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Tables"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Keys"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Constraints"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Indexes"})]}),r.jsx("p",{className:"note",children:"Tables store rows. Keys define identity. Constraints keep data valid. Indexes make queries fast."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Think in queries"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"SELECT"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"JOIN"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"GROUP BY"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"HAVING"})]}),r.jsx("p",{className:"note",children:"Query order: filter, join, group, aggregate, sort, limit. Learn this to debug SQL quickly."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(tr,{})}),r.jsx("h3",{className:"h3",children:"Think in safety"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"ACID keeps transactions correct under failures and concurrency"}),r.jsx("li",{children:"Isolation levels control dirty reads and phantom reads"}),r.jsx("li",{children:"Logs and checkpoints help crash recovery"}),r.jsx("li",{children:"Backups protect from human mistakes and data loss"})]})]})]})]}),Zm={Wrapper:Se.section`
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
    `},ef=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"databaseFundamentals",title:"Database Fundamentals",sub:"Data, database, DBMS, why we use it, file system vs DBMS, data independence, and 3 schema architecture."}),[]);return r.jsxs(Zm.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(gr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Basics"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fm,{})}),r.jsx("h3",{className:"h3",children:"What is data"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Data"})," is raw facts and values that can be stored and processed. It can be numbers, text, dates, images, clicks, sensor readings, or any measurable information."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:'"Ashish"'}),r.jsx("li",{children:"98"}),r.jsx("li",{children:'"2026-03-01"'}),r.jsx("li",{children:'"Order placed"'})]})]}),r.jsx("p",{className:"note",children:"Data becomes useful when it is organized and connected to meaning, then it becomes information."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"What is database"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"database"})," is an organized collection of related data stored so it can be searched, updated, and managed efficiently."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"Student records for a school"}),r.jsx("li",{children:"Orders and customers for an eCommerce app"}),r.jsx("li",{children:"Transactions for a banking system"})]})]}),r.jsx("p",{className:"note",children:"A database is the data. DBMS is the software that manages it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gr,{})}),r.jsx("h3",{className:"h3",children:"DBMS full form"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"DBMS"})," stands for"," ",r.jsx("b",{children:"Database Management System"}),". It is software that helps you create, store, retrieve, update, and secure data in a database."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Store"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Query"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Update"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Secure"})]}),r.jsx("p",{className:"note",children:"Popular DBMS examples: MySQL, PostgreSQL, Oracle, SQL Server."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx($m,{})}),r.jsx("h3",{className:"h3",children:"Why DBMS is needed"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Store large data reliably and access it fast"}),r.jsx("li",{children:"Handle multiple users at the same time safely"}),r.jsx("li",{children:"Reduce duplication and keep data consistent"}),r.jsx("li",{children:"Provide security and access control"}),r.jsx("li",{children:"Provide backup and recovery"})]}),r.jsx("p",{className:"note",children:"Without a DBMS, apps become fragile when data grows and multiple users start writing together."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"File system vs DBMS"})]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"File system"}),r.jsx("div",{children:"DBMS"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Data stored in separate files like CSV, text, or custom formats"}),r.jsx("div",{children:"Data stored with structure like tables, relationships, indexes"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Searching and updates become manual or slow when data grows"}),r.jsx("div",{children:"SQL and query engine makes searching and updates efficient"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Concurrency is hard, risk of overwriting changes"}),r.jsx("div",{children:"Transactions and locking handle concurrent users safely"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Weak security model, hard to control access properly"}),r.jsx("div",{children:"Roles and permissions control who can read or write"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Backup and recovery is manual and error-prone"}),r.jsx("div",{children:"Built-in logging, recovery, and backup strategies"})]})]}),r.jsx("p",{className:"note",children:"File system works for small simple apps. DBMS is needed for real multi-user applications."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tr,{})}),r.jsx("h3",{className:"h3",children:"Advantages of DBMS"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Reduced redundancy using good design"}),r.jsx("li",{children:"Improved consistency using constraints"}),r.jsx("li",{children:"Security using authentication and authorization"}),r.jsx("li",{children:"Concurrency support using transactions"}),r.jsx("li",{children:"Backup and recovery support"}),r.jsx("li",{children:"Better data sharing across applications"})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Data independence"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Data independence"})," means changing the database structure at one level without breaking the level above it. This is a big reason DBMS is preferred."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Physical data independence"}),r.jsxs("div",{className:"v",children:["Change storage details without changing logical structure.",r.jsx("span",{className:"small",children:"Example: move data from HDD to SSD, change indexing method, file layout changes."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Logical data independence"}),r.jsxs("div",{className:"v",children:["Change logical design without changing user views.",r.jsx("span",{className:"small",children:"Example: split one table into two tables, add new attributes, create a view to keep old output."})]})]})]}),r.jsx("p",{className:"note",children:"Logical data independence is harder to achieve than physical."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Three schema architecture"})]}),r.jsx("p",{className:"p",children:"Three schema architecture separates how data is stored, how it is logically designed, and how users see it. This supports data independence."}),r.jsxs("div",{className:"schema",children:[r.jsxs("div",{className:"sRow head",children:[r.jsx("div",{className:"c1",children:"Schema"}),r.jsx("div",{className:"c2",children:"What it means"}),r.jsx("div",{className:"c3",children:"Example"})]}),r.jsxs("div",{className:"sRow",children:[r.jsx("div",{className:"c1",children:"Internal schema"}),r.jsx("div",{className:"c2",children:"Physical storage details and access paths"}),r.jsx("div",{className:"c3",children:"File layout, indexes, page structure"})]}),r.jsxs("div",{className:"sRow",children:[r.jsx("div",{className:"c1",children:"Conceptual schema"}),r.jsx("div",{className:"c2",children:"Logical structure of the entire database"}),r.jsx("div",{className:"c3",children:"Tables, relations, constraints"})]}),r.jsxs("div",{className:"sRow",children:[r.jsx("div",{className:"c1",children:"External schema"}),r.jsx("div",{className:"c2",children:"User-specific views of data"}),r.jsx("div",{className:"c3",children:'Views like "studentSummary", "billingView"'})]})]}),r.jsx("p",{className:"note",children:"Memory trick: external is what users see, conceptual is the full logical design, internal is how it is stored."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(gr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Database is data. DBMS is the manager. Three schemas separate storage, design, and views."})]})]})]})})]})},rf={Wrapper:Se.section`
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
    `},tf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"dataModels",title:"Data Models",sub:"Meaning of data model and the major types - hierarchical, network, relational, object-oriented, and ER model."}),[]);return r.jsxs(rf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(de,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Models"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Data model meaning"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"data model"})," is a structured way to describe how data is organized, related, stored, and accessed. It defines the rules for data structure and relationships so systems and humans can understand the same data design."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Structure"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Relationships"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Constraints"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Operations"})]}),r.jsx("p",{className:"note",children:"Example: In a shopping app, customers place orders. Orders contain items. A data model decides how these are represented and linked."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Hierarchical model"})]}),r.jsxs("p",{className:"p",children:["Data is organized like a ",r.jsx("b",{children:"tree"}),". One parent can have many children, but each child has only one parent."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Mental model"}),r.jsx("div",{className:"mono",children:"Company - Department - Employee"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Good for strict 1-to-many relationships"}),r.jsx("li",{children:"Hard when you need many-to-many relationships"})]}),r.jsx("p",{className:"note",children:'Think "folder structure" style data.'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Da,{})}),r.jsx("h3",{className:"h3",children:"Network model"})]}),r.jsxs("p",{className:"p",children:["Data is organized as a ",r.jsx("b",{children:"graph"}),". A record can have multiple parents and multiple children. This supports many-to-many naturally."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Mental model"}),r.jsx("div",{className:"mono",children:"Student - EnrolledIn - Course"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Handles complex relationships well"}),r.jsx("li",{children:"More complex to design and query than relational"})]}),r.jsx("p",{className:"note",children:'Think "connected nodes" style data.'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"Relational model"})]}),r.jsxs("p",{className:"p",children:["Data is stored in ",r.jsx("b",{children:"tables"})," (relations). Rows are tuples and columns are attributes. Relationships are formed using keys."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example tables"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"customers(customerId, name)"}),r.jsx("li",{children:"orders(orderId, customerId, total)"})]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Most popular model used in real systems"}),r.jsx("li",{children:"SQL makes queries powerful and standard"})]}),r.jsx("p",{className:"note",children:"Relationships are typically built using foreign keys."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Rm,{})}),r.jsx("h3",{className:"h3",children:"Object-oriented model"})]}),r.jsxs("p",{className:"p",children:["Data is stored as ",r.jsx("b",{children:"objects"})," similar to OOP. Objects contain both data and behavior. It fits naturally with languages that use classes."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsxs("div",{className:"mono",children:["class Order ","{"," items, total, place()"," ","}"]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Useful for complex data like CAD, multimedia, simulations"}),r.jsx("li",{children:"Less common than relational in typical business apps"})]}),r.jsx("p",{className:"note",children:"Object relational mapping tries to bridge OOP and relational DBs."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(yt,{})}),r.jsx("h3",{className:"h3",children:"Entity-Relationship model - ER model basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"ER model"})," is a conceptual model used to design a database before writing tables. It uses",r.jsx("b",{children:"entities"}),", ",r.jsx("b",{children:"attributes"}),", and",r.jsx("b",{children:"relationships"})," to represent real-world data."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Entity"}),r.jsxs("div",{className:"v",children:["A real-world object or concept.",r.jsx("span",{className:"small",children:"Example: Student, Customer, Product"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Attribute"}),r.jsxs("div",{className:"v",children:["Properties of an entity.",r.jsx("span",{className:"small",children:"Example: Student has name, rollNo"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Relationship"}),r.jsxs("div",{className:"v",children:["How entities are connected.",r.jsx("span",{className:"small",children:"Example: Customer places Order"})]})]})]}),r.jsx("p",{className:"note",children:"ER model helps you get the logic correct first, then you convert it into tables."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(de,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Hierarchical is tree, network is graph, relational is tables, object-oriented is objects, ER is design blueprint."})]})]})]})})]})},sf={Wrapper:Se.section`
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
    `},nf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"erModel",title:"ER Model",sub:"Entity, attributes, keys, weak entities, relationships, cardinality, participation, and ER to relational mapping rules."}),[]);return r.jsxs(sf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(vr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Design"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Entity"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"entity"})," is a real-world object or concept that you want to store data about."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"Student"}),r.jsx("li",{children:"Customer"}),r.jsx("li",{children:"Order"}),r.jsx("li",{children:"Employee"})]})]}),r.jsx("p",{className:"note",children:"In relational DBs, entities usually become tables."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(uu,{})}),r.jsx("h3",{className:"h3",children:"Attribute"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"attribute"})," is a property that describes an entity. Attributes become columns in a table."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("ul",{className:"exList",children:r.jsx("li",{children:"Student has name, rollNo, dob, phone"})})]}),r.jsx("p",{className:"note",children:"Attribute types matter because they change how we map to tables."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tl,{})}),r.jsx("h3",{className:"h3",children:"Attribute types"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Simple"}),r.jsxs("div",{className:"v",children:["Cannot be broken into smaller parts.",r.jsx("span",{className:"small",children:"Example: age, salary, rollNo"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Composite"}),r.jsxs("div",{className:"v",children:["Can be broken into sub-parts.",r.jsx("span",{className:"small",children:"Example: name -> firstName, lastName. address -> city, state, pincode"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Multivalued"}),r.jsxs("div",{className:"v",children:["Can have multiple values for a single entity.",r.jsx("span",{className:"small",children:"Example: phoneNumbers, skills, emailAddresses"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Derived"}),r.jsxs("div",{className:"v",children:["Computed from other attributes.",r.jsx("span",{className:"small",children:"Example: age derived from dateOfBirth. totalAmount derived from orderItems"})]})]})]}),r.jsx("p",{className:"note",children:"Composite attributes often become multiple columns. Multivalued attributes usually become a separate table."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xr,{})}),r.jsx("h3",{className:"h3",children:"Primary key"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"primary key"})," is an attribute or set of attributes that uniquely identifies an entity instance."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"studentId uniquely identifies a student"}),r.jsx("li",{children:"orderId uniquely identifies an order"})]})]}),r.jsx("p",{className:"note",children:"Primary key must be unique and not null."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(du,{})}),r.jsx("h3",{className:"h3",children:"Weak entity"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"weak entity"})," cannot be uniquely identified by its own attributes alone. It depends on an owner (strong entity) for identification."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("ul",{className:"exList",children:r.jsx("li",{children:"Dependent depends on Employee. Dependent is identified by (employeeId, dependentName)."})})]}),r.jsx("p",{className:"note",children:"Weak entity typically uses a composite primary key including owner key."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ua,{})}),r.jsx("h3",{className:"h3",children:"Relationship"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"relationship"})," describes how two or more entities are connected. It can also have its own attributes."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Examples"}),r.jsxs("ul",{className:"exList",children:[r.jsx("li",{children:"Student enrolls in Course"}),r.jsx("li",{children:"Customer places Order"}),r.jsx("li",{children:"Employee works in Department"})]})]}),r.jsx("p",{className:"note",children:"Many-to-many relationships usually become a separate table."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Cardinality"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Cardinality"})," defines how many instances of one entity can be associated with instances of another entity."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"1:1"}),r.jsxs("div",{className:"v",children:["One to one",r.jsx("span",{className:"small",children:"Example: Person - Passport (one person has one passport)"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"1:N"}),r.jsxs("div",{className:"v",children:["One to many",r.jsx("span",{className:"small",children:"Example: Department - Employees (one department has many employees)"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"M:N"}),r.jsxs("div",{className:"v",children:["Many to many",r.jsx("span",{className:"small",children:"Example: Students - Courses (many students take many courses)"})]})]})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Participation"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Participation"})," tells whether an entity must be part of a relationship or not."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Total participation"}),r.jsxs("div",{className:"v",children:["Every entity instance must participate.",r.jsx("span",{className:"small",children:"Example: Every Order must be placed by a Customer."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Partial participation"}),r.jsxs("div",{className:"v",children:["Participation is optional for some instances.",r.jsx("span",{className:"small",children:"Example: A Customer may have zero Orders."})]})]})]}),r.jsx("p",{className:"note",children:"Total means mandatory. Partial means optional."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tl,{})}),r.jsx("h3",{className:"h3",children:"ER to relational mapping rules"})]}),r.jsxs("div",{className:"mapRules",children:[r.jsxs("div",{className:"mRow head",children:[r.jsx("div",{className:"c1",children:"ER concept"}),r.jsx("div",{className:"c2",children:"Relational mapping"})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Strong entity"}),r.jsx("div",{className:"c2",children:"Create a table with columns for attributes. Choose primary key."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Composite attribute"}),r.jsx("div",{className:"c2",children:"Break into multiple columns (address -> city, state, pincode)."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Multivalued attribute"}),r.jsx("div",{className:"c2",children:"Create a separate table with (ownerPK, attributeValue)."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Derived attribute"}),r.jsx("div",{className:"c2",children:"Usually not stored, computed when needed (age from dob)."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"1:1 relationship"}),r.jsx("div",{className:"c2",children:"Put a foreign key in one table. Prefer FK on total participation side. Add unique constraint."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"1:N relationship"}),r.jsx("div",{className:"c2",children:'Put foreign key of "1 side" into "N side" table.'})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"M:N relationship"}),r.jsx("div",{className:"c2",children:"Create a new table with both primary keys as foreign keys, plus relationship attributes."})]}),r.jsxs("div",{className:"mRow",children:[r.jsx("div",{className:"c1",children:"Weak entity"}),r.jsx("div",{className:"c2",children:"Create a table with owner PK as FK. Primary key is (ownerPK + partialKey)."})]})]}),r.jsx("p",{className:"note",children:"Shortcut memory: 1:N -> FK on N side. M:N -> new table. Multivalued -> new table. Composite -> split columns."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(vr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"ER model is your blueprint. Entities become tables. Relationships decide where foreign keys go."})]})]})]})})]})},af={Wrapper:Se.section`
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
    `},of=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"relationalModel",title:"Relational Model",sub:"Relation, tuple, attribute, domain, degree, cardinality, and the full key family used in RDBMS."}),[]);return r.jsxs(af.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(vr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Tables and Keys"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"Relation"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"relation"})," is a table in the relational model. It stores data as rows and columns."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"code",children:"STUDENT(studentId, name, email)"})]}),r.jsx("p",{className:"note",children:"Relation name is like the table name, and attributes are the column names."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Tuple"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"tuple"})," is a single row in a relation. It represents one record."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example row"}),r.jsx("div",{className:"code",children:'(101, "Ashish", "ash@example.com")'})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(uu,{})}),r.jsx("h3",{className:"h3",children:"Attribute"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"attribute"})," is a column in a table. It describes a property of the entity."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"studentId"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"name"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"email"})]}),r.jsx("p",{className:"note",children:"Attribute values come from a defined domain."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pl,{})}),r.jsx("h3",{className:"h3",children:"Domain"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"domain"})," is the allowed set of values for an attribute. It defines type and constraints."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Example"}),r.jsxs("div",{className:"v",children:["age domain could be 0 to 120",r.jsx("span",{className:"small",children:"integer values only"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Example"}),r.jsxs("div",{className:"v",children:["email domain could be valid email strings",r.jsx("span",{className:"small",children:'must contain "@"'})]})]})]}),r.jsx("p",{className:"note",children:"Domain helps ensure data correctness at the attribute level."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"Degree"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Degree"})," is the number of attributes (columns) in a relation."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"code",children:"STUDENT(studentId, name, email) - degree is 3"})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Cardinality"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Cardinality"})," is the number of tuples (rows) in a relation."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"code",children:"STUDENT has 500 rows - cardinality is 500"})]}),r.jsx("p",{className:"note",children:"Do not confuse this with ER diagram cardinality like 1:N. Here it means row count."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xr,{})}),r.jsx("h3",{className:"h3",children:"Keys in DBMS"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"key"})," is a set of attributes that identifies a tuple uniquely or helps connect tables correctly. Different keys serve different purposes."]}),r.jsxs("div",{className:"keysGrid",children:[r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Xr,{})}),"Super key"]}),r.jsxs("div",{className:"kBody",children:["Any attribute set that uniquely identifies a row. It can include extra attributes.",r.jsx("div",{className:"kEx",children:"Example: (studentId) or (studentId, email)"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Xr,{})}),"Candidate key"]}),r.jsxs("div",{className:"kBody",children:["Minimal super key. No extra attributes. There can be multiple candidate keys.",r.jsx("div",{className:"kEx",children:"Example: (studentId) and (email) if both are unique"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Xr,{})}),"Primary key"]}),r.jsxs("div",{className:"kBody",children:["One selected candidate key used as main identifier. It cannot be NULL and should be stable.",r.jsx("div",{className:"kEx",children:"Example: studentId"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Xr,{})}),"Alternate key"]}),r.jsxs("div",{className:"kBody",children:["Candidate keys not chosen as primary key. Still unique.",r.jsx("div",{className:"kEx",children:"Example: email"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(Ua,{})}),"Foreign key"]}),r.jsxs("div",{className:"kBody",children:["Attribute in one table that references primary key of another table. It builds relationships.",r.jsx("div",{className:"kEx",children:"Example: ENROLLMENT.studentId references STUDENT.studentId"})]})]}),r.jsxs("div",{className:"kCard",children:[r.jsxs("div",{className:"kTitle",children:[r.jsx("span",{className:"kIcon",children:r.jsx(de,{})}),"Composite key"]}),r.jsxs("div",{className:"kBody",children:["Key made of 2 or more attributes. Used when one attribute is not enough.",r.jsx("div",{className:"kEx",children:"Example: (studentId, courseId) in ENROLLMENT"})]})]})]}),r.jsx("p",{className:"note",children:"Memory: super key identifies, candidate key is minimal, primary key is chosen, alternate key is remaining, foreign key links, composite key is multi-column."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Xr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Degree is columns, cardinality is rows. Candidate keys are minimal unique sets, and one becomes primary key."})]})]})]})})]})},lf={Wrapper:Se.section`
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
    `},cf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"sqlBasics",title:"SQL Basics",sub:"SQL meaning and the 5 command groups - DDL, DML, DQL, TCL, DCL, with common commands and examples."}),[]);return r.jsxs(lf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Ia,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"SQL"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ia,{})}),r.jsx("h3",{className:"h3",children:"What is SQL - Structured Query Language"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"SQL"})," means"," ",r.jsx("b",{children:"Structured Query Language"}),". It is the standard language used to talk to relational databases. With SQL, you can define tables, insert and update rows, query data, and control access."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Define"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Insert"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Query"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Control"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Commit"})]}),r.jsx("p",{className:"note",children:"SQL is declarative. You tell what you want, the database figures out how to do it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Vm,{})}),r.jsx("h3",{className:"h3",children:"DDL - Data Definition Language"})]}),r.jsx("p",{className:"p",children:"DDL is used to create and modify database structure like tables and columns."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"CREATE"}),r.jsxs("div",{className:"v",children:["Creates objects like tables, indexes, views.",r.jsx("span",{className:"small",children:"Example: create table users (...)"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"ALTER"}),r.jsxs("div",{className:"v",children:["Modifies structure of existing objects.",r.jsx("span",{className:"small",children:"Example: add a column, change datatype"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"DROP"}),r.jsxs("div",{className:"v",children:["Deletes objects permanently.",r.jsx("span",{className:"small",children:"Example: drop table users"})]})]})]}),r.jsx("p",{className:"note",children:"DDL changes schema. Many DBs auto-commit DDL."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dm,{})}),r.jsx("h3",{className:"h3",children:"DML - Data Manipulation Language"})]}),r.jsx("p",{className:"p",children:"DML is used to change actual data inside tables. It works on rows."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"INSERT"}),r.jsxs("div",{className:"v",children:["Adds new rows to a table.",r.jsx("span",{className:"small",children:"Example: insert into users values (...)"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"UPDATE"}),r.jsxs("div",{className:"v",children:["Modifies existing rows.",r.jsx("span",{className:"small",children:"Example: update users set name='A' where id=1"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"DELETE"}),r.jsxs("div",{className:"v",children:["Removes rows from a table.",r.jsx("span",{className:"small",children:"Example: delete from users where id=1"})]})]})]}),r.jsx("p",{className:"note",children:"DML is usually controlled by transactions. You can rollback if not committed."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pr,{})}),r.jsx("h3",{className:"h3",children:"DQL - Data Query Language"})]}),r.jsx("p",{className:"p",children:"DQL is used to read data from tables. The core command is SELECT."}),r.jsx("div",{className:"kvs",children:r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"SELECT"}),r.jsxs("div",{className:"v",children:["Fetches rows and columns from one or more tables.",r.jsx("span",{className:"small",children:"Example: select name from users where city='Bhopal'"})]})]})}),r.jsx("p",{className:"note",children:"Best habit: always start with a WHERE clause in mind to avoid full table scans."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pu,{})}),r.jsx("h3",{className:"h3",children:"TCL - Transaction Control Language"})]}),r.jsx("p",{className:"p",children:"TCL manages transactions. It decides when your changes become permanent or when to undo them."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"COMMIT"}),r.jsx("div",{className:"v",children:"Makes changes permanent in the database."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"ROLLBACK"}),r.jsx("div",{className:"v",children:"Undoes changes since last commit or savepoint."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"SAVEPOINT"}),r.jsx("div",{className:"v",children:"Creates a named point inside a transaction to rollback partially."})]})]}),r.jsx("p",{className:"note",children:"Think of SAVEPOINT like a checkpoint inside one transaction."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tr,{})}),r.jsx("h3",{className:"h3",children:"DCL - Data Control Language"})]}),r.jsx("p",{className:"p",children:"DCL controls permissions. It decides who can read, write, or manage database objects."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"GRANT"}),r.jsxs("div",{className:"v",children:["Gives permissions to a user or role.",r.jsx("span",{className:"small",children:"Example: grant select on users to analystRole"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"REVOKE"}),r.jsxs("div",{className:"v",children:["Removes previously granted permissions.",r.jsx("span",{className:"small",children:"Example: revoke insert on users from tempUser"})]})]})]}),r.jsx("p",{className:"note",children:"DCL is critical in production to prevent accidental data damage."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Ia,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"DDL defines structure, DML changes rows, DQL reads, TCL controls commit and rollback, DCL controls permissions."})]})]})]})})]})},df={Wrapper:Se.section`
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
    `},pf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"sqlQueryingEssentials",title:"SQL Querying Essentials",sub:"WHERE, logical operators, BETWEEN, IN, LIKE, ORDER BY, GROUP BY, HAVING, and aggregate functions with examples."}),[]);return r.jsxs(df.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(pr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"SQL"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"Mental model - query flow"})]}),r.jsx("p",{className:"p",children:"A simple way to remember query behavior is the typical pipeline below. This helps you debug GROUP BY and HAVING fast."}),r.jsxs("div",{className:"flow",children:[r.jsx("span",{className:"pill",children:"FROM"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"WHERE"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"GROUP BY"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"HAVING"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"SELECT"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"ORDER BY"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"LIMIT"})]}),r.jsx("p",{className:"note",children:"WHERE filters rows before grouping. HAVING filters groups after GROUP BY."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dp,{})}),r.jsx("h3",{className:"h3",children:"WHERE clause"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"WHERE"})," filters rows based on a condition. It runs before GROUP BY."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM users
WHERE city = 'Bangalore';`})}),r.jsx("p",{className:"note",children:"If there is no WHERE, SQL uses all rows."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pl,{})}),r.jsx("h3",{className:"h3",children:"AND, OR, NOT"})]}),r.jsx("p",{className:"p",children:"Combine conditions using logical operators."}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM orders
WHERE status = 'PAID'
  AND amount >= 500;

SELECT * 
FROM users
WHERE city = 'Bhopal'
   OR city = 'Bangalore';

SELECT * 
FROM users
WHERE NOT isBlocked = true;`})}),r.jsx("p",{className:"note",children:"Use parentheses when mixing AND and OR to avoid surprises."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mp,{})}),r.jsx("h3",{className:"h3",children:"BETWEEN"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"BETWEEN"})," checks a range, usually inclusive on both ends."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM payments
WHERE amount BETWEEN 100 AND 500;

SELECT * 
FROM logs
WHERE createdAt BETWEEN '2026-03-01' AND '2026-03-31';`})}),r.jsx("p",{className:"note",children:"If you need strict exclusive range, use < and >."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"IN"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"IN"})," matches any value from a list. It is cleaner than writing many OR conditions."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM users
WHERE role IN ('ADMIN', 'EMPLOYEE', 'REPORTS_ONLY');`})}),r.jsx("p",{className:"note",children:"IN also works with subqueries that return a list."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pr,{})}),r.jsx("h3",{className:"h3",children:"LIKE"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"LIKE"})," matches patterns in text. Wildcards are % for many chars and _ for one char."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM users
WHERE name LIKE 'Ash%';

SELECT * 
FROM users
WHERE email LIKE '%@gmail.com';

SELECT * 
FROM products
WHERE sku LIKE 'A_12%';`})}),r.jsx("p",{className:"note",children:"LIKE can be slow on large tables without proper indexing strategy."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Lm,{})}),r.jsx("h3",{className:"h3",children:"ORDER BY"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"ORDER BY"})," sorts the output. Default is ascending (ASC). Use DESC for descending."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT * 
FROM orders
ORDER BY createdAt DESC;

SELECT * 
FROM users
ORDER BY lastName ASC, firstName ASC;`})}),r.jsx("p",{className:"note",children:"Sorting large results can be expensive, indexes can help."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"GROUP BY"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"GROUP BY"})," groups rows that share the same value so you can compute aggregates like COUNT or SUM."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT city, COUNT(*) AS usersCount
FROM users
GROUP BY city;`})}),r.jsx("p",{className:"note",children:"Every selected column must be either grouped or aggregated."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dp,{})}),r.jsx("h3",{className:"h3",children:"HAVING"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"HAVING"})," filters groups after GROUP BY. Use it when the condition depends on an aggregate."]}),r.jsx("div",{className:"code",children:r.jsx("pre",{className:"pre",children:`SELECT city, COUNT(*) AS usersCount
FROM users
GROUP BY city
HAVING COUNT(*) >= 10;`})}),r.jsx("p",{className:"note",children:"WHERE cannot use aggregate results, HAVING can."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mp,{})}),r.jsx("h3",{className:"h3",children:"Aggregate functions"})]}),r.jsx("p",{className:"p",children:"Aggregates compute one result from many rows. They are most often used with GROUP BY."}),r.jsxs("div",{className:"aggGrid",children:[r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"COUNT"}),r.jsx("div",{className:"aggSub",children:"Counts rows or non-null values"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT COUNT(*) FROM users;"})]}),r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"SUM"}),r.jsx("div",{className:"aggSub",children:"Adds numeric values"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT SUM(amount) FROM payments;"})]}),r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"AVG"}),r.jsx("div",{className:"aggSub",children:"Average of numeric values"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT AVG(amount) FROM payments;"})]}),r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"MIN"}),r.jsx("div",{className:"aggSub",children:"Smallest value"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT MIN(amount) FROM payments;"})]}),r.jsxs("div",{className:"agg",children:[r.jsx("div",{className:"aggTitle",children:"MAX"}),r.jsx("div",{className:"aggSub",children:"Largest value"}),r.jsx("pre",{className:"pre miniPre",children:"SELECT MAX(amount) FROM payments;"})]})]}),r.jsx("p",{className:"note",children:"COUNT(column) ignores NULL. COUNT(*) counts rows."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(pr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"WHERE filters rows, GROUP BY makes groups, HAVING filters groups, ORDER BY sorts output."})]})]})]})})]})},uf={Wrapper:Se.section`
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
    `},hf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"joinsAndSubqueries",title:"Joins and Subqueries",sub:"INNER, LEFT, RIGHT, FULL, self join, cross join, subquery, correlated subquery, EXISTS, and nested queries."}),[]);return r.jsxs(uf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(yt,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"SQL"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"hero",children:[r.jsxs("div",{className:"heroTop",children:[r.jsx("span",{className:"heroIcon",children:r.jsx(de,{})}),r.jsxs("div",{children:[r.jsx("div",{className:"heroTitle",children:"Core idea"}),r.jsx("div",{className:"heroSub",children:"A join combines rows from two tables using a matching condition. A subquery is a query inside another query, used to filter or compute results."})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"JOIN - combine rows"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"SUBQUERY - query inside query"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"EXISTS - checks presence"})]})]}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ua,{})}),r.jsx("h3",{className:"h3",children:"INNER JOIN"})]}),r.jsx("p",{className:"p",children:'Returns only rows that match in both tables based on the join condition. Think "intersection".'}),r.jsx("pre",{className:"code",children:`SELECT e.id, e.name, d.deptName
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
ON a.id = b.aId;`}),r.jsx("p",{className:"note",children:"Some DBs do not support FULL OUTER JOIN directly. Workaround is UNION of LEFT and RIGHT joins."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Self join"})]}),r.jsx("p",{className:"p",children:"Joining a table with itself. Used when a table has relationships inside itself, like employees and their managers."}),r.jsx("pre",{className:"code",children:`SELECT e.name AS employeeName, m.name AS managerName
FROM employees e
LEFT JOIN employees m
ON e.managerId = m.id;`}),r.jsx("p",{className:"note",children:"Aliases are required to distinguish the same table as two roles."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"CROSS JOIN"})]}),r.jsx("p",{className:"p",children:"Produces a Cartesian product. Every row of left table combines with every row of right table. Use carefully."}),r.jsx("pre",{className:"code",children:`SELECT s.size, c.color
FROM sizes s
CROSS JOIN colors c;`}),r.jsx("p",{className:"note",children:"Useful for generating combinations, but can explode row count quickly."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pr,{})}),r.jsx("h3",{className:"h3",children:"Subquery"})]}),r.jsx("p",{className:"p",children:"A subquery is a query inside another query. It can be used in WHERE, SELECT, FROM, and even in HAVING. It helps when one query needs result from another."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Subquery in WHERE"}),r.jsx("pre",{className:"code",children:`SELECT name
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
);`}),r.jsx("p",{className:"note",children:"This finds employees earning above their own department average."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pr,{})}),r.jsx("h3",{className:"h3",children:"EXISTS"})]}),r.jsx("p",{className:"p",children:"EXISTS checks whether the subquery returns at least one row. It returns true or false. It does not care about values, only presence."}),r.jsx("pre",{className:"code",children:`SELECT c.id, c.name
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customerId = c.id
);`}),r.jsx("p",{className:"note",children:"Often faster than IN for large datasets because it can stop at first match."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Nested queries"})]}),r.jsx("p",{className:"p",children:"Nested queries are multiple levels of subqueries. Useful but can reduce readability. Use with care."}),r.jsx("pre",{className:"code",children:`SELECT name
FROM employees
WHERE deptId IN (
    SELECT id
    FROM departments
    WHERE locationId IN (
        SELECT id FROM locations WHERE city = 'Bangalore'
    )
);`}),r.jsx("p",{className:"note",children:"If it gets too nested, consider rewriting using joins for clarity and performance."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(yt,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"INNER gives matches, LEFT keeps left, RIGHT keeps right, FULL keeps all. Subquery is query inside query. Correlated runs per row. EXISTS checks presence."})]})]})]})})]})},xf={Wrapper:Se.section`
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
    `},mf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"constraints",title:"Constraints",sub:"Rules that protect data quality - NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT."}),[]);return r.jsxs(xf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(tr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Data rules"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tr,{})}),r.jsx("h3",{className:"h3",children:"What is a constraint"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"constraint"})," is a rule enforced by the database to keep data valid. It prevents wrong inserts and updates, so your tables do not become messy over time."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Integrity"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Consistency"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Safety"})]}),r.jsx("p",{className:"note",children:"Constraints are checked automatically on INSERT and UPDATE."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(_p,{})}),r.jsx("h3",{className:"h3",children:"NOT NULL"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"NOT NULL"})," means this column must always have a value. It cannot be NULL."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"name VARCHAR(100) NOT NULL"}),r.jsx("div",{className:"exText",children:'A user must have a name. Blank string "" is allowed, but NULL is not.'})]}),r.jsx("p",{className:"note",children:'NULL means "unknown or missing", it is not the same as 0 or "".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pl,{})}),r.jsx("h3",{className:"h3",children:"UNIQUE"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"UNIQUE"})," means all values in this column must be different. No duplicates allowed."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"email VARCHAR(255) UNIQUE"}),r.jsx("div",{className:"exText",children:"Two users cannot have the same email."})]}),r.jsx("p",{className:"note",children:'Many databases allow multiple NULLs in a UNIQUE column, because NULL is treated as "no value".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xr,{})}),r.jsx("h3",{className:"h3",children:"PRIMARY KEY"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"PRIMARY KEY"})," uniquely identifies each row. It is basically ",r.jsx("b",{children:"UNIQUE + NOT NULL"})," ","together."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"id INT PRIMARY KEY"}),r.jsx("div",{className:"exText",children:"Each row must have a unique id and it cannot be NULL."})]}),r.jsx("p",{className:"note",children:"One table has only one primary key, but it can be a composite key."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ua,{})}),r.jsx("h3",{className:"h3",children:"FOREIGN KEY"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"FOREIGN KEY"})," links one table to another. It ensures the referenced value exists in the parent table. This keeps"," ",r.jsx("b",{children:"referential integrity"}),"."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"orders.user_id REFERENCES users(id)"}),r.jsx("div",{className:"exText",children:"An order must belong to a valid user. You cannot set user_id to a non-existing user."})]}),r.jsx("p",{className:"note",children:"Deleting parent rows can affect child rows, often controlled by ON DELETE rules like CASCADE or SET NULL."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(dl,{})}),r.jsx("h3",{className:"h3",children:"CHECK"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"CHECK"})," enforces a condition on values. If the condition fails, the insert or update is rejected."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"age INT CHECK (age >= 0 AND age <= 120)"}),r.jsx("div",{className:"exText",children:"Age must stay in a valid range."})]}),r.jsx("p",{className:"note",children:`CHECK is great for domain rules like "price >= 0" or "status in ('pending','paid')".`})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(_p,{})}),r.jsx("h3",{className:"h3",children:"DEFAULT"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"DEFAULT"})," sets a value automatically when no value is provided. It avoids NULLs and makes inserts easier."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:"status VARCHAR(20) DEFAULT 'active'"}),r.jsx("div",{className:"exText",children:'If status is not given, it becomes "active".'})]}),r.jsx("p",{className:"note",children:"DEFAULT is used for timestamps, boolean flags, and common initial states."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tr,{})}),r.jsx("h3",{className:"h3",children:"Quick comparison"})]}),r.jsxs("div",{className:"table",children:[r.jsxs("div",{className:"tRow head",children:[r.jsx("div",{children:"Constraint"}),r.jsx("div",{children:"What it prevents"}),r.jsx("div",{children:"Simple use case"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"NOT NULL"}),r.jsx("div",{children:"Missing values"}),r.jsx("div",{children:"name, created_at"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"UNIQUE"}),r.jsx("div",{children:"Duplicate values"}),r.jsx("div",{children:"email, phone"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"PRIMARY KEY"}),r.jsx("div",{children:"Duplicate or NULL identity"}),r.jsx("div",{children:"id"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"FOREIGN KEY"}),r.jsx("div",{children:"Invalid references"}),r.jsx("div",{children:"orders.user_id"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"CHECK"}),r.jsx("div",{children:"Invalid domain values"}),r.jsx("div",{children:"price >= 0"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{children:"DEFAULT"}),r.jsx("div",{children:"Empty initial state"}),r.jsx("div",{children:"status = 'active'"})]})]}),r.jsx("p",{className:"note",children:"Interview line: constraints are the database side validation layer, they protect data even if app code has bugs."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(tr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"PRIMARY KEY identifies, FOREIGN KEY connects, UNIQUE avoids duplicates, NOT NULL avoids missing, CHECK enforces rules, DEFAULT fills missing values."})]})]})]})})]})},ff={Wrapper:Se.section`
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
    `},gf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"normalization",title:"Normalization",sub:"Redundancy, anomalies, functional dependency, 1NF to BCNF, and when denormalization makes sense."}),[]);return r.jsxs(ff.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(de,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Design"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"Normalization"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Normalization"})," is a database design process that organizes tables to reduce duplication and avoid update bugs. It uses rules called ",r.jsx("b",{children:"normal forms"}),"."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Less redundancy"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"More consistency"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Cleaner schema"})]}),r.jsx("p",{className:"note",children:"Normalization helps data correctness. Performance can be handled later using indexes and careful queries."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Pp,{})}),r.jsx("h3",{className:"h3",children:"Redundancy"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Redundancy"})," means storing the same information multiple times in different rows. This increases storage and creates mismatch risk."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"monoBox",children:"In an Orders table, repeating customerAddress in every order row."})]}),r.jsx("p",{className:"note",children:"Redundancy is not always evil, but uncontrolled redundancy causes anomalies."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ys,{})}),r.jsx("h3",{className:"h3",children:"Anomalies"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Anomalies"})," are update problems caused by redundancy. These are common in poorly designed tables."]}),r.jsxs("div",{className:"tri",children:[r.jsxs("div",{className:"triCard",children:[r.jsx("div",{className:"triTitle",children:"Insertion anomaly"}),r.jsxs("div",{className:"triText",children:["You cannot add a fact because another fact is missing.",r.jsx("span",{className:"small",children:"Example: cannot add a new customer until they place an order."})]})]}),r.jsxs("div",{className:"triCard",children:[r.jsx("div",{className:"triTitle",children:"Update anomaly"}),r.jsxs("div",{className:"triText",children:["Same value exists in multiple rows, you must update all or data becomes inconsistent.",r.jsx("span",{className:"small",children:"Example: customer phone stored in many rows, one row updated but others not."})]})]}),r.jsxs("div",{className:"triCard",children:[r.jsx("div",{className:"triTitle",children:"Deletion anomaly"}),r.jsxs("div",{className:"triText",children:["Deleting one row removes more information than intended.",r.jsx("span",{className:"small",children:"Example: delete last order of a customer and you lose customer details too."})]})]})]}),r.jsx("p",{className:"note",children:"Normal forms exist mainly to prevent these anomalies."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Pm,{})}),r.jsx("h3",{className:"h3",children:"Functional dependency"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Functional dependency (FD)"})," is written as"," ",r.jsx("b",{children:"X -> Y"}),". It means if you know X, you can uniquely determine Y."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Meaning"}),r.jsx("div",{className:"v",children:"For any two rows, if X values match, Y values must also match."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Example"}),r.jsxs("div",{className:"v",children:["studentId -> studentName",r.jsx("span",{className:"small",children:"If studentId is same, name should be same."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why important"}),r.jsx("div",{className:"v",children:"Normalization rules are based on identifying FDs."})]})]}),r.jsx("p",{className:"note",children:"Key idea: a key determines all non-key attributes."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"1NF to BCNF"})]}),r.jsxs("div",{className:"nfGrid",children:[r.jsxs("div",{className:"nfCard",children:[r.jsxs("div",{className:"nfTop",children:[r.jsx("div",{className:"nfTitle",children:"1NF - First Normal Form"}),r.jsx("div",{className:"nfTag",children:"Atomic values"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"No repeating groups"}),r.jsx("li",{children:"Each column holds single value"}),r.jsx("li",{children:"Rows are unique"})]}),r.jsx("div",{className:"exSmall",children:'Example: phoneNumbers should not be "999,888,777" in one cell. Make separate rows or a new table.'})]}),r.jsxs("div",{className:"nfCard",children:[r.jsxs("div",{className:"nfTop",children:[r.jsx("div",{className:"nfTitle",children:"2NF - Second Normal Form"}),r.jsx("div",{className:"nfTag",children:"No partial dependency"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Must be in 1NF"}),r.jsx("li",{children:"Every non-key attribute depends on full primary key"})]}),r.jsx("div",{className:"exSmall",children:"Example: If primary key is (studentId, courseId), then studentName should not depend only on studentId."})]}),r.jsxs("div",{className:"nfCard",children:[r.jsxs("div",{className:"nfTop",children:[r.jsx("div",{className:"nfTitle",children:"3NF - Third Normal Form"}),r.jsx("div",{className:"nfTag",children:"No transitive dependency"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Must be in 2NF"}),r.jsx("li",{children:"Non-key attributes should not depend on other non-key attributes"})]}),r.jsx("div",{className:"exSmall",children:"Example: employeeId -> deptId and deptId -> deptName, then deptName should not be in employee table."})]}),r.jsxs("div",{className:"nfCard",children:[r.jsxs("div",{className:"nfTop",children:[r.jsx("div",{className:"nfTitle",children:"BCNF - Boyce Codd Normal Form"}),r.jsx("div",{className:"nfTag",children:"Stronger 3NF"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"For every FD X -> Y, X must be a super key"}),r.jsx("li",{children:"Fixes some tricky 3NF cases"})]}),r.jsx("div",{className:"exSmall",children:"Example: If instructor -> room exists, instructor must be a key, otherwise split tables."})]})]}),r.jsx("p",{className:"note",children:"Memory line: 1NF atomic, 2NF full key, 3NF no non-key chain, BCNF every determinant is a key."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Pp,{})}),r.jsx("h3",{className:"h3",children:"Denormalization"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Denormalization"})," means intentionally adding some redundancy to improve read performance. It is done after you understand the workload."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"When used"}),r.jsx("div",{className:"v",children:"Heavy read systems, dashboards, reporting, caching pre-joined data."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Trade-off"}),r.jsx("div",{className:"v",children:"Faster reads but harder updates and higher risk of inconsistency."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Safe approach"}),r.jsx("div",{className:"v",children:"Keep source of truth normalized, use derived tables or materialized views for speed."})]})]}),r.jsx("p",{className:"note",children:"Rule: normalize for correctness first, then denormalize only if performance demands it."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(de,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Normalization removes redundancy to avoid anomalies. 1NF atomic, 2NF full key, 3NF no transitive, BCNF determinant is a key."})]})]})]})})]})},vf={Wrapper:Se.section`
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
    `},yf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"transactionsAndConcurrency",title:"Transactions and Concurrency",sub:"Transaction meaning, ACID, concurrency problems, isolation levels, locks, and 2PL in one block."}),[]);return r.jsxs(vf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(At,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"ACID + Locks"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(yt,{})}),r.jsx("h3",{className:"h3",children:"Transaction"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"transaction"})," is a group of database operations that must be treated as one logical unit of work. It either ",r.jsx("b",{children:"fully happens"})," or",r.jsx("b",{children:" does not happen"}),"."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"BEGIN"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"READ"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"WRITE"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"COMMIT"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"ROLLBACK"})]}),r.jsx("p",{className:"note",children:"Example: transfer money - debit one account and credit another. Both must succeed together."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(dl,{})}),r.jsx("h3",{className:"h3",children:"ACID properties"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"ACID"})," describes guarantees that make transactions reliable in real systems."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Atomicity"})," - all or nothing"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Consistency"})," - rules stay true"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Isolation"})," - concurrent work does not break correctness"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Durability"})," - committed changes survive crashes"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Atomicity"})]}),r.jsx("p",{className:"p",children:"Atomicity means a transaction is indivisible. If any step fails, the DBMS rolls back all changes."}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"exText",children:'Order placed but payment failed - do not keep partial order state saved as "paid".'})]}),r.jsx("p",{className:"note",children:"Rollback is the practical tool that supports atomicity."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Consistency"})]}),r.jsx("p",{className:"p",children:"Consistency means the database moves from one valid state to another valid state. Constraints, triggers, and rules must remain satisfied."}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("div",{className:"exText",children:"Balance cannot go below 0 if business rule says no overdraft."})]}),r.jsx("p",{className:"note",children:'Consistency is about correctness rules, not about "same data everywhere".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Isolation"})]}),r.jsx("p",{className:"p",children:"Isolation means multiple transactions can run at the same time without interfering in a way that produces wrong results."}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Mental model"}),r.jsx("div",{className:"exText",children:"Each transaction should behave like it ran alone, even though it did not."})]}),r.jsx("p",{className:"note",children:"Isolation is controlled using locks, MVCC, and isolation levels."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Durability"})]}),r.jsx("p",{className:"p",children:"Durability means once a transaction commits, its changes will not be lost even if the system crashes immediately after."}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"How it is achieved"}),r.jsx("div",{className:"exText",children:"Logging and disk writes, often using WAL - write-ahead logging."})]}),r.jsx("p",{className:"note",children:"Commit is considered successful only after the DBMS ensures recovery is possible."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Hm,{})}),r.jsx("h3",{className:"h3",children:"Concurrency control"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Concurrency control"})," is how DBMS keeps correct results when many users read and write together. Goal is correctness with good performance."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common approaches"}),r.jsx("div",{className:"v",children:"Locks, timestamps, optimistic control, MVCC - Multi Version Concurrency Control."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Key idea"}),r.jsx("div",{className:"v",children:"Ensure schedules are equivalent to a correct serial order (serializability)."})]})]}),r.jsx("p",{className:"note",children:"Most modern databases use MVCC for reads and locks for writes in some form."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ys,{})}),r.jsx("h3",{className:"h3",children:"Concurrency problems - lost update and read anomalies"})]}),r.jsxs("div",{className:"problems",children:[r.jsxs("div",{className:"prob",children:[r.jsx("div",{className:"probTitle",children:"Lost update"}),r.jsx("div",{className:"probText",children:"Two transactions read the same value and both write back. The later write overwrites the earlier update."}),r.jsx("div",{className:"probMini",children:"T1 reads 100 - T2 reads 100 - T1 writes 120 - T2 writes 110"})]}),r.jsxs("div",{className:"prob",children:[r.jsx("div",{className:"probTitle",children:"Dirty read"}),r.jsx("div",{className:"probText",children:"A transaction reads data written by another transaction that has not committed yet. If the writer rolls back, the reader used invalid data."}),r.jsx("div",{className:"probMini",children:"T1 writes new value - T2 reads it - T1 rollback"})]}),r.jsxs("div",{className:"prob",children:[r.jsx("div",{className:"probTitle",children:"Non-repeatable read"}),r.jsx("div",{className:"probText",children:"A transaction reads the same row twice and gets different values because another transaction updated and committed between the reads."}),r.jsx("div",{className:"probMini",children:"T1 reads row - T2 updates and commit - T1 reads again"})]}),r.jsxs("div",{className:"prob",children:[r.jsx("div",{className:"probTitle",children:"Phantom read"}),r.jsx("div",{className:"probText",children:"A transaction repeats a range query and finds new rows because another transaction inserted rows that match the condition."}),r.jsx("div",{className:"probMini",children:"T1 selects where salary > 50k - T2 inserts new matching row - T1 selects again"})]})]}),r.jsx("p",{className:"note",children:"Dirty read is about uncommitted data. Non-repeatable is row changed. Phantom is new rows in a range."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Isolation levels"})]}),r.jsx("p",{className:"p",children:"Isolation levels define which anomalies are allowed for better performance. Higher isolation means fewer anomalies but more blocking and lower concurrency."}),r.jsxs("div",{className:"isoTable",children:[r.jsxs("div",{className:"iRow head",children:[r.jsx("div",{children:"Level"}),r.jsx("div",{children:"Dirty read"}),r.jsx("div",{children:"Non-repeatable"}),r.jsx("div",{children:"Phantom"})]}),r.jsxs("div",{className:"iRow",children:[r.jsx("div",{className:"lvl",children:"Read uncommitted"}),r.jsx("div",{className:"bad",children:"Allowed"}),r.jsx("div",{className:"bad",children:"Allowed"}),r.jsx("div",{className:"bad",children:"Allowed"})]}),r.jsxs("div",{className:"iRow",children:[r.jsx("div",{className:"lvl",children:"Read committed"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"bad",children:"Allowed"}),r.jsx("div",{className:"bad",children:"Allowed"})]}),r.jsxs("div",{className:"iRow",children:[r.jsx("div",{className:"lvl",children:"Repeatable read"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"bad",children:"Sometimes allowed"})]}),r.jsxs("div",{className:"iRow",children:[r.jsx("div",{className:"lvl",children:"Serializable"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"good",children:"Blocked"}),r.jsx("div",{className:"good",children:"Blocked"})]})]}),r.jsx("p",{className:"note",children:"Exact behavior can differ by database engine, but the table is the standard interview model."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(At,{})}),r.jsx("h3",{className:"h3",children:"Locks"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"lock"})," is a control mechanism that limits access to data while a transaction is working. It prevents conflicting operations."]}),r.jsx("p",{className:"note",children:"Locks can be on row, page, table, or even range, depending on DBMS."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(At,{})}),r.jsx("h3",{className:"h3",children:"Shared lock"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Shared lock"})," is used for reading. Many transactions can hold shared locks on the same data at the same time."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Read"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Many allowed"})]}),r.jsx("p",{className:"note",children:"Shared lock blocks writers but not other readers."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(At,{})}),r.jsx("h3",{className:"h3",children:"Exclusive lock"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Exclusive lock"})," is used for writing. Only one transaction can hold it. It blocks other reads and writes on the same data."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Write"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Only one allowed"})]}),r.jsx("p",{className:"note",children:"Exclusive lock ensures no one reads half-updated data."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(yt,{})}),r.jsx("h3",{className:"h3",children:"Two-phase locking - 2PL"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"2PL"})," means ",r.jsx("b",{children:"Two-Phase Locking"}),". It is a locking protocol to ensure serializability. A transaction has two phases for locks."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Growing phase"}),r.jsx("div",{className:"v",children:"Transaction can acquire locks but cannot release any lock."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Shrinking phase"}),r.jsx("div",{className:"v",children:"Transaction releases locks but cannot acquire new locks."})]})]}),r.jsx("p",{className:"note",children:"2PL avoids many anomalies, but it can cause deadlocks when transactions wait on each other."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(At,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"ACID makes transactions reliable. Isolation controls anomalies. Locks and 2PL keep concurrency correct."})]})]})]})})]})},jf={Wrapper:Se.section`
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
    `},bf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"indexing",title:"Indexing",sub:"What indexes are, clustered vs non-clustered, B-Tree, hash index, when to use, and trade-offs."}),[]);return r.jsxs(jf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(pr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Performance"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gr,{})}),r.jsx("h3",{className:"h3",children:"What is index"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"index"})," is an extra data structure that helps the database find rows faster without scanning the entire table."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Table"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Full scan"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Slow"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Index"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Jump to rows"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Fast"})]}),r.jsx("p",{className:"note",children:"Index is like a book index. You jump to the page instead of reading every page."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(hu,{})}),r.jsx("h3",{className:"h3",children:"When to use index"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["Columns used often in ",r.jsx("b",{children:"WHERE"})]}),r.jsxs("li",{children:["Columns used in ",r.jsx("b",{children:"JOIN"})," conditions"]}),r.jsxs("li",{children:["Columns used in ",r.jsx("b",{children:"ORDER BY"})]}),r.jsxs("li",{children:["Columns used in ",r.jsx("b",{children:"GROUP BY"})," (sometimes)"]}),r.jsx("li",{children:"Columns with high selectivity (many unique values)"})]}),r.jsx("p",{className:"note",children:"Index helps when it reduces scanned rows a lot. Index is less useful when most rows match."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Clustered index"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"clustered index"})," decides the physical order of rows on disk based on the indexed column. The table data is stored in the same order as the clustered key."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How many"}),r.jsxs("div",{className:"v",children:["Usually ",r.jsx("b",{children:"one"})," per table, because rows can be stored physically in one order only."]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsxs("div",{className:"v",children:["Range queries like",r.jsx("span",{className:"small",children:'"WHERE createdAt BETWEEN A AND B"'})]})]})]}),r.jsx("p",{className:"note",children:"Many databases make primary key clustered by default, but not always."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Non-clustered index"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"non-clustered index"})," is a separate structure that stores index keys and pointers to the actual table rows. Table rows are not stored in index order."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How many"}),r.jsx("div",{className:"v",children:"Multiple can exist on the same table."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsx("div",{className:"v",children:"Fast lookups on frequently filtered columns."})]})]}),r.jsx("p",{className:"note",children:"It is like having multiple indexes in a book for different topics."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gr,{})}),r.jsx("h3",{className:"h3",children:"B-Tree"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"B-Tree"})," is the most common index structure in relational databases. It stays balanced so searching is fast. It supports both equality and range queries efficiently."]}),r.jsxs("div",{className:"tree",children:[r.jsxs("div",{className:"tRow",children:[r.jsx("span",{className:"tLabel",children:"Good for"}),r.jsx("span",{className:"tVal",children:'"=", "<", ">", BETWEEN, ORDER BY'})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("span",{className:"tLabel",children:"Why"}),r.jsx("span",{className:"tVal",children:"Balanced tree means fewer disk reads while searching"})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("span",{className:"tLabel",children:"Common use"}),r.jsx("span",{className:"tVal",children:"Primary keys, createdAt sorting, range filters"})]})]}),r.jsx("p",{className:"note",children:"In interviews, just remember this: B-Tree is default because it handles many query types well."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pr,{})}),r.jsx("h3",{className:"h3",children:"Hash index"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"hash index"})," uses a hash function to map a key to a bucket. It is very fast for equality lookups."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Great for"}),r.jsx("div",{className:"v",children:'Equality - "WHERE id = 10"'})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Bad for"}),r.jsxs("div",{className:"v",children:["Range queries and sorting",r.jsx("span",{className:"small",children:"Example: BETWEEN, ORDER BY"})]})]})]}),r.jsx("p",{className:"note",children:"Hash indexes are not always available in all engines for all table types."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ys,{})}),r.jsx("h3",{className:"h3",children:"Trade-offs"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Faster reads"})," but ",r.jsx("b",{children:"slower writes"})," ","because index must be updated on INSERT, UPDATE, DELETE"]}),r.jsxs("li",{children:["Uses extra ",r.jsx("b",{children:"storage"})]}),r.jsx("li",{children:"Too many indexes can slow down write-heavy systems"}),r.jsx("li",{children:"Wrong indexes do nothing but still cost space and update time"}),r.jsx("li",{children:"Index maintenance can increase complexity"})]}),r.jsx("p",{className:"note",children:"Rule: index what you search and join on often. Avoid indexing everything blindly."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(pr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"B-Tree is general purpose. Hash is equality only. Index speeds reads but adds write and storage cost."})]})]})]})})]})},Nf={Wrapper:Se.section`
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
    `},wf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"storageAndArchitecture",title:"Storage and Architecture",sub:"Disk basics, pages and blocks, buffer pool, record storage, files, logs, and WAL."}),[]);return r.jsxs(Nf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(pn,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Engine basics"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pn,{})}),r.jsx("h3",{className:"h3",children:"Disk storage basics"})]}),r.jsxs("p",{className:"p",children:["Databases store data on"," ",r.jsx("b",{children:"persistent storage"}),"like SSD or HDD so it survives restarts. Disk is much slower than RAM, so databases try to do fewer disk reads and writes."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"RAM"})," - very fast, but data is lost on power off"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Disk"})," - slower, but data stays safe after restart"]}),r.jsx("li",{children:"DB engines batch writes and use caching to reduce disk access"})]}),r.jsx("p",{className:"note",children:"Simple mental model: disk is safe but slow, memory is fast but temporary."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Pages and blocks"})]}),r.jsxs("p",{className:"p",children:["Databases do not read single rows directly from disk. They read fixed-size chunks called"," ",r.jsx("b",{children:"pages"}),". On disk, these chunks are often called ",r.jsx("b",{children:"blocks"}),"."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Page"}),r.jsxs("div",{className:"v",children:["Fixed-size unit of storage used by the DB engine.",r.jsx("span",{className:"small",children:"Example sizes: 4KB, 8KB, 16KB depending on DB"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Block"}),r.jsx("div",{className:"v",children:"Disk level term for a chunk of data. Often maps closely to a page."})]})]}),r.jsx("p",{className:"note",children:"If one row is needed, the whole page containing that row is loaded into memory."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(_m,{})}),r.jsx("h3",{className:"h3",children:"Buffer pool"})]}),r.jsxs("p",{className:"p",children:["The ",r.jsx("b",{children:"buffer pool"})," is a memory area where the DB keeps recently used pages. It is basically the database cache."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["If a needed page is in buffer pool, it is a"," ",r.jsx("b",{children:"cache hit"})]}),r.jsxs("li",{children:["If not, it is a ",r.jsx("b",{children:"cache miss"})," and DB reads from disk"]}),r.jsx("li",{children:"When buffer pool is full, DB evicts old pages using a policy like LRU style"})]}),r.jsx("p",{className:"note",children:"Bigger buffer pool usually means fewer disk reads and faster queries."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"Record storage"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"record"})," is a stored row of a table. Inside a page, records are stored with metadata so the DB can find them quickly."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Rows may have fixed-length and variable-length fields"}),r.jsx("li",{children:"Pages often maintain a slot directory to locate records"}),r.jsx("li",{children:"Updates can create fragmentation, DB may reorganize pages"})]}),r.jsx("p",{className:"note",children:"You do not need page internals for interviews, just know records live inside pages."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Op,{})}),r.jsx("h3",{className:"h3",children:"Heap file"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"heap file"})," stores records in no specific order. New records are placed wherever space is available."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Fast inserts"}),r.jsx("li",{children:"Search can be slow without an index"}),r.jsx("li",{children:"Common base storage method for tables"})]}),r.jsx("p",{className:"note",children:"Heap does not mean heap memory. It just means unordered file storage."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Op,{})}),r.jsx("h3",{className:"h3",children:"Sequential file"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"sequential file"})," stores records in a sorted order based on a key like an id or timestamp."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Good for range queries and ordered scanning"}),r.jsx("li",{children:"Insert and delete can be slower because order must be maintained"}),r.jsx("li",{children:"Often used for logs or data files designed for sequential reads"})]}),r.jsx("p",{className:"note",children:"Think: sequential is scan-friendly, heap is insert-friendly."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"Log file"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"log file"})," records changes made by transactions. It is used for crash recovery to restore a consistent state. Logs are usually written sequentially, which is fast on disk."]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"Data file"}),r.jsx("div",{children:"Log file"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Stores actual table data pages and index pages"}),r.jsx("div",{children:"Stores change history and transaction actions"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Random reads and writes based on queries"}),r.jsx("div",{children:"Mostly sequential writes"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Used for normal query reads"}),r.jsx("div",{children:"Used mainly for recovery and durability"})]})]}),r.jsx("p",{className:"note",children:"Logging is a key reason databases can recover after a crash without losing committed transactions."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tr,{})}),r.jsx("h3",{className:"h3",children:"Write-ahead logging - WAL"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"WAL"})," means ",r.jsx("b",{children:"Write-Ahead Logging"}),". Rule: write the log record to disk before writing the data page to disk. This ensures durability and correct recovery."]}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"1"}),r.jsx("div",{className:"t",children:"Transaction updates a row in memory"})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"2"}),r.jsx("div",{className:"t",children:"DB writes the change into the log file on disk"})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"3"}),r.jsx("div",{className:"t",children:"Later, DB writes the actual data page to disk"})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"4"}),r.jsx("div",{className:"t",children:"On crash, DB replays logs to redo committed changes and undo incomplete ones"})]})]}),r.jsx("p",{className:"note",children:"WAL makes commits reliable even if data pages are flushed later."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(pn,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Disk stores pages. Buffer pool caches pages. Logs record changes. WAL means log first, data later."})]})]})]})})]})},kf={Wrapper:Se.section`
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
    `},Sf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"queryProcessingOptimization",title:"Query Processing and Optimization",sub:"How SQL becomes an execution plan, how the optimizer chooses paths, and why indexes change performance."}),[]);return r.jsxs(kf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(pr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Optimizer"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pr,{})}),r.jsx("h3",{className:"h3",children:"Query parsing"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Query parsing"})," is the first step where the DBMS reads your SQL, checks syntax, checks that tables and columns exist, and builds an internal representation of the query."]}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"1"}),r.jsxs("div",{className:"t",children:[r.jsx("b",{children:"Lexing"})," - breaks SQL into tokens like SELECT, FROM, column names"]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"2"}),r.jsxs("div",{className:"t",children:[r.jsx("b",{children:"Parsing"})," - creates a parse tree (structure of the query)"]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"n",children:"3"}),r.jsxs("div",{className:"t",children:[r.jsx("b",{children:"Validation"})," - checks schema, types, permissions"]})]})]}),r.jsx("p",{className:"note",children:'Output of parsing is not yet "how to run" it, it is "what you asked".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Bm,{})}),r.jsx("h3",{className:"h3",children:"Query plan"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"query plan"})," is the DBMS decision of how to execute the query. It is a tree of operations like scans, filters, joins, sorts, and aggregations."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Scan"}),r.jsxs("div",{className:"v",children:["Read rows from a table or index",r.jsx("span",{className:"small",children:"Table scan or index scan"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Join"}),r.jsxs("div",{className:"v",children:["Combine rows from multiple tables",r.jsx("span",{className:"small",children:"Hash join, nested loop join, merge join"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Sort"}),r.jsx("div",{className:"v",children:"Order results, often needed for ORDER BY or merge join"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Aggregate"}),r.jsx("div",{className:"v",children:"GROUP BY calculations like COUNT, SUM"})]})]}),r.jsx("p",{className:"note",children:"Same SQL can have many possible plans. Optimizer picks one."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Om,{})}),r.jsx("h3",{className:"h3",children:"Cost-based optimization"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Cost-based optimization"})," means the DBMS estimates the cost of different plans and picks the cheapest one. Cost is not money, it means expected work like CPU, disk reads, memory, and time."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["Uses ",r.jsx("b",{children:"statistics"})," like row counts, distinct values, distribution"]}),r.jsx("li",{children:"Estimates selectivity of filters like WHERE conditions"}),r.jsx("li",{children:"Tries join orders and join algorithms"}),r.jsx("li",{children:"Prefers plans with fewer reads and smaller intermediate results"})]}),r.jsx("p",{className:"note",children:"If stats are outdated, optimizer can choose a bad plan. This is why ANALYZE or stats refresh matters."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Um,{})}),r.jsx("h3",{className:"h3",children:"Execution plan basics"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"execution plan"})," is the final plan that the DBMS actually runs. Most databases let you view it using EXPLAIN or EXPLAIN ANALYZE."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"What you usually see"}),r.jsxs("ul",{className:"exList",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Node types"})," like Seq Scan, Index Scan, Hash Join"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Estimated rows"})," vs actual rows"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Costs"})," like startup cost and total cost"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Time"})," and buffers in real run (ANALYZE)"]})]})]}),r.jsx("p",{className:"note",children:"Reading plans is a skill. Always check which step produces the biggest row explosion."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(hu,{})}),r.jsx("h3",{className:"h3",children:"Why indexes change performance"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"index"})," is like a book index. Instead of scanning every row, the DBMS can jump to matching rows faster. This can reduce disk reads massively, especially for large tables."]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"Without index"}),r.jsx("div",{children:"With index"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"DBMS may do a full table scan and check every row"}),r.jsx("div",{children:"DBMS can do an index scan and fetch only matching rows"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Faster only for small tables, but becomes slow as table grows"}),r.jsx("div",{children:"Big speedup when filter selects few rows out of many"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Sorting may be needed for ORDER BY"}),r.jsx("div",{children:"Index order can remove sorting in some cases"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Joins may scan many rows first"}),r.jsx("div",{children:"Index can speed up joins on keys (like foreign key joins)"})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("div",{className:"wTitle",children:"Index trade-offs"}),r.jsxs("ul",{className:"wList",children:[r.jsx("li",{children:"Indexes make reads faster but writes slower (INSERT, UPDATE, DELETE must update index too)"}),r.jsx("li",{children:"Too many indexes increase storage and maintenance cost"}),r.jsx("li",{children:"Index helps only if it matches the query pattern (columns and order matter)"})]})]}),r.jsx("p",{className:"note",children:"Simple memory: index helps when you search small part of a big table."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(pr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"SQL becomes a plan. Optimizer picks cheapest path using stats. Indexes reduce scanning but add write cost."})]})]})]})})]})},Ef={Wrapper:Se.section`
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
    `},Tf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"nosqlBasics",title:"NoSQL Basics",sub:"What NoSQL is, main types, SQL vs NoSQL, and when to choose NoSQL for real systems."}),[]);return r.jsxs(Ef.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(gr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"NoSQL"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Am,{})}),r.jsx("h3",{className:"h3",children:"What is NoSQL"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"NoSQL"})," means ",r.jsx("b",{children:"Not Only SQL"}),". It is a category of databases designed for flexibility, high scale, and fast performance for certain workloads. NoSQL systems often store data in formats other than rows and tables."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Flexible schema - fields can vary between records"}),r.jsx("li",{children:"Scales horizontally - add more machines to handle load"}),r.jsx("li",{children:"Optimized for specific access patterns"})]}),r.jsx("p",{className:"note",children:'NoSQL is not "no structure". It is structure that fits the use case.'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"Types"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Key-value"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Document"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Column family"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Graph"})]}),r.jsx("p",{className:"p",children:"Each type is built around a different way of storing and querying data. Pick based on how your app reads and writes data."}),r.jsx("p",{className:"note",children:"Most real systems use a mix of SQL and NoSQL."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Pa,{})}),r.jsx("h3",{className:"h3",children:"Key-value"})]}),r.jsxs("p",{className:"p",children:["Stores data as ",r.jsx("b",{children:"key - value"})," pairs. You give a key, it returns a value. Very fast for simple lookups."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example shape"}),r.jsx("pre",{className:"pre",children:`"user:42" -> "{ name: 'Ash', plan: 'pro' }"`})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Best for caching, sessions, counters, feature flags"}),r.jsx("li",{children:"Weak for complex joins or ad-hoc analytics"})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"Document"})]}),r.jsxs("p",{className:"p",children:["Stores records as ",r.jsx("b",{children:"documents"}),", commonly JSON-like. Each document can have nested objects and arrays."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example document"}),r.jsx("pre",{className:"pre",children:`{
  "_id": "order_1001",
  "userId": "u42",
  "items": [
    { "sku": "p10", "qty": 2 },
    { "sku": "p21", "qty": 1 }
  ],
  "total": 1299
}`})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Great for user profiles, product catalogs, logs, content apps"}),r.jsx("li",{children:"Joins are limited, denormalization is common"})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"Column family"})]}),r.jsxs("p",{className:"p",children:["Stores data in ",r.jsx("b",{children:"column families"})," ","(wide-column). It is optimized for large-scale reads and writes across many nodes. Rows can have many columns and columns can vary."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Good for time-series, telemetry, large event data"}),r.jsx("li",{children:"Designed for high throughput and scale"}),r.jsx("li",{children:"Query patterns must be planned in advance"})]}),r.jsx("p",{className:"note",children:"Think of it like a giant sparse table tuned for scale."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Da,{})}),r.jsx("h3",{className:"h3",children:"Graph"})]}),r.jsxs("p",{className:"p",children:["Stores data as ",r.jsx("b",{children:"nodes"})," and ",r.jsx("b",{children:"edges"}),". The focus is on relationships and traversals."]}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"exTitle",children:"Example idea"}),r.jsx("pre",{className:"pre",children:`(Ash) -[FRIEND]-> (Neha)
(Ash) -[LIKES]-> (Robotics)
(Robotics) -[RELATED]-> (AI)`})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Best for social networks, recommendations, fraud detection"}),r.jsx("li",{children:"Strong for relationship-heavy queries"})]})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(de,{})}),r.jsx("h3",{className:"h3",children:"SQL vs NoSQL comparison"})]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"SQL (Relational)"}),r.jsx("div",{children:"NoSQL"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Fixed schema, tables and rows"}),r.jsx("div",{children:"Flexible schema, multiple data models"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Strong joins and complex queries"}),r.jsx("div",{children:"Optimized for specific access patterns"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"ACID transactions are common"}),r.jsx("div",{children:"Consistency model can vary, often eventual consistency"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Vertical scaling is common (bigger machine)"}),r.jsx("div",{children:"Horizontal scaling is common (more machines)"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Great for financial, inventory, strong integrity apps"}),r.jsx("div",{children:"Great for logs, content, high traffic, flexible data apps"})]})]}),r.jsx("p",{className:"note",children:"Rule of thumb: if relationships and correctness are core, SQL wins. If scale and flexible structure are core, NoSQL helps."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gr,{})}),r.jsx("h3",{className:"h3",children:"When to use NoSQL"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"When schema changes frequently and you want flexibility"}),r.jsx("li",{children:"When you need massive scale and horizontal scaling is the plan"}),r.jsx("li",{children:"When data is unstructured or semi-structured (logs, events, content)"}),r.jsx("li",{children:"When you need very fast key-based reads (cache, sessions)"}),r.jsx("li",{children:"When relationships are best represented as graphs (recommendations)"}),r.jsx("li",{children:"When your queries are predictable and designed around the storage model"})]}),r.jsx("p",{className:"note",children:"In many products: SQL for core data, NoSQL for logs, cache, search, and high-scale side workloads."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(gr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"NoSQL is about choosing the right data model - key-value for speed, document for flexible JSON, column family for scale, graph for relationships."})]})]})]})})]})},Cf={Wrapper:Se.section`
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
    `},If=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"distributedDatabases",title:"Distributed Databases",sub:"Replication, sharding, CAP theorem, and why consistency vs availability becomes a trade-off during partitions."}),[]);return r.jsxs(Cf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Yo,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Scaling"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(du,{})}),r.jsx("h3",{className:"h3",children:"Replication"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Replication"})," means keeping copies of the same data on multiple machines called"," ",r.jsx("b",{children:"nodes"}),". This improves availability and read performance."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why"}),r.jsx("div",{className:"v",children:"Higher availability, disaster recovery, faster reads near users"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common patterns"}),r.jsxs("div",{className:"v",children:["Primary replica - one leader handles writes, followers copy",r.jsx("span",{className:"small",children:"Also called leader follower, primary secondary, master replica"})]})]})]}),r.jsx("p",{className:"note",children:"Replication is about copying the same dataset to more places."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"Sharding"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Sharding"})," means splitting data into parts called ",r.jsx("b",{children:"shards"})," and storing each shard on different nodes. This improves write scaling and total storage."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Shard key"}),r.jsxs("div",{className:"v",children:["A field used to decide which shard stores a row",r.jsx("span",{className:"small",children:"Example: userId, region, tenantId"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Goal"}),r.jsx("div",{className:"v",children:"Scale out - more machines = more capacity"})]})]}),r.jsx("p",{className:"note",children:"Replication copies the same data. Sharding splits data across nodes."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tr,{})}),r.jsx("h3",{className:"h3",children:"CAP theorem"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"CAP theorem"})," says that in a distributed system, when a ",r.jsx("b",{children:"network partition"})," happens, you must choose between ",r.jsx("b",{children:"Consistency"})," and"," ",r.jsx("b",{children:"Availability"}),". Partition tolerance is not optional in real distributed networks."]}),r.jsxs("div",{className:"capGrid",children:[r.jsxs("div",{className:"capCard",children:[r.jsxs("div",{className:"capTop",children:[r.jsx("span",{className:"capIcon",children:r.jsx(Pa,{})}),r.jsx("div",{className:"capTitle",children:"Consistency - C"})]}),r.jsx("p",{className:"capText",children:"Every read returns the latest write or an error. All nodes behave like one correct system."}),r.jsxs("div",{className:"capEx",children:[r.jsx("div",{className:"capExTitle",children:"Example"}),r.jsx("div",{className:"capExText",children:"Bank balance should not show old values after a transfer."})]})]}),r.jsxs("div",{className:"capCard",children:[r.jsxs("div",{className:"capTop",children:[r.jsx("span",{className:"capIcon",children:r.jsx(tr,{})}),r.jsx("div",{className:"capTitle",children:"Availability - A"})]}),r.jsx("p",{className:"capText",children:"Every request gets a response, even if it might be stale. System prefers to stay online."}),r.jsxs("div",{className:"capEx",children:[r.jsx("div",{className:"capExTitle",children:"Example"}),r.jsx("div",{className:"capExText",children:"Product catalog can show slightly old data but must respond fast."})]})]}),r.jsxs("div",{className:"capCard",children:[r.jsxs("div",{className:"capTop",children:[r.jsx("span",{className:"capIcon",children:r.jsx(ys,{})}),r.jsx("div",{className:"capTitle",children:"Partition tolerance - P"})]}),r.jsx("p",{className:"capText",children:"System continues working even if nodes cannot communicate due to network split."}),r.jsxs("div",{className:"capEx",children:[r.jsx("div",{className:"capExTitle",children:"Example"}),r.jsx("div",{className:"capExText",children:"Data center A cannot reach data center B for some time."})]})]})]}),r.jsxs("div",{className:"capNote",children:[r.jsx("div",{className:"capNoteTitle",children:"Key rule"}),r.jsx("div",{className:"capNoteText",children:"During a partition, you cannot fully guarantee both consistency and availability. You either reject requests to stay consistent, or respond with possible stale data to stay available."})]})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Yo,{})}),r.jsx("h3",{className:"h3",children:"Eventual consistency"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Eventual consistency"})," means the system does not guarantee that every read is the latest immediately, but if no new writes happen, all replicas will become consistent after some time."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why it exists"}),r.jsx("div",{className:"v",children:"It helps availability and performance in distributed systems."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"What you may see"}),r.jsxs("div",{className:"v",children:["Stale reads for a short time, then everything matches later.",r.jsx("span",{className:"small",children:"Example: you update your profile photo and some devices show old one for a while."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How systems reduce pain"}),r.jsx("div",{className:"v",children:"Read your writes, versioning, conflict resolution, leader based replication, quorums"})]})]}),r.jsx("p",{className:"note",children:"Eventual consistency is common in many NoSQL systems and geo-distributed setups."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vr,{})}),r.jsx("h3",{className:"h3",children:"Quick compare"})]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"Concept"}),r.jsx("div",{children:"One line meaning"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Replication"}),r.jsx("div",{children:"Copy the same data to multiple nodes"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Sharding"}),r.jsx("div",{children:"Split data into pieces across nodes"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Consistency"}),r.jsx("div",{children:"Reads always reflect latest write or error"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Availability"}),r.jsx("div",{children:"Always respond to requests, even if stale"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Partition tolerance"}),r.jsx("div",{children:"System survives network splits"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Eventual consistency"}),r.jsx("div",{children:"All replicas match after some time"})]})]}),r.jsx("p",{className:"note",children:"Memory trick: replication duplicates, sharding divides, CAP is the partition trade-off story."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Yo,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Distributed databases scale using replication and sharding. During partitions, choose consistency or availability."})]})]})]})})]})},zf={Wrapper:Se.section`
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
    `},Lf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"securityInDbms",title:"Security in DBMS",sub:"Authentication, authorization, roles, encryption at rest and in transit, and SQL injection basics."}),[]);return r.jsxs(zf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(tr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Must know"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xr,{})}),r.jsx("h3",{className:"h3",children:"Authentication"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Authentication"}),' means verifying identity. DBMS checks "who you are" before allowing access.']}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Common methods - password, certificate, token, SSO (Single Sign-On)"}),r.jsx("li",{children:"Good practice - strong passwords, rotate credentials, use MFA (Multi-Factor Authentication)"})]}),r.jsx("p",{className:"note",children:"Memory: authentication is identity proof."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(At,{})}),r.jsx("h3",{className:"h3",children:"Authorization"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Authorization"}),' means permissions. DBMS decides "what you can do" after you are authenticated.']}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"READ"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"WRITE"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"ADMIN"})]}),r.jsx("p",{className:"note",children:"Memory: authorization is allowed actions."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Gm,{})}),r.jsx("h3",{className:"h3",children:"Roles"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"role"})," is a named set of permissions. Instead of giving permissions to each user one by one, assign a role to a user."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why roles"}),r.jsx("div",{className:"v",children:"Easier management, less mistakes, consistent access control."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Examples"}),r.jsxs("div",{className:"v",children:["reader role - only SELECT",r.jsx("span",{className:"small",children:"writer role - SELECT + INSERT + UPDATE"}),r.jsx("span",{className:"small",children:"admin role - schema changes + user management"})]})]})]}),r.jsx("p",{className:"note",children:"Follow least privilege: give only the permissions needed for the job."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gr,{})}),r.jsx("h3",{className:"h3",children:"Encryption at rest"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Encryption at rest"})," means encrypting data stored on disk. If someone steals the database files or disk snapshot, they cannot read it without the key."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Applies to - data files, backups, snapshots"}),r.jsx("li",{children:"Common approach - TDE (Transparent Data Encryption)"}),r.jsx("li",{children:"Key management matters - keep keys separate from data"})]}),r.jsx("p",{className:"note",children:"At rest protects storage. It does not protect data while travelling on the network."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tr,{})}),r.jsx("h3",{className:"h3",children:"Encryption in transit"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Encryption in transit"})," means encrypting data while it moves between client and DB server, or between DB nodes. This prevents sniffing and man-in-the-middle attacks."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"TLS"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"SSL"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Certificates"})]}),r.jsx("p",{className:"note",children:"Use TLS. SSL term is still used, but modern setups are TLS based."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon warn",children:r.jsx(ys,{})}),r.jsx("h3",{className:"h3",children:"SQL injection basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"SQL injection"})," is an attack where an attacker tricks your app into running unintended SQL by injecting input into a query string. This can leak data, bypass login, or even delete tables."]}),r.jsxs("div",{className:"badGood",children:[r.jsxs("div",{className:"bgCard bad",children:[r.jsx("div",{className:"bgTitle",children:"Bad pattern"}),r.jsx("div",{className:"bgText",children:"Building SQL by string concatenation with user input."}),r.jsx("div",{className:"bgMono",children:'SELECT * FROM users WHERE email = " + userEmail'})]}),r.jsxs("div",{className:"bgCard good",children:[r.jsx("div",{className:"bgTitle",children:"Good pattern"}),r.jsx("div",{className:"bgText",children:"Use parameterized queries or prepared statements."}),r.jsx("div",{className:"bgMono",children:"SELECT * FROM users WHERE email = ?"})]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Always use prepared statements and parameterized queries"}),r.jsx("li",{children:"Validate input types and lengths"}),r.jsx("li",{children:"Use least privilege DB users for apps"}),r.jsx("li",{children:"Avoid showing raw SQL errors to users"})]}),r.jsx("p",{className:"note",children:"Most SQL injection happens at application layer, not inside the DBMS itself."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(tr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Authentication - who you are. Authorization - what you can do. Encrypt disk and network. Prevent SQL injection with parameters."})]})]})]})})]})},Rf={Wrapper:Se.section`
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
    `},Mf=()=>{const[a,c]=Z.useState(!0),l=Z.useMemo(()=>({id:"backupAndRecovery",title:"Backup and Recovery",sub:"Full, incremental, differential backups, crash recovery, logs, and checkpoints."}),[]);return r.jsxs(Rf.Wrapper,{id:l.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${l.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(pn,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:l.title}),r.jsx("span",{className:"badge",children:"Safety"})]}),r.jsx("p",{className:"sub",children:l.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Ve,{})})]}),r.jsx("div",{id:`${l.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ys,{})}),r.jsx("h3",{className:"h3",children:"Why backup and recovery matter"})]}),r.jsxs("p",{className:"p",children:["Backups protect you from ",r.jsx("b",{children:"human mistakes"})," ","(accidental delete),",r.jsx("b",{children:"hardware failures"}),", ",r.jsx("b",{children:"software bugs"}),", and ",r.jsx("b",{children:"crashes"}),". Recovery is the process of bringing the database back to a correct state."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Backup"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Restore"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Replay logs"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Consistent state"})]}),r.jsx("p",{className:"note",children:"Backups give you a base copy. Logs help you recover the latest committed changes."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"Backup types"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Full backup"}),r.jsxs("div",{className:"v",children:["Takes a complete copy of the database at a point in time.",r.jsx("span",{className:"small",children:"Pros: simplest restore - Cons: slower and larger size"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Incremental backup"}),r.jsxs("div",{className:"v",children:["Backs up only the data changed since the"," ",r.jsx("b",{children:"last backup"})," (full or incremental).",r.jsx("span",{className:"small",children:"Pros: fast and small - Cons: restore needs full + all incrementals"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Differential backup"}),r.jsxs("div",{className:"v",children:["Backs up only the data changed since the"," ",r.jsx("b",{children:"last full backup"}),".",r.jsx("span",{className:"small",children:"Pros: restore needs full + latest differential - Cons: grows bigger over time"})]})]})]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"row head",children:[r.jsx("div",{children:"Type"}),r.jsx("div",{children:"Restore requirement"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Full"}),r.jsx("div",{children:"Restore the full backup"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Incremental"}),r.jsx("div",{children:"Full + every incremental in order"})]}),r.jsxs("div",{className:"row",children:[r.jsx("div",{children:"Differential"}),r.jsx("div",{children:"Full + latest differential"})]})]}),r.jsx("p",{className:"note",children:"Simple interview line: Incremental is smaller but restore is longer. Differential is larger but restore is simpler."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pu,{})}),r.jsx("h3",{className:"h3",children:"Crash recovery"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Crash recovery"})," means restoring the database to a correct state after a crash like power loss or server restart."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["Ensure ",r.jsx("b",{children:"committed"})," transactions are not lost"]}),r.jsxs("li",{children:["Undo ",r.jsx("b",{children:"uncommitted"})," transactions to avoid partial updates"]}),r.jsx("li",{children:"Bring database back to a consistent state"})]}),r.jsx("p",{className:"note",children:"Recovery is mainly about redo committed work and undo incomplete work."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"Log-based recovery"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Log-based recovery"})," uses a log file that records changes made by transactions. The log is used to ",r.jsx("b",{children:"redo"})," or ",r.jsx("b",{children:"undo"})," operations during recovery."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Redo"}),r.jsx("div",{className:"v",children:"Re-apply changes of committed transactions if they were not written to disk."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Undo"}),r.jsx("div",{className:"v",children:"Roll back changes of uncommitted transactions to remove partial updates."})]})]}),r.jsx("p",{className:"note",children:"Logs are usually written before data pages. That rule is called WAL."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(dl,{})}),r.jsx("h3",{className:"h3",children:"Checkpoints"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"checkpoint"}),' is a marker that says "up to this point, the database has flushed enough info to make recovery faster". It reduces how far back the DBMS must scan the log after a crash.']}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Log grows"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Checkpoint"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Less redo work"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Faster restart"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Checkpoints write a safe recovery point into the log"}),r.jsx("li",{children:"DBMS flushes some dirty pages to disk"}),r.jsx("li",{children:"Recovery scans logs mainly after the last checkpoint"})]}),r.jsx("p",{className:"note",children:"Without checkpoints, recovery may need to scan a huge log, slowing restart."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mm,{})}),r.jsx("h3",{className:"h3",children:"Quick scenario you can say in interviews"})]}),r.jsxs("div",{className:"scenario",children:[r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"num",children:"1"}),r.jsxs("div",{className:"txt",children:["Restore latest ",r.jsx("b",{children:"full backup"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"num",children:"2"}),r.jsxs("div",{className:"txt",children:["Apply ",r.jsx("b",{children:"latest differential"})," or all"," ",r.jsx("b",{children:"incrementals"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"num",children:"3"}),r.jsxs("div",{className:"txt",children:["Use ",r.jsx("b",{children:"logs"})," to redo committed and undo uncommitted work"]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"num",children:"4"}),r.jsx("div",{className:"txt",children:"Checkpoint helps by cutting log scan time"})]})]})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(pn,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Full is base copy. Incremental is since last backup. Differential is since last full. Logs do redo and undo. Checkpoints speed recovery."})]})]})]})})]})},Of=()=>{const[a,c]=Z.useState("overview"),l=dr.useRef(null),p=[["overview","Overview",r.jsx(tl,{})],["databaseFundamentals","Fundamentals",r.jsx(gr,{})],["dataModels","Data models",r.jsx(de,{})],["erModel","ER model",r.jsx(Da,{})],["relationalModel","Relational model",r.jsx(gr,{})],["sqlBasics","SQL basics",r.jsx(pr,{})],["sqlQueryingEssentials","SQL querying",r.jsx(pr,{})],["joinsAndSubqueries","Joins and subqueries",r.jsx(de,{})],["constraints","Constraints",r.jsx(tr,{})],["normalization","Normalization",r.jsx(de,{})],["transactionsAndConcurrency","Transactions",r.jsx(At,{})],["indexing","Indexing",r.jsx(Pa,{})],["storageAndArchitecture","Storage and architecture",r.jsx(Ap,{})],["queryProcessingOptimization","Query optimization",r.jsx(Pa,{})],["nosqlBasics","NoSQL basics",r.jsx(gr,{})],["distributedDatabases","Distributed databases",r.jsx(Da,{})],["securityInDbms","Database security",r.jsx(tr,{})],["backupAndRecovery","Backup and recovery",r.jsx(Ap,{})]],m=j=>{var k;c(j),(k=l.current)==null||k.scrollTo({top:0,left:0,behavior:"smooth"})};return r.jsxs(Go.Wrapper,{children:[r.jsx(Go.Header,{children:r.jsx(Ym,{})}),r.jsxs(Go.Main,{ref:l,children:[r.jsxs("aside",{className:"studyNav","aria-label":"DBMS topics",children:[r.jsx("div",{className:"studyNavLabel",children:"Study guide"}),r.jsx("nav",{children:p.map(([j,k,I])=>r.jsxs("button",{type:"button",className:a===j?"active":"",onClick:()=>m(j),children:[I,r.jsx("span",{children:k})]},j))}),r.jsx("p",{children:"Select a topic to open its notes."})]}),r.jsxs("div",{className:"contentWrapper",children:[a==="overview"&&r.jsx(Jm,{}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(ef,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(tf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(nf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(of,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(cf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(pf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(hf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(mf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(gf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(yf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(bf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(wf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(Sf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(Tf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(If,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(Lf,{})}),r.jsx("div",{className:`topicWrapper ${a==="databaseFundamentals"?"activeTopic":""}`,children:r.jsx(Mf,{})})]}),r.jsx("div",{className:"footerWrapper",children:r.jsx(Km,{})})]})]})};yx.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(Of,{})}));
