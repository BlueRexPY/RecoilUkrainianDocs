"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[9209],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},360:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"isRecoilValue(value)",sidebar_label:"isRecoilValue()"},l=void 0,u={unversionedId:"api-reference/core/isRecoilValue",id:"api-reference/core/isRecoilValue",title:"isRecoilValue(value)",description:"value\uc774 atom\uc774\ub098 selector\uc77c \uacbd\uc6b0 true\ub97c \ubc18\ud658\ud558\uace0 \uadf8\ub807\uc9c0 \uc54a\uc744 \uacbd\uc6b0 false\ub97c \ubc18\ud658\ud55c\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/isRecoilValue.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/isRecoilValue",permalink:"/ko/docs/api-reference/core/isRecoilValue",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/isRecoilValue.md",tags:[],version:"current",frontMatter:{title:"isRecoilValue(value)",sidebar_label:"isRecoilValue()"},sidebar:"docs",previous:{title:"useRecoilRefresher()",permalink:"/ko/docs/api-reference/core/useRecoilRefresher"},next:{title:"atomFamily()",permalink:"/ko/docs/api-reference/utils/atomFamily"}},s=[{value:"Example",id:"example",children:[],level:3}],p={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"value"),"\uc774 atom\uc774\ub098 selector\uc77c \uacbd\uc6b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\ub97c \ubc18\ud658\ud558\uace0 \uadf8\ub807\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\ub97c \ubc18\ud658\ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function isRecoilValue(value: mixed): boolean\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, isRecoilValue} from 'recoil';\n\nconst counter = atom({\n  key: 'myCounter',\n  default: 0,\n});\n\nconst strCounter = selector({\n  key: 'myCounterStr',\n  get: ({get}) => String(get(counter)),\n});\n\nisRecoilValue(counter); // true\nisRecoilValue(strCounter); // true\n\nisRecoilValue(5); // false\nisRecoilValue({}); // false\n")))}f.isMDXComponent=!0}}]);