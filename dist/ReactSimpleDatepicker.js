parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OUZ9":[function(require,module,exports) {
function r(r){if(Array.isArray(r))return r}module.exports=r;
},{}],"vKPt":[function(require,module,exports) {
function t(t,r){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],o=!0,n=!1,l=void 0;try{for(var i,a=t[Symbol.iterator]();!(o=(i=a.next()).done)&&(e.push(i.value),!r||e.length!==r);o=!0);}catch(u){n=!0,l=u}finally{try{o||null==a.return||a.return()}finally{if(n)throw l}}return e}}module.exports=t;
},{}],"Rom6":[function(require,module,exports) {
function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}module.exports=t;
},{}],"HETk":[function(require,module,exports) {
var r=require("./arrayWithHoles"),e=require("./iterableToArrayLimit"),i=require("./nonIterableRest");function t(t,a){return r(t)||e(t,a)||i()}module.exports=t;
},{"./arrayWithHoles":"OUZ9","./iterableToArrayLimit":"vKPt","./nonIterableRest":"Rom6"}],"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.forward_ref"):60112,a=r?Symbol.for("react.suspense"):60113;r&&Symbol.for("react.suspense_list");var s=r?Symbol.for("react.memo"):60115,p=r?Symbol.for("react.lazy"):60116;r&&Symbol.for("react.fundamental"),r&&Symbol.for("react.responder"),r&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||m}function b(){}function S(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var _=S.prototype=new b;_.constructor=S,e(_,h.prototype),_.isPureReactComponent=!0;var k={current:null},$={current:null},g=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,n){var o,u={},f=null,l=null;if(null!=r)for(o in void 0!==r.ref&&(l=r.ref),void 0!==r.key&&(f=""+r.key),r)g.call(r,o)&&!w.hasOwnProperty(o)&&(u[o]=r[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),a=0;a<c;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:t,type:e,key:f,ref:l,props:u,_owner:$.current}}function E(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function x(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})}var P=/\/+/g,j=[];function O(e,r,t,n){if(j.length){var o=j.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>j.length&&j.push(e)}function I(e,r,o,u){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var l=!1;if(null===e)l=!0;else switch(f){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case n:l=!0}}if(l)return o(u,e,""===r?"."+q(e,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var i=r+q(f=e[c],c);l+=I(f,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=y&&e[y]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),c=0;!(f=e.next()).done;)l+=I(f=f.value,i=r+q(f,c++),o,u);else if("object"===f)throw o=""+e,Error(d(31,"[object Object]"===o?"object with keys {"+Object.keys(e).join(", ")+"}":o,""));return l}function U(e,r,t){return null==e?0:I(e,"",r,t)}function q(e,r){return"object"==typeof e&&null!==e&&null!=e.key?x(e.key):r.toString(36)}function F(e,r){e.func.call(e.context,r,e.count++)}function L(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?M(e,n,t,function(e){return e}):null!=e&&(R(e)&&(e=E(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+t)),n.push(e))}function M(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(P,"$&/")+"/"),U(e,L,r=O(r,u,n,o)),A(r)}function D(){var e=k.current;if(null===e)throw Error(d(321));return e}var V={Children:{map:function(e,r,t){if(null==e)return e;var n=[];return M(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;U(e,F,r=O(null,null,r,t)),A(r)},count:function(e){return U(e,function(){return null},null)},toArray:function(e){var r=[];return M(e,r,null,function(e){return e}),r},only:function(e){if(!R(e))throw Error(d(143));return e}},createRef:function(){return{current:null}},Component:h,PureComponent:S,createContext:function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:i,render:e}},lazy:function(e){return{$$typeof:p,_ctor:e,_status:-1,_result:null}},memo:function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},useCallback:function(e,r){return D().useCallback(e,r)},useContext:function(e,r){return D().useContext(e,r)},useEffect:function(e,r){return D().useEffect(e,r)},useImperativeHandle:function(e,r,t){return D().useImperativeHandle(e,r,t)},useDebugValue:function(){},useLayoutEffect:function(e,r){return D().useLayoutEffect(e,r)},useMemo:function(e,r){return D().useMemo(e,r)},useReducer:function(e,r,t){return D().useReducer(e,r,t)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:o,Profiler:f,StrictMode:u,Suspense:a,createElement:C,cloneElement:function(r,n,o){if(null==r)throw Error(d(267,r));var u=e({},r.props),f=r.key,l=r.ref,c=r._owner;if(null!=n){if(void 0!==n.ref&&(l=n.ref,c=$.current),void 0!==n.key&&(f=""+n.key),r.type&&r.type.defaultProps)var i=r.type.defaultProps;for(a in n)g.call(n,a)&&!w.hasOwnProperty(a)&&(u[a]=void 0===n[a]&&void 0!==i?i[a]:n[a])}var a=arguments.length-2;if(1===a)u.children=o;else if(1<a){i=Array(a);for(var s=0;s<a;s++)i[s]=arguments[s+2];u.children=i}return{$$typeof:t,type:r.type,key:f,ref:l,props:u,_owner:c}},createFactory:function(e){var r=C.bind(null,e);return r.type=e,r},isValidElement:R,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:$,IsSomeRendererActing:{current:!1},assign:e}},B={default:V},N=B&&V||B;module.exports=N.default||N;
},{"object-assign":"J4Nk"}],"n8MK":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"s8kz":[function(require,module,exports) {
"use strict";function e(e,r){if(console.log("code reaches here",e,r),e&&r){console.log("month and year received",e,r);for(var o=new Date(r,e,1),n=[],a=0;a<31;a++)n.push(new Date(o.getTime()+24*a*3600*1e3));return console.log("MOnth unformatted",n),t(n,o)}}function t(e,t){for(var o=[],n=0;n<6;n++)o.push(["NA","NA","NA","NA","NA","NA","NA"]);for(var a=0,g=0;g<e.length;g++){var i=e[g];if(o[a]&&"NA"==o[a][i.getDay()]){if(r(i,t))break;o[a][i.getDay()]=i,6==i.getDay()&&(a+=1)}else{if(r(i,t))break;o[a][i.getDay()]=i,a+=1}}return o}function r(e,t){return e.toDateString()===new Date(t.getFullYear(),t.getMonth()+1,1).toDateString()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDates=e;
},{}],"zD2A":[function(require,module,exports) {

},{}],"H7Ir":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("@babel/runtime/helpers/slicedToArray")),t=n(require("react")),a=require("./dateformatter");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var u=n?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}return a.default=e,t&&t.set(e,a),a}function l(e){return e&&e.__esModule?e:{default:e}}require("./datepicker.css");var u=function(r){var n=new Date,l=(0,t.useState)((0,a.getDates)(n.getMonth(),n.getFullYear())),u=(0,e.default)(l,2),c=u[0],o=u[1],i=(0,t.useState)(n.getDate()),f=(0,e.default)(i,2),d=f[0],s=f[1],m=(0,t.useState)(n.getMonth()),p=(0,e.default)(m,2),g=p[0],v=p[1],y=(0,t.useState)(n.getFullYear()),h=(0,e.default)(y,2),k=h[0],b=h[1];(0,t.useEffect)(function(){console.log("Call to get dates"),o((0,a.getDates)(g,k))},[g,k]);var D=(0,t.useCallback)(function(t){var a=t.target.id.split("-"),r=(0,e.default)(a,2),n=r[0],l=r[1],u=new Date(c[n][l]);s(u.getDate())},[d]),N=(0,t.useCallback)(function(e){"right"==e.target.id?g>=11?(v(0),b(k+1)):v(g+1):g<=0?(v(11),b(k-1)):v(g-1),s("")},[g]);return t.default.createElement("div",{className:"month--container"},t.default.createElement("div",{className:"month--name"},t.default.createElement("i",{className:"fa fa fa-angle-left icon icon--left",onClick:N,id:"left"}),"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][g]," ").concat(k),t.default.createElement("i",{className:"fa fa fa-angle-right icon icon--right",onClick:N,id:"right"})),t.default.createElement("div",{className:"week--container"},["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(function(e){return t.default.createElement("div",{key:e,className:"day--of--month"},e)})),c.map(function(e,a){return t.default.createElement("div",{className:"week--container",key:a},e.map(function(e,r){var n=new Date(e).getDate()==d?"day--of--month active--date":"day--of--month";return n="NA"==e?"dayStyle no--hover":n,t.default.createElement("div",{className:n,key:r,id:"".concat(a,"-").concat(r),onClick:D},"NA"!==e?e.getDate():"")}))}))},c=u;exports.default=c;
},{"@babel/runtime/helpers/slicedToArray":"HETk","react":"n8MK","./dateformatter":"s8kz","./datepicker.css":"zD2A"}]},{},["H7Ir"], null)
//# sourceMappingURL=/ReactSimpleDatepicker.js.map