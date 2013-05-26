var mongoose = require('mongoose'),
    utils    = require('../libs/utils'),
    Schema = mongoose.Schema;

var TagSchema = new Schema({
    name: String,
    slug: String
});

TagSchema.pre('save', function(next) {
    if( !this.name ) next();
    this.slug = utils.slugify(this.name);
    next();
});

module.exports = mongoose.model('Tag', TagSchema);
