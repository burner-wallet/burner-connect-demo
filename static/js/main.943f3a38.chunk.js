(this["webpackJsonpburner-connect-demo"]=this["webpackJsonpburner-connect-demo"]||[]).push([[0],{138:function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),l=u(n(2)),f=u(n(3)),d=u(n(4)),p=function(e){function t(t){var n=void 0===t?{}:t,r=n.hubUrl,i=void 0===r?"https://burnerconnect.xyz/":r,o=n.defaultNetwork,a=void 0===o?"1":o,s=e.call(this)||this;return s.isBurnerProvider=!0,s.connected=!1,s.walletBridge=null,s.wallet=null,s._nextJsonRpcId=0,s.walletSelector=new d.default,s.network=a,s.hub=new l.default(i),s.on=null,window.addEventListener("message",(function(e){s.walletBridge&&e.origin===s.walletBridge.origin&&e.data.message&&"accountsChanged"===e.data.message&&s.emit("accountsChanged",e.data.accounts)})),s}return i(t,e),t.prototype.setNetwork=function(e){e!==this.network&&(this.network=e,this.emit("chainChanged",e))},t.prototype.getAssets=function(){return a(this,void 0,void 0,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return[4,(e=this.getBridge()).ensureIFrame()];case 1:return t.sent(),[4,e.sendCommand("getAssets")];case 2:return[2,t.sent()]}}))}))},t.prototype.enable=function(){var e=this;return this.connected?Promise.resolve():new Promise((function(t,n){return a(e,void 0,void 0,(function(){var e,t=this;return s(this,(function(r){switch(r.label){case 0:this.walletSelector.onClose((function(){t.walletSelector.close(),n()})),r.label=1;case 1:return r.trys.push([1,4,5,6]),this.walletSelector.showStarting(),[4,this.showPrompt()];case 2:return r.sent(),[4,this.getBridge().send({id:1e8*Math.random()|0,method:"eth_accounts",network:this.network})];case 3:return r.sent(),this.connected=!0,this.emit("connect"),[3,6];case 4:return e=r.sent(),console.error(e),[3,6];case 5:return this.walletSelector.close(),[7];case 6:return[2]}}))}))}))},t.prototype.showPrompt=function(){return a(this,void 0,void 0,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return[4,this.walletSelector.showSelector(this.hub)];case 1:return e=t.sent(),this.walletSelector.showConnecting(e.name),this.wallet=e,this.walletBridge=new f.default(e.origin),[2]}}))}))},t.prototype.send=function(e,t){if(void 0===t&&(t=[]),!e||"string"!=typeof e)return new Error("Method is not a valid string.");if(!(t instanceof Array))return new Error("Params is not a valid array.");var n={jsonrpc:"2.0",id:this._nextJsonRpcId++,method:e,params:t};return this.getBridge().send(o({network:this.network},n))},t.prototype.sendAsync=function(e,t){if(!this.connected)throw new Error("BurnerConnect Provider is not connected");this.getBridge().send(o({network:this.network},e)).then((function(n){var r=n.result;return t(null,{id:e.id,jsonrpc:"2.0",result:r})})).catch((function(e){return t(e)}))},t.prototype.getBridge=function(){if(!this.walletBridge)throw new Error("BurnerConnect is not yet connected");return this.walletBridge},t}(c.EventEmitter);t.default=p},function(e,t,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var a=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var u=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,o,a,s;if(c(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if("function"==typeof a?a=o[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=l(e))>0&&a.length>i&&!a.warned){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=a.length,s=u,console&&console.warn&&console.warn(s)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=d.bind(r);return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):v(i,i.length)}function m(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var u=i[e];if(void 0===u)return!1;if("function"==typeof u)o(u,this,t);else{var c=u.length,l=v(u,c);for(n=0;n<c;++n)o(l[n],this,t)}return!0},s.prototype.addListener=function(e,t){return f(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return f(this,e,t,!0)},s.prototype.once=function(e,t){return c(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,o,a;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},s.prototype.listeners=function(e){return h(this,e,!0)},s.prototype.rawListeners=function(e){return h(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},s.prototype.listenerCount=m,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.iframe=null,this.msgId=0,this.url=e}return e.prototype.ensureIFrame=function(){var e=this;return this.iframe?Promise.resolve(this.iframe):new Promise((function(t){e.iframe=document.createElement("iframe"),e.iframe.src=e.url,e.iframe.style.cssText="height:0; width:0; border:none",e.iframe.addEventListener("load",(function(){return t()})),document.body.appendChild(e.iframe)}))},e.prototype.getFrame=function(){var e=this;return this.iframe=document.createElement("iframe"),this.iframe.src=this.url+"/selector.html",this.iframe.style.border="none",window.addEventListener("message",(function(t){console.log(t.data),"setHeight"===t.data.message&&(e.iframe.style.height=t.data.height+"px")})),this.iframe},e.prototype.awaitSelection=function(){return new Promise((function(e){window.addEventListener("message",(function(t){"walletSelected"===t.data.message&&e(t.data.wallet)}))}))},e.prototype.send=function(e){var t=this;return new Promise((function(n){var r=t.msgId++;window.addEventListener("message",(function e(t){t.data.id===r&&(window.removeEventListener("message",e),n(t.data.response))})),t.iframe.contentWindow.postMessage({command:e,id:r},t.url)}))},e}();t.default=r},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.iframe=null,this.msgId=0,this.origin=e}return e.prototype.send=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.ensureIFrame()];case 1:return t.sent(),[4,this.sendCommand("send",e)];case 2:return[2,t.sent()]}}))}))},e.prototype.ensureIFrame=function(){var e=this;return this.iframe?Promise.resolve(this.iframe):new Promise((function(t){e.iframe=document.createElement("iframe"),e.iframe.src=e.origin+"/burnerconnect.html",e.iframe.style.cssText="height:0; width:0; border:none",e.iframe.addEventListener("load",(function(){return t()})),document.body.appendChild(e.iframe)}))},e.prototype.sendCommand=function(e,t){var n=this;return new Promise((function(r){var i=n.msgId++;window.addEventListener("message",(function e(t){t.data.id===i&&(window.removeEventListener("message",e),r(t.data.response))})),n.iframe.contentWindow.postMessage({command:e,id:i,params:t},n.origin)}))},e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.closeListeners=[]}return e.prototype.getPanel=function(){var e=this;if(this.container||(this.container=document.createElement("div"),this.container.style.cssText="\n        display: flex;\n        flex-direction: column;\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background: rgba(200, 200, 200, 0.5);\n        z-index: 10000001;\n        align-items: center;\n      ",document.body.appendChild(this.container)),!this.panel){var t=document.createElement("div");t.style.cssText="\n        display: flex;\n        flex-direction: column;\n        padding: 8px;\n        margin: 8px;\n        border-radius: 8px;\n        background: #ffffff;\n        max-width: 500px;\n      ";var n=document.createElement("button");n.innerText="x",n.style.cssText="\n        margin-left: auto;\n      ",n.addEventListener("click",(function(){return e.closeListeners.forEach((function(e){return e()}))})),t.appendChild(n);var r=document.createElement("div");t.appendChild(r),this.panel=r,this.container.appendChild(t)}return this.panel},e.prototype.showStarting=function(){this.getPanel().innerHTML="<h2>Fetching your Burner Wallets...</h2>"},e.prototype.showSelector=function(e){return this.getPanel().appendChild(e.getFrame()),e.awaitSelection()},e.prototype.showConnecting=function(e){this.getPanel().innerHTML="<h2>Connecting to "+e+"...</h2>"},e.prototype.close=function(){document.body.removeChild(this.container),this.container=null,this.panel=null},e.prototype.onClose=function(e){this.closeListeners.push(e)},e}();t.default=r}])},139:function(e,t,n){e.exports=n(357)},144:function(e,t,n){},146:function(e,t,n){},156:function(e,t){},179:function(e,t){},181:function(e,t){},248:function(e,t){},357:function(e,t,n){"use strict";n.r(t);var r=n(3),i=n.n(r),o=n(136),a=n.n(o),s=(n(144),n(13)),u=n.n(s),c=n(9),l=(n(146),n(137)),f=n.n(l),d=n(138),p=new(n.n(d).a),h=new f.a(p);window.provider=p,window.web3=h;var m=n(66),v=function(e){var t=e.asset,n=e.address,o=Object(r.useState)(0),a=Object(c.a)(o,2),s=a[0],l=a[1],f=Object(r.useState)(""),d=Object(c.a)(f,2),v=d[0],y=d[1],w=Object(r.useState)("0"),b=Object(c.a)(w,2),g=b[0],_=b[1],x=Object(r.useState)(!1),E=Object(c.a)(x,2),O=E[0],j=E[1],L=Object(r.useState)(null),C=Object(c.a)(L,2),S=C[0],P=C[1];Object(r.useEffect)((function(){var e=null,r=null,i=!0;"native"!==t.type&&(r=new h.eth.Contract(m,t.address));return function o(){var a;return u.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return p.setNetwork(t.network),s.next=3,u.a.awrap(r?r.methods.balanceOf(n).call():h.eth.getBalance(n));case 3:a=s.sent,i&&(l(h.utils.fromWei(a,"ether")),e=setTimeout(o,2e3));case 5:case"end":return s.stop()}}))}(),function(){i=!1,e&&clearTimeout(e)}}),[n,t]);return i.a.createElement("div",null,i.a.createElement("div",null,"Balance: ",s),i.a.createElement("div",null,"To: ",i.a.createElement("input",{value:v,onChange:function(e){return y(e.target.value)}})),i.a.createElement("div",null,"Value: ",i.a.createElement("input",{type:"number",min:"0",value:g,onChange:function(e){return _(e.target.value)}})),i.a.createElement("button",{disabled:O||42!==v.length||"0"===g,onClick:function(){var e,r,i,o;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return P(null),j(!0),e=h.utils.toWei(g,"ether"),p.setNetwork(t.network),"native"===t.type?r=h.eth.sendTransaction({to:v,from:n,value:e}):(i=new h.eth.Contract(m,t.address),r=i.methods.transfer(v,e).send({from:n})),a.next=7,u.a.awrap(r);case 7:o=a.sent,j(!1),_("0"),P(o.transactionHash);case 11:case"end":return a.stop()}}))}},"Send"),S&&i.a.createElement("div",null,"Sent in Transaction ",S))},y=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)([]),s=Object(c.a)(a,2),u=s[0],l=s[1],f=Object(r.useState)(null),d=Object(c.a)(f,2),m=d[0],y=d[1];return Object(r.useEffect)((function(){h.eth.getAccounts().then((function(e){return o(e[0])})),p.getAssets().then((function(e){return l(e)}));var e=function(e){return o(e[0])};return p.addListener("accountsChanged",e),function(){p.removeListener(e)}}),[]),i.a.createElement("div",null,i.a.createElement("div",null,"Connected to ",p.wallet.name," (",p.wallet.origin,")"),n&&i.a.createElement("div",null,n),u.length>0&&i.a.createElement("div",null,"Assets:"),i.a.createElement("div",null,u.map((function(e){return i.a.createElement("button",{onClick:function(){return y(e)},key:e.id},e.name)}))),m&&i.a.createElement(v,{asset:m,address:n}))},w=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(!1),s=Object(c.a)(a,2),l=s[0],f=s[1];return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},"Burner Connect"),n?i.a.createElement(y,null):i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,u.a.awrap(p.enable().catch((function(){return console.log("Selector closed")})));case 3:f(!1),o(p.connected);case 5:case"end":return e.stop()}}))},disabled:l},"Connect to Burner Wallet")),i.a.createElement("div",{style:{fontVariant:"italic"}},'Developers: you can access "provider" and "web3" instances in the console'))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')}},[[139,1,2]]]);
//# sourceMappingURL=main.943f3a38.chunk.js.map