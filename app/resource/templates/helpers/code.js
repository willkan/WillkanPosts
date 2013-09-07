Handlebars.registerHelper('code', function(object){
   if(Object.prototype.toString.call(object.html) == '[object String]'){
       return '<div class="demo">' + object.html + '</div>';
   }
});