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
