const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

mongoose.plugin(slug);
mongoose.plugin(mongooseDelete,{
    deletedAt: true,
    overrideMethods: true
});

const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    img: {type: String, minLength: 1},
    vID: {type: String, require: true},
    slug: {type: String, slug: "name", require: true, unique: true},
}, 
{
    timestamps: true,
});

module.exports = mongoose.model('Course', Course)