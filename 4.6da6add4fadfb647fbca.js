(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./components/panel/index.jsx":function(e,t,n){"use strict";var r=n("../node_modules/react/index.js"),s=n.n(r),o=n("../node_modules/react-custom-scrollbars/lib/index.js");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=function(e){var t=e.style,n=_(e,["style"]);return s.a.createElement("div",a({},n,{style:i({},t,{backgroundColor:"rgba(255, 255, 255, 0.2)"})}))},d=function(e){var t=e.children;return s.a.createElement(o.Scrollbars,{style:{height:"100%"},renderThumbHorizontal:c,renderThumbVertical:c},t)},u=d;t.a=u;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"renderThumb","e:\\Alex\\Projects\\trading-terminal-demo\\src\\components\\panel\\index.jsx"),__REACT_HOT_LOADER__.register(d,"Panel","e:\\Alex\\Projects\\trading-terminal-demo\\src\\components\\panel\\index.jsx"),__REACT_HOT_LOADER__.register(u,"default","e:\\Alex\\Projects\\trading-terminal-demo\\src\\components\\panel\\index.jsx"))},"./modules/news/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("../node_modules/react/index.js"),s=n.n(r),o=n("../node_modules/redux-dynamic-modules/lib/index.js"),a=(n("./modules/news/view/style.scss"),n("../node_modules/react-redux/es/index.js")),i=n("./components/panel/index.jsx"),l=Object(r.memo)(function(e){var t=e.url,n=e.datetime,r=e.headline,o=e.summary;return s.a.createElement("div",{className:"news"},s.a.createElement("div",{className:"news__datetime"},new Date(n).toLocaleString()),s.a.createElement("div",{className:"news__title"},r),s.a.createElement("p",{className:"news__summary"},o," ",s.a.createElement("a",{className:"news__link",href:t,rel:"noopener noreferrer",target:"_blank"},"source")))}),_=l,c=_,d=("undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"News","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\view\\item.jsx"),__REACT_HOT_LOADER__.register(_,"default","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\view\\item.jsx")),function(e){var t=e.data;return s.a.createElement(i.a,null,s.a.createElement("ul",{className:"news-list"},t.map(function(e){return s.a.createElement("li",{key:e.url},s.a.createElement(c,e))})))}),u=function(e){return{data:e.news.data}},m=Object(a.connect)(u)(d),f=m,O=("undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"NewsList","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\view\\list.jsx"),__REACT_HOT_LOADER__.register(u,"mapState","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\view\\list.jsx"),__REACT_HOT_LOADER__.register(m,"default","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\view\\list.jsx")),{data:[]}),E=("undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(O,"initialState","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\store\\selectors.js"),{getAll:function(e){return e.get("stock/market/news/last/50")}}),A=E,g=("undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(E,"default","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\store\\api.js"),function(){return function(e,t,n){var r=n.http;return A.getAll(r).then(function(t){var n=t.data;e({type:"FETCH_NEWS_SUCCESS",payload:n})})}});"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register("FETCH_NEWS_SUCCESS","FETCH_NEWS_SUCCESS","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\store\\actions.js"),__REACT_HOT_LOADER__.register(g,"getNews","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\store\\actions.js"));function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload,s=void 0===r?{}:r;switch(n){case"FETCH_NEWS_SUCCESS":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}({},e,{data:s});default:return e}},w=j;"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(j,"default","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\store\\reducer.js");function T(){return{id:"news",reducerMap:{news:w},initialActions:[g()],finalActions:[]}}"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(T,"getNewsModule","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\store\\index.js");function y(e){return r.createElement(o.DynamicModuleLoader,{modules:[T()]},r.createElement(f,e))}n.d(t,"default",function(){return y});"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(y,"Dynamic","e:\\Alex\\Projects\\trading-terminal-demo\\src\\modules\\news\\index.jsx")},"./modules/news/view/style.scss":function(e,t,n){}}]);