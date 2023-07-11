'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addConstraint('Budgets', {
      fields: ['status_id'],
      type: 'foreign key',
      name: 'FK_STATUS_BUDGET',
      references: {
        table: 'StatusBudgets',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Budgets', 'FK_STATUS_BUDGET');

  }
};