const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  dialect: "sqlite",
  storage: "./db/libraries.sqlite",
  logging: false
});

module.exports = {
  db,
};
