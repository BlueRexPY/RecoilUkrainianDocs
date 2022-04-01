"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4891],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,y=f["".concat(l,".").concat(d)]||f[d]||s[d]||o;return r?t.createElement(y,i(i({ref:n},p),{},{components:r})):t.createElement(y,i({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6462:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"waitForAny(dependencies)",sidebar_label:"waitForAny()"},l=void 0,u={unversionedId:"api-reference/utils/waitForAny",id:"api-reference/utils/waitForAny",title:"waitForAny(dependencies)",description:"\u4e00\u4e2a\u8fd4\u56de\u4e00\u7ec4\u8868\u793a\u8bf7\u6c42\u4f9d\u8d56\u9879\u5f53\u524d\u72b6\u6001\u7684 Loadables \u7684\u5e76\u53d1 helper \u65b9\u6cd5\u3002\u5b83\u5c06\u4e00\u76f4\u7b49\u5f85\uff0c\u76f4\u5230\u81f3\u5c11\u6709\u4e00\u4e2a\u4f9d\u8d56\u9879\u53ef\u7528\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAny.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/waitForAny",permalink:"/zh-hans/docs/api-reference/utils/waitForAny",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAny.md",tags:[],version:"current",frontMatter:{title:"waitForAny(dependencies)",sidebar_label:"waitForAny()"},sidebar:"docs",previous:{title:"waitForNone()",permalink:"/zh-hans/docs/api-reference/utils/waitForNone"},next:{title:"useRecoilTransaction()",permalink:"/zh-hans/docs/api-reference/core/useRecoilTransaction"}},p=[],s={toc:p};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e00\u4e2a\u8fd4\u56de\u4e00\u7ec4\u8868\u793a\u8bf7\u6c42\u4f9d\u8d56\u9879\u5f53\u524d\u72b6\u6001\u7684 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadables"))," \u7684\u5e76\u53d1 helper \u65b9\u6cd5\u3002\u5b83\u5c06\u4e00\u76f4\u7b49\u5f85\uff0c\u76f4\u5230\u81f3\u5c11\u6709\u4e00\u4e2a\u4f9d\u8d56\u9879\u53ef\u7528\u3002"),(0,o.kt)("p",null,"\u4f9d\u8d56\u9879\u53ef\u4ee5\u4f5c\u4e3a\u5143\u7ec4\u6570\u7ec4\u63d0\u4f9b\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5bf9\u8c61\u4e2d\u7684\u547d\u540d\u4f9d\u8d56\u9879\u63d0\u4f9b\u3002"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAny(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArrayOfLoadables>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAny(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObjectOfLoadables>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitForAny()")," \u7c7b\u4f3c\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/waitForNone"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForNone()")),"\uff0c\u53ea\u662f\u5b83\u8981\u7b49\u5230\u81f3\u5c11\u6709\u4e00\u4e2a\u4f9d\u8d56\u9879\u5177\u6709\u53ef\u7528\u7684\u503c (\u6216\u9519\u8bef) \uff0c\u800c\u4e0d\u662f\u7acb\u5373\u8fd4\u56de\u3002"))}f.isMDXComponent=!0}}]);