'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    cnpj: DataTypes.STRING,
    faturamento: DataTypes.DECIMAL,
    endereco: DataTypes.STRING,
    dataConstituicao: DataTypes.DATE,
    nomeFantasia: DataTypes.STRING,
    razaoSocial: DataTypes.STRING,
    finalidade: DataTypes.STRING
  }, {});
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};