
/*
* Routes
*/

var AdminController = require('../controllers/AdminController');
var PostController = require('../controllers/PostController');

exports = module.exports = function(app) {

    // admin
    app.get('/', AdminController.index);
    app.get('/login', AdminController.login);
    // app.get('/logout', AdminController.logout);

    // posts
    app.get('/post', PostController.index);
    app.get('/post/new', PostController.new);
    app.post('/post', PostController.create);
    app.get('/post/:slug', PostController.show);
    app.get('/post/:slug/edit', PostController.edit);
    app.put('/post/:slug', PostController.update);
    app.delete('/post/:slug', PostController.destroy);

};
