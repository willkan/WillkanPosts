seajs.config({
    alias: {
        underscore: 'gallery/underscore/1.4.4/underscore',
        $: 'willkan/foundation/4.3.1/vendor/zepto',
        backbone: 'gallery/backbone/1.0.0/backbone',
        handlebars: 'willkan/handlebars/1.0.0/handlebars.runtime',
        modernizr: 'utils/modernizr'
    },
    paths: {
        utils: '/public/scripts/example/utils',
        static: '/public/scripts/example/static',
        logic: '/public/scripts/example/logic',
        templates: '/public/scripts/example/templates',
        foundation: 'willkan/foundation/4.3.1/foundation'
    }
})