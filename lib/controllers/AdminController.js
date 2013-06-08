
exports.index = function(req, res) {
    res.render('/views/index.html');
};

exports.login = function(req, res) {
    res.send('login');
};
