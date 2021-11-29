const { Sequelize, DataTypes } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const UserFavoritePages = sequelize.define(
  "user_favorite_pages",
  {
    // Userテーブル
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    fovorite_page_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    underscored: true,
  }
);
UserFavoritePages.sync({ alter: true });

module.exports = UserFavoritePages;
