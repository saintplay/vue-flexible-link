(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b(require('electron')):'function'==typeof define&&define.amd?define('flexible-link',['electron'],b):'object'==typeof exports?exports['flexible-link']=b(require('electron')):a['flexible-link']=b(a.electron)})(this,function(a){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)}([function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2),e=c.n(d),f=c(4),g=c(1),h=g(e.a,f.a,null,null,null);h.options.__file='src\\FlexibleLink.vue',h.esModule&&Object.keys(h.esModule).some(function(a){return'default'!==a&&'__'!==a.substr(0,2)})&&console.error('named exports are not supported in *.vue files.'),h.options.functional&&console.error('[vue-loader] FlexibleLink.vue: functional components are not supported with templates, they should use render functions.'),!1,b['default']=h.exports},function(a){a.exports=function(a,b,c,d,e){var f,g=a=a||{},h=typeof a.default;('object'==h||'function'==h)&&(f=a,g=a.default);var i='function'==typeof g?g.options:g;b&&(i.render=b.render,i.staticRenderFns=b.staticRenderFns),d&&(i._scopeId=d);var j;if(e?(j=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||'undefined'==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),c&&c.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(e)},i._ssrRegister=j):c&&(j=c),j){var k=i.functional,l=k?i.render:i.beforeCreate;k?i.render=function(a,b){return j.call(b),l(a,b)}:i.beforeCreate=l?[].concat(l,j):[j]}return{esModule:f,exports:g,options:i}}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default={name:'flexible-link',props:{native:{type:Boolean,default:!0},customClass:{type:String,default:null},href:{type:String,default:'/'},target:{type:String,default:'_self'}},methods:{openLinkNatively:function(){this.native&&c(3).shell.openExternal(this.href)}}}},function(b){b.exports=a},function(a,b){'use strict';var c=function(){var a=this,b=a.$createElement,c=a._self._c||b;return a.native?c('a',{class:a.customClass,on:{click:a.openLinkNatively}},[a._t('default')],2):c('a',{class:a.customClass,attrs:{href:a.href,target:a.target}},[a._t('default')],2)};c._withStripped=!0;b.a={render:c,staticRenderFns:[]},!1}])});