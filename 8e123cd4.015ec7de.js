(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(163)),i={id:"node-modules-compiling",title:"Node modules compiling",sidebar_label:"Node modules compiling"},c={id:"what-is-included/node-modules-compiling",title:"Node modules compiling",description:"The boilerplate includes [`@moxy/next-compile-node-modules`](https://github.com/moxystudio/next-compile-node-modules), a Next.js plugin that ensures Babel will compile `node_modules`.",source:"@site/docs/what-is-included/node-modules-compiling.md",permalink:"/docs/what-is-included/node-modules-compiling",sidebar_label:"Node modules compiling",sidebar:"docs",previous:{title:"Webpack oneOf rules",permalink:"/docs/what-is-included/webpack-one-of-rules"},next:{title:"And everything that comes with Next.js",permalink:"/docs/what-is-included/everything-else"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The boilerplate includes ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-compile-node-modules"}),Object(a.b)("inlineCode",{parentName:"a"},"@moxy/next-compile-node-modules")),", a Next.js plugin that ensures Babel will compile ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(a.b)("p",null,"As package authors aren't aware of what context their packages will be used in, this should instead be a concern of app developers, who would use use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env"}),Object(a.b)("inlineCode",{parentName:"a"},"@babel/preset-env")),' to compile included packages to be compatible with their desired targets (e.g., "IE 11").'),Object(a.b)("p",null,"Popular boilerplate projects such as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app"}),Object(a.b)("inlineCode",{parentName:"a"},"create-react-app"))," now compile all ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),", so we have opted to implement this behavior by default."))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);