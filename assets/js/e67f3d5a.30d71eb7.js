"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={title:"Composition",id:"composition"},s=void 0,i={unversionedId:"reference/composition",id:"reference/composition",title:"Composition",description:"This page will present you all the functions that can be used to compose long form pieces with Tidal Cycles. Each function will be presented following the same model:",source:"@site/docs/reference/composition.md",sourceDirName:"reference",slug:"/reference/composition",permalink:"/docs/reference/composition",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/composition.md",tags:[],version:"current",lastUpdatedAt:1680406573,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"Composition",id:"composition"},sidebar:"reference",previous:{title:"Randomness",permalink:"/docs/reference/randomness"},next:{title:"mi-UGens",permalink:"/docs/reference/mi-ugens"}},l={},p=[{value:"ur",id:"ur",level:2},{value:"seqP",id:"seqp",level:2},{value:"seqPLoop",id:"seqploop",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page will present you all the functions that can be used to compose long form pieces with ",(0,r.kt)("strong",{parentName:"p"},"Tidal Cycles"),". Each function will be presented following the same model:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,r.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,r.kt)("h2",{id:"ur"},"ur"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: ur :: Time -> Pattern String -> [(String, Pattern a)] -> [(String, Pattern a -> Pattern a)] -> Pattern a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ur")," function is designed for longer form composition, by allowing you to create 'patterns of patterns' in a repeating loop. It takes three parameters -- how long the loop will take, a pattern giving the structure of the composition, a lookup table for named patterns to feed into that structure, and a second lookup table for named transformations/fx."),(0,r.kt)("p",null,"Lets say you had three patterns (called ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),"), and that you wanted to play them four cycles each, over twelve cycles in total. Here is one way to do it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'let pats =\n      [\n        ("a", stack [n "c4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",\n                     n "[c3,g4,c4]" # s "superpiano"# gain "0.7"\n                    ]\n        ),\n        ("b", stack [n "d4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",\n                     n "[d3,a4,d4]" # s "superpiano"# gain "0.7"\n                    ]\n        ),\n        ("c", stack [n "f4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",\n                     n "[f4,c5,f4]" # s "superpiano"# gain "0.7"\n                    ]\n        )\n      ]\nin\nd1 $ ur 12 "a b c" pats []\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},'ur 12 "a b c" pats []'),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"12")," is the duration of the loop (in cycles), the ",(0,r.kt)("inlineCode",{parentName:"p"},'"a b c"')," is the structure of named patterns, and pats is the lookup table, defined above. So the ",(0,r.kt)("inlineCode",{parentName:"p"},'"a b c"')," pattern happens over the 12 cycles, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," standing in for each of the three patterns given in the lookup table. Because there are three events in this pattern, and it happens over 12 cycles. then each event is four cycles long."),(0,r.kt)("p",null,"In the above, the fourth parameter is given as an empty list, but that is where you can put another lookup table, of functions rather than patterns this time. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'let pats =\n      [\n        ("a", stack [n "c4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",\n                     n "[c3,g4,c4]" # s "superpiano"# gain "0.7"\n                    ]\n        ),\n        ("b", stack [n "d4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",\n                     n "[d3,a4,d4]" # s "superpiano"# gain "0.7"\n                    ]\n        ),\n        ("c", stack [n "f4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",\n                     n "[f4,c5,f4]" # s "superpiano"# gain "0.7"\n                    ]\n        )\n      ]\n    fx = [("reverb", (# (room 0.8 # sz 0.99 # orbit 1))),\n          ("faster", fast 2)\n         ]\nin\nd1 $ ur 12 "a b:reverb c:faster" pats fx\n')),(0,r.kt)("p",null,"In the above, ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," has the function applied that's named as reverb, while ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," is made to go faster. It's also possible to schedule multiple patterns at once, like in the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'let pats = [("drums", s "drum cp*2"),\n            ("melody", s "arpy:2 arpy:3 arpy:5"),\n            ("craziness", s "cp:4*8" # speed ( sine + 0.5))\n           ]\n    fx = [("higher", (# speed 2))]\nin\nd1 $ ur 8 "[drums, melody] [drums,craziness,melody] melody:higher" pats fx\n')),(0,r.kt)("h2",{id:"seqp"},"seqP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: seqP :: [(Time, Time, Pattern a)] -> Pattern a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"seqP")," allows you sequence patterns, with start and end times. The code below contains three separate patterns in a ",(0,r.kt)("inlineCode",{parentName:"p"},"stack"),", but each has different start times (zero cycles, four cycles, and eight cycles, respectively). In the example, all patterns stop after 12 cycles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ seqP [\n  (0, 12, sound "bd bd*2"),\n  (4, 12, sound "hh*2 [sn cp] cp future*4"),\n  (8, 12, sound (samples "arpy*8" (run 16)))\n]\n')),(0,r.kt)("p",null,"If you run the above, you probably won\u2019t hear anything. This is because cycles start ticking up as soon as you start ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),", and you have probably already gone past cycle 12."),(0,r.kt)("p",null,"You can reset the cycle clock back to zero by running ",(0,r.kt)("inlineCode",{parentName:"p"},"setcps (-1)")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"setcps 1")," (nb: at the time of writing, this doesn't yet work in version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0")," of tidal, but you can instead run ",(0,r.kt)("inlineCode",{parentName:"p"},"resetCycles"),"), or whatever tempo you want to restart at. Alternatively, you can shift time for the seqP pattern back to zero like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ qtrigger $ seqP [\n  (0, 12, sound "bd bd*2"),\n  (4, 12, sound "hh*2 [sn cp] cp future*4"),\n  (8, 12, sound (samples "arpy*8" (run 16)))\n]\n')),(0,r.kt)("h2",{id:"seqploop"},"seqPLoop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: seqPLoop :: [(Time, Time, Pattern a)] -> Pattern a\n")),(0,r.kt)("p",null,"A third option is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"seqPLoop")," instead, which will keep looping the sequence when it gets to the end:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ qtrigger $ seqPLoop [\n  (0, 12, sound "bd bd*2"),\n  (4, 12, sound "hh*2 [sn cp] cp future*4"),\n  (8, 12, sound (samples "arpy*8" (run 16)))\n]\n')),(0,r.kt)("p",null,"For building and testing out longer sequences, it may be helpful to skip cycles with ",(0,r.kt)("inlineCode",{parentName:"p"},"rotL"),"."))}u.isMDXComponent=!0}}]);