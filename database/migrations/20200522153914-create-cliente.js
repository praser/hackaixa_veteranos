'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj: {
        type: Sequelize.STRING
      },
      faturamento: {
        type: Sequelize.DECIMAL
      },
      endereco: {
        type: Sequelize.STRING
      },
      dataConstituicao: {
        type: Sequelize.DATE
      },
      nomeFantasia: {
        type: Sequelize.STRING
      },
      razaoSocial: {
        type: Sequelize.STRING
      },
      finalidade: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clientes');
  }
};