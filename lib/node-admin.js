
/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    util = require('util');

var app = express();

function generateDBsettings(db_settings) {
    return util.format(
                'mongodb://%s%s%s/%s',
                (db_settings.user ?
                    util.format(
                        '%s:%s@',
                        db_settings.user,
                        db_settings.password
                        ) : ''
                ),
                db_settings.host,
                (db_settings.port ? db_settings.port + ':' : ''),
                db_settings.database
            );
}

exports.init = function () {
    return {
        app: app,
        express: express
    };
};

exports.connect = function () {

    // initalize admin routes
    require('./config/routes')(app);

    // connect to mongodb
    mongoose.connect(generateDBsettings(app.settings.database));

    app.listen(app.settings.port,
        function() {
            console.log(
                'Express server listening on port ' +
                app.settings.port
            );
        }
    );
};
