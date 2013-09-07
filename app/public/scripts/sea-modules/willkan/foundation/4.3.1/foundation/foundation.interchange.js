define("willkan/foundation/4.3.1/foundation/foundation.interchange",["willkan/foundation/4.3.1/foundation/foundation","$"],function(a){var b=window.Foundation||a("willkan/foundation/4.3.1/foundation/foundation");!function(a,c,d){"use strict";b.libs.interchange={name:"interchange",version:"4.2.4",cache:{},images_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen and (min-width: 1px)",small:"only screen and (min-width: 768px)",medium:"only screen and (min-width: 1280px)",large:"only screen and (min-width: 1440px)",landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(a,b){if(/IMG/.test(a[0].nodeName)){var c=a[0].src;if(new RegExp(b,"i").test(c))return;return a[0].src=b,a.trigger("replace",[a[0].src,c])}}}},init:function(c,d,e){return b.inherit(this,"throttle"),"object"==typeof d&&a.extend(!0,this.settings,d),this.events(),this.images(),"string"!=typeof d?this.settings.init:this[d].call(this,e)},events:function(){var b=this;a(c).on("resize.fndtn.interchange",b.throttle(function(){b.resize.call(b)},50))},resize:function(){var b=this.cache;if(!this.images_loaded)return setTimeout(a.proxy(this.resize,this),50),void 0;for(var c in b)if(b.hasOwnProperty(c)){var d=this.results(c,b[c]);d&&this.settings.directives[d.scenario[1]](d.el,d.scenario[0])}},results:function(b,c){var d=c.length;if(d>0)for(var e=a('[data-uuid="'+b+'"]'),f=d-1;f>=0;f--){var g,h=c[f][2];if(g=this.settings.named_queries.hasOwnProperty(h)?matchMedia(this.settings.named_queries[h]):matchMedia(h),g.matches)return{el:e,scenario:c[f]}}return!1},images:function(a){return"undefined"==typeof this.cached_images||a?this.update_images():this.cached_images},update_images:function(){var b=d.getElementsByTagName("img"),c=b.length,e=0,f="data-"+this.settings.load_attr;this.cached_images=[],this.images_loaded=!1;for(var g=c-1;g>=0;g--)this.loaded(a(b[g]),function(a){if(e++,a){var b=a.getAttribute(f)||"";b.length>0&&this.cached_images.push(a)}e===c&&(this.images_loaded=!0,this.enhance())}.bind(this));return"deferred"},loaded:function(a,b){function c(){b(a[0])}function d(){if(this.one("load",c),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=this.attr("src"),b=a.match(/\?/)?"&":"?";b+="random="+(new Date).getTime(),this.attr("src",a+b)}}return a.attr("src")?(a[0].complete||4===a[0].readyState?c():d.call(a),void 0):(c(),void 0)},enhance:function(){for(var b=this.images().length,d=b-1;d>=0;d--)this._object(a(this.images()[d]));return a(c).trigger("resize")},parse_params:function(a,b,c){return[this.trim(a),this.convert_directive(b),this.trim(c)]},convert_directive:function(a){var b=this.trim(a);return b.length>0?b:"replace"},_object:function(a){var b=this.parse_data_attr(a),c=[],d=b.length;if(d>0)for(var e=d-1;e>=0;e--){var f=b[e].split(/\((.*?)(\))$/);if(f.length>1){var g=f[0].split(","),h=this.parse_params(g[0],g[1],f[1]);c.push(h)}}return this.store(a,c)},uuid:function(a){function b(){return(0|65536*(1+Math.random())).toString(16).substring(1)}var c=a||"-";return b()+b()+c+b()+c+b()+c+b()+c+b()+b()+b()},store:function(a,b){var c=this.uuid(),d=a.data("uuid");return d?this.cache[d]:(a.attr("data-uuid",c),this.cache[c]=b)},trim:function(b){return"string"==typeof b?a.trim(b):b},parse_data_attr:function(a){for(var b=a.data(this.settings.load_attr).split(/\[(.*?)\]/),c=b.length,d=[],e=c-1;e>=0;e--)b[e].replace(/[\W\d]+/,"").length>4&&d.push(b[e]);return d},reflow:function(){this.images(!0)}}}(b.zj,this,this.document)});
