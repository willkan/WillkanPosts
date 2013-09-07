/**
 * Created with JetBrains WebStorm.
 * User: willkan
 * Date: 13-8-21
 * Time: 下午9:45
 * To change this template use File | Settings | File Templates.
 */
define(function(require){
    console.log('begin load md');
    var $ = require('$'),
        templates = require('templates/template');

    require('utils/animationHelper');

    $(function(){
        var $article = $('article'),
            $aside = $('aside'),
            $navBtn = $('.nav-btn'),
            small = $aside.css('display') === 'none';
        if(!small){
            $(document.head).append(
                "<style>" + "aside.columns{position: fixed; left:" +
                    $aside.offset().left + "px; visibility:visible;}</style>"
            );
        } else{
            $(document.head).append(
                "<style>aside.columns{position: fixed; right:0;}</style>"
            );
            $aside.removeClass('hide-for-small');
            $navBtn.removeClass('hide-for-medium hide-for-large');

            $(document.body).animationHelper({
                animateTarget: $aside,
                eventType: 'tap',
                selector: ':not(aside)',
                before: function(target, trigger){
                    var hidden = (target.css('visibility') === 'hidden');
                    if(hidden && trigger.hasClass('nav-btn')){
                        console.log('show');
                        target.animateClass = 'fadeInRight';
                        target.finalClass = 'show-aside';
                        return true;
                    }
                    if(hidden ||
                        trigger.parents('aside').length != 0){
                        console.log('not change');
                        return false;
                    }
                    target.animateClass = 'fadeOutRight';
                    target.finalClass = '';
                    console.log('hide');
                    return true;
                },
                during: function(){
                    if($navBtn.css('display') == 'none'){
                        $navBtn.show();
                    } else{
                        $navBtn.hide();
                    }
                }
            });
        }

        //load posts
        var json = require('static/post-package');

        var articleResult = "",
            asideResult = "",
            callbacks = [];//存放插件的回调函数

        $.each(json.post, function(key, value){
            value.options = value.options || {};
            var options = value.options;
            options.href = value.postName + (new Date()).valueOf();
            //设置子标题锚点
            if(options.subs !== undefined){
                var subs = options.subs;
                for(var item in value.options.subs){
                    subs[item] = {
                        title: subs[item],
                        href: subs[item] + '<' + options.href
                    }
                }
            }
            //填入插件
            if(options.plugins !== undefined){
                var plugins = options.plugins;
                for(var item in value.options.plugins){
                    callbacks.push(plugins[item].callback);
                }
            }
            articleResult += Handlebars.templates.markdown[value.postName](options);
            asideResult += Handlebars.templates.magellan(value);
        });

        $article.html(articleResult);
        $aside.html(asideResult);
        for(var i = 0, l = callbacks.length; i < l; i++){
            callbacks[i]();
        }

        //if not small screen, add the foundation magellan
        if(!small){
            console.log('large,show magellan');
            require.async('foundation/foundation.magellan', function(){
                console.log('foundation init');
                $(document).foundation();
            });
        }

    });
});
