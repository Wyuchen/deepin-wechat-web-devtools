!function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(r){return e[r]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=256)}({256:function(){"use strict";(e=>{const r={};let t=1;const o="run",n="triggerOnMsg",a="WeixinWorkerInvoke",s=r=>{if(r.data)switch(r.data.type){case a:switch(r.data.method){case"postMsgToAppService":r.data.arguments&&r.data.arguments.length&&e.workerMsgHandler&&e.workerMsgHandler.apply(e,r.data.arguments);break;case"postMsgToWorker":r.data.arguments&&r.data.arguments.length&&__WeixinWorker.postMsgToWorker.apply(__WeixinWorker,r.data.arguments)}}};e.terminate=e=>{const t=r[e];t&&(t.terminate(),delete r[e])},e.postMsgToWorker=(e,t)=>{const o=r[e];if(o)try{o.postMessage({type:n,msg:JSON.parse(t)})}catch(r){console.error("post msg to worker err: [workerId] ",e," [msg] ",t)}},e.create=()=>{const e=new __global.Worker("__WORKER__/worker.js");return r[t]=e,e.onmessage=s,e.postMessage({type:o,code:`WeixinWorker.__workerId__ = ${t}`}),t++}})(WeixinWorker)}});