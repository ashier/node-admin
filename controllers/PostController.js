
var Post = require('../models/Post');

exports.index = function(req, res){
  res.send('Post index');
};

exports.new = function(req, res){
  res.send('new Post');
};

exports.create = function(req, res){
  res.send('create Post');
};

exports.show = function(req, res){
  res.send('show Post ' + req.params.slug);
};

exports.edit = function(req, res){
  res.send('edit Post ' + req.params.slug);
};

exports.update = function(req, res){
  res.send('update Post ' + req.params.slug);
};

exports.destroy = function(req, res){
  res.send('destroy Post ' + req.params.slug);
};
