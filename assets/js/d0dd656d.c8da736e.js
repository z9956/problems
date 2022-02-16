"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6279],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8120:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={},l=void 0,u={unversionedId:"Configuration/commitlint",id:"Configuration/commitlint",title:"commitlint",description:"\u5b89\u88c5\u4f9d\u8d56",source:"@site/docs/Configuration/commitlint.md",sourceDirName:"Configuration",slug:"/Configuration/commitlint",permalink:"/Notes/docs/Configuration/commitlint",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Configuration/commitlint.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"babelrc",permalink:"/Notes/docs/Configuration/babelrc"},next:{title:"eslintrc",permalink:"/Notes/docs/Configuration/eslintrc"}},s=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2},{value:".husky/commit-msg",id:"huskycommit-msg",children:[],level:2},{value:"commitlint.config.js",id:"commitlintconfigjs",children:[],level:2}],m={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D husky @commitlint/cli @commitlint/config-conventional\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx husky-init && npm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'npm set-script prepare "husky install"\n')),(0,i.kt)("h2",{id:"huskycommit-msg"},".husky/commit-msg"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx --no-install commitlint --edit $1\n#or\nyarn commitlint --edit $1\n")),(0,i.kt)("h2",{id:"commitlintconfigjs"},"commitlint.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//\n\nmodule.exports = { extends: ['@commitlint/config-conventional'] };\n\n/**\n * feat\uff1a\u65b0\u589e\u529f\u80fd\n * fix\uff1abug \u4fee\u590d\n * docs\uff1a\u6587\u6863\u66f4\u65b0\n * style\uff1a\u4e0d\u5f71\u54cd\u7a0b\u5e8f\u903b\u8f91\u7684\u4ee3\u7801\u4fee\u6539(\u4fee\u6539\u7a7a\u767d\u5b57\u7b26\uff0c\u683c\u5f0f\u7f29\u8fdb\uff0c\u8865\u5168\u7f3a\u5931\u7684\u5206\u53f7\u7b49\uff0c\u6ca1\u6709\u6539\u53d8\u4ee3\u7801\u903b\u8f91)\n * refactor\uff1a\u91cd\u6784\u4ee3\u7801(\u65e2\u6ca1\u6709\u65b0\u589e\u529f\u80fd\uff0c\u4e5f\u6ca1\u6709\u4fee\u590d bug)\n * perf\uff1a\u6027\u80fd, \u4f53\u9a8c\u4f18\u5316\n * test\uff1a\u65b0\u589e\u6d4b\u8bd5\u7528\u4f8b\u6216\u662f\u66f4\u65b0\u73b0\u6709\u6d4b\u8bd5\n * build\uff1a\u4e3b\u8981\u76ee\u7684\u662f\u4fee\u6539\u9879\u76ee\u6784\u5efa\u7cfb\u7edf(\u4f8b\u5982 gulp\uff0cwebpack\uff0crollup \u7684\u914d\u7f6e\u7b49)\u7684\u63d0\u4ea4\n * ci\uff1a\u4e3b\u8981\u76ee\u7684\u662f\u4fee\u6539\u9879\u76ee\u7ee7\u7eed\u96c6\u6210\u6d41\u7a0b(\u4f8b\u5982 Travis\uff0cJenkins\uff0cGitLab CI\uff0cCircle\u7b49)\u7684\u63d0\u4ea4\n * chore\uff1a\u4e0d\u5c5e\u4e8e\u4ee5\u4e0a\u7c7b\u578b\u7684\u5176\u4ed6\u7c7b\u578b\uff0c\u6bd4\u5982\u6784\u5efa\u6d41\u7a0b, \u4f9d\u8d56\u7ba1\u7406\n * revert\uff1a\u56de\u6eda\u67d0\u4e2a\u66f4\u65e9\u4e4b\u524d\u7684\u63d0\u4ea4\n */\n")))}p.isMDXComponent=!0}}]);