"use strict";

var _require = require("sequelize"),
  DataTypes = _require.DataTypes;
var _require2 = require("../database"),
  db = _require2.db;
var libraries = require("./libraries.model");
var books = db.define("books", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  isbn: {
    type: DataTypes.INTEGER,
    unique: true,
    trim: true,
    allowNull: false,
    validate: {
      isInt: {
        args: true,
        msg: "El ISBN debe ser un número entero"
      }
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3],
        msg: "El nombre del autor debe tener al menos 3 caracteres"
      }
    }
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  libraryId: {
    type: DataTypes.UUID,
    field: "library_id",
    references: {
      model: libraries,
      key: "id"
    }
  }
});
module.exports = books;