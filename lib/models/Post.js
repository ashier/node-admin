var mongoose = require('mongoose'),
    moment = require('moment'),
    text    = require('../utils/text'),
    Tag    = require('../models/Tag'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    schemaOptions = {toJSON: {virtuals: true}};

var PostSchema = new Schema({
    title: String,
    author: {
        first: String,
        last: String
    },
    contents: String,
    html: String,
    slug: String,
    tags: [{type: ObjectId, ref: 'Tag'}],
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now}
}, schemaOptions);

PostSchema.virtual('author_fullname').get(function() {
    return this.author.first + " " + this.author.last;
});

PostSchema.virtual('formatted_date').get(function() {
    var df = moment(this.created).fromNow();
    return df;
});

PostSchema.pre('save', function(next) {
    if( !this.title ) next();
    this.slug = text.slugify(this.title);
    next();
});

module.exports = mongoose.model('Post', PostSchema);
