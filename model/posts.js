const Sequelize = require("sequelize");
const { connection } = require("./connection");
const posts = connection.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  post: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
module.exports = {
  posts,
};
