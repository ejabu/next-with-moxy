(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(1),i=r(9),o=(r(0),r(163)),a={id:"testing-with-jest-rtl",title:"Testing with Jest & RTL",sidebar_label:"Testing with Jest & RTL"},s={id:"what-is-included/testing-with-jest-rtl",title:"Testing with Jest & RTL",description:"For testing, this boilerplate is configured to use [**Jest**](https://jestjs.io/) and [**react-testing-library**](https://github.com/testing-library/react-testing-library), providing strong options for testing varied types of code.",source:"@site/docs/what-is-included/jest-rtl.md",permalink:"/docs/what-is-included/testing-with-jest-rtl",sidebar_label:"Testing with Jest & RTL",sidebar:"docs",previous:{title:"Internationalization",permalink:"/docs/what-is-included/internationalization"},next:{title:"Browser support",permalink:"/docs/what-is-included/browser-support"}},c=[{value:"RTL",id:"rtl",children:[]}],p={rightToc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For testing, this boilerplate is configured to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jestjs.io/"}),Object(o.b)("strong",{parentName:"a"},"Jest"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/testing-library/react-testing-library"}),Object(o.b)("strong",{parentName:"a"},"react-testing-library")),", providing strong options for testing varied types of code."),Object(o.b)("p",null,"You can find more details about our implementation of Jest in its configuration file, ",Object(o.b)("inlineCode",{parentName:"p"},"jest.config.js"),", which uses our own ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/moxystudio/jest-config"}),Object(o.b)("inlineCode",{parentName:"a"},"@moxy/jest-config")),"."),Object(o.b)("h2",{id:"rtl"},"RTL"),Object(o.b)("p",null,"We have historically used ",Object(o.b)("strong",{parentName:"p"},"Enzyme")," for testing, however, with the introduction of new lifecycle methods and React hooks, we noticed that ",Object(o.b)("strong",{parentName:"p"},"Enzyme")," did not keep up with their support for these new features."),Object(o.b)("p",null,"Due to the nature of ",Object(o.b)("strong",{parentName:"p"},"react-testing-library"),", we don't foresee it suffering from the same problems, and, together with moving towards a philosophy of testing with a stronger user perspective in mind, we rethought the tool we use for unit testing and have since then opted for ",Object(o.b)("strong",{parentName:"p"},"react-testing-library"),"."))}l.isMDXComponent=!0},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return r?i.a.createElement(f,s({ref:t},p,{components:r})):i.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);