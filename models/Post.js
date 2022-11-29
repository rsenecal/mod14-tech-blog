const mongoose = require('mongoose');
const {  model } = require('mongoose');
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true},
  description: {type: String, required: true},
  content: {type: String, rquired: true}
});

const Post = model('Post', PostSchema)

module.exports = Post;
