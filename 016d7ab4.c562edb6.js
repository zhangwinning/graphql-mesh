(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},s=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,u=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return t?a.a.createElement(u,o({ref:n},b,{components:t})):a.a.createElement(u,o({ref:n},b))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(130)),l={id:"json-schema",title:"JSON Schema",sidebar_label:"JSON Schema"},o={unversionedId:"handlers/json-schema",id:"handlers/json-schema",isDocsHomePage:!1,title:"JSON Schema",description:"image",source:"@site/docs/handlers/json-schema.md",slug:"/handlers/json-schema",permalink:"/docs/handlers/json-schema",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/json-schema.md",version:"current",sidebar_label:"JSON Schema",sidebar:"sidebar",previous:{title:"gRPC & Protobuf",permalink:"/docs/handlers/grpc"},next:{title:"PostgreSQL / PostGraphile",permalink:"/docs/handlers/postgraphile"}},c=[{value:"Codesandbox Example",id:"codesandbox-example",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],b={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20847995/79218994-11434880-7e5a-11ea-8594-08185526080f.png",alt:"image"}))),Object(i.b)("p",null,"This handler allows you to load any remote REST service, and describe it's request/response using the YAML config."),Object(i.b)("p",null,"With this handler, you can easily customize and control the built GraphQL schema."),Object(i.b)("p",null,"To get started, install the handler library from NPM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/json-schema\n")),Object(i.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n  - name: MyApi\n    handler:\n      jsonSchema:\n        baseUrl: https://some-service-url/endpoint-path/\n        operations:\n          - type: Query\n            field: users\n            path: /users\n            method: GET\n            responseSchema: ./json-schemas/users.json\n")),Object(i.b)("h2",{id:"codesandbox-example"},"Codesandbox Example"),Object(i.b)("p",null,"You can check out our example that uses JSON Schema handler with mock data."),Object(i.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/json-schema-example?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"json-schema-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(i.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"baseUrl")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operations")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of Object"),", required): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"field")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pubsubTopic")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"description")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String (Query | Mutation | Subscription)"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"method")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String (GET | DELETE | POST | PUT | PATCH)"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestSchema")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Any"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestSample")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Any"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestTypeName")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"responseSample")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Any"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"responseSchema")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Any"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"responseTypeName")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headers")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"disableTimestampScalar")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),")"))))}p.isMDXComponent=!0}}]);