
var Post = require('../models/Post');
var Tag = require('../models/Tag');

exports.index = function(req, res){
  res.send('Admin index');
};

exports.login = function(req, res){
  res.send('login');
};
