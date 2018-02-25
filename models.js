const mongoose = require('mongoose');


const blogPostSchema = mongoose.Schema({

  title: {type: String, required: true},
  author: {firstName: {type: String, required: true}, lastName: {type: String, required: true}},
  content: {type: String, required: true},

});

blogPostSchema.methods.serialize  = function() {
  return {
    id: this._id,
    title: this.title,
    author: `${this.author.firstName} ${this.author.lastName}`,
    content: this.content,
  };
}

const BlogPost = mongoose.model('BlogPost', blogPostSchema, 'blogposts');

module.exports = { BlogPost };