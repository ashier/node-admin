
/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    util = require('util');

var app = express();

// config and routes
require('./config/configure')(app, express);
require('./config/routes')(app);

// settings
var SETTINGS = app.settings;
// database
var DB_SETTINGS = SETTINGS.database;


var DB_URL = util.format(
                    'mongodb://%s%s%s/%s',
                    (DB_SETTINGS.user ?
                        util.format(
                            '%s:%s@',
                            DB_SETTINGS.user,
                            DB_SETTINGS.password
                            ) : ''
                    ),
                    DB_SETTINGS.host,
                    (DB_SETTINGS.port ? DB_SETTINGS.port + ':' : ''),
                    DB_SETTINGS.database
                );

// connect to mongodb
mongoose.connect(DB_URL);

// listen
app.listen(SETTINGS.port,
    function() {
        console.log(
            'Express server listening on port ' +
            SETTINGS.port
        );
    }
);
