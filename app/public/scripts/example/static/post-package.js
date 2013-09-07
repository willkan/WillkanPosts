define(function(require, exports, module){
    return {
        post:[
            {
                "options":{
                    "subs":{
                        "sub1":"Backbone-Sub1"
                    },
                    "plugins":{
                        "plugin1": require("./demo/backbone/demo")
                    }
                },
                "title": "Backbone-View",
                "postName": "Backbone-View"
            }
        ]
    }
});