casper.test.begin("demo", function(test) {

    casper.start('http://localhost:3000', function(){
        test.assertTitleMatch(/前端/, 'title');
    });

    casper.then(function(){
        this.waitForSelector('.markdown', function(){
            test.assert(true, 'post loaded');
        });
    });

    casper.then(function(){
        this.waitForSelector('.demo', function(){
            test.assert(true, 'demo loaded');
            this.click('#add');
            this.click('#add');
            test.assertElementCount('.demo span', 2, 'click add:backbone');
            this.click('#clear');
            test.assertElementCount('.demo span', 0, 'click clear:backbone');
        });

    });


    casper.run(function(){
        test.done();
    })
});
