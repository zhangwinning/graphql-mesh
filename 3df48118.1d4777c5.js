(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,d=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return n?r.a.createElement(d,b({ref:t},o,{components:n})):r.a.createElement(d,b({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/as-gateway-aa3fe66a9cc3c38f3afeea5554113d3d.png"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(130)),l={id:"as-gateway",title:"Mesh as Gateway",sidebar_label:"Mesh as Gateway"},b={unversionedId:"recipes/as-gateway",id:"recipes/as-gateway",isDocsHomePage:!1,title:"Mesh as Gateway",description:"You can use GraphQL Mesh as a gateway for your data sources. CLI's serve command creates a GraphQL Endpoint with GraphQL Playground.",source:"@site/docs/recipes/as-gateway.md",slug:"/recipes/as-gateway",permalink:"/docs/recipes/as-gateway",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/as-gateway.md",version:"current",sidebar_label:"Mesh as Gateway",sidebar:"sidebar",previous:{title:"Mesh as SDK",permalink:"/docs/recipes/as-sdk"},next:{title:"Apollo Federation",permalink:"/docs/recipes/federation"}},c=[],o={rightToc:c};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can use GraphQL Mesh as a gateway for your data sources. CLI's ",Object(i.b)("inlineCode",{parentName:"p"},"serve")," command creates a GraphQL Endpoint with GraphQL Playground."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mesh serve\n")),Object(i.b)("p",null,"You can configure ",Object(i.b)("inlineCode",{parentName:"p"},"serve")," command like below in ",Object(i.b)("inlineCode",{parentName:"p"},".meshrc.yml"),";"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"serve: \n    port: 5000\n")),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fork")," -  - Spawn multiple server instances as node clusters (default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),") One of: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Int")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Boolean")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"port")," -  - TCP Port to listen (default: ",Object(i.b)("inlineCode",{parentName:"li"},"3000"),") One of: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Int")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"String")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"exampleQuery")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Provide an example query or queries for GraphQL Playground"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cors")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),"): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"origin")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"allowedHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"exposedHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"credentials")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"maxAge")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preflightContinue")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"optionsSuccessStatus")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handlers")," -  Array of: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"object"),": ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pubsubTopic")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"payload")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"object"),": ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handler")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"method")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String (GET | POST | DELETE | PATCH)"),")"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"staticFiles")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"GraphQL Mesh",src:n(192).default})))}p.isMDXComponent=!0}}]);