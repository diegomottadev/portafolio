/*! For license information please see component---src-pages-index-js-b7c2bb62529ef6558631.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5yr9":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("ap0H"),s=n("Wbzz"),i=n("9eSz"),c=n.n(i),u=n("ma3e"),l=function(e){var t=e.description,n=e.title,r=e.stack,a=e.site,s=e.image,i=e.index;return o.a.createElement("article",{className:"project"},s&&o.a.createElement(c.a,{fluid:s.childImageSharp.fluid,className:"project-img"}),o.a.createElement("div",{className:"project-info"},o.a.createElement("span",{className:"project-number"}," ",i+1),o.a.createElement("h3",{className:"project-title"},n||"defaul title"),o.a.createElement("p",{className:"project-desc"},t),o.a.createElement("div",{className:"about-stack"},r.map((function(e){return o.a.createElement("span",{key:e.id},e.skill)}))),o.a.createElement("br",null),o.a.createElement("div",{className:"project-links"},null!==a&&o.a.createElement("a",{href:a},o.a.createElement(u.j,{className:"project-icon"})))))};t.a=function(e){var t=e.projects,n=e.title,r=e.showLink;return o.a.createElement("section",{className:"section projects"},o.a.createElement(a.a,{title:n}),o.a.createElement("div",{className:"section-center projects-center"},t.map((function(e,t){return o.a.createElement(l,Object.assign({key:e.id,index:t},e))}))),r&&o.a.createElement(s.a,{to:"/freelances",className:"btn center-btn"},"Más proyectos freelance"))}},DxCv:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("ap0H"),s=n("9eSz"),i=n.n(s),c=n("ma3e"),u=function(e){var t=e.description,n=e.title,r=e.github,a=e.stack,s=e.site,u=e.image,l=e.index;return o.a.createElement("article",{className:"project"},u&&o.a.createElement(i.a,{fluid:u.childImageSharp.fluid,className:"project-img"}),o.a.createElement("div",{className:"project-info"},o.a.createElement("span",{className:"project-number"}," ",l+1),o.a.createElement("h3",{className:"project-title"},n||"defaul title"),o.a.createElement("p",{className:"project-desc"},t),o.a.createElement("div",{className:"about-stack"},a.map((function(e){return o.a.createElement("span",{key:e.id},e.skill)}))),o.a.createElement("br",null),o.a.createElement("div",{className:"project-links"},o.a.createElement("a",{href:r},o.a.createElement(c.e,{className:"project-icon"})),null!==s&&o.a.createElement("a",{href:s},o.a.createElement(c.j,{className:"project-icon"})))))},l=n("Wbzz");t.a=function(e){var t=e.projects,n=e.title,r=e.showLink;return o.a.createElement("section",{className:"section projects"},o.a.createElement(a.a,{title:n}),o.a.createElement("div",{className:"section-center projects-center"},t.map((function(e,t){return o.a.createElement(u,Object.assign({key:e.id,index:t},e))}))),r&&o.a.createElement(l.a,{to:"/projects",className:"btn center-btn"},"Más proyectos"))}},ELEi:function(e,t,n){var r;e.exports=(r=n("q1tI"),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t,n){var r=n(3);e.exports=n(8)(r.isElement,!0)},function(e,t){e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=n(7)},function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=n(3),s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o.initializer.load(this,n,t),this.begin()}return r(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=a.htmlParser.typeHtmlChars(e,t,n);var r=0,s=e.substr(t);if("^"===s.charAt(0)&&/^\^\d+/.test(s)){var i=1;i+=(s=/\d+/.exec(s)[0]).length,r=parseInt(s),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+i),n.toggleBlinking(!0)}if("`"===s.charAt(0)){for(;"`"!==e.substr(t+o).charAt(0)&&!(t+ ++o>e.length););var c=e.substring(0,t),u=e.substring(c.length+1,t+o),l=e.substring(t+o+1);e=c+u+l,o--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var r=e.substr(0,t);this.replaceText(r),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=a.htmlParser.backSpaceHtmlChars(e,t,n);var r=e.substr(0,t);if(n.replaceText(r),n.smartBackspace){var o=n.strings[n.arrayPos+1];o&&r===o.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),r)}else this.setPauseStatus(e,t,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=s,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(r=n(2))&&r.__esModule?r:{default:r},i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"load",value:function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=o({},s.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var r=Array.prototype.slice.apply(e.stringsElement.children),a=r.length;if(a)for(var i=0;i<a;i+=1){var c=r[i];e.strings.push(c.innerHTML.trim())}}for(var i in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[i]=i;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var t=document.createElement("style");t.type="text/css",t.setAttribute("data-typed-js-css",!0);var n="";e.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==t.length&&(t.innerHTML=n,document.body.appendChild(t))}}}]),e}();t.default=i;var c=new i;t.initializer=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if("<"===r||"&"===r){var o;for(o="<"===r?">":";";e.substr(t+1).charAt(0)!==o&&!(1+ ++t>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if(">"===r||";"===r){var o;for(o=">"===r?"<":"&";e.substr(t-1).charAt(0)!==o&&!(--t<0););t--}return t}}]),e}();t.default=r;var o=new r;t.htmlParser=o}])},e.exports=r()},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),s=n.n(a),i=n(4),c=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){var e,n,r,a,s,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,p=new Array(l),d=0;d<l;d++)p[d]=arguments[d];return r=this,n=!(a=(e=f(t)).call.apply(e,[this].concat(p)))||"object"!==u(a)&&"function"!=typeof a?y(r):a,s=y(n),i="rootElement",c=o.a.createRef(),i in s?Object.defineProperty(s,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[i]=c,n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=(e.style,e.typedRef,e.stopped),n=(e.className,l(e,["style","typedRef","stopped","className"]));this.constructTyped(n),t&&this.typed.stop()}},{key:"constructTyped",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.props,r=(n.style,n.typedRef,n.stopped,n.className,l(n,["style","typedRef","stopped","className"]));this.typed&&this.typed.destroy(),this.typed=new c.a(this.rootElement.current,Object.assign(r,t)),this.props.typedRef&&this.props.typedRef(this.typed),this.typed.reConstruct=function(t){e.constructTyped(t)}}},{key:"shouldComponentUpdate",value:function(e){var t=this;if(this.props!==e){e.style,e.typedRef,e.stopped,e.className;var n=l(e,["style","typedRef","stopped","className"]);return this.typed.options=Object.assign(this.typed.options,n),!Object.keys(e).every((function(n){return!t.props[n]&&e[n]?(t.constructTyped(e),!1):(t.typed[n]&&(t.typed[n]=e[n]),!0)}))||this.props.strings.length===e.strings.length||this.constructTyped(e),!0}return!1}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className,r=e.children,a=o.a.createElement("span",{ref:this.rootElement});return r&&(a=o.a.cloneElement(r,{ref:this.rootElement})),o.a.createElement("span",{style:t,className:n},a)}}])&&p(n.prototype,a),t}();m.propTypes={style:s.a.object,className:s.a.string,children:s.a.object,typedRef:s.a.func,stopped:s.a.bool,strings:s.a.arrayOf(s.a.string),typeSpeed:s.a.number,startDelay:s.a.number,backSpeed:s.a.number,smartBackspace:s.a.bool,shuffle:s.a.bool,backDelay:s.a.number,fadeOut:s.a.bool,fadeOutClass:s.a.string,fadeOutDelay:s.a.number,loop:s.a.bool,loopCount:s.a.number,showCursor:s.a.bool,cursorChar:s.a.string,autoInsertCss:s.a.bool,attr:s.a.string,bindInputFocusEvents:s.a.bool,contentType:s.a.oneOf(["html",""]),onComplete:s.a.func,preStringTyped:s.a.func,onStringTyped:s.a.func,onLastStringBackspaced:s.a.func,onTypingPaused:s.a.func,onTypingResumed:s.a.func,onReset:s.a.func,onStop:s.a.func,onStart:s.a.func,onDestroy:s.a.func},t.default=m},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case f:case s:case c:case i:case d:return e;default:switch(e=e&&e.$$typeof){case l:case y:case u:return e;default:return t}}case b:case h:case a:return t}}}function k(e){return E(e)===f}t.typeOf=E,t.AsyncMode=p,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=y,t.Fragment=s,t.Lazy=b,t.Memo=h,t.Portal=a,t.Profiler=c,t.StrictMode=i,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===c||e===i||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===u||e.$$typeof===l||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g)},t.isAsyncMode=function(e){return k(e)||E(e)===p},t.isConcurrentMode=k,t.isContextConsumer=function(e){return E(e)===l},t.isContextProvider=function(e){return E(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return E(e)===y},t.isFragment=function(e){return E(e)===s},t.isLazy=function(e){return E(e)===b},t.isMemo=function(e){return E(e)===h},t.isPortal=function(e){return E(e)===a},t.isProfiler=function(e){return E(e)===c},t.isStrictMode=function(e){return E(e)===i},t.isSuspense=function(e){return E(e)===d}},function(e,t,n){"use strict";!function(){Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.warn(a);try{throw new Error(a)}catch(e){}};function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var y=e.type;switch(y){case u:case l:case o:case s:case a:case f:return y;default:var h=y&&y.$$typeof;switch(h){case c:case p:case i:return h;default:return t}}case m:case d:case r:return t}}}var E=u,k=l,S=c,w=i,j=n,O=p,P=o,C=m,T=d,x=r,N=s,I=a,_=f,M=!1;function R(e){return g(e)===l}t.typeOf=g,t.AsyncMode=E,t.ConcurrentMode=k,t.ContextConsumer=S,t.ContextProvider=w,t.Element=j,t.ForwardRef=O,t.Fragment=P,t.Lazy=C,t.Memo=T,t.Portal=x,t.Profiler=N,t.StrictMode=I,t.Suspense=_,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===s||e===a||e===f||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===i||e.$$typeof===c||e.$$typeof===p||e.$$typeof===h||e.$$typeof===b)},t.isAsyncMode=function(e){return M||(M=!0,function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];v.apply(void 0,[t].concat(r))}}(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||g(e)===u},t.isConcurrentMode=R,t.isContextConsumer=function(e){return g(e)===c},t.isContextProvider=function(e){return g(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===p},t.isFragment=function(e){return g(e)===o},t.isLazy=function(e){return g(e)===m},t.isMemo=function(e){return g(e)===d},t.isPortal=function(e){return g(e)===r},t.isProfiler=function(e){return g(e)===s},t.isStrictMode=function(e){return g(e)===a},t.isSuspense=function(e){return g(e)===f}}()},function(e,t,n){"use strict";var r,o=n(3),a=n(9),s=n(2),i=n(10),c=Function.call.bind(Object.prototype.hasOwnProperty);function u(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="<<anonymous>>",p={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:d(u),arrayOf:function(e){return d((function(t,n,r,o,a){if("function"!=typeof e)return new y("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new y("Invalid "+o+" `"+a+"` of type `"+b(i)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<i.length;c++){var u=e(i,c,r,o,a+"["+c+"]",s);if(u instanceof Error)return u}return null}))},element:d((function(t,n,r,o,a){var s=t[n];return e(s)?null:new y("Invalid "+o+" `"+a+"` of type `"+b(s)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:d((function(e,t,n,r,a){var s=e[t];return o.isValidElementType(s)?null:new y("Invalid "+r+" `"+a+"` of type `"+b(s)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return d((function(t,n,r,o,a){if(!(t[n]instanceof e)){var s=e.name||l;return new y("Invalid "+o+" `"+a+"` of type `"+function(e){return e.constructor&&e.constructor.name?e.constructor.name:l}(t[n])+"` supplied to `"+r+"`, expected instance of `"+s+"`.")}return null}))},node:d((function(e,t,n,r,o){return h(e[t])?null:new y("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(t,n,r,o,a){if("function"!=typeof e)return new y("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],u=b(i);if("object"!==u)return new y("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in i)if(c(i,l)){var p=e(i,l,r,o,a+"."+l,s);if(p instanceof Error)return p}return null}))},oneOf:function(e){return Array.isArray(e)?d((function(t,n,r,o,a){for(var s=t[n],i=0;i<e.length;i++)if(f(s,e[i]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===v(t)?String(t):t}));return new y("Invalid "+o+" `"+a+"` of value `"+String(s)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),u)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+g(n)+" at index "+t+"."),u}return d((function(t,n,r,o,a){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,o,a,s))return null;return new y("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return d((function(t,n,r,o,a){var i=t[n],c=b(i);if("object"!==c)return new y("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var l=e[u];if(l){var p=l(i,u,r,o,a+"."+u,s);if(p)return p}}return null}))},exact:function(e){return d((function(t,n,r,o,i){var c=t[n],u=b(c);if("object"!==u)return new y("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var l=a({},t[n],e);for(var p in l){var f=e[p];if(!f)return new y("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=f(c,p,r,o,i+"."+p,s);if(d)return d}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function y(e){this.message=e,this.stack=""}function d(e){var n={},o=0;function a(a,i,c,u,p,f,d){if(u=u||l,f=f||c,d!==s){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var h=u+":"+c;!n[h]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[h]=!0,o++)}}return null==i[c]?a?null===i[c]?new y("The "+p+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`."):new y("The "+p+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(i,c,u,p,f)}var i=a.bind(null,!1);return i.isRequired=a.bind(null,!0),i}function m(e){return d((function(t,n,r,o,a,s){var i=t[n];return b(i)!==e?new y("Invalid "+o+" `"+a+"` of type `"+v(i)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!h(o.value))return!1}else for(;!(o=a.next()).done;){var s=o.value;if(s&&!h(s[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return y.prototype=Error.prototype,p.checkPropTypes=i,p.resetWarningCache=i.resetWarningCache,p.PropTypes=p,p}},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,c=s(e),u=1;u<arguments.length;u++){for(var l in n=Object(arguments[u]))o.call(n,l)&&(c[l]=n[l]);if(r){i=r(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(c[i[p]]=n[i[p]])}}return c}},function(e,t,n){"use strict";var r=function(){},o=n(2),a={},s=Function.call.bind(Object.prototype.hasOwnProperty);function i(e,t,n,i,c){for(var u in e)if(s(e,u)){var l;try{if("function"!=typeof e[u]){var p=Error((i||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.");throw p.name="Invariant Violation",p}l=e[u](t,u,i,n,null,o)}catch(e){l=e}if(!l||l instanceof Error||r((i||"React class")+": type specification of "+n+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var f=c?c():"";r("Failed "+n+" type: "+l.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},i.resetWarningCache=function(){a={}},e.exports=i},function(e,t,n){"use strict";var r=n(2);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}}]))},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("7oih"),s=n("9eSz"),i=n.n(s),c=n("Wbzz"),u=n("PNo/"),l=n("ELEi"),p=n.n(l),f=function(){var e=Object(c.c)("3430288619").file.childImageSharp.fluid;return o.a.createElement("header",{className:"hero"},o.a.createElement("div",{className:"section-center hero-center"},o.a.createElement("article",{className:"hero-info"},o.a.createElement("div",null,o.a.createElement("div",{className:"underline"}),o.a.createElement("h1",null,"Diego Motta"),o.a.createElement("h3",null,o.a.createElement(p.a,{loop:!0,typeSpeed:80,backSpeed:20,strings:["Lic. en Sistemas","Desarrollador Full Stack Web"],smartBackspace:!0,backDelay:1e3,loopCount:0,showCursor:!0,cursorChar:"|",className:"typed"})),o.a.createElement("h4",null,"¿Tenes un proyecto o una idea ?"),o.a.createElement(c.a,{to:"/contact",className:"btn"},"Contactame"),o.a.createElement(u.a,null))),o.a.createElement(i.a,{fluid:e,className:"hero-img"})))},y=n("ap0H"),d=n("ma3e"),m=[{id:1,icon:o.a.createElement(d.c,{className:"service-icon"}),title:"Desarrollo de aplicaciones web",text:"Para profesionales y emprendedores decididos a digitalizar su negocio con una aplicación web a medida centrado en la realización de acciones, desarrollando con tecnologia web, se crea código(lenguajes de programación, librerías, bases de datos y frameworks) que procesan, almacenan y muestran información en interfaces visuales en un navegador web de acuerdo a la naturaleza del negocio"},{id:2,icon:o.a.createElement(d.k,{className:"service-icon"}),title:"Desarrollo de sitios web",text:"Para profesionales y emprendedores que quieran dedicarse solo a su negocio, evitar perder tiempo en lo técnico y evitar tocar tu sitio web por un largo tiempo, amigable de navegar para encontrar lo que buscan cuando llegan a tu sitio web, que este orientada a conectar y llevar tu mensaje, entregando la información de los productos o servicios que vendas y generar los contenidos del negocio es la tarea más importante"}],h=function(){return o.a.createElement("section",{className:"section bg-grey"},o.a.createElement(y.a,{title:"Servicios"}),o.a.createElement("div",{className:"section-center services-center"},m.map((function(e){var t=e.id,n=e.icon,r=e.title,a=e.text;return o.a.createElement("article",{key:t,className:"service"},n,o.a.createElement("h4",null," ",r),o.a.createElement("div",{className:"underline"}),o.a.createElement("p",null,a))}))))},b=function(){var e=Object(c.c)("3502054602").allStrapiJobs.nodes,t=o.a.useState(0),n=t[0],r=t[1],a=e[n],s=a.company,i=a.position,u=a.date,l=a.description,p=a.place;a.company_short;return o.a.createElement("section",{className:"section jobs"},o.a.createElement(y.a,{title:"Experiencias"}),o.a.createElement("div",{className:"jobs-center"},o.a.createElement("div",{className:"btn-container"},e.map((function(e,t){return o.a.createElement("button",{key:e.strapiId,onClick:function(){return r(t)},className:"job-btn "+(t===n&&"active-btn")},e.company_short)}))),o.a.createElement("article",{className:"job-info"},o.a.createElement("h3",null,i),o.a.createElement("h4",null,s),o.a.createElement("h5",{className:"job-date"},u," | ",p),o.a.createElement("br",null),l.map((function(e){return o.a.createElement("div",{key:e.id,className:"job-desc "},o.a.createElement(d.b,{className:"job-icon"}),o.a.createElement("p",null,e.name))})))),o.a.createElement(c.a,{to:"/about",className:"btn center-btn"},"Sobre mi"))},v=n("DxCv"),g=n("EYWl"),E=n("5yr9");t.default=function(e){var t=e.data,n=t.allStrapiProjects.nodes,r=t.allStrapiFreelances.nodes;return o.a.createElement(a.a,null,o.a.createElement(g.a,{title:"HOME"}),o.a.createElement(f,null),o.a.createElement(h,null),o.a.createElement(b,null),o.a.createElement(E.a,{projects:r,title:"Proyectos Freelances",showLink:!0}),o.a.createElement(v.a,{projects:n,title:"Proyectos Personales",showLink:!0}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b7c2bb62529ef6558631.js.map