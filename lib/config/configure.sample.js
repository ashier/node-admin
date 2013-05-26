
/*
* Configuration
*/

exports = module.exports = function(app, express) {
    app.configure(function() {
        app.set('port', process.env.PORT || 3000);
        app.set(
            'database', {
                'user': '',
                'password': '',
                'host': 'localhost',
                'port': '27017',
                'database': 'nodeblog'
            }
        );

        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);

        // View Options
        app.set("view options", {layout: false});

        app.use('/static', express.static(__dirname + '/public'));
        app.use(express.static(__dirname + '/views'));
    });

    app.configure('development', function() {
        app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    });

    app.configure('production', function() {
        app.use(express.errorHandler());
    });
};
