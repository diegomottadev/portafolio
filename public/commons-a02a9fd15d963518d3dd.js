(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"7oih":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=(n("mxmt"),n("ma3e")),o=n("Wbzz"),c=[{id:1,text:"home",url:"/"},{id:2,text:"sobre mi",url:"/about/"},{id:3,text:"proyectos",url:"/projects/"},{id:4,text:"freelances",url:"/freelances/"},{id:5,text:"contacto",url:"/contact/"}].map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(o.a,{to:e.url},e.text))})),u=function(e){var t=e.styleClass,n=e.page;return console.log(n),a.a.createElement("ul",{className:"page-links "+(t||"")+" "+(null==n?"":"navbar-font")},c)},l=function(e){var t=e.toggleSiderbar,n=e.page;return a.a.createElement("nav",{className:"navbar"},a.a.createElement("div",{className:"nav-center"},a.a.createElement("div",{className:"nav-header"},a.a.createElement("button",{type:"button",className:"toggle-btn",onClick:t},a.a.createElement(i.a,null))),a.a.createElement(u,{styleClass:"nav-links",page:n})))},M=n("PNo/"),s=function(e){var t=e.isOpen,n=e.toggleSiderbar;return a.a.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")},a.a.createElement("button",{className:"close-btn",onClick:n},a.a.createElement(i.l,null)),a.a.createElement("div",{className:"side-container"},a.a.createElement(u,{styleClass:t?"sidebar-links":""}),a.a.createElement(M.a,{styleClass:"sidebar-icons"})))},N=function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",null,a.a.createElement(M.a,{styleClass:"footer-links"}),a.a.createElement("h4",null,"copyright©",(new Date).getFullYear,a.a.createElement("span",null,"Diego Motta")," todos los derechos reservados")))};t.a=function(e){var t=e.children,n=e.page,r=a.a.useState(!1),i=r[0],o=r[1],c=function(){o(!i)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{toggleSiderbar:c,page:n}),a.a.createElement(s,{isOpen:i,toggleSiderbar:c}),t,a.a.createElement(N,null))}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function M(){u=e(l.map((function(e){return e.props}))),s.canUseDOM?t(u):n&&(u=n(u))}var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),M()},o.componentDidUpdate=function(){M()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),M()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(s,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(s,"canUseDOM",c),s}}},EYWl:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("qhky"),o=n("Wbzz");t.a=function(e){var t=e.title,n=e.description,r=Object(o.c)("2874580956").site.siteMetadata,c=r.siteDesc,u=r.siteTitle,l=(r.siteUrl,r.image);r.twitterUsername;return a.a.createElement(i.a,{htmlAttributes:{lang:"es"},title:t+" | "+u},a.a.createElement("meta",{name:"description",content:n||c}),a.a.createElement("meta",{name:"image",content:l}))}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function u(e){return function(t){return r.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,u=e.title,l=c(e,["attr","title"]);return r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},"PNo/":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("ma3e"),o=[{id:1,icon:a.a.createElement(i.h,{className:"social-icon"}),url:"https://www.linkedin.com/in/diegoivanmotta/"},{id:2,icon:a.a.createElement(i.g,{className:"social-icon"}),url:"https://www.instagram.com/diegomottadev/"},{id:3,icon:a.a.createElement(i.i,{className:"social-icon"}),url:"https://www.reddit.com/user/diegomottadev"},{id:4,icon:a.a.createElement(i.d,{className:"social-icon"}),url:"https://github.com/diegomottadev"},{id:5,icon:a.a.createElement(i.f,{className:"social-icon"}),url:"https://gitlab.com/diegomotta18"}].map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:e.url,className:"social-link"},e.icon))}));t.a=function(e){var t=e.styleClass;return a.a.createElement("ul",{className:"social-links "+(t||"")},o)}},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,l,M=r(t),s=r(n);if(M&&s){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(M!=s)return!1;var N=t instanceof Date,y=n instanceof Date;if(N!=y)return!1;if(N&&y)return t.getTime()==n.getTime();var g=t instanceof RegExp,j=n instanceof RegExp;if(g!=j)return!1;if(g&&j)return t.toString()==n.toString();var D=a(t);if((u=D.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!i.call(n,D[c]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(l=D[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},mxmt:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMTU3IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGQ9Ik0yNS42NDE0IDI2LjYxNzJMMjkuMDg2NyA4LjQwNjI1SDM0LjM0MjZMMjguNjY0OCAzNEgyMy4zNTYyTDE5LjE5MDIgMTYuODc4OUwxNS4wMjQyIDM0SDkuNzE1NjJMNC4wMzc4OSA4LjQwNjI1SDkuMjkzNzVMMTIuNzU2NiAyNi41ODJMMTYuOTc1NCA4LjQwNjI1SDIxLjQ0MDJMMjUuNjQxNCAyNi42MTcyWk00OC42NjUyIDM0LjM1MTZDNDUuODc2MiAzNC4zNTE2IDQzLjYwMjcgMzMuNDk2MSA0MS44NDQ5IDMxLjc4NTJDNDAuMDk4OCAzMC4wNzQyIDM5LjIyNTggMjcuNzk0OSAzOS4yMjU4IDI0Ljk0NzNWMjQuNDU1MUMzOS4yMjU4IDIyLjU0NDkgMzkuNTk0OSAyMC44Mzk4IDQwLjMzMzIgMTkuMzM5OEM0MS4wNzE1IDE3LjgyODEgNDIuMTE0NCAxNi42NjggNDMuNDYyMSAxNS44NTk0QzQ0LjgyMTUgMTUuMDM5MSA0Ni4zNjg0IDE0LjYyODkgNDguMTAyNyAxNC42Mjg5QzUwLjcwNDMgMTQuNjI4OSA1Mi43NDkyIDE1LjQ0OTIgNTQuMjM3NSAxNy4wODk4QzU1LjczNzUgMTguNzMwNSA1Ni40ODc1IDIxLjA1NjYgNTYuNDg3NSAyNC4wNjg0VjI2LjE0MjZINDQuMzc2MkM0NC41NDAyIDI3LjM4NDggNDUuMDMyNCAyOC4zODA5IDQ1Ljg1MjcgMjkuMTMwOUM0Ni42ODQ4IDI5Ljg4MDkgNDcuNzMzNiAzMC4yNTU5IDQ4Ljk5OTIgMzAuMjU1OUM1MC45NTYyIDMwLjI1NTkgNTIuNDg1NSAyOS41NDY5IDUzLjU4NzEgMjguMTI4OUw1Ni4wODMyIDMwLjkyMzhDNTUuMzIxNSAzMi4wMDIgNTQuMjkwMiAzMi44NDU3IDUyLjk4OTQgMzMuNDU1MUM1MS42ODg3IDM0LjA1MjcgNTAuMjQ3MyAzNC4zNTE2IDQ4LjY2NTIgMzQuMzUxNlpNNDguMDg1MiAxOC43NDIyQzQ3LjA3NzMgMTguNzQyMiA0Ni4yNTcgMTkuMDgyIDQ1LjYyNDIgMTkuNzYxN0M0NS4wMDMxIDIwLjQ0MTQgNDQuNjA0NyAyMS40MTQxIDQ0LjQyODkgMjIuNjc5N0g1MS40OTUzVjIyLjI3NTRDNTEuNDcxOSAyMS4xNTA0IDUxLjE2NzIgMjAuMjgzMiA1MC41ODEyIDE5LjY3MzhDNDkuOTk1MyAxOS4wNTI3IDQ5LjE2MzMgMTguNzQyMiA0OC4wODUyIDE4Ljc0MjJaTTgwLjEyNjYgMjQuNjY2QzgwLjEyNjYgMjcuNzEyOSA3OS40NzYyIDMwLjA5MTggNzguMTc1NCAzMS44MDI3Qzc2Ljg3NDYgMzMuNTAyIDc1LjA1ODIgMzQuMzUxNiA3Mi43MjYyIDM0LjM1MTZDNzAuNjYzNyAzNC4zNTE2IDY5LjAxNzIgMzMuNTYwNSA2Ny43ODY3IDMxLjk3ODVMNjcuNTU4MiAzNEg2Mi45ODc5VjdINjguMDY4VjE2LjY4NTVDNjkuMjM5OCAxNS4zMTQ1IDcwLjc4MDkgMTQuNjI4OSA3Mi42OTEgMTQuNjI4OUM3NS4wMTEzIDE0LjYyODkgNzYuODI3NyAxNS40ODQ0IDc4LjE0MDIgMTcuMTk1M0M3OS40NjQ1IDE4Ljg5NDUgODAuMTI2NiAyMS4yOTEgODAuMTI2NiAyNC4zODQ4VjI0LjY2NlpNNzUuMDQ2NSAyNC4yOTY5Qzc1LjA0NjUgMjIuMzc1IDc0Ljc0MTggMjAuOTc0NiA3NC4xMzI0IDIwLjA5NTdDNzMuNTIzIDE5LjIwNTEgNzIuNjE0OCAxOC43NTk4IDcxLjQwNzggMTguNzU5OEM2OS43OTA2IDE4Ljc1OTggNjguNjc3MyAxOS40MjE5IDY4LjA2OCAyMC43NDYxVjI4LjI1MkM2OC42ODkxIDI5LjU4NzkgNjkuODE0MSAzMC4yNTU5IDcxLjQ0MyAzMC4yNTU5QzczLjA4MzYgMzAuMjU1OSA3NC4xNjE3IDI5LjQ0NzMgNzQuNjc3MyAyNy44MzAxQzc0LjkyMzQgMjcuMDU2NiA3NS4wNDY1IDI1Ljg3ODkgNzUuMDQ2NSAyNC4yOTY5WiIgZmlsbD0iIzEwMkE0MiIvPgo8cGF0aCBkPSJNODcuMjA3IDM0VjguNDA2MjVIOTUuMDgyQzk3LjMzMiA4LjQwNjI1IDk5LjM0MTggOC45MTYwMiAxMDEuMTExIDkuOTM1NTVDMTAyLjg5MyAxMC45NDM0IDEwNC4yODEgMTIuMzg0OCAxMDUuMjc3IDE0LjI1OThDMTA2LjI3MyAxNi4xMjMgMTA2Ljc3MSAxOC4yNDQxIDEwNi43NzEgMjAuNjIzVjIxLjgwMDhDMTA2Ljc3MSAyNC4xNzk3IDEwNi4yNzkgMjYuMjk0OSAxMDUuMjk1IDI4LjE0NjVDMTA0LjMyMiAyOS45OTggMTAyLjk0NSAzMS40MzM2IDEwMS4xNjQgMzIuNDUzMUM5OS4zODI4IDMzLjQ3MjcgOTcuMzczIDMzLjk4ODMgOTUuMTM0OCAzNEg4Ny4yMDdaTTkyLjQ4MDUgMTIuNjc3N1YyOS43NjM3SDk1LjAyOTNDOTcuMDkxOCAyOS43NjM3IDk4LjY2OCAyOS4wODk4IDk5Ljc1NzggMjcuNzQyMkMxMDAuODQ4IDI2LjM5NDUgMTAxLjQwNCAyNC40NjY4IDEwMS40MjggMjEuOTU5VjIwLjYwNTVDMTAxLjQyOCAxOC4wMDM5IDEwMC44ODkgMTYuMDM1MiA5OS44MTA1IDE0LjY5OTJDOTguNzMyNCAxMy4zNTE2IDk3LjE1NjIgMTIuNjc3NyA5NS4wODIgMTIuNjc3N0g5Mi40ODA1Wk0xMjIuNjQxIDM0LjM1MTZDMTE5Ljg1MiAzNC4zNTE2IDExNy41NzkgMzMuNDk2MSAxMTUuODIxIDMxLjc4NTJDMTE0LjA3NSAzMC4wNzQyIDExMy4yMDIgMjcuNzk0OSAxMTMuMjAyIDI0Ljk0NzNWMjQuNDU1MUMxMTMuMjAyIDIyLjU0NDkgMTEzLjU3MSAyMC44Mzk4IDExNC4zMDkgMTkuMzM5OEMxMTUuMDQ3IDE3LjgyODEgMTE2LjA5IDE2LjY2OCAxMTcuNDM4IDE1Ljg1OTRDMTE4Ljc5NyAxNS4wMzkxIDEyMC4zNDQgMTQuNjI4OSAxMjIuMDc5IDE0LjYyODlDMTI0LjY4IDE0LjYyODkgMTI2LjcyNSAxNS40NDkyIDEyOC4yMTMgMTcuMDg5OEMxMjkuNzEzIDE4LjczMDUgMTMwLjQ2MyAyMS4wNTY2IDEzMC40NjMgMjQuMDY4NFYyNi4xNDI2SDExOC4zNTJDMTE4LjUxNiAyNy4zODQ4IDExOS4wMDggMjguMzgwOSAxMTkuODI5IDI5LjEzMDlDMTIwLjY2MSAyOS44ODA5IDEyMS43MDkgMzAuMjU1OSAxMjIuOTc1IDMwLjI1NTlDMTI0LjkzMiAzMC4yNTU5IDEyNi40NjEgMjkuNTQ2OSAxMjcuNTYzIDI4LjEyODlMMTMwLjA1OSAzMC45MjM4QzEyOS4yOTcgMzIuMDAyIDEyOC4yNjYgMzIuODQ1NyAxMjYuOTY1IDMzLjQ1NTFDMTI1LjY2NCAzNC4wNTI3IDEyNC4yMjMgMzQuMzUxNiAxMjIuNjQxIDM0LjM1MTZaTTEyMi4wNjEgMTguNzQyMkMxMjEuMDUzIDE4Ljc0MjIgMTIwLjIzMyAxOS4wODIgMTE5LjYgMTkuNzYxN0MxMTguOTc5IDIwLjQ0MTQgMTE4LjU4IDIxLjQxNDEgMTE4LjQwNSAyMi42Nzk3SDEyNS40NzFWMjIuMjc1NEMxMjUuNDQ4IDIxLjE1MDQgMTI1LjE0MyAyMC4yODMyIDEyNC41NTcgMTkuNjczOEMxMjMuOTcxIDE5LjA1MjcgMTIzLjEzOSAxOC43NDIyIDEyMi4wNjEgMTguNzQyMlpNMTQzLjgzNyAyNy43OTQ5TDE0Ny4zNyAxNC45ODA1SDE1Mi42NzlMMTQ2LjI2MiAzNEgxNDEuNDExTDEzNC45OTUgMTQuOTgwNUgxNDAuMzA0TDE0My44MzcgMjcuNzk0OVoiIGZpbGw9IiMyQ0FFQkEiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjAzNzg4NzYiIHk9IjciIHdpZHRoPSIxNTYuNjQxIiBoZWlnaHQ9IjM1LjM1MTYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSI0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return je}));n("RUBk");var r,a,i,o,c=n("17x9"),u=n.n(c),l=n("8+s/"),M=n.n(l),s=n("bmMU"),N=n.n(s),y=n("q1tI"),g=n.n(y),j=n("YVoz"),D=n.n(j),f="bodyAttributes",T="htmlAttributes",I="titleAttributes",d={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},p=(Object.keys(d).map((function(e){return d[e]})),"charset"),m="cssText",A="href",O="http-equiv",E="innerHTML",z="itemprop",w="name",h="property",b="rel",C="src",L="target",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},v="defaultTitle",x="defer",k="encodeSpecialCharacters",Q="onChangeClientState",Y="titleTemplate",U=Object.keys(S).reduce((function(e,t){return e[S[t]]=t,e}),{}),P=[d.NOSCRIPT,d.SCRIPT,d.STYLE],Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},B=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},H=function(e){var t=_(e,d.TITLE),n=_(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,v);return t||r||void 0},G=function(e){return _(e,Q)||function(){}},q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[d.BASE]})).map((function(e){return e[d.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===b&&"canonical"===e[n].toLowerCase()||u===b&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==E&&c!==m&&c!==z||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],u=D()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,M=e.styleTags,s=e.title,N=e.titleAttributes;ue(d.BODY,r),ue(d.HTML,a),ce(s,N);var y={baseTag:le(d.BASE,n),linkTags:le(d.LINK,i),metaTags:le(d.META,o),noscriptTags:le(d.NOSCRIPT,c),scriptTags:le(d.SCRIPT,l),styleTags:le(d.STYLE,M)},g={},j={};Object.keys(y).forEach((function(e){var t=y[e],n=t.newTags,r=t.oldTags;n.length&&(g[e]=n),r.length&&(j[e]=y[e].oldTags)})),t&&t(),u(e,g,j)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(d.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var M=i.indexOf(u);-1!==M&&i.splice(M,1)}for(var s=i.length-1;s>=0;s--)n.removeAttribute(i[s]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(d.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===m)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},Me=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[S[n]||n]=e[n],t}),t)},Ne=function(e,t,n){switch(e){case d.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=se(n,r),[g.a.createElement(d.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=Me(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+F(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case f:case T:return{toComponent:function(){return se(t)},toString:function(){return Me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=S[e]||e;if(n===E||n===m){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),g.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===E||e===m)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===P.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,M=e.title,s=void 0===M?"":M,N=e.titleAttributes;return{base:Ne(d.BASE,t,r),bodyAttributes:Ne(f,n,r),htmlAttributes:Ne(T,a,r),link:Ne(d.LINK,i,r),meta:Ne(d.META,o,r),noscript:Ne(d.NOSCRIPT,c,r),script:Ne(d.SCRIPT,u,r),style:Ne(d.STYLE,l,r),title:Ne(d.TITLE,{title:s,titleAttributes:N},r)}},ge=M()((function(e){return{baseTag:X([A,L],e),bodyAttributes:q(f,e),defer:_(e,x),encode:_(e,k),htmlAttributes:q(T,e),linkTags:K(d.LINK,[b,A],e),metaTags:K(d.META,[w,p,O,h,z],e),noscriptTags:K(d.NOSCRIPT,[E],e),onChangeClientState:G(e),scriptTags:K(d.SCRIPT,[C,E],e),styleTags:K(d.STYLE,[m],e),title:H(e),titleAttributes:q(I,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),ye)((function(){return null})),je=(a=ge,o=i=function(e){function t(){return R(this,t),B(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!N()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case d.SCRIPT:case d.NOSCRIPT:return{innerHTML:t};case d.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case d.TITLE:return W({},a,((t={})[r.type]=o,t.titleAttributes=W({},i),t));case d.BODY:return W({},a,{bodyAttributes:W({},i)});case d.HTML:return W({},a,{htmlAttributes:W({},i)})}return W({},a,((n={})[r.type]=W({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return g.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(J(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case d.LINK:case d.META:case d.NOSCRIPT:case d.SCRIPT:case d.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=J(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),g.a.createElement(a,r)},V(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(g.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);je.renderStatic=je.rewind}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=commons-a02a9fd15d963518d3dd.js.map