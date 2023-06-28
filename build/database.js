"use strict";

var _require = require("sequelize"),
  Sequelize = _require.Sequelize;
var db = new Sequelize({
  host: "localhost",
  dialect: "sqlite",
  storage: "./db/libraries.sqlite",
  logging: false
});
module.exports = {
  db: db
};