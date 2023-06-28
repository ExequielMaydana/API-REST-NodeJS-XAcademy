const uuid = require("uuid");
const users = require("../models/users.models");
const { hashPassword } = require("../libs/cryp");

const generateData = async () => {
  try {
    const userFound = await users.findAll({
      where: {
        email: "admin@gmail.com",
      },
    });

    if (userFound.length > 0) return;

    await users.create({
      id: uuid.v4(),
      full_name: "admin",
      email: "admin@gmail.com",
      password: hashPassword("admin"),
    });
  } catch (error) {
    console.error("Error al insertar los datos de usuario:", error);
  }
};

module.exports = {
  generateData,
};
