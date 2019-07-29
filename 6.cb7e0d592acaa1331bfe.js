(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./modules/quotes/index.jsx":function(e,t,r){"use strict";r.r(t);var s=r("../node_modules/react/index.js"),n=r.n(s),o=r("../node_modules/redux-dynamic-modules/lib/index.js"),a=r("../node_modules/react-redux/es/index.js"),_=r("./components/panel/index.jsx"),i=r("./components/table/index.jsx"),c=[{key:"symbol",title:"Symbol",className:"align-left"},{key:"time",title:"Time",className:"align-left",render:function(e){return new Date(e).toLocaleString()}},{key:"price",title:"Price",className:"align-right"},{key:"size",title:"Size",className:"align-right"}],u=function(e){var t=e.data;return n.a.createElement(_.a,null,n.a.createElement("div",{className:"quotes"},n.a.createElement(i.a,{columns:c,data:t,rowKey:"symbol"})))},d=function(e){return{data:e.quotes.data}},l=Object(a.connect)(d)(u),m=l,E=("undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"COLUMNS","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\view\\index.jsx"),__REACT_HOT_LOADER__.register(u,"Quotes","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\view\\index.jsx"),__REACT_HOT_LOADER__.register(d,"mapState","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\view\\index.jsx"),__REACT_HOT_LOADER__.register(l,"default","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\view\\index.jsx")),r("./constants/symbols.js")),O={data:[],error:null},T=("undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(O,"initialState","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\selectors.js"),"START_QUOTES_POLLING"),R="STOP_QUOTES_POLLING",g=function(e){return{type:T,payload:e}},p=function(){return{type:R}},j=function(e){return{type:"REQUEST_QUOTES_SUCCESS",payload:e}},A=function(e){return{type:"REQUEST_QUOTES_ERROR",payload:e}};"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(T,"START_QUOTES_POLLING","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\actions.js"),__REACT_HOT_LOADER__.register(R,"STOP_QUOTES_POLLING","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\actions.js"),__REACT_HOT_LOADER__.register("REQUEST_QUOTES_SUCCESS","REQUEST_QUOTES_SUCCESS","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\actions.js"),__REACT_HOT_LOADER__.register("REQUEST_QUOTES_ERROR","REQUEST_QUOTES_ERROR","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\actions.js"),__REACT_HOT_LOADER__.register(g,"startQuotesPolling","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\actions.js"),__REACT_HOT_LOADER__.register(p,"stopQuotesPolling","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\actions.js"),__REACT_HOT_LOADER__.register(j,"requestQuotesSuccess","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\actions.js"),__REACT_HOT_LOADER__.register(A,"requestQuotesError","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\actions.js"));function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){D(e,t,r[t])})}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,r=t.type,s=t.payload,n=void 0===s?{}:s;switch(r){case"REQUEST_QUOTES_SUCCESS":return f({},e,{error:null,data:n});case"REQUEST_QUOTES_ERROR":return f({},e,{error:n});default:return e}},y=S,L=("undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(S,"default","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\reducer.js"),r("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js")),x=regeneratorRuntime.mark(Q),C=regeneratorRuntime.mark(U),b=regeneratorRuntime.mark(w),q=1e3;function H(e){return new Promise(function(t){setTimeout(function(){return t(!0)},e)})}function Q(e){var t,r,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(L.b)("http");case 2:t=n.sent;case 3:return n.prev=4,n.next=7,Object(L.a)(t.get,"tops/last?symbols=".concat(e.join()));case 7:return r=n.sent,s=r.data,n.next=11,Object(L.c)(j(s));case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(4),n.next=17,Object(L.c)(A(n.t0));case 17:return n.next=19,Object(L.a)(H,q);case 19:n.next=3;break;case 21:case"end":return n.stop()}},x,null,[[4,13]])}function U(e){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(L.d)([Object(L.a)(Q,t),Object(L.e)(R)]);case 3:case"end":return r.stop()}},C)}function w(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.f)(T,U);case 2:case"end":return e.stop()}},b)}"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(q,"TIMEOUT","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\saga.js"),__REACT_HOT_LOADER__.register(H,"delay","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\saga.js"),__REACT_HOT_LOADER__.register(Q,"pollSagaWorker","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\saga.js"),__REACT_HOT_LOADER__.register(U,"pollSagaWatcher","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\saga.js"),__REACT_HOT_LOADER__.register(w,"rootSaga","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\saga.js"));function v(){return{id:"quotes",reducerMap:{quotes:y},sagas:[w],initialActions:[g(E.a)],finalActions:[]}}"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(v,"getQuotesModule","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\store\\index.js");function h(e){return s.createElement(o.DynamicModuleLoader,{modules:[v()]},s.createElement(m,e))}r.d(t,"default",function(){return h});"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(h,"Dynamic","D:\\projects\\trading-terminal-demo\\src\\modules\\quotes\\index.jsx")}}]);