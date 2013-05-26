var mongoose = require('mongoose'),
    text    = require('../utils/text'),
    Schema = mongoose.Schema;

var TagSchema = new Schema({
    name: String,
    slug: String
});

TagSchema.pre('save', function(next) {
    if( !this.name ) next();
    this.slug = text.slugify(this.name);
    next();
});

module.exports = mongoose.model('Tag', TagSchema);
