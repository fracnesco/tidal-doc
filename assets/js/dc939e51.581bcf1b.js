(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{257:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),l=(r(0),r(277)),o={title:"Haskell",id:"haskell"},i={unversionedId:"innards/haskell",id:"innards/haskell",isDocsHomePage:!1,title:"Haskell",description:"haskell",source:"@site/docs/innards/haskell.md",slug:"/innards/haskell",permalink:"/docs/innards/haskell",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/innards/haskell.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621681058,sidebar:"docs",previous:{title:"Workshop (0.9.10)",permalink:"/docs/patternlib/tutorials/workshop"},next:{title:"The meaning of $\xa0",permalink:"/docs/innards/meaning_of_dollar"}},c=[{value:"General resources",id:"general-resources",children:[]},{value:"Tidal-related resources",id:"tidal-related-resources",children:[]}],s={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("img",{alt:"haskell",src:r(341).default})),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Tidal Cycles")," is a domain-specific language made with the ",Object(l.b)("strong",{parentName:"p"},"Haskell")," programming language. Here's a place to collect recommended ",Object(l.b)("strong",{parentName:"p"},"Haskell")," resources."),Object(l.b)("h2",{id:"general-resources"},"General resources"),Object(l.b)("p",null,"Note that a lot of ",Object(l.b)("strong",{parentName:"p"},"Haskell")," tutorials focus on lists, which are important to learn, but aren't used very often in Tidal."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/soupi/haskell-study-plan/blob/master/README.org"},"Haskell study plan")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://learnxinyminutes.com/docs/haskell/"},"Learn Haskell in Y minutes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://learnyouahaskell.com/"},"Learn you a Haskell for great good")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://euterpea.com/haskell-school-of-music/"},"Haskell school of expression")," book (",Object(l.b)("a",{parentName:"li",href:"http://haskell.cs.yale.edu/wp-content/uploads/2015/03/HSoM.pdf"},".pdf of earlier version"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html"},"Functors, applicatives and monads in pictures")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://haskellbook.com/"},"Haskell programming from first principles")," - an in-depth book for beginners"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.cs.nott.ac.uk/~pszgmh/pih.html"},"Programming in Haskell")," - another nice book, by Graham Hutton"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.haskell.org/How_to_read_Haskell"},"How to read Haskell")," - A primer for learning how to work out yourself 'what does this function do?'"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://haskellbook.com/"},"Haskell programming from first principles")," - by Christopher Allen and Julie Moronuki")),Object(l.b)("h2",{id:"tidal-related-resources"},"Tidal-related resources"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kGbelVBCWDk&list=PLyEzdf4cdMMHGqVnAzLV8eDXn6Ajj46JA"},"NIL Haskell school")," - video lectures by David Ogborn (not tidal-specific but by David who among other things works on Tidal and related projects)"))}p.isMDXComponent=!0},277:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||l;return r?n.a.createElement(m,i(i({ref:t},s),{},{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},341:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/haskellicon-67a713eff684d0ef93428cc27cfb5981.png"}}]);