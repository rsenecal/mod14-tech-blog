// const mongoose = require('mongoose');
// const {  model } = require('mongoose');
// const PostSchema = new mongoose.Schema({
//   title: { type: String, required: true},
//   description: {type: String, required: true},
//   content: {type: String, rquired: true}
// });

// const Post = model('Post', PostSchema)

// module.exports = Post;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
