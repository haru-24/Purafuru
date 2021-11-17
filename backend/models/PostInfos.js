const { Sequelize, DataTypes } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const PostInfo = sequelize.define("post_infos", {
  // Userテーブル
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  genre: {
    type: Sequelize.STRING,
  },
  place_name: {
    type: Sequelize.STRING,
  },
  prefecture: {
    type: Sequelize.STRING,
  },
  post_number: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  apeal_point: {
    type: Sequelize.STRING,
  },
  recommendation: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  post_user: {
    type: Sequelize.STRING,
  },
  post_history_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  favorites: {
    type: Sequelize.INTEGER,
  },
  posted_at: {
    type: Sequelize.STRING,
  },
});
PostInfo.sync({ alter: true });

module.exports = PostInfo;
