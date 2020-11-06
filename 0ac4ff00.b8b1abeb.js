(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a(1),c=a(6),o=(a(0),a(170)),n={title:"Recoil 0.1.1"},i={permalink:"/blog/2020/10/30/0.1.1-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-10-30-0.1.1-released.md",source:"@site/blog/2020-10-30-0.1.1-released.md",description:"Welcome to Recoil version 0.1.1!  This release has performance improvements and introduces several *experimental* features such as support for React Native, working with Snapshots outside of React, and atom effects for managing side-effects of atoms such as logging, synchronization with external stores, persistence, etc.",date:"2020-10-30T00:00:00.000Z",tags:[],title:"Recoil 0.1.1",readingTime:2.14,truncated:!1,nextItem:{title:"Recoil 0.0.11",permalink:"/blog/2020/09/15/0.0.11-released"}},b=[{value:"Performance",id:"performance",children:[]},{value:"React Native (<em>Experimental</em>)",id:"react-native-experimental",children:[]},{value:"Atom Effects (<em>Experimental</em>)",id:"atom-effects-experimental",children:[]},{value:"Snapshots for Testing (<em>Experimental</em>)",id:"snapshots-for-testing-experimental",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Future Work",id:"future-work",children:[]}],l={rightToc:b};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Welcome to Recoil version 0.1.1!  This release has performance improvements and introduces several ",Object(o.b)("em",{parentName:"p"},"experimental")," features such as support for React Native, working with Snapshots outside of React, and atom effects for managing side-effects of atoms such as logging, synchronization with external stores, persistence, etc."),Object(o.b)("p",null,"Also, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/introduction/installation#nightly-builds"}),"nightly builds")," are now available via the ",Object(o.b)("inlineCode",{parentName:"p"},"nightly")," branch."),Object(o.b)("h2",{id:"performance"},"Performance"),Object(o.b)("p",null,"Several changes to improve Recoil's performance:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Updates performed during ",Object(o.b)("inlineCode",{parentName:"li"},"useRecoilCallback()")," are now batched, which avoids copying data structures or performing updates for intermediate states.  This allowed setting 5,000 atoms in a loop to go from 10s -> 25ms with some of our stress tests. (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/davidmccabe"}),"@davidmccabe"),")"),Object(o.b)("li",{parentName:"ul"},"Recoil also now avoids looking up selector values in cache if the selector's dependencies have not changed.  This improved some applications with complex data-flow graphs by 30-40x. (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/davidmccabe"}),"@davidmccabe"),")")),Object(o.b)("h2",{id:"react-native-experimental"},"React Native (",Object(o.b)("em",{parentName:"h2"},"Experimental"),")"),Object(o.b)("p",null,"Recoil should now work with the React Native environment.  However, similar to server side rendering, it is not officially supported. (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/114"}),"#114")," - ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jacques-blom"}),"@jacques-blom"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mondaychen"}),"@mondaychen"),")"),Object(o.b)("h2",{id:"atom-effects-experimental"},"Atom Effects (",Object(o.b)("em",{parentName:"h2"},"Experimental"),")"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/atom-effects"}),"Effects for atoms")," simplifies managing side-effect policies for atoms on a per-atom basis as part of the ",Object(o.b)("inlineCode",{parentName:"p"},"atom()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily()")," definition.  Effects can be used for interesting applications such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/atom-effects#logging-example"}),"logging")," and state synchronization or persistence with external storage such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/atom-effects#state-synchronization-example"}),"remote databases"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/atom-effects#local-storage-persistence"}),"local storage"),", browser URL history, etc.  For example, you could use an atom as a local copy of some user state and provide an effect to subscribe to changes on a server to update the local copy and for local changes to write-through and update the server. (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/680"}),"#680"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/380"}),"#380"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/381"}),"#381"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/384"}),"#384"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/385"}),"#385"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/448"}),"#448"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/449"}),"#449"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/412"}),"#412"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/591"}),"#591"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/634"}),"#634"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/682"}),"#682")," ","\u2014"," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/drarmstr"}),"@drarmstr"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/csantos4242"}),"@csantos4242"),")"),Object(o.b)("h2",{id:"snapshots-for-testing-experimental"},"Snapshots for Testing (",Object(o.b)("em",{parentName:"h2"},"Experimental"),")"),Object(o.b)("p",null,"Snapshots can now be ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/core/Snapshot#building-a-snapshot"}),"constructed outside of a React context"),".  This can be useful for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/testing"}),"testing")," or evaluating selectors outside of a React context. (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Recoil/pull/649"}),"#649")," ","\u2014"," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/drarmstr"}),"@drarmstr"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/habond"}),"@habond"),")"),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This update has various bug fixes for testing and infrastructure. (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/555"}),"#555"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/587"}),"#587"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/588"}),"#588"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/590"}),"#590"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/635"}),"#635"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/631"}),"#631"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/683"}),"#683"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/684"}),"#684"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/686"}),"#686")," ","\u2014"," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aaronabramov"}),"@aaronabramov"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mondaychen"}),"@mondaychen"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/drarmstr"}),"@drarmstr"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mallchel"}),"@mallchel"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/davidmccabe"}),"@davidmccabe"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/csantos4242"}),"@csantos4242"),")"),Object(o.b)("li",{parentName:"ul"},"Do not freeze objects which should not be frozen. (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/597"}),"#597"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/633"}),"#633"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/672"}),"#672")," ","\u2014"," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/RinGoku"}),"@RinGoku"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/a-sane"}),"@a-sane"),")"),Object(o.b)("li",{parentName:"ul"},"TypeScript typing for ",Object(o.b)("inlineCode",{parentName:"li"},"Snapshot"),". (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/687"}),"#687")," ","\u2014"," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kevinfrei"}),"@kevinfrei"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/drarmstr"}),"@drarmstr"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/habond"}),"@habond"),")"),Object(o.b)("li",{parentName:"ul"},"Additional testing for ",Object(o.b)("inlineCode",{parentName:"li"},"waitForAll()")," concurrency. (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil/pull/681"}),"#681")," ","\u2014"," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/drarmstr"}),"@drarmstr"),")")),Object(o.b)("h2",{id:"future-work"},"Future Work"),Object(o.b)("p",null,"In a future release, Recoil will automatically free the memory used by atoms and selectors that are no longer used, and will perform better with larger numbers of atoms. (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/davidmccabe"}),"@davidmccabe"),")"),Object(o.b)("p",null,"Releasing our prototype Chrome developer tools. (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/maxijb"}),"@maxijb"),")"),Object(o.b)("p",null,"Libraries of effects for common state persistence, such as browser local storage or URL history. (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/bezi"}),"@bezi"),")"),Object(o.b)("p",null,"Thanks for your continued interest in Recoil!"))}p.isMDXComponent=!0},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),c=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,n=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(a),h=r,u=s["".concat(n,".").concat(h)]||s[h]||m[h]||o;return a?c.a.createElement(u,i({ref:t},l,{components:a})):c.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=h;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var l=2;l<o;l++)n[l]=a[l];return c.a.createElement.apply(null,n)}return c.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);