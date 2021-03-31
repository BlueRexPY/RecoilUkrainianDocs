(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),i=(n(0),n(149)),a={title:"Testing"},s={unversionedId:"guides/testing",id:"guides/testing",isDocsHomePage:!1,title:"Testing",description:"Testing Recoil Selectors outside of React",source:"@site/docs/guides/testing.md",slug:"/guides/testing",permalink:"/docs/guides/testing",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/guides/testing.md",version:"current",sidebar:"docs",previous:{title:"Atom Effects",permalink:"/docs/guides/atom-effects"},next:{title:"Development Tools",permalink:"/docs/guides/dev-tools"}},c=[{value:"Testing Recoil Selectors outside of React",id:"testing-recoil-selectors-outside-of-react",children:[{value:"Example: Jest unit testing selectors",id:"example-jest-unit-testing-selectors",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"testing-recoil-selectors-outside-of-react"},"Testing Recoil Selectors outside of React"),Object(i.b)("p",null,"It can be useful to manipulate and evaluate Recoil selectors outside of a React context for testing.  This can be done by working with a Recoil ",Object(i.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},Object(i.b)("inlineCode",{parentName:"a"},"Snapshot")),".  You can build a fresh snapshot using ",Object(i.b)("inlineCode",{parentName:"p"},"snapshot_UNSTABLE()")," and then use that ",Object(i.b)("inlineCode",{parentName:"p"},"Snapshot")," to evaluate selectors for testing."),Object(i.b)("h3",{id:"example-jest-unit-testing-selectors"},"Example: Jest unit testing selectors"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const numberState = atom({key: 'Number', default: 0});\n\nconst multipliedState = selector({\n  key: 'MultipliedNumber',\n  get: ({get}) => get(numberState) * 100,\n});\n\ntest('Test multipliedState', () => {\n  const initialSnapshot = snapshot_UNSTABLE();\n  expect(initialSnapshot.getLoadable(multipliedState).valueOrThrow()).toBe(0);\n\n  const testSnapshot = snapshot_UNSTABLE(({set}) => set(numberState, 1));\n  expect(testSnapshot.getLoadable(multipliedState).valueOrThrow()).toBe(100);\n})\n")))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);