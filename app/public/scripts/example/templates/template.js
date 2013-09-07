define(function(require){ var Handlebars = window.Handlebars || require('willkan/handlebars/1.0.0/handlebars.runtime');

Handlebars.registerHelper('aside-subTitle',function(items, options){
    var out='<ul class="subtitle">';
    console.log("helper aside-subTitle");
    for(var value in items){
        if(items.hasOwnProperty(value)){
            value = items[value];
            out += '<li data-magellan-arrival="' + value.href + '">' +
                '<a href="#' + value.href + '">' + value.title + '</a>' +
                '</li>';
        }
    }
    out += '</ul>';
    return out;
    /*{{#if subs}}
        <ul class="subtitle">
                        {{#each subs}}
            <li data-magellan-arrival="#{{this.href}}">
                <a href="#{{this.href}}">{{this.title}}</a>
            </li>
                        {{/each}}
        </ul>
        {{/if}}*/
});

Handlebars.registerHelper('code', function(object){
   if(Object.prototype.toString.call(object.html) == '[object String]'){
       return '<div class="demo">' + object.html + '</div>';
   }
});
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

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["markdown"] = this["Handlebars"]["templates"]["markdown"] || {};

this["Handlebars"]["templates"]["markdown"]["Backbone-View"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<section data-magellan-destination=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <a name=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\r\n    <div class=\"markdown\">\r\n        <h2>关于Backbone的View</h2>\n<p>1、MV间的调用是在V的实例中设置一个属性可以访问M的实例，可以在<code>initialize</code>中设置，如<code>this.model = new Model()</code>，也可以在传值时设置，如</p>\n<pre><code class=\"lang-javascript\">\n    <span class=\"keyword\">var</span> testView = Backbone.View.extend(\n        {\n            model: <span class=\"keyword\">new</span> Model()\n        }\n    );</code></pre>\n<p>，也可以在实例化该View时传入参数，如<code>var todo = new TodoView({model: new Model()});</code></p>\n<p>2、在<code>initialize</code>中通过<code>listenTo</code>把Model的事件绑定到View中的处理函数上实现MV同步</p>\n<p>3、View中dom的事件绑定写在View</p>\n<p>4、<code>initialize</code>中记得写下<code>_.bindAll(this, &#39;func1&#39;, &#39;func2&#39;)</code>，使<code>func1</code>，<code>func2</code>的函数上下文为this</p>\n<p>5、尽量通过template进行渲染</p>\n<p>6、<code>render</code>函数返回<code>this</code></p>\n<p>7、 实例化View时传入参数可以设置该实例的属性，若参数中的属性不存在于默认View实例中，则添加该属性至该实例中</p>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['md-sub'] || depth0['md-sub']),stack1 ? stack1.call(depth0, ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options) : helperMissing.call(depth0, "md-sub", ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n送上Demo:</p>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.code || depth0.code),stack1 ? stack1.call(depth0, ((stack1 = depth0.plugins),stack1 == null || stack1 === false ? stack1 : stack1.plugin1), options) : helperMissing.call(depth0, "code", ((stack1 = depth0.plugins),stack1 == null || stack1 === false ? stack1 : stack1.plugin1), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<p>demo源码</p>\n<pre><code class=\"lang-javascript\">    <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"title\">demo</span><span class=\"params\">()</span>{</span>\n\n        <span class=\"comment\">//models</span>\n        <span class=\"keyword\">var</span> User = Backbone.Model.extend({\n            defaults:{\n                name: <span class=\"string\">'user0'</span>\n            }\n        });\n\n        <span class=\"comment\">//collections</span>\n        <span class=\"keyword\">var</span>  Users = Backbone.Collection.extend({\n            localStorage: <span class=\"keyword\">new</span> Backbone.LocalStorage(<span class=\"string\">'Users'</span>),\n            model: User,\n            initialize: <span class=\"keyword\">function</span>(){\n                window.localStorage.getItem(<span class=\"string\">'Users'</span>) || <span class=\"keyword\">this</span>.localStorage.save();\n            }\n        });\n\n        <span class=\"comment\">//views</span>\n        <span class=\"keyword\">var</span> UserView = Backbone.View.extend({\n            el: $(<span class=\"string\">'#box'</span> + id),\n\n            initialize: <span class=\"keyword\">function</span>(){\n                <span class=\"comment\">//bind this to function</span>\n                console.log(<span class=\"keyword\">this</span>.el);\n                _.bindAll(<span class=\"keyword\">this</span>, <span class=\"string\">'render'</span>, <span class=\"string\">'addItem'</span>);\n\n                <span class=\"keyword\">this</span>.demo = $(<span class=\"keyword\">this</span>.el).find(<span class=\"string\">'#demo'</span> + id);\n                <span class=\"keyword\">this</span>.collection = <span class=\"keyword\">new</span> Users();\n                <span class=\"keyword\">this</span>.listenTo(<span class=\"keyword\">this</span>.collection, <span class=\"string\">'remove'</span>, <span class=\"keyword\">this</span>.render);\n                <span class=\"keyword\">this</span>.listenTo(<span class=\"keyword\">this</span>.collection, <span class=\"string\">'add'</span>, <span class=\"keyword\">this</span>.render);\n                <span class=\"keyword\">this</span>.collection.fetch();\n\n                <span class=\"keyword\">var</span> mobile = $.os.phone || $.os.tablet || <span class=\"literal\">false</span>;\n\n                <span class=\"comment\">//移动设备绑定tap事件，其他绑定click事件</span>\n                <span class=\"keyword\">this</span>.events[(mobile ? <span class=\"string\">'tap'</span> : <span class=\"string\">'click'</span>) + <span class=\"string\">' #add'</span>] = <span class=\"keyword\">this</span>.addItem;\n                <span class=\"keyword\">this</span>.events[(mobile ? <span class=\"string\">'tap'</span> : <span class=\"string\">'click'</span>) + <span class=\"string\">' #clear'</span>] = <span class=\"keyword\">this</span>.clear;\n            },\n\n            template: <span class=\"keyword\">function</span>(options){\n                <span class=\"keyword\">var</span> result = <span class=\"string\">''</span>;\n                _.each(options.models, <span class=\"keyword\">function</span>(value, key){\n                    console.log(value.get(<span class=\"string\">'name'</span>));\n                    result += <span class=\"string\">'&lt;span&gt;'</span> + value.attributes.name + <span class=\"string\">'&lt;/span&gt; '</span>;\n                });\n                console.log(result);\n                <span class=\"keyword\">return</span> result;\n            },\n\n            render: <span class=\"keyword\">function</span>(){\n                <span class=\"keyword\">this</span>.demo.html(<span class=\"keyword\">this</span>.template(<span class=\"keyword\">this</span>.collection));\n                <span class=\"keyword\">return</span> <span class=\"keyword\">this</span>;\n            },\n\n            events: {\n                <span class=\"comment\">/* dom事件监听应写在这\n                'tap #add': 'addItem',\n                'click #add': 'addItem',\n                'click #clear': 'clear',\n                'tap #clear': 'clear'\n                */</span>\n            },\n\n            addItem: <span class=\"keyword\">function</span>(){\n                <span class=\"keyword\">this</span>.collection.create({\n                    name: <span class=\"string\">'user'</span> + (<span class=\"keyword\">this</span>.collection.length + <span class=\"number\">1</span>)\n                });\n                console.log(<span class=\"string\">'collection add'</span>);\n            },\n\n            clear: <span class=\"keyword\">function</span>(){\n                <span class=\"comment\">//collection中的model被destroy时会触发collection的remove事件</span>\n                _.invoke(<span class=\"keyword\">this</span>.collection.toArray(), <span class=\"string\">'destroy'</span>);\n            }\n        });\n        <span class=\"keyword\">new</span> UserView();\n    }</code></pre>\n\r\n    </div>\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["markdown"]["OverView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section data-magellan-destination=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <a name=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\r\n    <div class=\"markdown\">\r\n        <h2>概述</h2>\n<h3>为什么写这篇文章</h3>\n<p>接触前端一年了，瞎摸过来这么久一直很希望看到一个完整的前端构建流程，遗憾没找到相关文章，所以自己在做这个网页的时候顺便纪录下来自己从架构到部署的整个过程。</p>\n<h3>这是个什么网页</h3>\n<p>我一直希望有个网站可以让我用markdown写文章，并且可以在markdown中插入自己的demo（不是源码），于是就做了这么个网页让我可以轻松发布自己的文章。</p>\n<h3>使用资源分析</h3>\n<p>网上前端资源非常丰富，做一个网页完全没必要重复造轮子，下面是我做这个网页用到的工具及其分析。</p>\n<ol>\n<li><p>响应式css框架：Foundation 4\n很多人听到响应式会第一时间想到Bootstrap，但在网上查询后我发现很多人再说Bootstrap在移动端的性能并不好，甚至会拖慢应用，很大一部分原因是因为Bootstrap只采用jQuery这么个在移动端上并不太适合的库。而Foundation4在移动端采用Zepto，并且采用mobile first概念（就是说首先为小屏幕设计，随着屏幕逐渐增大，层次越复杂，可以和&quot;渐进增强&quot;类比）。\nBootstrap和Foundation的详细对比大家可以参见<a href=\"http://abetteruserexperience.com/2013/05/twitter-bootstrap-vs-foundation-4-which-one-is-right-for-you/\">twitter-bootstrap-vs-foundation-4-which-one-is-right-for-you</a>（注意，这里比较的Bootstrap版本还比较老）\n感觉Foundation 4 在国内使用群还比较少，所以教程还是参见官网吧。\n但是有一点比较奇怪的是Foundation 4的官方<a href=\"http://foundation.zurb.com/docs/\">Docs</a>在我的移动设备上仍会卡顿。是html文件太大？还是Foundation 4的css太臃肿？ 在之后真正进入开发时我会作出对比。</p>\n</li>\n<li><p>DOM操作库：Zepto\n为什么选择Zepto？因为Zepto性能比其他DOM操作库在webkit上表现好太多了。而webkit又是IOS和Android上主力的浏览器核心。部分dom操作性能对比请查看<a href=\"http://jsperf.com/jqm3/103\">http://jsperf.com/jqm3/103</a></p>\n</li>\n<li><p>模板解释引擎：HandleBars\n其他模版引擎也可以，只是这里我比较喜欢Handlebars而已。模版解释的好处在于不再需要再写大量而不清晰的js插入dom结构语句。此外，我将回用Handlebars往markdown解析后的文件中插入demo。</p>\n</li>\n<li><p>前端模块化：seajs\n要么requirejs，要么seajs，为啥选seajs，请查看seajs处的解释\n架构工具：yeoman</p>\n</li>\n<li><p>提高开发效率和规范\n移动端动画：采用css3动画实现页面切换而不是传统的setTimeOut调整dom的样式，</p>\n</li>\n<li><p>css预编译：Sass\n因为用到了foundation 4，而foundaton 4 官方版本又拥有Sass版本，所以用上了Sass</p>\n</li>\n<li><p>测试：CasperJS\n感觉上mocha,jasmine更偏向于本地纯js调试，而CasperJS这基于PhantomJS的工具则更适合浏览器调试</p>\n</li>\n</ol>\n\r\n    </div>\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["markdown"]["build"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<section data-magellan-destination=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <a name=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\r\n    <div class=\"markdown\">\r\n        <h2>部署</h2>\n<p>经过上面的步骤,网站的组织已经比较清晰,再编辑完网页所有功能后,进入下一步----部署.</p>\n<p>yeoman配置的<code>Gruntfile.js</code>并不能适应所有自动化,我们需要对其进行适当修改.</p>\n<p>先来看看我的<code>grunt build</code>执行了哪些任务</p>\n<pre><code class=\"lang-javascript\">   grunt.registerTask(<span class=\"string\">'build'</span>, [\n        <span class=\"string\">'clean:dist'</span>,<span class=\"comment\">//清空临时目录</span>\n        <span class=\"string\">'compass:dist'</span>,<span class=\"comment\">//编译SCSS</span>\n        <span class=\"string\">'markdown'</span>,<span class=\"comment\">//将markdown转换为handlebars模板格式</span>\n        <span class=\"string\">'handlebars:markdown'</span>,<span class=\"comment\">//预编译handlebars</span>\n        <span class=\"string\">'handlebars:compile'</span>,<span class=\"comment\">//预编译handlebars</span>\n        <span class=\"string\">'concat:template'</span>,<span class=\"comment\">//连接handlebars预编译后的文件以及助手</span>\n        <span class=\"string\">'wrap:template'</span>,<span class=\"comment\">//对连接后的文件进行CMD封装</span>\n        <span class=\"string\">'transport:seajs'</span>,<span class=\"comment\">//获取CMD模块ID</span>\n        <span class=\"string\">'concat:seajs'</span>,<span class=\"comment\">//连接CMD模块</span>\n        <span class=\"string\">'uglify:seajs'</span>,<span class=\"comment\">//压缩CMD模块连接而成的文件</span>\n        <span class=\"string\">'useminPrepare'</span>,\n        <span class=\"string\">'imagemin'</span>,<span class=\"comment\">//压缩图像</span>\n        <span class=\"string\">'htmlmin'</span>,<span class=\"comment\">//压缩html文件</span>\n        <span class=\"string\">'cssmin'</span>,<span class=\"comment\">//压缩css</span>\n        <span class=\"string\">'copy'</span>,<span class=\"comment\">//将没处理过而网站又需要的文件拷贝过来</span>\n        <span class=\"string\">'rev'</span>,<span class=\"comment\">//为css和js添加版本号</span>\n        <span class=\"string\">'usemin'</span>\n    ]);</code></pre>\n<p><code>usemin</code>的作用请看官方说明</p>\n<blockquote>\n<p>Replaces references to non-optimized scripts or stylesheets into a set of HTML files (or any templates/views).</p>\n</blockquote>\n<p>屌丝翻译:替换HTML文件(或任意模板文件)的引用</p>\n<p>举个例子,<code>main.css</code>经处理后变成<code>main-rev.css</code>,usemin就是把html中引用到<code>main.css</code>的地方都改为<code>main-rev.css</code></p>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['md-sub'] || depth0['md-sub']),stack1 ? stack1.call(depth0, ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options) : helperMissing.call(depth0, "md-sub", ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<h3>连接CMD模块</h3>\n<p>这里我只讲述文档比较少的transport和concat,这两个任务分别用到了<code>grunt-cmd-transport</code>和<code>grunt-cmd-concat</code></p>\n<h4>transport</h4>\n<p>对于为分配ID的CMD模块,我们首先使用<code>grunt-cmd-transport</code>抽取其ID,先上代码</p>\n<pre><code class=\"lang-javascript\">        transport: {\n            seajs: {\n                options: {\n                    alias: {\n                        underscore: <span class=\"string\">'underscore'</span>,\n                        backbone: <span class=\"string\">'backbone'</span>,\n                        $: <span class=\"string\">'$'</span>,\n                        modernizr: <span class=\"string\">'modernizr'</span>\n                    },\n                    paths: [\n                        <span class=\"string\">'app/public/scripts/example/static'</span>,\n                        <span class=\"string\">'app/public/scripts/sea-modules'</span>,\n                        <span class=\"string\">'.build'</span>\n                    ]\n                },\n                files: [\n                    {\n                        cwd: <span class=\"string\">'app/public/scripts/example'</span>,\n                        src: [\n                            <span class=\"string\">'static/{,*/,*/*/}*.js'</span>,\n                            <span class=\"string\">'templates/*.js'</span>,\n                            <span class=\"string\">'utils/*.js'</span>,\n                            <span class=\"string\">'logic/*.js'</span>\n                        ],\n                        dest: <span class=\"string\">'.build'</span>\n                    }\n                ]\n            }\n        }</code></pre>\n<ul>\n<li><p>解释一下options</p>\n<ul>\n<li><p><code>alias</code>可以指向一个文件也可以指向自定义的别名,alias中的键值对(假设为<code>key:value</code>)的表示需要处理的文件中若含有<code>require(&#39;key&#39;)</code>则用<code>require(&#39;value&#39;)</code>来代替</p>\n</li>\n<li><p><code>paths</code>是一个数组,表示需要用到的模块路径,例如处理的文件中需要<code>require(&#39;logic&#39;)</code>,而logic模块并不在默认路径中,则需要在<code>paths</code>中添加logic模块所在的路径<em>(注意,此处应把<code>file.dest</code>指向的路径也添加进去)</em></p>\n</li>\n<li><p><code>idleading</code>我们可以用这属性给所有抽取的ID添加一个前缀</p>\n</li>\n</ul>\n</li>\n<li><p>然后是抽取</p>\n<ul>\n<li>抽取顺序和<code>file.src</code>这数组的顺序相同</li>\n<li>若模块a依赖模块b,则必须先抽取b再抽取a</li>\n<li>抽取到<code>file.dest</code>指向的路径下</li>\n</ul>\n</li>\n<li><p>模块ID的命名方式</p>\n<p>ID名字 = options.idleading + 文件相对CWD路径</p>\n<p>例如</p>\n<p>假设无idleading,cwd为&#39;app/build/scripts&#39;,dest为&#39;.build&#39;,文件相对路径为&#39;logic/a&#39;则ID名字是&#39;logic/a&#39;,抽取出来的目录结构是</p>\n<pre><code><span class=\"string\">.</span><span class=\"comment\">build</span>\n  <span class=\"comment\">|</span>-<span class=\"literal\">-</span><span class=\"comment\">logic</span>\n       <span class=\"comment\">|</span>-<span class=\"literal\">-</span><span class=\"comment\">a</span>.<span class=\"comment\">js</code></pre>\n<h4>concat</h4>\n<p>模块抽取完后就要开始进行连接.还是先上代码</p>\n<pre><code class=\"lang-javascript\">       concat: {\n          seajs: {\n              options: {\n                  relative: <span class=\"literal\">true</span>,\n                  include: <span class=\"string\">'all'</span>,\n                  paths: [\n                      <span class=\"string\">'app/public/scripts/sea-modules'</span>,\n                      <span class=\"string\">'app/public/scripts/example/static'</span>,\n                      <span class=\"string\">'.build'</span>\n                  ]\n              },\n              files: {\n                  <span class=\"string\">'dist/public/scripts/main.js'</span>: [<span class=\"string\">'.build/{,*/,*/*/}*.js'</span>]\n              }\n          }\n      }</code></pre>\n<p>options的<code>paths</code>解释和transport的<code>options.paths</code>一样</p>\n</li>\n</ul>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['md-sub'] || depth0['md-sub']),stack1 ? stack1.call(depth0, ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub2), options) : helperMissing.call(depth0, "md-sub", ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub2), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<h3>部署优先策略</h3>\n<p>这是我自己应用的一个策略,也就是尽量保证一步部署,不再对部署后的文件上进行手工修改</p>\n<p>usemin并不会对seajs的引用进行修改,为了实现部署优先,我们在index.html应采用下面方式</p>\n<pre><code class=\"lang-html\">    <span class=\"comment\">&lt;!-- 引入seajs --&gt;</span>\n    <span class=\"tag\">&lt;<span class=\"title\">script</span> <span class=\"attribute\">src</span>=<span class=\"value\">\"public/scripts/sea-modules/seajs/seajs/2.1.1/sea.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"tag\">&lt;/<span class=\"title\">script</span>&gt;</span>\n    <span class=\"comment\">&lt;!-- 引入seajs配置文件 --&gt;</span>\n    <span class=\"tag\">&lt;<span class=\"title\">script</span> <span class=\"attribute\">src</span>=<span class=\"value\">\"public/scripts/config.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"tag\">&lt;/<span class=\"title\">script</span>&gt;</span>\n    <span class=\"comment\">&lt;!-- 引入seajs合并后的文件, 路径为合并后的文件相对路径 --&gt;</span>\n    <span class=\"tag\">&lt;<span class=\"title\">script</span> <span class=\"attribute\">src</span>=<span class=\"value\">\"public/scripts/main.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"tag\">&lt;/<span class=\"title\">script</span>&gt;</span>\n    <span class=\"comment\">&lt;!-- 调用启动模块 --&gt;</span>\n    <span class=\"tag\">&lt;<span class=\"title\">script</span>&gt;</span><span class=\"javascript\">\n        seajs.use([<span class=\"string\">'modernizr'</span>,<span class=\"string\">'logic/load-markdown'</span>]);\n    </span><span class=\"tag\">&lt;/<span class=\"title\">script</span>&gt;</span></code></pre>\n<p>解释一下引入合并后的文件的原因:</p>\n<ul>\n<li>合并后的文件在开发调试时并不存在,调用该文件对开发不会造成任何影响</li>\n<li>合并后的文件并不符合CMD模块,只是一系列CMD模块的定义</li>\n</ul>\n<p>解释一下部署后的调用启动模块</p>\n<ul>\n<li>引入合并后的文件并不会执行模块中任何函数</li>\n<li><p>当引入合并后的文件时,会对一系列CMD模块进行define,define过程应该是这样的:</p>\n<p>若define()的参数中含有ID,则先对ID进行路径解释,把解释后的路径添加到<code>seajs.cache</code>中</p>\n</li>\n<li>seajs调用模块时会先去查看<code>seajs.cache</code>中是否含有解释后的路径,若有,则直接调用该路径对应的模块,若无则想服务器获取该模块</li>\n<li>seajs.use()调用模块的相对路径不是base,而是html所在路径.而只有调用的模块路径的解释路径和模块ID的解释路径相同才能正确调用, 为了部署优先,最好为启动模块设置顶级标识,应为顶级标识才能在<code>seajs.use</code>和<code>require</code>时获得相同的解释路径</li>\n</ul>\n\r\n    </div>\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["markdown"]["foundation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<section data-magellan-destination=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <a name=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\r\n    <div class=\"markdown\">\r\n        <h2>HTML和CSS框架</h2>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['md-sub'] || depth0['md-sub']),stack1 ? stack1.call(depth0, ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options) : helperMissing.call(depth0, "md-sub", ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<h3>Foundation4</h3>\n<p>Foundation 4是一个CSS框架，有CSS版本和SCSSS版本，都可以在<a href=\"http://foundation.zurb.com/download.php\">官网</a>获得。</p>\n<p>直接上我的html代码先</p>\n<pre><code class=\"lang-html\">    <span class=\"tag\">&lt;<span class=\"title\">div</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"row\"</span>&gt;</span>\n        <span class=\"tag\">&lt;<span class=\"title\">div</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"small-12 large-9 columns\"</span>&gt;</span>\n            <span class=\"tag\">&lt;<span class=\"title\">h1</span>&gt;</span>\n                前端工作流程\n            <span class=\"tag\">&lt;/<span class=\"title\">h1</span>&gt;</span>\n            <span class=\"tag\">&lt;<span class=\"title\">hr</span>/&gt;</span>\n            <span class=\"tag\">&lt;<span class=\"title\">article</span>&gt;</span><span class=\"tag\">&lt;/<span class=\"title\">article</span>&gt;</span>\n        <span class=\"tag\">&lt;/<span class=\"title\">div</span>&gt;</span>\n        <span class=\"tag\">&lt;<span class=\"title\">button</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"hide-for-medium hide-for-large nav-btn\"</span>&gt;</span><span class=\"tag\">&lt;/<span class=\"title\">button</span>&gt;</span>\n        <span class=\"tag\">&lt;<span class=\"title\">aside</span> <span class=\"attribute\">class</span>=<span class=\"value\">\"hide-for-small small-6 large-3 columns\"</span> <span class=\"attribute\">data-magellan-expedition</span>=<span class=\"value\">\"fixed\"</span>&gt;</span><span class=\"tag\">&lt;/<span class=\"title\">aside</span>&gt;</span>\n    <span class=\"tag\">&lt;/<span class=\"title\">div</span>&gt;</span></code></pre>\n<p>这里解释一下Foundation的栅栏表格。</p>\n<ul>\n<li><code>columns</code>表示行，<code>row</code>表示列</li>\n<li><p><code>.columns</code>元素必须得是<code>.row</code>的后继元素</p>\n</li>\n<li><p>默认版本的Foundation中，把行分成12份，使用如下：</p>\n<ul>\n<li><code>small-1</code>表示该列宽度占最近<code>.row</code>祖先元素的1/12</li>\n<li><code>small-3</code>表示该列宽度占最近<code>.row</code>祖先元素的3/12</li>\n<li><code>small-3 large-4</code>表示该列宽度在小屏幕中占3/12,在大屏幕中占4/12</li>\n<li>上述例子中的<code>small</code>,<code>large</code>表示屏幕大小，可在<code>_global.scss</code>中找到定义，可以在该文件中搜索关键字<code>$small-screen</code></li>\n</ul>\n</li>\n</ul>\n<p>Foundation的css使用就解释到这，更多请查看<a href=\"http://foundation.zurb.com/docs/\">API</a></p>\n<p>然后来看看Foundation的js插件部分,foundation依赖于zepto或jQuery,引入其他插件前需要先引入<code>foundation.js</code></p>\n<p>若使用zepto请注意zepto是可定制的,foundation使用的是他自己定制的zepto,所以请使用<code>foundation/js/vendor/zepto.js</code></p>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['md-sub'] || depth0['md-sub']),stack1 ? stack1.call(depth0, ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub2), options) : helperMissing.call(depth0, "md-sub", ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub2), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<h3>SCSS</h3>\n<p>鉴于SCSS的方便，我采用了SCSS版本。这就带来了个问题，每次都要编译才能被浏览器解释。grunt这时候就起作用了。</p>\n<p>首先说一下我SCSS的配置</p>\n<ul>\n<li>Foundation是通过bower载入的，所以Foundation的路径是<code>app/public/bower_components/foundation</code></li>\n<li>自定义的SCSS我选择放在<code>app/resource/scss</code>中</li>\n<li>编译后的CSS文件放在<code>app/public/style/scss</code>中</li>\n<li>所有CSS文件由<code>app/public/style/main.css</code>通过<code>@import</code>引入，html中只导入该css</li>\n</ul>\n<p>然后就是grunt的配置了</p>\n<ul>\n<li>首先得往系统中安装compass（需要ruby环境）：\n<code>gem install compass</code></li>\n<li>yeoman构建项目时，<code>package.json</code>中已含有<code>grunt-contrib-compass</code>插件，该插件可以对SCSS进行编译</li>\n<li><p>然后可以开始配置<code>Gruntfile.js</code>:</p>\n<pre><code class=\"lang-javascript\">...\ngrunt.initConfig({\n  ...\n  <span class=\"comment\">//实时监控</span>\n  watch: {\n    ...   \n    compass: {\n              files: [<span class=\"string\">'&lt;%= yeoman.app %&gt;/resource/scss/{,*/}*.{scss,sass}'</span>],<span class=\"comment\">//监控的文件路径</span>\n              tasks: [<span class=\"string\">'compass'</span>]<span class=\"comment\">//若监控文件改动，执行的任务</span>\n          },\n    ...\n  },\n  <span class=\"comment\">//compass配置</span>\n  comapss: {\n        <span class=\"comment\">//全局配置</span>\n        options: {\n              sassDir: <span class=\"string\">'&lt;%= yeoman.app %&gt;/resource/scss'</span>,\n              cssDir: <span class=\"string\">'app/public/styles/scss'</span>,\n              imagesDir: <span class=\"string\">'&lt;%= yeoman.app %&gt;/public/images'</span>,\n              javascriptsDir: <span class=\"string\">'&lt;%= yeoman.app %&gt;/public//scripts'</span>,\n              fontsDir: <span class=\"string\">'&lt;%= yeoman.app %&gt;/public/styles/fonts'</span>,\n              <span class=\"comment\">//此处配置SCSS的引入源路径，我添加了foundation的SCSS路径和animate的SCSS路径</span>\n              importPath: [\n                  <span class=\"string\">'&lt;%= yeoman.app %&gt;/public/bower_components'</span>,\n                  <span class=\"string\">'&lt;%= yeoman.app %&gt;/public/bower_components/foundation/scss'</span>,\n                  <span class=\"string\">'&lt;%= yeoman.app %&gt;/public/bower_components/animate.scss/source'</span>\n              ],\n              relativeAssets: <span class=\"literal\">true</span>\n          },\n          <span class=\"comment\">//局部配置，覆盖同名项</span>\n          dist: {},\n          server: {\n              options: {\n                  debugInfo: <span class=\"literal\">true</span>\n              }\n          }\n  },\n  ...\n});\n\n<span class=\"comment\">//往server任务中插入compass子任务，执行该任务命令为grunt server</span>\ngrunt.registerTask(<span class=\"string\">'server'</span>, [\n    ...<span class=\"comment\">//其他任务,</span>\n    <span class=\"string\">'compass:server'</span>,\n    ...<span class=\"comment\">//其他任务</span>\n])\n...</code></pre>\n<p>在命令行中执行grunt server,即可实现SCSS的实施编译</p>\n</li>\n</ul>\n\r\n    </div>\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["markdown"]["handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section data-magellan-destination=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <a name=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\r\n    <div class=\"markdown\">\r\n        <h2>HTML模版</h2>\n<p>在HTML和CSS框架部分我们已经完成了HTML框架的构建。</p>\n<p>下面我们开始使用HTML模版来编写网页需要模版。</p>\n<p>HTML模版引擎的好处这里就不说了，在非常多的模版引擎中我选择了Handlebars，仅仅是因为我喜欢这个模版。</p>\n<p>模版的编写就不说了，这部分主要还是描述如何模版文件的放置结构和实现模版的预编译。</p>\n<p>首先来看看目录结构</p>\n<ul>\n<li>模版文件我放置在<code>app/resource/templates</code>中, 后缀名是<code>.hbs</code></li>\n<li>自定义模版工具(就是helpers之类的东西)放置在<code>app/resource/templates/helpers</code>中</li>\n<li><code>.hbs</code>这些文件编译生成的文件我放置在<code>.tmp/templates</code>这临时文件夹中</li>\n<li>最后，把<code>.tmp/templates</code>中的文件和helpers连接在一起，生成<code>.tmp/template.js</code></li>\n</ul>\n<p>下面来看看预编译</p>\n<ul>\n<li><p>首先，为什么要预编译？</p>\n<p>模版文件并不能直接被js执行，需要经Handlebars解释成一个函数后才能被执行，也就是说浏览器得先执行模版解释，这对性能并不好的移动设备来说无疑带来了性能损耗。所以更好的做法是在服务器段就把这些模版文件预编译成可执行的函数。</p>\n</li>\n<li><p>那该怎么实现预编译呢？</p>\n<p>grunt这时候又来了。</p>\n<p>预编译Handlebars需要<code>grunt-contrib-handlebars</code>这个插件，载入方式还是在<code>package.json</code>中添加该项，然后<code>npm install</code></p>\n<p>那接下来看看这插件的配置(<code>grunt.initConfig()中的配置</code>)</p>\n<pre><code class=\"lang-javascript\">handlebars: {\n          compile: {\n              options: {\n                  <span class=\"comment\">//函数所在命名空间</span>\n                  namespace: <span class=\"string\">\"Handlebars.templates\"</span>,\n                  <span class=\"comment\">//函数名称格式</span>\n                  processName: <span class=\"function\"><span class=\"keyword\">function</span> <span class=\"params\">(filename)</span> {</span>\n                      <span class=\"keyword\">return</span> filename\n                          .replace(<span class=\"regexp\">/app\\/resource\\/templates\\//</span>, <span class=\"string\">''</span>)\n                          .replace(<span class=\"regexp\">/\\.hbs$/</span>, <span class=\"string\">''</span>);\n                  }\n              },\n              files: {\n                  <span class=\"comment\">//'生成文件':[需要编译的模版文件]</span>\n                  <span class=\"string\">'.tmp/templates/template.js'</span>: [<span class=\"string\">'&lt;%= yeoman.app %&gt;/resource/templates/*.hbs'</span>]\n              }\n          }\n      }</code></pre>\n<p>上述代码实现下列转换(文件所在路径都是<code>app/resource/templates</code>)</p>\n<ul>\n<li>a.hbs-&gt;Handlebars.templates.a</li>\n<li>b.hbs-&gt;Handlebars.templates.b</li>\n</ul>\n</li>\n<li><p>把helpers也合并进来</p>\n<p>这里用到<code>grunt-contrib-concat</code>,注意文件连接顺序，应该是先连接helpers类文件，应为模版中可能会用到自定义的helper，只有先定义了helper，后面的模版函数才能正常执行</p>\n</li>\n<li><p>HTML引人预编译的文件</p>\n<p>预编译带来的好处还有一个：我们不再需要引入完整的handlebars.js和<code>.hbs</code>这类模版文件,只需要引入handlebars.runtime.js(和handlebars.js相比，没有模版解释函数)和预编译生成的文件<code>.tmp/template.js</code></p>\n</li>\n<li><p>实时编译监控</p>\n<p>我们可以添加监控的文件和任务以实现<code>.hbs</code>这类文件的实时编译，这样我们只要直接修改模版文件，并不会因为预编译而给调试修改带来麻烦。</p>\n</li>\n</ul>\n\r\n    </div>\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["markdown"]["seajs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<section data-magellan-destination=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <a name=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\r\n    <div class=\"markdown\">\r\n        <h2>前端模块化</h2>\n<p>接下来让我们看看该如何组织js文件。</p>\n<p>以前我们引入js文件的方式是：</p>\n<pre><code class=\"lang-html\"><span class=\"tag\">&lt;<span class=\"title\">script</span> <span class=\"attribute\">src</span>=<span class=\"value\">\"\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"tag\">&lt;/<span class=\"title\">script</span>&gt;</span></code></pre>\n<p>或者是用jQuery<code>$.ajax()</code></p>\n<p>但这些引入方式有一个致命缺陷就是文件依赖问题，我们更希望看到的是像java一样可以<code>import</code>，于是一部分前端的前辈们就致力于解决模块化问题。</p>\n<p>seajs(CMD规范)和requirejs(AMD规范)就是解决模块化问题比较好的两个库。</p>\n<p>二者的详细对比我就不说了，大家可以看看<a href=\"http://www.douban.com/note/283566440/\">SeaJS与RequireJS最大的区别</a>。</p>\n<p>虽然模块化的确很有用，但无可否认目前大多数的库还是传统的写法（外国也有一部分库已支持AMD），也就是说需要这些s库进行人工CMD化或AMD化。国际上的一些比较著名的库我还没找到原生支持CMD，都需要人工CMD化。</p>\n<p>而我这次项目选择的是seajs，原因是二者在构建上都没有成熟的方案，seajs的生态圈更本地化（作者是玉伯大大），相比一堆英文的交流我更愿意用中文交流，也算是为国内前端生态圈尽一份力吧。</p>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['md-sub'] || depth0['md-sub']),stack1 ? stack1.call(depth0, ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options) : helperMissing.call(depth0, "md-sub", ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<h3>目录结构和seajs配置</h3>\n<p>我在这讲的主要是自己在使用seajs过程中遇到的问题和解决方案，想查看API者请移驾<a href=\"https://github.com/seajs/seajs/issues/266\">https://github.com/seajs/seajs/issues/266</a>，如果玉伯大大看到这篇文章，容小弟稍微抱怨下用github作参考文档真心不太容易用。。。资料找起来还是挺费劲的。</p>\n<h4>目录结构</h4>\n<p>先规范一下scripts目录结构</p>\n<p><img src=\"/public/images/seajs1.png\" alt=\"scripts目录结构\"></p>\n<p>以下描述的相对路径是<code>app/public/scripts</code></p>\n<ul>\n<li><code>sea-modules</code>放置的是通过spm(下面会提到)加载的库</li>\n<li><code>example</code><ul>\n<li><code>example/logic</code>放置的是自己编写的逻辑模块</li>\n<li><code>example/utils</code>放置的是CMD化后的开源js库</li>\n<li><code>example/templates</code>放置的是CMD化后的模版文件(例如前文提到的app目录下的<code>.tmp/templates.js</code>,.tmp下的文件还未CMD化)</li>\n<li><code>example/static</code>放置的是已经CMD化的静态资源文件</li>\n</ul>\n</li>\n</ul>\n<h4>seajs配置</h4>\n<p>注意seajs的路径解释规则,请查看<a href=\"https://github.com/seajs/seajs/issues/258\">模块标志</a></p>\n<p>这里注意<code>paths</code>中定义的路径就是其直接路径,并不会互相解释,例如</p>\n<pre><code class=\"lang-javascript\">seajs.config({\n    <span class=\"comment\">//base默认为'app/public/scripts/sea-modules'</span>\n    paths:{\n      scripts: <span class=\"string\">'/public/scripts'</span>,\n      logic: <span class=\"string\">'scripts/logic'</span> <span class=\"comment\">//此处并不会被解释为'/public/scripts/logic',而是'app/scripts/sea-modules/logic'</span>\n    }\n});</code></pre>\n<p>此外paths的配置还应注意不应以&#39;/&#39;结尾(仅限2.1.1版本),详情请见<a href=\"https://github.com/seajs/seajs/issues/926\">https://github.com/seajs/seajs/issues/926</a></p>\n<p>这个问题是因为使用seajs还应注意一个初学者不太能发现的<a href=\"https://github.com/seajs/seajs/issues/930\">ID 和路径匹配原则</a></p>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['md-sub'] || depth0['md-sub']),stack1 ? stack1.call(depth0, ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub2), options) : helperMissing.call(depth0, "md-sub", ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub2), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<h3>CMD化</h3>\n<p>seajs2.0开始推荐将所有js封装成CMD模块.</p>\n<p>对于非CMD的js我们需要对其进行封装,我说一下封装foundation.js这个文件(依赖dom选择器)</p>\n<pre><code class=\"lang-javascript\">define(<span class=\"keyword\">function</span>(require, exports, module){\n    <span class=\"keyword\">var</span> $ = require(<span class=\"string\">'$'</span>);<span class=\"comment\">//写入依赖,需要再seajs配置中配置alias的$</span>\n    ...<span class=\"comment\">//源代码</span>\n    <span class=\"keyword\">return</span> Foundation;\n})</code></pre>\n<p>而对于类似于模板预编译成的文件,我建议使用grunt对其进行封装,<code>grunt-contrib-concat</code>支持对文件进行包装,这里不作描述</p>\n\r\n    </div>\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["markdown"]["yeoman"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<section data-magellan-destination=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <a name=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\r\n    <div class=\"markdown\">\r\n        <h2>项目初始化</h2>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['md-sub'] || depth0['md-sub']),stack1 ? stack1.call(depth0, ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options) : helperMissing.call(depth0, "md-sub", ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub1), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<h3>yeoman是什么</h3>\n<p>工具选好了之后，我们开始构建项目了。首先介绍一下yeoman，借用一下<a href=\"http://www.infoq.com/cn/news/2012/09/yeoman\">infoq</a>上的介绍：</p>\n<blockquote>\n<p>Yeoman是由Paul Irish、Addy Osmani、Sindre Sorhus、Mickael Daniel、Eric Bidelman和Yeoman社区共同开发的一个项目。它旨在为开发者提供一系列健壮的工具、程序库和工作流，帮助他们快速构建出漂亮、引人注目的Web应用。Yeoman拥有如下特性：</p>\n<ul>\n<li>快速创建骨架应用程序——使用可自定义的模板（例如：HTML5、Boilerplate、Twitter Bootstrap等）、AMD（通过RequireJS）以及其他工具轻松地创建新项目的骨架。</li>\n<li>自动编译CoffeeScrip和Compass——在做出变更的时候，Yeoman的LiveReload监视进程会自动编译源文件，并刷新浏览器，而不需要你手动执行。</li>\n<li>自动完善你的脚本——所有脚本都会自动针对jshint（软件开发中的静态代码分析工具，用于检查JavaScript源代码是否符合编码规范）运行，从而确保它们遵循语言的最佳实践。</li>\n<li>内建的预览服务器——你不需要启动自己的HTTP服务器。内建的服务器用一条命令就可以启动。</li>\n<li>非常棒的图像优化——Yeoman使用OptPNG和JPEGTran对所有图像做了优化，从而你的用户可以花费更少时间下载资源，有更多时间来使用你的应用程序。</li>\n<li>生成AppCache清单——Yeoman会为你生成应用程序缓存的清单，你只需要构建项目就好。</li>\n<li>“杀手级”的构建过程——你所做的工作不仅被精简到最少，让你更加专注，而且Yeoman还会优化所有图像文件和HTML文件、编译你的CoffeeScript和Compass文件、生成应用程序的缓存清单，如果你使用AMD，那么它还会通过r.js来传递这些模块。这会为你节省大量工作。</li>\n<li>集成的包管理——Yeoman让你可以通过命令行（例如，yeoman搜索查询）轻松地查找新的包，安装并保持更新，而不需要你打开浏览器。</li>\n<li>对ES6模块语法的支持——你可以使用最新的ECMAScript 6模块语法来编写模块。这还是一种实验性的特性，它会被转换成eS5，从而你可以在所有流行的浏览器中使用编写的代码。</li>\n<li>PhantomJS单元测试——你可以通过PhantomJS轻松地运行单元测试。当你创建新的应用程序的时候，它还会为你自动创建测试内容的骨架。</li>\n</ul>\n</blockquote>\n<p>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers['md-sub'] || depth0['md-sub']),stack1 ? stack1.call(depth0, ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub2), options) : helperMissing.call(depth0, "md-sub", ((stack1 = depth0.subs),stack1 == null || stack1 === false ? stack1 : stack1.sub2), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<h3>使用yeoman</h3>\n<h4>安装yeoman</h4>\n<p>yeoman是基于node.js，首先得安装node.js，然后在命令行中安装yeoman</p>\n<pre><code><span class=\"title\">npm</span> install -g yo grunt-cli bower</code></pre>\n<p><em>mac或linux下npm安装到全局需要root权限</em></p>\n<h4>使用yeoman</h4>\n<h5>yo</h5>\n<p>yo用于构建项目的手足架。</p>\n<p>刚安装完的yeoman（1.0版本）中是不含模版的，我先去找了个模版generator-backbone</p>\n<pre><code><span class=\"title\">npm</span> install -g generator-backbone</code></pre>\n<p>然后使用该模版开始构建</p>\n<pre><code><span class=\"title\">mkdir</span> myapps\n<span class=\"title\">cd</span> myapps\n<span class=\"title\">yo</span> bakcbone myapps</code></pre>\n<p>命令行提示是否使用twitter和coffeejs，该项目中都用不到，所以都不选</p>\n<p>此时myapps的目录结构如下</p>\n<p><img src=\"/public/images/yeoman1.png\" alt=\"修改前\"></p>\n<p>但该架构并不完全满足我的需求，于是我进行了手动修改，修改后结构如下</p>\n<p><img src=\"/public/images/yeoman2.png\" alt=\"修改前\"></p>\n<p>yo的使用基本结束。</p>\n<p>之后本文提到的路径都是<code>myapps</code>的相对路径</p>\n<h5>bower</h5>\n<p>bower用于载入网页需要的组件</p>\n<p>由于目录变更，我们需要修改bower的路径，bower的路径在<code>.bowerrrc</code>文件中，将其内容改为</p>\n<pre><code class=\"lang-json\">{\n    \"<span class=\"attribute\">directory</span>\": <span class=\"value\"><span class=\"string\">\"app/public/bower_components\"</span>\n}</span></code></pre>\n<p><code>bower.json</code>文件是用来描述需要载入的组件</p>\n<h5>grunt</h5>\n<p>grunt用于自动化，例如编译scss文件，编译coffe文件，部署等。</p>\n<p>因为myapps的目录修改过,所以<code>Gruntfile.js</code>中的相关路径也得修改。</p>\n<p>后面的开发中会大量用到grunt，此处先提一下grunt的一些个人经验</p>\n<ul>\n<li><p>yeoman预置的Gruntfile.js很聪明，已设置为从<code>package.json</code>读取grunt插件并注册，只需修改此文件并执行 <code>npm install</code>,即可注册grunt的插件。</p>\n</li>\n<li><p>在<code>grunt.initConfig()</code>中我们可以配置各种子任务，例如</p>\n<pre><code class=\"lang-javascript\">  grunt.initConfig({\n      copy: {\n                  dist: {\n                      files: [{\n                          expand: <span class=\"literal\">true</span>,\n                          dot: <span class=\"literal\">true</span>,\n                          cwd: <span class=\"string\">'&lt;%= yeoman.app %&gt;'</span>,\n                          dest: <span class=\"string\">'&lt;%= yeoman.dist %&gt;'</span>,\n                          src: [\n                              <span class=\"string\">'*.{ico,txt}'</span>,\n                              <span class=\"string\">'.htaccess'</span>,\n                              <span class=\"string\">'images/{,*/}*.{webp,gif}'</span>\n                          ]\n                      }]\n                  }\n              }\n\n  })</code></pre>\n<p>  然后通过<code>grunt.registerTask()</code>来注册任务，例如</p>\n<pre><code class=\"lang-javascript\">  grunt.registerTask(<span class=\"string\">'default'</span>, [\n       <span class=\"string\">'copy:dist'</span>, <span class=\"comment\">//执行copy下的dist子任务，</span>\n       <span class=\"string\">'copy'</span> <span class=\"comment\">//执行copy下所有任务，执行顺序为定义时的顺序</span>\n  ])</code></pre>\n</li>\n</ul>\n\r\n    </div>\r\n</section>\r\n";
  return buffer;
  });
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["magellan"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers['aside-subTitle'] || depth0['aside-subTitle']),stack1 ? stack1.call(depth0, ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.subs), options) : helperMissing.call(depth0, "aside-subTitle", ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.subs), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "                <section>\r\n                    <p class=\"title\" data-magellan-arrival=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></p>\r\n                    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.subs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </section>\r\n\r\n";
  return buffer;
  });


return Handlebars.templates; 
});