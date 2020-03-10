(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),i=n(9),o=(n(0),n(163)),a={id:"everything-else",title:"And everything that comes with Next.js",sidebar_label:"And everything from Next.js"},c={id:"what-is-included/everything-else",title:"And everything that comes with Next.js",description:"## File-System Routing",source:"@site/docs/what-is-included/everything-else.md",permalink:"/docs/what-is-included/everything-else",sidebar_label:"And everything from Next.js",sidebar:"docs",previous:{title:"Node modules compiling",permalink:"/docs/what-is-included/node-modules-compiling"},next:{title:"Adding a simple REST API",permalink:"/docs/recipes/rest-api"}},l=[{value:"File-System Routing",id:"file-system-routing",children:[]},{value:"Automatic Code Splitting",id:"automatic-code-splitting",children:[]},{value:"Server Side Rendering",id:"server-side-rendering",children:[]},{value:"Static Exporting",id:"static-exporting",children:[]},{value:"And more",id:"and-more",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"file-system-routing"},"File-System Routing"),Object(o.b)("p",null,"Next.js comes with a default routing system, which will serve each file in the ",Object(o.b)("inlineCode",{parentName:"p"},"/pages")," folder with pathname corresponding to the filename. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"/pages/some_page.js")," would be server at ",Object(o.b)("inlineCode",{parentName:"p"},"website.com/some_page"),"."),Object(o.b)("h2",{id:"automatic-code-splitting"},"Automatic Code Splitting"),Object(o.b)("p",null,"Next.js will automatically split pages and common code into separate chunks based on several metrics, improving load time performance."),Object(o.b)("h2",{id:"server-side-rendering"},"Server Side Rendering"),Object(o.b)("p",null,"Next.js is built to render pages server side, and rehydrate them in the client whenever it's necessary."),Object(o.b)("p",null,"If you're looking for more information about server-side rendering and its benefits, you can read through ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/web/updates/2019/02/rendering-on-the-web"}),"this article"),", where rehydration is also covered."),Object(o.b)("h2",{id:"static-exporting"},"Static Exporting"),Object(o.b)("p",null,"Next.js guarantees that static pages also benefit from these features, as well as other things still, like dynamic imports and prefetching."),Object(o.b)("h2",{id:"and-more"},"And more"),Object(o.b)("p",null,"Check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nextjs.org/#more"}),"Next.js documentation")," for all the features available."))}d.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||u[m]||o;return n?i.a.createElement(b,c({ref:t},s,{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);