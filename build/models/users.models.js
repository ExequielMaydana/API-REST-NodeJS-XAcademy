"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
var _require2 = require("../database"),
  db = _require2.db;
var users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3],
        msg: "El nombre no puede contener menos de 3 caracteres"
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true,
    validate: {
      isEmail: {
        args: true,
        msg: "Por favor, proporciona una dirección de correo electrónico válida"
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
module.exports = users;