/**
 * Created with JetBrains WebStorm.
 * User: willkan
 * Date: 13-8-24
 * Time: 下午3:59
 * To change this template use File | Settings | File Templates.
 */
define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');
    require('willkan/backbone-localStorage/1.1.6/backbone.localStorage');

    console.log("backbone demo here");

    var id = (new Date()).valueOf(),
        $box = $('<div/>').attr('id', 'box' + id),
        $demo = $('<div/>').attr('id', 'demo' + id).css({
            width: 100
        });

    $box.append($('<button id="add">add</button>'), $('<button id="clear">clear</button>'), $demo);

    function demo(){

        //models
        var User = Backbone.Model.extend({
            defaults:{
                name: 'user0'
            }
        });

        //collections
        var  Users = Backbone.Collection.extend({
            localStorage: new Backbone.LocalStorage('Users'),
            model: User,
            initialize: function(){
                window.localStorage.getItem('Users') || this.localStorage.save();
            }
        });

        //views
        var UserView = Backbone.View.extend({
            el: $('#box' + id),

            initialize: function(){
                //bind this to function
                _.bindAll(this, 'render', 'addItem');

                this.demo = $(this.el).find('#demo' + id);
                this.collection = new Users();
                this.listenTo(this.collection, 'remove', this.render);
                this.listenTo(this.collection, 'add', this.render);
                this.collection.fetch();

                var mobile = $.os.phone || $.os.tablet || false;

                //移动设备绑定tap事件，其他绑定click事件
                this.events[(mobile ? 'tap' : 'click') + ' #add'] = this.addItem;
                this.events[(mobile ? 'tap' : 'click') + ' #clear'] = this.clear;
            },

            template: function(options){
                var result = '';
                _.each(options.models, function(value, key){
                    console.log(value.get('name'));
                    result += '<span>' + value.attributes.name + '</span> ';
                });
                console.log(result);
                return result;
            },

            render: function(){
                this.demo.html(this.template(this.collection));
                return this;
            },

            events: {
                /* dom事件监听应写在这
                'tap #add': 'addItem',
                'click #add': 'addItem',
                'click #clear': 'clear',
                'tap #clear': 'clear'
                */
            },

            addItem: function(){
                this.collection.create({
                    name: 'user' + (this.collection.length + 1)
                });
                console.log('collection add');
            },

            clear: function(){
                //collection中的model被destroy时会触发collection的remove事件
                _.invoke(this.collection.toArray(), 'destroy');
            }
        });
        new UserView();
    }

    return {
        html: $box.get(0).outerHTML,
        callback: demo
    }
});
