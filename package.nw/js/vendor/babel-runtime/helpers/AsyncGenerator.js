var AwaitValue=require("./AwaitValue");function AsyncGenerator(e){var t,n;function r(t,n){try{var u=e[t](n),a=u.value,i=a instanceof AwaitValue;Promise.resolve(i?a.wrapped:a).then(function(e){i?r("next",e):o(u.done?"return":"normal",e)},function(e){r("throw",e)})}catch(e){o("throw",e)}}function o(e,o){switch(e){case"return":t.resolve({value:o,done:!0});break;case"throw":t.reject(o);break;default:t.resolve({value:o,done:!1})}(t=t.next)?r(t.key,t.arg):n=null}this._invoke=function(e,o){return new Promise(function(u,a){var i={key:e,arg:o,resolve:u,reject:a,next:null};n?n=n.next=i:(t=n=i,r(e,o))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}),AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)},module.exports=AsyncGenerator;