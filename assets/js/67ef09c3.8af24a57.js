(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(277)),o={title:"Adding Global Effects",id:"adding_global_effects"},l={unversionedId:"configuration/adding_global_effects",id:"configuration/adding_global_effects",isDocsHomePage:!1,title:"Adding Global Effects",description:"This help file is based on a file found in the SuperDirt GitHub repository. Report to the original version to get more information or add your improved workflow to this page to help other users.",source:"@site/docs/configuration/adding_global_effects.md",slug:"/configuration/adding_global_effects",permalink:"/docs/configuration/adding_global_effects",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/adding_global_effects.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621773497,sidebar:"docs",previous:{title:"Adding Effects",permalink:"/docs/configuration/adding_effects"},next:{title:"Adding Synthesizers",permalink:"/docs/configuration/adding_synthesizers"}},c=[{value:"Low-pass Filter",id:"low-pass-filter",children:[{value:"Building a SynthDef",id:"building-a-synthdef",children:[]},{value:"Adding on the orbits",id:"adding-on-the-orbits",children:[]},{value:"Tidal Side",id:"tidal-side",children:[]}]}],s={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This help file is based on a file found in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/blob/develop/hacks/adding-effects.scd"},"SuperDirt GitHub")," repository. Report to the original version to get more information or add your improved workflow to this page to help other users."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Make sure you've started ",Object(i.b)("strong",{parentName:"p"},"SuperCollider")," and that ",Object(i.b)("strong",{parentName:"p"},"SuperDirt")," is currently running. To start it, you can type ",Object(i.b)("inlineCode",{parentName:"p"},"SuperDirt.start")," in the interactive text editor."))),Object(i.b)("p",null,"We want to add a new global effect on each ",Object(i.b)("inlineCode",{parentName:"p"},"orbit"),'. A global effect is definitely not the same thing as an "effect". Global effects will always be there on the signal chain, waiting for you to tweak their parameters. Effects, on the contrary, can be used and called specifically for a pattern only. They are instanciated on demand.'),Object(i.b)("p",null,"We can take a look at all the global effects declared on each orbit using this command in ",Object(i.b)("strong",{parentName:"p"},"SuperCollider"),": "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"// these are the global effects on each orbit\n~dirt.orbits.do { |x| x.globalEffects.postln }\n")),Object(i.b)("h2",{id:"low-pass-filter"},"Low-pass Filter"),Object(i.b)("p",null,"We are going to add a global low-pass filter on every ",Object(i.b)("inlineCode",{parentName:"p"},"orbit"),". First we need to generate a ",Object(i.b)("inlineCode",{parentName:"p"},"SynthDef")," for it:"),Object(i.b)("h3",{id:"building-a-synthdef"},"Building a SynthDef"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'(\nvar numChannels = ~dirt.numChannels;\n(1..SuperDirt.maxSampleNumChannels).do { |numChannels|\n    SynthDef("dirt_global_lpf" ++ numChannels, { |dryBus, effectBus, gate = 1, cutoffFreq = 440|\n        var signal = In.ar(dryBus, numChannels);\n\n        var rq;\n        signal = signal.asArray.collect { |sig|\n            rq = 1/LFNoise2.kr(0.1).exprange(10, 20);\n            RLPF.ar(sig, cutoffFreq, rq).tanh;\n        };\n        signal = signal * EnvGen.kr(Env.asr, gate, doneAction:2);\n        DirtPause.ar(signal.sum, graceTime:4);\n\n        Out.ar(effectBus, signal)\n    }, [\\ir, \\ir]).add;\n};\n)\n')),Object(i.b)("h3",{id:"adding-on-the-orbits"},"Adding on the orbits"),Object(i.b)("p",null,"We need to add this ",Object(i.b)("inlineCode",{parentName:"p"},"SynthDef")," on each ",Object(i.b)("strong",{parentName:"p"},"SuperDirt")," orbit:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},'(\n~dirt.orbits.do { |x|\n    x.globalEffects = x.globalEffects\n        .addFirst(GlobalDirtEffect(\\dirt_global_lpf, [\\cutoffFreq]))\n\n    x.initNodeTree;\n};\n)\n\n~dirt.orbits.do { |x| x.globalEffects.postln; " ----------".postln; }\n')),Object(i.b)("h3",{id:"tidal-side"},"Tidal Side"),Object(i.b)("p",null,"Add the following line to your ",Object(i.b)("strong",{parentName:"p"},"Tidal")," Boot file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},'let cutoffFreq = pF "cutoffFreq"\n')),Object(i.b)("p",null,"You can now have fun playing with your new effect:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},'cps (40/120)\nd1 $ sound "[sn [sn sn]][sn [sn sn*3]][sn [sn*5 sn]][bd bd]" # cutoffFreq "220 880"\n')))}d.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,u=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);