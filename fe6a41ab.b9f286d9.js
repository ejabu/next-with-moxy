(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(6),o=(n(0),n(116)),r={id:"internationalization",title:"Internationalization",sidebar_label:"Internationalization"},l=[{value:"Adding a new locale",id:"adding-a-new-locale",children:[]},{value:"Adding a new policy",id:"adding-a-new-policy",children:[]}],c={id:"what-is-included/internationalization",title:"Internationalization",description:"All of our projects have I18N support built-in, even if there's no need to initially have more than one locale. By having I18N support from the very beggining, the project itself is built with that in mind, making it very easy to add new locales in the future without having to refactor a good surface of your app.",source:"@site/docs/what-is-included/internationalization.md",permalink:"/docs/what-is-included/internationalization",sidebar_label:"Internationalization",sidebar:"docs",previous:{title:"CSS Modules with PostCSS",permalink:"/docs/what-is-included/css-modules"},next:{title:"Testing with Jest & RTL",permalink:"/docs/what-is-included/testing-with-jest-rtl"}},s={rightToc:l,metadata:c},d="wrapper";function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All of our projects have I18N support built-in, even if there's no need to initially have more than one locale. By having I18N support from the very beggining, the project itself is built with that in mind, making it very easy to add new locales in the future without having to refactor a good surface of your app."),Object(o.b)("p",null,"We have choosen ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/formatjs/react-intl/"}),Object(o.b)("inlineCode",{parentName:"a"},"react-intl"))," for internalization and localization because:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It has a large community and is being actively maintained."),Object(o.b)("li",{parentName:"ul"},"Built on the standard ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}),"Intl")," API."),Object(o.b)("li",{parentName:"ul"},"It can localize strings, numbers, dates and relative dates."),Object(o.b)("li",{parentName:"ul"},"Runs in the browser and Node.js.")),Object(o.b)("p",null,"The integration of ",Object(o.b)("inlineCode",{parentName:"p"},"react-intl")," into Next.js is made with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-intl"}),"@moxy/next-intl"),"."),Object(o.b)("h2",{id:"adding-a-new-locale"},"Adding a new locale"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add the locale to the ",Object(o.b)("inlineCode",{parentName:"li"},"intl/index.js")," file, following the default ",Object(o.b)("inlineCode",{parentName:"li"},"en-US")," locale."),Object(o.b)("li",{parentName:"ol"},"Add the messages file to ",Object(o.b)("inlineCode",{parentName:"li"},"intl/messages/<locale>.json"),".")),Object(o.b)("h2",{id:"adding-a-new-policy"},"Adding a new policy"),Object(o.b)("p",null,"Policies control which locale is active at a given point, amongst other things."),Object(o.b)("p",null,"You may want to create custom policies for certain use-cases. One common use-case is to have a policy that matches against the locale saved in the account preferences of authenticated users."),Object(o.b)("p",null,"Please check the ",Object(o.b)("inlineCode",{parentName:"p"},"next-intl")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-intl#custom-policies"}),"documentation")," to know more."))}u.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a),o=i.a.createContext({}),r=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=r(n),u=a,p=d[l+"."+u]||d[u]||s[u]||o;return n?i.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):i.a.createElement(p,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);