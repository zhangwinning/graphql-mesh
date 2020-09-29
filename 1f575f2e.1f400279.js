(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{130:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),m=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=m(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=m(t),s=r,d=b["".concat(i,".").concat(s)]||b[s]||u[s]||o;return t?a.a.createElement(d,c({ref:n},p,{components:t})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return m}));var r=t(2),a=t(6),o=(t(0),t(130)),i={},c={unversionedId:"generated-markdown/MockingConfig.generated",id:"generated-markdown/MockingConfig.generated",isDocsHomePage:!1,title:"MockingConfig.generated",description:"* if (type: Boolean) - If this expression is truthy, mocking would be enabled",source:"@site/docs/generated-markdown/MockingConfig.generated.md",slug:"/generated-markdown/MockingConfig.generated",permalink:"/docs/generated-markdown/MockingConfig.generated",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/generated-markdown/MockingConfig.generated.md",version:"current"},l=[],p={rightToc:l};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"if")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - If this expression is truthy, mocking would be enabled\nYou can use environment variables expression, for example: ",Object(o.b)("inlineCode",{parentName:"li"},"${MOCKING_ENABLED}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"preserveResolvers")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Do not mock any other resolvers other than defined in ",Object(o.b)("inlineCode",{parentName:"li"},"mocks"),".\nFor example, you can enable this if you don't want to mock entire schema but partially."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mocks")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Array of Object"),") - Mock configurations: ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"apply")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - Resolver path\nExample: User.firstName"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"if")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - If this expression is truthy, mocking would be enabled\nYou can use environment variables expression, for example: ",Object(o.b)("inlineCode",{parentName:"li"},"${MOCKING_ENABLED}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"faker")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),") - Faker.js expression or function\nRead more (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/marak/Faker.js/#fakerfake"}),"https://github.com/marak/Faker.js/#fakerfake"),')\nExample;\nfaker: name.firstName\nfaker: "{{ name.firstName }} {{ name.lastName }}"'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"custom")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),') - Custom mocking\nIt can be a module or json file.\nBoth "moduleName#exportName" or only "moduleName" would work')))))}m.isMDXComponent=!0}}]);