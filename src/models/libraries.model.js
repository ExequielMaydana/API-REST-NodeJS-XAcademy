const { DataTypes } = require("sequelize");
const { db } = require("../database");

const libraries = db.define("libraries", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3],
        msg: "El nombre no puede contener menos de 3 caracteres",
      },
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = libraries;
