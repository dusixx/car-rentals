"use strict";(self.webpackChunkcar_rentals=self.webpackChunkcar_rentals||[]).push([[980],{7395:function(n,e,t){t.r(e);var r=t(9655),a=t(4169),o=t(2801),i=t(6694),c=t(3390),s=t(184);e.default=function(){var n=(0,i.k)({favorite:!0}),e=n.cars,t=n.setCars,l=n.setPage,u=n.isLoading,d=n.noMoreItems,p=n.error,f=n.setError;return p?(r.Am.error(p.message),f(null)):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.V1,{children:"Favorites"}),!u&&!e.length&&(0,s.jsx)(o.or,{children:"No items found"}),(0,s.jsx)(a.h,{items:e,onAddToFavsClick:function(n){return t((function(e){return e.filter((function(e){return e.id!==n}))}))}}),!d&&(0,s.jsx)(c.C,{onClick:function(){return l((function(n){return n+1}))},isLoading:u})]})}},6789:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(2791),a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function o(n){var e=function(n){if("number"===typeof n)return{value:n,unit:"px"};var e,t=(n.match(/^[0-9.]*/)||"").toString();e=t.includes(".")?parseFloat(t):parseInt(t,10);var r=(n.match(/[^0-9]*$/)||"").toString();return a[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}(n);return"".concat(e.value).concat(e.unit)}var i=function(){return i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},i.apply(this,arguments)},c=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t},s=function(n,e,t){var r="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return o&&o.insertRule(i,0),r}("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");var l=function(n){var e=n.loading,t=void 0===e||e,a=n.color,l=void 0===a?"#000000":a,u=n.speedMultiplier,d=void 0===u?1:u,p=n.cssOverride,f=void 0===p?{}:p,v=n.size,m=void 0===v?15:v,h=n.margin,y=void 0===h?2:h,g=c(n,["loading","color","speedMultiplier","cssOverride","size","margin"]),b=i({display:"inherit"},f),O=function(n){return{display:"inline-block",backgroundColor:l,width:o(m),height:o(m),margin:o(y),borderRadius:"100%",animation:"".concat(s," ").concat(.7/d,"s ").concat(n%2?"0s":"".concat(.35/d,"s")," infinite linear"),animationFillMode:"both"}};return t?r.createElement("span",i({style:b},g),r.createElement("span",{style:O(1)}),r.createElement("span",{style:O(2)}),r.createElement("span",{style:O(3)})):null}}}]);
//# sourceMappingURL=980.d40983ed.chunk.js.map