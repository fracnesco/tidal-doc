(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(277)),c={title:"vowel",permalink:"wiki/vowel/",layout:"wiki",tags:["Control Functions"]},i={unversionedId:"reference/control-functions/vowel",id:"reference/control-functions/vowel",isDocsHomePage:!1,title:"vowel",description:"Type:",source:"@site/docs/reference/control-functions/vowel.md",slug:"/reference/control-functions/vowel",permalink:"/docs/reference/control-functions/vowel",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/control-functions/vowel.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},l=[],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"vowel :: Pattern String -> ControlPattern\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"vowel")," turns a string pattern into a control pattern that creates a\nformant filter to produce vowel sounds on samples."),Object(a.b)("p",null,"Use values ",Object(a.b)("inlineCode",{parentName:"p"},"a"),", ",Object(a.b)("inlineCode",{parentName:"p"},"e"),", ",Object(a.b)("inlineCode",{parentName:"p"},"i"),", ",Object(a.b)("inlineCode",{parentName:"p"},"o"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"u")," to add the effect. The rest ",Object(a.b)("inlineCode",{parentName:"p"},"~"),"\ncharacter creates no effect:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'d1 $ s "jvbass*4" # vowel "[a e ~ i o u]/8"\n')))}u.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,d=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);