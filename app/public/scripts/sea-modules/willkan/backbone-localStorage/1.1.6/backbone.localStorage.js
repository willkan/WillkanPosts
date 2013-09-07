define("willkan/backbone-localStorage/1.1.6/backbone.localStorage",["../../../../../../.","backbone"],function(a,b,c){!function(d,e){"object"==typeof b&&a?c.exports=e(a("underscore"),a("backbone")):"function"==typeof define&&define.amd?define(["../../../../../../.","backbone"],function(a,b){return e(a||d._,b||d.Backbone)}):e(_,Backbone)}(this,function(a,b){function c(){return(0|65536*(1+Math.random())).toString(16).substring(1)}function d(){return c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c()}return b.LocalStorage=window.Store=function(a){if(!this.localStorage)throw"Backbone.localStorage: Environment does not support localStorage.";this.name=a;var b=this.localStorage().getItem(this.name);this.records=b&&b.split(",")||[]},a.extend(b.LocalStorage.prototype,{save:function(){this.localStorage().setItem(this.name,this.records.join(","))},create:function(a){return a.id||(a.id=d(),a.set(a.idAttribute,a.id)),this.localStorage().setItem(this.name+"-"+a.id,JSON.stringify(a)),this.records.push(a.id.toString()),this.save(),this.find(a)},update:function(b){return this.localStorage().setItem(this.name+"-"+b.id,JSON.stringify(b)),a.include(this.records,b.id.toString())||this.records.push(b.id.toString()),this.save(),this.find(b)},find:function(a){return this.jsonData(this.localStorage().getItem(this.name+"-"+a.id))},findAll:function(){return(a.chain||a)(this.records).map(function(a){return this.jsonData(this.localStorage().getItem(this.name+"-"+a))},this).compact().value()},destroy:function(b){return b.isNew()?!1:(this.localStorage().removeItem(this.name+"-"+b.id),this.records=a.reject(this.records,function(a){return a===b.id.toString()}),this.save(),b)},localStorage:function(){return localStorage},jsonData:function(a){return a&&JSON.parse(a)},_clear:function(){var b=this.localStorage(),c=new RegExp("^"+this.name+"-");b.removeItem(this.name),(a.chain||a)(b).keys().filter(function(a){return c.test(a)}).each(function(a){b.removeItem(a)}),this.records.length=0},_storageSize:function(){return this.localStorage().length}}),b.LocalStorage.sync=window.Store.sync=b.localSync=function(a,c,d){var e,f,g=c.localStorage||c.collection.localStorage,h=b.$.Deferred&&b.$.Deferred();try{switch(a){case"read":e=void 0!=c.id?g.find(c):g.findAll();break;case"create":e=g.create(c);break;case"update":e=g.update(c);break;case"delete":e=g.destroy(c)}}catch(i){f=22===i.code&&0===g._storageSize()?"Private browsing is unsupported":i.message}return e?(d&&d.success&&("0.9.10"===b.VERSION?d.success(c,e,d):d.success(e)),h&&h.resolve(e)):(f=f?f:"Record Not Found",d&&d.error&&("0.9.10"===b.VERSION?d.error(c,f,d):d.error(f)),h&&h.reject(f)),d&&d.complete&&d.complete(e),h&&h.promise()},b.ajaxSync=b.sync,b.getSyncMethod=function(a){return a.localStorage||a.collection&&a.collection.localStorage?b.localSync:b.ajaxSync},b.sync=function(a,c,d){return b.getSyncMethod(c).apply(this,[a,c,d])},b.LocalStorage})});