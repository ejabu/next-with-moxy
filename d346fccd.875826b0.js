(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(1),i=t(6),r=(t(0),t(139)),l={id:"environment-variables",title:"Environment Variables",sidebar_label:"Environment Variables"},o=[{value:"Build-time environment variables",id:"build-time-environment-variables",children:[{value:"Adding a new environment variable",id:"adding-a-new-environment-variable",children:[]}]},{value:"Runtime configuration",id:"runtime-configuration",children:[{value:"Adding a new runtime config",id:"adding-a-new-runtime-config",children:[]}]}],b={rightToc:o},c="wrapper";function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This boilerplate is setup to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/dotenv"}),Object(r.b)("inlineCode",{parentName:"a"},"dotenv"))," to facilitate loading environment variables from the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file. We already provide an ",Object(r.b)("inlineCode",{parentName:"p"},".env.sample")," file, which you can clone to a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file so you have a starting point with all the environment variables suitable for development."),Object(r.b)("p",null,"In Next.js, you may inject configuration through environment variables inlined at build-time or through runtime configuration."),Object(r.b)("p",null,"The following environment variables already come with the boilerplate:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Identifier"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GA_TRACKING_ID"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Build-time"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Google Analytics Tracking ID that is used to track page views"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(r.b)("h2",{id:"build-time-environment-variables"},"Build-time environment variables"),Object(r.b)("p",null,"In general, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#build-time-configuration"}),"build-time configuration")," via environment variables is preferable as they give us many benefits, such as serverless compatibility and dead-code elimination."),Object(r.b)("p",null,"You can access these variables from ",Object(r.b)("inlineCode",{parentName:"p"},"process.env"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"if (process.env.FEATURE_A) {\n    // Do something..\n}\n")),Object(r.b)("h3",{id:"adding-a-new-environment-variable"},"Adding a new environment variable"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Define the environment variable in ",Object(r.b)("inlineCode",{parentName:"p"},".env")," and ",Object(r.b)("inlineCode",{parentName:"p"},".env.sample"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# ...\n\n# Enables feature "A"\nFEATURE_A=1\n')),Object(r.b)("p",{parentName:"li"},"You should provide a good default value for development in the ",Object(r.b)("inlineCode",{parentName:"p"},".env.sample"),", if applicable.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add it to the ",Object(r.b)("inlineCode",{parentName:"p"},"env")," key at the very end of the ",Object(r.b)("inlineCode",{parentName:"p"},"next.config.js")," file:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n    env: {\n        // ...\n        FEATURE_A: process.env.FEATURE_A\n    },\n}\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add it to the Dockerfile"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile"}),"# Define build args\n# ...\nARG FEATURE_A\n\n# Define environment variables\n# ...\nENV FEATURE_A ${FEATURE_A}\n")))),Object(r.b)("h2",{id:"runtime-configuration"},"Runtime configuration"),Object(r.b)("p",null,"While build-time environments are prefereable, there are some scenarios where they might pose a problem.\nOne scenario is when it's impossible or unfesable to having to rebuild the project when configuration changes. If that's the case, you may use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org/docs#runtime-configuration"}),"runtime configuration")," instead."),Object(r.b)("p",null,"\u26a0\ufe0f Be aware that runtime configuration will make your project incompatible with serverless deployments and static optimization."),Object(r.b)("p",null,"You can access runtime configuration by using ",Object(r.b)("inlineCode",{parentName:"p"},"next/config"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { getConfig } from 'next/config';\n\nconst { serverRuntimeConfig, publicRuntimeConfig } = getConfig()\n\nconsole.log(serverRuntimeConfig.SOME_SERVICE_PRIVATE_KEY) // Will only be available on the server side\nconsole.log(publicRuntimeConfig.SOME_SERVICE_PUBLIC_KEY) // Will be available on both server and client\n")),Object(r.b)("h3",{id:"adding-a-new-runtime-config"},"Adding a new runtime config"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Define the environment variable in ",Object(r.b)("inlineCode",{parentName:"li"},".env")," and ",Object(r.b)("inlineCode",{parentName:"li"},".env.sample"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# ...\n\n# Some necessary keys to interact with a third-party service\nSOME_SERVICE_PUBLIC_KEY=\nSOME_SERVICE_PRIVATE_KEY=\n")),Object(r.b)("p",null,"You should provide a good default value for development in the ",Object(r.b)("inlineCode",{parentName:"p"},".env.sample"),", if applicable."),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Add it to the ",Object(r.b)("inlineCode",{parentName:"li"},"env")," key at the very end of the ",Object(r.b)("inlineCode",{parentName:"li"},"next.config.js")," file:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n    publicRuntimeConfig: {\n        // ...\n        SOME_SERVICE_PUBLIC_KEY: process.env.SOME_SERVICE_PUBLIC_KEY\n    },\n    serverRuntimeConfig: {\n        // ...\n        SOME_SERVICE_PRIVATE_KEY: process.env.SOME_SERVICE_PRIVATE_KEY\n    },\n}\n")))}p.isMDXComponent=!0},139:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a),r=i.a.createContext({}),l=function(e){var n=i.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=l(e.components);return i.a.createElement(r.Provider,{value:n},e.children)};var b="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,s=p[o+"."+m]||p[m]||c[m]||r;return t?i.a.createElement(s,Object.assign({},{ref:n},b,{components:t})):i.a.createElement(s,Object.assign({},{ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[b]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=t[m];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);