(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),o=(r(0),r(163)),i={id:"what-is-this",title:"What is this",sidebar_label:"What is this"},c={id:"welcome/what-is-this",title:"What is this",description:"This project is [MOXY's](https://moxy.studio/) boilerplate to accelerate the setup of new [**React**](https://reactjs.org/) based web applications.",source:"@site/docs/welcome/what-is-this.md",permalink:"/docs/welcome/what-is-this",sidebar_label:"What is this",sidebar:"docs",next:{title:"Instructions",permalink:"/docs/welcome/instructions"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Next.js",id:"nextjs",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This project is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://moxy.studio/"}),"MOXY's")," boilerplate to accelerate the setup of new ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/"}),Object(o.b)("strong",{parentName:"a"},"React"))," based web applications."),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"Creating your own isomorphic web application from the ground up can be very challenging and complex. You would have to bother with endless Webpack configurations, complex server rendering code and developer experience, just to name a few."),Object(o.b)("p",null,"The goal of this project is to get your new isomorphic React web application started in seconds. It offers many features and it's built on industry best practices & standards."),Object(o.b)("p",null,"To start with our stack, we introduce you ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nextjs.org"}),Object(o.b)("strong",{parentName:"a"},"Next.js")),"."),Object(o.b)("h2",{id:"nextjs"},"Next.js"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nextjs.org"}),"Next.js")," is a React framework built to provide server-side rendering."),Object(o.b)("p",null,"Server-side rendering (SSR) is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client. The client's JavaScript bundle can then take over and the SPA can operate as normal."),Object(o.b)("p",null,"This technique has many benefits, but the primary ones are better SEO as the crawlers will see the fully rendered page, and faster time-to-content as the browser doesn't need to wait for JavaScript to display the page to users."),Object(o.b)("p",null,"Next.js is an open-source project that has gained a lot of community traction and is currently our preferred option for SSR React applications."),Object(o.b)("p",null,"If you wish to learn more about Next.js, we recommend taking a look at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nextjs.org/learn/basics/getting-started"}),"their documentation"),"."))}l.isMDXComponent=!0},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(h,c({ref:t},p,{components:r})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);