/**
 * Created with JetBrains WebStorm.
 * User: willkan
 * Date: 13-8-21
 * Time: 下午10:44
 * To change this template use File | Settings | File Templates.
 */
Handlebars.registerHelper('md-sub',function(items, options){
    console.log("md-sub");
    var out='<a data-magellan-destination="' + items.href + '" name="' + items.href + '"></a>';
    return out;
});
