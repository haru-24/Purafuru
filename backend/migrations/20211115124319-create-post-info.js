'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      place_name: {
        type: Sequelize.STRING
      },
      prefecture: {
        type: Sequelize.STRING
      },
      post_number: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      apeal_point: {
        type: Sequelize.STRING
      },
      recommendation: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      post_user: {
        type: Sequelize.STRING
      },
      post_history_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      favorites: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post_infos');
  }
};