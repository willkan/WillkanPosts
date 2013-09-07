WillkanPosts
============
#一个发布工作流程类文章的工具
例子参见[前端工作流程](http://willkan.github.io/blog/html/Workflow/)

##添加文章步骤
在`app/_post`中添加你的markdown文件

* 若要在markdown文件中添加子表题,在需要插入子表题处输入**{{{md-sub subs.sub`N`}}}**
* 若要在markdown文件中添加demo, 在需要显示demo处输入**{{{code plugins.code`N`}}}**demo应符合CMD模块且返回数据格式应为
   ```javascript
   {
       html: 'some string',
       callback: function(){}
   }
   ```

在`app/public/scripts/example/static/post-package.js`中添加文章,格式如下
```javascript
define(function(require, exports, module){
        return {
            post:[
                {
                    //若需要添加子标题或插件
                    "options":{
                        "subs":{
                            //子标题键注意跟markdown文件对应
                            "sub1":"Backbone-Sub1"
                        },
                        "plugins":{
                            "plugin1": require("./demo/backbone/demo")
                        }
                    },
                    //侧栏目录显示的文章名字
                    "title": "Backbone-View",
                    //文件名字
                    "postName": "Backbone-View"
                },
                //其他文章
                {
                }
            ]
        }
    });
```
