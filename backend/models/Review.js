const { Sequelize, DataTypes } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Review = sequelize.define("reviews", {
  // Userテーブル
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  user: {
    type: Sequelize.STRING,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  user_birth_place: {
    type: Sequelize.STRING,
  },
  reviewed_at: {
    type: Sequelize.STRING,
  },
  review: {
    type: Sequelize.STRING,
  },
  post_information_id: {
    type: Sequelize.STRING,
  },
});
Review.sync({ alter: true });

module.exports = Review;
