define(function(require){
    var $ = require('$'),
        Modernizr = window.Modernizr || require('modernizr');
    $.extend($.fn,{
        animationHelper:function(options){
            var $trigger = $(this),
                $animateTarget = $(options.animateTarget),
                eventType = options.eventType,
                selector = options.selector,
                after = options.after,
                during = options.during,
                before = options.before || true,
                bubble = options.bubble || false,
                isAnimating = false,
                animEndEventNames = {
                    'WebkitAnimation': 'webkitAnimationEnd',
                    'OAnimation': 'oAnimationEnd',
                    'msAnimation': 'MSAnimationEnd',
                    'animation':  'animationEnd'
                },
                animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
                support = Modernizr.cssanimations;

            if($animateTarget.length == 0){
                $animateTarget = $trigger;
            }

            $animateTarget.animateClass = options.animateClass || '';
            $animateTarget.finalClass = options.finalClass || '';

            function init(){
                $animateTarget.each(function(){
                    var item = $(this);
                    item.data('originClassList', $animateTarget.attr('class'));
                });

                selector ? $trigger.on(eventType, selector, animate) :
                    $trigger.on(eventType, animate);

                function animate(e){
                    var $trigger = $(this);
                    if(isAnimating){
                        return false;
                    }

                    if(!before($animateTarget, $trigger, options.beforeOptions)){
                        return false;
                    }

                    isAnimating = true;

                    $animateTarget.addClass($animateTarget.animateClass + ' ' +
                            $animateTarget.finalClass).on( animEndEventName, function(){
                        $animateTarget.off(animEndEventName);
                        reset($animateTarget, $trigger);
                    })


                    if(!support){
                        reset($animateTarget, $trigger);
                    }

                    during instanceof Function && during($animateTarget, $trigger, options.duringOptions);

                    if((bubble instanceof Function && bubble()) || bubble){
                        return true;
                    }
                    return false;
                }

                function reset( $target, $trigger){
                    isAnimating = false;
                    $target.attr('class', $target.data('originClassList') + ' ' + $animateTarget.finalClass);
                    after instanceof Function && after($target, $trigger, options.afterOptions);
                }
            }
            init();
        }
    });
});
