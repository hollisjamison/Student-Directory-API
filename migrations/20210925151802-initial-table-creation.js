'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('students', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      age: { type: Sequelize.INTEGER },
      address: { type: Sequelize.STRING },
      gpa: { type: Sequelize.FLOAT },
      major: { type: Sequelize.STRING },
      image: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('students')
  }
};
