## 关于Backbone的View ##

1、MV间的调用是在V的实例中设置一个属性可以访问M的实例，可以在`initialize`中设置，如`this.model = new Model()`，也可以在传值时设置，如
```javascript

    var testView = Backbone.View.extend(
    	{
    		model: new Model()
    	}
    );

```


，也可以在实例化该View时传入参数，如`var todo = new TodoView({model: new Model()});`

 

2、在`initialize`中通过`listenTo`把Model的事件绑定到View中的处理函数上实现MV同步

 

3、View中dom的事件绑定写在View

 

4、`initialize`中记得写下`_.bindAll(this, 'func1', 'func2')`，使`func1`，`func2`的函数上下文为this

 

5、尽量通过template进行渲染

 

6、`render`函数返回`this`

 

7、 实例化View时传入参数可以设置该实例的属性，若参数中的属性不存在于默认View实例中，则添加该属性至该实例中

 
{{{md-sub subs.sub1}}}
送上Demo:

{{{code plugins.plugin1}}}

demo源码

```javascript
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
                console.log(this.el);
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
```