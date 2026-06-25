const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:", // banco em memória (OBRIGATÓRIO do enunciado)
  logging: false,
});

module.exports = sequelize;