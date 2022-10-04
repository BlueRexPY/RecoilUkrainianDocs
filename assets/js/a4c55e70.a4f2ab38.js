"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1849],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9378:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"Tutorial Intro",sidebar_label:"Intro"},c=void 0,s={unversionedId:"basic-tutorial/intro",id:"basic-tutorial/intro",title:"Tutorial Intro",description:"This section assumes you have installed Recoil and React. See the Getting Started page for how to get started with Recoil and React from scratch. Components in the following sections are assumed to have a `` in the parent tree.",source:"@site/docs/basic-tutorial/intro.md",sourceDirName:"basic-tutorial",slug:"/basic-tutorial/intro",permalink:"/docs/basic-tutorial/intro",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/basic-tutorial/intro.md",tags:[],version:"current",frontMatter:{title:"Tutorial Intro",sidebar_label:"Intro"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/introduction/getting-started"},next:{title:"Atoms",permalink:"/docs/basic-tutorial/atoms"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section assumes you have installed Recoil and React. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/getting-started"},"Getting Started")," page for how to get started with Recoil and React from scratch. Components in the following sections are assumed to have a ",(0,i.kt)("inlineCode",{parentName:"p"},"<RecoilRoot />")," in the parent tree."),(0,i.kt)("p",null,"In this tutorial, we'll be building a simple todo-list application. Our app will be able to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add todo items"),(0,i.kt)("li",{parentName:"ul"},"Edit todo items"),(0,i.kt)("li",{parentName:"ul"},"Delete todo items"),(0,i.kt)("li",{parentName:"ul"},"Filter todo items"),(0,i.kt)("li",{parentName:"ul"},"Display useful stats")),(0,i.kt)("p",null,"Along the way, we'll cover atoms, selectors, atom families, and the hooks exposed by the Recoil API."),(0,i.kt)("p",null,"SideGuide has provided an interactive version of this tutorial with live code samples: ",(0,i.kt)("a",{parentName:"p",href:"https://app.sideguide.dev/recoil/tutorial/"},"https://app.sideguide.dev/recoil/tutorial/")))}d.isMDXComponent=!0}}]);