"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=v(function(g,n){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),a=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/blas-ext-base-scunone/dist').ndarray;function c(t){var r=t[1],e=t[0];return q(o(e,0),a(e),i(e,0),u(e),a(r),i(r,0),u(r)),r}n.exports=c
});var d=s();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
