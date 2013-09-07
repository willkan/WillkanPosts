define(['../../../../'],function(){
    MyApp = MyApp || {};
    MyApp.Templates = MyApp.Templates || {};
    return Backbone.View.extend({
        render: function(){
            if(_.isFunction(this.tempalte)){
                if(_.isFunction(this.beforeRender)){
                    this.beforeRender();
                };

                this.$el.html(this.template(this.serialize()));

                if(_.isFunction(this.afterRender)){
                    this.afterRender();
                };
                return this;
            } else if(_.isString(this.template)){
                this.tempalte = function(){
                    var template = MyApp.Templates,
                        functionName = this.template.split('.');
                    for(var i = 0, l = functionName.length; i < l; i++){
                        template = template[i];
                    }
                };
                this.render();
            }
        },

        serialize: function(){
            return this.model || this.collections;
        }
    })
});